var interface_publique_table = localStorage.getItem('interface_publique_table');
var type_table =  localStorage.getItem('type_table');
var version_interface_publique = localStorage.getItem('version_interface_publique');

var interface_publique;

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DB = new PouchDB(remote_couchdb + type_table +  interface_publique_table + debug);
} else {
	var DB = new PouchDB(type_table + interface_publique_table + debug);
};

var tab = new Array();

var rowcount = 0;

DB.allDocs({  		
	include_docs: true,
	attachments: true
}).then(function (result) {
	// handle result
	if (typeof(JSON.stringify(result)) != "undefined"){  
			
		var tableData = JSON.parse(JSON.stringify(result));
			
		tableData.rows.forEach(function(row){   
   			try {
   				
   				rowcount = 0;	
   				
   				row.doc.Echantillons.forEach(function(row1){
   				
   					var obj = new Object();
   					obj.Pays = row.doc.Pays;
   					obj.Lat_degre_dec = row.doc.Lat_degre_dec;
   	   				obj.Latitude = row.doc.Latitude;
   	   				obj.Long_degre_dec = row.doc.Long_degre_dec;
   	   				obj.Longitude = row.doc.Longitude;
   	   				var date = row.doc.Date;
   	   				obj.Date = getYear(date);
   	   				obj.Famille_1 = row.doc.Famille_1;
   	   				obj.Genre_1 = row.doc.Genre_1;
   	   				obj.Espece_1 = row.doc.Espece_1;
   					
   					obj.Nbre_feces_par_tube = row1.Nbre_feces_par_tube;
   					
   					//console.log(row1.Nbre_feces_par_tube);
	    			
	    			tab.push(obj);
   				});
				
   				rowcount++;
   				
   			} catch(error) {
				console.log(error);
			};
		});	
			
   	}
}).then(function () {
		    		
	var tabOut = new Array();
	
	var resFeces = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_1, Genre_1, Espece_1, COUNT(*) AS Feces FROM ? WHERE Nbre_feces_par_tube <> 0 AND Nbre_feces_par_tube <> "" GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_1, Genre_1, Espece_1', [tab] );
	console.log(resFeces)
	for (var j=0;j<resFeces.length;j++) {
		tabOut.push(resFeces[j]);
	}
		
	/*var resCount = alasql('SELECT Lat_degre_dec, Long_degre_dec, Date, Famille_1, Genre_1, Espece_1, COUNT(*) AS Sampled_individuals FROM ? GROUP BY Lat_degre_dec, Long_degre_dec, Date, Famille_1, Genre_1, Espece_1', [tab] );
	console.log(resCount)
	for (var j=0;j<resCount.length;j++) {
		tabOut.push(resCount[j]);
	}
	
	//alert(tabOut.length);
	
	var resOut = alasql('SELECT Lat_degre_dec, Long_degre_dec, Date, Famille_1, Genre_1, Espece_1, SUM(Sampled_individuals) AS Sampled_individuals, SUM(Feces) AS Feces FROM ? GROUP BY Lat_degre_dec, Long_degre_dec, Date, Famille_1, Genre_1, Espece_1', [tabOut] );
	console.log(resOut)*/
	
	//interface_publique = JSON.stringify(resOut);
	interface_publique = JSON.stringify(resFeces);
	/*var tabInterfacePublique = new Array();
	for (var j=0;j<resOut.length;j++) {
		tabInterfacePublique.push(resOut[j]);
	}
	
	var resInterfacePublique = alasql('SELECT Lat_degre_dec, Long_degre_dec, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Sampled_individuals FROM ? GROUP BY Lat_degre_dec, Long_degre_dec, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tabInterfacePublique] );
	console.log(resInterfacePublique)*/

	//localStorage['interface_publique'] = JSON.stringify(resOut);
	if (version_interface_publique == 'anglais') {
		CSV = 'photo;Country;Lat_degre_dec;Long_degre_dec;Scientific name;' +
		/*'/*Sampled individuals;*/'Samples;Date\r\n';	
	} else if (version_interface_publique == 'francais') {
		CSV = 'photo;Pays;Lat_degre_dec;Long_degre_dec;Espece estimation visuelle;' +
		/*'/*Sampled individuals;*/'Echantillons;Date\r\n';	
	}

	var obj_interface_publique = JSON.parse(interface_publique);
	
	obj_interface_publique.forEach(function(row){
		addToCSV(row);
	});	
	
	var blob = new Blob(['\ufeff' + CSV], {type: "text/csv;charset=ISO-8859-1"});
	saveAs(blob, "map-ebo-sursy" + clock.now + ".csv");
	
	function addToCSV(row) {
		
		//var blood = addSamples(row)
		
		var Lat_degre_dec, Long_degre_dec;
		if (row.Latitude == 'S') {
			Lat_degre_dec = '-' + row.Lat_degre_dec;
			Lat_degre_dec = Lat_degre_dec.replace('\u00B0', '');
		} else if (row.Latitude == 'N') {
			Lat_degre_dec = row.Lat_degre_dec;
			Lat_degre_dec = Lat_degre_dec.replace('\u00B0', '');
		}
		
		if (row.Longitude == 'W') {
			Long_degre_dec = '-' + row.Long_degre_dec;
			Long_degre_dec = Long_degre_dec.replace('\u00B0', '');
		} else if (row.Longitude == 'E') {
			Long_degre_dec = row.Long_degre_dec;
			Long_degre_dec = Long_degre_dec.replace('\u00B0', '');
		}
		
		if ((row.Lat_degre_dec !== '') && (row.Long_degre_dec !== '')) {
			CSV = CSV +
			'/media/Chauve-souris_Black2.png' + ';' + 
			row.Pays + ';' +
			Lat_degre_dec + ';' +
			Long_degre_dec + ';' +
			row.Famille_1 + ' ' +	row.Genre_1 + ' ' + row.Espece_1 + ";" +
			//row.Sampled_individuals + ';' +
			addSamples(row) + ";" +
			row.Date + ";\r\n"
		};
	};
	
	
	function addSamples(row) {
		
		var tab = new Array();
		tab[0] = addSample(row, 'Feces');
		
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
			var floatBlood = parseFloat(row[field])
			if (floatBlood > 0) {
				var s = field + ' : ' + row[field];
				//console.log(s);
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
	
	function isFloat(n) {
	  return n === +n && n !== (n|0);
	}

}).catch(function (err) {
   	console.log(err);
}); 


