var fields = 
    			   ['Date', 'Equipe', 'ID_CS_preleve_debut', 'ID_CS_preleve_fin', 'N_site', 'Pays', 'Prefecture', 
    				'Sous-prefecture', 'Ville/village', 'Site_capture', 'Environnement', 'Latitude', 'Lat_degre_dec', 
    				'Longitude', 'Long_degre_dec', 'Proximite_village_km', 'Proximite_source_m', 'Sortie/entree1', 
    				'Presence_entree1', 'Nb_entree1_espece1', 'Famille_entree1CS1', 'Genre_entree1CS1', 'Espece_entree1CS1', 
    				'Nb_entree1_espece2', 'Famille_entree1CS2', 'Genre_entree1CS2', 'Espece_entree1CS2', 'Nb_entree1_espece3', 
    				'Famille_entree1CS3', 'Genre_entree1CS3', 'Espece_entree1CS3', 'Nb_entree1_espece4', 'Famille_entree1CS4', 
    				'Genre_entree1CS4', 'Espece_entree1CS4', 'Nb_entree1_espece5', 'Famille_entree1CS5', 'Genre_entree1CS5', 
    				'Espece_entree1CS5', 'Nb_entree1_espece6', 'Famille_entree1CS6', 'Genre_entree1CS6', 'Espece_entree1CS6', 
    				'Nb_entree1_espece7', 'Famille_entree1CS7', 'Genre_entree1CS7', 'Espece_entree1CS7', 'Nb_entree1_espece8', 
    				'Famille_entree1CS8', 'Genre_entree1CS8', 'Espece_entree1CS8', 'Sortie/entree2', 'Presence_entree2', 
    				'Nb_entree2_espece1', 'Famille_entree2CS1', 'Genre_entree2CS1', 'Espece_entree2CS1', 'Nb_entree2_espece2', 
    				'Famille_entree2CS2', 'Genre_entree2CS2', 'Espece_entree2CS2', 'Nb_entree2_espece3', 'Famille_entree2CS3', 
    				'Genre_entree2CS3', 'Espece_entree2CS3', 'Nb_entree2_espece4', 'Famille_entree2CS4', 'Genre_entree2CS4', 
    				'Espece_entree2CS4', 'Nb_entree2_espece5', 'Famille_entree2CS5', 'Genre_entree2CS5', 'Espece_entree2CS5', 
    				'Nb_entree2_espece6', 'Famille_entree2CS6', 'Genre_entree2CS6', 'Espece_entree2CS6', 'Nb_entree2_espece7', 
    				'Famille_entree2CS7', 'Genre_entree2CS7', 'Espece_entree2CS7', 'Nb_entree2_espece8', 'Famille_entree2CS8', 
    				'Genre_entree2CS8', 'Espece_entree2CS8', 'Famille_observe1', 'Genre_observe1', 'Espece_observe1', 
    				'Famille_observe2', 'Genre_observe2', 'Espece_observe2', 'Famille_observe3', 'Genre_observe3', 
    				'Espece_observe3', 'Nb_CS_morte1', 'Famille_morte1', 'Genre_morte1', 'Espece_morte1', 'Nb_CS_morte2', 
    				'Famille_morte2', 'Genre_morte2', 'Espece_morte2', 'Nb_CS_morte3', 'Famille_morte3', 'Genre_morte3', 
    				'Espece_morte3', 'Nb_CS_morte4', 'Famille_morte4', 'Genre_morte4', 'Espece_morte4', 'Remarque', 'Nb_filet_sol', 
    				'IDFilet_1', 'Filet_sol_m2_1', 'EntreeFilet_1', 'HauteurFilet_1', 'Filet_debut_1', 'Filet_fin_1', 'Filet_temps_1', 
    				'Nb_capture_filet_1', 'Nb_preleve_filet_1', 'IDFilet_2', 'Filet_sol_m2_2', 'EntreeFilet_2', 'HauteurFilet_2', 
    				'Filet_debut_2', 'Filet_fin_2', 'Filet_temps_2', 'Nb_capture_filet_2', 'Nb_preleve_Filet_2', 'NbHarp', 
    				'IDHarp_1', 'EntreeHarp_1', 'Harp_debut_1', 'Harp_fin_1', 'Harp_temps_1', 'Nb_capture_harp_1', 'Nb_preleve_harp_1', 
    				'IDHarp_2', 'EntreeHarp_2', 'Harp_debut_2', 'Harp_fin_2', 'Harp_temps_2', 'Nb_capture_harp_2', 'Nb_preleve_harp_2', 
    				'Saison', 'Climat', 'Precipitation', 'Vent', 'Lune', 'Temperature_logger', 'Humidite_logger', 'Username']
    				
var fields_CSV_head =   'Date;Equipe;ID_CS_preleve_debut;ID_CS_preleve_fin;N_site;Pays;Prefecture;' +
						'Sous-prefecture;Ville/village;Site_capture;Environnement;Latitude;Lat_degre_dec;' +
						'Longitude;Long_degre_dec;Proximite_village_km;Proximite_source_m;Sortie/entree1;' +
						'Presence_entree1;Nb_entree1_espece1;Famille_entree1CS1;Genre_entree1CS1;Espece_entree1CS1;' +
						'Nb_entree1_espece2;Famille_entree1CS2;Genre_entree1CS2;Espece_entree1CS2;Nb_entree1_espece3;' +
						'Famille_entree1CS3;Genre_entree1CS3;Espece_entree1CS3;Nb_entree1_espece4;Famille_entree1CS4;' +
						'Genre_entree1CS4;Espece_entree1CS4;Nb_entree1_espece5;Famille_entree1CS5;Genre_entree1CS5;' +
						'Espece_entree1CS5;Nb_entree1_espece6;Famille_entree1CS6;Genre_entree1CS6;Espece_entree1CS6;' +
						'Nb_entree1_espece7;Famille_entree1CS7;Genre_entree1CS7;Espece_entree1CS7;Nb_entree1_espece8;' +
						'Famille_entree1CS8;Genre_entree1CS8;Espece_entree1CS8;Sortie/entree2;Presence_entree2;' +
						'Nb_entree2_espece1;Famille_entree2CS1;Genre_entree2CS1;Espece_entree2CS1;Nb_entree2_espece2;' +
						'Famille_entree2CS2;Genre_entree2CS2;Espece_entree2CS2;Nb_entree2_espece3;Famille_entree2CS3;' +
						'Genre_entree2CS3;Espece_entree2CS3;Nb_entree2_espece4;Famille_entree2CS4;Genre_entree2CS4;' +
						'Espece_entree2CS4;Nb_entree2_espece5;Famille_entree2CS5;Genre_entree2CS5;Espece_entree2CS5;' +
						'Nb_entree2_espece6;Famille_entree2CS6;Genre_entree2CS6;Espece_entree2CS6;Nb_entree2_espece7;' +
						'Famille_entree2CS7;Genre_entree2CS7;Espece_entree2CS7;Nb_entree2_espece8;Famille_entree2CS8;' +
						'Genre_entree2CS8;Espece_entree2CS8;Famille_observe1;Genre_observe1;Espece_observe1;' +
						'Famille_observe2;Genre_observe2;Espece_observe2;Famille_observe3;Genre_observe3;' +
						'Espece_observe3;Nb_CS_morte1;Famille_morte1;Genre_morte1;Espece_morte1;Nb_CS_morte2;' +
						'Famille_morte2;Genre_morte2;Espece_morte2;Nb_CS_morte3;Famille_morte3;Genre_morte3;' +
						'Espece_morte3;Nb_CS_morte4;Famille_morte4;Genre_morte4;Espece_morte4;Remarque;Nb_filet_sol;' +
						'IDFilet_1;Filet_sol_m2_1;EntreeFilet_1;HauteurFilet_1;Filet_debut_1;Filet_fin_1;Filet_temps_1;' +
						'Nb_capture_filet_1;Nb_preleve_filet_1;IDFilet_2;Filet_sol_m2_2;EntreeFilet_2;HauteurFilet_2;' +
						'Filet_debut_2;Filet_fin_2;Filet_temps_2;Nb_capture_filet_2;Nb_preleve_Filet_2;NbHarp;' +
						'IDHarp_1;EntreeHarp_1;Harp_debut_1;Harp_fin_1;Harp_temps_1;Nb_capture_harp_1;Nb_preleve_harp_1;' +
						'IDHarp_2;EntreeHarp_2;Harp_debut_2;Harp_fin_2;Harp_temps_2;Nb_capture_harp_2;Nb_preleve_harp_2;' +
						'Saison;Climat;Precipitation;Vent;Lune;Temperature_logger;Humidite_logger;Username;\r\n';

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

add_heading = true;
CSV_heading = '';
CSV_data = '';

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DB_journalieres = new PouchDB(remote_couchdb + 'donnees_journalieres_astre_transvihmi_guinee' + debug);
} else {
	var DB_journalieres = new PouchDB('donnees_journalieres_astre_transvihmi_guinee' + debug);
};

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DBCaraterisations = new PouchDB(remote_couchdb + 'caracterisations_grottes' + nom_table + debug);
} else {
	var DBCaraterisations = new PouchDB('caracterisations_grottes' + nom_table + debug);
};

var tab_journalieres = new Array();
var tab_journalieres_sorted = new Array();
var tab = new Array();


DB_journalieres.allDocs({  		
	include_docs: true,
	attachments: true
}).then(function (result) {
	// handle result
	if (typeof(JSON.stringify(result)) != "undefined"){  
		var tableData = JSON.parse(JSON.stringify(result));
		i = 0;
		tableData.rows.forEach(function(row){   
   			try {
   				//tab[i] = new Array();
   				var obj = new Object();
   				/*' +
				';;;;' +
				';;;;' +
				';;;;' +
				';;;;' +
				';*/
   				obj.Date = row.doc.Date
   				obj.Equipe = row.doc.Equipe
   				obj.ID_CS_preleve_debut = row.doc.ID_CS_preleve_debut
   				obj.ID_CS_preleve_fin = row.doc.ID_CS_preleve_fin
   				obj.N_site = row.doc.N_site 
   				obj.Pays = row.doc.Pays 
   				obj['Prefecture'] = row.doc['Prefecture'] 
   				obj['Sous-prefecture'] = row.doc['Sous-prefecture']
   				obj['Ville/village'] = row.doc['Ville/village']
   				obj.Site_capture = row.doc.Site_capture 
   				obj.Environnement = row.doc.Environnement 
   				obj.Latitude = row.doc.Latitude 
   				obj.Lat_degre_dec = row.doc.Lat_degre_dec 
   				obj.Longitude = row.doc.Longitude 
   				obj.Long_degre_dec = row.doc.Long_degre_dec 
   				obj.Proximite_village_km = row.doc.Proximite_village_km 
   				obj.Proximite_source_m = row.doc.Proximite_source_m 
   				obj['Sortie/entree1'] = row.doc['Sortie/entree1'] 
   				obj.Presence_entree1 = row.doc.Presence_entree1
   				obj.Nb_entree1_espece1 = row.doc.Nb_entree1_espece1 
   				obj.Famille_entree1CS1 = row.doc.Famille_entree1CS1 
   				obj.Genre_entree1CS1 = row.doc.Genre_entree1CS1 
   				obj.Espece_entree1CS1 = row.doc.Espece_entree1CS1
   				obj.Nb_entree1_espece2 = row.doc.Nb_entree1_espece2
   				obj.Famille_entree1CS2 = row.doc.Famille_entree1CS2
   				obj.Genre_entree1CS2 = row.doc.Genre_entree1CS2
   				obj.Espece_entree1CS2 = row.doc.Espece_entree1CS2
   				obj.Nb_entree1_espece3 = row.doc.Nb_entree1_espece3
   				obj.Famille_entree1CS3 = row.doc.Famille_entree1CS3
   				obj.Genre_entree1CS3 = row.doc.Genre_entree1CS3
   				obj.Espece_entree1CS3 = row.doc.Espece_entree1CS3
   				obj.Genre_entree1CS4 = row.doc.Genre_entree1CS4
   				obj.Nb_entree1_espece4 = row.doc.Nb_entree1_espece4
   				obj.Famille_entree1CS4 = row.doc.Famille_entree1CS4
   				obj.Espece_entree1CS4 = row.doc.Espece_entree1CS4 
   				obj.Nb_entree1_espece5 = row.doc.Nb_entree1_espece5 
   				obj.Famille_entree1CS5 = row.doc.Famille_entree1CS5 
   				obj.Genre_entree1CS5 = row.doc.Genre_entree1CS5
   				obj.Espece_entree1CS5 = row.doc.Espece_entree1CS5
   				obj.Nb_entree1_espece6 = row.doc.Nb_entree1_espece6
   				obj.Famille_entree1CS6 = row.doc.Famille_entree1CS6
   				obj.Genre_entree1CS6 = row.doc.Genre_entree1CS6 
   				obj.Espece_entree1CS6 = row.doc.Espece_entree1CS6 
   				obj.Nb_entree1_espece7 = row.doc.Nb_entree1_espece7 
   				obj.Famille_entree1CS7 = row.doc.Famille_entree1CS7
   				obj.Genre_entree1CS7 = row.doc.Genre_entree1CS7
   				obj.Espece_entree1CS7 = row.doc.Espece_entree1CS7
   				obj.Nb_entree1_espece8 = row.doc.Nb_entree1_espece8
   				obj.Famille_entree1CS8 = row.doc.Famille_entree1CS8
   				obj.Genre_entree1CS8 = row.doc.Genre_entree1CS8
   				obj.Espece_entree1CS8 = row.doc.Espece_entree1CS8
   				obj['Sortie/entree2'] = row.doc['Sortie/entree2']
				obj.Presence_entree2 = row.doc.Presence_entree2
				obj.Nb_entree2_espece1 = row.doc.Nb_entree2_espece1
				obj.Famille_entree2CS1 = row.doc.Famille_entree2CS1
				obj.Genre_entree2CS1 = row.doc.Genre_entree2CS1
				obj.Espece_entree2CS1 = row.doc.Espece_entree2CS1
				obj.Nb_entree2_espece2 = row.doc.Nb_entree2_espece2
				obj.Famille_entree2CS2 = row.doc.Famille_entree2CS2
				obj.Genre_entree2CS2 = row.doc.Genre_entree2CS2
				obj.Espece_entree2CS2 = row.doc.Espece_entree2CS2
				obj.Nb_entree2_espece3 = row.doc.Nb_entree2_espece3
				obj.Famille_entree2CS3 = row.doc.Famille_entree2CS3
				obj.Genre_entree2CS3 = row.doc.Genre_entree2CS3
				obj.Espece_entree2CS3 = row.doc.Espece_entree2CS3
				obj.Nb_entree2_espece4 = row.doc.Nb_entree2_espece4
				obj.Famille_entree2CS4 = row.doc.Famille_entree2CS4
				obj.Genre_entree2CS4 = row.doc.Genre_entree2CS4
				obj.Espece_entree2CS4 = row.doc.Espece_entree2CS4
				obj.Nb_entree2_espece5 = row.doc.Nb_entree2_espece5
				obj.Famille_entree2CS5 = row.doc.Famille_entree2CS5
				obj.Genre_entree2CS5 = row.doc.Genre_entree2CS5
				obj.Espece_entree2CS5 = row.doc.Espece_entree2CS5
				obj.Nb_entree2_espece6 = row.doc.Nb_entree2_espece6
				obj.Famille_entree2CS6 = row.doc.Famille_entree2CS6
				obj.Genre_entree2CS6 = row.doc.Genre_entree2CS6
				obj.Espece_entree2CS6 = row.doc.Espece_entree2CS6
				obj.Nb_entree2_espece7 = row.doc.Nb_entree2_espece7
				obj.Famille_entree2CS7 = row.doc.Famille_entree2CS7
				obj.Genre_entree2CS7 = row.doc.Genre_entree2CS7
				obj.Espece_entree2CS7 = row.doc.Espece_entree2CS7
				obj.Nb_entree2_espece8 = row.doc.Nb_entree2_espece8
				obj.Famille_entree2CS8 = row.doc.Famille_entree2CS8
				obj.Genre_entree2CS8 = row.doc.Genre_entree2CS8
				obj.Espece_entree2CS8 = row.doc.Espece_entree2CS8
   				obj.Famille_observe1 = row.doc.Famille_observe1
   				obj.Genre_observe1 = row.doc.Genre_observe1
   				obj.Espece_observe1 = row.doc.Espece_observe1
   				obj.Famille_observe2 = row.doc.Famille_observe2
   				obj.Genre_observe2 = row.doc.Genre_observe2 
   				obj.Espece_observe2 = row.doc.Espece_observe2 
   				obj.Famille_observe3 = row.doc.Famille_observe3 
   				obj.Genre_observe3 = row.doc.Genre_observe3 
   				obj.Espece_observe3 = row.doc.Espece_observe3 
   				obj.Nb_CS_morte1 = row.doc.Nb_CS_morte1
   				obj.Famille_morte1 = row.doc.Famille_morte1
   				obj.Genre_morte1 = row.doc.Genre_morte1
   				obj.Espece_morte1 = row.doc.Espece_morte1
   				obj.Nb_CS_morte2 = row.doc.Nb_CS_morte2 
   				obj.Famille_morte2 = row.doc.Famille_morte2 
   				obj.Genre_morte2 = row.doc.Genre_morte2
   				obj.Espece_morte2 = row.doc.Espece_morte2
   				obj.Nb_CS_morte3 = row.doc.Nb_CS_morte3
   				obj.Famille_morte3 = row.doc.Famille_morte3
   				obj.Genre_morte3 = row.doc.Genre_morte3
   				obj.Espece_morte3 = row.doc.Espece_morte3 
   				obj.Nb_CS_morte4 = row.doc.Nb_CS_morte4 
   				obj.Famille_morte4 = row.doc.Famille_morte4 
   				obj.Genre_morte4 = row.doc.Genre_morte4 
   				obj.Espece_morte4 = row.doc.Espece_morte4
   				obj.Remarque = row.doc.Remarque 
				obj.Nb_filet_sol = row.doc.Nb_filet_sol 
				obj.IDFilet_1 = row.doc.IDFilet_1 
				obj.Filet_sol_m2_1 = row.doc.Filet_sol_m2_1 
				obj.EntreeFilet_1 = row.doc.EntreeFilet_1 
				obj.HauteurFilet_1 = row.doc.HauteurFilet_1 
				obj.Filet_debut_1 = row.doc.Filet_debut_1 
				obj.Filet_fin_1 = row.doc.Filet_fin_1 
				obj.Filet_temps_1 = row.doc.Filet_temps_1 
				obj.Nb_capture_filet_1 = row.doc.Nb_capture_filet_1 
				obj.Nb_preleve_filet_1 = row.doc.Nb_preleve_filet_1 
				obj.IDFilet_2 = row.doc.IDFilet_2 
				obj.Filet_sol_m2_2 = row.doc.Filet_sol_m2_2 
				obj.EntreeFilet_2 = row.doc.EntreeFilet_2
				obj.HauteurFilet_2 = row.doc.HauteurFilet_2 
				obj.Filet_debut_2 = row.doc.Filet_debut_2 
				obj.Filet_fin_2 = row.doc.Filet_fin_2 
				obj.Filet_temps_2 = row.doc.Filet_temps_2
				obj.Nb_capture_filet_2 = row.doc.Nb_capture_filet_2 
				obj.Nb_preleve_Filet_2 = row.doc.Nb_preleve_Filet_2 
				obj.NbHarp = row.doc.NbHarp 
				obj.IDHarp_1 = row.doc.IDHarp_1 
				obj.EntreeHarp_1 = row.doc.EntreeHarp_1 
				obj.Harp_debut_1 = row.doc.Harp_debut_1 
				obj.Harp_fin_1 = row.doc.Harp_fin_1 
				obj.Harp_temps_1 = row.doc.Harp_temps_1 
				obj.Nb_capture_harp_1 = row.doc.Nb_capture_harp_1 
				obj.Nb_preleve_harp_1 = row.doc.Nb_preleve_harp_1 
				obj.IDHarp_2 = row.doc.IDHarp_2 
				obj.EntreeHarp_2 = row.doc.EntreeHarp_2 
				obj.Harp_debut_2 = row.doc.Harp_debut_2 
				obj.Harp_fin_2 = row.doc.Harp_fin_2 
				obj.Harp_temps_2 = row.doc.Harp_temps_2 
				obj.Nb_capture_harp_2 = row.doc.Nb_capture_harp_2 
				obj.Nb_preleve_harp_2 = row.doc.Nb_preleve_harp_2 
				obj.Saison = row.doc.Saison 
				obj.Climat = row.doc.Climat 
				obj.Precipitation = row.doc.Precipitation 
				obj.Vent = row.doc.Vent 
				obj.Lune = row.doc.Lune 
				obj.Temperature_logger = row.doc.Temperature_logger 
				obj.Humidite_logger = row.doc.Humidite_logger
				
   				obj.Username = row.doc.Username 

   				tab_journalieres.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}
}).then(function () {
	
	/*tab_journalieres_sorted = tab_journalieres.sort(
		    (p1, p2) => 
		    (p1.N_identification_CS < p2.N_identification_CS) ? 1 : (p1.N_identification_CS > p2.N_identification_CS) ? -1 : 0)*/
		    
	/*function wait(ms){
	       var start = new Date().getTime();
	       var end = start;
	       while(end < start + ms) {
	         end = new Date().getTime();
	      }
	}
	
	wait(5000);*/
	
	//alert('i = '  + i)
	DBCaraterisations.allDocs({  		
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
	   				obj.N_site = row.doc.N_site 
	   				obj.Date = row.doc.Date 
	   				obj.Equipe = row.doc.Equipe 
	   				obj.Pays = row.doc.Pays 
	   				obj.Prefecture = row.doc.Prefecture 
	   				obj['Sous-prefecture'] = row.doc['Sous-prefecture']
	   				obj['Ville/village'] = row.doc['Ville/village']
	   				obj.Site_capture = row.doc.Site_capture 
	   				obj.Environnement = row.doc.Environnement 
	   				obj.Latitude = row.doc.Latitude 
	   				obj.Lat_degre_dec = row.doc.Lat_degre_dec 
	   				obj.Longitude = row.doc.Longitude 
	   				obj.Long_degre_dec = row.doc.Long_degre_dec 
	   				obj.Proximite_village_km = row.doc.Proximite_village_km 
	   				obj.Proximite_source_m = row.doc.Proximite_source_m 
	   				tab.push(obj);
	   				//i++;	
	   				
	   			} catch(error) {
					console.log(error);
				};
			});	
				
	   	}
	}).then(function () {
		/*var res = alasql('SELECT N_site, Pays, Region_capture, Site_capture, Environnement, Latitude, Lat_degre_dec, Longitude, Long_degre_dec, COUNT(*) AS NbSite FROM ?  GROUP BY N_site, Pays, Region_capture, Site_capture, Environnement, Latitude, Lat_degre_dec, Longitude, Long_degre_dec', [tab] );
		
		var site = JSON.stringify(res);
		
		var obj_site = JSON.parse(site);
		
		obj_site.forEach(function(row){
			alert(row.N_site);
		});	*/
		
		
		
		DB_journalieres.info().then((infos) => {
			
			count = infos.doc_count;
			
			
			
			
			
			
			
		}).catch((error) => {
		});
		
		
	}).catch(function (err) {
	   	console.log(err);
	});

	
}).catch(function (err) {
   	console.log(err);
});

function addJournalieres(row, selected) {
	
	console.log('ok');
	

	
	if (count > 0) {
		count--
		i--
		/*alert(count)
		alert(row.N_identification_CS);
		alert(row['NumFilet/piege'])*/
		
		//console.log(count);
		
		if ((row.N_site == null) || (row.N_site == '')) {
			//console.log(row.NUM)
			
			if (row.Pays != null) {
				Pays = row.Pays; 
			} else {
				Pays = '';
			}			
			if (row['Prefecture'] != null) {
				Prefecture = row['Prefecture'];
			} else {
				Prefecture = '';
			}
			if (row['Sous-prefecture'] != null) {
				Sous_prefecture = row['Sous-prefecture'];
			} else {
				Sous_prefecture = '';
			}
			if (row['Ville/village'] != null) {
				Ville_village = row['Ville/village'];
			} else {
				Ville_village = '';
			}
			if (row.Site_capture != null) {
				Site_capture = row.Site_capture;
			} else {
				Site_capture = '';
			}
			if (row.Environnement != null) {
				Environnement = row.Environnement;
			} else {
				Environnement = '';
			}
			if (row.Latitude != null) {
				Latitude = row.Latitude;
			} else {
				Latitude = '';
			}
			if (row.Lat_degre_dec != null) {
				Lat_degre_dec = row.Lat_degre_dec;
				Lat_degre_dec = Lat_degre_dec.replace('°', '');
				Lat_degre_dec = Lat_degre_dec.replace('.', ','); 
			} else {
				Lat_degre_dec = '';
			}
			if (row.Longitude != null) {
				Longitude = row.Longitude;
			} else {
				Longitude = '';
			}
			if (row.Long_degre_dec != null) {
				Long_degre_dec = row.Long_degre_dec;
				Long_degre_dec = Long_degre_dec.replace('°', '');
				Long_degre_dec = Long_degre_dec.replace('.', ',');
			} else {
				Long_degre_dec = '';
			}
			if (row.Proximite_village_km != null) {
				Proximite_village_km = row.Proximite_village_km;
				Proximite_village_km = Proximite_village_km.replace('.', ',');
			} else {
				Proximite_village_km = '';
			}
			if (row.Proximite_source_m != null) {
				Proximite_source_m = row.Proximite_source_m;
			} else {
				Proximite_source_m = '';
			}
			
			
		}
		
		/*var debug;
		if (localStorage.getItem('debug') === null) {
			debug = '';
		} else {
			debug = localStorage.getItem('debug');
		};*/
		
		if ((row.N_site != null) && (row.N_site != '')) {
			var N_site = row.N_site;
			
			var res = alasql('SELECT N_site, Pays, Prefecture, [Sous-prefecture], [Ville/village], Site_capture, Environnement, Latitude, Lat_degre_dec, Longitude, Long_degre_dec, Proximite_village_km, Proximite_source_m, COUNT(*) AS NbSite FROM ?  WHERE N_site == "' + N_site + '" GROUP BY N_site, Pays, Prefecture, [Sous-prefecture], [Ville/village], Site_capture, Environnement, Latitude, Lat_degre_dec, Longitude, Long_degre_dec, Proximite_village_km, Proximite_source_m', [tab] );
			
			var site = JSON.stringify(res);
			
			var obj_site = JSON.parse(site);
			
			obj_site.forEach(function(row1){
				Pays = row1.Pays;
				Prefecture = row1.Prefecture;
				Sous_prefecture = row1['Sous-prefecture'];
				Ville_village = row1['Ville/village'];
				Site_capture = row1.Site_capture;
				Environnement = row1.Environnement;
				Latitude = row1.Latitude;
				if (row1.Lat_degre_dec != null) {
					Lat_degre_dec = row1.Lat_degre_dec;
					Lat_degre_dec = Lat_degre_dec.replace('°', '');
					Lat_degre_dec = Lat_degre_dec.replace('.', ',');
				} else {
					Lat_degre_dec = '';
				}
				Longitude = row1.Longitude;
				if (row1.Long_degre_dec != null) {
					Long_degre_dec = row1.Long_degre_dec;
					Long_degre_dec = Long_degre_dec.replace('°', '');
					Long_degre_dec = Long_degre_dec.replace('.', ',');
				} else {
					Long_degre_dec = '';
				}
				if (row1.Proximite_village_km != null) {
					Proximite_village_km = row1.Proximite_village_km;
					Proximite_village_km = Proximite_village_km.replace('.', ',')
				} else {
					Proximite_village_km = '';
				}
				Proximite_source_m = row1.Proximite_source_m;
				NbSite = row1.NbSite;
			});
		}
			
			
			
		/*LongueurFilet = '';
		HauteurFilet = '';
		Lat_degre_decFilet = '';
		LatitudeFilet = '';
		Long_degre_decFilet = '';
		LongitudeFilet = '';
			
			
		if (row.NumFilet != null) {
			var NumFilet = row.NumFilet;
				
			var res = alasql('SELECT NumFilet, LongueurFilet, HauteurFilet, Lat_degre_decFilet, LatitudeFilet, Long_degre_decFilet, LongitudeFilet FROM ? WHERE NumFilet == "' + NumFilet + '"' + ' GROUP BY NumFilet, LongueurFilet, HauteurFilet, Lat_degre_decFilet, LatitudeFilet, Long_degre_decFilet, LongitudeFilet', [tabFilet] );
				
			var filet = JSON.stringify(res);
				
			var obj_filet = JSON.parse(filet);
				
			obj_filet.forEach(function(row){
				if (row.LongueurFilet != null) {
					LongueurFilet = row.LongueurFilet;
					LongueurFilet = LongueurFilet.replace('.', ',');
				} else {
					LongueurFilet = '';
				}
				if (row.HauteurFilet != null) {
					HauteurFilet = row.HauteurFilet;
					HauteurFilet = HauteurFilet.replace('.', ',');
				} else {
					HauteurFilet = '';
				}
				if (row.Lat_degre_decFilet != null) {
					Lat_degre_decFilet = row.Lat_degre_decFilet;
					Lat_degre_decFilet = Lat_degre_decFilet.replace('.', ',');
				} else {
					Lat_degre_decFilet = '';
				}
				if (row.LatitudeFilet != null) {
					LatitudeFilet = row.LatitudeFilet;
				} else {
					LatitudeFilet = '';
				}
				if (row.Long_degre_decFilet != null) {
					Long_degre_decFilet = row.Long_degre_decFilet;
					Long_degre_decFilet = Long_degre_decFilet.replace('.', ',');
				} else {
					Long_degre_decFilet = '';
				}
				if (row.LongitudeFilet != null) {
					LongitudeFilet = row.LongitudeFilet;
				} else {
					LongitudeFilet = '';
				}
			});
		}
			
		var Filet_temps = '';
		var Arret_Capture = '';*/
		
		
		//alert(row['N_site'])
		//if (row['NumFilet/piege'] != '') {
			//alert(row['NumFilet/piege'])
			//NumFilet_piege = row['NumFilet/piege'];
		//} else {
		//	NumFilet_piege = '';
		//}
		/*if (row.Lat_degre_dec_Lieu_capture != null) {
			Lat_degre_dec_Lieu_capture = row.Lat_degre_dec_Lieu_capture;
			Lat_degre_dec_Lieu_capture = Lat_degre_dec_Lieu_capture.replace('.', ',');
		} else {
			Lat_degre_dec_Lieu_capture = '';
		}
		if (row.Long_degre_dec_Lieu_capture != null) {
			Long_degre_dec_Lieu_capture = row.Long_degre_dec_Lieu_capture;
			Long_degre_dec_Lieu_capture = Long_degre_dec_Lieu_capture.replace('.', ',');
		} else {
			Long_degre_dec_Lieu_capture = '';
		}
		
		if (row.Poids_enfant != null) {
			Poids_enfant = row.Poids_enfant;
			Poids_enfant = Poids_enfant.replace('.', ',');
		} else {
			Poids_enfant = '';
		}
		if (row.Poids_gr != null) {
			Poids_gr = row.Poids_gr;
			Poids_gr = Poids_gr.replace('.', ',');
		} else {
			Poids_gr = '';
		}
		if (row.L_avant_bras_mm != null) {
			L_avant_bras_mm = row.L_avant_bras_mm;
			L_avant_bras_mm = L_avant_bras_mm.replace('.', ',');
		} else {
			L_avant_bras_mm = '';
		}
		if (row.L_totale_corps_mm != null) {
			L_totale_corps_mm = row.L_totale_corps_mm;
			L_totale_corps_mm = L_totale_corps_mm.replace('.', ',');
		} else {
			L_totale_corps_mm = '';
		}
		if (row.L_queue_mm != null) {
			L_queue_mm = row.L_queue_mm;
			L_queue_mm = L_queue_mm.replace('.', ',');
		} else {
			L_queue_mm = '';
		}
		if (row.L_metacarpe_3ieme_doigt_mm != null) {
			L_metacarpe_3ieme_doigt_mm = row.L_metacarpe_3ieme_doigt_mm;
			L_metacarpe_3ieme_doigt_mm.replace('.', ',');
		} else {
			L_metacarpe_3ieme_doigt_mm = '';
		}
		if (row.Sang_DBS_nb_cercles != null) {
			Sang_DBS_nb_cercles = row.Sang_DBS_nb_cercles;
			//alert(Sang_DBS_nb_cercles);
			//if (Sang_DBS_nb_cercles == 0) {
			//	alert('ok');
			//	Sang_DBS_nb_cercles.replace('.', ',');
			//}
			Sang_DBS_nb_cercles = Sang_DBS_nb_cercles.toString();
			Sang_DBS_nb_cercles.replace('.', ',');
		} else {
			Sang_DBS_nb_cercles = '';
		}
		
		if ((row.Feces_ethanol == null) || (row.Feces_ethanol == 'undefined')) {
			Feces_ethanol = '0'
		} else {
			Feces_ethanol = row.Feces_ethanol;
		}
		if ((row.Lait == null) || (row.Lait == 'undefined') || (row.Lait == '')) {
			Lait = '0'
		} else {
			Lait = row.Lait;
		}
		if ((row.Username == null) || (row.Username == 'undefined')) {
			Username = ''
		} else {
			Username = row.Username;
		}*/
	    
		console.log(row.N_identification_CS);
		console.log(row['NumFilet/piege']);
		
		if (!selected) { 	
			CSV_data = CSV_data +
			/*'Date;Equipe;ID_CS_preleve_debut;ID_CS_preleve_fin;N_site;Pays;Prefecture' +
			'Sous-prefecture;Ville/village;Site_capture;Environnement;Latitude;Lat_degre_dec' +
			'Longitude;Long_degre_dec;Proximite_village_km;Proximite_source_m;Sortie/entree1' +
			'Presence_entree1;Nb_entree1_espece1;Famille_entree1CS1;Genre_entree1CS1;Espece_entree1CS1' +
			'Nb_entree1_espece2;Famille_entree1CS2;Genre_entree1CS2;Espece_entree1CS2;Nb_entree1_espece3' +
			'Famille_entree1CS3;Genre_entree1CS3;Espece_entree1CS3;Nb_entree1_espece4;Famille_entree1CS4' +
			'Genre_entree1CS4;Espece_entree1CS4;Nb_entree1_espece5;Famille_entree1CS5;Genre_entree1CS5' +
			'Espece_entree1CS5;*/
				row.Date + ';' +
				row.Equipe + ';' +
				row.ID_CS_preleve_debut + ';' +
				row.ID_CS_preleve_fin + ';' +
				row.N_site + ';' +
				Pays + ';' +
				Prefecture + ';' +
				Sous_prefecture + ';' +
				Ville_village + ';' +
				Site_capture + ';' +
				Environnement + ';' + 
				Latitude + ';' +
				Lat_degre_dec + ';' +
				Longitude + ';' +
				Long_degre_dec + ';' +
				Proximite_village_km + ';' +
				Proximite_source_m + ';' +
				row['Sortie/entree1'] + ';' +
				row.Presence_entree1 + ';' +
				row.Nb_entree1_espece1 + ';' +
				row.Famille_entree1CS1 + ';' + 
				row.Genre_entree1CS1 + ';' +
				row.Espece_entree1CS1 + ';' +
				row.Nb_entree1_espece2 + ';' +
				row.Famille_entree1CS2 + ';' +
				row.Genre_entree1CS2 + ';' +
				row.Espece_entree1CS2 + ';' +
				row.Nb_entree1_espece3 + ';' +
				row.Famille_entree1CS3 + ';' +
				row.Genre_entree1CS3 + ';' +
				row.Espece_entree1CS3 + ';' +
				row.Nb_entree1_espece4 + ';' +
				row.Famille_entree1CS4 + ';' +
				row.Genre_entree1CS4 + ';' +				
				row.Espece_entree1CS4 + ';' +
				row.Nb_entree1_espece5 + ';' +
				row.Famille_entree1CS5 + ';' + 
				row.Genre_entree1CS5 + ';' +
				row.Espece_entree1CS5 + ';' +
				row.Nb_entree1_espece6 + ';' +
				row.Famille_entree1CS6 + ';' +
				row.Genre_entree1CS6 + ';' +
				row.Espece_entree1CS6 + ';' +
				row.Nb_entree1_espece7 + ';' +
				row.Famille_entree1CS7 + ';' +
				row.Genre_entree1CS7 + ';' +
				row.Espece_entree1CS7 + ';' +
				row.Nb_entree1_espece8 + ';' +
				row.Famille_entree1CS8 + ';' +
				row.Genre_entree1CS8 + ';' +
				row.Espece_entree1CS8 + ';' +
				row['Sortie/entree2'] + ';' +
				row.Presence_entree2 + ';' +
				row.Nb_entree2_espece1 + ';' +
				row.Famille_entree2CS1 + ';' + 
				row.Genre_entree2CS1 + ';' +
				row.Espece_entree2CS1 + ';' +
				row.Nb_entree2_espece2 + ';' +
				row.Famille_entree2CS2 + ';' +
				row.Genre_entree2CS2 + ';' +
				row.Espece_entree2CS2 + ';' +
				row.Nb_entree2_espece3 + ';' +
				row.Famille_entree2CS3 + ';' +
				row.Genre_entree2CS3 + ';' +
				row.Espece_entree2CS3 + ';' +
				row.Nb_entree2_espece4 + ';' +
				row.Famille_entree2CS4 + ';' +
				row.Genre_entree2CS4 + ';' +				
				row.Espece_entree2CS4 + ';' +
				row.Nb_entree2_espece5 + ';' +
				row.Famille_entree2CS5 + ';' + 
				row.Genre_entree2CS5 + ';' +
				row.Espece_entree2CS5 + ';' +
				row.Nb_entree2_espece6 + ';' +
				row.Famille_entree2CS6 + ';' +
				row.Genre_entree2CS6 + ';' +
				row.Espece_entree2CS6 + ';' +
				row.Nb_entree2_espece7 + ';' +
				row.Famille_entree2CS7 + ';' +
				row.Genre_entree2CS7 + ';' +
				row.Espece_entree2CS7 + ';' +
				row.Nb_entree2_espece8 + ';' +
				row.Famille_entree2CS8 + ';' +
				row.Genre_entree2CS8 + ';' +
				row.Espece_entree1CS8 + ';' +
				row.Famille_observe1 + ';' +
   				row.Genre_observe1 + ';' +
   				row.Espece_observe1 + ';' +
   				row.Famille_observe2 + ';' +
   				row.Genre_observe2 + ';' + 
   				row.Espece_observe2 + ';' + 
   				row.Famille_observe3 + ';' +
   				row.Genre_observe3 + ';' +
   				row.Espece_observe3 + ';' +
   				row.Nb_CS_morte1 + ';' +
   				row.Famille_morte1 + ';' +
   				row.Genre_morte1 + ';' +
   				row.Espece_morte1 + ';' +
   				row.Nb_CS_morte2 + ';' +
   				row.Famille_morte2 + ';' +
   				row.Genre_morte2 + ';' +
   				row.Espece_morte2 + ';' +
   				row.Nb_CS_morte3 + ';' +
   				row.Famille_morte3 + ';' +
   				row.Genre_morte3 + ';' +
   				row.Espece_morte3 + ';' +
   				row.Nb_CS_morte4 + ';' +
   				row.Famille_morte4 + ';' + 
   				row.Genre_morte4 + ';' +
   				row.Espece_morte4 + ';' +
   				row.Remarque + ';' +
				row.Nb_filet_sol + ';' +
				row.IDFilet_1 + ';' +
				row.Filet_sol_m2_1 + ';' +
				row.EntreeFilet_1 + ';' +
				row.HauteurFilet_1 + ';' +
				row.Filet_debut_1 + ';' +
				row.Filet_fin_1 + ';' +
				row.Filet_temps_1 + ';' +
				row.Nb_capture_filet_1 + ';' +
				row.Nb_preleve_filet_1 + ';' +
				row.IDFilet_2 + ';' +
				row.Filet_sol_m2_2 + ';' +
				row.EntreeFilet_2 + ';' +
				row.HauteurFilet_2 + ';' +
				row.Filet_debut_2 + ';' +
				row.Filet_fin_2 + ';' +
				row.Filet_temps_ + ';' +
				row.Nb_capture_filet_2 + ';' +
				row.Nb_preleve_Filet_2 + ';' +
				row.NbHarp + ';' +
				row.IDHarp_1 + ';' +
				row.EntreeHarp_1 + ';' +
				row.Harp_debut_1 + ';' +
				row.Harp_fin_1 + ';' +
				row.Harp_temps_1 + ';' +
				row.Nb_capture_harp_1 + ';' +
				row.Nb_preleve_harp_1 + ';' + 
				row.IDHarp_2 + ';' +
				row.EntreeHarp_2 + ';' +
				row.Harp_debut_2 + ';' +
				row.Harp_fin_2 + ';' + 
				row.Harp_temps_2 + ';' + 
				row.Nb_capture_harp_2 + ';' +
				row.Nb_preleve_harp_2 + ';' +
				row.Saison + ';' +
				row.Climat + ';' +
				row.Precipitation + ';' +
				row.Vent + ';' +
				row.Lune + ';' +
				row.Temperature_logger + ';' +
				row.Humidite_logger + ';' +
   				
				//row.NumDossier_capteur + ';' +
				row.Username + ';\r\n'
		
			} else {			
				if (array_selected_fields.indexOf('Date') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Date;';
					}
					CSV_data = CSV_data + row.Date + ";" 
				};
				if (array_selected_fields.indexOf('Equipe') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Equipe;';
					}
					CSV_data = CSV_data + row.Equipe + ";"
				};
				if (array_selected_fields.indexOf('ID_CS_preleve_debut') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_CS_preleve_debut;';
					}
					CSV_data = CSV_data + row.ID_CS_preleve_debut + ";"
				};
				if (array_selected_fields.indexOf('ID_CS_preleve_fin') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_CS_preleve_fin;';
					}
					CSV_data = CSV_data + row.ID_CS_preleve_fin + ";"
				};
				if (array_selected_fields.indexOf('N_site') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'N_site;';
					}
					CSV_data = CSV_data + row.N_site + ";"
				};
				if (array_selected_fields.indexOf('Date') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Date;';
					}
					CSV_data = CSV_data + row.Date + ";"
				};
				if (array_selected_fields.indexOf('Equipe') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Equipe;';
					}
					CSV_data = CSV_data + row.Equipe + ";"
				};
				if (array_selected_fields.indexOf('Prefecture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Prefecture;';
					}
					CSV_data = CSV_data + Prefecture + ";"
				};				
				if (array_selected_fields.indexOf('Sous-prefecture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Sous-prefecture;';
					}
					CSV_data = CSV_data + Sous_prefecture + ";"
				};				
				if (array_selected_fields.indexOf('Ville_village') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Ville/village;';
					}
					CSV_data = CSV_data + Ville_village + ";"
				};
				if (array_selected_fields.indexOf('Site_capture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Site_capture;';
					}
					CSV_data = CSV_data + Site_capture + ";"
				};
				if (array_selected_fields.indexOf('Environnement') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Environnement;';
					}
					CSV_data = CSV_data + Environnement + ";"
				};
				if (array_selected_fields.indexOf('Latitude') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Latitude;';
					}
					CSV_data = CSV_data + Latitude + ";"
				};
				if (array_selected_fields.indexOf('Lat_degre_dec') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Lat_degre_dec;';
					}
					CSV_data = CSV_data + Lat_degre_dec + ";"
				};
				if (array_selected_fields.indexOf('Longitude') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Longitude;';
					}
					CSV_data = CSV_data + Longitude + ";"
				};
				if (array_selected_fields.indexOf('Long_degre_dec') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Long_degre_dec;';
					}
					CSV_data = CSV_data + Long_degre_dec + ";"
				};
				if (array_selected_fields.indexOf('Proximite_village_km') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Proximite_village_km;';
					}
					CSV_data = CSV_data + Proximite_village_km + ";"
				};
				if (array_selected_fields.indexOf('Proximite_source_m') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Proximite_source_m;';
					}
					CSV_data = CSV_data + Proximite_source_m + ";"
				};
				
				if (array_selected_fields.indexOf('Sortie/entree1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Sortie/entree1;';
					}
					CSV_data = CSV_data + row['Sortie/entree1'] + ";"
				};
				if (array_selected_fields.indexOf('Presence_entree1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_entree1;';
					}
					CSV_data = CSV_data + row.Presence_entree1 + ";"
				};
				if (array_selected_fields.indexOf('Nb_entree1_espece1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_entree1_espece1;';
					}
					CSV_data = CSV_data + row.Nb_entree1_espece1 + ";"
				}; 
				if (array_selected_fields.indexOf('Famille_entree1CS1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_entree1CS1;';
					}
					CSV_data = CSV_data + row.Famille_entree1CS1 + ";"
				};  
				if (array_selected_fields.indexOf('Espece_entree1CS1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_entree1CS1;';
					}
					CSV_data = CSV_data + row.Espece_entree1CS1 + ";"
				}; 
				if (array_selected_fields.indexOf('Nb_entree1_espece2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_entree1_espece2;';
					}
					CSV_data = CSV_data + row.Nb_entree1_espece2 + ";"
				};
				if (array_selected_fields.indexOf('Famille_entree1CS2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_entree1CS2;';
					}
					CSV_data = CSV_data + row.Famille_entree1CS2 + ";"
				};
				if (array_selected_fields.indexOf('Genre_entree1CS2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_entree1CS2;';
					}
					CSV_data = CSV_data + row.Genre_entree1CS2 + ";"
				};
				if (array_selected_fields.indexOf('Nb_entree1_espece3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_entree1_espece3;';
					}
					CSV_data = CSV_data + row.Nb_entree1_espece3 + ";"
				};
				if (array_selected_fields.indexOf('Espece_entree1CS2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_entree1CS2;';
					}
					CSV_data = CSV_data + row.Espece_entree1CS2 + ";"
				};   				
				if (array_selected_fields.indexOf('Famille_entree1CS3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_entree1CS3;';
					}
					CSV_data = CSV_data + row.Famille_entree1CS3 + ";"
				};
				if (array_selected_fields.indexOf('Genre_entree1CS3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_entree1CS3;';
					}
					CSV_data = CSV_data + row.Genre_entree1CS3 + ";"
				};
				if (array_selected_fields.indexOf('Espece_entree1CS3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_entree1CS3;';
					}
					CSV_data = CSV_data + row.Espece_entree1CS3 + ";"
				};
	    		if (array_selected_fields.indexOf('Nb_entree1_espece4') > -1) {
	    			if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_entree1_espece4;';
					}
					CSV_data = CSV_data + row.Nb_entree1_espece4 + ";"
				};
				if (array_selected_fields.indexOf('Famille_entree1CS4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_entree1CS4;';
					}
					CSV_data = CSV_data + row.Famille_entree1CS4 + ";"
				};
				if (array_selected_fields.indexOf('Genre_entree1CS4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_entree1CS4;';
					}
					CSV_data = CSV_data + row.Genre_entree1CS4 + ";"
				};
				if (array_selected_fields.indexOf('Espece_entree1CS4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_entree1CS4;';
					}
					CSV_data = CSV_data + row.Espece_entree1CS4 + ";"
				};
				if (array_selected_fields.indexOf('Nb_entree1_espece5') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_entree1_espece5;';
					}
					CSV_data = CSV_data + row.Nb_entree1_espece5 + ";"
				};
				if (array_selected_fields.indexOf('Famille_entree1CS5') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_entree1CS5;';
					}
					CSV_data = CSV_data + row.Famille_entree1CS5 + ";"
				};
				if (array_selected_fields.indexOf('Genre_entree1CS5') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_entree1CS5;';
					}
					CSV_data = CSV_data + row.Genre_entree1CS5 + ";"
				};
				if (array_selected_fields.indexOf('Espece_entree1CS5') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_entree1CS5;';
					}
					CSV_data = CSV_data + row.Espece_entree1CS5 + ";"
				};
				if (array_selected_fields.indexOf('Nb_entree1_espece6') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_entree1_espece6;';
					}
					CSV_data = CSV_data + row.Nb_entree1_espece6 + ";"
				};
				if (array_selected_fields.indexOf('Famille_entree1CS6') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_entree1CS6;';
					}
					CSV_data = CSV_data + row.Famille_entree1CS6 + ";"
				};
				if (array_selected_fields.indexOf('Genre_entree1CS6') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_entree1CS6;';
					}
					CSV_data = CSV_data + row.Genre_entree1CS6 + ";"
				};
				if (array_selected_fields.indexOf('Espece_entree1CS6') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_entree1CS6;';
					}
					CSV_data = CSV_data + row.Espece_entree1CS6 + ";"
				};
				if (array_selected_fields.indexOf('Nb_entree1_espece7') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_entree1_espece7;';
					}
					CSV_data = CSV_data + row.Nb_entree1_espece7 + ";"
				};
				if (array_selected_fields.indexOf('Famille_entree1CS7') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_entree1CS7;';
					}
					CSV_data = CSV_data + row.Famille_entree1CS7 + ";"
				};
				if (array_selected_fields.indexOf('Genre_entree1CS7') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_entree1CS7;';
					}
					CSV_data = CSV_data + row.Genre_entree1CS7 + ";"
				};
				if (array_selected_fields.indexOf('Espece_entree1CS7') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_entree1CS7;';
					}
					CSV_data = CSV_data + row.Espece_entree1CS7 + ";"
				};
				if (array_selected_fields.indexOf('Nb_entree1_espece8') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_entree1_espece8;';
					}
					CSV_data = CSV_data + row.Nb_entree1_espece8 + ";"
				};
				if (array_selected_fields.indexOf('Famille_entree1CS8') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_entree1CS8;';
					}
					CSV_data = CSV_data + row.Famille_entree1CS8 + ";"
				};
				if (array_selected_fields.indexOf('Genre_entree1CS8') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_entree1CS8;';
					}
					CSV_data = CSV_data + row.Genre_entree1CS8 + ";"
				};
				if (array_selected_fields.indexOf('Espece_entree1CS8') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_entree1CS8;';
					}
					CSV_data = CSV_data + row.Espece_entree1CS8 + ";"
				};		
				
				if (array_selected_fields.indexOf('Sortie/entree2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Sortie/entree2;';
					}
					CSV_data = CSV_data + row['Sortie/entree2'] + ";"
				};
				if (array_selected_fields.indexOf('Presence_entree2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_entree2;';
					}
					CSV_data = CSV_data + row.Presence_entree2 + ";"
				};
				if (array_selected_fields.indexOf('Nb_entree2_espece1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_entree2_espece1;';
					}
					CSV_data = CSV_data + row.Nb_entree2_espece1 + ";"
				}; 
				if (array_selected_fields.indexOf('Famille_entree2CS1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_entree2CS1;';
					}
					CSV_data = CSV_data + row.Famille_entree2CS1 + ";"
				};  
				if (array_selected_fields.indexOf('Espece_entree2CS1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_entree2CS1;';
					}
					CSV_data = CSV_data + row.Espece_entree2CS1 + ";"
				}; 
				if (array_selected_fields.indexOf('Nb_entree2_espece2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_entree2_espece2;';
					}
					CSV_data = CSV_data + row.Nb_entree2_espece2 + ";"
				};
				if (array_selected_fields.indexOf('Famille_entree2CS2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_entree2CS2;';
					}
					CSV_data = CSV_data + row.Famille_entree2CS2 + ";"
				};
				if (array_selected_fields.indexOf('Genre_entree2CS2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_entree2CS2;';
					}
					CSV_data = CSV_data + row.Genre_entree2CS2 + ";"
				};
				if (array_selected_fields.indexOf('Nb_entree2_espece3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_entree2_espece3;';
					}
					CSV_data = CSV_data + row.Nb_entree2_espece3 + ";"
				};
				if (array_selected_fields.indexOf('Espece_entree2CS2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_entree2CS2;';
					}
					CSV_data = CSV_data + row.Espece_entree2CS2 + ";"
				};   				
				if (array_selected_fields.indexOf('Famille_entree2CS3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_entree2CS3;';
					}
					CSV_data = CSV_data + row.Famille_entree2CS3 + ";"
				};
				if (array_selected_fields.indexOf('Genre_entree2CS3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_entree2CS3;';
					}
					CSV_data = CSV_data + row.Genre_entree2CS3 + ";"
				};
				if (array_selected_fields.indexOf('Espece_entree2CS3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_entree2CS3;';
					}
					CSV_data = CSV_data + row.Espece_entree2CS3 + ";"
				};
	    		if (array_selected_fields.indexOf('Nb_entree2_espece4') > -1) {
	    			if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_entree2_espece4;';
					}
					CSV_data = CSV_data + row.Nb_entree2_espece4 + ";"
				};
				if (array_selected_fields.indexOf('Famille_entree2CS4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_entree2CS4;';
					}
					CSV_data = CSV_data + row.Famille_entree2CS4 + ";"
				};
				if (array_selected_fields.indexOf('Genre_entree2CS4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_entree2CS4;';
					}
					CSV_data = CSV_data + row.Genre_entree2CS4 + ";"
				};
				if (array_selected_fields.indexOf('Espece_entree2CS4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_entree2CS4;';
					}
					CSV_data = CSV_data + row.Espece_entree2CS4 + ";"
				};
				if (array_selected_fields.indexOf('Nb_entree2_espece5') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_entree2_espece5;';
					}
					CSV_data = CSV_data + row.Nb_entree2_espece5 + ";"
				};
				if (array_selected_fields.indexOf('Famille_entree2CS5') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_entree2CS5;';
					}
					CSV_data = CSV_data + row.Famille_entree2CS5 + ";"
				};
				if (array_selected_fields.indexOf('Genre_entree2CS5') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_entree2CS5;';
					}
					CSV_data = CSV_data + row.Genre_entree2CS5 + ";"
				};
				if (array_selected_fields.indexOf('Espece_entree2CS5') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_entree2CS5;';
					}
					CSV_data = CSV_data + row.Espece_entree2CS5 + ";"
				};
				if (array_selected_fields.indexOf('Nb_entree2_espece6') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_entree2_espece6;';
					}
					CSV_data = CSV_data + row.Nb_entree2_espece6 + ";"
				};
				if (array_selected_fields.indexOf('Famille_entree2CS6') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_entree2CS6;';
					}
					CSV_data = CSV_data + row.Famille_entree2CS6 + ";"
				};
				if (array_selected_fields.indexOf('Genre_entree2CS6') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_entree2CS6;';
					}
					CSV_data = CSV_data + row.Genre_entree2CS6 + ";"
				};
				if (array_selected_fields.indexOf('Espece_entree2CS6') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_entree2CS6;';
					}
					CSV_data = CSV_data + row.Espece_entree2CS6 + ";"
				};
				if (array_selected_fields.indexOf('Nb_entree2_espece7') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_entree2_espece7;';
					}
					CSV_data = CSV_data + row.Nb_entree2_espece7 + ";"
				};
				if (array_selected_fields.indexOf('Famille_entree2CS7') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_entree2CS7;';
					}
					CSV_data = CSV_data + row.Famille_entree2CS7 + ";"
				};
				if (array_selected_fields.indexOf('Genre_entree2CS7') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_entree2CS7;';
					}
					CSV_data = CSV_data + row.Genre_entree2CS7 + ";"
				};
				if (array_selected_fields.indexOf('Espece_entree2CS7') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_entree2CS7;';
					}
					CSV_data = CSV_data + row.Espece_entree2CS7 + ";"
				};
				if (array_selected_fields.indexOf('Nb_entree2_espece8') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_entree2_espece8;';
					}
					CSV_data = CSV_data + row.Nb_entree2_espece8 + ";"
				};
				if (array_selected_fields.indexOf('Famille_entree2CS8') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_entree2CS8;';
					}
					CSV_data = CSV_data + row.Famille_entree2CS8 + ";"
				};
				if (array_selected_fields.indexOf('Genre_entree2CS8') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_entree2CS8;';
					}
					CSV_data = CSV_data + row.Genre_entree2CS8 + ";"
				};
				if (array_selected_fields.indexOf('Espece_entree2CS8') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_entree2CS8;';
					}
					CSV_data = CSV_data + row.Espece_entree2CS8 + ";"
				};
   				if (array_selected_fields.indexOf('Famille_observe1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe1;';
					}
					CSV_data = CSV_data + row.Famille_observe1 + ";"
				};   	
				if (array_selected_fields.indexOf('Genre_observe1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe1;';
					}
					CSV_data = CSV_data + row.Genre_observe1 + ";"
				};
	    		if (array_selected_fields.indexOf('Espece_observe1') > -1) {
	    			if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe1;';
					}
					CSV_data = CSV_data + row.Espece_observe1 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe2;';
					}
					CSV_data = CSV_data + row.Famille_observe2 + ";"
				}; 
   				if (array_selected_fields.indexOf('Genre_observe2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe2;';
					}
					CSV_data = CSV_data + row.Genre_observe2 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe2;';
					}
					CSV_data = CSV_data + row.Espece_observe2 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe3;';
					}
					CSV_data = CSV_data + row.Famille_observe3 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe3;';
					}
					CSV_data = CSV_data + row.Genre_observe3 + ";"
				};   				
				if (array_selected_fields.indexOf('Espece_observe3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe3;';
					}
					CSV_data = CSV_data + row.Espece_observe3 + ";"
				};
				if (array_selected_fields.indexOf('Nb_CS_morte1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_CS_morte1;';
					}
					CSV_data = CSV_data + row.Nb_CS_morte1 + ";"
				};
	    		if (array_selected_fields.indexOf('Famille_morte1') > -1) {
	    			if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_morte1;';
					}
					CSV_data = CSV_data + row.Famille_morte1 + ";"
				};
				if (array_selected_fields.indexOf('Genre_morte1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_morte1;';
					}
					CSV_data = CSV_data + row.Genre_morte1 + ";"
				}; 
   				if (array_selected_fields.indexOf('Espece_morte1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_morte1;';
					}
					CSV_data = CSV_data + row.Espece_morte1 + ";"
				};
				if (array_selected_fields.indexOf('Nb_CS_morte2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_CS_morte2;';
					}
					CSV_data = CSV_data + row.Nb_CS_morte2 + ";"
				};
				if (array_selected_fields.indexOf('Famille_morte2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_morte2;';
					}
					CSV_data = CSV_data + row.Famille_morte2 + ";"
				};
				if (array_selected_fields.indexOf('Genre_morte2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_morte2;';
					}
					CSV_data = CSV_data + row.Genre_morte2 + ";"
				};
				if (array_selected_fields.indexOf('Espece_morte2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_morte2;';
					}
					CSV_data = CSV_data + row.Espece_morte2 + ";"
				};
	    		if (array_selected_fields.indexOf('Nb_CS_morte3') > -1) {
	    			if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_CS_morte3;';
					}
					CSV_data = CSV_data + row.Nb_CS_morte3 + ";"
				};
				if (array_selected_fields.indexOf('Famille_morte3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_morte3;';
					}
					CSV_data = CSV_data + row.Famille_morte3 + ";"
				}; 
   				if (array_selected_fields.indexOf('Genre_morte3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_morte3;';
					}
					CSV_data = CSV_data + row.Genre_morte3 + ";"
				};
				if (array_selected_fields.indexOf('Espece_morte3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_morte3;';
					}
					CSV_data = CSV_data + row.Espece_morte3 + ";"
				};
				if (array_selected_fields.indexOf('Nb_CS_morte4') > -1) {
	    			if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_CS_morte4;';
					}
					CSV_data = CSV_data + row.Nb_CS_morte4 + ";"
				};
				if (array_selected_fields.indexOf('Famille_morte4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_morte4;';
					}
					CSV_data = CSV_data + row.Famille_morte4 + ";"
				}; 
   				if (array_selected_fields.indexOf('Genre_morte4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_morte4;';
					}
					CSV_data = CSV_data + row.Genre_morte4 + ";"
				};
				if (array_selected_fields.indexOf('Espece_morte4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_morte4';
					}
					CSV_data = CSV_data + row.Espece_morte4 + ";"
				};
				if (array_selected_fields.indexOf('Remarque') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Remarque;';
					}
					CSV_data = CSV_data + row.Remarque + ";"
				};
				if (array_selected_fields.indexOf('Username') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Username;';
					}
					CSV_data = CSV_data + row.Username + ";"
				};
				if (array_selected_fields.indexOf('Nb_filet_sol') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_filet_sol;';
					}
					CSV_data = CSV_data + row.Nb_filet_sol + ";"
				};
				if (array_selected_fields.indexOf('IDFilet_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'IDFilet_1;';
					}
					CSV_data = CSV_data + row.IDFilet_1 + ";"
				};
				if (array_selected_fields.indexOf('Filet_sol_m2_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Filet_sol_m2_1;';
					}
					CSV_data = CSV_data + row.Filet_sol_m2_1 + ";"
				};
				if (array_selected_fields.indexOf('EntreeFilet_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'EntreeFilet_1;';
					}
					CSV_data = CSV_data + row.EntreeFilet_1 + ";"
				};
				if (array_selected_fields.indexOf('HauteurFilet_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'HauteurFilet_1;';
					}
					CSV_data = CSV_data + row.HauteurFilet_1 + ";"
				};
				if (array_selected_fields.indexOf('Filet_debut_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Filet_debut_1;';
					}
					CSV_data = CSV_data + row.Filet_debut_1 + ";"
				};
				if (array_selected_fields.indexOf('Filet_fin_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Filet_fin_1;';
					}
					CSV_data = CSV_data + row.Filet_fin_1 + ";"
				};
				if (array_selected_fields.indexOf('Filet_temps_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Filet_temps_1;';
					}
					CSV_data = CSV_data + row.Filet_temps_1 + ";"
				};
				if (array_selected_fields.indexOf('Nb_capture_filet_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_capture_filet_1;';
					}
					CSV_data = CSV_data + row.Nb_capture_filet_1 + ";"
				};
				if (array_selected_fields.indexOf('Nb_preleve_filet_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_preleve_filet_1;';
					}
					CSV_data = CSV_data + row.Nb_preleve_filet_1 + ";"
				};
				if (array_selected_fields.indexOf('IDFilet_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'IDFilet_2;';
					}
					CSV_data = CSV_data + row.IDFilet_2 + ";"
				};
				if (array_selected_fields.indexOf('Filet_sol_m2_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Filet_sol_m2_2;';
					}
					CSV_data = CSV_data + row.Filet_sol_m2_2 + ";"
				};
				if (array_selected_fields.indexOf('EntreeFilet_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'EntreeFilet_2;';
					}
					CSV_data = CSV_data + row.EntreeFilet_2 + ";"
				};
				if (array_selected_fields.indexOf('HauteurFilet_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'HauteurFilet_2;';
					}
					CSV_data = CSV_data + row.HauteurFilet_2 + ";"
				};
				if (array_selected_fields.indexOf('Filet_debut_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Filet_debut_2;';
					}
					CSV_data = CSV_data + row.Filet_debut_2 + ";"
				};
				if (array_selected_fields.indexOf('Filet_fin_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Filet_fin_2;';
					}
					CSV_data = CSV_data + row.Filet_fin_2 + ";"
				};
				if (array_selected_fields.indexOf('Filet_temps_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Filet_temps_2;';
					}
					CSV_data = CSV_data + row.Filet_temps_2 + ";"
				};
				if (array_selected_fields.indexOf('Nb_capture_filet_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_capture_filet_2;';
					}
					CSV_data = CSV_data + row.Nb_capture_filet_2 + ";"
				};
				if (array_selected_fields.indexOf('Nb_preleve_Filet_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_preleve_Filet_2;';
					}
					CSV_data = CSV_data + row.Nb_preleve_Filet_2 + ";"
				};
				if (array_selected_fields.indexOf('NbHarp') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'NbHarp;';
					}
					CSV_data = CSV_data + row.NbHarp + ";"
				};
				if (array_selected_fields.indexOf('IDHarp_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'IDHarp_1;';
					}
					CSV_data = CSV_data + row.IDHarp_1 + ";"
				};
				if (array_selected_fields.indexOf('EntreeHarp_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'EntreeHarp_1;';
					}
					CSV_data = CSV_data + row.EntreeHarp_1 + ";"
				};
				if (array_selected_fields.indexOf('Harp_debut_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Harp_debut_1;';
					}
					CSV_data = CSV_data + row.Harp_debut_1 + ";"
				};
				if (array_selected_fields.indexOf('Harp_fin_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Harp_fin_1;';
					}
					CSV_data = CSV_data + row.Harp_fin_1 + ";"
				};
				if (array_selected_fields.indexOf('Harp_temps_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Harp_temps_1;';
					}
					CSV_data = CSV_data + row.Harp_temps_1 + ";"
				};
				if (array_selected_fields.indexOf('Nb_capture_harp_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_capture_harp_1;';
					}
					CSV_data = CSV_data + row.Nb_capture_harp_1 + ";"
				};
				if (array_selected_fields.indexOf('Nb_preleve_harp_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_preleve_harp_1;';
					}
					CSV_data = CSV_data + row.Nb_preleve_harp_1 + ";"
				};
				if (array_selected_fields.indexOf('IDHarp_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'IDHarp_2;';
					}
					CSV_data = CSV_data + row.IDHarp_2 + ";"
				};
				if (array_selected_fields.indexOf('EntreeHarp_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'EntreeHarp_2;';
					}
					CSV_data = CSV_data + row.EntreeHarp_2 + ";"
				};
				if (array_selected_fields.indexOf('Harp_debut_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Harp_debut_2;';
					}
					CSV_data = CSV_data + row.Harp_debut_2 + ";"
				};
				if (array_selected_fields.indexOf('Harp_fin_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Harp_fin_2;';
					}
					CSV_data = CSV_data + row.Harp_fin_2 + ";"
				};
				if (array_selected_fields.indexOf('Harp_temps_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Harp_temps_2;';
					}
					CSV_data = CSV_data + row.Harp_temps_2 + ";"
				};
				if (array_selected_fields.indexOf('Nb_capture_harp_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_capture_harp_2;';
					}
					CSV_data = CSV_data + row.Nb_capture_harp_2 + ";"
				};
				if (array_selected_fields.indexOf('Nb_preleve_harp_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_preleve_harp_2;';
					}
					CSV_data = CSV_data + row.Nb_preleve_harp_2 + ";"
				};
				if (array_selected_fields.indexOf('Saison') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Saison;';
					}
					CSV_data = CSV_data + row.Saison + ";"
				};
				if (array_selected_fields.indexOf('Climat') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Climat;';
					}
					CSV_data = CSV_data + row.Climat + ";"
				};
				if (array_selected_fields.indexOf('Precipitation') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Precipitation;';
					}
					CSV_data = CSV_data + row.Precipitation + ";"
				};
				if (array_selected_fields.indexOf('Vent') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Vent;';
					}
					CSV_data = CSV_data + row.Vent + ";"
				};
				if (array_selected_fields.indexOf('Lune') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Lune;';
					}
					CSV_data = CSV_data + row.Lune + ";"
				};
				if (array_selected_fields.indexOf('Temperature_logger') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Temperature_logger;';
					}
					CSV_data = CSV_data + row.Temperature_logger + ";"
				};
				if (array_selected_fields.indexOf('Humidite_logger') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Humidite_logger;';
					}
					CSV_data = CSV_data + row.Humidite_logger + ";"
				};				
				
				if (array_selected_fields.indexOf('Username') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Username;';
					}
					CSV_data = CSV_data + row.Username + ";"
				};
				/*if (array_selected_fields.indexOf('Filet_temps') > -1) {
					CSV_data = CSV_data + Filet_temps + ";"
				};
				if (array_selected_fields.indexOf('Arret_Capture') > -1) {
					CSV_data = CSV_data + Arret_Capture + ";"
				};*/
				
				if (add_heading) {
					CSV_heading = CSV_heading + "\r\n";
					CSV_data = CSV_heading + CSV_data + "\r\n"
					add_heading = false;
				} else {
					CSV_data = CSV_data + "\r\n";
				}
			}
			
			console.log(count);
			if (count == 0) {
				var blob = new Blob(['\ufeff' + CSV_data], {type: "text/csv;charset=ISO-8859-1"});
	       		saveAs(blob, "ebo-sursy" + clock.now + ".csv");
			}	
			
	} 
			
	
}

$('#export_all_fields').click(function(){
	CSV_data = fields_CSV_head;
	
	var res = alasql("SELECT Date, Equipe, ID_CS_preleve_debut, ID_CS_preleve_fin, N_site, Pays, Prefecture, [Sous-prefecture], [Ville/village], Site_capture, Environnement, Latitude, Lat_degre_dec, Longitude, Long_degre_dec, Proximite_village_km, Proximite_source_m, [Sortie/entree1], Presence_entree2, Nb_entree1_espece1, Famille_entree1CS1, Genre_entree1CS1, Espece_entree1CS1, Nb_entree1_espece2, Famille_entree1CS2, Genre_entree1CS2, Espece_entree1CS2, Nb_entree1_espece3, Famille_entree1CS3, Genre_entree1CS3, Espece_entree1CS3, Nb_entree1_espece4, Famille_entree1CS4, Genre_entree1CS4, Espece_entree1CS4, Nb_entree1_espece5, Famille_entree1CS5, Genre_entree1CS5, Espece_entree1CS5, Nb_entree1_espece6, Famille_entree1CS6, Genre_entree1CS6, Espece_entree1CS6, Nb_entree1_espece7, Famille_entree1CS7, Genre_entree1CS7, Espece_entree1CS7, Nb_entree1_espece8, Famille_entree1CS8, Genre_entree1CS8, Espece_entree1CS8, Sortie/entree2, Presence_entree2, Nb_entree2_espece1, Famille_entree2CS1, Genre_entree2CS1, Espece_entree2CS1, Nb_entree2_espece2, Famille_entree2CS2, Genre_entree2CS2, Espece_entree2CS2, Nb_entree2_espece3, Famille_entree2CS3, Genre_entree2CS3, Espece_entree2CS3, Nb_entree2_espece4, Famille_entree2CS4, Genre_entree2CS4, Espece_entree2CS4, Nb_entree2_espece5, Famille_entree2CS5, Genre_entree2CS5, Espece_entree2CS5, Nb_entree2_espece6, Famille_entree2CS6, Genre_entree2CS6, Espece_entree2CS6, Nb_entree2_espece7, Famille_entree2CS7, Genre_entree2CS7, Espece_entree2CS7, Nb_entree2_espece8, Famille_entree2CS8, Genre_entree2CS8, Espece_entree2CS8, Famille_observe1, Genre_observe1, Espece_observe1, Famille_observe2, Genre_observe2, Espece_observe2, Famille_observe3, Genre_observe3, Espece_observe3, Nb_CS_morte1, Famille_morte1, Genre_morte1, Espece_morte1, Nb_CS_morte2, Famille_morte2, Genre_morte2, Espece_morte2, Nb_CS_morte3, Famille_morte3, Genre_morte3, Espece_morte3, Nb_CS_morte4, Famille_morte4, Genre_morte4, Espece_morte4, Remarque, Nb_filet_sol, IDFilet_1, Filet_sol_m2_1, EntreeFilet_1, HauteurFilet_1, Filet_debut_1, Filet_fin_1, Filet_temps_1, Nb_capture_filet_1, Nb_preleve_filet_1, IDFilet_2, Filet_sol_m2_2, EntreeFilet_2, HauteurFilet_2, Filet_debut_2, Filet_fin_2, Filet_temps_2, Nb_capture_filet_2, Nb_preleve_Filet_2, NbHarp, IDHarp_1, EntreeHarp_1, Harp_debut_1, Harp_fin_1, Harp_temps_1, Nb_capture_harp_1, Nb_preleve_harp_1, IDHarp_2, EntreeHarp_2, Harp_debut_2, Harp_fin_2, Harp_temps_2, Nb_capture_harp_2, Nb_preleve_harp_2, Saison, Climat, Precipitation, Vent, Lune, Temperature_logger, Humidite_logger, Username  FROM ? ORDER BY Date", [tab_journalieres] );
			
    var journalieres = JSON.stringify(res);
    			
    var obj_journalieres = JSON.parse(journalieres);
	   
    /*function wait(ms){
       var start = new Date().getTime();
       var end = start;
       while(end < start + ms) {
         end = new Date().getTime();
      }
    }

    wait(10000)*/
    
    res.forEach(function(row){
    	//wait(10);
		console.log(row.N_identification_CS)
		//alert(count)
		if (count == i) {
			addJournalieres(row, false);
		}
		
		
	}).catch(function (err) {
		console.log(err);
	});
})


$('#export_selected_fields').click(function(){
	var res = alasql("SELECT Date, Equipe, ID_CS_preleve_debut, ID_CS_preleve_fin, N_site, Pays, Prefecture, [Sous-prefecture], [Ville/village], Site_capture, Environnement, Latitude, Lat_degre_dec, Longitude, Long_degre_dec, Proximite_village_km, Proximite_source_m, [Sortie/entree1], Presence_entree1, Nb_entree1_espece1, Famille_entree1CS1, Genre_entree1CS1, Espece_entree1CS1, Nb_entree1_espece2, Famille_entree1CS2, Genre_entree1CS2, Espece_entree1CS2, Nb_entree1_espece3, Famille_entree1CS3, Genre_entree1CS3, Espece_entree1CS3, Nb_entree1_espece4, Famille_entree1CS4, Genre_entree1CS4, Espece_entree1CS4, Nb_entree1_espece5, Famille_entree1CS5, Genre_entree1CS5, Espece_entree1CS5, Nb_entree1_espece6, Famille_entree1CS6, Genre_entree1CS6, Espece_entree1CS6, Nb_entree1_espece7, Famille_entree1CS7, Genre_entree1CS7, Espece_entree1CS7, Nb_entree1_espece8, Famille_entree1CS8, Genre_entree1CS8, Espece_entree1CS8, Sortie/entree2, Presence_entree2, Nb_entree2_espece1, Famille_entree2CS1, Genre_entree2CS1, Espece_entree2CS1, Nb_entree2_espece2, Famille_entree2CS2, Genre_entree2CS2, Espece_entree2CS2, Nb_entree2_espece3, Famille_entree2CS3, Genre_entree2CS3, Espece_entree2CS3, Nb_entree2_espece4, Famille_entree2CS4, Genre_entree2CS4, Espece_entree2CS4, Nb_entree2_espece5, Famille_entree2CS5, Genre_entree2CS5, Espece_entree2CS5, Nb_entree2_espece6, Famille_entree2CS6, Genre_entree2CS6, Espece_entree2CS6, Nb_entree2_espece7, Famille_entree2CS7, Genre_entree2CS7, Espece_entree2CS7, Nb_entree2_espece8, Famille_entree2CS8, Genre_entree2CS8, Espece_entree2CS8, Famille_observe1, Genre_observe1, Espece_observe1, Famille_observe2, Genre_observe2, Espece_observe2, Famille_observe3, Genre_observe3, Espece_observe3, Nb_CS_morte1, Famille_morte1, Genre_morte1, Espece_morte1, Nb_CS_morte2, Famille_morte2, Genre_morte2, Espece_morte2, Nb_CS_morte3, Famille_morte3, Genre_morte3, Espece_morte3, Nb_CS_morte4, Famille_morte4, Genre_morte4, Espece_morte4, Remarque, Nb_filet_sol, IDFilet_1, Filet_sol_m2_1, EntreeFilet_1, HauteurFilet_1, Filet_debut_1, Filet_fin_1, Filet_temps_1, Nb_capture_filet_1, Nb_preleve_filet_1, IDFilet_2, Filet_sol_m2_2, EntreeFilet_2, HauteurFilet_2, Filet_debut_2, Filet_fin_2, Filet_temps_2, Nb_capture_filet_2, Nb_preleve_Filet_2, NbHarp, IDHarp_1, EntreeHarp_1, Harp_debut_1, Harp_fin_1, Harp_temps_1, Nb_capture_harp_1, Nb_preleve_harp_1, IDHarp_2, EntreeHarp_2, Harp_debut_2, Harp_fin_2, Harp_temps_2, Nb_capture_harp_2, Nb_preleve_harp_2, Saison, Climat, Precipitation, Vent, Lune, Temperature_logger, Humidite_logger, Username  FROM ? ORDER BY Date", [tab_journalieres] );
    			
    var CS = JSON.stringify(res);
    			
    var obj_CS = JSON.parse(CS);
	   
    /*function wait(ms){
       var start = new Date().getTime();
       var end = start;
       while(end < start + ms) {
         end = new Date().getTime();
      }
    }

    wait(10000)*/
    
    res.forEach(function(row){
    	//wait(10);
		console.log(row.Date)
		//alert(count)
		if (count == i) {
			addJournalieres(row, true);
		}
		
		
	}).catch(function (err) {
		console.log(err);
	});
})

document.getElementById("add_selection_criteria").disabled = true;

var multiselect1 = document.getElementById("multiselect1");
for (var i = 0; i < fields.length; i++) {
	multiselect1.options[i] = new Option(fields[i], fields[i]);
};


	
