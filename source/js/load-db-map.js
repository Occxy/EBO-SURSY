var map_table = localStorage.getItem('map_table'); 

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

disable_li();

var counter = 0;
var progressbar_count = 0;
var step = 0;
var width = 0;

var map;
var mapConfig = {
    init: {
        addMarker: true,
        addDraw: true,
        addTrack: true,
        addCoordinates: true,
    },
    draw: {
        drawType: null,
        activeDraw: null,
        hasActiveDraw: false,
        highlightList: [],
        highlightStyle: null
    },
    track: null,
    layers: {
        marker: null,
        draw: null,
        track: null
    }
};
	
var lat, lng;
var marker_list = [];
	
if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DB = new PouchDB(remote_couchdb + map_table + debug);
} else {
	var DB = new PouchDB(map_table + debug);
};

DB.allDocs({
	include_docs: true,
	attachments: true
}).then(function (result) {
	// handle result
	if (typeof(JSON.stringify(result)) != "undefined"){  
	   		
   		var dataTablesData = JSON.parse(JSON.stringify(result));
    					
		var fisrt_lat_lng = false;
		var first_lat, first_lng;
			
   		dataTablesData.rows.forEach(function(row){ 
	    			
   			try {		    	
   				
   				var Lat_degre_dec = row.doc.Lat_degre_dec;
   				var Long_degre_dec = row.doc.Long_degre_dec;
   				var Longitude = row.doc.Longitude;
   				var Latitude = row.doc.Latitude;
   				
   				var espece = row.doc.Espece_terrain;
   				
   				if ((Lat_degre_dec !== '') && (Long_degre_dec !== '') && (Longitude !== '') && (Latitude !== '')) {
   					
   					Lat_degre_dec = Lat_degre_dec.replace(',', '.');
   					lat = parseFloat(Lat_degre_dec);
	   				
	   				Long_degre_dec = Long_degre_dec.replace(',', '.');
	   				lng_dir = Longitude;
	   				if (lng_dir == "E") {
	   					lng = parseFloat(Long_degre_dec);		    					
	   				} else if (lng_dir == "W")  {
	   					lng = 0 - parseFloat(Long_degre_dec);
			    	};
			    	
			    	console.log('lat : ' + lat);
			    	console.log('lng : ' + lng);
	   				
					if ((isFloat(lat)) && (isFloat(lng))) {
						marker_list.push(new ol.Feature({
	  	            		geometry: new ol.geom.Point(ol.proj.fromLonLat([lng, lat])),
	  	            		name: lng
	  		        	}));
							
						if (!fisrt_lat_lng) {
							first_lat = lat;
							first_lng = lng;	
							fisrt_lat_lng = true;
						};
					};
				}
	   				
		    }catch(err) {
			};	    	
		});		
	   		
   		var mapMarkerLayer = new ol.layer.Vector({
   	        source: new ol.source.Vector({
   	            features: marker_list
   	        }),
   	        style: new ol.style.Style({
   		   	      		image: new ol.style.Icon(({
   		   	      			scale: 0.7,
   		            		rotateWithView: false,
   		            		anchor: [0.5, 1],
   		            		anchorXUnits: 'fraction',
   		            		anchorYUnits: 'fraction',
   		             		opacity: 1,
   		   	        		src: 'img/marker.png'
   		   	        	}))
   		   			})
   	    });
			
   	 	map = new ol.Map({
   		    target: 'map',
   		    layers: [
   		        new ol.layer.Tile({
   		            source: new ol.source.OSM(),
   		        })
   		    ],
   		    view: new ol.View({
   		        center: ol.proj.fromLonLat([first_lng, first_lat]),
   		        zoom: 6
   		    })
   		});
   	    
   	    map.addLayer(mapMarkerLayer);
   	 	mapConfig.layers.marker = mapMarkerLayer;
   	 	
   	 	//initialisation du popup
	   	/*var container = document.getElementById('popup');
	   	var content = document.getElementById('popup-content');
	   	var closer = document.getElementById('popup-closer');
	
	   	var overlay = new ol.Overlay({
	   		element: container,
	   	    autoPan: true,
	   	    autoPanAnimation: {
	   	        duration: 250
	   	    }
     	});
	   	map.addOverlay(overlay);
	
	   	closer.onclick = function() {
	   	    overlay.setPosition(undefined);
	   	    closer.blur();
	   	    return false;
	   	};

	    map.on('singleclick', function (event) {
	        if (map.hasFeatureAtPixel(event.pixel) === true) {
	            var coordinate = event.coordinate;

	            //content.innerHTML = '<b>Hello world!</b><br />I am a popup.';
	            content.innerHTML = name;
	            overlay.setPosition(coordinate);
	        } else {
	            overlay.setPosition(undefined);
	            closer.blur();
	        }
	    });*/
   	 	
   	 	/*var element = document.getElementById('popup');
	
	    var popup = new ol.Overlay({
	    	element: element,
	    	positioning: 'bottom-center',
	    	stopEvent: false,
	    	offset: [0, -50]
	    });
	    map.addOverlay(popup);
	
	    // display popup on click
	    map.on('click', function(evt) {
	    	var feature = map.forEachFeatureAtPixel(evt.pixel,
	    		function(feature) {
	            	return feature;
	            });
	    	if (feature) {
	    		var coordinates = feature.getGeometry().getCoordinates();
	    		popup.setPosition(coordinates);
	    		$(element).popover({
		           'placement': 'top',
		           'html': true,
		           'content': feature.get('name')
		        });
		        $(element).popover('show');
	    	} else {
	    		$(element).popover('destroy');
	    	}
	     });
	
	     // change mouse cursor when over marker
	     map.on('pointermove', function(e) {
	    	 if (e.dragging) {
	    		 $(element).popover('destroy');
	    		 return;
	    	 }
	    	 var pixel = map.getEventPixel(e.originalEvent);
	    	 var hit = map.hasFeatureAtPixel(pixel);
	    	 map.getTarget().style.cursor = hit ? 'pointer' : '';
	     });*/
   	 	var container = document.getElementById('popup');
	   	var closer = document.getElementById('popup-closer');
	   	var content = document.getElementById('popup-content');
	   	
	   	closer.onclick = function() {
	   	  overlay.setPosition(undefined);
	   	  closer.blur();
	   	  return false;
	   	};

	   	var overlay = new ol.Overlay({
	   		element: container,
		   	autoPan: true,
		   	autoPanAnimation: {
		   		duration: 250
		   	}
		});
	   	
	   	map.addOverlay(overlay)
	    
	    map.on('singleclick', function(evt) {
	      var name = map.forEachFeatureAtPixel(evt.pixel, function(feature) {
	        return feature.get('name');
	      });
	      var coordinate = evt.coordinate;
	      content.innerHTML = name;
	      overlay.setPosition(coordinate);
	    });
	   	
	    map.on('pointermove', function(evt) {
	    	 map.getTargetElement().style.cursor = map.hasFeatureAtPixel(evt.pixel) ? 'pointer' : '';
	    });

   	 	
   	 	enable_li();
   	 			   		
	}
}).catch(function (err) {
	console.log(err);
}); 	
	
function isFloat(n) {
    return n === +n && n !== (n|0);
}


