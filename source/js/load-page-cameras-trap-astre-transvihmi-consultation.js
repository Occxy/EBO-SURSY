function chargement_des_cameras_trap_consultation() {
	showConnexionStatus();
	
    var table = searchParams.get('table');

    chargement_des_donnees(table);
}

function chargement_des_donnees(table) {
	
	var id = localStorage.getItem('ID_cameras_trap' + table);

	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'cameras_trap' + table + debug);
	} else {
		var DB = new PouchDB('cameras_trap' + table + debug);
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
			
			showValue('ID_camera_1');	
			showValue('NumSD_inseree_1');	
			showValue('NumSD_remplacee_1');	
			showValue('Date_debut_camera_1');	
			showValue('Heure_debut_camera_1');	
			showValue('Changement_emplacement_camera_1');	
			showValue('Emplacement_camera_1');	
			showValue('NumEntree_camera_1');	
			showValue('Hauteur_camera_1');	
			showValue('Support_camera_1');	
			showValue('Distance_camera_entree_1');	
			showValue('Presence_autre_camera_1');	
			showValue('Distance_camera_camera_1');	
			showValue('Changement_batterie_camera_1');	
			showValue('ID_camera_2');	
			showValue('NumSD_inseree_2');	
			showValue('NumSD_remplacee_2');	
			showValue('Date_debut_camera_2');	
			showValue('Heure_debut_camera_2');	
			showValue('Changement_emplacement_camera_2');	
			showValue('Emplacement_camera_2');	
			showValue('NumEntree_camera_2');	
			showValue('Hauteur_camera_2');
			showValue('Support_camera_2');	
			showValue('Distance_camera_entree_2');	
			showValue('Presence_autre_camera_2');	
			showValue('Distance_camera_camera_2');	
			showValue('Changement_batterie_camera_2');	
			showValue('ID_camera_3');	
			showValue('NumSD_inseree_3');	
			showValue('NumSD_remplacee_3');	
			showValue('Date_debut_camera_3');	
			showValue('Heure_debut_camera_3');	
			showValue('Changement_emplacement_camera_3');	
			showValue('Emplacement_camera_3');	
			showValue('NumEntree_camera_3');	
			showValue('Hauteur_camera_3');	
			showValue('Support_camera_3');	
			showValue('Distance_camera_entree_3');	
			showValue('Presence_autre_camera_3');	
			showValue('Distance_camera_camera_3');	
			showValue('Changement_batterie_camera_3');	
			showValue('ID_camera_4');	
			showValue('NumSD_inseree_4');	
			showValue('NumSD_remplacee_4');	
			showValue('Date_debut_camera_4');	
			showValue('Heure_debut_camera_4');	
			showValue('Changement_emplacement_camera_4');		
			showValue('Emplacement_camera_4');		
			showValue('NumEntree_camera_4');		
			showValue('Hauteur_camera_4');		
			showValue('Support_camera_4');		
			showValue('Distance_camera_entree_4');		
			showValue('Presence_autre_camera_4');		
			showValue('Distance_camera_camera_4');		
			showValue('Changement_batterie_camera_4');	
				
						
			
			
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



