function chargement_de_la_faune() {
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

		    	if ((option == 1) || (option == 2)) {
					modifier(table, option);
		  		};
			}
		}).catch(function (err) {
			console.log(err);
		});
	};
	
	
}


function modifier(table, option) {
	

	var doc;
	if (option == 1) {
		doc = JSON.parse(localStorage.getItem('fauneTablesData'));
		
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
		
		var id = localStorage.getItem('ID_faune' + table);

		var debug;
		if (localStorage.getItem('debug') === null) {
			debug = '';
		} else {
			debug = localStorage.getItem('debug');
		};
		
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'faune' + table + debug);
		} else {
			var DB = new PouchDB('faune' + table + debug);
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
				addValue('ID_NI_faune');
				
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
				
				$('#Date_collecte').datepicker('setDate', result.rows[0].doc.Date_collecte);
				addValue('Equipe');
				addValue('Espece_animale');
				addValue('Localisation');
					  
	    	};
	    	
		}).catch(function (err) {
			console.log(err);
		});
	}
}


