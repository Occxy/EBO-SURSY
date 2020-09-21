function chargement_des_donnees_journalieres() {
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
	    		N_site.options[N_site.options.length] = new Option(row.doc.N_site, row.doc.N_site/*row.id*/);
	    	});		
	    	
	    	listePays();
		}
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
		    	
		    	listeFamille(); 
			}
		}).catch(function (err) {
			console.log(err);
		});
	};
	
	
	function listeFamille() {
		var Famille_vocalisations = document.getElementById("Famille_vocalisations");
		var Famille_copulations = document.getElementById("Famille_copulations");
		var Famille_suitee1 = document.getElementById("Famille_suitee1");
		var Famille_suitee2 = document.getElementById("Famille_suitee2");
		var Famille_suitee3 = document.getElementById("Famille_suitee3");
		var Famille_suitee4 = document.getElementById("Famille_suitee4");
		var Famille_agressions = document.getElementById("Famille_agressions");
		var Famille_gestante1 = document.getElementById("Famille_gestante1");
		var Famille_gestante2 = document.getElementById("Famille_gestante2");
		var Famille_gestante3 = document.getElementById("Famille_gestante3");
		var Famille_gestante4 = document.getElementById("Famille_gestante4");
		var Famille_lactante1 = document.getElementById("Famille_lactante1");
		var Famille_lactante2 = document.getElementById("Famille_lactante2");
		var Famille_lactante3 = document.getElementById("Famille_lactante3");
		var Famille_lactante4 = document.getElementById("Famille_lactante4");
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
		   			Famille_vocalisations.options[Famille_vocalisations.options.length] = new Option(row.Nom, row.Nom); 
		   			Famille_copulations.options[Famille_copulations.options.length] = new Option(row.Nom, row.Nom);
		   			Famille_suitee1.options[Famille_suitee1.options.length] = new Option(row.Nom, row.Nom);
		   			Famille_suitee2.options[Famille_suitee2.options.length] = new Option(row.Nom, row.Nom);
		   			Famille_suitee3.options[Famille_suitee3.options.length] = new Option(row.Nom, row.Nom);
		   			Famille_suitee4.options[Famille_suitee4.options.length] = new Option(row.Nom, row.Nom);
		   			Famille_agressions.options[Famille_agressions.options.length] = new Option(row.Nom, row.Nom);
		   			Famille_gestante1.options[Famille_gestante1.options.length] = new Option(row.Nom, row.Nom);
		   			Famille_gestante2.options[Famille_gestante2.options.length] = new Option(row.Nom, row.Nom);
		   			Famille_gestante3.options[Famille_gestante3.options.length] = new Option(row.Nom, row.Nom);
		   			Famille_gestante4.options[Famille_gestante4.options.length] = new Option(row.Nom, row.Nom);
		   			Famille_lactante1.options[Famille_lactante1.options.length] = new Option(row.Nom, row.Nom);
		   			Famille_lactante2.options[Famille_lactante2.options.length] = new Option(row.Nom, row.Nom);
		   			Famille_lactante3.options[Famille_lactante3.options.length] = new Option(row.Nom, row.Nom);
		   			Famille_lactante4.options[Famille_lactante4.options.length] = new Option(row.Nom, row.Nom);
		   			
		   		});	
		   		Famille_vocalisations.options[Famille_vocalisations.options.length] = new Option("Manquant", "Manquant");
		   		Famille_copulations.options[Famille_copulations.options.length] = new Option("Manquant", "Manquant");
		   		Famille_suitee1.options[Famille_suitee1.options.length] = new Option("Manquant", "Manquant");
		   		Famille_suitee2.options[Famille_suitee2.options.length] = new Option("Manquant", "Manquant");
		   		Famille_suitee3.options[Famille_suitee3.options.length] = new Option("Manquant", "Manquant");
		   		Famille_suitee4.options[Famille_suitee4.options.length] = new Option("Manquant", "Manquant");
		   		Famille_agressions.options[Famille_agressions.options.length] = new Option("Manquant", "Manquant");
		   		Famille_gestante1.options[Famille_gestante1.options.length] = new Option("Manquant", "Manquant");
		   		Famille_gestante2.options[Famille_gestante2.options.length] = new Option("Manquant", "Manquant");
		   		Famille_gestante3.options[Famille_gestante3.options.length] = new Option("Manquant", "Manquant");
		   		Famille_gestante4.options[Famille_gestante4.options.length] = new Option("Manquant", "Manquant");
		   		Famille_lactante1.options[Famille_lactante1.options.length] = new Option("Manquant", "Manquant");
		   		Famille_lactante2.options[Famille_lactante2.options.length] = new Option("Manquant", "Manquant");
		   		Famille_lactante3.options[Famille_lactante3.options.length] = new Option("Manquant", "Manquant");
		   		Famille_lactante4.options[Famille_lactante4.options.length] = new Option("Manquant", "Manquant");
		   		
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
		doc = JSON.parse(localStorage.getItem('journalieresTablesData'));
		
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
		
		addValue('ID_CS_preleve_debut');
		addValue('ID_CS_preleve_fin');
		addValue('Pairs/Impairs');
		addValue('Sans_ID_1');
		addValue('Sans_ID_2');
		addValue('Sans_ID_3');
		addValue('Avec_ID_1');
		addValue('Avec_ID_2');
		addValue('Avec_ID_3');
		addValue('Numero_mission');
		addValue('N_site', true);			
		addValue('Equipe');
		addValue('Pays');	
		addValue('Region_capture');
		addValue('Site_capture');
		addValue('Environnement');		
		addValue('Lat_degre_dec');
		addValue('Latitude');
		addValue('Long_degre_dec');
		addValue('Longitude');				
		addValue('Proximite_village_km');
		addValue('Roost_diurne');
		addValue('Presence_diurne');
		addValue('Methode_comptage_diurne');
		addValue('Resultat_comptage_diurne_1');
		addValue('Resultat_comptage_diurne_2');
		addValue('Utilisation_site_nocturne');
		addValue('Aliment_consomme');
		addValue('Presence_nocturne');
		addValue('Methode_comptage_nocturne');
		addValue('Resultat_comptage_nocturne_1');
		addValue('Resultat_comptage_nocturne_2');
		addValue('Vocalisations', true);
		
		var Famille_vocalisations = document.getElementById("Famille_vocalisations");
		var Genre_vocalisations = document.getElementById("Genre_vocalisations");
		var Espece_vocalisations = document.getElementById("Espece_vocalisations");
		try {
			select_change(table, Famille_vocalisations, Genre_vocalisations, Espece_vocalisations, doc.Famille_vocalisations, doc.Genre_vocalisations, doc.Espece_vocalisations);
		}
		catch(err) {
		};
				
		addValue('Parade_sexuelle');
		addValue('Copulations', true);
		
		var Famille_copulations = document.getElementById("Famille_copulations");
		var Genre_copulations = document.getElementById("Genre_copulations");
		var Espece_copulations = document.getElementById("Espece_copulations");
		try {
			select_change(table, Famille_copulations, Genre_copulations, Espece_copulations, doc.Famille_copulations, doc.Genre_copulations, doc.Espece_copulations);
		}
		catch(err) {
		};
			
		addValue('Suitee', true);
		
		var Famille_suitee1 = document.getElementById("Famille_suitee1");
		var Genre_suitee1 = document.getElementById("Genre_suitee1");
		var Espece_suitee1 = document.getElementById("Espece_suitee1");
		try {
			select_change(table, Famille_suitee1, Genre_suitee1, Espece_suitee1, doc.Famille_suitee1, doc.Genre_suitee1, doc.Espece_suitee1);
		}
		catch(err) {
		};
		var Famille_suitee2 = document.getElementById("Famille_suitee2");
		var Genre_suitee2 = document.getElementById("Genre_suitee2");
		var Espece_suitee2 = document.getElementById("Espece_suitee2");
		try {
			select_change(table, Famille_suitee2, Genre_suitee2, Espece_suitee2, doc.Famille_suitee2, doc.Genre_suitee2, doc.Espece_suitee2);
		}
		catch(err) {
		};
		var Famille_suitee3 = document.getElementById("Famille_suitee3");
		var Genre_suitee3 = document.getElementById("Genre_suitee3");
		var Espece_suitee3 = document.getElementById("Espece_suitee3");
		try {
			select_change(table, Famille_suitee3, Genre_suitee3, Espece_suitee3, doc.Famille_suitee3, doc.Genre_suitee3, doc.Espece_suitee3);
		}
		catch(err) {
		};
		var Famille_suitee4 = document.getElementById("Famille_suitee4");
		var Genre_suitee4 = document.getElementById("Genre_suitee4");
		var Espece_suitee4 = document.getElementById("Espece_suitee4");
		try {
			select_change(table, Famille_suitee4, Genre_suitee4, Espece_suitee4, doc.Famille_suitee4, doc.Genre_suitee4, doc.Espece_suitee4);
		}
		catch(err) {
		};
				
		addValue('Agressions', true);
		
		var Famille_agressions = document.getElementById("Famille_agressions");
		var Genre_agressions = document.getElementById("Genre_agressions");
		var Espece_agressions = document.getElementById("Espece_agressions");
		try {
			select_change(table, Famille_agressions, Genre_agressions, Espece_agressions, doc.Famille_agressions, doc.Genre_agressions, doc.Espece_agressions);
		}
		catch(err) {
		};
		
		addValue('Gestante', true);
		
		var Famille_gestante1 = document.getElementById("Famille_gestante1");
		var Genre_gestante1 = document.getElementById("Genre_gestante1");
		var Espece_gestante1 = document.getElementById("Espece_gestante1");
		try {
			select_change(table, Famille_gestante1, Genre_gestante1, Espece_gestante1, doc.Famille_gestante1, doc.Genre_gestante1, doc.Espece_gestante1);
		}
		catch(err) {
		};
		var Famille_gestante2 = document.getElementById("Famille_gestante2");
		var Genre_gestante2 = document.getElementById("Genre_gestante2");
		var Espece_gestante2 = document.getElementById("Espece_gestante2");
		try {
			select_change(table, Famille_gestante2, Genre_gestante2, Espece_gestante2, doc.Famille_gestante2, doc.Genre_gestante2, doc.Espece_gestante2);
		}
		catch(err) {
		};
		var Famille_gestante3 = document.getElementById("Famille_gestante3");
		var Genre_gestante3 = document.getElementById("Genre_gestante3");
		var Espece_gestante3 = document.getElementById("Espece_gestante3");
		try {
			select_change(table, Famille_gestante3, Genre_gestante3, Espece_gestante3, doc.Famille_gestante3, doc.Genre_gestante3, doc.Espece_gestante3);
		}
		catch(err) {
		};
		var Famille_gestante4 = document.getElementById("Famille_gestante4");
		var Genre_gestante4 = document.getElementById("Genre_gestante4");
		var Espece_gestante4 = document.getElementById("Espece_gestante4");
		try {
			select_change(table, Famille_gestante4, Genre_gestante4, Espece_gestante4, doc.Famille_gestante4, doc.Genre_gestante4, doc.Espece_gestante4);
		}
		catch(err) {
		};
		
		addValue('Lactante', true);
		
		var Famille_lactante1 = document.getElementById("Famille_lactante1");
		var Genre_lactante1 = document.getElementById("Genre_lactante1");
		var Espece_lactante1 = document.getElementById("Espece_lactante1");
		try {
			select_change(table, Famille_lactante1, Genre_lactante1, Espece_lactante1, doc.Famille_lactante1, doc.Genre_lactante1, doc.Espece_lactante1);
		}
		catch(err) {
		};
		var Famille_lactante2 = document.getElementById("Famille_lactante2");
		var Genre_lactante2 = document.getElementById("Genre_lactante2");
		var Espece_lactante2 = document.getElementById("Espece_lactante2");
		try {
			select_change(table, Famille_lactante2, Genre_lactante2, Espece_lactante2, doc.Famille_lactante2, doc.Genre_lactante2, doc.Espece_lactante2);
		}
		catch(err) {
		};
		var Famille_lactante3 = document.getElementById("Famille_lactante3");
		var Genre_lactante3 = document.getElementById("Genre_lactante3");
		var Espece_lactante3 = document.getElementById("Espece_lactante3");
		try {
			select_change(table, Famille_lactante3, Genre_lactante3, Espece_lactante3, doc.Famille_lactante3, doc.Genre_lactante3, doc.Espece_lactante3);
		}
		catch(err) {
		};
		var Famille_lactante4 = document.getElementById("Famille_lactante4");
		var Genre_lactante4 = document.getElementById("Genre_lactante4");
		var Espece_lactante4 = document.getElementById("Espece_lactante4");
		try {
			select_change(table, Famille_lactante4, Genre_lactante4, Espece_lactante4, doc.Famille_lactante4, doc.Genre_lactante4, doc.Espece_lactante4);
		}
		catch(err) {
		};
		
		addValue('Filet_canopee_nb_7');
		addValue('Filet_canopee_m2_7');
		addValue('Filet_canopee_nb_20');
		addValue('Filet_canopee_m2_20');
		addValue('Filet_sol_nb');
		addValue('Filet_sol_m2');
		addValue('Filet_debut');
		addValue('Filet_fin');	
		addValue('Filet_temps');
		addValue('Filet_capture_nb');
		addValue('Harp_debut');
		addValue('Harp_fin');
		addValue('Harp_temps');
		addValue('Harpe_nb');
		addValue('Saison');
		//addValue('Climat');
		
		var Climat = doc['Climat'];
		Climat = Climat.trim().split(",");
		
		for (var i=0; i<Climat.length; i++) {
			console.log("'" + Climat[i].trim() + "'");
			var Climat_string = Climat[i].trim();
			
			var l1 = document.getElementById("divClimat");
			//var l2 = l1.childNodes;
			//for (var j=0;j<l2.length;j++) {
			for (var j=0;j<l1.children.length;j++) {
				var Element = document.getElementById('Climat' + j); 
				if (Element.value === Climat_string) {
					Element.checked = true;
				};
			};
		};
		
		addValue('Autre_climat');
		addValue('Precipitation');
		addValue('Vent');
		addValue('Lune');
		addValue('Temperature_logger');
		addValue('Humidite_logger');
		
		var Element = document.getElementById('Arret_Capture'); 
		if (doc.Arret_Capture === 'Oui') {
			Element.checked = true;
		} else {
			Element.checked = false;
		}
		addValue('Causes_Arret_Capture');
	} else {
	
		var id = localStorage.getItem('ID_donnees_journalieres' + table);
		
		var debug;
		if (localStorage.getItem('debug') === null) {
			debug = '';
		} else {
			debug = localStorage.getItem('debug');
		};
		
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'donnees_journalieres' + table + debug);
		} else {
			var DB = new PouchDB('donnees_journalieres' + table + debug);
		};
	  	DB.allDocs({  		
	  		keys: [id],
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
				console.log(JSON.stringify(result.rows));
									
				var Date = document.getElementById("Date");
				if (option != 1) {
					Date.value = result.rows[0].doc.Date;
				}
				
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
				
				addValue('ID_CS_preleve_debut');
				addValue('ID_CS_preleve_fin');
				addValue('Pairs_impairs');
				addValue('Sans_ID_1');
				addValue('Sans_ID_2');
				addValue('Sans_ID_3');
				addValue('Avec_ID_1');
				addValue('Avec_ID_2');
				addValue('Avec_ID_3');
				addValue('Numero_mission');
				addValue('N_site', true);			
				addValue('Equipe');
				addValue('Pays');	
				addValue('Region_capture');
				addValue('Site_capture');
				addValue('Environnement');		
				addValue('Lat_degre_dec');
				addValue('Latitude');
				addValue('Long_degre_dec');
				addValue('Longitude');				
				addValue('Proximite_village_km');
				addValue('Roost_diurne');
				addValue('Presence_diurne');
				addValue('Methode_comptage_diurne');
				addValue('Resultat_comptage_diurne_1');
				addValue('Resultat_comptage_diurne_2');
				addValue('Utilisation_site_nocturne');
				addValue('Aliment_consomme');
				addValue('Presence_nocturne');
				addValue('Methode_comptage_nocturne');
				addValue('Resultat_comptage_nocturne_1');
				addValue('Resultat_comptage_nocturne_2');
				addValue('Vocalisations', true);
				
				var Famille_vocalisations = document.getElementById("Famille_vocalisations");
				var Genre_vocalisations = document.getElementById("Genre_vocalisations");
				var Espece_vocalisations = document.getElementById("Espece_vocalisations");
				try {
					select_change(table, Famille_vocalisations, Genre_vocalisations, Espece_vocalisations, result.rows[0].doc.Famille_vocalisations, result.rows[0].doc.Genre_vocalisations, result.rows[0].doc.Espece_vocalisations);
				}
				catch(err) {
				};
				
				
				addValue('Parade_sexuelle');
				addValue('Copulations', true);
				
				var Famille_copulations = document.getElementById("Famille_copulations");
				var Genre_copulations = document.getElementById("Genre_copulations");
				var Espece_copulations = document.getElementById("Espece_copulations");
				try {
					select_change(table, Famille_copulations, Genre_copulations, Espece_copulations, result.rows[0].doc.Famille_copulations, result.rows[0].doc.Genre_copulations, result.rows[0].doc.Espece_copulations);
				}
				catch(err) {
				};
				
				addValue('Suitee', true);
				
				var Famille_suitee1 = document.getElementById("Famille_suitee1");
				var Genre_suitee1 = document.getElementById("Genre_suitee1");
				var Espece_suitee1 = document.getElementById("Espece_suitee1");
				try {
					select_change(table, Famille_suitee1, Genre_suitee1, Espece_suitee1, result.rows[0].doc.Famille_suitee1, result.rows[0].doc.Genre_suitee1, result.rows[0].doc.Espece_suitee1);
				}
				catch(err) {
				};
				var Famille_suitee2 = document.getElementById("Famille_suitee2");
				var Genre_suitee2 = document.getElementById("Genre_suitee2");
				var Espece_suitee2 = document.getElementById("Espece_suitee2");
				try {
					select_change(table, Famille_suitee2, Genre_suitee2, Espece_suitee2, result.rows[0].doc.Famille_suitee2, result.rows[0].doc.Genre_suitee2, result.rows[0].doc.Espece_suitee2);
				}
				catch(err) {
				};
				var Famille_suitee3 = document.getElementById("Famille_suitee3");
				var Genre_suitee3 = document.getElementById("Genre_suitee3");
				var Espece_suitee3 = document.getElementById("Espece_suitee3");
				try {
					select_change(table, Famille_suitee3, Genre_suitee3, Espece_suitee3, result.rows[0].doc.Famille_suitee3, result.rows[0].doc.Genre_suitee3, result.rows[0].doc.Espece_suitee3);
				}
				catch(err) {
				};
				var Famille_suitee4 = document.getElementById("Famille_suitee4");
				var Genre_suitee4 = document.getElementById("Genre_suitee4");
				var Espece_suitee4 = document.getElementById("Espece_suitee4");
				try {
					select_change(table, Famille_suitee4, Genre_suitee4, Espece_suitee4, result.rows[0].doc.Famille_suitee4, result.rows[0].doc.Genre_suitee4, result.rows[0].doc.Espece_suitee4);
				}
				catch(err) {
				};
								
				addValue('Gestante', true);
				
				var Famille_gestante1 = document.getElementById("Famille_gestante1");
				var Genre_gestante1 = document.getElementById("Genre_gestante1");
				var Espece_gestante1 = document.getElementById("Espece_gestante1");
				try {
					select_change(table, Famille_gestante1, Genre_gestante1, Espece_gestante1, result.rows[0].doc.Famille_gestante1, result.rows[0].doc.Genre_gestante1, result.rows[0].doc.Espece_gestante1);
				}
				catch(err) {
				};
				var Famille_gestante2 = document.getElementById("Famille_gestante2");
				var Genre_gestante2 = document.getElementById("Genre_gestante2");
				var Espece_gestante2 = document.getElementById("Espece_gestante2");
				try {
					select_change(table, Famille_gestante2, Genre_gestante2, Espece_gestante2, result.rows[0].doc.Famille_gestante2, result.rows[0].doc.Genre_gestante2, result.rows[0].doc.Espece_gestante2);
				}
				catch(err) {
				};
				var Famille_gestante3 = document.getElementById("Famille_gestante3");
				var Genre_gestante3 = document.getElementById("Genre_gestante3");
				var Espece_gestante3 = document.getElementById("Espece_gestante3");
				try {
					select_change(table, Famille_gestante3, Genre_gestante3, Espece_gestante3, result.rows[0].doc.Famille_gestante3, result.rows[0].doc.Genre_gestante3, result.rows[0].doc.Espece_gestante3);
				}
				catch(err) {
				};
				var Famille_gestante4 = document.getElementById("Famille_gestante4");
				var Genre_gestante4 = document.getElementById("Genre_gestante4");
				var Espece_gestante4 = document.getElementById("Espece_gestante4");
				try {
					select_change(table, Famille_gestante4, Genre_gestante4, Espece_gestante4, result.rows[0].doc.Famille_gestante4, result.rows[0].doc.Genre_gestante4, result.rows[0].doc.Espece_gestante4);
				}
				catch(err) {
				};
								
				addValue('Agressions', true);
				
				addValue('Lactante', true);
				
				var Famille_lactante1 = document.getElementById("Famille_lactante1");
				var Genre_lactante1 = document.getElementById("Genre_lactante1");
				var Espece_lactante1 = document.getElementById("Espece_lactante1");
				try {
					select_change(table, Famille_lactante1, Genre_lactante1, Espece_lactante1, result.rows[0].doc.Famille_lactante1, result.rows[0].doc.Genre_lactante1, result.rows[0].doc.Espece_lactante1);
				}
				catch(err) {
				};
				var Famille_lactante2 = document.getElementById("Famille_lactante2");
				var Genre_lactante2 = document.getElementById("Genre_lactante2");
				var Espece_lactante2 = document.getElementById("Espece_lactante2");
				try {
					select_change(table, Famille_lactante2, Genre_lactante2, Espece_lactante2, result.rows[0].doc.Famille_lactante2, result.rows[0].doc.Genre_lactante2, result.rows[0].doc.Espece_lactante2);
				}
				catch(err) {
				};
				var Famille_lactante3 = document.getElementById("Famille_lactante3");
				var Genre_lactante3 = document.getElementById("Genre_lactante3");
				var Espece_lactante3 = document.getElementById("Espece_lactante3");
				try {
					select_change(table, Famille_lactante3, Genre_lactante3, Espece_lactante3, result.rows[0].doc.Famille_lactante3, result.rows[0].doc.Genre_lactante3, result.rows[0].doc.Espece_lactante3);
				}
				catch(err) {
				};
				var Famille_lactante4 = document.getElementById("Famille_lactante4");
				var Genre_lactante4 = document.getElementById("Genre_lactante4");
				var Espece_lactante4 = document.getElementById("Espece_lactante4");
				try {
					select_change(table, Famille_lactante4, Genre_lactante4, Espece_lactante4, result.rows[0].doc.Famille_lactante4, result.rows[0].doc.Genre_lactante4, result.rows[0].doc.Espece_lactante4);
				}
				catch(err) {
				};
				
				var Famille_agressions = document.getElementById("Famille_agressions");
				var Genre_agressions = document.getElementById("Genre_agressions");
				var Espece_agressions = document.getElementById("Espece_agressions");
				try {
					select_change(table, Famille_agressions, Genre_agressions, Espece_agressions, result.rows[0].doc.Famille_agressions, result.rows[0].doc.Genre_agressions, result.rows[0].doc.Espece_agressions);
				}
				catch(err) {
				};
								
				addValue('Filet_canopee_nb_7');
				addValue('Filet_canopee_m2_7');
				addValue('Filet_canopee_nb_20');
				addValue('Filet_canopee_m2_20');
				addValue('Filet_sol_nb');
				addValue('Filet_sol_m2');
				addValue('Filet_debut');
				addValue('Filet_fin');	
				addValue('Filet_temps');
				addValue('Filet_capture_nb');
				addValue('Harp_debut');
				addValue('Harp_fin');
				addValue('Harp_temps');
				addValue('Harpe_nb');
				addValue('Saison');
				//addValue('Climat');
				
				var Climat = result.rows[0].doc.Climat;
				Climat = Climat.trim().split(",");
				
				for (var i=0; i<Climat.length; i++) {
					console.log("'" + Climat[i].trim() + "'");
					var Climat_string = Climat[i].trim();
					
					var l1 = document.getElementById("divClimat");
					//var l2 = l1.childNodes;
					//alert(l1.children.length)
					for (var j=0;j<l1.children.length;j++) {
						var Element = document.getElementById('Climat' + j); 
						if (Element.value === Climat_string) {
							Element.checked = true;
						};
					};
				};
				
				addValue('Autre_climat');
				addValue('Precipitation');
				addValue('Vent');
				addValue('Lune');
				addValue('Temperature_logger');
				addValue('Humidite_logger');
				
				var Element = document.getElementById('Arret_Capture'); 
				if (result.rows[0].doc.Arret_Capture === 'Oui') {
					Element.checked = true;
				} else {
					Element.checked = false;
				}
				addValue('Causes_Arret_Capture');
				
				
	    	}
		}).catch(function (err) {
			console.log(err);
		});
	}
}