function chargement_des_chauves_souris() {
	showConnexionStatus();
	
    var table = searchParams.get('table');
    
	chargement_des_donnees(table);
}

function chargement_des_donnees(table) {
	
	var id = localStorage.getItem('ID_chauves_souris_organes' + table);

	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'chauves_souris_organes' + table + debug);
	} else {
		var DB = new PouchDB('chauves_souris_organes' + table + debug);
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
			showValue('Identification');		
			showValue('Animal');
			showValue('Espece');
			showValue('Village');
			showValue('Pays');
			showValue('Date_collecte');
			showValue('Echantillon_biologique');
			showValue('Point_GPS_LAT');
			showValue('Point_GPS_LONG');
			/*
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
			showValue('longueur_corporelle');*/
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



