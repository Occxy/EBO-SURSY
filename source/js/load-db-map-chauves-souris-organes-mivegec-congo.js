var mapOptions = {
            zoom: 10, // Initial zoom level
            center: { lat: 16.2650, lng: -61.5510 } // Central position of the map (Guadeloupe)
        };

        var map;
        var tab = [];
        var bounds = new google.maps.LatLngBounds();
        var lastInfoWindow; // Define the lastInfoWindow variable here

        function initializeMap() {
            console.log("Initializing map...");
            map = new google.maps.Map(document.getElementById('map'), mapOptions);
            console.log("Map object created:", map);

            var remote_couchdb = localStorage.getItem('remote_couchdb');
            var debug = localStorage.getItem('debug') || '';
            var DB;

            if (localStorage.getItem('web') === 'oui') {
                DB = new PouchDB(remote_couchdb + 'chauves_souris_organes_mivegec_congo' + debug, {
                    skip_setup: true,
                });
            } else {
                DB = new PouchDB('chauves_souris_organes_mivegec_congo' + debug);
            }

            DB.allDocs({
                include_docs: true,
                attachments: true
            }).then(function(result) {
                console.log("Data fetched from DB:", result);
                processData(result.rows);
                var groupedData = groupData();
                console.log("Grouped data:", groupedData);
                createMarkers(groupedData);
                map.fitBounds(bounds); // Fit the map to the bounds of the markers
            }).catch(function(error) {
                console.error("Error fetching data:", error);
            });
        }

        function processData(rows) {
            tab = [];
            rows.forEach(function(row) {
                try {
                    var lon = parseFloat(row.doc.Point_GPS_LONG.trim()).toFixed(3);
                    var lat = parseFloat(row.doc.Point_GPS_LAT.trim()).toFixed(3);
                    if (!isNaN(lon) && !isNaN(lat)) {
                        var obj = {
                            Lon: lon,
                            Lat: lat,
                            Village: row.doc.Village ? row.doc.Village.trim() : 'Unknown',
                            Espece: row.doc.Espece ? row.doc.Espece.trim() : 'Unknown'
                        };
                        tab.push(obj);
                    } else {
                        console.warn("Invalid GPS coordinates:", row.doc);
                    }
                } catch (error) {
                    console.error("Error processing row:", error, row);
                }
            });
            console.log("Processed data:", tab);
        }

        function groupData() {
            return alasql('SELECT Lon AS Point_GPS_LONG, Lat AS Point_GPS_LAT, Village, Espece, COUNT(*) AS _Count FROM ? GROUP BY Lon, Lat, Village, Espece ORDER BY Lon, Lat', [tab]);
        }

        function createMarkers(groupedData) {
            console.log("Grouped data:", groupedData);
            var markersMap = {};

            groupedData.forEach(function(entry) {
                var key = `${entry.Point_GPS_LAT}_${entry.Point_GPS_LONG}`;
                if (!markersMap[key]) {
                    markersMap[key] = {
                        Lat: entry.Point_GPS_LAT,
                        Lon: entry.Point_GPS_LONG,
                        Villages: []
                    };
                }
                markersMap[key].Villages.push({
                    Village: entry.Village,
                    Espece: entry.Espece,
                    Count: entry._Count
                });
            });

            for (var key in markersMap) {
                var entry = markersMap[key];
                var lat_lng = `${entry.Lat}_${entry.Lon}`;
                var contentString = entry.Villages.map(function(v) {
                    return `<div><p>Village: ${v.Village}<br>Espece: ${v.Espece}<br>Count: ${v.Count}</p></div>`;
                }).join('');

                createMarker(lat_lng, contentString);
            }
        }

        function createMarker(lat_lng, contentString) {
            var [lat, lng] = lat_lng.split('_');
            var markerPosition = new google.maps.LatLng(parseFloat(lat), parseFloat(lng));
            var marker = new google.maps.Marker({
                position: markerPosition,
                map: map,
                opacity: 0.5
            });

            bounds.extend(markerPosition); // Extend the bounds to include each marker's position

            var infowindow = new google.maps.InfoWindow({
                content: `<div style="background-color: lightgreen; color: dark;">${contentString}</div>`
            });

            marker.addListener('click', function() {
                if (lastInfoWindow) {
                    lastInfoWindow.close();
                }
                infowindow.open(map, marker);
                lastInfoWindow = infowindow;
            });

            marker.setMap(map);
        }

        window.onload = initializeMap;