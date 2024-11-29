function chargement_des_sites() {
	showConnexionStatus();
	
    var option = searchParams.get('option');
    var table = searchParams.get('table');
    
	chargement_des_tables_de_reference(table, option);
}

function chargement_des_tables_de_reference(table, option) {
	
	//0 -> juste le chargement des tables de références
	//1 -> chargement des table de références et récupérations des infos du dernier ajout
	//2 -> chargement des table de références pour modification d'un enregistrement
	
	var remote_couchdb = localStorage.getItem('remote_couchdb');

	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
		
	var Pays = document.getElementById("Pays");		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'pays' + nom_table + debug);
	} else {
		var DB = new PouchDB('pays' + nom_table + debug);
	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	var paysTablesData = JSON.parse(JSON.stringify(result));
		    	
	    	paysTablesData.rows.forEach(function(row){   
	    		Pays.options[Pays.options.length] = new Option(row.doc.Pays, row.doc.Pays); 
	    	});		 

	    	//listeLieu_capture();
	    	
	    	if ((option == 1) || (option == 2)) {
				modifier(table, option);
	  		};
		
	    }
	}).catch(function (err) {
		console.log(err);
	});

	/*function listeLieu_capture() {
	  	var Lieu_capture = document.getElementById("Lieu_capture");	
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'lieu_capture' + debug);
		} else {
			var DB = new PouchDB('lieu_capture' + debug);
		};
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
	    		var lieu_captureTablesData = JSON.parse(JSON.stringify(result));
	    		
	    		lieu_captureTablesData.rows.forEach(function(row){   
	    			Lieu_capture.options[Lieu_capture.options.length] = new Option(row.doc.Lieu_capture, row.doc.Lieu_capture); 
	    		});		    
	    		Lieu_capture.options[Lieu_capture.options.length] = new Option("Manquant", "Manquant");

	    		if ((option == 1) || (option == 2)) {
					modifier(table, option);
		  		};
			}
		}).catch(function (err) {
			console.log(err);
		});
	}*/
}


function modifier(table, option) {
	
	var doc;
	if (option == 1) {
		doc = JSON.parse(localStorage.getItem('siteTablesData'));
		
		function addValue(elementName, onchange) {
			var element = document.getElementById(elementName);
			element.value = doc[elementName];
			try {
				if (onchange) {
					element.onchange();
				}
			} catch(err) {
			}
		}
		
		addValue('Date');
		//addValue('Equipe');
		addValue('Pays');
		addValue('Region_capture');
		addValue('Site_capture');
		//addValue('Lieu_capture');
		addValue('Environnement');
		addValue('Lat_degre_dec');
		addValue('Latitude');
		addValue('Long_degre_dec');
		addValue('Longitude');
		addValue('Proximite_village_km');
	} else {
	
		var id = localStorage.getItem('ID_site' + table);
		
		var debug;
		if (localStorage.getItem('debug') === null) {
			debug = '';
		} else {
			debug = localStorage.getItem('debug');
		};
		
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'site' + table + debug);
		} else {
			var DB = new PouchDB('site' + table + debug);
		};
		DB.allDocs({  		
				keys: [id],
			include_docs: true,
			attachments: true
		}).then(function (result) {
	
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
				console.log(JSON.stringify(result.rows));
					
				var N_site = document.getElementById("N_site");
				//if (option != 1) {
					N_site.value = result.rows[0].doc.N_site;
				//}
				
				//alert(result.rows[0].doc['N_identification_mere']);
				
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
				
				addValue('Date');
				//addValue('Equipe');
				addValue('Pays');
				addValue('Region_capture');
				addValue('Site_capture');
				//addValue('Lieu_capture');
				addValue('Environnement');
				addValue('Lat_degre_dec');
				addValue('Latitude');
				addValue('Long_degre_dec');
				addValue('Longitude');
				addValue('Proximite_village_km');
				
				
					  
	    	};
	
		}).catch(function (err) {
			console.log(err);
		});
	}
}


