function chargement_des_chauves_souris_non_invasives_consultation() {
	showConnexionStatus();
	
    var table = searchParams.get('table');
    
	chargement_des_donnees(table);
}

function chargement_des_donnees(table) {
	
	var id = localStorage.getItem('ID_chauves_souris_non_invasives' + table);

	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'chauves_souris_non_invasives' + table + debug);
	} else {
		var DB = new PouchDB('chauves_souris_non_invasives' + table + debug);
	};
	DB.allDocs({  		
		keys: [id],
		include_docs: true,
		attachments: true
	}).then(function (result) {
	
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
			console.log(JSON.stringify(result.rows));
					
			function showValue(elementName) {
				
				var element = document.getElementById(elementName + '_value');
				if (elementName == 'Sous_prefecture') {
					element.innerHTML = result.rows[0].doc['Sous-prefecture'];
				} else if (elementName == 'Ville_village') {
					element.innerHTML = result.rows[0].doc['Ville/village'];
				} else if (elementName == 'Precisez') {
					element.innerHTML = result.rows[0].doc['Précisez'];
				} else {
					element.innerHTML = result.rows[0].doc[elementName];
				}
				element.style.color = "red";
			}
			
			showValue('Username');
			showValue('N_site');
			showValue('Pays');
			showValue('Prefecture');
			showValue('Sous_prefecture');
			showValue('Ville_village');
			showValue('Site_capture');
			showValue('Environnement');			
			showValue('Lat_degre_dec');
			showValue('Latitude');
			showValue('Long_degre_dec');
			showValue('Longitude');
			showValue('Proximite_village_km');
			showValue('Proximite_source_m');
						
			showValue('Equipe');								

			showValue('Date_debut_NI');
			showValue('Heure_debut_NI');
			showValue('Date_fin_NI');	
			showValue('Heure_fin_NI');
			showValue('Estimation_population');
			showValue('Changement_disposition_espece');
			showValue('Precisez');
			
			/*var element = document.getElementById('NumFilet_value');
			
			element.innerHTML = result.rows[0].doc[elementName];
			element.style.color = "red";*/
			
			showValue('Famille_observe_1');
			showValue('Genre_observe_1');
			showValue('Espece_observe_1');
			showValue('Famille_observe_2');
			showValue('Genre_observe_2');
			showValue('Espece_observe_2');
			showValue('Famille_observe_3');
			showValue('Genre_observe_3');
			showValue('Espece_observe_3');
			showValue('Famille_observe_4');
			showValue('Genre_observe_4');
			showValue('Espece_observe_4');
			showValue('Famille_observe_5');
			showValue('Genre_observe_5');
			showValue('Espece_observe_5');
			showValue('ID_NI_preleve_debut');
			showValue('ID_NI_preleve_fin');
			showValue('Famille_observe1_bache_1');
			showValue('Genre_observe1_bache_1');	
			showValue('Espece_observe1_bache_1');	
			showValue('Famille_observe2_bache_1');	
			showValue('Genre_observe2_bache_1');	
			showValue('Espece_observe2_bache_1');
			showValue('ID_NI_debut_bache_1');	
			showValue('ID_NI_fin_bache_1');
			showValue('Famille_observe1_bache_2');
			showValue('Genre_observe1_bache_2');	
			showValue('Espece_observe1_bache_2');	
			showValue('Famille_observe2_bache_2');	
			showValue('Genre_observe2_bache_2');	
			showValue('Espece_observe2_bache_2');
			showValue('ID_NI_debut_bache_2');	
			showValue('ID_NI_fin_bache_2');
			showValue('Famille_observe1_bache_3');
			showValue('Genre_observe1_bache_3');	
			showValue('Espece_observe1_bache_3');	
			showValue('Famille_observe2_bache_3');	
			showValue('Genre_observe2_bache_3');	
			showValue('Espece_observe2_bache_3');
			showValue('ID_NI_debut_bache_3');	
			showValue('ID_NI_fin_bache_3');
			showValue('Famille_observe1_bache_4');
			showValue('Genre_observe1_bache_4');	
			showValue('Espece_observe1_bache_4');	
			showValue('Famille_observe2_bache_4');	
			showValue('Genre_observe2_bache_4');	
			showValue('Espece_observe2_bache_4');
			showValue('ID_NI_debut_bache_4');	
			showValue('ID_NI_fin_bache_4');
			showValue('Famille_observe1_bache_5');
			showValue('Genre_observe1_bache_5');	
			showValue('Espece_observe1_bache_5');	
			showValue('Famille_observe2_bache_5');	
			showValue('Genre_observe2_bache_5');	
			showValue('Espece_observe2_bache_5');
			showValue('ID_NI_debut_bache_5');	
			showValue('ID_NI_fin_bache_5');
			showValue('Famille_observe1_bache_6');
			showValue('Genre_observe1_bache_6');	
			showValue('Espece_observe1_bache_6');	
			showValue('Famille_observe2_bache_6');	
			showValue('Genre_observe2_bache_6');	
			showValue('Espece_observe2_bache_6');
			showValue('ID_NI_debut_bache_6');	
			showValue('ID_NI_fin_bache_6');
			showValue('Famille_observe1_bache_7');
			showValue('Genre_observe1_bache_7');	
			showValue('Espece_observe1_bache_7');	
			showValue('Famille_observe2_bache_7');	
			showValue('Genre_observe2_bache_7');	
			showValue('Espece_observe2_bache_7');
			showValue('ID_NI_debut_bache_7');	
			showValue('ID_NI_fin_bache_7');
			showValue('Famille_observe1_bache_8');
			showValue('Genre_observe1_bache_8');	
			showValue('Espece_observe1_bache_8');	
			showValue('Famille_observe2_bache_8');	
			showValue('Genre_observe2_bache_8');	
			showValue('Espece_observe2_bache_8');
			showValue('ID_NI_debut_bache_8');	
			showValue('ID_NI_fin_bache_8');
			showValue('Famille_observe1_bache_9');
			showValue('Genre_observe1_bache_9');	
			showValue('Espece_observe1_bache_9');	
			showValue('Famille_observe2_bache_9');	
			showValue('Genre_observe2_bache_9');	
			showValue('Espece_observe2_bache_9');
			showValue('ID_NI_debut_bache_9');	
			showValue('ID_NI_fin_bache_9');
			showValue('Famille_observe1_bache_10');
			showValue('Genre_observe1_bache_10');	
			showValue('Espece_observe1_bache_10');	
			showValue('Famille_observe2_bache_10');	
			showValue('Genre_observe2_bache_10');	
			showValue('Espece_observe2_bache_10');
			showValue('ID_NI_debut_bache_10');	
			showValue('ID_NI_fin_bache_10');
			showValue('Remarque');
			
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



