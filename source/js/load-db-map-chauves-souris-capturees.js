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
   				obj.Lat_degre_dec = row.doc.Lat_degre_dec;
   				obj.Latitude = row.doc.Latitude;
   				obj.Long_degre_dec = row.doc.Long_degre_dec;
   				obj.Longitude = row.doc.Longitude;
   				var date = row.doc.Date;
   				obj.Date = getYear(date);
   				obj.Famille_terrain = row.doc.Famille_terrain;
   				obj.Genre_terrain = row.doc.Genre_terrain;
   				obj.Espece_terrain = row.doc.Espece_terrain;
   				obj.Sang_DBS_nb_cercles = row.doc.Sang_DBS_nb_cercles;
   				obj.Feces_RNAl = row.doc.Feces_RNAl;
   				obj.Urine_DUS_nombre_cercles = row.doc.Urine_DUS_nombre_cercles;
   				obj.Ecouvillon_gorge_RNAl = row.doc.Ecouvillon_gorge_RNAl;
   				obj.Ecouvillon_rectal_RNAl = row.doc.Ecouvillon_rectal_RNAl;
   				obj.Ectoparasites_ethanol = row.doc.Ectoparasites_ethanol;
   				obj.Poils_ethanol = row.doc.Poils_ethanol;
   				obj.Wing_punch_ethanol = row.doc.Wing_punch_ethanol;
   				obj.Prelevement_organe = row.doc.Prelevement_organe;
   				obj.Specimen_entier = row.doc.Specimen_entier;
   				tab.push(obj);
   				//i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
			
   	}
}).then(function () {
		    		
	var tabOut = new Array();
	
	var resBlood = alasql('SELECT Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Blood FROM ? WHERE (Sang_DBS_nb_cercles <> 0) AND (Sang_DBS_nb_cercles <> "") GROUP BY Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Long_degre_dec, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
	console.log(resBlood)
	for (var j=0;j<resBlood.length;j++) {
		tabOut.push(resBlood[j]);
	}
	
	var resFeces = alasql('SELECT Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Feces FROM ? WHERE Feces_RNAl <> 0 AND Feces_RNAl <> "" GROUP BY Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
	console.log(resFeces)
	for (var j=0;j<resFeces.length;j++) {
		tabOut.push(resFeces[j]);
	}
	
	var resUrine = alasql('SELECT Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Urine FROM ? WHERE Urine_DUS_nombre_cercles <> 0 AND Urine_DUS_nombre_cercles <> "" GROUP BY Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
	console.log(resUrine)
	for (var j=0;j<resUrine.length;j++) {
		tabOut.push(resUrine[j]);
	} 
	
	var resSaliva = alasql('SELECT Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Saliva FROM ? WHERE Ecouvillon_gorge_RNAl <> 0 AND Ecouvillon_gorge_RNAl <> "" GROUP BY Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
	console.log(resSaliva)
	for (var j=0;j<resSaliva.length;j++) {
		tabOut.push(resSaliva[j]);
	}
	
	var resRectal_swab = alasql('SELECT Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Rectal_swab FROM ? WHERE Ecouvillon_rectal_RNAl <> 0 AND Ecouvillon_rectal_RNAl <> "" GROUP BY Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
	console.log(resRectal_swab)
	for (var j=0;j<resRectal_swab.length;j++) {
		tabOut.push(resRectal_swab[j]);
	}
	
	var resEctoparasites = alasql('SELECT Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Ectoparasites FROM ? WHERE Ectoparasites_ethanol <> 0 AND Ectoparasites_ethanol <> "" GROUP BY Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
	console.log(resEctoparasites)
	for (var j=0;j<resEctoparasites.length;j++) {
		tabOut.push(resEctoparasites[j]);
	}
	
	var resHair = alasql('SELECT Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Hair FROM ? WHERE Poils_ethanol <> 0 AND Poils_ethanol <> "" GROUP BY Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
	console.log(resHair)
	for (var j=0;j<resHair.length;j++) {
		tabOut.push(resHair[j]);
	}
	
	var resSkin = alasql('SELECT Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Skin FROM ? WHERE Wing_punch_ethanol <> 0 AND Wing_punch_ethanol <> "" GROUP BY Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
	console.log(resSkin)
	for (var j=0;j<resSkin.length;j++) {
		tabOut.push(resSkin[j]);
	}
	
	var resOrgans = alasql('SELECT Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Organs FROM ? WHERE Prelevement_organe = "Oui" OR Prelevement_organe = "oui" GROUP BY Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
	console.log(resOrgans)
	for (var j=0;j<resOrgans.length;j++) {
		tabOut.push(resOrgans[j]);
	}
	
	var resFull_specimen = alasql('SELECT Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Full_specimen FROM ? WHERE Specimen_entier = "Oui" OR Specimen_entier = "oui" GROUP BY Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
	console.log(resFull_specimen)
	for (var j=0;j<resFull_specimen.length;j++) {
		tabOut.push(resFull_specimen[j]);
	}
	
	var resCount = alasql('SELECT Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Sampled_individuals FROM ? GROUP BY Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
	console.log(resCount)
	for (var j=0;j<resCount.length;j++) {
		tabOut.push(resCount[j]);
	}
	
	//alert(tabOut.length);
	
	var resOut = alasql('SELECT Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, SUM(Sampled_individuals) AS Sampled_individuals, SUM(Blood) AS Blood, SUM(Feces) AS Feces, SUM(Urine) AS Urine, SUM(Saliva) AS Saliva, SUM(Rectal_swab) AS Rectal_swab, SUM(Ectoparasites) AS Ectoparasites, SUM(Hair) AS Hair, SUM(Skin) AS Skin, SUM(Organs) AS Organs, SUM(Full_specimen) as Full_specimen FROM ? GROUP BY Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain ORDER BY Lat_degre_dec, Long_degre_dec, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tabOut] );
	console.log(resOut)
	
	interface_publique = JSON.stringify(resOut);
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
	obj_interface_publique.forEach(function(row){
			
   		try {	
  			
   			//obj[row.doc.Lat_degre_dec] = row.doc.Lat_degre_dec;
   			
   			
   			var Lat_degre_dec = row/*.doc*/.Lat_degre_dec;
   			
   			//var element = {}, tab = [];
   			
   			
   			//alert(Lat_degre_dec.replace(',', '.');
   			   			
   			var Latitude = row/*.doc*/.Latitude;
   			var Long_degre_dec = row/*.doc*/.Long_degre_dec;
   			var Longitude = row/*.doc*/.Longitude;
   			
   			
   			
   			newid = row.Lat_degre_dec + row.Long_degre_dec;
   			newid = newid.replace(/,/g, '');
   			//newid = newid.replace(',', '');
   			newid = newid.replace('-', '');
   			newid = newid.replace(' ', '');
   			newid = newid.replace('.', '');
   			
   			if (id !== newid) {
   				
   				id = row.Lat_degre_dec + row.Long_degre_dec;
   				id = id.replace(/,/g, '');
   	   			//id = id.replace(',', '');
   	   			id = id.replace('-', '');
   	   			id = id.replace(' ', '');
   	   			id = id.replace('.', '');
   	   			
   	   			count_id++;
				console.log(newid + '-' + id);
				console.log(count_id);
				
				console.log(lastCadre);
				if ((lastLat_degre_dec !== '') && (lastLong_degre_dec !== '')/* && (Longitude !== '') && (Latitude !== '')*/) {
					
	   				lastLat_degre_dec = lastLat_degre_dec.replace(',', '.');
	   				//lat = parseFloat(lastLat_degre_dec);
		   				
	   				lastLong_degre_dec = lastLong_degre_dec.replace(',', '.');
		   			lng_dir = lastLongitude;
		   			lat_dir = lastLatitude;
		   			
		   			if (lat_dir == "N") {
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
				    };
				    	
				   	console.log('lat : ' + lat);
				   	console.log('lng : ' + lng);
				   	
		   				
					if ((isFloat(lat)) && (isFloat(lng))) {
						marker_list.push(new ol.Feature({
		  	           		geometry: new ol.geom.Point(ol.proj.fromLonLat([lng, lat])),
		  	           		datas: lastCadre,
		  	           		lat: lastLat_degre_dec + lastLatitude,
		  	           		lng: lastLong_degre_dec + lastLongitude
		  	           		//espece : espece
		  		       	}));
								
						if (!fisrt_lat_lng) {
							first_lat = lat;
							first_lng = lng;	
							fisrt_lat_lng = true;
						};
					};
				};
				
				lastLat_degre_dec = row.Lat_degre_dec;
   				lastLong_degre_dec = row.Long_degre_dec;
   				lastLatitude = row.Latitude;
   				lastLongitude = row.Longitude;
   				lastDate = row.Date;
				lastFamille = row.Famille_terrain;
   				lastGenre = row.Genre_terrain;
   				lastEspece = row.Espece_terrain;
   				lastTaxonomie = lastFamille + ' ' + lastGenre + ' ' + lastEspece;
				lastSamples = /*String(row.Blood)*/ addSamples(row) + '\n';
				/*console.log(lastDate);
				console.log(lastFamille  + ' ' + lastGenre + ' ' + lastEspece);
				console.log(lastSamples);*/
				lastCadre = lastDate + '<br>' + lastTaxonomie + '<br>' + lastSamples + '<br>'
				
   			} else {
   				if (id != '') {
   					//if (lastFamille  + ' ' + lastGenre + ' ' + lastEspecerow.Lat_degre_dec != row.Famille_terrain + ' ' + row.Genre_terrain + ' ' + row.Espece_terrain) {
   					
   						lastLat_degre_dec = row.Lat_degre_dec;
		   				lastLong_degre_dec = row.Long_degre_dec;
		   				lastLatitude = row.Latitude;
		   				lastLongitude = row.Longitude;
		   				lastDate = row.Date;
		   				lastFamille = row.Famille_terrain;
		   				lastGenre = row.Genre_terrain;
		   				lastEspece = row.Espece_terrain;
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
   	   			id = id.replace('-', '');
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




function isFloat(n) {
    return n === +n && n !== (n|0);
}

function addSamples(row) {
	
	var tab = new Array();
	tab[0] = addSample(row, 'Blood');
	tab[1] = addSample(row, 'Feces');
	tab[2] = addSample(row, 'Urine'); 
	tab[3] = addSample(row, 'Saliva');
	tab[4] = addSample(row, 'Rectal_swab');
	tab[5] = addSample(row, 'Ectoparasites');
	tab[6] = addSample(row, 'Hair');
	tab[7] = addSample(row, 'Skin');
	tab[8] = addSample(row, 'Organs');
	tab[9] = addSample(row, 'Full_specimen');
	
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
