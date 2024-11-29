var map_table = localStorage.getItem('map_table'); 

disable_li();

var interface_publique;
var obj_interface_publique;

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
var marker_list_2 = [];
var marker_list_3 = [];
var marker_list_4 = [];
var marker_list_5 = [];

var id = '' 
var newid = '';
var count_id = 0;
var lastLat_degre_dec = '';
var lastLong_degre_dec = '';
var lastLatitude = '';
var lastLongitude = '';
var lastDate = '';
var lastFamille = '';
var lastGenre = '';
var lastEspece = '';
var lastSamples = '';
var lastCadre = '';

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DB = new PouchDB(remote_couchdb + map_table + debug);
} else {
	var DB = new PouchDB(map_table + debug);
};

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DB2 = new PouchDB(remote_couchdb + map_table + '_2' + debug);
} else {
	var DB2 = new PouchDB(map_table + '_2' + debug);
};

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DB3 = new PouchDB(remote_couchdb + map_table + '_3' + debug);
} else {
	var DB3 = new PouchDB(map_table + '_3' + debug);
};

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DB4 = new PouchDB(remote_couchdb + map_table + '_4' + debug);
} else {
	var DB4 = new PouchDB(map_table + '_4' + debug);
};

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DB5 = new PouchDB(remote_couchdb + map_table + '_5' + debug);
} else {
	var DB5 = new PouchDB(map_table + '_5' + debug);
};

var tab = new Array();

function getYear (str) {
    var year = (/\b\d{4}\b/).exec(str);
  return year === null ? 'Now' : year[0];
}

DB.allDocs({  		
	include_docs: true,
	attachments: true
}).then(function (result) {
	// handle result
	if (typeof(JSON.stringify(result)) != "undefined"){  
			
		var tableData = JSON.parse(JSON.stringify(result));
			
		tableData.rows.forEach(function(row){   
   			try {
   				//tab[i] = new Array();
   				var obj = new Object();
   				obj.Point_GPS_LAT = row.doc.Point_GPS_LAT;
   				obj.Point_GPS_LONG = row.doc.Point_GPS_LONG;
   				obj.Dataset = 1;
   				/*obj.Lat_degre_dec = row.doc.Lat_degre_dec;
   				obj.Latitude = row.doc.Latitude;
   				obj.Long_degre_dec = row.doc.Long_degre_dec;
   				obj.Longitude = row.doc.Longitude;
   				var date = row.doc.Date;
   				obj.Date = getYear(date);
   				obj.Famille = row.doc.Famille;
   				obj.Genre = row.doc.Genre;
   				obj.Espece = row.doc.Espece;
   				obj.Collecte_sang_DBS = row.doc.Collecte_sang_DBS;*/
   				tab.push(obj);
   				//i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
			
   	}
}).then(function () {
	
	DB2.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
				
			var tableData = JSON.parse(JSON.stringify(result));
				
			tableData.rows.forEach(function(row){   
	   			try {
	   				//tab[i] = new Array();
	   				var obj = new Object();
	   				obj.Point_GPS_LAT = row.doc.Point_GPS_LAT;
	   				obj.Point_GPS_LONG = row.doc.Point_GPS_LONG;
	   				obj.Dataset = 2;
	   				/*obj.Lat_degre_dec = row.doc.Lat_degre_dec;
	   				obj.Latitude = row.doc.Latitude;
	   				obj.Long_degre_dec = row.doc.Long_degre_dec;
	   				obj.Longitude = row.doc.Longitude;
	   				var date = row.doc.Date;
	   				obj.Date = getYear(date);
	   				obj.Famille = row.doc.Famille;
	   				obj.Genre = row.doc.Genre;
	   				obj.Espece = row.doc.Espece;
	   				obj.Collecte_sang_DBS = row.doc.Collecte_sang_DBS;*/
	   				tab.push(obj);
	   				//i++;	
	   				
	   			} catch(error) {
					console.log(error);
				};
			});	
				
	   	}
	}).then(function () {
		
		DB3.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
					
				var tableData = JSON.parse(JSON.stringify(result));
					
				tableData.rows.forEach(function(row){   
		   			try {
		   				//tab[i] = new Array();
		   				var obj = new Object();
		   				obj.Point_GPS_LAT = row.doc.Point_GPS_LAT;
		   				obj.Point_GPS_LONG = row.doc.Point_GPS_LONG;
		   				obj.Dataset = 3;
		   				tab.push(obj);
		   				//i++;	
		   				
		   			} catch(error) {
						console.log(error);
					};
				});	
					
		   	}
		}).then(function () {
			
			
			DB4.allDocs({  		
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				if (typeof(JSON.stringify(result)) != "undefined"){  
						
					var tableData = JSON.parse(JSON.stringify(result));
						
					tableData.rows.forEach(function(row){   
			   			try {
			   				//tab[i] = new Array();
			   				var obj = new Object();
			   				obj.Point_GPS_LAT = row.doc.Point_GPS_LAT;
			   				obj.Point_GPS_LONG = row.doc.Point_GPS_LONG;
			   				obj.Dataset = 4;
			   				tab.push(obj);
			   				//i++;	
			   				
			   			} catch(error) {
							console.log(error);
						};
					});	
						
			   	}
			}).then(function () {
				
				DB5.allDocs({  		
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					if (typeof(JSON.stringify(result)) != "undefined"){  
							
						var tableData = JSON.parse(JSON.stringify(result));
							
						tableData.rows.forEach(function(row){   
				   			try {
				   				//tab[i] = new Array();
				   				var obj = new Object();
				   				obj.Point_GPS_LAT = row.doc.Point_GPS_LAT;
				   				obj.Point_GPS_LONG = row.doc.Point_GPS_LONG;
				   				obj.Dataset = 5;
				   				tab.push(obj);
				   				//i++;	
				   				
				   			} catch(error) {
								console.log(error);
							};
						});	
							
				   	}
				}).then(function () {
		    		
					var tabOut = new Array();
					
					//var resBlood = alasql('SELECT Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille, Genre, Espece, COUNT(*) AS Blood FROM ? WHERE (Collecte_sang_DBS = "Oui") GROUP BY Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Long_degre_dec, Date, Famille, Genre, Espece', [tab] );
					var resBlood = alasql('SELECT Point_GPS_LAT, Point_GPS_LONG, Dataset, COUNT(*) AS Blood FROM ? GROUP BY Point_GPS_LAT, Point_GPS_LONG, Dataset', [tab] );
					
					console.log(resBlood)
					for (var j=0;j<resBlood.length;j++) {
						tabOut.push(resBlood[j]);
					}
					
					interface_publique = JSON.stringify(resBlood);
					/*var tabInterfacePublique = new Array();
					for (var j=0;j<resOut.length;j++) {
						tabInterfacePublique.push(resOut[j]);
					}
					
					var resInterfacePublique = alasql('SELECT Lat_degre_dec, Long_degre_dec, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Sampled_individuals FROM ? GROUP BY Lat_degre_dec, Long_degre_dec, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tabInterfacePublique] );
					console.log(resInterfacePublique)*/
				
					//localStorage['interface_publique'] = JSON.stringify(resOut);
					
					/*CSV = 'photo;Lat_degre_dec;Long_degre_dec;Scientific name;' +
					  'Sampled individuals;Samples;Date\r\n';	*/
				
					obj_interface_publique = JSON.parse(interface_publique);
					
					var fisrt_lat_lng = false;
					var first_lat, first_lng;
							
				   	//dataTablesData.rows.forEach(function(row){ 
					obj_interface_publique.forEach(function(row, index){
							
				   		try {	
				  			
				   			//obj[row.doc.Lat_degre_dec] = row.doc.Lat_degre_dec;
				   			
				   			var Lat_degre_dec = row/*.doc*/.Point_GPS_LAT;
				   			
				   			//var element = {}, tab = [];
				   			
				   			
				   			//alert(Lat_degre_dec.replace(',', '.');
				   			   			
				   			var Latitude = row/*.doc*/.Latitude;
				   			var Long_degre_dec = row/*.doc*/.Point_GPS_LONG;
				   			var Longitude = row/*.doc*/.Longitude;
				   			
				   			
				   			
				   			newid = row.Point_GPS_LAT + row.Point_GPS_LONG;
				   			newid = newid.replace(/,/g, '');
				   			//newid = newid.replace(',', '');
				   			//newid = newid.replace('-', '');
				   			newid = newid.replace(' ', '');
				   			newid = newid.replace('.', '');
				   			
				   			if (id !== newid) {
				   				
						     	id = row.Point_GPS_LAT + row.Point_GPS_LONG;
				   				id = id.replace(/,/g, '');
				   	   			//id = id.replace(',', '');
				   	   			//id = id.replace('-', '');
				   	   			id = id.replace(' ', '');
				   	   			id = id.replace('.', '');
				   	   			
				   	   			count_id++;
								console.log(newid + '-' + id);
								console.log(count_id);
								
								console.log(lastCadre);
								if ((lastLat_degre_dec !== '') && (lastLong_degre_dec !== '')/* && (Longitude !== '') && (Latitude !== '')*/) {
									
									lastLat_degre_dec = lastLat_degre_dec.replace(',', '.');
					   				lat = parseFloat(Lat_degre_dec);
						   				
					   				lastLong_degre_dec = lastLong_degre_dec.replace(',', '.');
						   			lng_dir = lastLongitude;
						   			lat_dir = lastLatitude;
						   			
						   			/*if (lat_dir == "N") {
						   				Lat_degre_dec = lastLat_degre_dec;
						   				lat = parseFloat(Lat_degre_dec);		    					
						   			} else if ((lat_dir == "S") || (lat_dir == ""))  {
						   				Lat_degre_dec = lastLat_degre_dec;
						   				lat = 0 - parseFloat(Lat_degre_dec);
								    };
								    
								    if (lng_dir == "E") {
						   				Long_degre_dec = lastLong_degre_dec;
						   				lng = parseFloat(Long_degre_dec);		    					
						   			} else if ((lng_dir == "W") || (lng_dir == ""))  {
						   				Long_degre_dec = lastLong_degre_dec;
						   				lng = 0 - parseFloat(Long_degre_dec);
								    };*/
						   			
						   			lat = parseFloat(Lat_degre_dec);
						   			lng = parseFloat(Long_degre_dec);
								    	
								   	console.log('lat : ' + lat);
								   	console.log('lng : ' + lng);
								   	
						   				
									if ((isFloat(lat)) && (isFloat(lng))) {
										
										if (row.Dataset == 1) {
											marker_list.push(new ol.Feature({
							  	           		geometry: new ol.geom.Point(ol.proj.fromLonLat([lng, lat])),
							  	           		datas: lastCadre,
							  	           		lat: lastLat_degre_dec, //+ lastLatitude,
							  	           		lng: lastLong_degre_dec //+ lastLongitude
							  	           		//espece : espece
							  		       	}));
										} else if (row.Dataset == 2) {
											marker_list_2.push(new ol.Feature({
							  	           		geometry: new ol.geom.Point(ol.proj.fromLonLat([lng, lat])),
							  	           		datas: lastCadre,
							  	           		lat: lastLat_degre_dec, //+ lastLatitude,
							  	           		lng: lastLong_degre_dec //+ lastLongitude
							  	           		//espece : espece
							  		       	}));
										} else if (row.Dataset == 3) {
											
											marker_list_3.push(new ol.Feature({
							  	           		geometry: new ol.geom.Point(ol.proj.fromLonLat([lng, lat])),
							  	           		datas: lastCadre,
							  	           		lat: lastLat_degre_dec, //+ lastLatitude,
							  	           		lng: lastLong_degre_dec //+ lastLongitude
							  	           		//espece : espece
							  		       	}));
										} else if (row.Dataset == 4) {
											marker_list_4.push(new ol.Feature({
							  	           		geometry: new ol.geom.Point(ol.proj.fromLonLat([lng, lat])),
							  	           		datas: lastCadre,
							  	           		lat: lastLat_degre_dec, //+ lastLatitude,
							  	           		lng: lastLong_degre_dec //+ lastLongitude
							  	           		//espece : espece
							  		       	}));
										} else if (row.Dataset == 5) {
											marker_list_5.push(new ol.Feature({
							  	           		geometry: new ol.geom.Point(ol.proj.fromLonLat([lng, lat])),
							  	           		datas: lastCadre,
							  	           		lat: lastLat_degre_dec, //+ lastLatitude,
							  	           		lng: lastLong_degre_dec //+ lastLongitude
							  	           		//espece : espece
							  		       	}));
										}
										
										if (!fisrt_lat_lng) {
											first_lat = lat;
											first_lng = lng;	
											fisrt_lat_lng = true;
										};
									};
								};
								
								lastLat_degre_dec = row.Point_GPS_LAT;
				   				lastLong_degre_dec = row.Point_GPS_LONG;
				   				lastLatitude = row.Latitude;
				   				lastLongitude = row.Longitude;
				   				lastDate = row.Date;
								lastFamille = row.Famille;
				   				lastGenre = row.Genre;
				   				lastEspece = row.Espece;
				   				lastTaxonomie = lastFamille + ' ' + lastGenre + ' ' + lastEspece;
								lastSamples = /*String(row.Blood)*/ addSamples(row) + '\n';
								/*console.log(lastDate);
								console.log(lastFamille  + ' ' + lastGenre + ' ' + lastEspece);
								console.log(lastSamples);*/
								lastCadre = lastDate + '<br>' + lastTaxonomie + '<br>' + lastSamples + '<br>'
								
				   			} else {
				   				if (id != '') {
				   					//if (lastFamille  + ' ' + lastGenre + ' ' + lastEspecerow.Lat_degre_dec != row.Famille_terrain + ' ' + row.Genre_terrain + ' ' + row.Espece_terrain) {
				   					
				   						lastLat_degre_dec = row.Point_GPS_LAT;
						   				lastLong_degre_dec = row.Point_GPS_LONG;
						   				lastLatitude = row.Latitude;
						   				lastLongitude = row.Longitude;
						   				lastDate = row.Date;
						   				lastFamille = row.Famille;
						   				lastGenre = row.Genre;
						   				lastEspece = row.Espece;
						   				lastTaxonomie = lastFamille + ' ' + lastGenre + ' ' + lastEspece;
						   				lastSamples = addSamples(row) + '<br>'/*String(row.Blood)*/;
						   				/*console.log(lastDate);
						   				console.log(lastFamille  + ' ' + lastGenre + ' ' + lastEspece);
						   				console.log(lastSamples);*/
						   				lastCadre = lastCadre + '<br>' + '----------' + '<br>' +
						   				            lastDate + '<br>' + lastTaxonomie + '<br>' + lastSamples + '<br>'
						   				//console.log(lastCadre);         
						   			//}
				   				}
				   				id = row.Lat_degre_dec + row.Long_degre_dec;
				   				id = id.replace(/,/g, ''); 
				   	   			//id = id.replace(',', '');
				   	   			//id = id.replace('-', '');
				   	   			id = id.replace(' ', '');
				   	   			id = id.replace('.', '');
				   	   			
						   	   	
				   			}
								
				   			/*element.id = id;
				   			element.Lat_degre_dec = Lat_degre_dec;
				   			tab.push(element);
				   			
				   			var id_value = tab.id;*/
				   			
				   			//var espece = row.Famille_terrain + ' ' +	row.Genre_terrain + ' ' + row.Espece_terrain;
				   			//var sampled_individuals = row.Sampled_individuals;
							//Samples = addSamples(row);
							//var date = row.Date;
				   				
				   			if (index === (obj_interface_publique.length -1)) {
				   				
				   				
				   				/*Lat_degre_dec = lastLat_degre_dec.replace(',', '.');
				   				lat = parseFloat(Lat_degre_dec);
					   				
				   				lastLong_degre_dec = lastLong_degre_dec.replace(',', '.');
					   			lng_dir = Longitude;
					   		    
							    if (lng_dir == "W") {
					   				Long_degre_dec = lastLong_degre_dec;
					   				lng = parseFloat(Long_degre_dec);		    					
					   			} else if ((lng_dir == "E") || (lng_dir == ""))  {
					   				Long_degre_dec = lastLong_degre_dec;
					   				lng = 0 - parseFloat(Long_degre_dec);
							    };
							    
				   				lastLat_degre_dec = row.Lat_degre_dec;
				   				lastLong_degre_dec = row.Long_degre_dec;
				   				lastLatitude = row.Latitude;
				   				lastLongitude = row.Longitude;
				   				lastDate = row.Date;
				   				lastFamille = row.Famille;
				   				lastGenre = row.Genre;
				   				lastEspece = row.Espece;
				   				lastTaxonomie = lastFamille + ' ' + lastGenre + ' ' + lastEspece;
				   				lastSamples = addSamples(row) + '<br>';
				   				lastCadre = lastCadre + '<br>' + '----------' + '<br>' +
				   				            lastDate + '<br>' + lastTaxonomie + '<br>' + lastSamples + '<br>'
				   				
					   	        // This is the last one.
				   				if ((isFloat(lat)) && (isFloat(lng))) {
									marker_list.push(new ol.Feature({
					  	           		geometry: new ol.geom.Point(ol.proj.fromLonLat([lng, lat])),
					  	           		datas: lastCadre,
					  	           		lat: lastLat_degre_dec + lastLatitude,
					  	           		lng: lastLong_degre_dec + lastLongitude
					  	           		//espece : espece
					  		       	}));
								};*/
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
				   	
				   	var mapMarkerLayer2 = new ol.layer.Vector({
				   		source: new ol.source.Vector({
				   			features: marker_list_2
				   	    }),
				   	    style: new ol.style.Style({
				   		      		image: new ol.style.Icon(({
				   		      			scale: 0.7,
				   		           		rotateWithView: false,
				   		           		anchor: [0.5, 1],
				   		           		anchorXUnits: 'fraction',
				   		           		anchorYUnits: 'fraction',
				   		           		opacity: 1,
				   		        		src: 'img/marker2.png'
				   		        	}))
				   				})
				   	});
				   	
				   	var mapMarkerLayer3 = new ol.layer.Vector({
				   		source: new ol.source.Vector({
				   			features: marker_list_3
				   	    }),
				   	    style: new ol.style.Style({
				   		      		image: new ol.style.Icon(({
				   		      			scale: 0.7,
				   		           		rotateWithView: false,
				   		           		anchor: [0.5, 1],
				   		           		anchorXUnits: 'fraction',
				   		           		anchorYUnits: 'fraction',
				   		           		opacity: 1,
				   		        		src: 'img/marker3.png'
				   		        	}))
				   				})
				   	});
				   	
				   	var mapMarkerLayer4 = new ol.layer.Vector({
				   		source: new ol.source.Vector({
				   			features: marker_list_4
				   	    }),
				   	    style: new ol.style.Style({
				   		      		image: new ol.style.Icon(({
				   		      			scale: 0.7,
				   		           		rotateWithView: false,
				   		           		anchor: [0.5, 1],
				   		           		anchorXUnits: 'fraction',
				   		           		anchorYUnits: 'fraction',
				   		           		opacity: 1,
				   		        		src: 'img/marker4.png'
				   		        	}))
				   				})
				   	});
				   	
				   	var mapMarkerLayer5 = new ol.layer.Vector({
				   		source: new ol.source.Vector({
				   			features: marker_list_5
				   	    }),
				   	    style: new ol.style.Style({
				   		      		image: new ol.style.Icon(({
				   		      			scale: 0.7,
				   		           		rotateWithView: false,
				   		           		anchor: [0.5, 1],
				   		           		anchorXUnits: 'fraction',
				   		           		anchorYUnits: 'fraction',
				   		           		opacity: 1,
				   		        		src: 'img/marker5.png'
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
				   	map.addLayer(mapMarkerLayer2);
				   	map.addLayer(mapMarkerLayer3);
				   	map.addLayer(mapMarkerLayer4);
				   	map.addLayer(mapMarkerLayer5);
				   	mapConfig.layers.marker = mapMarkerLayer;
				   	 	
				
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
					
					var datasLabel = document.getElementById('datas');
								
					map.on('singleclick', function(evt) {
						var name = map.forEachFeatureAtPixel(evt.pixel, function(feature) {
							datasLabel.innerHTML = feature.get('datas');
							return feature.get('lat') + '\r' + feature.get('lng') /*+ '\r' +*/
								   //feature.get('espece');
							//return feature.get('datas')
							
					    });
					    var coordinate = evt.coordinate;
					    content.innerHTML = name;
					      overlay.setPosition(coordinate);
					    });
					   	
					    map.on('pointermove', function(evt) {
					    	 map.getTargetElement().style.cursor = map.hasFeatureAtPixel(evt.pixel) ? 'pointer' : '';
					    });
				
				   	 	
					    enable_li();
					});	   
				});	    
			});  
		});	


	});	

function isFloat(n) {
    return n === +n && n !== (n|0);
}

function addSamples(row) {
	
	var tab = new Array();
	tab[0] = addSample(row, 'Blood');
	
	var samples = '';
	for (i=0;i<tab.length;i++) {
		if (tab[i] !== '') {
			if (samples !== '') {
				samples = samples + ', ' + tab[i];
			} else {
				samples = tab[i];
			}
		}
	}
	return samples;
}

function addSample(row, field) {
	try {
		var floatField = parseFloat(row[field])
		if (floatField > 0) {
			var s = field + ' : ' + row[field];
			return s;
		} else {
			var s = '';
			return s;
		}
	} catch(error) {
		console.error(error);
		var s = '';
		return s;
	}
}
