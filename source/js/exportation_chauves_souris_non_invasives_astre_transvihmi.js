var fields = 
    			['Equipe', 'N_site', 'Pays', 'Prefecture', ['Sous-prefecture'], ['Ville/village'], 
    				'Site_capture', 'Environnement', 'Latitude', 'Lat_degre_dec', 'Longitude', 
    				'Long_degre_dec', 'Proximite_village_km', 'Proximite_source_m', 'Date_debut_NI', 
    				'Heure_debut_NI', 'Date_fin_NI', 'Heure_fin_NI', 'Estimation_population', 
    				'Changement_disposition_espece', ['Précisez'], 'Famille_observe_1', 'Genre_observe_1', 
    				'Espece_observe_1', 'Famille_observe_2', 'Genre_observe_2', 'Espece_observe_2', 
    				'Famille_observe_3', 'Genre_observe_3', 'Espece_observe_3', 'Famille_observe_4', 
    				'Genre_observe_4', 'Espece_observe_4', 'Famille_observe_5', 'Genre_observe_5', 
    				'Espece_observe_5', 'ID_NI_preleve_debut', 'ID_NI_preleve_fin', 'Famille_observe1_bache_1', 
    				'Genre_observe1_bache_1', 'Espece_observe1_bache_1', 'Famille_observe2_bache_1', 
    				'Genre_observe2_bache_1', 'Espece_observe2_bache_1', 'ID_NI_debut_bache_1', 
    				'ID_NI_fin_bache_1', 'Famille_observe1_bache_2', 'Genre_observe1_bache_2', 
    				'Espece_observe1_bache_2', 'Famille_observe2_bache_2', 'Genre_observe2_bache_2', 
    				'Espece_observe2_bache_2', 'ID_NI_debut_bache_2', 'ID_NI_fin_bache_2', 
    				'Famille_observe1_bache_3', 'Genre_observe1_bache_3', 'Espece_observe1_bache_3', 
    				'Famille_observe2_bache_3', 'Genre_observe2_bache_3', 'Espece_observe2_bache_3', 
    				'ID_NI_debut_bache_3', 'ID_NI_fin_bache_3', 'Famille_observe1_bache_4', 
    				'Genre_observe1_bache_4', 'Espece_observe1_bache_4', 'Famille_observe2_bache_4', 
    				'Genre_observe2_bache_4', 'Espece_observe2_bache_4', 'ID_NI_debut_bache_4', 
    				'ID_NI_fin_bache_4', 'Famille_observe1_bache_5', 'Genre_observe1_bache_5', 
    				'Espece_observe1_bache_5', 'Famille_observe2_bache_5', 'Genre_observe2_bache_5', 
    				'Espece_observe2_bache_5', 'ID_NI_debut_bache_5', 'ID_NI_fin_bache_5', 
    				'Famille_observe1_bache_6', 'Genre_observe1_bache_6', 'Espece_observe1_bache_6', 
    				'Famille_observe2_bache_6', 'Genre_observe2_bache_6', 'Espece_observe2_bache_6', 
    				'ID_NI_debut_bache_6', 'ID_NI_fin_bache_6', 'Famille_observe1_bache_7', 
    				'Genre_observe1_bache_7', 'Espece_observe1_bache_7', 'Famille_observe2_bache_7', 
    				'Genre_observe2_bache_7', 'Espece_observe2_bache_7', 'ID_NI_debut_bache_7', 
    				'ID_NI_fin_bache_7', 'Famille_observe1_bache_8', 'Genre_observe1_bache_8', 
    				'Espece_observe1_bache_8', 'Famille_observe2_bache_8', 'Genre_observe2_bache_8', 
    				'Espece_observe2_bache_8', 'ID_NI_debut_bache_8', 'ID_NI_fin_bache_8', 
    				'Famille_observe1_bache_9', 'Genre_observe1_bache_9', 'Espece_observe1_bache_9', 
    				'Famille_observe2_bache_9', 'Genre_observe2_bache_9', 'Espece_observe2_bache_9', 
    				'ID_NI_debut_bache_9', 'ID_NI_fin_bache_9', 'Famille_observe1_bache_10', 
    				'Genre_observe1_bache_10', 'Espece_observe1_bache_10', 'Famille_observe2_bache_10', 
    				'Genre_observe2_bache_10', 'Espece_observe2_bache_10', 'ID_NI_debut_bache_10', 'ID_NI_fin_bache_10', 
    				'Remarque', 'Username']

    				
var fields_CSV_head = 'Equipe;N_site;Pays;Prefecture;Sous-prefecture;Ville/village;' +
						'Site_capture;Environnement;Latitude;Lat_degre_dec;Longitude;' + 
						'Long_degre_dec;Proximite_village_km;Proximite_source_m;Date_debut_NI;' + 
						'Heure_debut_NI;Date_fin_NI;Heure_fin_NI;Estimation_population;' + 
						'Changement_disposition_espece;Précisez;Famille_observe_1;Genre_observe_1;' + 
						'Espece_observe_1;Famille_observe_2;Genre_observe_2;Espece_observe_2;' + 
						'Famille_observe_3;Genre_observe_3;Espece_observe_3;Famille_observe_4;' + 
						'Genre_observe_4;Espece_observe_4;Famille_observe_5;Genre_observe_5;' + 
						'Espece_observe_5;ID_NI_preleve_debut;ID_NI_preleve_fin;Famille_observe1_bache_1;' + 
						'Genre_observe1_bache_1;Espece_observe1_bache_1;Famille_observe2_bache_1;' + 
						'Genre_observe2_bache_1;Espece_observe2_bache_1;ID_NI_debut_bache_1;' + 
						'ID_NI_fin_bache_1;Famille_observe1_bache_2;Genre_observe1_bache_2;' + 
						'Espece_observe1_bache_2;Famille_observe2_bache_2;Genre_observe2_bache_2;' + 
						'Espece_observe2_bache_2;ID_NI_debut_bache_2;ID_NI_fin_bache_2;' + 
						'Famille_observe1_bache_3;Genre_observe1_bache_3;Espece_observe1_bache_3;' + 
						'Famille_observe2_bache_3;Genre_observe2_bache_3;Espece_observe2_bache_3;' + 
						'ID_NI_debut_bache_3;ID_NI_fin_bache_3;Famille_observe1_bache_4;' + 
						'Genre_observe1_bache_4;Espece_observe1_bache_4;Famille_observe2_bache_4;' + 
						'Genre_observe2_bache_4;Espece_observe2_bache_4;ID_NI_debut_bache_4;' + 
						'ID_NI_fin_bache_4;Famille_observe1_bache_5;Genre_observe1_bache_5;' + 
						'Espece_observe1_bache_5;Famille_observe2_bache_5;Genre_observe2_bache_5;' + 
						'Espece_observe2_bache_5;ID_NI_debut_bache_5;ID_NI_fin_bache_5;' + 
						'Famille_observe1_bache_6;Genre_observe1_bache_6;Espece_observe1_bache_6;' + 
						'Famille_observe2_bache_6;Genre_observe2_bache_6;Espece_observe2_bache_6;' + 
						'ID_NI_debut_bache_6;ID_NI_fin_bache_6;Famille_observe1_bache_7;' + 
						'Genre_observe1_bache_7;Espece_observe1_bache_7;Famille_observe2_bache_7;' + 
						'Genre_observe2_bache_7;Espece_observe2_bache_7;ID_NI_debut_bache_7;' + 
						'ID_NI_fin_bache_7;Famille_observe1_bache_8;Genre_observe1_bache_8;' + 
						'Espece_observe1_bache_8;Famille_observe2_bache_8;Genre_observe2_bache_8;' + 
						'Espece_observe2_bache_8;ID_NI_debut_bache_8;ID_NI_fin_bache_8;' + 
						'Famille_observe1_bache_9;Genre_observe1_bache_9;Espece_observe1_bache_9;' + 
						'Famille_observe2_bache_9;Genre_observe2_bache_9;Espece_observe2_bache_9;' + 
						'ID_NI_debut_bache_9;ID_NI_fin_bache_9;Famille_observe1_bache_10;' + 
						'Genre_observe1_bache_10;Espece_observe1_bache_10;Famille_observe2_bache_10;' + 
						'Genre_observe2_bache_10;Espece_observe2_bache_10;ID_NI_debut_bache_10;ID_NI_fin_bache_10;' + 
						'Remarque;Username;\r\n';

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
	var DBCI = new PouchDB(remote_couchdb + 'chauves_souris_non_invasives_astre_transvihmi_guinee' + debug);
} else {
	var DBCI = new PouchDB('chauves_souris_non_invasives_astre_transvihmi_guinee' + debug);
};

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DBCaraterisations = new PouchDB(remote_couchdb + 'caracterisations_grottes' + nom_table + debug);
} else {
	var DBCaraterisations = new PouchDB('caracterisations_grottes' + nom_table + debug);
};

var tab_CI = new Array();
var tab_CI_sorted = new Array();
var tab = new Array();


DBCI.allDocs({  		
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
   				
   				obj.Equipe = row.doc.Equipe
   				obj.N_site = row.doc.N_site 
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
   				obj.Date_debut_NI = row.doc.Date_debut_NI
   				obj.Heure_debut_NI = row.doc.Heure_debut_NI
   				obj.Date_fin_NI = row.doc.Date_fin_NI
   				obj.Heure_fin_NI = row.doc.Heure_fin_NI
   				obj.Estimation_population = row.doc.Estimation_population
   				obj.Changement_disposition_espece = row.doc.Changement_disposition_espece
   				obj['Précisez'] = row.doc['Précisez']
   				obj.Famille_observe_1 = row.doc.Famille_observe_1
   				obj.Genre_observe_1 = row.doc.Genre_observe_1
   				obj.Espece_observe_1 = row.doc.Espece_observe_1
   				obj.Famille_observe_2 = row.doc.Famille_observe_2
   				obj.Genre_observe_2 = row.doc.Genre_observe_2
   				obj.Espece_observe_2 = row.doc.Espece_observe_2
   				obj.Famille_observe_3 = row.doc.Famille_observe_3
   				obj.Genre_observe_3 = row.doc.Genre_observe_3
   				obj.Espece_observe_3 = row.doc.Espece_observe_3
   				obj.Famille_observe_4 = row.doc.Famille_observe_4 
   				obj.Genre_observe_4 = row.doc.Genre_observe_4
   				obj.Espece_observe_4 = row.doc.Espece_observe_4
   				obj.Famille_observe_5 = row.doc.Famille_observe_5
   				obj.Genre_observe_5 = row.doc.Genre_observe_5
   				obj.Espece_observe_5 = row.doc.Espece_observe_5
   				obj.ID_NI_preleve_debut = row.doc.ID_NI_preleve_debut
   				obj.ID_NI_preleve_fin = row.doc.ID_NI_preleve_fin
   				obj.Famille_observe1_bache_1 = row.doc.Famille_observe1_bache_1 
   				obj.Genre_observe1_bache_1 = row.doc.Genre_observe1_bache_1
   				obj.Espece_observe1_bache_1 = row.doc.Espece_observe1_bache_1
   				obj.Famille_observe2_bache_1 = row.doc.Famille_observe2_bache_1 
   				obj.Genre_observe2_bache_1 = row.doc.Genre_observe2_bache_1
   				obj.Espece_observe2_bache_1 = row.doc.Espece_observe2_bache_1
   				obj.ID_NI_debut_bache_1 = row.doc.ID_NI_debut_bache_1 
   				obj.ID_NI_fin_bache_1 = row.doc.ID_NI_fin_bache_1
   				obj.Famille_observe1_bache_2 = row.doc.Famille_observe1_bache_2
   				obj.Genre_observe1_bache_2 = row.doc.Genre_observe1_bache_2
   				obj.Espece_observe1_bache_2 = row.doc.Espece_observe1_bache_2
   				obj.Famille_observe2_bache_2 = row.doc.Famille_observe2_bache_2
   				obj.Genre_observe2_bache_2 = row.doc.Genre_observe2_bache_2
   				obj.Espece_observe2_bache_2 = row.doc.Espece_observe2_bache_2
   				obj.ID_NI_debut_bache_2 = row.doc.ID_NI_debut_bache_2
   				obj.ID_NI_fin_bache_2 = row.doc.ID_NI_fin_bache_2
   				obj.Famille_observe1_bache_3 = row.doc.Famille_observe1_bache_3
   				obj.Genre_observe1_bache_3 = row.doc.Genre_observe1_bache_3
   				obj.Espece_observe1_bache_3 = row.doc.Espece_observe1_bache_3
   				obj.Famille_observe2_bache_3 = row.doc.Famille_observe2_bache_3
   				obj.Genre_observe2_bache_3 = row.doc.Genre_observe2_bache_3
   				obj.Espece_observe2_bache_3 = row.doc.Espece_observe2_bache_3 
   				obj.ID_NI_debut_bache_3 = row.doc.ID_NI_debut_bache_3
   				obj.ID_NI_fin_bache_3 = row.doc.ID_NI_fin_bache_3
   				obj.Famille_observe1_bache_4 = row.doc.Famille_observe1_bache_4 
   				obj.Genre_observe1_bache_4 = row.doc.Genre_observe1_bache_4
   				obj.Espece_observe1_bache_4 = row.doc.Espece_observe1_bache_4
   				obj.Famille_observe2_bache_4 = row.doc.Famille_observe2_bache_4 
   				obj.Genre_observe2_bache_4 = row.doc.Genre_observe2_bache_4
   				obj.Espece_observe2_bache_4 = row.doc.Espece_observe2_bache_4
   				obj.ID_NI_debut_bache_4 = row.doc.ID_NI_debut_bache_4
   				obj.ID_NI_fin_bache_4 = row.doc.ID_NI_fin_bache_4
   				obj.Famille_observe1_bache_5 = row.doc.Famille_observe1_bache_5
   				obj.Genre_observe1_bache_5 = row.doc.Genre_observe1_bache_5 
   				obj.Espece_observe1_bache_5 = row.doc.Espece_observe1_bache_5
   				obj.Famille_observe2_bache_5 = row.doc.Famille_observe2_bache_5
   				obj.Genre_observe2_bache_5 = row.doc.Genre_observe2_bache_5 
   				obj.Espece_observe2_bache_5 = row.doc.Espece_observe2_bache_5
   				obj.ID_NI_debut_bache_5 = row.doc.ID_NI_debut_bache_5
   				obj.ID_NI_fin_bache_5 = row.doc.ID_NI_fin_bache_5
   				obj.Famille_observe1_bache_6 = row.doc.Famille_observe1_bache_6
   				obj.Genre_observe1_bache_6 = row.doc.Genre_observe1_bache_6
   				obj.Espece_observe1_bache_6 = row.doc.Espece_observe1_bache_6
   				obj.Famille_observe2_bache_6 = row.doc.Famille_observe2_bache_6
   				obj.Genre_observe2_bache_6 = row.doc.Genre_observe2_bache_6
   				obj.Espece_observe2_bache_6 = row.doc.Espece_observe2_bache_6 
   				obj.ID_NI_debut_bache_6 = row.doc.ID_NI_debut_bache_6
   				obj.ID_NI_fin_bache_6 = row.doc.ID_NI_fin_bache_6
   				obj.Famille_observe1_bache_7 = row.doc.Famille_observe1_bache_7 
   				obj.Genre_observe1_bache_7 = row.doc.Genre_observe1_bache_7
   				obj.Espece_observe1_bache_7 = row.doc.Espece_observe1_bache_7
   				obj.Famille_observe2_bache_7 = row.doc.Famille_observe2_bache_7
   				obj.Genre_observe2_bache_7 = row.doc.Genre_observe2_bache_7
   				obj.Espece_observe2_bache_7 = row.doc.Espece_observe2_bache_7
   				obj.ID_NI_debut_bache_7 = row.doc.ID_NI_debut_bache_7 
   				obj.ID_NI_fin_bache_7 = row.doc.ID_NI_fin_bache_7
   				obj.Famille_observe1_bache_8 = row.doc.Famille_observe1_bache_8
   				obj.Genre_observe1_bache_8 = row.doc.Genre_observe1_bache_8 
   				obj.Espece_observe1_bache_8 = row.doc.Espece_observe1_bache_8
   				obj.Famille_observe2_bache_8 = row.doc.Famille_observe2_bache_8
   				obj.Genre_observe2_bache_8 = row.doc.Genre_observe2_bache_8
   				obj.Espece_observe2_bache_8 = row.doc.Espece_observe2_bache_8
   				obj.ID_NI_debut_bache_8 = row.doc.ID_NI_debut_bache_8
   				obj.ID_NI_fin_bache_8 = row.doc.ID_NI_fin_bache_8
   				obj.Famille_observe1_bache_9 = row.doc.Famille_observe1_bache_9
   				obj.Genre_observe1_bache_9 = row.doc.Genre_observe1_bache_9
   				obj.Espece_observe1_bache_9 = row.doc.Espece_observe1_bache_9
   				obj.Famille_observe2_bache_9 = row.doc.Famille_observe2_bache_9
   				obj.Genre_observe2_bache_9 = row.doc.Genre_observe2_bache_9
   				obj.Espece_observe2_bache_9 = row.doc.Espece_observe2_bache_9
   				obj.ID_NI_debut_bache_9 = row.doc.ID_NI_debut_bache_9
   				obj.ID_NI_fin_bache_9 = row.doc.ID_NI_fin_bache_9
   				obj.Famille_observe1_bache_10 = row.doc.Famille_observe1_bache_10
   				obj.Genre_observe1_bache_10 = row.doc.Genre_observe1_bache_10
   				obj.Espece_observe1_bache_10 = row.doc.Espece_observe1_bache_10
   				obj.Famille_observe2_bache_10 = row.doc.Famille_observe2_bache_10
   				obj.Genre_observe2_bache_10 = row.doc.Genre_observe2_bache_10
   				obj.Espece_observe2_bache_10 = row.doc.Espece_observe2_bache_10
   				obj.ID_NI_debut_bache_10 = row.doc.ID_NI_debut_bache_10
   				obj.ID_NI_fin_bache_10 = row.doc.ID_NI_fin_bache_10
   				obj.Remarque = row.doc.Remarque
   				obj.Username = row.doc.Username 

   				tab_CI.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}
}).then(function () {
	
	/*tab_CI_sorted = tab_CI.sort(
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
		
		
		
		DBCI.info().then((infos) => {
			
			count = infos.doc_count;
			
			
			
			
			
			
			
		}).catch((error) => {
		});
		
		
	}).catch(function (err) {
	   	console.log(err);
	});

	
}).catch(function (err) {
   	console.log(err);
});

function addChauves_souris_non_invasives(row, selected) {
	
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
			if (row.Prefecture != null) {
				Prefecture = row.Prefecture;
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
				row.Equipe + ';' + 
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
				row.Date_debut_NI + ';' + 
   				row.Heure_debut_NI + ';' + 
   				row.Date_fin_NI + ';' + 
   				row.Heure_fin_NI + ';' + 
   				row.Estimation_population + ';' + 
   				row.Changement_disposition_espece + ';' + 
   				row['Précisez'] + ';' + 
   				row.Famille_observe_1 + ';' +
   				row.Genre_observe_1 + ';' +
   				row.Espece_observe_1 + ';' +
   				row.Famille_observe_2 + ';' +
   				row.Genre_observe_2 + ';' +
   				row.Espece_observe_2 + ';' +
   				row.Famille_observe_3 + ';' +
   				row.Genre_observe_3 + ';' +
   				row.Espece_observe_3 + ';' +
   				row.Famille_observe_4 + ';' +
   				row.Genre_observe_4 + ';' +
   				row.Espece_observe_4 + ';' +
   				row.Famille_observe_5 + ';' +
   				row.Genre_observe_5 + ';' +
   				row.Espece_observe_5 + ';' +
   				row.ID_NI_preleve_debut + ';' +
   				row.ID_NI_preleve_fin + ';' +
   				row.Famille_observe1_bache_1 + ';' +
   				row.Genre_observe1_bache_1 + ';' +
   				row.Espece_observe1_bache_1 + ';' +
   				row.Famille_observe2_bache_1 + ';' +
   				row.Genre_observe2_bache_1 + ';' +
   				row.Espece_observe2_bache_1 + ';' +
   				row.ID_NI_debut_bache_1 + ';' +
   				row.ID_NI_fin_bache_1 + ';' +
   				row.Famille_observe1_bache_2 + ';' +
   				row.Genre_observe1_bache_2 + ';' +
   				row.Espece_observe1_bache_2 + ';' +
   				row.Famille_observe2_bache_2 + ';' +
   				row.Genre_observe2_bache_2 + ';' +
   				row.Espece_observe2_bache_2 + ';' +
   				row.ID_NI_debut_bache_2 + ';' +
   				row.ID_NI_fin_bache_2 + ';' +
   				row.Famille_observe1_bache_3 + ';' +
   				row.Genre_observe1_bache_3 + ';' +
   				row.Espece_observe1_bache_3 + ';' +
   				row.Famille_observe2_bache_3 + ';' +
   				row.Genre_observe2_bache_3 + ';' +
   				row.Espece_observe2_bache_3 + ';' +
   				row.ID_NI_debut_bache_3 + ';' +
   				row.ID_NI_fin_bache_3 + ';' +
   				row.Famille_observe1_bache_4 + ';' +
   				row.Genre_observe1_bache_4 + ';' +
   				row.Espece_observe1_bache_4 + ';' +
   				row.Famille_observe2_bache_4 + ';' +
   				row.Genre_observe2_bache_4 + ';' +
   				row.Espece_observe2_bache_4 + ';' +
   				row.ID_NI_debut_bache_4 + ';' +
   				row.ID_NI_fin_bache_4 + ';' +
   				row.Famille_observe1_bache_5 + ';' +
   				row.Genre_observe1_bache_5 + ';' +
   				row.Espece_observe1_bache_5 + ';' +
   				row.Famille_observe2_bache_5 + ';' +
   				row.Genre_observe2_bache_5 + ';' +
   				row.Espece_observe2_bache_5 + ';' +
   				row.ID_NI_debut_bache_5 + ';' +
   				row.ID_NI_fin_bache_5 + ';' +
   				row.Famille_observe1_bache_6 + ';' +
   				row.Genre_observe1_bache_6 + ';' +
   				row.Espece_observe1_bache_6 + ';' +
   				row.Famille_observe2_bache_6 + ';' +
   				row.Genre_observe2_bache_6 + ';' +
   				row.Espece_observe2_bache_6 + ';' +
   				row.ID_NI_debut_bache_6 + ';' +
   				row.ID_NI_fin_bache_6 + ';' +
   				row.Famille_observe1_bache_7 + ';' +
   				row.Genre_observe1_bache_7 + ';' +
   				row.Espece_observe1_bache_7 + ';' +
   				row.Famille_observe2_bache_7 + ';' +
   				row.Genre_observe2_bache_7 + ';' +
   				row.Espece_observe2_bache_7 + ';' +
   				row.ID_NI_debut_bache_7 + ';' +
   				row.ID_NI_fin_bache_7 + ';' +
   				row.Famille_observe1_bache_8 + ';' +
   				row.Genre_observe1_bache_8 + ';' +
   				row.Espece_observe1_bache_8 + ';' +
   				row.Famille_observe2_bache_8 + ';' +
   				row.Genre_observe2_bache_8 + ';' +
   				row.Espece_observe2_bache_8 + ';' +
   				row.ID_NI_debut_bache_8 + ';' +
   				row.ID_NI_fin_bache_8 + ';' +
   				row.Famille_observe1_bache_9 + ';' +
   				row.Genre_observe1_bache_9 + ';' +
   				row.Espece_observe1_bache_9 + ';' +
   				row.Famille_observe2_bache_9 + ';' +
   				row.Genre_observe2_bache_9 + ';' +
   				row.Espece_observe2_bache_9 + ';' +
   				row.ID_NI_debut_bache_9 + ';' +
   				row.ID_NI_fin_bache_9 + ';' +
   				row.Famille_observe1_bache_10 + ';' +
   				row.Genre_observe1_bache_10 + ';' +
   				row.Espece_observe1_bache_10 + ';' +
   				row.Famille_observe2_bache_10 + ';' +
   				row.Genre_observe2_bache_10 + ';' +
   				row.Espece_observe2_bache_10 + ';' +
   				row.ID_NI_debut_bache_10 + ';' +
   				row.ID_NI_fin_bache_10 + ';' +
   				row.Remarque + ';' +
   				row.Username + ';\r\n'
		
			} else {	
				if (array_selected_fields.indexOf('Equipe') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Equipe;';
					}
					CSV_data = CSV_data + row.Equipe + ";"
				};
				if (array_selected_fields.indexOf('N_site') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'N_site;';
					}
					CSV_data = CSV_data + row.N_site + ";"
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
				if (array_selected_fields.indexOf('Date_debut_NI') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Date_debut_NI;';
					}
					CSV_data = CSV_data + row.Date_debut_NI + ";"
				};
				if (array_selected_fields.indexOf('Heure_debut_NI') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Heure_debut_NI;';
					}
					CSV_data = CSV_data + row.Heure_debut_NI + ";"
				};
				if (array_selected_fields.indexOf('Date_fin_NI') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Date_fin_NI;';
					}
					CSV_data = CSV_data + row.Date_fin_NI + ";"
				};
				if (array_selected_fields.indexOf('Heure_fin_NI') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Heure_fin_NI;';
					}
					CSV_data = CSV_data + row.Heure_fin_NI + ";"
				};
				if (array_selected_fields.indexOf('Estimation_population') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Estimation_population;';
					}
					CSV_data = CSV_data + row.Estimation_population + ";"
				};
				if (array_selected_fields.indexOf('Changement_disposition_espece') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Changement_disposition_espece;';
					}
					CSV_data = CSV_data + row.Changement_disposition_espece + ";"
				};
				if (array_selected_fields.indexOf('Précisez') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Précisez;';
					}
					CSV_data = CSV_data + row['Précisez'] + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe_1;';
					}
					CSV_data = CSV_data + row.Famille_observe_1 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe_1;';
					}
					CSV_data = CSV_data + row.Genre_observe_1 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe_1;';
					}
					CSV_data = CSV_data + row.Espece_observe_1 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe_2;';
					}
					CSV_data = CSV_data + row.Famille_observe_2 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe_2;';
					}
					CSV_data = CSV_data + row.Genre_observe_2 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe_2;';
					}
					CSV_data = CSV_data + row.Espece_observe_2 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe_3;';
					}
					CSV_data = CSV_data + row.Famille_observe_3 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe_3;';
					}
					CSV_data = CSV_data + row.Genre_observe_3 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe_3;';
					}
					CSV_data = CSV_data + row.Espece_observe_3 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe_4;';
					}
					CSV_data = CSV_data + row.Famille_observe_4 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe_4;';
					}
					CSV_data = CSV_data + row.Genre_observe_4 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe_4;';
					}
					CSV_data = CSV_data + row.Espece_observe_4 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe_5') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe_5;';
					}
					CSV_data = CSV_data + row.Famille_observe_5 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe_5') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe_5;';
					}
					CSV_data = CSV_data + row.Genre_observe_5 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe_5') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe_5;';
					}
					CSV_data = CSV_data + row.Espece_observe_5 + ";"
				};				
				if (array_selected_fields.indexOf('ID_NI_preleve_debut') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_preleve_debut;';
					}
					CSV_data = CSV_data + row.ID_NI_preleve_debut + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_preleve_fin') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_preleve_fin;';
					}
					CSV_data = CSV_data + row.ID_NI_preleve_fin + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe1_bache_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe1_bache_1;';
					}
					CSV_data = CSV_data + row.Famille_observe1_bache_1 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe1_bache_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe1_bache_1;';
					}
					CSV_data = CSV_data + row.Genre_observe1_bache_1 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe1_bache_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe1_bache_1;';
					}
					CSV_data = CSV_data + row.Espece_observe1_bache_1 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe2_bache_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe2_bache_1;';
					}
					CSV_data = CSV_data + row.Famille_observe2_bache_1 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe2_bache_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe2_bache_1;';
					}
					CSV_data = CSV_data + row.Genre_observe2_bache_1 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe2_bache_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe2_bache_1;';
					}
					CSV_data = CSV_data + row.Espece_observe2_bache_1 + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_debut_bache_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_debut_bache_1;';
					}
					CSV_data = CSV_data + row.ID_NI_debut_bache_1 + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_fin_bache_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_fin_bache_1;';
					}
					CSV_data = CSV_data + row.ID_NI_fin_bache_1 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe1_bache_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe1_bache_2;';
					}
					CSV_data = CSV_data + row.Famille_observe1_bache_2 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe1_bache_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe1_bache_2;';
					}
					CSV_data = CSV_data + row.Genre_observe1_bache_2 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe1_bache_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe1_bache_2;';
					}
					CSV_data = CSV_data + row.Espece_observe1_bache_2 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe2_bache_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe2_bache_2;';
					}
					CSV_data = CSV_data + row.Famille_observe2_bache_2 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe2_bache_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe2_bache_2;';
					}
					CSV_data = CSV_data + row.Genre_observe2_bache_2 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe2_bache_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe2_bache_2;';
					}
					CSV_data = CSV_data + row.Espece_observe2_bache_2 + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_debut_bache_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_debut_bache_2;';
					}
					CSV_data = CSV_data + row.ID_NI_debut_bache_2 + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_fin_bache_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_fin_bache_2;';
					}
					CSV_data = CSV_data + row.ID_NI_fin_bache_2 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe1_bache_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe1_bache_3;';
					}
					CSV_data = CSV_data + row.Famille_observe1_bache_3 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe1_bache_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe1_bache_3;';
					}
					CSV_data = CSV_data + row.Genre_observe1_bache_3 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe1_bache_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe1_bache_3;';
					}
					CSV_data = CSV_data + row.Espece_observe1_bache_3 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe2_bache_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe2_bache_3;';
					}
					CSV_data = CSV_data + row.Famille_observe2_bache_3 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe2_bache_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe2_bache_3;';
					}
					CSV_data = CSV_data + row.Genre_observe2_bache_3 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe2_bache_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe2_bache_3;';
					}
					CSV_data = CSV_data + row.Espece_observe2_bache_3 + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_debut_bache_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_debut_bache_3;';
					}
					CSV_data = CSV_data + row.ID_NI_debut_bache_3 + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_fin_bache_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_fin_bache_3;';
					}
					CSV_data = CSV_data + row.ID_NI_fin_bache_3 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe1_bache_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe1_bache_4;';
					}
					CSV_data = CSV_data + row.Famille_observe1_bache_4 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe1_bache_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe1_bache_4;';
					}
					CSV_data = CSV_data + row.Genre_observe1_bache_4 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe1_bache_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe1_bache_4;';
					}
					CSV_data = CSV_data + row.Espece_observe1_bache_4 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe2_bache_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe2_bache_4;';
					}
					CSV_data = CSV_data + row.Famille_observe2_bache_4 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe2_bache_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe2_bache_4;';
					}
					CSV_data = CSV_data + row.Genre_observe2_bache_4 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe2_bache_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe2_bache_4;';
					}
					CSV_data = CSV_data + row.Espece_observe2_bache_4 + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_debut_bache_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_debut_bache_4;';
					}
					CSV_data = CSV_data + row.ID_NI_debut_bache_4 + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_fin_bache_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_fin_bache_4;';
					}
					CSV_data = CSV_data + row.ID_NI_fin_bache_4 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe1_bache_5') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe1_bache_5;';
					}
					CSV_data = CSV_data + row.Famille_observe1_bache_5 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe1_bache_5') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe1_bache_5;';
					}
					CSV_data = CSV_data + row.Genre_observe1_bache_5 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe1_bache_5') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe1_bache_5;';
					}
					CSV_data = CSV_data + row.Espece_observe1_bache_5 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe2_bache_5') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe2_bache_5;';
					}
					CSV_data = CSV_data + row.Famille_observe2_bache_5 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe2_bache_5') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe2_bache_5;';
					}
					CSV_data = CSV_data + row.Genre_observe2_bache_5 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe2_bache_5') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe2_bache_5;';
					}
					CSV_data = CSV_data + row.Espece_observe2_bache_5 + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_debut_bache_5') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_debut_bache_5;';
					}
					CSV_data = CSV_data + row.ID_NI_debut_bache_5 + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_fin_bache_5') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_fin_bache_5;';
					}
					CSV_data = CSV_data + row.ID_NI_fin_bache_5 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe1_bache_6') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe1_bache_6;';
					}
					CSV_data = CSV_data + row.Famille_observe1_bache_6 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe1_bache_6') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe1_bache_6;';
					}
					CSV_data = CSV_data + row.Genre_observe1_bache_6 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe1_bache_6') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe1_bache_6;';
					}
					CSV_data = CSV_data + row.Espece_observe1_bache_6 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe2_bache_6') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe2_bache_6;';
					}
					CSV_data = CSV_data + row.Famille_observe2_bache_6 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe2_bache_6') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe2_bache_6;';
					}
					CSV_data = CSV_data + row.Genre_observe2_bache_6 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe2_bache_6') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe2_bache_6;';
					}
					CSV_data = CSV_data + row.Espece_observe2_bache_6 + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_debut_bache_6') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_debut_bache_6;';
					}
					CSV_data = CSV_data + row.ID_NI_debut_bache_6 + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_fin_bache_6') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_fin_bache_6;';
					}
					CSV_data = CSV_data + row.ID_NI_fin_bache_6 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe1_bache_7') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe1_bache_7;';
					}
					CSV_data = CSV_data + row.Famille_observe1_bache_7 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe1_bache_7') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe1_bache_7;';
					}
					CSV_data = CSV_data + row.Genre_observe1_bache_7 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe1_bache_7') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe1_bache_7;';
					}
					CSV_data = CSV_data + row.Espece_observe1_bache_7 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe2_bache_7') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe2_bache_7;';
					}
					CSV_data = CSV_data + row.Famille_observe2_bache_7 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe2_bache_7') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe2_bache_7;';
					}
					CSV_data = CSV_data + row.Genre_observe2_bache_7 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe2_bache_7') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe2_bache_7;';
					}
					CSV_data = CSV_data + row.Espece_observe2_bache_7 + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_debut_bache_7') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_debut_bache_7;';
					}
					CSV_data = CSV_data + row.ID_NI_debut_bache_7 + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_fin_bache_7') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_fin_bache_7;';
					}
					CSV_data = CSV_data + row.ID_NI_fin_bache_7 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe1_bache_8') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe1_bache_8;';
					}
					CSV_data = CSV_data + row.Famille_observe1_bache_8 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe1_bache_8') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe1_bache_8;';
					}
					CSV_data = CSV_data + row.Genre_observe1_bache_8 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe1_bache_8') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe1_bache_8;';
					}
					CSV_data = CSV_data + row.Espece_observe1_bache_8 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe2_bache_8') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe2_bache_8;';
					}
					CSV_data = CSV_data + row.Famille_observe2_bache_8 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe2_bache_8') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe2_bache_8;';
					}
					CSV_data = CSV_data + row.Genre_observe2_bache_8 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe2_bache_8') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe2_bache_8;';
					}
					CSV_data = CSV_data + row.Espece_observe2_bache_8 + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_debut_bache_8') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_debut_bache_8;';
					}
					CSV_data = CSV_data + row.ID_NI_debut_bache_8 + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_fin_bache_8') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_fin_bache_8;';
					}
					CSV_data = CSV_data + row.ID_NI_fin_bache_8 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe1_bache_9') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe1_bache_9;';
					}
					CSV_data = CSV_data + row.Famille_observe1_bache_9 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe1_bache_9') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe1_bache_9;';
					}
					CSV_data = CSV_data + row.Genre_observe1_bache_9 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe1_bache_9') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe1_bache_9;';
					}
					CSV_data = CSV_data + row.Espece_observe1_bache_9 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe2_bache_9') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe2_bache_9;';
					}
					CSV_data = CSV_data + row.Famille_observe2_bache_9 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe2_bache_9') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe2_bache_9;';
					}
					CSV_data = CSV_data + row.Genre_observe2_bache_9 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe2_bache_9') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe2_bache_9;';
					}
					CSV_data = CSV_data + row.Espece_observe2_bache_9 + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_debut_bache_9') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_debut_bache_9;';
					}
					CSV_data = CSV_data + row.ID_NI_debut_bache_9 + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_fin_bache_9') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_fin_bache_9;';
					}
					CSV_data = CSV_data + row.ID_NI_fin_bache_9 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe1_bache_10') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe1_bache_10;';
					}
					CSV_data = CSV_data + row.Famille_observe1_bache_10 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe1_bache_10') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe1_bache_10;';
					}
					CSV_data = CSV_data + row.Genre_observe1_bache_10 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe1_bache_10') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe1_bache_10;';
					}
					CSV_data = CSV_data + row.Espece_observe1_bache_10 + ";"
				};
				if (array_selected_fields.indexOf('Famille_observe2_bache_10') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_observe2_bache_10;';
					}
					CSV_data = CSV_data + row.Famille_observe2_bache_10 + ";"
				};
				if (array_selected_fields.indexOf('Genre_observe2_bache_10') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_observe2_bache_10;';
					}
					CSV_data = CSV_data + row.Genre_observe2_bache_10 + ";"
				};
				if (array_selected_fields.indexOf('Espece_observe2_bache_10') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_observe2_bache_10;';
					}
					CSV_data = CSV_data + row.Espece_observe2_bache_10 + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_debut_bache_10') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_debut_bache_10;';
					}
					CSV_data = CSV_data + row.ID_NI_debut_bache_10 + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_fin_bache_10') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_fin_bache_10;';
					}
					CSV_data = CSV_data + row.ID_NI_fin_bache_10 + ";"
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
	
	var res = alasql("SELECT Equipe, N_site, Pays, Prefecture, [Sous-prefecture], [Ville/village], Site_capture, Environnement, Latitude, Lat_degre_dec, Longitude, Long_degre_dec, Proximite_village_km, Proximite_source_m, Date_debut_NI, Heure_debut_NI, Date_fin_NI, Heure_fin_NI, Estimation_population, Changement_disposition_espece, [Précisez], Famille_observe_1, Genre_observe_1, Espece_observe_1, Famille_observe_2, Genre_observe_2, Espece_observe_2, Famille_observe_3, Genre_observe_3, Espece_observe_3, Famille_observe_4, Genre_observe_4, Espece_observe_4, Famille_observe_5, Genre_observe_5, Espece_observe_5, ID_NI_preleve_debut, ID_NI_preleve_fin, Famille_observe1_bache_1, Genre_observe1_bache_1, Espece_observe1_bache_1, Famille_observe2_bache_1, Genre_observe2_bache_1, Espece_observe2_bache_1, ID_NI_debut_bache_1, ID_NI_fin_bache_1, Famille_observe1_bache_2, Genre_observe1_bache_2, Espece_observe1_bache_2, Famille_observe2_bache_2, Genre_observe2_bache_2, Espece_observe2_bache_2, ID_NI_debut_bache_2, ID_NI_fin_bache_2, Famille_observe1_bache_3, Genre_observe1_bache_3, Espece_observe1_bache_3, Famille_observe2_bache_3, Genre_observe2_bache_3, Espece_observe2_bache_3, ID_NI_debut_bache_3, ID_NI_fin_bache_3, Famille_observe1_bache_4, Genre_observe1_bache_4, Espece_observe1_bache_4, Famille_observe2_bache_4, Genre_observe2_bache_4, Espece_observe2_bache_4, ID_NI_debut_bache_4, ID_NI_fin_bache_4, Famille_observe1_bache_5, Genre_observe1_bache_5, Espece_observe1_bache_5, Famille_observe2_bache_5, Genre_observe2_bache_5, Espece_observe2_bache_5, ID_NI_debut_bache_5, ID_NI_fin_bache_5, Famille_observe1_bache_6, Genre_observe1_bache_6, Espece_observe1_bache_6, Famille_observe2_bache_6, Genre_observe2_bache_6, Espece_observe2_bache_6, ID_NI_debut_bache_6, ID_NI_fin_bache_6, Famille_observe1_bache_7, Genre_observe1_bache_7, Espece_observe1_bache_7, Famille_observe2_bache_7, Genre_observe2_bache_7, Espece_observe2_bache_7, ID_NI_debut_bache_7, ID_NI_fin_bache_7, Famille_observe1_bache_8, Genre_observe1_bache_8, Espece_observe1_bache_8, Famille_observe2_bache_8, Genre_observe2_bache_8, Espece_observe2_bache_8, ID_NI_debut_bache_8, ID_NI_fin_bache_8, Famille_observe1_bache_9, Genre_observe1_bache_9, Espece_observe1_bache_9, Famille_observe2_bache_9, Genre_observe2_bache_9, Espece_observe2_bache_9, ID_NI_debut_bache_9, ID_NI_fin_bache_9, Famille_observe1_bache_10, Genre_observe1_bache_10, Espece_observe1_bache_10, Famille_observe2_bache_10, Genre_observe2_bache_10, Espece_observe2_bache_10, ID_NI_debut_bache_10, ID_NI_fin_bache_10, Remarque, Username FROM ? ORDER BY Date_debut_NI", [tab_CI] );
    			
    var CI = JSON.stringify(res);
    			
    var obj_CI = JSON.parse(CI);
	   
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
			addChauves_souris_non_invasives(row, false);
		}
		
		
	}).catch(function (err) {
		console.log(err);
	});
})


$('#export_selected_fields').click(function(){
	var res = alasql("SELECT Equipe, N_site, Pays, Prefecture, [Sous-prefecture], [Ville/village], Site_capture, Environnement, Latitude, Lat_degre_dec, Longitude, Long_degre_dec, Proximite_village_km, Proximite_source_m, Date_debut_NI, Heure_debut_NI, Date_fin_NI, Heure_fin_NI, Estimation_population, Changement_disposition_espece, [Précisez], Famille_observe_1, Genre_observe_1, Espece_observe_1, Famille_observe_2, Genre_observe_2, Espece_observe_2, Famille_observe_3, Genre_observe_3, Espece_observe_3, Famille_observe_4, Genre_observe_4, Espece_observe_4, Famille_observe_5, Genre_observe_5, Espece_observe_5, ID_NI_preleve_debut, ID_NI_preleve_fin, Famille_observe1_bache_1, Genre_observe1_bache_1, Espece_observe1_bache_1, Famille_observe2_bache_1, Genre_observe2_bache_1, Espece_observe2_bache_1, ID_NI_debut_bache_1, ID_NI_fin_bache_1, Famille_observe1_bache_2, Genre_observe1_bache_2, Espece_observe1_bache_2, Famille_observe2_bache_2, Genre_observe2_bache_2, Espece_observe2_bache_2, ID_NI_debut_bache_2, ID_NI_fin_bache_2, Famille_observe1_bache_3, Genre_observe1_bache_3, Espece_observe1_bache_3, Famille_observe2_bache_3, Genre_observe2_bache_3, Espece_observe2_bache_3, ID_NI_debut_bache_3, ID_NI_fin_bache_3, Famille_observe1_bache_4, Genre_observe1_bache_4, Espece_observe1_bache_4, Famille_observe2_bache_4, Genre_observe2_bache_4, Espece_observe2_bache_4, ID_NI_debut_bache_4, ID_NI_fin_bache_4, Famille_observe1_bache_5, Genre_observe1_bache_5, Espece_observe1_bache_5, Famille_observe2_bache_5, Genre_observe2_bache_5, Espece_observe2_bache_5, ID_NI_debut_bache_5, ID_NI_fin_bache_5, Famille_observe1_bache_6, Genre_observe1_bache_6, Espece_observe1_bache_6, Famille_observe2_bache_6, Genre_observe2_bache_6, Espece_observe2_bache_6, ID_NI_debut_bache_6, ID_NI_fin_bache_6, Famille_observe1_bache_7, Genre_observe1_bache_7, Espece_observe1_bache_7, Famille_observe2_bache_7, Genre_observe2_bache_7, Espece_observe2_bache_7, ID_NI_debut_bache_7, ID_NI_fin_bache_7, Famille_observe1_bache_8, Genre_observe1_bache_8, Espece_observe1_bache_8, Famille_observe2_bache_8, Genre_observe2_bache_8, Espece_observe2_bache_8, ID_NI_debut_bache_8, ID_NI_fin_bache_8, Famille_observe1_bache_9, Genre_observe1_bache_9, Espece_observe1_bache_9, Famille_observe2_bache_9, Genre_observe2_bache_9, Espece_observe2_bache_9, ID_NI_debut_bache_9, ID_NI_fin_bache_9, Famille_observe1_bache_10, Genre_observe1_bache_10, Espece_observe1_bache_10, Famille_observe2_bache_10, Genre_observe2_bache_10, Espece_observe2_bache_10, ID_NI_debut_bache_10, ID_NI_fin_bache_10, Remarque, Username FROM ? ORDER BY Date_debut_NI", [tab_CI] );
    			
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
		console.log(row.N_identification_CS)
		//alert(count)
		if (count == i) {
			addChauves_souris_non_invasives(row, true);
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


	
