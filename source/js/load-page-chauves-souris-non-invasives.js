function chargement_des_chauves_souris_non_invasives() {
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
		
	var N_site = document.getElementById("N_site");		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'site' + nom_table + debug);
	} else {
		var DB = new PouchDB('site' + nom_table + debug);
	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	var siteTablesData = JSON.parse(JSON.stringify(result));
		    	
	    	siteTablesData.rows.forEach(function(row){   
	    		N_site.options[N_site.options.length] = new Option(row.doc.N_site, row.doc.N_site);
		    });		
		}
		
		listePays()	

	}).catch(function (err) {
		console.log(err);
	});
	
	function listePays() {
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
		   		
		   		listeLieu_collecte();
			}
		}).catch(function (err) {
			console.log(err);
		});
	};  
	
	function listeLieu_collecte() {
		var Lieu_collecte = document.getElementById("Lieu_collecte");	
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'lieu_collecte' + nom_table + debug);
		} else {
			var DB = new PouchDB('lieu_collecte' + nom_table + debug);
		};
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		   		var lieu_collecteTablesData = JSON.parse(JSON.stringify(result));
		   		
		   		lieu_collecteTablesData.rows.forEach(function(row){   
		   			Lieu_collecte.options[Lieu_collecte.options.length] = new Option(row.doc.Lieu_collecte, row.doc.Lieu_collecte); 
		   		});		    
		   		Lieu_collecte.options[Lieu_collecte.options.length] = new Option("Manquant", "Manquant");
			
		   		listeFamille()
			}
		}).catch(function (err) {
			console.log(err);
		});
	};
	
	function listeFamille() {
		var Famille_1 = document.getElementById("Famille_1");
	  	var Famille_2 = document.getElementById("Famille_2");
	  	var Famille_3 = document.getElementById("Famille_3");
	  	if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'espece' + nom_table + debug);
		} else {
			var DB = new PouchDB('espece' + nom_table + debug);
		};
		DB.allDocs({  		
	  		include_docs: true,
			attachments: true
		}).then(function (result) {
	  		// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
				localStorage['especeTablesData'] = JSON.stringify(result);
	  	    	var especeTablesData = JSON.parse(localStorage.getItem('especeTablesData'));
	  		    		
	  			especeTablesData.rows[0].doc.Famille.forEach(function(row){   
	  		   		Famille_1.options[Famille_1.options.length] = new Option(row.Nom, row.Nom); 
	  		   		Famille_2.options[Famille_2.options.length] = new Option(row.Nom, row.Nom);
	  		   		Famille_3.options[Famille_3.options.length] = new Option(row.Nom, row.Nom);
			   	});	
	  			Famille_1.options[Famille_1.options.length] = new Option("Manquant", "Manquant");
	 		   	Famille_2.options[Famille_2.options.length] = new Option("Manquant", "Manquant");
	 		   	Famille_3.options[Famille_3.options.length] = new Option("Manquant", "Manquant");
	 			   	
	 		   if ((option == 1) || (option == 2)) {
					modifier(table, option);
		  		};   
			}    	

	  	}).catch(function (err) {
	  		console.log(err);
	  	});
	}
}

function modifier(table, option) {
	
	var doc;
	if (option == 1) {
		doc = JSON.parse(localStorage.getItem('chauves_souris_non_invasivesTablesData'));
		
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
		
		
		addValue('N_site', true);
		addValue('Equipe');
		addValue('Pays');
		addValue('Region_collecte');
		addValue('Site_collecte');
		addValue('Environnement');
		addValue('Proximite_village_km');
		addValue('Lat_degre_dec');
		addValue('Latitude');
		addValue('Long_degre_dec');
		addValue('Longitude');
		addValue('Date');
		addValue('Heure_debut');
		addValue('Heure_fin');
		addValue('Lieu_collecte');
		addValue('Type_site');
		addValue('Methode_collecte');
		addValue('Type_chauves_souris');
		
		var Famille_1 = document.getElementById("Famille_1");
		var Genre_1 = document.getElementById("Genre_1");
		var Espece_1 = document.getElementById("Espece_1");
		var Famille_2 = document.getElementById("Famille_2");
		var Genre_2 = document.getElementById("Genre_2");
		var Espece_2 = document.getElementById("Espece_2");
		var Famille_3 = document.getElementById("Famille_3");
		var Genre_3 = document.getElementById("Genre_3");
		var Espece_3 = document.getElementById("Espece_3");
		try {
			select_change(table, Famille_1, Genre_1, Espece_1, doc.Famille_1, doc.Genre_1, doc.Espece_1);
			select_change(table, Famille_2, Genre_2, Espece_2, doc.Famille_2, doc.Genre_2, doc.Espece_2);
			select_change(table, Famille_3, Genre_3, Espece_3, doc.Famille_3, doc.Genre_3, doc.Espece_3);
		}
		catch(err) {
		};
		
		addValue('Remarques');
			  
	} else {
		var id = localStorage.getItem('ID_chauves_souris_non_invasives' + table);
	
		var debug;
		if (localStorage.getItem('debug') === null) {
			debug = '';
		} else {
			debug = localStorage.getItem('debug');
		};
		
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'chauves_souris_non_invasives' + table + debug);
		} else {
			var DB = new PouchDB('chauves_souris_non_invasives' + table + debug);
		};
		DB.allDocs({  		
				keys: [id],
			include_docs: true,
			attachments: true
		}).then(function (result) {
	
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
				console.log(JSON.stringify(result.rows));
					
				/*var N_identification_CS = document.getElementById("N_identification_CS");
				if (option != 1) {
					N_identification_CS.value = result.rows[0].doc.N_identification_CS;
				}*/
				
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
				
				
				addValue('N_site', true);
				addValue('Equipe');
				addValue('Pays');
				addValue('Region_collecte');
				addValue('Site_collecte');
				addValue('Environnement');
				addValue('Proximite_village_km');
				addValue('Lat_degre_dec');
				addValue('Latitude');
				addValue('Long_degre_dec');
				addValue('Longitude');
				addValue('Date');
				addValue('Heure_debut');
				addValue('Heure_fin');
				addValue('Lieu_collecte');
				addValue('Type_site');
				addValue('Methode_collecte');
				addValue('Type_chauves_souris');
				
				var Famille_1 = document.getElementById("Famille_1");
				var Genre_1 = document.getElementById("Genre_1");
				var Espece_1 = document.getElementById("Espece_1");
				var Famille_2 = document.getElementById("Famille_2");
				var Genre_2 = document.getElementById("Genre_2");
				var Espece_2 = document.getElementById("Espece_2");
				var Famille_3 = document.getElementById("Famille_3");
				var Genre_3 = document.getElementById("Genre_3");
				var Espece_3 = document.getElementById("Espece_3");
				try {
					select_change(table, Famille_1, Genre_1, Espece_1, result.rows[0].doc.Famille_1, result.rows[0].doc.Genre_1, result.rows[0].doc.Espece_1);
					select_change(table, Famille_2, Genre_2, Espece_2, result.rows[0].doc.Famille_2, result.rows[0].doc.Genre_2, result.rows[0].doc.Espece_2);
					select_change(table, Famille_3, Genre_3, Espece_3, result.rows[0].doc.Famille_3, result.rows[0].doc.Genre_3, result.rows[0].doc.Espece_3);
				}
				catch(err) {
				};
					
				addValue('Remarques');
					  
	    	};
	
		}).catch(function (err) {
			console.log(err);
		});
	}
}