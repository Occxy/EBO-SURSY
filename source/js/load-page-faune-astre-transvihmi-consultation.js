function chargement_de_la_faune_consultation() {
	showConnexionStatus();
	
    var table = searchParams.get('table');

    chargement_des_donnees(table);
}

function chargement_des_donnees(table) {
	
	var id = localStorage.getItem('ID_faune' + table);

	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'faune' + table + debug);
	} else {
		var DB = new PouchDB('faune' + table + debug);
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
			showValue('ID_NI_faune');
			
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
			
			showValue('Date_collecte');		
			showValue('Equipe');	
			showValue('Espece_animale');	
			showValue('Localisation');	
			


			
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



