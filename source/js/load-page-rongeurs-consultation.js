function chargement_des_chauves_souris_capturees_consultation() {
	showConnexionStatus();
	
    var table = searchParams.get('table');
    
	chargement_des_donnees(table);
}

function chargement_des_donnees(table) {
	
	var id = localStorage.getItem('ID_rongeur' + table);


	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'rongeurs' + table + debug);
	} else {
		var DB = new PouchDB('rongeurs' + table + debug);
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
				element.innerHTML = result.rows[0].doc[elementName];
				element.style.color = "red";
			}
			
			showValue('Username');
			showValue('Num_rongeur');
			showValue('CODE_rongeur');
			showValue('N_site');
			showValue('Pays');
			showValue('Region_capture');
			showValue('Site_capture');
			showValue('Environnement');
			showValue('Proximite_village_km');
			showValue('Lat_degre_dec');
			showValue('Latitude');
			showValue('Long_degre_dec');
			showValue('Longitude');
			showValue('NumMission_NumSite');
			showValue('Date');
			showValue('J');
			showValue('Equipe');
			showValue('Num_piege');
			showValue('Type_piege');
			showValue('Zone_capture');
			showValue('Emplacement_piege');
			showValue('Detail_emplacement');
			showValue('Lat_degre_dec_Piege');
			showValue('Latitude_Piege');
			showValue('Long_degre_dec_Piege');
			showValue('Longitude_Piege');
			showValue('Contention');
			showValue('Preleveur');
			showValue('Autopsie');
			
			showValue('Identification_espece');
			showValue('Age');
			showValue('Sexe');
			showValue('Famille_terrain');
			showValue('Genre_terrain');
			showValue('Espece_terrain');
			showValue('Famille_labo');
			showValue('Genre_labo');
			showValue('Espece_labo');
			
			showValue('F_gestante');
			showValue('Nbtotal_paires_mamelles');
			showValue('N_mamelles_pectorales');
			showValue('N_mamelles_abdominales');
			showValue('N_mamelles_inguinales');
			showValue('Male_testicules_descendues');
			showValue('Male_longueur_testicules');
			showValue('Photo');
			showValue('Couleur_pelage_dorsal');
			showValue('Couleur_pelage_ventral');
			showValue('Remarques_anomalies');
			

			showValue('Poids_sac_rongeur_g');
			showValue('Poids_sac_g');
			showValue('Poids_g');
			showValue('L_totale_corps_Ltc_mm');
			showValue('L_queue_mm');
			showValue('L_patte_arriere_Tib_mm');
			showValue('L_crane_mm');
			showValue('L_oreille_mm');
			showValue('Taille_yeux');
			showValue('Relache_vivant');
			showValue('Cause_deces');
			showValue('Recapture');
			showValue('Comment_recapture');
			showValue('Euthanasie');
			showValue('Methode_eutha');
			showValue('Dosage_Ketamine_mL');
			showValue('Biopsie_oreille_BO');
			showValue('Ecouv_Salive_RNAl_SA');
			showValue('Ecouv_Urogenital_RNAl_URO');
			showValue('Urine_RNAl_UR');
			showValue('Ecouv_rectal_RNAl_RE');
			showValue('Feces_RNAl_FE');
			showValue('Sang_DBS_nb_cercles');
			showValue('Ectoparasites_Tiques_Eth_EP_TI');
			showValue('Ectoparasites_Puces_Eth_EP_PU');
			showValue('Poils_ethanol_PO');
			showValue('Autres_echantillons');
			showValue('Autres_echantillons_details');
			showValue('Remarques_echantillons');
			
			showValue('Coeur_RNAl_CO');
			showValue('Poumon_RNAl_PO');
			showValue('Foie_RNAl_FO');
			showValue('Rate_RNAl_RA');
			showValue('Rein_RNAl_RN');
			showValue('Testicule_RNAl_TE');
			showValue('Ovaire_RNAl_OV');
			showValue('Embryon_RNAl_EM');
			showValue('F_gestante_nb_embryons');
			showValue('Intestins_RNAl_INT');
			showValue('Peau_RNAl_PE');
			showValue('Cerveau_RNAl_CE');
			showValue('Autre_Organe_RNAl');
			showValue('Details_autre_organe_RNAl');
			/*showValue('N_identification_CS');
			showValue('N_identification_mere');
			showValue('N_site');
			showValue('Pays');
			showValue('Region_capture');
			showValue('Site_capture');
			showValue('Environnement');
			showValue('Proximite_village_km');
			showValue('Lat_degre_dec');
			showValue('Latitude');
			showValue('Long_degre_dec');
			showValue('Longitude');
			showValue('Date');
			showValue('Equipe');
			showValue('Lieu_capture');
			showValue('Methode_capture');
			showValue('NumFilet');	
			showValue('LongueurFilet');
			showValue('HauteurFilet');
			showValue('Lat_degre_decFilet');
			showValue('LatitudeFilet');
			showValue('Long_degre_decFilet');
			showValue('LongitudeFilet');*/
			
			/*var element = document.getElementById('NumFilet_value');
			
			element.innerHTML = result.rows[0].doc[elementName];
			element.style.color = "red";*/
			
			/*showValue('Lat_degre_dec_Lieu_capture');
			showValue('Latitude_Lieu_capture');
			showValue('Long_degre_dec_Lieu_capture');
			showValue('Longitude_Lieu_capture');
			showValue('Arret_Capture');
			showValue('Causes_Arret_Capture');
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
			showValue('L_avant_bras_mm');
			showValue('L_totale_corps_mm');
			showValue('Taille_yeux');
			showValue('L_queue_mm');
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
			showValue('Remarques_echantillons');*/
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



