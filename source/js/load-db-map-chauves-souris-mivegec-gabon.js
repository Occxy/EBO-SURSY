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
                DB = new PouchDB(remote_couchdb + 'animals_mivegec_gabon' + debug, {
                    skip_setup: true,
                });
            } else {
                DB = new PouchDB('animals_mivegec_gabon' + debug);
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
                            village: row.doc.village ? row.doc.village.trim() : 'Unknown',
                            especes: row.doc.especes ? row.doc.especes.trim() : 'Unknown'
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
            return alasql('SELECT Lon AS Point_GPS_LONG, Lat AS Point_GPS_LAT, village, especes, COUNT(*) AS _Count FROM ? GROUP BY Lon, Lat, village, especes ORDER BY Lon, Lat', [tab]);
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
                        villages: []
                    };
                }
                markersMap[key].villages.push({
                    village: entry.village,
                    especes: entry.especes,
                    Count: entry._Count
                });
            });

            for (var key in markersMap) {
                var entry = markersMap[key];
                var lat_lng = `${entry.Lat}_${entry.Lon}`;
                var contentString = entry.villages.map(function(v) {
                    return `<div><p>village: ${v.village}<br>especes: ${v.especes}<br>Count: ${v.Count}</p></div>`;
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