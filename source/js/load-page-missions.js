function chargement_des_missions() {
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
		doc = JSON.parse(localStorage.getItem('missionTablesData'));
		
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
		
		
		addValue('ID_CS_debut');
		addValue('ID_CS_fin');
		addValue('ID_non_invasif_debut');
		addValue('ID_non_invasif_fin');
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
		addValue('Type');
		addValue('Type_Roost'); 
		addValue('ID_genet_espece');	
		addValue('Proximite_eau'); 	
		addValue('Hauteur_canope');	
		addValue('Description_site');
		addValue('Espece_animale_sauvage');	
		addValue('Espece_animale_domestique');	
		addValue('Interaction');	
		addValue('Description_interaction_animaux');	
		//addValue('Activite_humaine = String(Activite_humaine);	
		
		var Activite_humaine = doc['Activite_humaine'];
		Activite_humaine = Activite_humaine.trim().split(",");
		
		for (var i=0; i<Activite_humaine.length; i++) {
			console.log("'" + Activite_humaine[i].trim() + "'");
			var Activite_humaine_string = Activite_humaine[i].trim();
			
			var l1 = document.getElementById("test");
			var l2 = l1.childNodes;
			for (var j=0;j<l2.length;j++) {
				var Element = document.getElementById('Activite_humaine' + j); 
				if (Element.value === Activite_humaine_string) {
					Element.checked = true;
				};
			};
		};
		
		addValue('Description_interaction_homme');
		addValue('Camera_trap');
		addValue('Heure_debut_camera');
		addValue('Heure_fin_camera');
		//addValue('Phenologie = Phenologie
		
		var row =[];
		
		var table = document.getElementById('example');
        var rowCount = table.rows.length;
        
        try {
	        if (rowCount > 1) {
		        for (i=1; i<rowCount; i++){
		            var selects = table.rows.item(i).getElementsByTagName("select");
		            //console.log(selects[0].value + ' - ' + selects[1].value + ' - ' + selects[2].value + ' - ' + selects[3].value + ' - ' + selects[4].value);
		            row[i-1] = new addPhenologie(selects[0].value, selects[1].value, selects[2].value, selects[3].value, selects[4].value);
				}; 
	        };
	        var Phenologie = JSON.stringify(row);
			Phenologie = JSON.parse(Phenologie);
		}catch(err) {
			var Phenologie = JSON.stringify(row);
			Phenologie = JSON.parse(Phenologie);
		};
	} else {
	
		var id = localStorage.getItem('ID_donnees_mission' + table);
		
		var debug;
		if (localStorage.getItem('debug') === null) {
			debug = '';
		} else {
			debug = localStorage.getItem('debug');
		};
		
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'donnees_mission' + table + debug);
		} else {
			var DB = new PouchDB('donnees_mission'  + table + debug);
		};
		DB.allDocs({  		
				keys: [id],
			include_docs: true,
			attachments: true
		}).then(function (result) {
	
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
				console.log(JSON.stringify(result.rows));
					
				var Date_debut = document.getElementById("Date_debut");
				var Date_fin = document.getElementById("Date_fin");
				Date_debut.value = result.rows[0].doc.Date_debut;
				Date_fin.value = result.rows[0].doc.Date_fin;
				
				
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
				
				
				addValue('ID_CS_debut');
				addValue('ID_CS_fin');
				addValue('ID_non_invasif_debut');
				addValue('ID_non_invasif_fin');
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
				addValue('Type');
				addValue('Type_Roost'); 
				addValue('ID_genet_espece');	
				addValue('Proximite_eau'); 	
				addValue('Hauteur_canope');	
				addValue('Description_site');
				addValue('Espece_animale_sauvage');	
				addValue('Espece_animale_domestique');	
				addValue('Interaction');	
				addValue('Description_interaction_animaux');	
				//addValue('Activite_humaine = String(Activite_humaine);	
				
				var Activite_humaine = result.rows[0].doc.Activite_humaine;
				Activite_humaine = Activite_humaine.trim().split(",");
				
				for (var i=0; i<Activite_humaine.length; i++) {
					console.log("'" + Activite_humaine[i].trim() + "'");
					var Activite_humaine_string = Activite_humaine[i].trim();
					
					var l1 = document.getElementById("test");
					var l2 = l1.childNodes;
					for (var j=0;j<l2.length;j++) {
						var Element = document.getElementById('Activite_humaine' + j); 
						if (Element.value === Activite_humaine_string) {
							Element.checked = true;
						};
					};
				};
				
				addValue('Description_interaction_homme');
				addValue('Camera_trap');
				addValue('Heure_debut_camera');
				addValue('Heure_fin_camera');
				//addValue('Phenologie = Phenologie
				
				var row =[];
				
				var table = document.getElementById('example');
		        var rowCount = table.rows.length;
		        
		        try {
			        if (rowCount > 1) {
				        for (i=1; i<rowCount; i++){
				            var selects = table.rows.item(i).getElementsByTagName("select");
				            //console.log(selects[0].value + ' - ' + selects[1].value + ' - ' + selects[2].value + ' - ' + selects[3].value + ' - ' + selects[4].value);
				            row[i-1] = new addPhenologie(selects[0].value, selects[1].value, selects[2].value, selects[3].value, selects[4].value);
						}; 
			        };
			        var Phenologie = JSON.stringify(row);
					Phenologie = JSON.parse(Phenologie);
				}catch(err) {
					var Phenologie = JSON.stringify(row);
					Phenologie = JSON.parse(Phenologie);
				};
				
				//addValue('Phenologie', option);
					  
	    	};
	
		}).catch(function (err) {
			console.log(err);
		});
	}
}