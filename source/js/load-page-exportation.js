function chargement_de_la_table_site() {
	
	nom_table = searchParams.get('table');
	
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};

	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'site' + nom_table + debug);
	} else {
		var DB = new PouchDB(type_table + nom_table + debug);
	};
	
	alert('site' + nom_table + debug)
}

/*function chargement_de_la_table_d_exportation() {
	showConnexionStatus();
	
	console.log('ok_penalty_marqué');
	
	var table = searchParams.get('table');
	
	var multiselect1 = document.getElementById("multiselect1");		
	
	if ((table == 'chauves_souris_capturees_astre') || (table == 'chauves_souris_capturees_transvihmi') || (table == 'chauves_souris_capturees_mivegec')) {
		var fields = 
			['N_identification_CS', 'N_identification_mere', 'N_site', 'Date',
			 'Equipe', 'Pays', 'Region_capture', 'Site_capture', 'Lieu_capture',
		     'Environnement', 'Latitude', 'Lat_degre_dec', 'Longitude', 'Long_degre_dec',
		     'Proximite_village_km', 'Methode_capture', 'Type_chauve_souris',
		     'Espece_identifiee', 'Famille_terrain', 'Genre_terrain', 'Espece_terrain',
		     'Famille_labo', 'Genre_labo', 'Espece_labo', 'Famille_consensus', 'Genre_consensus', 
		     'Espece_consensus', 'Sexe', 'Age', 'Gestante', 'Lactation', 'Suitee', 'Sexe_enfant',
		     'Poids_enfant', 'Identifiant_enfant', 'Vivante', 'Cause_deces', 'Poids_gr',
		     'L_avant_bras_mm', 'L_totale_corps_mm', 'Taille_yeux', 'L_queue_mm',
		     'L_metacarpe_3ieme_doigt_mm', 'Couleur_pelage_dorsal',
		     'Couleur_pelage_ventral', 'Remarques_anomalies', 'Sang_DBS_nb_cercles', 
		     'Sang_tube_EDTA', 'Feces_RNAl', 'Urine', 'Urine_DUS_nombre_cercles',
		     'Feces_urine_RNAl', 'Ecouvillon_gorge_RNAl', 'Ecouvillon_rectal_RNAl',
		     'Ectoparasites_ethanol', 'Poils_ethanol', 'Wing_punch_ethanol',
		     'Feces_culture_glycerol', 'Sperme', 'Autres_echantillons_remarques',
		     'Specimen_entier', 'Specimen_preserve_dans', 'Prelevement_organe',
		     'Foie_formol', 'Foie_RNAl', 'Rate_formol', 'Rate_RNAl', 'Reins_formol',
		     'Reins_RNAl', 'Intestins_formol', 'Intestins_RNAl', 'Poumons_formol',
		     'Poumons_RNAl', 'Coeur_formol','Coeur_RNAl', 'Ggl_lymph_formol',
		     'Ggl_lymph_RNAl', 'Testicules_formol', 'Testicules_RNAl', 'Peau_formol',
		     'Peau_RNAl', 'Muscles_formol', 'Muscles_RNAl', 'Cerveau_formol',
		     'Cerveau_RNAl', 'Autre', 'Autre_formol', 'Autre_RNAl', 'Remarques_echantillons'];
		
	} else if ((table == 'chauves_souris_non_invasives_astre') || (table == 'chauves_souris_non_invasives_transvihmi') || (table == 'chauves_souris_non_invasives_mivegec')) {
		var fields = 
			['Date', 'Heure_debut', 'Heure_fin', 'N_site', 'Equipe', 'Pays', 'Region_collecte', 'Site_collecte', 'Environnement', 
			 'Lieu_collecte', 'Lat_degre_dec', 'Latitude', 'Long_degre_dec', 'Longitude', 'Type_site', 'Proximite_village_km',
			 'Type_chauves_souris', 'Famille_1', 'Genre_1', 'Espece_1', 'Famille_2', 'Genre_2', 'Espece_2', 'Famille_3', 
			 'Genre_3', 'Espece_3', 'Remarques', 'N_identification_echantillon', 'Type_echantillon', 'Nbre_feces_par_tube',
			 'Urine_methode', 'Urine_papier_buvard_nbre_cercles'];
	} else if  ((table == 'donnees_journalieres_astre') || (table == 'donnees_journalieres_transvihmi') || (table == 'donnees_journalieres_mivegec')) {
		var fields = 
			['Date', 'Equipe', 'ID_CS_preleve_debut', 'ID_CS_preleve_fin', 'N_site',
			 'Pays', 'Region_capture', 'Site_capture', 'Environnement',	'Proximite_village_km',
			 'Lat_degre_dec', 'Latitude', 'Long_degre_dec', 'Longitude', 'Roost_diurne', 'Presence_diurne', 
			 'Famille_diurne1', 'Genre_diurne1', 'Espece_diurne1',
			 'Famille_diurne2', 'Genre_diurne2', 'Espece_diurne2',
			 'Famille_diurne3', 'Genre_diurne3', 'Espece_diurne3',
			 'Famille_diurne4', 'Genre_diurne4', 'Espece_diurne4',
			 'Famille_diurne5', 'Genre_diurne5', 'Espece_diurne5',
			 'Famille_diurne6', 'Genre_diurne6', 'Espece_diurne6',
			 'Famille_diurne7', 'Genre_diurne7', 'Espece_diurne7',
			 'Methode_comptage_diurne', 'Resultat_comptage_diurne_1', 'Resultat_comptage_diurne_2',
			 'Utilisation_site_nocturne', 'Aliment_consomme', 'Presence_nocturne',
			 'Famille_nocturne1', 'Genre_nocturne1',	'Espece_nocturne1',
			 'Famille_nocturne2', 'Genre_nocturne2',	'Espece_nocturne2',
			 'Famille_nocturne3', 'Genre_nocturne3',	'Espece_nocturne3',
			 'Famille_nocturne4', 'Genre_nocturne4',	'Espece_nocturne4',
			 'Famille_nocturne5', 'Genre_nocturne5',	'Espece_nocturne5',
			 'Famille_nocturne6', 'Genre_nocturne6',	'Espece_nocturne6',
			 'Famille_nocturne7', 'Genre_nocturne7',	'Espece_nocturne7',
			 'Methode_comptage_nocturne', 'Resultat_comptage_nocturne_1', 'Resultat_comptage_nocturne_2',
			 'Vocalisations', 'Parade_sexuelle',
			 'Famille_vocalisations', 'Genre_vocalisations', 'Espece_vocalisations',
			 'Copulations', 
			 'Famille_copulations', 'Genre_copulations', 'Espece_copulations',
			 'Suitee', 
			 'Famille_suitee', 'Genre_suitee', 'Espece_suitee', 
			 'Agressions',
			 'Famille_agressions', 'Genre_agressions', 'Espece_agressions',
			 'Filet_canopee_nb', 'Filet_canopee_m2', 'Filet_sol_nb', 'Filet_sol_m2',
			 'Filet_debut', 'Filet_fin', 'Filet_temps', 'Filet_capture_nb', 'Harp_debut',
			 'Harp_fin', 'Harp_temps', 'Harpe_nb', 'Saison', 'Climat', 'Autre_climat',
			 'Precipitation', 'Vent', 'Lune', 'Temperature_logger', 'Humidite_logger'];
	}
	
	console.log('ok');
	console.log(fields);
	
	for (var i = 0; i < fields.length; i++) {
		multiselect1.options[i] = new Option(fields[i], fields[i]);
	};
	
}*/