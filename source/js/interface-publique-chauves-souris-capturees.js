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
	var DB = new PouchDB(remote_couchdb + type_table + interface_publique_table + debug);
} else {
	var DB = new PouchDB(type_table + interface_publique_table + debug);
};

var tab = new Array();

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
   				obj.Pays = row.doc.Pays;
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
	
	if (version_interface_publique == 'anglais') {
	
		var resBlood = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Blood FROM ? WHERE (Sang_DBS_nb_cercles <> 0) AND (Sang_DBS_nb_cercles <> "") GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resBlood)
		for (var j=0;j<resBlood.length;j++) {
			tabOut.push(resBlood[j]);
		}
		
		var resFeces = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Feces FROM ? WHERE Feces_RNAl <> 0 AND Feces_RNAl <> "" GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resFeces)
		for (var j=0;j<resFeces.length;j++) {
			tabOut.push(resFeces[j]);
		}
		
		var resUrine = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Urine FROM ? WHERE Urine_DUS_nombre_cercles <> 0 AND Urine_DUS_nombre_cercles <> "" GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resUrine)
		for (var j=0;j<resUrine.length;j++) {
			tabOut.push(resUrine[j]);
		} 
		
		var resSaliva = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Saliva FROM ? WHERE Ecouvillon_gorge_RNAl <> 0 AND Ecouvillon_gorge_RNAl <> "" GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resSaliva)
		for (var j=0;j<resSaliva.length;j++) {
			tabOut.push(resSaliva[j]);
		}
		
		var resRectal_swab = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Rectal_swab FROM ? WHERE Ecouvillon_rectal_RNAl <> 0 AND Ecouvillon_rectal_RNAl <> "" GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resRectal_swab)
		for (var j=0;j<resRectal_swab.length;j++) {
			tabOut.push(resRectal_swab[j]);
		}
		
		var resEctoparasites = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Ectoparasites FROM ? WHERE Ectoparasites_ethanol <> 0 AND Ectoparasites_ethanol <> "" GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resEctoparasites)
		for (var j=0;j<resEctoparasites.length;j++) {
			tabOut.push(resEctoparasites[j]);
		}
		
		var resHair = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Hair FROM ? WHERE Poils_ethanol <> 0 AND Poils_ethanol <> "" GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resHair)
		for (var j=0;j<resHair.length;j++) {
			tabOut.push(resHair[j]);
		}
		
		var resSkin = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Skin FROM ? WHERE Wing_punch_ethanol <> 0 AND Wing_punch_ethanol <> "" GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resSkin)
		for (var j=0;j<resSkin.length;j++) {
			tabOut.push(resSkin[j]);
		}
		
		var resOrgans = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Organs FROM ? WHERE Prelevement_organe = "Oui" OR Prelevement_organe = "oui" GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resOrgans)
		for (var j=0;j<resOrgans.length;j++) {
			tabOut.push(resOrgans[j]);
		}
		
		var resFull_specimen = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Full_specimen FROM ? WHERE Specimen_entier = "Oui" OR Specimen_entier = "oui" GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resFull_specimen)
		for (var j=0;j<resFull_specimen.length;j++) {
			tabOut.push(resFull_specimen[j]);
		}
		
		var resCount = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Sampled_individuals FROM ? GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resCount)
		for (var j=0;j<resCount.length;j++) {
			tabOut.push(resCount[j]);
		}
		
		//alert(tabOut.length);
		
		var resOut = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, SUM(Sampled_individuals) AS Sampled_individuals, SUM(Blood) AS Blood, SUM(Feces) AS Feces, SUM(Urine) AS Urine, SUM(Saliva) AS Saliva, SUM(Rectal_swab) AS Rectal_swab, SUM(Ectoparasites) AS Ectoparasites, SUM(Hair) AS Hair, SUM(Skin) AS Skin, SUM(Organs) AS Organs, SUM(Full_specimen) as Full_specimen FROM ? GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tabOut] );
		console.log(resOut)
		
		interface_publique = JSON.stringify(resOut);
		
		CSV = 'photo;Country;Lat_degre_dec;Long_degre_dec;Specie visual estimation;' +
		  'Sampled individuals;Samples;Date\r\n';
		
	} else if (version_interface_publique == 'francais') {
		var resSang = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Sang FROM ? WHERE (Sang_DBS_nb_cercles <> 0) AND (Sang_DBS_nb_cercles <> "") GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resSang)
		for (var j=0;j<resSang.length;j++) {
			tabOut.push(resSang[j]);
		}
		
		var resFeces = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Feces FROM ? WHERE Feces_RNAl <> 0 AND Feces_RNAl <> "" GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resFeces)
		for (var j=0;j<resFeces.length;j++) {
			tabOut.push(resFeces[j]);
		}
		
		var resUrine = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Urine FROM ? WHERE Urine_DUS_nombre_cercles <> 0 AND Urine_DUS_nombre_cercles <> "" GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resUrine)
		for (var j=0;j<resUrine.length;j++) {
			tabOut.push(resUrine[j]);
		} 
		
		var resSalive = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Salive FROM ? WHERE Ecouvillon_gorge_RNAl <> 0 AND Ecouvillon_gorge_RNAl <> "" GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resSalive)
		for (var j=0;j<resSalive.length;j++) {
			tabOut.push(resSalive[j]);
		}
		
		var resEcouvillon_rectal = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Ecouvillon_rectal FROM ? WHERE Ecouvillon_rectal_RNAl <> 0 AND Ecouvillon_rectal_RNAl <> "" GROUP BY Lat_degre_dec, Latitude, Pays, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resEcouvillon_rectal)
		for (var j=0;j<resEcouvillon_rectal.length;j++) {
			tabOut.push(resEcouvillon_rectal[j]);
		}
		
		var resEctoparasites = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Ectoparasites FROM ? WHERE Ectoparasites_ethanol <> 0 AND Ectoparasites_ethanol <> "" GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resEctoparasites)
		for (var j=0;j<resEctoparasites.length;j++) {
			tabOut.push(resEctoparasites[j]);
		}
		
		var resPoil = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Poil FROM ? WHERE Poils_ethanol <> 0 AND Poils_ethanol <> "" GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resPoil)
		for (var j=0;j<resPoil.length;j++) {
			tabOut.push(resPoil[j]);
		}
		
		var resPeau = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Peau FROM ? WHERE Wing_punch_ethanol <> 0 AND Wing_punch_ethanol <> "" GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resPeau)
		for (var j=0;j<resPeau.length;j++) {
			tabOut.push(resPeau[j]);
		}
		
		var resOrganes = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Organes FROM ? WHERE Prelevement_organe = "Oui" OR Prelevement_organe = "oui" GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resOrganes)
		for (var j=0;j<resOrganes.length;j++) {
			tabOut.push(resOrganes[j]);
		}
		
		var resSpecimen_entier = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Full_specimen FROM ? WHERE Specimen_entier = "Oui" OR Specimen_entier = "oui" GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resSpecimen_entier)
		for (var j=0;j<resSpecimen_entier.length;j++) {
			tabOut.push(resSpecimen_entier[j]);
		}
		
		var resCount = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Individus_echantillonnes FROM ? GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tab] );
		console.log(resCount)
		for (var j=0;j<resCount.length;j++) {
			tabOut.push(resCount[j]);
		}
		
		//alert(tabOut.length);
		
		var resOut = alasql('SELECT Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain, SUM(Individus_echantillonnes) AS Individus_echantillonnes, SUM(Sang) AS Sang, SUM(Feces) AS Feces, SUM(Urine) AS Urine, SUM(Salive) AS Salive, SUM(Ecouvillon_rectal) AS Ecouvillon_rectal, SUM(Ectoparasites) AS Ectoparasites, SUM(Poil) AS Poil, SUM(Peau) AS Peau, SUM(Organes) AS Organes, SUM(Specimen_entier) as Specimen_entier FROM ? GROUP BY Pays, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tabOut] );
		console.log(resOut)
		
		interface_publique = JSON.stringify(resOut);
		
		CSV = 'photo;Pays;Lat_degre_dec;Long_degre_dec;Espece estimation visuelle;' +
		  'Individus echantillonnes;Echantillons;Date\r\n';
		
	}
	
		

	var obj_interface_publique = JSON.parse(interface_publique);
	
	obj_interface_publique.forEach(function(row){
		addToCSV(row);
	});	
	
	var blob = new Blob(['\ufeff' + CSV], {type: "text/csv;charset=ISO-8859-1"});
	saveAs(blob, "map-ebo-sursy" + clock.now + ".csv");
	
	function addToCSV(row) {
		
		
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
		
		//var blood = addSamples(row)
		if (version_interface_publique == 'anglais') {
			if ((row.Lat_degre_dec !== '') && (row.Long_degre_dec !== '')) {
				CSV = CSV +
				'/media/Chauve-souris_Black2.png' + ';' + 
				row.Pays + ';' +
				Lat_degre_dec + ';' +
				Long_degre_dec + ';' +
				row.Famille_terrain + ' ' +	row.Genre_terrain + ' ' + row.Espece_terrain + ";" +
				row.Sampled_individuals + ';' +
				addSamples(row) + ";" +
				row.Date + ";\r\n"
			};
		} else if (version_interface_publique == 'francais') {
			if ((row.Lat_degre_dec !== '') && (row.Long_degre_dec !== '')) {
				CSV = CSV +
				'/media/Chauve-souris_Black2.png' + ';' + 
				row.Pays + ';' +
				Lat_degre_dec + ';' +
				Long_degre_dec + ';' +
				row.Famille_terrain + ' ' +	row.Genre_terrain + ' ' + row.Espece_terrain + ";" +
				row.Individus_echantillonnes + ';' +
				addSamples(row) + ";" +
				row.Date + ";\r\n"
			};
		}
	};
	
	
	function addSamples(row) {
		
		var tab = new Array();
		
		if (version_interface_publique == 'anglais') {
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
		} else if (version_interface_publique == 'francais') {
			tab[0] = addSample(row, 'Sang');
			tab[1] = addSample(row, 'Feces');
			tab[2] = addSample(row, 'Urine'); 
			tab[3] = addSample(row, 'Salive');
			tab[4] = addSample(row, 'Rectal_swab');
			tab[5] = addSample(row, 'Ectoparasites');
			tab[6] = addSample(row, 'Poil');
			tab[7] = addSample(row, 'Peau');
			tab[8] = addSample(row, 'Organes');
			tab[9] = addSample(row, 'Specimen_entier');
		}
		
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
				console.log(s);
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


