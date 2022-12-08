var tabFilet = [];

function chargement_des_chauves_souris_capturees() {
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

		    	listeCouleur_pelage_dorsal();
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
			var Famille_terrain = document.getElementById("Famille_terrain");
			var Famille_labo = document.getElementById("Famille_labo");
			var Famille_consensus = document.getElementById("Famille_consensus");
			Famille_terrain.options[Famille_terrain.options.length] = new Option(value, value); 
			Famille_labo.options[Famille_labo.options.length] = new Option(value, value); 
			Famille_consensus.options[Famille_consensus.options.length] = new Option(value, value); 
		}*/
	}
}


function modifier(table, option) {
	

	var doc;
	if (option == 1) {
		doc = JSON.parse(localStorage.getItem('chauves_souris_captureesTablesData'));
		
		function addValue(elementName, onchange) {
			var element = document.getElementById(elementName);
			
			if (elementName == 'NumFilet_piege') {
				elementName = 'NumFilet/piege';
			}
			
			if (
					(!((elementName == 'LongitudeFilet') && (doc[elementName] == 'O'))) &&
				    (!((elementName == 'Longitude_Lieu_capture') && (doc[elementName] == 'O'))) 
			   )
			{
				element.value = doc[elementName];
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
		
		addValue('N_identification_mere');
		addValue('Numero_mission');
		
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
		
		addValue('Methode_capture');
		
		
		addValue('NumFilet_piege');
		addValue('LongueurFilet');
	    addValue('HauteurFilet');
		addValue('Lat_degre_decFilet');
		addValue('LatitudeFilet');
		addValue('Long_degre_decFilet');
		addValue('LongitudeFilet');
		
		addValue('Lat_degre_dec_Lieu_capture');
		addValue('Latitude_Lieu_capture');
		addValue('Long_degre_dec_Lieu_capture');
		addValue('Longitude_Lieu_capture');
		
		
		
		addValue('Date');
		addValue('Equipe');
		addValue('Type_chauve_souris');
		addValue('Espece_identifiee');
		
		
		var Famille_terrain = document.getElementById("Famille_terrain");
		var Genre_terrain = document.getElementById("Genre_terrain");
		var Espece_terrain = document.getElementById("Espece_terrain");
		var Famille_labo = document.getElementById("Famille_labo");
		var Genre_labo = document.getElementById("Genre_labo");
		var Espece_labo = document.getElementById("Espece_labo");
		var Famille_consensus = document.getElementById("Famille_consensus");
		var Genre_consensus = document.getElementById("Genre_consensus");
		var Espece_consensus = document.getElementById("Espece_consensus");
		try {
			select_change(table, Famille_terrain, Genre_terrain, Espece_terrain, doc.Famille_terrain, doc.Genre_terrain, doc.Espece_terrain);
			select_change(table, Famille_labo, Genre_labo, Espece_labo, doc.Famille_labo, doc.Genre_labo, doc.Espece_labo);
			select_change(table, Famille_consensus, Genre_consensus, Espece_consensus, doc.Famille_consensus, doc.Genre_consensus, doc.Espece_consensus);
		}
		catch(err) {
		};
					
		addValue('Sexe', true);
		addValue('Age');
		addValue('Gestante');
		addValue('Lactation');
		addValue('Suitee', true);
		addValue('Sexe_enfant');
		addValue('Poids_enfant');
		addValue('Identifiant_enfant');
		addValue('Vivante', true);
		addValue('Cause_deces');
		addValue('Poids_gr');
		addValue('L_avant_bras_mm');
		addValue('Ailes_WS');
		addValue('L_totale_corps_Ltc_mm');
		addValue('TL_L_Totale_avec_queue_mm');
		addValue('Taille_yeux');
		addValue('L_queue_T_mm');
		addValue('E_mm');	
		addValue('Tr_mm');	
		addValue('Tib_mm');	
		addValue('HF_L_arriere_pied_mm');	
		addValue('NL_breadth_larg_feuille_de_nez_mm');	
		addValue('NL_lenght_mm');
		addValue('L_metacarpe_3ieme_doigt_mm');
		addValue('Couleur_pelage_dorsal');
		addValue('Couleur_pelage_ventral');
		addValue('Photo');
		addValue('Remarques_anomalies');
		addValue('Sang_DBS_nb_cercles');
		addValue('Sang_tube_EDTA');
		addValue('Feces_RNAl');
		addValue('Urine');
		addValue('Urine_DUS_nombre_cercles');
		addValue('Feces_urine_RNAl');
		addValue('Ecouvillon_gorge_RNAl');
		addValue('Ecouvillon_rectal_RNAl');
		addValue('Ectoparasites_ethanol');
		addValue('Poils_ethanol');
		addValue('Wing_punch_ethanol');
		addValue('Feces_culture_glycerol');
		addValue('Feces_ethanol');
		addValue('Sperme');
		addValue('Lait');
		addValue('Autres_echantillons_remarques');
		addValue('Specimen_entier');
		addValue('Specimen_preserve_dans');
		addValue('Prelevement_organe');
		addValue('Foie_formol');
		addValue('Foie_RNAl');
		addValue('Rate_formol');
		addValue('Rate_RNAl');
		addValue('Reins_formol');
		addValue('Reins_RNAl');
		addValue('Intestins_formol');
		addValue('Intestins_RNAl');
		addValue('Poumons_formol');
		addValue('Poumons_RNAl');
		addValue('Coeur_formol');
		addValue('Coeur_RNAl');
		addValue('Ggl_lymph_formol');
		addValue('Ggl_lymph_RNAl');
		addValue('Testicules_formol');
		addValue('Testicules_RNAl');
		addValue('Peau_formol');
		addValue('Peau_RNAl');
		addValue('Muscles_formol');
		addValue('Muscles_RNAl');
		addValue('Cerveau_formol');
		addValue('Cerveau_RNAl');
		addValue('Autre');
		addValue('Autre_formol');
		addValue('Autre_RNAl');
		addValue('Remarques_echantillons');
			  

	} else {
		
		var id = localStorage.getItem('ID_chauves_souris_capturees' + table);

		var debug;
		if (localStorage.getItem('debug') === null) {
			debug = '';
		} else {
			debug = localStorage.getItem('debug');
		};
		
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'chauves_souris_capturees' + table + debug);
		} else {
			var DB = new PouchDB('chauves_souris_capturees' + table + debug);
		};
		DB.allDocs({  		
				keys: [id],
			include_docs: true,
			attachments: true
		}).then(function (result) {
	
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
				console.log(JSON.stringify(result.rows));
					
				var N_identification_CS = document.getElementById("N_identification_CS");
				//if (option != 1) {
					N_identification_CS.value = result.rows[0].doc.N_identification_CS;
				//}
				
				//alert(result.rows[0].doc['N_identification_mere']);
				
				function addValue(elementName, onchange) {
					var element = document.getElementById(elementName);
					
					if (elementName == 'NumFilet_piege') {
						elementName = 'NumFilet/piege';
					}
					
					if (
							(!((elementName == 'LongitudeFilet') && (result.rows[0].doc[elementName] == 'O'))) &&
						    (!((elementName == 'Longitude_Lieu_capture') && (result.rows[0].doc[elementName] == 'O'))) 
					   )
					{
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
				
				addValue('N_identification_mere');
				addValue('Numero_mission');
				
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
				
				addValue('Methode_capture');
				
				
				addValue('NumFilet_piege');
				addValue('LongueurFilet');
			    addValue('HauteurFilet');
				addValue('Lat_degre_decFilet');
				addValue('LatitudeFilet');
				addValue('Long_degre_decFilet');
				addValue('LongitudeFilet');
				
				addValue('Lat_degre_dec_Lieu_capture');
				addValue('Latitude_Lieu_capture');
				addValue('Long_degre_dec_Lieu_capture');
				addValue('Longitude_Lieu_capture');
				
				
				
				addValue('Date');
				addValue('Equipe');
				addValue('Type_chauve_souris');
				addValue('Espece_identifiee');
				
				
				var Famille_terrain = document.getElementById("Famille_terrain");
				var Genre_terrain = document.getElementById("Genre_terrain");
				var Espece_terrain = document.getElementById("Espece_terrain");
				var Famille_labo = document.getElementById("Famille_labo");
				var Genre_labo = document.getElementById("Genre_labo");
				var Espece_labo = document.getElementById("Espece_labo");
				var Famille_consensus = document.getElementById("Famille_consensus");
				var Genre_consensus = document.getElementById("Genre_consensus");
				var Espece_consensus = document.getElementById("Espece_consensus");
				try {
					select_change(table, Famille_terrain, Genre_terrain, Espece_terrain, result.rows[0].doc.Famille_terrain, result.rows[0].doc.Genre_terrain, result.rows[0].doc.Espece_terrain);
					select_change(table, Famille_labo, Genre_labo, Espece_labo, result.rows[0].doc.Famille_labo, result.rows[0].doc.Genre_labo, result.rows[0].doc.Espece_labo);
					select_change(table, Famille_consensus, Genre_consensus, Espece_consensus, result.rows[0].doc.Famille_consensus, result.rows[0].doc.Genre_consensus, result.rows[0].doc.Espece_consensus);
				}
				catch(err) {
				};
							
				addValue('Sexe', true);
				addValue('Age');
				addValue('Gestante');
				addValue('Lactation');
				addValue('Suitee', true);
				addValue('Sexe_enfant');
				addValue('Poids_enfant');
				addValue('Identifiant_enfant');
				addValue('Vivante', true);
				addValue('Cause_deces');
				addValue('Poids_gr');
				addValue('L_avant_bras_mm');
				addValue('Ailes_WS');
				addValue('L_totale_corps_Ltc_mm');
				addValue('TL_L_Totale_avec_queue_mm');
				addValue('Taille_yeux');
				addValue('L_queue_T_mm');
				addValue('E_mm');	
				addValue('Tr_mm');	
				addValue('Tib_mm');	
				addValue('HF_L_arriere_pied_mm');	
				addValue('NL_breadth_larg_feuille_de_nez_mm');	
				addValue('NL_lenght_mm');
				addValue('L_metacarpe_3ieme_doigt_mm');
				addValue('Couleur_pelage_dorsal');
				addValue('Couleur_pelage_ventral');
				addValue('Photo');
				addValue('Remarques_anomalies');
				addValue('Sang_DBS_nb_cercles');
				addValue('Sang_tube_EDTA');
				addValue('Feces_RNAl');
				addValue('Urine');
				addValue('Urine_DUS_nombre_cercles');
				addValue('Feces_urine_RNAl');
				addValue('Ecouvillon_gorge_RNAl');
				addValue('Ecouvillon_rectal_RNAl');
				addValue('Ectoparasites_ethanol');
				addValue('Poils_ethanol');
				addValue('Wing_punch_ethanol');
				addValue('Feces_culture_glycerol');
				addValue('Feces_ethanol');
				addValue('Sperme');
				addValue('Lait');
				addValue('Autres_echantillons_remarques');
				addValue('Specimen_entier');
				addValue('Specimen_preserve_dans');
				addValue('Prelevement_organe');
				addValue('Foie_formol');
				addValue('Foie_RNAl');
				addValue('Rate_formol');
				addValue('Rate_RNAl');
				addValue('Reins_formol');
				addValue('Reins_RNAl');
				addValue('Intestins_formol');
				addValue('Intestins_RNAl');
				addValue('Poumons_formol');
				addValue('Poumons_RNAl');
				addValue('Coeur_formol');
				addValue('Coeur_RNAl');
				addValue('Ggl_lymph_formol');
				addValue('Ggl_lymph_RNAl');
				addValue('Testicules_formol');
				addValue('Testicules_RNAl');
				addValue('Peau_formol');
				addValue('Peau_RNAl');
				addValue('Muscles_formol');
				addValue('Muscles_RNAl');
				addValue('Cerveau_formol');
				addValue('Cerveau_RNAl');
				addValue('Autre');
				addValue('Autre_formol');
				addValue('Autre_RNAl');
				addValue('Remarques_echantillons');
					  
	    	};
	    	
		}).catch(function (err) {
			console.log(err);
		});
	}
}


