function chargement_des_donnees_missions_consultation() {
	showConnexionStatus();
	
    var table = searchParams.get('table');

    chargement_des_donnees(table);
}

function chargement_des_donnees(table) {
	
	var id = localStorage.getItem('ID_donnees_mission' + table);

	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'donnees_mission' + table + debug);
	} else {
		var DB = new PouchDB('donnees_mission' + table + debug);
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
				if (elementName == 'Prefecture') {
					element.innerHTML = result.rows[0].doc['Préfecture'];
				} else if (elementName == 'Sous_prefecture') {
					element.innerHTML = result.rows[0].doc['Sous-préfecture'];
				} else if (elementName == 'Ville_village') {
					element.innerHTML = result.rows[0].doc['Ville/village'];
				} else {
					element.innerHTML = result.rows[0].doc[elementName];
				}
				element.style.color = "red";
			}
			
			showValue('Username');
			showValue('Date_debut_mission');
			showValue('Date_fin_mission');
			showValue('Equipe');
			showValue('ID_CS_preleve_debut');
			showValue('ID_CS_preleve_fin');
			showValue('ID_NI_CS_debut');
			showValue('ID_NI_CS_fin');
			showValue('ID_NI_faune_debut');
			showValue('ID_NI_faune_fin');
			
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
						
			showValue('Espece_vegetale_1');	
			showValue('Stade_espece_1');	
			showValue('Espece_vegetale_2');	
			showValue('Stade_espece_2');	
			showValue('Espece_vegetale_3');	
			showValue('Stade_espece_3');	
			showValue('Espece_vegetale_4');	
			showValue('Stade_espece_4');	
			showValue('Espece_vegetale_5');	
			showValue('Stade_espece_5');	
			showValue('Espece_vegetale_6');	
			showValue('Stade_espece_6');	
			showValue('Espece_vegetale_7');	
			showValue('Stade_espece_7');	
					
			showValue('ID_echantillon_vegetale');	
			showValue('Espece_animale_domestique_1');
			showValue('Espece_animale_domestique_2');	
			showValue('Espece_animale_domestique_3');	
			showValue('Espece_animale_sauvage_1');
			showValue('Espece_animale_sauvage_2');	
			showValue('Espece_animale_sauvage_3');	
			showValue('Espece_animale_sauvage_4');	
			showValue('NI_faune');
			showValue('Interaction_CS_faune');
			showValue('Description_interaction_CS_faune');
			showValue('Activite_humaine_observee');	
			
			showValue('Description_interaction_CS_homme');	
			showValue('Camera_traps');	
			showValue('NumChambre');	
			showValue('HauteurCapteur');	
			showValue('Distance_capteur_grotte');	
			showValue('Date_debut_capteur');	
			showValue('Heure_debut_capteur');	
			showValue('Date_fin_capteur');	
			showValue('Heure_fin_capteur');	
			showValue('NumDossier_capteur');

			
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



