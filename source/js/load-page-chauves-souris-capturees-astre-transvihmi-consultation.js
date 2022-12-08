function chargement_des_chauves_souris_capturees_consultation() {
	showConnexionStatus();
	
    var table = searchParams.get('table');
    
	chargement_des_donnees(table);
}

function chargement_des_donnees(table) {
	
	var id = localStorage.getItem('ID_chauves_souris_capturees' + table);

	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'chauves_souris_capturees' + table + debug);
	} else {
		var DB = new PouchDB('chauves_souris_capturees' + table + debug);
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
				} else if (elementName == 'NumFilet_piege') {
					element.innerHTML = result.rows[0].doc['NumFilet/piege'];
				} else {
					element.innerHTML = result.rows[0].doc[elementName];
				}
				element.style.color = "red";
			}
			
			showValue('Username');
			showValue('N_identification_CS');
			showValue('N_identification_mere');
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
						
			showValue('Date');	
			showValue('Equipe');
			
														

			showValue('Methode_capture');
			showValue('NumFilet_piege');
			showValue('LongueurFilet');	
			showValue('HauteurFilet');
			showValue('Lat_degre_decFilet');
			showValue('LatitudeFilet');
			showValue('Long_degre_decFilet');
			showValue('LongitudeFilet');
			showValue('Lat_degre_dec_Lieu_capture');
			showValue('Latitude_Lieu_capture');
			showValue('Long_degre_dec_Lieu_capture');
			showValue('Longitude_Lieu_capture');
			
			/*var element = document.getElementById('NumFilet_value');
			
			element.innerHTML = result.rows[0].doc[elementName];
			element.style.color = "red";*/
			
			showValue('Type_chauve_souris');
			showValue('Espece_identifiee');
			showValue('Famille_terrain');
			showValue('Genre_terrain');
			showValue('Espece_terrain');
			showValue('Famille_labo');
			showValue('Genre_labo');
			showValue('Espece_labo');
			showValue('Famille_consensus');
			showValue('Genre_consensus');
			showValue('Espece_consensus');
			showValue('Sexe');
			showValue('Age');
			showValue('Gestante');
			showValue('Lactation');
			showValue('Suitee');
			showValue('Sexe_enfant');
			showValue('Vivante');
			showValue('Cause_deces');
			showValue('Poids_enfant');
			showValue('Identifiant_enfant');
			showValue('Poids_gr');
			showValue('Ailes_WS');
			showValue('L_totale_corps_Ltc_mm');
			showValue('TL_L_Totale_avec_queue_mm');
			showValue('Taille_yeux');
			showValue('L_queue_T_mm');
			showValue('E_mm');
			showValue('Tr_mm');		
			showValue('Tib_mm');					
			showValue('HF_L_arriere_pied_mm');
			showValue('NL_breadth_larg_feuille_de_nez_mm');
			showValue('NL_lenght_mm');
			showValue('L_metacarpe_3ieme_doigt_mm');
			showValue('Couleur_pelage_dorsal');
			showValue('Couleur_pelage_ventral');
			showValue('Photo');
			showValue('Remarques_anomalies');
			showValue('Sang_DBS_nb_cercles');
			showValue('Sang_tube_EDTA');
			showValue('Feces_RNAl');
			showValue('Urine');
			showValue('Urine_DUS_nombre_cercles');
			showValue('Feces_urine_RNAl');
			showValue('Ecouvillon_gorge_RNAl');
			showValue('Ecouvillon_rectal_RNAl');
			showValue('Ectoparasites_ethanol');
			showValue('Poils_ethanol');
			showValue('Wing_punch_ethanol');
			showValue('Feces_culture_glycerol');
			showValue('Feces_ethanol');
			showValue('Sperme');
			showValue('Lait');
			showValue('Autres_echantillons_remarques');
			showValue('Specimen_entier');
			showValue('Specimen_preserve_dans');
			showValue('Prelevement_organe');
			showValue('Foie_formol');
			showValue('Foie_RNAl');
			showValue('Rate_formol');
			showValue('Rate_RNAl');
			showValue('Reins_formol');
			showValue('Reins_RNAl');
			showValue('Intestins_formol');
			showValue('Intestins_RNAl');
			showValue('Poumons_formol');
			showValue('Poumons_RNAl');
			showValue('Coeur_formol');
			showValue('Coeur_RNAl');
			showValue('Ggl_lymph_formol');
			showValue('Ggl_lymph_RNAl');
			showValue('Testicules_formol');
			showValue('Testicules_RNAl');
			showValue('Peau_formol');
			showValue('Peau_RNAl');
			showValue('Muscles_formol');
			showValue('Muscles_RNAl');
			showValue('Cerveau_formol');
			showValue('Cerveau_RNAl');
			showValue('Autre');
			showValue('Autre_formol');
			showValue('Autre_RNAl');
			showValue('Remarques_echantillons');
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



