function chargement_de_la_viande_de_brousse() {
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
		}
			
		listeLieu_collecte()	
			
	}).catch(function (err) {
		console.log(err);
	});
	
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

		    	listePays();
			}
		}).catch(function (err) {
			console.log(err);
		});
	};
	
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

		    	listePreleve_chez();
			}
		}).catch(function (err) {
			console.log(err);
		});
	};
		
	function listePreleve_chez() {
		var Preleve_chez = document.getElementById("Preleve_chez");	
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'preleve_chez' + nom_table + debug);
		} else {
			var DB = new PouchDB('preleve_chez' + nom_table + debug);
		};
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		   		var preleve_chezTablesData = JSON.parse(JSON.stringify(result));
		   		
		   		preleve_chezTablesData.rows.forEach(function(row){   
		   			Preleve_chez.options[Preleve_chez.options.length] = new Option(row.doc.Preleve_chez, row.doc.Preleve_chez); 
		   		});	
		   		Preleve_chez.options[Preleve_chez.options.length] = new Option("Manquant", "Manquant");
    	
		   		listeMethode_chasse()
			}
		}).catch(function (err) {
			console.log(err);
		});
	}
	
	function listeMethode_chasse() {
		var Methode_chasse = document.getElementById("Methode_chasse");	
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'methode_chasse' + nom_table + debug);
		} else {
			var DB = new PouchDB('methode_chasse' + nom_table + debug);
		};
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		   		var methode_chasseTablesData = JSON.parse(JSON.stringify(result));
		   		
		   		methode_chasseTablesData.rows.forEach(function(row){   
		   			Methode_chasse.options[Methode_chasse.options.length] = new Option(row.doc.Methode_chasse, row.doc.Methode_chasse); 
		   		});	
		   		Methode_chasse.options[Methode_chasse.options.length] = new Option("Manquant", "Manquant");
    	
		   		listeDestination()
			}
		}).catch(function (err) {
			console.log(err);
		});
	}
	
	function listeDestination() {
		var Destination = document.getElementById("Destination");	
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'destination' + nom_table + debug);
		} else {
			var DB = new PouchDB('destination' + nom_table + debug);
		};
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		   		var destinationTablesData = JSON.parse(JSON.stringify(result));
		   		
		   		destinationTablesData.rows.forEach(function(row){   
		   			Destination.options[Destination.options.length] = new Option(row.doc.Destination, row.doc.Destination); 
		   		});	
		   		Destination.options[Destination.options.length] = new Option("Manquant", "Manquant");
    	
		   		listeType_animal()
			}
		}).catch(function (err) {
			console.log(err);
		});
	}
	
	function listeType_animal() {
		var Type_animal = document.getElementById("Type_animal");	
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'type_animal' + nom_table + debug);
		} else {
			var DB = new PouchDB('type_animal' + nom_table + debug);
		};
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		   		var type_animalTablesData = JSON.parse(JSON.stringify(result));
		   		
		   		type_animalTablesData.rows.forEach(function(row){   
		   			Type_animal.options[Type_animal.options.length] = new Option(row.doc.Type_animal, row.doc.Type_animal); 
		   		});	
		   		Type_animal.options[Type_animal.options.length] = new Option("Manquant", "Manquant");
    	
		   		listeEtat_carcasse_animal()
			}
		}).catch(function (err) {
			console.log(err);
		});
	}
	
	function listeEtat_carcasse_animal() {
		var Type_animal = document.getElementById("Type_animal");	
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'etat_carcasse_animal' + nom_table + debug);
		} else {
			var DB = new PouchDB('etat_carcasse_animal' + nom_table + debug);
		};
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		   		var etat_carcasse_animalTablesData = JSON.parse(JSON.stringify(result));
		   		
		   		etat_carcasse_animalTablesData.rows.forEach(function(row){   
		   			Etat_carcasse_animal.options[Etat_carcasse_animal.options.length] = new Option(row.doc.Etat_carcasse_animal, row.doc.Etat_carcasse_animal); 
		   		});	
		   		Etat_carcasse_animal.options[Etat_carcasse_animal.options.length] = new Option("Manquant", "Manquant");
    	
		   		listeQualite_echantillon()
			}
		}).catch(function (err) {
			console.log(err);
		});
	}
	
	function listeQualite_echantillon() {
		var Qualite_echantillon = document.getElementById("Qualite_echantillon");	
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'qualite_echantillon' + nom_table + debug);
		} else {
			var DB = new PouchDB('qualite_echantillon' + nom_table + debug);
		};
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		   		var qualite_echantillonTablesData = JSON.parse(JSON.stringify(result));
		   		
		   		qualite_echantillonTablesData.rows.forEach(function(row){   
		   			Qualite_echantillon.options[Qualite_echantillon.options.length] = new Option(row.doc.Qualite_echantillon, row.doc.Qualite_echantillon); 
		   		});	
		   		Qualite_echantillon.options[Qualite_echantillon.options.length] = new Option("Manquant", "Manquant");
    	
		   		listeEndroit_prelevement()
			}
		}).catch(function (err) {
			console.log(err);
		});
	}
	
	function listeEndroit_prelevement() {
		var Endroit_prelevement = document.getElementById("Endroit_prelevement");	
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'endroit_prelevement' + nom_table + debug);
		} else {
			var DB = new PouchDB('endroit_prelevement' + nom_table + debug);
		};
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		   		var endroit_prelevementTablesData = JSON.parse(JSON.stringify(result));
		   		
		   		endroit_prelevementTablesData.rows.forEach(function(row){   
		   			Endroit_prelevement.options[Endroit_prelevement.options.length] = new Option(row.doc.Endroit_prelevement, row.doc.Endroit_prelevement); 
		   		});	
		   		Endroit_prelevement.options[Endroit_prelevement.options.length] = new Option("Manquant", "Manquant");
    	
		   		listeFamille()
			}
		}).catch(function (err) {
			console.log(err);
		});
	}
	
	
  	
	function listeFamille() {
		var Famille = document.getElementById("Famille");
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'espece_animal' + nom_table + debug);
		} else {
			var DB = new PouchDB('espece_animal' + nom_table + debug);
		};
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		   		localStorage['espece_animalTablesData'] = JSON.stringify(result);
		   		var espece_animalTablesData = JSON.parse(localStorage.getItem('espece_animalTablesData'));
		    		
		   		espece_animalTablesData.rows[0].doc.Famille.forEach(function(row){   
		   			Famille.options[Famille.options.length] = new Option(row.Nom, row.Nom); 
		   		});	
		   		Famille.options[Famille.options.length] = new Option("Manquant", "Manquant");
		   		
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
		doc = JSON.parse(localStorage.getItem('viande_de_brousseTablesData'));
		
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
		addValue('Date');
	  	addValue('Pays');
	  	addValue('Enqueteur');
	  	addValue('Region_collecte');
	  	addValue('Site_collecte');
	  	addValue('Environnement');
	  	addValue('Lieu_collecte');
	  	addValue('Latitude');
	  	addValue('Lat_degre_dec');
	  	addValue('Longitude');
	  	addValue('Long_degre_dec');
	  	addValue('Preleve_chez');
	  	addValue('Tue_par_chasseur');	
	  	addValue('Methode_chasse');	
	  	addValue('Nbre_pieges');	
	  	addValue('Distance_village');	
	  	addValue('Duree_de_chasse');      	
	  	addValue('Destination'); 
	  	addValue('Lieu_vente');
	  	addValue('Prix_vente');
	  	addValue('Type_animal');
	  	addValue('Espece_nom_local');
	  			
	  	var Famille = document.getElementById("Famille");
		var Genre = document.getElementById("Genre");
		var Espece = document.getElementById("Espece");
		try {
			select_change(table, Famille, Genre, Espece, doc.Famille, doc.Genre, doc.Espece);
		}
		catch(err) {
		};
		
	  	addValue('Sexe');
	  	addValue('Age');
	  	addValue('Mort_depuis');      	
	  	addValue('Etat_carcasse_animal');
	  	addValue('Decoupage_carcasse');
	  	addValue('L_total_corps'); 	
	  	addValue('Poids');
	  	addValue('Observations_carcasse');	
	  	addValue('Collecte_sang_DBS');	
	  	addValue('Qualite_echantillon');	
	  	addValue('Endroit_prelevement');	
	  	addValue('Remarques_echantillon');
		
	
	} else {
		var id = localStorage.getItem('ID_viande_de_brousse' + table);
	
		var debug;
		if (localStorage.getItem('debug') === null) {
			debug = '';
		} else {
			debug = localStorage.getItem('debug');
		};
		
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'viande_de_brousse' + table + debug);
		} else {
			var DB = new PouchDB('viande_de_brousse' + table + debug);
		};
		DB.allDocs({  		
				keys: [id],
			include_docs: true,
			attachments: true
		}).then(function (result) {
	
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
				console.log(JSON.stringify(result.rows));
					
				var N_identification_echantillon = document.getElementById("N_identification_echantillon");
				if (option != 1) {
					N_identification_echantillon.value = result.rows[0].doc.N_identification_echantillon;
				}
				
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
				addValue('Date');
			  	addValue('Pays');
			  	addValue('Enqueteur');
			  	addValue('Region_collecte');
			  	addValue('Site_collecte');
			  	addValue('Environnement');
			  	addValue('Lieu_collecte');
			  	addValue('Latitude');
			  	addValue('Lat_degre_dec');
			  	addValue('Longitude');
			  	addValue('Long_degre_dec');
			  	addValue('Preleve_chez');
			  	addValue('Tue_par_chasseur');	
			  	addValue('Methode_chasse');	
			  	addValue('Nbre_pieges');	
			  	addValue('Distance_village');	
			  	addValue('Duree_de_chasse');      	
			  	addValue('Destination'); 
			  	addValue('Lieu_vente');
			  	addValue('Prix_vente');
			  	addValue('Type_animal');
			  	addValue('Espece_nom_local');
			  			
			  	var Famille = document.getElementById("Famille");
				var Genre = document.getElementById("Genre");
				var Espece = document.getElementById("Espece");
				if (option == 1) {
					try {
						select_change(table, Famille, Genre, Espece, doc.Famille, doc.Genre, doc.Espece);
					}
					catch(err) {
					};
				} else {
					try {
						select_change(table, Famille, Genre, Espece, result.rows[0].doc.Famille, result.rows[0].doc.Genre, result.rows[0].doc.Espece);
					}
					catch(err) {
					};
				};
				
			  	addValue('Sexe');
			  	addValue('Age');
			  	addValue('Mort_depuis');      	
			  	addValue('Etat_carcasse_animal');
			  	addValue('Decoupage_carcasse');
			  	addValue('L_total_corps'); 	
			  	addValue('Poids');
			  	addValue('Observations_carcasse');	
			  	addValue('Collecte_sang_DBS');	
			  	addValue('Qualite_echantillon');	
			  	addValue('Endroit_prelevement');	
			  	addValue('Remarques_echantillon');
				
	    	};
	
		}).catch(function (err) {
			console.log(err);
		});
	}
}


