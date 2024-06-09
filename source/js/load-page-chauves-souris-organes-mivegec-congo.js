function chargement_des_chauves_souris_organes() {
	showConnexionStatus();
	
    var option = searchParams.get('option');
    var table = searchParams.get('table');
    
	//chargement_des_tables_de_reference(table, option);
    if ((option == 1) || (option == 2)) {
    	modifier(table, option);
    }
}


function modifier(table, option) {
	

	var doc;
	if (option == 1) {
		doc = JSON.parse(localStorage.getItem('chauves_souris_organesTablesData'));
		
		function addValue(elementName, onchange) {
			var element = document.getElementById(elementName);
			element.value = doc[elementName];
			try {
				if (onchange) {
					element.onchange();
				}
			} catch(err) {
			};
		}
		
		addValue('pays');
		addValue('mission');
		addValue('date');
		addValue('village');
		addValue('type_chasse_capture');
		addValue('Point_GPS_LAT');
		addValue('Point_GPS_LONG');
		addValue('animal');
		addValue('especes');
		addValue('sexes');
		addValue('age');
		addValue('poids');
		addValue('etat-physioloque');
		addValue('plasma');				
		addValue('serum');
		addValue('blood_spot');
		addValue('coeur');
		addValue('cerveau');
		addValue('foie_rate');
		addValue('glandes_salivaires');
		addValue('poumons');
		addValue('reins');				
		addValue('intestins');
		addValue('urine');
		addValue('ecouvillon_salivaire');
		addValue('ecouvillon_rectal');
		addValue('ecouvillon_nasal');
		addValue('ectoparasites');
		addValue('placenta');
		addValue('liquide_amniotique');
		addValue('testicules');
		addValue('lesions_ou_nodules');
		addValue('lait');
		addValue('foetus');
		addValue('observation');
		addValue('guano');
		addValue('longueur_bras');
		addValue('longueur_avant_bras');
		addValue('longueur_corporelle');
	  

	} else {
		
		
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
					
				var Identification = document.getElementById("Identification");
				Identification.value = result.rows[0].doc.Identification;
											
				function addValue(elementName, onchange) {
					var element = document.getElementById(elementName);
					element.value = result.rows[0].doc[elementName];
					try {
						if (onchange) {
							element.onchange();
						}
					} catch(err) {
					};
				}
				
				//Identification	Animal	Espece	Village	Pays	Date_collecte	Echantillon_biologique	Point_GPS_LAT	Point_GPS_LONG

				addValue('Animal');
				addValue('Espece');
				addValue('Village');
				addValue('Pays');
				addValue('Date_collecte');
				addValue('Echantillon_biologique');
				addValue('Point_GPS_LAT');
				addValue('Point_GPS_LONG');
				
	    	};
	    	
		}).catch(function (err) {
			console.log(err);
		});
	}
}


