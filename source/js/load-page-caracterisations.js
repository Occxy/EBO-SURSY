function chargement_des_caracterisations() {
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

	
}


function modifier(table, option) {
	
	var doc;
	if (option == 1) {
		doc = JSON.parse(localStorage.getItem('caracterisationsTablesData'));
		
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
			}
		}
		
		$('#Date').datepicker('setDate', doc.Date);
		//addValue('Equipe');
		addValue('Pays');
		addValue('Prefecture');
		addValue('Sous_prefecture');
		addValue('Ville_village');
		addValue('Site_capture');
		//addValue('Lieu_capture');
		addValue('Environnement');
		addValue('Lat_degre_dec');
		addValue('Latitude');
		addValue('Long_degre_dec');
		addValue('Longitude');
		addValue('Proximite_village_km');
		addValue('Proximite_source_m');	
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
		addValue('Presence_eau_1');	
		addValue('Presence_annuelle_eau_1');	
		addValue('Presence_lac_souterrain_1');	
		addValue('Presence_riviere_souterraine_1');	
		addValue('Presence_faune_aquatique_1');
		addValue('Espece_aquatique_1');	
		addValue('Autre_faune_1');
		addValue('Chambre_longueur_2');	
		addValue('Chambre_largeur_2');
		addValue('Chambre_hauteur_2');
		addValue('Presence_eau_2');	
		addValue('Presence_annuelle_eau_2');	
		addValue('Presence_lac_souterrain_2');	
		addValue('Presence_riviere_souterraine_2');	
		addValue('Presence_faune_aquatique_2');
		addValue('Espece_aquatique_2');	
		addValue('Autre_faune_2');
		addValue('Chambre_longueur_3');	
		addValue('Chambre_largeur_3');
		addValue('Chambre_hauteur_3');
		addValue('Presence_eau_3');	
		addValue('Presence_annuelle_eau_3');	
		addValue('Presence_lac_souterrain_3');	
		addValue('Presence_riviere_souterraine_3');	
		addValue('Presence_faune_aquatique_3');
		addValue('Espece_aquatique_3');	
		addValue('Autre_faune_3');
		addValue('Chambre_longueur_4');	
		addValue('Chambre_largeur_4');
		addValue('Chambre_hauteur_4');
		addValue('Presence_eau_4');	
		addValue('Presence_annuelle_eau_4');	
		addValue('Presence_lac_souterrain_4');	
		addValue('Presence_riviere_souterraine_4');	
		addValue('Presence_faune_aquatique_4');
		addValue('Espece_aquatique_4');	
		addValue('Autre_faune_4');

	} else {
	
		var id = localStorage.getItem('ID_caracterisations' + table);
		
		var debug;
		if (localStorage.getItem('debug') === null) {
			debug = '';
		} else {
			debug = localStorage.getItem('debug');
		};
		
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'caracterisations_grottes' + table + debug);
		} else {
			var DB = new PouchDB('caracterisations_grottes' + table + debug);
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
				
				//addValue('Date');
				$('#Date').datepicker('setDate', result.rows[0].doc.Date);
				//addValue('Equipe');
				addValue('Pays');
				addValue('Prefecture');
				addValue('Sous_prefecture');
				addValue('Ville_village');
				addValue('Site_capture');
				//addValue('Lieu_capture');
				addValue('Environnement');
				addValue('Lat_degre_dec');
				addValue('Latitude');
				addValue('Long_degre_dec');
				addValue('Longitude');
				addValue('Proximite_village_km');
				addValue('Proximite_source_m');	
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
				addValue('Presence_eau_1');	
				addValue('Presence_annuelle_eau_1');	
				addValue('Presence_lac_souterrain_1');	
				addValue('Presence_riviere_souterraine_1');	
				addValue('Presence_faune_aquatique_1');
				addValue('Espece_aquatique_1');	
				addValue('Autre_faune_1');
				addValue('Chambre_longueur_2');	
				addValue('Chambre_largeur_2');
				addValue('Chambre_hauteur_2');
				addValue('Presence_eau_2');	
				addValue('Presence_annuelle_eau_2');	
				addValue('Presence_lac_souterrain_2');	
				addValue('Presence_riviere_souterraine_2');	
				addValue('Presence_faune_aquatique_2');
				addValue('Espece_aquatique_2');	
				addValue('Autre_faune_2');
				addValue('Chambre_longueur_3');	
				addValue('Chambre_largeur_3');
				addValue('Chambre_hauteur_3');
				addValue('Presence_eau_3');	
				addValue('Presence_annuelle_eau_3');	
				addValue('Presence_lac_souterrain_3');	
				addValue('Presence_riviere_souterraine_3');	
				addValue('Presence_faune_aquatique_3');
				addValue('Espece_aquatique_3');	
				addValue('Autre_faune_3');
				addValue('Chambre_longueur_4');	
				addValue('Chambre_largeur_4');
				addValue('Chambre_hauteur_4');
				addValue('Presence_eau_4');	
				addValue('Presence_annuelle_eau_4');	
				addValue('Presence_lac_souterrain_4');	
				addValue('Presence_riviere_souterraine_4');	
				addValue('Presence_faune_aquatique_4');
				addValue('Espece_aquatique_4');	
				addValue('Autre_faune_4');
				
				
					  
	    	};
	
		}).catch(function (err) {
			console.log(err);
		});
	}
}


