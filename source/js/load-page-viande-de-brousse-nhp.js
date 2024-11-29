function chargement_des_viandes_de_brousse_nhp() {
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
		doc = JSON.parse(localStorage.getItem('viande_de_brousse_nhpTablesData'));
		
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
		
		addValue('date');
		addValue('nom');
		addValue('nom_scientifique');
		addValue('site');
		addValue('village');
		addValue('sex');
		addValue('age');
		addValue('M_ou_V');
		addValue('sero_status_siv');
		addValue('siv_pcr');
		addValue('dna_species');				
		

	} else {
		
		
		var id = localStorage.getItem('ID_viande_de_brousse_nhp' + table);
				
		var debug;
		if (localStorage.getItem('debug') === null) {
			debug = '';
		} else {
			debug = localStorage.getItem('debug');
		};
		
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'viande_de_brousse_nhp' + table + debug);
		} else {
			var DB = new PouchDB('viande_de_brousse_nhp' + table + debug);
		};
		DB.allDocs({  		
				keys: [id],
			include_docs: true,
			attachments: true
		}).then(function (result) {
	
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
				console.log(JSON.stringify(result.rows));
					
				var number = document.getElementById("number");
				number.value = result.rows[0].doc.number;
											
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
				addValue('date');
				addValue('nom');
				addValue('nom_scientifique');
				addValue('site');
				addValue('village');
				addValue('sex');
				addValue('age');
				addValue('M_ou_V');
				addValue('sero_status_siv');
				addValue('siv_pcr');
				addValue('dna_species');
	    	};
	    	
		}).catch(function (err) {
			console.log(err);
		});
	}
}


