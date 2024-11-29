function chargement_des_animaux() {
	showConnexionStatus();
	
    var option = searchParams.get('option');
    var table = searchParams.get('table');
    
	//chargement_des_tables_de_reference(table, option);
    if ((option == 1) || (option == 2)) {
    	modifier(table, option);
    }
}

/*function chargement_des_tables_de_reference(table, option) {
	
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
	    		N_site.options[N_site.options.length] = new Option(row.doc.N_site + ' - ' + row.doc.Site_capture, row.doc.N_site);
	    	});		
		}
		
		var sel = $('#N_site');
		var selected = sel.val(); // cache selected value, before reordering
		var opts_list = sel.find('option');
		opts_list.sort(function(a, b) { return $(a).text() > $(b).text() ? 1 : -1; });
		sel.html('').append(opts_list);
		sel.val(selected); 
			
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

		    	listeLieu_capture();
			}
		}).catch(function (err) {
			console.log(err);
		});
	};
	
	function listeLieu_capture() {
		var Lieu_capture = document.getElementById("Lieu_capture");	
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'lieu_capture' + nom_table + debug);
		} else {
			var DB = new PouchDB('lieu_capture' + nom_table + debug);
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
	    		
		    	listMethode_capture();
		    	
			}
		}).catch(function (err) {
			console.log(err);
		});
	}
	
	function listMethode_capture() {
	  	var Methode_capture = document.getElementById("Methode_capture");	
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'methode_capture' + nom_table + debug);
		} else {
			var DB = new PouchDB('methode_capture' + nom_table + debug);
		};
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
	    		var methode_captureTablesData = JSON.parse(JSON.stringify(result));
	    		
	    		methode_captureTablesData.rows.forEach(function(row){   
	    			Methode_capture.options[Methode_capture.options.length] = new Option(row.doc.Methode_capture, row.doc.Methode_capture); 
	    		});		
	    		Methode_capture.options[Methode_capture.options.length] = new Option("Manquant", "Manquant");
	     	
		    	listNumFilet();
			}
		}).catch(function (err) {
			console.log(err);
		});  	
		
		
	}
	
	function listNumFilet() {
	  	var NumFilet = document.getElementById("NumFilet");	
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'donnees_journalieres' + nom_table + debug);
		} else {
			var DB = new PouchDB('donnees_journalieres' + nom_table + debug);
		};
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
	    		var donnees_journalieresTablesData = JSON.parse(JSON.stringify(result));
	    		
	    		donnees_journalieresTablesData.rows.forEach(function(row){ 
	    			if (typeof row.doc.FiletCanopee_7 !== 'undefined') {
		    			row.doc.FiletCanopee_7.forEach(function(row1){ 
		    				NumFilet.options[NumFilet.options.length] = new Option(row1.NumFilet, row1.NumFilet + ';' + row1.LongueurFilet + ';' + row1.HauteurFilet + ';' + row1.Lat_degre_decFilet + ';' + row1.LatitudeFilet + ';' + row1.Long_degre_decFilet + ';' + row1.LongitudeFilet); 
		    			});
	    			};
	    			if (typeof row.doc.FiletCanopee_20 !== 'undefined') {
		    			row.doc.FiletCanopee_20.forEach(function(row1){ 
		    				NumFilet.options[NumFilet.options.length] = new Option(row1.NumFilet, row1.NumFilet + ';' + row1.LongueurFilet + ';' + row1.HauteurFilet + ';' + row1.Lat_degre_decFilet + ';' + row1.LatitudeFilet + ';' + row1.Long_degre_decFilet + ';' + row1.LongitudeFilet); 
		    			});
	    			};
	    			if (typeof row.doc.FiletSol !== 'undefined') {
		    			row.doc.FiletSol.forEach(function(row1){ 
		    				NumFilet.options[NumFilet.options.length] = new Option(row1.NumFilet, row1.NumFilet + ';' + row1.LongueurFilet + ';' + row1.HauteurFilet + ';' + row1.Lat_degre_decFilet + ';' + row1.LatitudeFilet + ';' + row1.Long_degre_decFilet + ';' + row1.LongitudeFilet); 
		    			});
	    			};
	    		});		
	    		//Methode_capture.options[Methode_capture.options.length] = new Option("Manquant", "Manquant");
	    		
	    		var sel = $('#NumFilet');
	    		var selected = sel.val(); // cache selected value, before reordering
	    		var opts_list = sel.find('option');
	    		opts_list.sort(function(a, b) { return $(a).text() > $(b).text() ? 1 : -1; });
	    		sel.html('').append(opts_list);
	    		sel.val(selected); 
	    		
	    		listeCouleur_pelage_dorsal();
			}
		}).catch(function (err) {
			console.log(err);
		});  	
		
		
	}
	
	function listeCouleur_pelage_dorsal() {
		var Couleur_pelage_dorsal = document.getElementById("Couleur_pelage_dorsal");	
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'couleur_pelage_dorsal' + nom_table + debug);
		} else {
			var DB = new PouchDB('couleur_pelage_dorsal' + nom_table + debug);
		};
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
	    		var couleur_pelage_dorsalTablesData = JSON.parse(JSON.stringify(result));
	    		
	    		couleur_pelage_dorsalTablesData.rows.forEach(function(row){  
	    			//alert(row.doc.Couleur_pelage_dorsal);
	    			Couleur_pelage_dorsal.options[Couleur_pelage_dorsal.options.length] = new Option(row.doc.Couleur_pelage_dorsal, row.doc.Couleur_pelage_dorsal); 
	    		});		    
	    		Couleur_pelage_dorsal.options[Couleur_pelage_dorsal.options.length] = new Option("Manquant", "Manquant");
	    		
	    		listeCouleur_pelage_ventral();
		    	
			}
		}).catch(function (err) {
			console.log(err);
		});
	}
	
	function listeCouleur_pelage_ventral() {
		var Couleur_pelage_ventral = document.getElementById("Couleur_pelage_ventral");	
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'couleur_pelage_ventral' + nom_table + debug);
		} else {
			var DB = new PouchDB('couleur_pelage_ventral' + nom_table + debug);
		};
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
	    		var couleur_pelage_ventralTablesData = JSON.parse(JSON.stringify(result));
	    		
	    		couleur_pelage_ventralTablesData.rows.forEach(function(row){   
	    			Couleur_pelage_ventral.options[Couleur_pelage_ventral.options.length] = new Option(row.doc.Couleur_pelage_ventral, row.doc.Couleur_pelage_ventral); 
	    		});		    
	    		Couleur_pelage_ventral.options[Couleur_pelage_ventral.options.length] = new Option("Manquant", "Manquant");
	    		
		    	listeFamille();
		    	
			}
		}).catch(function (err) {
			console.log(err);
		});
	}
  	
	function listeFamille() {
		
		
		//if (localStorage.getItem('table_espece') == 'non') {
		
			var Famille_terrain = document.getElementById("Famille_terrain");
			var Famille_labo = document.getElementById("Famille_labo");
			var Famille_consensus = document.getElementById("Famille_consensus");
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
			   			Famille_terrain.options[Famille_terrain.options.length] = new Option(row.Nom, row.Nom); 
			   			Famille_labo.options[Famille_labo.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_consensus.options[Famille_consensus.options.length] = new Option(row.Nom, row.Nom);
			   		});	
			   		Famille_terrain.options[Famille_terrain.options.length] = new Option("Manquant", "Manquant");
			   		Famille_labo.options[Famille_labo.options.length] = new Option("Manquant", "Manquant");
			   		Famille_consensus.options[Famille_consensus.options.length] = new Option("Manquant", "Manquant");
					
			   		if ((option == 1) || (option == 2)) {
						modifier(table, option);
			  		};
					
				}
			}).catch(function (err) {
				console.log(err);
			});
		
	}
}*/


function modifier(table, option) {
	

	var doc;
	if (option == 1) {
		doc = JSON.parse(localStorage.getItem('animalsIPG3TablesData'));
		
		function addValue(elementName, onchange) {
			var element = document.getElementById(elementName);
			if (elementName == 'Commun_name') {
				element.value = result.rows[0].doc['Commun name'];
			} else { 
				element.value = result.rows[0].doc[elementName];
			}
			try {
				if (onchange) {
					element.onchange();
				}
			} catch(err) {
			};
		}
		
												

		addValue('Institut');
		addValue('Gender');
		addValue('Familly');
		addValue('Commun_name');
		addValue('Date');
		addValue('Number');
		addValue('Square');
		addValue('Commune');
		addValue('Town');
		addValue('Prefecture');
		addValue('Point_GPS_LAT');
		addValue('Point_GPS_LONG');
	  

	} else {
		
		
		var id = localStorage.getItem('ID_animals' + table + '_3');
		
		var debug;
		if (localStorage.getItem('debug') === null) {
			debug = '';
		} else {
			debug = localStorage.getItem('debug');
		};
		
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'animals' + table + '_3' + debug);
		} else {
			var DB = new PouchDB('animals' + table + '_3' + debug);
		};
		DB.allDocs({  		
				keys: [id],
			include_docs: true,
			attachments: true
		}).then(function (result) {
	
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
				console.log(JSON.stringify(result.rows));
					
				/*var ID = document.getElementById("ID");
				ID.value = result.rows[0].doc.ID;*/
											
				function addValue(elementName, onchange) {
					var element = document.getElementById(elementName);
					if (elementName == 'Commun_name') {
						element.value = result.rows[0].doc['Commun name'];
					} else { 
						element.value = result.rows[0].doc[elementName];
					}
					try {
						if (onchange) {
							element.onchange();
						}
					} catch(err) {
					};
				}
				
														

				addValue('Institut');
				addValue('Gender');
				addValue('Familly');
				addValue('Commun_name');
				addValue('Date');
				addValue('Number');
				addValue('Square');
				addValue('Commune');
				addValue('Town');
				addValue('Prefecture');
				addValue('Point_GPS_LAT');
				addValue('Point_GPS_LONG');
	    	};
	    	
		}).catch(function (err) {
			console.log(err);
		});
	}
}


