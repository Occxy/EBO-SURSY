function chargement_des_missions_consultation() {
	showConnexionStatus();
	
    var table = searchParams.get('table');
    
	chargement_des_donnees(table);
}

function chargement_des_donnees(table) {

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
		var DB = new PouchDB('donnees_mission' + table + debug);
	};
	DB.allDocs({  		
		keys: [id],
		include_docs: true,
		attachments: true
	}).then(function (result) {
	
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
			console.log(JSON.stringify(result.rows));
				
			function showValue(elementName) {
				var element = document.getElementById(elementName + '_value');
				element.innerHTML = result.rows[0].doc[elementName];
				element.style.color = "red";
			}
			
			showValue('Username');
			showValue('Date_debut');
			showValue('Date_fin');
			showValue('Equipe');
			showValue('ID_CS_debut');
			showValue('ID_CS_fin');
			showValue('ID_non_invasif_debut');
			showValue('ID_non_invasif_fin');
			showValue('N_site');			
			showValue('Pays');
			showValue('Region_capture');
			showValue('Site_capture');
			showValue('Environnement');
			showValue('Lat_degre_dec');
			showValue('Latitude');
			showValue('Long_degre_dec');
			showValue('Longitude');
			showValue('Proximite_village_km');
			showValue('Type');
			showValue('Type_Roost'); 
			showValue('ID_genet_espece');	
			showValue('Proximite_eau'); 	
			showValue('Hauteur_canope');	
			showValue('Description_site');
			showValue('Espece_animale_sauvage');	
			showValue('Espece_animale_domestique');	
			showValue('Interaction');	
			showValue('Description_interaction_animaux');	
			showValue('Activite_humaine');
			
			/*var Activite_humaine = doc['Activite_humaine'];
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
			};*/
			
			showValue('Description_interaction_homme');
			showValue('Camera_trap');
			showValue('Heure_debut_camera');
			showValue('Heure_fin_camera');
			//showValue('Phenologie = Phenologie*/
								
			result.rows[0].doc.Phenologie.forEach(function(row){ 
				
				var tableRef = document.getElementById('example').getElementsByTagName('tbody')[0];
				var newRow   = tableRef.insertRow();
				var newCell  = newRow.insertCell(0);
				var newText  = document.createTextNode(row.Famille);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(1);
				var newText  = document.createTextNode(row.Genre);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(2);
				var newText  = document.createTextNode(row.Espece);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(3);
				var newText  = document.createTextNode(row.Pheno_espece);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(4);
				var newText  = document.createTextNode(row.Statut_espece);
				newCell.appendChild(newText);
			    
			});
			
		}
	
	}).catch(function (err) {
		console.log(err);
	});
}
