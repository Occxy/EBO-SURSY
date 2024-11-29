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
	    	var caracterisationsTablesData = JSON.parse(JSON.stringify(result));
	    	
	    	caracterisationsTablesData.rows.forEach(function(row){   
	    		N_site.options[N_site.options.length] = new Option(row.doc.N_site, row.doc.N_site/*row.id*/);
	    	});		
		}
	}).catch(function (err) {
		console.log(err);
	});
		
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

	
}


function modifier(table, option) {
	
	var doc;
	if (option == 1) {
		doc = JSON.parse(localStorage.getItem('journalieresTablesData'));
		
		function addValue(elementName, onchange) {
			var element = document.getElementById(elementName);
			if (elementName == 'Prefecture') {
				elementName = 'Préfecture';
			} else if (elementName == 'Sous_prefecture') {
				elementName = 'Sous-préfecture';
			} else if (elementName == 'Ville_village') {
				elementName = 'Ville/village';
			} else if (elementName == 'Sortie_entree1') {
				elementName = 'Sortie/entree1';
			} else if (elementName == 'Sortie_entree2') {
				elementName = 'Sortie/entree2';
			}
			
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
		
		$('#Date').datepicker('setDate', result.rows[0].doc.Date);
		
		addValue('Equipe');						
		
		addValue('ID_CS_preleve_debut');
		addValue('ID_CS_preleve_fin');
		
		addValue('Sortie_entree1');	
		addValue('Presence_entree1');		
		addValue('Nb_entree1_espece1');	
		addValue('Nb_entree1_espece1');		
		addValue('Famille_entree1CS1');	
		addValue('Genre_entree1CS1');		
		addValue('Espece_entree1CS1');	
		addValue('Nb_entree1_espece2');		
		addValue('Famille_entree1CS2');	
		addValue('Genre_entree1CS2');		
		addValue('Espece_entree1CS2');	
		addValue('Nb_entree1_espece3');		
		addValue('Famille_entree1CS3');	
		addValue('Genre_entree1CS3');		
		addValue('Espece_entree1CS3');	
		addValue('Nb_entree1_espece4');		
		addValue('Famille_entree1CS4');	
		addValue('Genre_entree1CS4');		
		addValue('Espece_entree1CS4');	
		addValue('Nb_entree1_espece5');		
		addValue('Famille_entree1CS5');	
		addValue('Genre_entree1CS5');		
		addValue('Espece_entree1CS5');	
		addValue('Nb_entree1_espece6');		
		addValue('Famille_entree1CS6');	
		addValue('Genre_entree1CS6');		
		addValue('Espece_entree1CS6');	
		addValue('Nb_entree1_espece7');		
		addValue('Famille_entree1CS7');	
		addValue('Genre_entree1CS7');		
		addValue('Espece_entree1CS7');	
		addValue('Nb_entree1_espece8');		
		addValue('Famille_entree1CS8');	
		addValue('Genre_entree1CS8');		
		addValue('Espece_entree1CS8');	
		
		addValue('Sortie_entree2');
		addValue('Presence_entree2');		
		addValue('Nb_entree2_espece1');	
		addValue('Nb_entree2_espece1');		
		addValue('Famille_entree2CS1');	
		addValue('Genre_entree2CS1');		
		addValue('Espece_entree2CS1');	
		addValue('Nb_entree2_espece2');		
		addValue('Famille_entree2CS2');	
		addValue('Genre_entree2CS2');		
		addValue('Espece_entree2CS2');	
		addValue('Nb_entree2_espece3');		
		addValue('Famille_entree2CS3');	
		addValue('Genre_entree2CS3');		
		addValue('Espece_entree2CS3');	
		addValue('Nb_entree2_espece4');		
		addValue('Famille_entree2CS4');	
		addValue('Genre_entree2CS4');		
		addValue('Espece_entree2CS4');	
		addValue('Nb_entree2_espece5');		
		addValue('Famille_entree2CS5');	
		addValue('Genre_entree2CS5');		
		addValue('Espece_entree2CS5');	
		addValue('Nb_entree2_espece6');		
		addValue('Famille_entree2CS6');	
		addValue('Genre_entree2CS6');		
		addValue('Espece_entree2CS6');	
		addValue('Nb_entree2_espece7');		
		addValue('Famille_entree2CS7');	
		addValue('Genre_entree2CS7');		
		addValue('Espece_entree2CS7');	
		addValue('Nb_entree2_espece8');		
		addValue('Famille_entree2CS8');	
		addValue('Genre_entree2CS8');		
		addValue('Espece_entree2CS8');
		
		addValue('Famille_observe1');
		addValue('Genre_observe1');
		addValue('Espece_observe1');
		addValue('Famille_observe2');
		addValue('Genre_observe2');
		addValue('Espece_observe2');
		addValue('Famille_observe3');
		addValue('Genre_observe3');
		addValue('Espece_observe3');
		addValue('Nb_CS_morte1');
		addValue('Famille_morte1');
		addValue('Genre_morte1');
		addValue('Espece_morte1');
		addValue('Nb_CS_morte2');
		addValue('Famille_morte2');
		addValue('Genre_morte2');
		addValue('Espece_morte2');
		addValue('Nb_CS_morte3');
		addValue('Famille_morte3');
		addValue('Genre_morte3');
		addValue('Espece_morte3');
		addValue('Nb_CS_morte4');
		addValue('Famille_morte4');
		addValue('Genre_morte4');
		addValue('Espece_morte4');
		addValue('Nb_filet_sol');
		addValue('Remarque');
		addValue('IDFilet_1');
		addValue('Filet_sol_m2_1');	
		addValue('EntreeFilet_1');	
		addValue('HauteurFilet_1');
		$("#Filet_debut_1").val(result.rows[0].doc.Filet_debut_1);
		$("#Filet_fin_1").val(result.rows[0].doc.Filet_fin_1);
		addValue('Filet_temps_1');
		addValue('Nb_capture_filet_1');
		addValue('Nb_preleve_filet_1');
		addValue('IDFilet_2');
		addValue('Filet_sol_m2_2');	
		addValue('EntreeFilet_2');	
		addValue('HauteurFilet_2');
		$("#Filet_debut_2").val(result.rows[0].doc.Filet_debut_2);
		$("#Filet_fin_2").val(result.rows[0].doc.Filet_fin_2);
		addValue('Filet_temps_2');
		addValue('Nb_capture_filet_2');
		addValue('Nb_preleve_Filet_2');
		addValue('NbHarp');
		addValue('IDHarp_1');	
		addValue('EntreeHarp_1');	
		addValue('Harp_debut_1');	
		addValue('Harp_fin_1');	
		addValue('Harp_temps_1');	
		addValue('Nb_capture_harp_1');
		addValue('Nb_preleve_harp_1');
		
		addValue('IDHarp_2');	
		addValue('EntreeHarp_2');	
		addValue('Harp_debut_2');	
		addValue('Harp_fin_2');	
		addValue('Harp_temps_2');	
		addValue('Nb_capture_harp_2');
		addValue('Nb_preleve_harp_2');
		
		addValue('Saison');	
		addValue('Climat');	
		addValue('Precipitation');	
		addValue('Vent');	
		addValue('Lune');	
		addValue('Temperature_logger');	
		addValue('Humidite_logger');

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
					
				//var N_cameras_trap = document.getElementById("N_cameras_trap");
				//if (option != 1) {
				//N_cameras_trap.value = result.rows[0].doc.N_cameras_trap;
				//}
				
				//alert(result.rows[0].doc['N_identification_mere']);
				
				function addValue(elementName, onchange) {
					var element = document.getElementById(elementName);
					if (elementName == 'Prefecture') {
						elementName = 'Préfecture';
					} else if (elementName == 'Sous_prefecture') {
						elementName = 'Sous-préfecture';
					} else if (elementName == 'Ville_village') {
						elementName = 'Ville/village';
					} else if (elementName == 'Sortie_entree1') {
						elementName = 'Sortie/entree1';
					} else if (elementName == 'Sortie_entree2') {
						elementName = 'Sortie/entree2';
					}
					if (!((elementName == 'Longitude') && (result.rows[0].doc[elementName] == 'O'))) {
						element.value = result.rows[0].doc[elementName];
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
				addValue('Sous_prefecture');
				addValue('Ville_village');
				addValue('Site_capture');
				addValue('Environnement');
				addValue('Lat_degre_dec');
				addValue('Latitude');
				addValue('Proximite_village_km');	
			    addValue('Proximite_source_m');
				addValue('N_site', true);
				
				$('#Date').datepicker('setDate', result.rows[0].doc.Date);
				
				addValue('Equipe');						
				
				addValue('ID_CS_preleve_debut');
				addValue('ID_CS_preleve_fin');
				
				addValue('Sortie_entree1');	
				addValue('Presence_entree1');		
				addValue('Nb_entree1_espece1');	
				addValue('Nb_entree1_espece1');		
				addValue('Famille_entree1CS1');	
				addValue('Genre_entree1CS1');		
				addValue('Espece_entree1CS1');	
				addValue('Nb_entree1_espece2');		
				addValue('Famille_entree1CS2');	
				addValue('Genre_entree1CS2');		
				addValue('Espece_entree1CS2');	
				addValue('Nb_entree1_espece3');		
				addValue('Famille_entree1CS3');	
				addValue('Genre_entree1CS3');		
				addValue('Espece_entree1CS3');	
				addValue('Nb_entree1_espece4');		
				addValue('Famille_entree1CS4');	
				addValue('Genre_entree1CS4');		
				addValue('Espece_entree1CS4');	
				addValue('Nb_entree1_espece5');		
				addValue('Famille_entree1CS5');	
				addValue('Genre_entree1CS5');		
				addValue('Espece_entree1CS5');	
				addValue('Nb_entree1_espece6');		
				addValue('Famille_entree1CS6');	
				addValue('Genre_entree1CS6');		
				addValue('Espece_entree1CS6');	
				addValue('Nb_entree1_espece7');		
				addValue('Famille_entree1CS7');	
				addValue('Genre_entree1CS7');		
				addValue('Espece_entree1CS7');	
				addValue('Nb_entree1_espece8');		
				addValue('Famille_entree1CS8');	
				addValue('Genre_entree1CS8');		
				addValue('Espece_entree1CS8');	
				
				addValue('Sortie_entree2');
				addValue('Presence_entree2');		
				addValue('Nb_entree2_espece1');	
				addValue('Nb_entree2_espece1');		
				addValue('Famille_entree2CS1');	
				addValue('Genre_entree2CS1');		
				addValue('Espece_entree2CS1');	
				addValue('Nb_entree2_espece2');		
				addValue('Famille_entree2CS2');	
				addValue('Genre_entree2CS2');		
				addValue('Espece_entree2CS2');	
				addValue('Nb_entree2_espece3');		
				addValue('Famille_entree2CS3');	
				addValue('Genre_entree2CS3');		
				addValue('Espece_entree2CS3');	
				addValue('Nb_entree2_espece4');		
				addValue('Famille_entree2CS4');	
				addValue('Genre_entree2CS4');		
				addValue('Espece_entree2CS4');	
				addValue('Nb_entree2_espece5');		
				addValue('Famille_entree2CS5');	
				addValue('Genre_entree2CS5');		
				addValue('Espece_entree2CS5');	
				addValue('Nb_entree2_espece6');		
				addValue('Famille_entree2CS6');	
				addValue('Genre_entree2CS6');		
				addValue('Espece_entree2CS6');	
				addValue('Nb_entree2_espece7');		
				addValue('Famille_entree2CS7');	
				addValue('Genre_entree2CS7');		
				addValue('Espece_entree2CS7');	
				addValue('Nb_entree2_espece8');		
				addValue('Famille_entree2CS8');	
				addValue('Genre_entree2CS8');		
				addValue('Espece_entree2CS8');
				
				addValue('Famille_observe1');
				addValue('Genre_observe1');
				addValue('Espece_observe1');
				addValue('Famille_observe2');
				addValue('Genre_observe2');
				addValue('Espece_observe2');
				addValue('Famille_observe3');
				addValue('Genre_observe3');
				addValue('Espece_observe3');
				addValue('Nb_CS_morte1');
				addValue('Famille_morte1');
				addValue('Genre_morte1');
				addValue('Espece_morte1');
				addValue('Nb_CS_morte2');
				addValue('Famille_morte2');
				addValue('Genre_morte2');
				addValue('Espece_morte2');
				addValue('Nb_CS_morte3');
				addValue('Famille_morte3');
				addValue('Genre_morte3');
				addValue('Espece_morte3');
				addValue('Nb_CS_morte4');
				addValue('Famille_morte4');
				addValue('Genre_morte4');
				addValue('Espece_morte4');
				addValue('Nb_filet_sol');
				addValue('Remarque');
				addValue('IDFilet_1');
				addValue('Filet_sol_m2_1');	
				addValue('EntreeFilet_1');	
				addValue('HauteurFilet_1');
				$("#Filet_debut_1").val(result.rows[0].doc.Filet_debut_1);
				$("#Filet_fin_1").val(result.rows[0].doc.Filet_fin_1);
				addValue('Filet_temps_1');
				addValue('Nb_capture_filet_1');
				addValue('Nb_preleve_filet_1');
				addValue('IDFilet_2');
				addValue('Filet_sol_m2_2');	
				addValue('EntreeFilet_2');	
				addValue('HauteurFilet_2');
				$("#Filet_debut_2").val(result.rows[0].doc.Filet_debut_2);
				$("#Filet_fin_2").val(result.rows[0].doc.Filet_fin_2);
				addValue('Filet_temps_2');
				addValue('Nb_capture_filet_2');
				addValue('Nb_preleve_Filet_2');
				
				addValue('IDHarp_1');	
				addValue('EntreeHarp_1');	
				addValue('Harp_debut_1');	
				addValue('Harp_fin_1');	
				addValue('Harp_temps_1');	
				addValue('Nb_capture_harp_1');
				addValue('Nb_preleve_harp_1');
				addValue('NbHarp');
				addValue('IDHarp_2');	
				addValue('EntreeHarp_2');	
				addValue('Harp_debut_2');	
				addValue('Harp_fin_2');	
				addValue('Harp_temps_2');	
				addValue('Nb_capture_harp_2');
				addValue('Nb_preleve_harp_2');
				
				addValue('Saison');	
				addValue('Climat');	
				addValue('Precipitation');	
				addValue('Vent');	
				addValue('Lune');	
				addValue('Temperature_logger');	
				addValue('Humidite_logger');


	    	};
	
		}).catch(function (err) {
			console.log(err);
		});
	}
}


