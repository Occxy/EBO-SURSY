function chargement_des_rongeurs() {
	showConnexionStatus();
	
    var option = searchParams.get('option');
    table = searchParams.get('table');
   
    
    /*if ((option == 1) || (option == 2)) {
    	modifier(table, option);
    }*/
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
	    		N_site.options[N_site.options.length] = new Option(row.doc.N_site + ' - ' + row.doc.Site_capture, row.doc.N_site/*row.id*/);
	    	});		
		}
		
		var sel = $('#N_site');
		var selected = sel.val(); // cache selected value, before reordering
		var opts_list = sel.find('option');
		opts_list.sort(function(a, b) { return $(a).text() > $(b).text() ? 1 : -1; });
		sel.html('').append(opts_list);
		sel.val(selected); 
			
		listeZone_capture();
			
	}).catch(function (err) {
		console.log(err);
	});	
		 

	
	    	
	    	
		
	   

	
}


function modifier(table, option) {
	
	var doc;
	if (option == 1) {
		doc = JSON.parse(localStorage.getItem('rongeursTablesData'));
		
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
		
		/*var Date = new Date(doc.Date);
		$('#Date').datepicker('setDate', Date);*/
		/*addValue('Province');
		addValue('Site');*/

	} else {
	
		var id = localStorage.getItem('ID_rongeur' + table);
		
		//alert(id)
		
		var debug;
		if (localStorage.getItem('debug') === null) {
			debug = '';
		} else {
			debug = localStorage.getItem('debug');
		};
		
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'rongeurs' + table + debug);
		} else {
			var DB = new PouchDB('rongeurs' + table + debug);
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
					element.value = result.rows[0].doc[elementName];
					try {
						if (onchange) {
							element.onchange();
						}
					} catch(err) {
					};
				}
				
				addValue('Num_rongeur');
				addValue('CODE_rongeur');
				addValue('NumMission_NumSite');
				addValue('N_site', true);
				
				addValue('J');
				addValue('Equipe');
				//addValue('addValue('Pays: Pays,
				/*addValue('Region');
				addValue('Arrondissement');
				addValue('Village');*/
				addValue('Num_piege');
				addValue('Type_piege');
				addValue('Zone_capture');
				addValue('Emplacement_piege');
				addValue('Detail_emplacement');
				addValue('Lat_degre_dec_Piege');
				addValue('Latitude_Piege');
				addValue('Long_degre_dec_Piege');
				addValue('Longitude_Piege');
				addValue('Contention');
				addValue('Preleveur');
				addValue('Autopsie');
				addValue('Identification_espece');
				addValue('Famille_terrain');
				addValue('Genre_terrain');
				addValue('Espece_terrain');
				addValue('Famille_labo');
				addValue('Genre_labo');
				addValue('Espece_labo');
				addValue('Sexe');
				addValue('Age');
				addValue('F_gestante');
				addValue('F_lactante');
				addValue('Nbtotal_paires_mamelles');
				addValue('N_mamelles_pectorales');
				addValue('N_mamelles_abdominales');
				addValue('N_mamelles_inguinales');
				addValue('Male_testicules_descendues');
				addValue('Male_longueur_testicules');
				addValue('Poids_sac_rongeur_g');
				addValue('Poids_sac_g');
				addValue('Poids_g');
				addValue('L_totale_corps_Ltc_mm');
				addValue('L_queue_mm');
				addValue('L_patte_arriere_Tib_mm');
				addValue('L_crane_mm');
				addValue('L_oreille_mm');
				addValue('Taille_yeux');
				addValue('Couleur_pelage_dorsal');
				addValue('Couleur_pelage_ventral');
				addValue('Photo');
				addValue('Remarques_anomalies');
				addValue('Relache_vivant', true);
				addValue('Cause_deces');
				addValue('Recapture', true);
				addValue('Comment_recapture');
				addValue('Euthanasie',true);
				addValue('Methode_eutha',true);
				addValue('Dosage_Ketamine_mL');
				addValue('Biopsie_oreille_BO');
				addValue('Ecouv_Salive_RNAl_SA');
				addValue('Ecouv_Urogenital_RNAl_URO');
				addValue('Urine_RNAl_UR');
				addValue('Ecouv_rectal_RNAl_RE');
				addValue('Feces_RNAl_FE');
				addValue('Sang_DBS_nb_cercles');
				addValue('Ectoparasites_Tiques_Eth_EP_TI');
				addValue('Ectoparasites_Puces_Eth_EP_PU');
				addValue('Poils_ethanol_PO');
				addValue('Autres_echantillons');
				addValue('Autres_echantillons_details');
				addValue('Coeur_RNAl_CO');
				addValue('Poumon_RNAl_PO');
				addValue('Foie_RNAl_FO');
				addValue('Rate_RNAl_RA');
				addValue('Rein_RNAl_RN');
				addValue('Testicule_RNAl_TE');
				addValue('Ovaire_RNAl_OV');
				addValue('Embryon_RNAl_EM');
				addValue('F_gestante_nb_embryons');
				addValue('Intestins_RNAl_INT');
				addValue('Peau_RNAl_PE');
				addValue('Cerveau_RNAl_CE');
				addValue('Autre_Organe_RNAl');
				addValue('Details_autre_organe_RNAl');
				addValue('Remarques_echantillons');
				
				
				var dateString = result.rows[0].doc.Date; // Format "jj/mm/aaaa", par exemple "21/08/2023"
				var dateParts = dateString.split('/');
				var day = parseInt(dateParts[0], 10);
				var month = parseInt(dateParts[1], 10);
				var year = parseInt(dateParts[2], 10);

				// Crée un objet Date en utilisant le format "aaaa, mm, jj"
				var stringDate = new Date(year, month - 1, day);
				
				$('.input-datepicker').datepicker({
		        	language: 'fr',
		        	autoclose: true
		      	});
				$('#Date').datepicker('setDate', stringDate);
				
				
				var Famille = document.getElementById("Famille_terrain");
				var Genre = document.getElementById("Genre_terrain");
				var Espece = document.getElementById("Espece_terrain");
				try {
					select_change('rongeurs_espece_transvihmi_cameroun', Famille_terrain, Genre_terrain, Espece_terrain, result.rows[0].doc.Famille_terrain, result.rows[0].doc.Genre_terrain, result.rows[0].doc.Espece_terrain);
				}
				catch(err) {
				};
				
				var Famille = document.getElementById("Famille_labo");
				var Genre = document.getElementById("Genre_labo");
				var Espece = document.getElementById("Espece_labo");
				try {
					select_change('rongeurs_espece_transvihmi_cameroun', Famille_labo, Genre_labo, Espece_labo, result.rows[0].doc.Famille_labo, result.rows[0].doc.Genre_labo, result.rows[0].doc.Espece_labo);
				}
				catch(err) {
				};
				
				
					  
	    	};
	
		}).catch(function (err) {
			console.log(err);
		});
	}
}

function listeZone_capture() {
	var Zone_capture = document.getElementById("Zone_capture");	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'rongeurs_site_capture_transvihmi_cameroun' + debug);
	} else {
		var DB = new PouchDB('rongeurs_site_capture_transvihmi_cameroun' + debug);

	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var zone_captureTablesData = JSON.parse(JSON.stringify(result));
    		
    		zone_captureTablesData.rows.forEach(function(row){  
    			//alert(row.doc.Zone_capture);
    			Zone_capture.options[Zone_capture.options.length] = new Option(row.doc.Zone_capture, row.doc.Zone_capture);
    			//alert(row.doc.Zone_capture)
    		});	
    
    		listeCouleur_pelage_dorsal()
		}
	}).catch(function (err) {
		console.log(err);
	});
}

function listeCouleur_pelage_dorsal() {
	var Couleur_pelage_dorsal = document.getElementById("Couleur_pelage_dorsal");	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'rongeurs_couleur_pelage_dorsal_transvihmi_cameroun' + debug);
	} else {
		var DB = new PouchDB('rongeurs_couleur_pelage_dorsal_transvihmi_cameroun' + debug);

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
    			//alert(row.doc.Couleur_pelage_dorsal)
    		});		    
    		Couleur_pelage_dorsal.options[Couleur_pelage_dorsal.options.length] = new Option("Manquant", "Manquant");
    
    		listeCouleur_pelage_ventral()
		}
	}).catch(function (err) {
		console.log(err);
	});
}

function listeCouleur_pelage_ventral() {
	var Couleur_pelage_ventral = document.getElementById("Couleur_pelage_ventral");	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'rongeurs_couleur_pelage_ventral_transvihmi_cameroun' + debug);
	} else {
		var DB = new PouchDB('rongeurs_couleur_pelage_ventral_transvihmi_cameroun' + debug);

	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var couleur_pelage_ventralTablesData = JSON.parse(JSON.stringify(result));
    		
    		couleur_pelage_ventralTablesData.rows.forEach(function(row){  
    			//alert(row.doc.Couleur_pelage_ventral);
    			Couleur_pelage_ventral.options[Couleur_pelage_ventral.options.length] = new Option(row.doc.Couleur_pelage_ventral, row.doc.Couleur_pelage_ventral);
    			//alert(row.doc.Couleur_pelage_ventral)
    		});		    
    		Couleur_pelage_ventral.options[Couleur_pelage_ventral.options.length] = new Option("Manquant", "Manquant");
    
    		listeFamille()
		}
	}).catch(function (err) {
		console.log(err);
	});
}

function listeFamille() {
	
	
	var Famille_terrain = document.getElementById("Famille_terrain");
	var Famille_labo = document.getElementById("Famille_labo");
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'rongeurs_espece_transvihmi_cameroun' + debug);
	} else {
		var DB = new PouchDB('rongeurs_espece_transvihmi_cameroun' + debug);
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
	   		});	
	   		Famille_terrain.options[Famille_terrain.options.length] = new Option("Manquant", "Manquant");
	   		Famille_labo.options[Famille_labo.options.length] = new Option("Manquant", "Manquant");
	   		
	   		if ((option == 1) || (option == 2)) {
				modifier(table, option);
	  		};
			
		}
	}).catch(function (err) {
		console.log(err);
	});
}
