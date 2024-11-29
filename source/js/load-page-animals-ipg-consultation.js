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
			showValue('ID');			
			showValue('Sampling_date');
			showValue('Weight');
			showValue('Enclos');
			showValue('Age');
			showValue('Sex');
			showValue('Owner_name');
			showValue('Origin');
			showValue('Sampling_site');
			showValue('Point_GPS_LAT');
			showValue('Point_GPS_LONG');
			showValue('Other_information');
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



