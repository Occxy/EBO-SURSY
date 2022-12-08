var tabFilet = [];

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
		var DB = new PouchDB(remote_couchdb + 'caracterisations_grottes' + nom_table + debug);
	} else {
		var DB = new PouchDB('caracterisations_grottes' + nom_table + debug);
	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {

		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	var caracterisations_grottesTablesData = JSON.parse(JSON.stringify(result));
		    	
	    	caracterisations_grottesTablesData.rows.forEach(function(row){ 
	    		N_site.options[N_site.options.length] = new Option(row.doc.N_site, row.doc.N_site);
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

		    	listeFamille();
		    	/*if ((option == 1) || (option == 2)) {
					modifier(table, option);
		  		};*/
			}
		}).catch(function (err) {
			console.log(err);
		});
	};
	
	/*function listeLieu_capture() {
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
		    				var obj = new Object();
			   				obj.NumFilet = row1.NumFilet;
			   				obj.Filet = row1.NumFilet + ';' + row1.LongueurFilet + ';' + row1.HauteurFilet + ';' + row1.Lat_degre_decFilet + ';' + row1.LatitudeFilet + ';' + row1.Long_degre_decFilet + ';' + row1.LongitudeFilet;
			   				tabFilet.push(obj);
		    			});
	    			};
	    			if (typeof row.doc.FiletCanopee_20 !== 'undefined') {
		    			row.doc.FiletCanopee_20.forEach(function(row1){ 
		    				NumFilet.options[NumFilet.options.length] = new Option(row1.NumFilet, row1.NumFilet + ';' + row1.LongueurFilet + ';' + row1.HauteurFilet + ';' + row1.Lat_degre_decFilet + ';' + row1.LatitudeFilet + ';' + row1.Long_degre_decFilet + ';' + row1.LongitudeFilet); 
		    				var obj = new Object();
			   				obj.NumFilet = row1.NumFilet;
			   				obj.Filet = row1.NumFilet + ';' + row1.LongueurFilet + ';' + row1.HauteurFilet + ';' + row1.Lat_degre_decFilet + ';' + row1.LatitudeFilet + ';' + row1.Long_degre_decFilet + ';' + row1.LongitudeFilet;
			   				tabFilet.push(obj);
		    			});
	    			};
	    			if (typeof row.doc.FiletSol !== 'undefined') {
		    			row.doc.FiletSol.forEach(function(row1){ 
		    				NumFilet.options[NumFilet.options.length] = new Option(row1.NumFilet, row1.NumFilet + ';' + row1.LongueurFilet + ';' + row1.HauteurFilet + ';' + row1.Lat_degre_decFilet + ';' + row1.LatitudeFilet + ';' + row1.Long_degre_decFilet + ';' + row1.LongitudeFilet); 
		    				var obj = new Object();
			   				obj.NumFilet = row1.NumFilet;
			   				obj.Filet = row1.NumFilet + ';' + row1.LongueurFilet + ';' + row1.HauteurFilet + ';' + row1.Lat_degre_decFilet + ';' + row1.LatitudeFilet + ';' + row1.Long_degre_decFilet + ';' + row1.LongitudeFilet;
			   				tabFilet.push(obj);
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
		
		
	}*/
	
	/*function listeCouleur_pelage_dorsal() {
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
	}*/
  	
	function listeFamille() {
		
		
		//if (localStorage.getItem('table_espece') == 'non') {
		
			var Famille_observe_1 = document.getElementById("Famille_observe_1");
			var Famille_observe_2 = document.getElementById("Famille_observe_2");
			var Famille_observe_3 = document.getElementById("Famille_observe_3");
			var Famille_observe_4 = document.getElementById("Famille_observe_4");
			var Famille_observe_5 = document.getElementById("Famille_observe_5");
			var Famille_observe1_bache_1 = document.getElementById("Famille_observe1_bache_1");
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
			   			Famille_observe_1.options[Famille_observe_1.options.length] = new Option(row.Nom, row.Nom); 
			   			Famille_observe_2.options[Famille_observe_2.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe_3.options[Famille_observe_3.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe_4.options[Famille_observe_4.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe_5.options[Famille_observe_5.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe1_bache_1.options[Famille_observe1_bache_1.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe2_bache_1.options[Famille_observe2_bache_1.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe1_bache_2.options[Famille_observe1_bache_2.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe2_bache_2.options[Famille_observe2_bache_2.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe1_bache_3.options[Famille_observe1_bache_3.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe2_bache_3.options[Famille_observe2_bache_3.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe1_bache_4.options[Famille_observe1_bache_4.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe2_bache_4.options[Famille_observe2_bache_4.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe1_bache_5.options[Famille_observe1_bache_5.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe2_bache_5.options[Famille_observe2_bache_5.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe1_bache_6.options[Famille_observe1_bache_6.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe2_bache_6.options[Famille_observe2_bache_6.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe1_bache_7.options[Famille_observe1_bache_7.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe2_bache_7.options[Famille_observe2_bache_7.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe1_bache_8.options[Famille_observe1_bache_8.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe2_bache_8.options[Famille_observe2_bache_8.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe1_bache_9.options[Famille_observe1_bache_9.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe2_bache_9.options[Famille_observe2_bache_9.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe1_bache_10.options[Famille_observe1_bache_10.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_observe2_bache_10.options[Famille_observe2_bache_10.options.length] = new Option(row.Nom, row.Nom);
			   		});	
			   		Famille_observe_1.options[Famille_observe_1.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe_2.options[Famille_observe_2.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe_3.options[Famille_observe_3.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe_4.options[Famille_observe_4.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe_5.options[Famille_observe_5.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe1_bache_1.options[Famille_observe1_bache_1.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe2_bache_1.options[Famille_observe2_bache_1.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe1_bache_2.options[Famille_observe1_bache_2.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe2_bache_2.options[Famille_observe2_bache_2.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe1_bache_3.options[Famille_observe1_bache_3.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe2_bache_3.options[Famille_observe2_bache_3.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe1_bache_4.options[Famille_observe1_bache_4.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe2_bache_4.options[Famille_observe2_bache_4.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe1_bache_5.options[Famille_observe1_bache_5.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe2_bache_5.options[Famille_observe2_bache_5.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe1_bache_6.options[Famille_observe1_bache_6.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe2_bache_6.options[Famille_observe2_bache_6.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe1_bache_7.options[Famille_observe1_bache_7.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe2_bache_7.options[Famille_observe2_bache_7.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe1_bache_8.options[Famille_observe1_bache_8.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe2_bache_8.options[Famille_observe2_bache_8.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe1_bache_9.options[Famille_observe1_bache_9.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe2_bache_9.options[Famille_observe2_bache_9.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe1_bache_10.options[Famille_observe1_bache_10.options.length] = new Option("Manquant", "Manquant");
			   		Famille_observe2_bache_10.options[Famille_observe2_bache_10.options.length] = new Option("Manquant", "Manquant");
			   		
			   		if ((option == 1) || (option == 2)) {
						modifier(table, option);
			  		};
					
				}
			}).catch(function (err) {
				console.log(err);
			});
		/*} else if (localStorage.getItem('table_espece') == 'oui') {
			addFamille('HIPPOSIDERIDAE');
			addFamille('INDETERMINEE');
			addFamille('MOLOSSIDAE');
			addFamille('NYCTERIDAE');
			addFamille('PTEROPODIDAE');
			addFamille('RHINOLOPHIDAE');
			addFamille('VESPERTILIONIDAE');			
		}
		
		function addFamille(value) {
			var Famille_observe_1 = document.getElementById("Famille_observe_1");
			var Famille_observe_2 = document.getElementById("Famille_observe_2");
			var Famille_observe_3 = document.getElementById("Famille_observe_3");
			Famille_observe_1.options[Famille_observe_1.options.length] = new Option(value, value); 
			Famille_observe_2.options[Famille_observe_2.options.length] = new Option(value, value); 
			Famille_observe_3.options[Famille_observe_3.options.length] = new Option(value, value); 
		}*/
	}
}


function modifier(table, option) {
	

	var doc;
	if (option == 1) {
		doc = JSON.parse(localStorage.getItem('chauves_souris_non_invasivesTablesData'));
		
		function addValue(elementName, onchange) {
			var element = document.getElementById(elementName);
			
			
			if (!((elementName == 'Longitude') && (doc[elementName] == 'O'))) {
				element.value = doc[elementName];
			} else {
				element.value = 'W'
			}
			
			try {
				if (onchange) {
					element.onchange();
				}
			} catch(err) {
			};
		}
		
		addValue('Pays');
		addValue('Prefecture');
		addValue('Site_capture');
		addValue('Sous_prefecture');
		addValue('Ville_village');
		addValue('Site_capture');
		addValue('Environnement');
		addValue('Lat_degre_dec');
		addValue('Latitude');
		addValue('Long_degre_dec');
		addValue('Longitude');
		addValue('Proximite_village_km');
		addValue('Proximite_source_m');
		addValue('N_site', true);
		
		addValue('Equipe');
		$('#Date_debut_NI').datepicker('setDate', doc.Date_debut_NI);
		$("#Heure_debut_NI").val(doc.Heure_debut_NI);
		$('#Date_fin_NI').datepicker('setDate', doc.Date_fin_NI);
		$("#Heure_fin_NI").val(doc.Heure_fin_NI);	
		addValue('Estimation_population');	
		addValue('Changement_disposition_espece');
		addValue('Précisez');	
		
		var Famille_observe_1 = document.getElementById("Famille_observe_1");
		var Genre_observe_1 = document.getElementById("Genre_observe_1");
		var Espece_observe_1 = document.getElementById("Espece_observe_1");
		var Famille_observe_2 = document.getElementById("Famille_observe_2");
		var Genre_observe_2 = document.getElementById("Genre_observe_2");
		var Espece_observe_2 = document.getElementById("Espece_observe_2");
		var Famille_observe_3 = document.getElementById("Famille_observe_3");
		var Genre_observe_3 = document.getElementById("Genre_observe_3");
		var Espece_observe_3 = document.getElementById("Espece_observe_3");
		var Famille_observe_4 = document.getElementById("Famille_observe_4");
		var Genre_observe_4 = document.getElementById("Genre_observe_4");
		var Espece_observe_4 = document.getElementById("Espece_observe_4");
		var Famille_observe_5 = document.getElementById("Famille_observe_5");
		var Genre_observe_5 = document.getElementById("Genre_observe_5");
		var Espece_observe_5 = document.getElementById("Espece_observe_5");
		try {
			select_change(table, Famille_observe_1, Genre_observe_1, Espece_observe_1, doc.Famille_observe_1, doc.Genre_observe_1, doc.Espece_observe_1);
			select_change(table, Famille_observe_2, Genre_observe_2, Espece_observe_2, doc.Famille_observe_2, doc.Genre_observe_2, doc.Espece_observe_2);
			select_change(table, Famille_observe_3, Genre_observe_3, Espece_observe_3, doc.Famille_observe_3, doc.Genre_observe_3, doc.Espece_observe_3);
			select_change(table, Famille_observe_4, Genre_observe_4, Espece_observe_4, doc.Famille_observe_4, doc.Genre_observe_4, doc.Espece_observe_4);
			select_change(table, Famille_observe_5, Genre_observe_5, Espece_observe_5, doc.Famille_observe_5, doc.Genre_observe_5, doc.Espece_observe_5);
		}
		catch(err) {
		};
		
		addValue('ID_NI_preleve_debut');
		addValue('ID_NI_preleve_fin');
		
		var Famille_observe1_bache_1 = document.getElementById("Famille_observe1_bache_1");
		var Genre_observe1_bache_1 = document.getElementById("Genre_observe1_bache_1");
		var Espece_observe1_bache_1 = document.getElementById("Espece_observe1_bache_1");
		var Famille_observe2_bache_1 = document.getElementById("Famille_observe2_bache_1");
		var Genre_observe2_bache_1 = document.getElementById("Genre_observe2_bache_1");
		var Espece_observe2_bache_1 = document.getElementById("Espece_observe2_bache_1");
		try {
			select_change(table, Famille_observe1_bache_1, Genre_observe1_bache_1, Espece_observe1_bache_1, doc.Famille_observe1_bache_1, doc.Genre_observe1_bache_1, doc.Espece_observe1_bache_1);
			select_change(table, Famille_observe2_bache_1, Genre_observe2_bache_1, Espece_observe2_bache_1, doc.Famille_observe2_bache_1, doc.Genre_observe2_bache_1, doc.Espece_observe2_bache_1);
		}
		catch(err) {
		};			
		addValue('ID_NI_debut_bache_1');
		addValue('ID_NI_fin_bache_1');
		
		var Famille_observe1_bache_2 = document.getElementById("Famille_observe1_bache_2");
		var Genre_observe1_bache_2 = document.getElementById("Genre_observe1_bache_2");
		var Espece_observe1_bache_2 = document.getElementById("Espece_observe1_bache_2");
		var Famille_observe2_bache_2 = document.getElementById("Famille_observe2_bache_2");
		var Genre_observe2_bache_2 = document.getElementById("Genre_observe2_bache_2");
		var Espece_observe2_bache_2 = document.getElementById("Espece_observe2_bache_2");
		try {
			select_change(table, Famille_observe1_bache_2, Genre_observe1_bache_2, Espece_observe1_bache_2, doc.Famille_observe1_bache_2, doc.Genre_observe1_bache_2, doc.Espece_observe1_bache_2);
			select_change(table, Famille_observe2_bache_2, Genre_observe2_bache_2, Espece_observe2_bache_2, doc.Famille_observe2_bache_2, doc.Genre_observe2_bache_2, doc.Espece_observe2_bache_2);
		}
		catch(err) {
		};			
		addValue('ID_NI_debut_bache_2');
		addValue('ID_NI_fin_bache_2');
		
		var Famille_observe1_bache_2 = document.getElementById("Famille_observe1_bache_2");
		var Genre_observe1_bache_2 = document.getElementById("Genre_observe1_bache_2");
		var Espece_observe1_bache_2 = document.getElementById("Espece_observe1_bache_2");
		var Famille_observe2_bache_2 = document.getElementById("Famille_observe2_bache_2");
		var Genre_observe2_bache_2 = document.getElementById("Genre_observe2_bache_2");
		var Espece_observe2_bache_2 = document.getElementById("Espece_observe2_bache_2");
		try {
			select_change(table, Famille_observe1_bache_2, Genre_observe1_bache_2, Espece_observe1_bache_2, doc.Famille_observe1_bache_2, doc.Genre_observe1_bache_2, doc.Espece_observe1_bache_2);
			select_change(table, Famille_observe2_bache_2, Genre_observe2_bache_2, Espece_observe2_bache_2, doc.Famille_observe2_bache_2, doc.Genre_observe2_bache_2, doc.Espece_observe2_bache_2);
		}
		catch(err) {
		};			
		addValue('ID_NI_debut_bache_2');
		addValue('ID_NI_fin_bache_2');
		
		var Famille_observe1_bache_3 = document.getElementById("Famille_observe1_bache_3");
		var Genre_observe1_bache_3 = document.getElementById("Genre_observe1_bache_3");
		var Espece_observe1_bache_3 = document.getElementById("Espece_observe1_bache_3");
		var Famille_observe2_bache_3 = document.getElementById("Famille_observe2_bache_3");
		var Genre_observe2_bache_3 = document.getElementById("Genre_observe2_bache_3");
		var Espece_observe2_bache_3 = document.getElementById("Espece_observe2_bache_3");
		try {
			select_change(table, Famille_observe1_bache_3, Genre_observe1_bache_3, Espece_observe1_bache_3, doc.Famille_observe1_bache_3, doc.Genre_observe1_bache_3, doc.Espece_observe1_bache_3);
			select_change(table, Famille_observe2_bache_3, Genre_observe2_bache_3, Espece_observe2_bache_3, doc.Famille_observe2_bache_3, doc.Genre_observe2_bache_3, doc.Espece_observe2_bache_3);
		}
		catch(err) {
		};			
		addValue('ID_NI_debut_bache_3');
		addValue('ID_NI_fin_bache_3');
		
		var Famille_observe1_bache_4 = document.getElementById("Famille_observe1_bache_4");
		var Genre_observe1_bache_4 = document.getElementById("Genre_observe1_bache_4");
		var Espece_observe1_bache_4 = document.getElementById("Espece_observe1_bache_4");
		var Famille_observe2_bache_4 = document.getElementById("Famille_observe2_bache_4");
		var Genre_observe2_bache_4 = document.getElementById("Genre_observe2_bache_4");
		var Espece_observe2_bache_4 = document.getElementById("Espece_observe2_bache_4");
		try {
			select_change(table, Famille_observe1_bache_4, Genre_observe1_bache_4, Espece_observe1_bache_4, doc.Famille_observe1_bache_4, doc.Genre_observe1_bache_4, doc.Espece_observe1_bache_4);
			select_change(table, Famille_observe2_bache_4, Genre_observe2_bache_4, Espece_observe2_bache_4, doc.Famille_observe2_bache_4, doc.Genre_observe2_bache_4, doc.Espece_observe2_bache_4);
		}
		catch(err) {
		};			
		addValue('ID_NI_debut_bache_4');
		addValue('ID_NI_fin_bache_4');
		
		var Famille_observe1_bache_5 = document.getElementById("Famille_observe1_bache_5");
		var Genre_observe1_bache_5 = document.getElementById("Genre_observe1_bache_5");
		var Espece_observe1_bache_5 = document.getElementById("Espece_observe1_bache_5");
		var Famille_observe2_bache_5 = document.getElementById("Famille_observe2_bache_5");
		var Genre_observe2_bache_5 = document.getElementById("Genre_observe2_bache_5");
		var Espece_observe2_bache_5 = document.getElementById("Espece_observe2_bache_5");
		try {
			select_change(table, Famille_observe1_bache_5, Genre_observe1_bache_5, Espece_observe1_bache_5, doc.Famille_observe1_bache_5, doc.Genre_observe1_bache_5, doc.Espece_observe1_bache_5);
			select_change(table, Famille_observe2_bache_5, Genre_observe2_bache_5, Espece_observe2_bache_5, doc.Famille_observe2_bache_5, doc.Genre_observe2_bache_5, doc.Espece_observe2_bache_5);
		}
		catch(err) {
		};			
		addValue('ID_NI_debut_bache_5');
		addValue('ID_NI_fin_bache_5');
		
		var Famille_observe1_bache_6 = document.getElementById("Famille_observe1_bache_6");
		var Genre_observe1_bache_6 = document.getElementById("Genre_observe1_bache_6");
		var Espece_observe1_bache_6 = document.getElementById("Espece_observe1_bache_6");
		var Famille_observe2_bache_6 = document.getElementById("Famille_observe2_bache_6");
		var Genre_observe2_bache_6 = document.getElementById("Genre_observe2_bache_6");
		var Espece_observe2_bache_6 = document.getElementById("Espece_observe2_bache_6");
		try {
			select_change(table, Famille_observe1_bache_6, Genre_observe1_bache_6, Espece_observe1_bache_6, doc.Famille_observe1_bache_6, doc.Genre_observe1_bache_6, doc.Espece_observe1_bache_6);
			select_change(table, Famille_observe2_bache_6, Genre_observe2_bache_6, Espece_observe2_bache_6, doc.Famille_observe2_bache_6, doc.Genre_observe2_bache_6, doc.Espece_observe2_bache_6);
		}
		catch(err) {
		};			
		addValue('ID_NI_debut_bache_6');
		addValue('ID_NI_fin_bache_6');
		
		var Famille_observe1_bache_7 = document.getElementById("Famille_observe1_bache_7");
		var Genre_observe1_bache_7 = document.getElementById("Genre_observe1_bache_7");
		var Espece_observe1_bache_7 = document.getElementById("Espece_observe1_bache_7");
		var Famille_observe2_bache_7 = document.getElementById("Famille_observe2_bache_7");
		var Genre_observe2_bache_7 = document.getElementById("Genre_observe2_bache_7");
		var Espece_observe2_bache_7 = document.getElementById("Espece_observe2_bache_7");
		try {
			select_change(table, Famille_observe1_bache_7, Genre_observe1_bache_7, Espece_observe1_bache_7, doc.Famille_observe1_bache_7, doc.Genre_observe1_bache_7, doc.Espece_observe1_bache_7);
			select_change(table, Famille_observe2_bache_7, Genre_observe2_bache_7, Espece_observe2_bache_7, doc.Famille_observe2_bache_7, doc.Genre_observe2_bache_7, doc.Espece_observe2_bache_7);
		}
		catch(err) {
		};			
		addValue('ID_NI_debut_bache_7');
		addValue('ID_NI_fin_bache_7');
		
		var Famille_observe1_bache_8 = document.getElementById("Famille_observe1_bache_8");
		var Genre_observe1_bache_8 = document.getElementById("Genre_observe1_bache_8");
		var Espece_observe1_bache_8 = document.getElementById("Espece_observe1_bache_8");
		var Famille_observe2_bache_8 = document.getElementById("Famille_observe2_bache_8");
		var Genre_observe2_bache_8 = document.getElementById("Genre_observe2_bache_8");
		var Espece_observe2_bache_8 = document.getElementById("Espece_observe2_bache_8");
		try {
			select_change(table, Famille_observe1_bache_8, Genre_observe1_bache_8, Espece_observe1_bache_8, doc.Famille_observe1_bache_8, doc.Genre_observe1_bache_8, doc.Espece_observe1_bache_8);
			select_change(table, Famille_observe2_bache_8, Genre_observe2_bache_8, Espece_observe2_bache_8, doc.Famille_observe2_bache_8, doc.Genre_observe2_bache_8, doc.Espece_observe2_bache_8);
		}
		catch(err) {
		};			
		addValue('ID_NI_debut_bache_8');
		addValue('ID_NI_fin_bache_8');
		
		var Famille_observe1_bache_9 = document.getElementById("Famille_observe1_bache_9");
		var Genre_observe1_bache_9 = document.getElementById("Genre_observe1_bache_9");
		var Espece_observe1_bache_9 = document.getElementById("Espece_observe1_bache_9");
		var Famille_observe2_bache_9 = document.getElementById("Famille_observe2_bache_9");
		var Genre_observe2_bache_9 = document.getElementById("Genre_observe2_bache_9");
		var Espece_observe2_bache_9 = document.getElementById("Espece_observe2_bache_9");
		try {
			select_change(table, Famille_observe1_bache_9, Genre_observe1_bache_9, Espece_observe1_bache_9, doc.Famille_observe1_bache_9, doc.Genre_observe1_bache_9, doc.Espece_observe1_bache_9);
			select_change(table, Famille_observe2_bache_9, Genre_observe2_bache_9, Espece_observe2_bache_9, doc.Famille_observe2_bache_9, doc.Genre_observe2_bache_9, doc.Espece_observe2_bache_9);
		}
		catch(err) {
		};			
		addValue('ID_NI_debut_bache_9');
		addValue('ID_NI_fin_bache_9');
		
		var Famille_observe1_bache_10 = document.getElementById("Famille_observe1_bache_10");
		var Genre_observe1_bache_10 = document.getElementById("Genre_observe1_bache_10");
		var Espece_observe1_bache_10 = document.getElementById("Espece_observe1_bache_10");
		var Famille_observe2_bache_10 = document.getElementById("Famille_observe2_bache_10");
		var Genre_observe2_bache_10 = document.getElementById("Genre_observe2_bache_10");
		var Espece_observe2_bache_10 = document.getElementById("Espece_observe2_bache_10");
		try {
			select_change(table, Famille_observe1_bache_10, Genre_observe1_bache_10, Espece_observe1_bache_10, doc.Famille_observe1_bache_10, doc.Genre_observe1_bache_10, doc.Espece_observe1_bache_10);
			select_change(table, Famille_observe2_bache_10, Genre_observe2_bache_10, Espece_observe2_bache_10, doc.Famille_observe2_bache_10, doc.Genre_observe2_bache_10, doc.Espece_observe2_bache_10);
		}
		catch(err) {
		};			
		addValue('ID_NI_debut_bache_10');
		addValue('ID_NI_fin_bache_10');
		
		addValue('Remarque');
			  

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
					
				
				function addValue(elementName, onchange) {
					var element = document.getElementById(elementName);
					
					
					if (!((elementName == 'Longitude') && (result.rows[0].doc[elementName] == 'O'))) {
						element.value = result.rows[0].doc[elementName];
					} else {
						element.value = 'W'
					}
					
					//element.value = result.rows[0].doc[elementName];
					try {
						if (onchange) {
							element.onchange();
						}
					} catch(err) {
					};
				}
				
				/*addValue('N_identification_mere');
				addValue('Numero_mission');*/
				
				addValue('Pays');
				addValue('Prefecture');
				addValue('Site_capture');
				addValue('Sous_prefecture');
				addValue('Ville_village');
				addValue('Site_capture');
				addValue('Environnement');
				addValue('Lat_degre_dec');
				addValue('Latitude');
				addValue('Long_degre_dec');
				addValue('Longitude');
				addValue('Proximite_village_km');
				addValue('Proximite_source_m');
				addValue('N_site', true);
				
				addValue('Equipe');
				$('#Date_debut_NI').datepicker('setDate', result.rows[0].doc.Date_debut_NI);
				$("#Heure_debut_NI").val(result.rows[0].doc.Heure_debut_NI);
				$('#Date_fin_NI').datepicker('setDate', result.rows[0].doc.Date_fin_NI);
				$("#Heure_fin_NI").val(result.rows[0].doc.Heure_fin_NI);	
				addValue('Estimation_population');	
				addValue('Changement_disposition_espece');
				addValue('Précisez');	
				
				var Famille_observe_1 = document.getElementById("Famille_observe_1");
				var Genre_observe_1 = document.getElementById("Genre_observe_1");
				var Espece_observe_1 = document.getElementById("Espece_observe_1");
				var Famille_observe_2 = document.getElementById("Famille_observe_2");
				var Genre_observe_2 = document.getElementById("Genre_observe_2");
				var Espece_observe_2 = document.getElementById("Espece_observe_2");
				var Famille_observe_3 = document.getElementById("Famille_observe_3");
				var Genre_observe_3 = document.getElementById("Genre_observe_3");
				var Espece_observe_3 = document.getElementById("Espece_observe_3");
				var Famille_observe_4 = document.getElementById("Famille_observe_4");
				var Genre_observe_4 = document.getElementById("Genre_observe_4");
				var Espece_observe_4 = document.getElementById("Espece_observe_4");
				var Famille_observe_5 = document.getElementById("Famille_observe_5");
				var Genre_observe_5 = document.getElementById("Genre_observe_5");
				var Espece_observe_5 = document.getElementById("Espece_observe_5");
				try {
					select_change(table, Famille_observe_1, Genre_observe_1, Espece_observe_1, result.rows[0].doc.Famille_observe_1, result.rows[0].doc.Genre_observe_1, result.rows[0].doc.Espece_observe_1);
					select_change(table, Famille_observe_2, Genre_observe_2, Espece_observe_2, result.rows[0].doc.Famille_observe_2, result.rows[0].doc.Genre_observe_2, result.rows[0].doc.Espece_observe_2);
					select_change(table, Famille_observe_3, Genre_observe_3, Espece_observe_3, result.rows[0].doc.Famille_observe_3, result.rows[0].doc.Genre_observe_3, result.rows[0].doc.Espece_observe_3);
					select_change(table, Famille_observe_4, Genre_observe_4, Espece_observe_4, result.rows[0].doc.Famille_observe_4, result.rows[0].doc.Genre_observe_4, result.rows[0].doc.Espece_observe_4);
					select_change(table, Famille_observe_5, Genre_observe_5, Espece_observe_5, result.rows[0].doc.Famille_observe_5, result.rows[0].doc.Genre_observe_5, result.rows[0].doc.Espece_observe_5);
				}
				catch(err) {
				};
				
				addValue('ID_NI_preleve_debut');
				addValue('ID_NI_preleve_fin');
				
				var Famille_observe1_bache_1 = document.getElementById("Famille_observe1_bache_1");
				var Genre_observe1_bache_1 = document.getElementById("Genre_observe1_bache_1");
				var Espece_observe1_bache_1 = document.getElementById("Espece_observe1_bache_1");
				var Famille_observe2_bache_1 = document.getElementById("Famille_observe2_bache_1");
				var Genre_observe2_bache_1 = document.getElementById("Genre_observe2_bache_1");
				var Espece_observe2_bache_1 = document.getElementById("Espece_observe2_bache_1");
				try {
					select_change(table, Famille_observe1_bache_1, Genre_observe1_bache_1, Espece_observe1_bache_1, result.rows[0].doc.Famille_observe1_bache_1, result.rows[0].doc.Genre_observe1_bache_1, result.rows[0].doc.Espece_observe1_bache_1);
					select_change(table, Famille_observe2_bache_1, Genre_observe2_bache_1, Espece_observe2_bache_1, result.rows[0].doc.Famille_observe2_bache_1, result.rows[0].doc.Genre_observe2_bache_1, result.rows[0].doc.Espece_observe2_bache_1);
				}
				catch(err) {
				};			
				addValue('ID_NI_debut_bache_1');
				addValue('ID_NI_fin_bache_1');
				
				var Famille_observe1_bache_2 = document.getElementById("Famille_observe1_bache_2");
				var Genre_observe1_bache_2 = document.getElementById("Genre_observe1_bache_2");
				var Espece_observe1_bache_2 = document.getElementById("Espece_observe1_bache_2");
				var Famille_observe2_bache_2 = document.getElementById("Famille_observe2_bache_2");
				var Genre_observe2_bache_2 = document.getElementById("Genre_observe2_bache_2");
				var Espece_observe2_bache_2 = document.getElementById("Espece_observe2_bache_2");
				try {
					select_change(table, Famille_observe1_bache_2, Genre_observe1_bache_2, Espece_observe1_bache_2, result.rows[0].doc.Famille_observe1_bache_2, result.rows[0].doc.Genre_observe1_bache_2, result.rows[0].doc.Espece_observe1_bache_2);
					select_change(table, Famille_observe2_bache_2, Genre_observe2_bache_2, Espece_observe2_bache_2, result.rows[0].doc.Famille_observe2_bache_2, result.rows[0].doc.Genre_observe2_bache_2, result.rows[0].doc.Espece_observe2_bache_2);
				}
				catch(err) {
				};			
				addValue('ID_NI_debut_bache_2');
				addValue('ID_NI_fin_bache_2');
				
				var Famille_observe1_bache_2 = document.getElementById("Famille_observe1_bache_2");
				var Genre_observe1_bache_2 = document.getElementById("Genre_observe1_bache_2");
				var Espece_observe1_bache_2 = document.getElementById("Espece_observe1_bache_2");
				var Famille_observe2_bache_2 = document.getElementById("Famille_observe2_bache_2");
				var Genre_observe2_bache_2 = document.getElementById("Genre_observe2_bache_2");
				var Espece_observe2_bache_2 = document.getElementById("Espece_observe2_bache_2");
				try {
					select_change(table, Famille_observe1_bache_2, Genre_observe1_bache_2, Espece_observe1_bache_2, result.rows[0].doc.Famille_observe1_bache_2, result.rows[0].doc.Genre_observe1_bache_2, result.rows[0].doc.Espece_observe1_bache_2);
					select_change(table, Famille_observe2_bache_2, Genre_observe2_bache_2, Espece_observe2_bache_2, result.rows[0].doc.Famille_observe2_bache_2, result.rows[0].doc.Genre_observe2_bache_2, result.rows[0].doc.Espece_observe2_bache_2);
				}
				catch(err) {
				};			
				addValue('ID_NI_debut_bache_2');
				addValue('ID_NI_fin_bache_2');
				
				var Famille_observe1_bache_3 = document.getElementById("Famille_observe1_bache_3");
				var Genre_observe1_bache_3 = document.getElementById("Genre_observe1_bache_3");
				var Espece_observe1_bache_3 = document.getElementById("Espece_observe1_bache_3");
				var Famille_observe2_bache_3 = document.getElementById("Famille_observe2_bache_3");
				var Genre_observe2_bache_3 = document.getElementById("Genre_observe2_bache_3");
				var Espece_observe2_bache_3 = document.getElementById("Espece_observe2_bache_3");
				try {
					select_change(table, Famille_observe1_bache_3, Genre_observe1_bache_3, Espece_observe1_bache_3, result.rows[0].doc.Famille_observe1_bache_3, result.rows[0].doc.Genre_observe1_bache_3, result.rows[0].doc.Espece_observe1_bache_3);
					select_change(table, Famille_observe2_bache_3, Genre_observe2_bache_3, Espece_observe2_bache_3, result.rows[0].doc.Famille_observe2_bache_3, result.rows[0].doc.Genre_observe2_bache_3, result.rows[0].doc.Espece_observe2_bache_3);
				}
				catch(err) {
				};			
				addValue('ID_NI_debut_bache_3');
				addValue('ID_NI_fin_bache_3');
				
				var Famille_observe1_bache_4 = document.getElementById("Famille_observe1_bache_4");
				var Genre_observe1_bache_4 = document.getElementById("Genre_observe1_bache_4");
				var Espece_observe1_bache_4 = document.getElementById("Espece_observe1_bache_4");
				var Famille_observe2_bache_4 = document.getElementById("Famille_observe2_bache_4");
				var Genre_observe2_bache_4 = document.getElementById("Genre_observe2_bache_4");
				var Espece_observe2_bache_4 = document.getElementById("Espece_observe2_bache_4");
				try {
					select_change(table, Famille_observe1_bache_4, Genre_observe1_bache_4, Espece_observe1_bache_4, result.rows[0].doc.Famille_observe1_bache_4, result.rows[0].doc.Genre_observe1_bache_4, result.rows[0].doc.Espece_observe1_bache_4);
					select_change(table, Famille_observe2_bache_4, Genre_observe2_bache_4, Espece_observe2_bache_4, result.rows[0].doc.Famille_observe2_bache_4, result.rows[0].doc.Genre_observe2_bache_4, result.rows[0].doc.Espece_observe2_bache_4);
				}
				catch(err) {
				};			
				addValue('ID_NI_debut_bache_4');
				addValue('ID_NI_fin_bache_4');
				
				var Famille_observe1_bache_5 = document.getElementById("Famille_observe1_bache_5");
				var Genre_observe1_bache_5 = document.getElementById("Genre_observe1_bache_5");
				var Espece_observe1_bache_5 = document.getElementById("Espece_observe1_bache_5");
				var Famille_observe2_bache_5 = document.getElementById("Famille_observe2_bache_5");
				var Genre_observe2_bache_5 = document.getElementById("Genre_observe2_bache_5");
				var Espece_observe2_bache_5 = document.getElementById("Espece_observe2_bache_5");
				try {
					select_change(table, Famille_observe1_bache_5, Genre_observe1_bache_5, Espece_observe1_bache_5, result.rows[0].doc.Famille_observe1_bache_5, result.rows[0].doc.Genre_observe1_bache_5, result.rows[0].doc.Espece_observe1_bache_5);
					select_change(table, Famille_observe2_bache_5, Genre_observe2_bache_5, Espece_observe2_bache_5, result.rows[0].doc.Famille_observe2_bache_5, result.rows[0].doc.Genre_observe2_bache_5, result.rows[0].doc.Espece_observe2_bache_5);
				}
				catch(err) {
				};			
				addValue('ID_NI_debut_bache_5');
				addValue('ID_NI_fin_bache_5');
				
				var Famille_observe1_bache_6 = document.getElementById("Famille_observe1_bache_6");
				var Genre_observe1_bache_6 = document.getElementById("Genre_observe1_bache_6");
				var Espece_observe1_bache_6 = document.getElementById("Espece_observe1_bache_6");
				var Famille_observe2_bache_6 = document.getElementById("Famille_observe2_bache_6");
				var Genre_observe2_bache_6 = document.getElementById("Genre_observe2_bache_6");
				var Espece_observe2_bache_6 = document.getElementById("Espece_observe2_bache_6");
				try {
					select_change(table, Famille_observe1_bache_6, Genre_observe1_bache_6, Espece_observe1_bache_6, result.rows[0].doc.Famille_observe1_bache_6, result.rows[0].doc.Genre_observe1_bache_6, result.rows[0].doc.Espece_observe1_bache_6);
					select_change(table, Famille_observe2_bache_6, Genre_observe2_bache_6, Espece_observe2_bache_6, result.rows[0].doc.Famille_observe2_bache_6, result.rows[0].doc.Genre_observe2_bache_6, result.rows[0].doc.Espece_observe2_bache_6);
				}
				catch(err) {
				};			
				addValue('ID_NI_debut_bache_6');
				addValue('ID_NI_fin_bache_6');
				
				var Famille_observe1_bache_7 = document.getElementById("Famille_observe1_bache_7");
				var Genre_observe1_bache_7 = document.getElementById("Genre_observe1_bache_7");
				var Espece_observe1_bache_7 = document.getElementById("Espece_observe1_bache_7");
				var Famille_observe2_bache_7 = document.getElementById("Famille_observe2_bache_7");
				var Genre_observe2_bache_7 = document.getElementById("Genre_observe2_bache_7");
				var Espece_observe2_bache_7 = document.getElementById("Espece_observe2_bache_7");
				try {
					select_change(table, Famille_observe1_bache_7, Genre_observe1_bache_7, Espece_observe1_bache_7, result.rows[0].doc.Famille_observe1_bache_7, result.rows[0].doc.Genre_observe1_bache_7, result.rows[0].doc.Espece_observe1_bache_7);
					select_change(table, Famille_observe2_bache_7, Genre_observe2_bache_7, Espece_observe2_bache_7, result.rows[0].doc.Famille_observe2_bache_7, result.rows[0].doc.Genre_observe2_bache_7, result.rows[0].doc.Espece_observe2_bache_7);
				}
				catch(err) {
				};			
				addValue('ID_NI_debut_bache_7');
				addValue('ID_NI_fin_bache_7');
				
				var Famille_observe1_bache_8 = document.getElementById("Famille_observe1_bache_8");
				var Genre_observe1_bache_8 = document.getElementById("Genre_observe1_bache_8");
				var Espece_observe1_bache_8 = document.getElementById("Espece_observe1_bache_8");
				var Famille_observe2_bache_8 = document.getElementById("Famille_observe2_bache_8");
				var Genre_observe2_bache_8 = document.getElementById("Genre_observe2_bache_8");
				var Espece_observe2_bache_8 = document.getElementById("Espece_observe2_bache_8");
				try {
					select_change(table, Famille_observe1_bache_8, Genre_observe1_bache_8, Espece_observe1_bache_8, result.rows[0].doc.Famille_observe1_bache_8, result.rows[0].doc.Genre_observe1_bache_8, result.rows[0].doc.Espece_observe1_bache_8);
					select_change(table, Famille_observe2_bache_8, Genre_observe2_bache_8, Espece_observe2_bache_8, result.rows[0].doc.Famille_observe2_bache_8, result.rows[0].doc.Genre_observe2_bache_8, result.rows[0].doc.Espece_observe2_bache_8);
				}
				catch(err) {
				};			
				addValue('ID_NI_debut_bache_8');
				addValue('ID_NI_fin_bache_8');
				
				var Famille_observe1_bache_9 = document.getElementById("Famille_observe1_bache_9");
				var Genre_observe1_bache_9 = document.getElementById("Genre_observe1_bache_9");
				var Espece_observe1_bache_9 = document.getElementById("Espece_observe1_bache_9");
				var Famille_observe2_bache_9 = document.getElementById("Famille_observe2_bache_9");
				var Genre_observe2_bache_9 = document.getElementById("Genre_observe2_bache_9");
				var Espece_observe2_bache_9 = document.getElementById("Espece_observe2_bache_9");
				try {
					select_change(table, Famille_observe1_bache_9, Genre_observe1_bache_9, Espece_observe1_bache_9, result.rows[0].doc.Famille_observe1_bache_9, result.rows[0].doc.Genre_observe1_bache_9, result.rows[0].doc.Espece_observe1_bache_9);
					select_change(table, Famille_observe2_bache_9, Genre_observe2_bache_9, Espece_observe2_bache_9, result.rows[0].doc.Famille_observe2_bache_9, result.rows[0].doc.Genre_observe2_bache_9, result.rows[0].doc.Espece_observe2_bache_9);
				}
				catch(err) {
				};			
				addValue('ID_NI_debut_bache_9');
				addValue('ID_NI_fin_bache_9');
				
				var Famille_observe1_bache_10 = document.getElementById("Famille_observe1_bache_10");
				var Genre_observe1_bache_10 = document.getElementById("Genre_observe1_bache_10");
				var Espece_observe1_bache_10 = document.getElementById("Espece_observe1_bache_10");
				var Famille_observe2_bache_10 = document.getElementById("Famille_observe2_bache_10");
				var Genre_observe2_bache_10 = document.getElementById("Genre_observe2_bache_10");
				var Espece_observe2_bache_10 = document.getElementById("Espece_observe2_bache_10");
				try {
					select_change(table, Famille_observe1_bache_10, Genre_observe1_bache_10, Espece_observe1_bache_10, result.rows[0].doc.Famille_observe1_bache_10, result.rows[0].doc.Genre_observe1_bache_10, result.rows[0].doc.Espece_observe1_bache_10);
					select_change(table, Famille_observe2_bache_10, Genre_observe2_bache_10, Espece_observe2_bache_10, result.rows[0].doc.Famille_observe2_bache_10, result.rows[0].doc.Genre_observe2_bache_10, result.rows[0].doc.Espece_observe2_bache_10);
				}
				catch(err) {
				};			
				addValue('ID_NI_debut_bache_10');
				addValue('ID_NI_fin_bache_10');
				
				addValue('Remarque');
					  
	    	};
	    	
		}).catch(function (err) {
			console.log(err);
		});
	}
}


