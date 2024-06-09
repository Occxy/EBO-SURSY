function chargement_des_animaux() {
	showConnexionStatus();
	
    var table = searchParams.get('table');
    
	chargement_des_donnees(table);
}

function chargement_des_donnees(table) {
	
	var id = localStorage.getItem('ID_animals' + table + '_5');

	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'animals' + table + '_5' + debug);
	} else {
		var DB = new PouchDB('animals' + table + '_5' + debug);
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
				if (elementName == 'Commun_name') {
					element.innerHTML = result.rows[0].doc['Commun name'];
				} else {
					element.innerHTML = result.rows[0].doc[elementName];
				}
				element.style.color = "red";
			}
												
			showValue('Username');
			showValue('Institut');
			showValue('Gender');			
			showValue('Familly');
			showValue('Commun_name');
			showValue('Date');
			showValue('Number');
			showValue('Square');
			showValue('Commune');
			showValue('Town');
			showValue('Prefecture');
			showValue('Point_GPS_LAT');
			showValue('Point_GPS_LONG');
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



