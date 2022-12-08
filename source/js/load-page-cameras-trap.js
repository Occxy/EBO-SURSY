function chargement_des_cameras_trap() {
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
		doc = JSON.parse(localStorage.getItem('cameras_trapTablesData'));
		
		function addValue(elementName, onchange) {
			var element = document.getElementById(elementName);
			if (elementName == 'Sous_prefecture') {
				elementName = 'Sous-prefecture';
			} else if (elementName == 'Ville_village') {
				elementName = 'Ville/village';
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
		
		addValue('Equipe');
		
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
		
		addValue('ID_camera_1');	
		addValue('NumSD_inseree_1');	
		addValue('NumSD_remplacee_1');	
		$('#Date_debut_camera_1').datepicker('setDate', doc.Date_debut_camera_1);
		$("#Heure_debut_camera_1").val(doc.Heure_debut_camera_1);
		addValue('Changement_emplacement_camera_1');	
		addValue('Emplacement_camera_1');	
		addValue('NumEntree_camera_1');
		addValue('Hauteur_camera_1');	
		addValue('Support_camera_1');	
		addValue('Distance_camera_entree_1');	
		addValue('Presence_autre_camera_1');	
		addValue('Distance_camera_camera_1');	
		addValue('Changement_batterie_camera_1');
		addValue('ID_camera_2');	
		addValue('NumSD_inseree_2');	
		addValue('NumSD_remplacee_2');	
		$('#Date_debut_camera_2').datepicker('setDate', doc.Date_debut_camera_2);
		$("#Heure_debut_camera_2").val(doc.Heure_debut_camera_2);
		addValue('Changement_emplacement_camera_2');	
		addValue('Emplacement_camera_2');	
		addValue('NumEntree_camera_2');
		addValue('Hauteur_camera_2');	
		addValue('Support_camera_2');	
		addValue('Distance_camera_entree_2');	
		addValue('Presence_autre_camera_2');	
		addValue('Distance_camera_camera_2');	
		addValue('Changement_batterie_camera_2');
		addValue('ID_camera_3');	
		addValue('NumSD_inseree_3');	
		addValue('NumSD_remplacee_3');	
		$('#Date_debut_camera_3').datepicker('setDate', doc.Date_debut_camera_3);
		$("#Heure_debut_camera_3").val(doc.Heure_debut_camera_3);
		addValue('Changement_emplacement_camera_3');	
		addValue('Emplacement_camera_3');	
		addValue('NumEntree_camera_3');
		addValue('Hauteur_camera_3');	
		addValue('Support_camera_3');	
		addValue('Distance_camera_entree_3');	
		addValue('Presence_autre_camera_3');	
		addValue('Distance_camera_camera_3');	
		addValue('Changement_batterie_camera_3');
		addValue('ID_camera_4');	
		addValue('NumSD_inseree_4');	
		addValue('NumSD_remplacee_4');	
		$('#Date_debut_camera_4').datepicker('setDate', doc.Date_debut_camera_4);
		$("#Heure_debut_camera_4").val(doc.Heure_debut_camera_4);
		addValue('Changement_emplacement_camera_4');	
		addValue('Emplacement_camera_4');	
		addValue('NumEntree_camera_4');
		addValue('Hauteur_camera_4');	
		addValue('Support_camera_4');	
		addValue('Distance_camera_entree_4');	
		addValue('Presence_autre_camera_4');	
		addValue('Distance_camera_camera_4');	
		addValue('Changement_batterie_camera_4');

	} else {
	
		var id = localStorage.getItem('ID_cameras_trap' + table);
		
		var debug;
		if (localStorage.getItem('debug') === null) {
			debug = '';
		} else {
			debug = localStorage.getItem('debug');
		};
		
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'cameras_trap' + table + debug);
		} else {
			var DB = new PouchDB('cameras_trap' + table + debug);
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
					if (elementName == 'Sous_prefecture') {
						elementName = 'Sous-prefecture';
					} else if (elementName == 'Ville_village') {
						elementName = 'Ville/village';
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
				
				addValue('Equipe');		
				
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
				
				addValue('ID_camera_1');
				addValue('NumSD_inseree_1');	
				addValue('NumSD_remplacee_1');	
				$('#Date_debut_camera_1').datepicker('setDate', result.rows[0].doc.Date_debut_camera_1);
				$("#Heure_debut_camera_1").val(result.rows[0].doc.Heure_debut_camera_1);
				addValue('Changement_emplacement_camera_1');	
				addValue('Emplacement_camera_1');	
				addValue('NumEntree_camera_1');
				addValue('Hauteur_camera_1');	
				addValue('Support_camera_1');	
				addValue('Distance_camera_entree_1');	
				addValue('Presence_autre_camera_1');	
				addValue('Distance_camera_camera_1');	
				addValue('Changement_batterie_camera_1');
				addValue('ID_camera_2');	
				addValue('NumSD_inseree_2');	
				addValue('NumSD_remplacee_2');	
				$('#Date_debut_camera_2').datepicker('setDate', result.rows[0].doc.Date_debut_camera_2);
				$("#Heure_debut_camera_2").val(result.rows[0].doc.Heure_debut_camera_2);
				addValue('Changement_emplacement_camera_2');	
				addValue('Emplacement_camera_2');	
				addValue('NumEntree_camera_2');
				addValue('Hauteur_camera_2');	
				addValue('Support_camera_2');	
				addValue('Distance_camera_entree_2');	
				addValue('Presence_autre_camera_2');	
				addValue('Distance_camera_camera_2');	
				addValue('Changement_batterie_camera_2');
				addValue('ID_camera_3');	
				addValue('NumSD_inseree_3');	
				addValue('NumSD_remplacee_3');	
				$('#Date_debut_camera_3').datepicker('setDate', result.rows[0].doc.Date_debut_camera_3);
				$("#Heure_debut_camera_3").val(result.rows[0].doc.Heure_debut_camera_3);
				addValue('Changement_emplacement_camera_3');	
				addValue('Emplacement_camera_3');	
				addValue('NumEntree_camera_3');
				addValue('Hauteur_camera_3');	
				addValue('Support_camera_3');	
				addValue('Distance_camera_entree_3');	
				addValue('Presence_autre_camera_3');	
				addValue('Distance_camera_camera_3');	
				addValue('Changement_batterie_camera_3');
				addValue('ID_camera_4');	
				addValue('NumSD_inseree_4');	
				addValue('NumSD_remplacee_4');	
				$('#Date_debut_camera_4').datepicker('setDate', result.rows[0].doc.Date_debut_camera_4);
				$("#Heure_debut_camera_4").val(result.rows[0].doc.Heure_debut_camera_4);
				addValue('Changement_emplacement_camera_4');	
				addValue('Emplacement_camera_4');	
				addValue('NumEntree_camera_4');
				addValue('Hauteur_camera_4');	
				addValue('Support_camera_4');	
				addValue('Distance_camera_entree_4');	
				addValue('Presence_autre_camera_4');	
				addValue('Distance_camera_camera_4');	
				addValue('Changement_batterie_camera_4');

				/*addValue('Proximite_source_m');	
				addValue('Description_entree');
				addValue('Nb_entree');	
				addValue('Entree_longueur_1');	
				addValue('Entree_largeur_1');	
				addValue('Entree_hauteur_1');
				addValue('Entree_longueur_2');	
				addValue('Entree_largeur_2');	
				addValue('Entree_hauteur_2');
				addValue('Entree_longueur_3');	
				addValue('Entree_largeur_3');	
				addValue('Entree_hauteur_3');
				addValue('Presence_puit_sortie', true);
				addValue('Puit_longueur');	
				addValue('Puit_largeur');	
				addValue('Puit_hauteur');
				addValue('Description_grotte');
				addValue('Nb_chambre');
				addValue('Chambre_longueur_1');	
				addValue('Chambre_largeur_1');
				addValue('Chambre_hauteur_1');
				addValue('Presence_eau_1', true);	
				addValue('Presence_annuelle_eau_1', true);	
				addValue('Presence_lac_souterrain_1', true);	
				addValue('Presence_riviere_souterraine_1', true);	
				addValue('Presence_faune_aquatique_1', true);
				addValue('Espece_aquatique_1');	
				addValue('Autre_faune_1');
				addValue('Chambre_longueur_2');	
				addValue('Chambre_largeur_2');
				addValue('Chambre_hauteur_2');
				addValue('Presence_eau_2', true);	
				addValue('Presence_annuelle_eau_2', true);	
				addValue('Presence_lac_souterrain_2', true);	
				addValue('Presence_riviere_souterraine_2', true);	
				addValue('Presence_faune_aquatique_2', true);
				addValue('Espece_aquatique_2');	
				addValue('Autre_faune_2');
				addValue('Chambre_longueur_3');	
				addValue('Chambre_largeur_3');
				addValue('Chambre_hauteur_3');
				addValue('Presence_eau_3', true);	
				addValue('Presence_annuelle_eau_3', true);	
				addValue('Presence_lac_souterrain_3', true);	
				addValue('Presence_riviere_souterraine_3', true);	
				addValue('Presence_faune_aquatique_3', true);
				addValue('Espece_aquatique_3');	
				addValue('Autre_faune_3');
				addValue('Chambre_longueur_4');	
				addValue('Chambre_largeur_4');
				addValue('Chambre_hauteur_4');
				addValue('Presence_eau_4', true);	
				addValue('Presence_annuelle_eau_4', true);	
				addValue('Presence_lac_souterrain_4', true);	
				addValue('Presence_riviere_souterraine_4', true);	
				addValue('Presence_faune_aquatique_4', true);
				addValue('Espece_aquatique_4');	
				addValue('Autre_faune_4');*/
				
				
					  
	    	};
	
		}).catch(function (err) {
			console.log(err);
		});
	}
}


