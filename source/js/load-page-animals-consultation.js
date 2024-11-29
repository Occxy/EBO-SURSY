function chargement_des_animaux() {
	showConnexionStatus();
	
    var table = searchParams.get('table');
    
	chargement_des_donnees(table);
}

function chargement_des_donnees(table) {
	
	var id = localStorage.getItem('ID_animals' + table);

	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'animals' + table + debug);
	} else {
		var DB = new PouchDB('animals' + table + debug);
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
			showValue('ID_animal');			
			showValue('pays');
			showValue('mission');
			showValue('date');
			showValue('village');
			showValue('type_chasse_capture');
			showValue('Point_GPS_LAT');
			showValue('Point_GPS_LONG');
			showValue('animal');
			showValue('especes');
			showValue('sexes');
			showValue('age');
			showValue('poids');
			showValue('etat-physioloque');
			showValue('plasma');
			showValue('serum');
			showValue('blood_spot');	
			showValue('coeur');
			showValue('cerveau');
			showValue('foie_rate');
			showValue('glandes_salivaires');
			showValue('poumons');
			showValue('reins');
			showValue('intestins');
			showValue('urine');
			showValue('ecouvillon_salivaire');
			showValue('ecouvillon_rectal');
			showValue('ecouvillon_nasal');
			showValue('ectoparasites');
			showValue('placenta');
			showValue('liquide_amniotique');
			showValue('testicules');
			showValue('lesions_ou_nodules');
			showValue('lait');
			showValue('foetus');
			showValue('observation');
			showValue('guano');
			showValue('longueur_bras');
			showValue('longueur_avant_bras');
			showValue('longueur_corporelle');/*
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



