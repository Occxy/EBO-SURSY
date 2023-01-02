function chargement_des_donnees_journalieres_consultation() {
	showConnexionStatus();
	
    var table = searchParams.get('table');

    chargement_des_donnees(table);
}

function chargement_des_donnees(table) {
	
	var id = localStorage.getItem('ID_donnees_journalieres' + table);

	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'donnees_journalieres' + table + debug);
	} else {
		var DB = new PouchDB('donnees_journalieres' + table + debug);
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
				} else if (elementName == 'Sortie_entree1') {
					element.innerHTML = result.rows[0].doc['Sortie/entree1'];
				} else if (elementName == 'Sortie_entree2') {
					element.innerHTML = result.rows[0].doc['Sortie/entree2'];
				} else {
					element.innerHTML = result.rows[0].doc[elementName];
				}
				element.style.color = "red";
			}
			
			showValue('Username');
			showValue('Equipe');
			showValue('ID_CS_preleve_debut');
			showValue('ID_CS_preleve_fin');
			
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
			
			
					//				Nb_entree1_espece2	Famille_entree1CS2	Genre_entree1CS2	Espece_entree1CS2	Nb_entree1_espece3	Famille_entree1CS3	Genre_entree1CS3	Espece_entree1CS3	Nb_entree1_espece4	Famille_entree1CS4	Genre_entree1CS4	Espece_entree1CS4	Nb_entree1_espece5	Famille_entree1CS5	Genre_entree1CS5	Espece_entree1CS5	Nb_entree1_espece6	Famille_entree1CS6	Genre_entree1CS6	Espece_entree1CS6	Nb_entree1_espece7	Famille_entree1CS7	Genre_entree1CS7	Espece_entree1CS7	Nb_entree1_espece8	Famille_entree1CS8	Genre_entree1CS8	Espece_entree1CS8	Sortie/entree2	Presence_entree2	Nb_entree2_espece1	Famille_entree2CS1	Genre_entree2CS1	Espece_entree2CS1	Nb_entree2_espece2	Famille_entree2CS2	Genre_entree2CS2	Espece_entree2CS2	Nb_entree2_espece3	Famille_entree2CS3	Genre_entree2CS3	Espece_entree2CS3	Nb_entree2_espece4	Famille_entree2CS4	Genre_entree2CS4	Espece_entree2CS4	Nb_entree2_espece5	Famille_entree2CS5	Genre_entree2CS5	Espece_entree2CS5	Nb_entree2_espece6	Famille_entree2CS6	Genre_entree2CS6	Espece_entree2CS6	Nb_entree2_espece7	Famille_entree2CS7	Genre_entree2CS7	Espece_entree2CS7	Nb_entree2_espece8	Famille_entree2CS8	Genre_entree2CS8	Espece_entree2CS8	Famille_observe1	Genre_observe1	Espece_observe1	Famille_observe2	Genre_observe2	Espece_observe2	Famille_observe3	Genre_observe3	Espece_observe3	Nb_CS_morte1	Famille_morte1	Genre_morte1	Espece_morte1	Nb_CS_morte2	Famille_morte2	Genre_morte2	Espece_morte2	Nb_CS_morte3	Famille_morte3	Genre_morte3	Espece_morte3	Nb_CS_morte4	Famille_morte4	Genre_morte4	Espece_morte4	Remarque	Nb_filet_sol	IDFilet_1	Filet_sol_m2_1	EntreeFilet_1	HauteurFilet_1	Filet_debut_1	Filet_fin_1	Filet_temps_1	Nb_capture_filet_1	Nb_preleve_filet_1	IDFilet_2	Filet_sol_m2_2	EntreeFilet_2	HauteurFilet_2	Filet_debut_2	Filet_fin_2	Filet_temps_2	Nb_capture_filet_2	Nb_preleve_Filet_2	NbHarp	IDHarp_1	EntreeHarp_1	Harp_debut_1	Harp_fin_1	Harp_temps_1	Nb_capture_harp_1	Nb_preleve_harp_1	IDHarp_2	EntreeHarp_2	Harp_debut_2	Harp_fin_2	Harp_temps_2	Nb_capture_harp_2	Nb_preleve_harp_2	Saison	Climat	Precipitation	Vent	Lune	Temperature_logger	Humidite_logger
				
			showValue('Sortie_entree1');	
			showValue('Presence_entree1');	
			showValue('Nb_entree1_espece1');	
			showValue('Famille_entree1CS1');	
			showValue('Genre_entree1CS1');	
			showValue('Espece_entree1CS1');	
			showValue('Nb_entree1_espece2');	
			showValue('Famille_entree1CS2');	
			showValue('Genre_entree1CS2');	
			showValue('Espece_entree1CS2');	
			showValue('Nb_entree1_espece3');	
			showValue('Famille_entree1CS3');	
			showValue('Genre_entree1CS3');	
			showValue('Espece_entree1CS3');	
			showValue('Nb_entree1_espece4');	
			showValue('Famille_entree1CS4');	
			showValue('Genre_entree1CS4');	
			showValue('Espece_entree1CS4');	
			showValue('Nb_entree1_espece5');	
			showValue('Famille_entree1CS5');	
			showValue('Genre_entree1CS5');	
			showValue('Espece_entree1CS5');	
			showValue('Nb_entree1_espece6');	
			showValue('Famille_entree1CS6');	
			showValue('Genre_entree1CS6');	
			showValue('Espece_entree1CS6');	
			showValue('Nb_entree1_espece7');	
			showValue('Famille_entree1CS7');	
			showValue('Genre_entree1CS7');	
			showValue('Espece_entree1CS7');	
			showValue('Nb_entree1_espece8');	
			showValue('Famille_entree1CS8');	
			showValue('Genre_entree1CS8');	
			showValue('Espece_entree1CS8');	
			
			showValue('Sortie_entree2');	
			showValue('Presence_entree2');
			showValue('Nb_entree2_espece1');	
			showValue('Famille_entree2CS1');	
			showValue('Genre_entree2CS1');	
			showValue('Espece_entree2CS1');	
			showValue('Nb_entree2_espece2');	
			showValue('Famille_entree2CS2');	
			showValue('Genre_entree2CS2');	
			showValue('Espece_entree2CS2');	
			showValue('Nb_entree2_espece3');	
			showValue('Famille_entree2CS3');	
			showValue('Genre_entree2CS3');	
			showValue('Espece_entree2CS3');	
			showValue('Nb_entree2_espece4');	
			showValue('Famille_entree2CS4');	
			showValue('Genre_entree2CS4');	
			showValue('Espece_entree2CS4');	
			showValue('Nb_entree2_espece5');	
			showValue('Famille_entree2CS5');	
			showValue('Genre_entree2CS5');	
			showValue('Espece_entree2CS5');	
			showValue('Nb_entree2_espece6');	
			showValue('Famille_entree2CS6');	
			showValue('Genre_entree2CS6');	
			showValue('Espece_entree2CS6');	
			showValue('Nb_entree2_espece7');	
			showValue('Famille_entree2CS7');	
			showValue('Genre_entree2CS7');	
			showValue('Espece_entree2CS7');	
			showValue('Nb_entree2_espece8');	
			showValue('Famille_entree2CS8');	
			showValue('Genre_entree2CS8');	
			showValue('Espece_entree2CS8');
			
			showValue('Famille_observe1');	
			showValue('Genre_observe1');	
			showValue('Espece_observe1');
			showValue('Famille_observe2');	
			showValue('Genre_observe2');	
			showValue('Espece_observe2');
			showValue('Famille_observe3');	
			showValue('Genre_observe3');	
			showValue('Espece_observe3');
			
			showValue('Nb_CS_morte1');	
			showValue('Famille_morte1');	
			showValue('Genre_morte1');	
			showValue('Espece_morte1');	
			showValue('Nb_CS_morte2');
			showValue('Famille_morte2');	
			showValue('Genre_morte2');	
			showValue('Espece_morte2');	
			showValue('Nb_CS_morte3');	
			showValue('Famille_morte3');	
			showValue('Genre_morte3');	
			showValue('Espece_morte3');	
			showValue('Nb_CS_morte4');	
			showValue('Famille_morte4');	
			showValue('Genre_morte4');	
			showValue('Espece_morte4');

			showValue('Remarque');	
			showValue('Nb_filet_sol');	
			showValue('IDFilet_1');	
			showValue('Filet_sol_m2_1');	
			showValue('EntreeFilet_1');	
			showValue('HauteurFilet_1');	
			showValue('Filet_debut_1');	
			showValue('Filet_fin_1');	
			showValue('Filet_temps_1');	
			showValue('Nb_capture_filet_1');	
			showValue('Nb_preleve_filet_1');
			showValue('IDFilet_2');	
			showValue('Filet_sol_m2_2');	
			showValue('EntreeFilet_2');	
			showValue('HauteurFilet_2');	
			showValue('Filet_debut_2');	
			showValue('Filet_fin_2');	
			showValue('Filet_temps_2');	
			showValue('Nb_capture_filet_2');	
			showValue('Nb_preleve_Filet_2');
			
			showValue('NbHarp');
			showValue('IDHarp_1');	
			showValue('EntreeHarp_1');	
			showValue('Harp_debut_1');	
			showValue('Harp_fin_1');	
			showValue('Harp_temps_1');	
			showValue('Nb_capture_harp_1');	
			showValue('Nb_preleve_harp_1');
			showValue('IDHarp_2');	
			showValue('EntreeHarp_2');	
			showValue('Harp_debut_2');	
			showValue('Harp_fin_2');	
			showValue('Harp_temps_2');	
			showValue('Nb_capture_harp_2');	
			showValue('Nb_preleve_harp_2');

			showValue('Saison');	
			showValue('Climat');	
			showValue('Precipitation');	
			showValue('Vent');	
			showValue('Lune');	
			showValue('Temperature_logger');	
			showValue('Humidite_logger');


			
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



