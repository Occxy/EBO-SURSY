function chargement_des_chauves_souris_non_invasives_consultation() {
	showConnexionStatus();
	
    var table = searchParams.get('table');
    
	chargement_des_donnees(table);
}

function chargement_des_donnees(table) {

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
				
			function showValue(elementName) {
				var element = document.getElementById(elementName + '_value');
				element.innerHTML = result.rows[0].doc[elementName];
				element.style.color = "red";
			}
			
			showValue('Username');
			showValue('N_site');
			showValue('Pays');
			showValue('Region_collecte');
			showValue('Site_collecte');
			showValue('Environnement');
			showValue('Proximite_village_km');
			showValue('Lat_degre_dec');
			showValue('Latitude');
			showValue('Long_degre_dec');
			showValue('Longitude');
			showValue('Date');
			showValue('Equipe');
			showValue('Heure_debut');
			showValue('Heure_fin');
			showValue('Lieu_collecte');
			showValue('Type_site');
			showValue('Type_chauves_souris');
			showValue('Famille_1');
			showValue('Genre_1');
			showValue('Espece_1');
			showValue('Famille_2');
			showValue('Genre_2');
			showValue('Espece_2');
			showValue('Famille_3');
			showValue('Genre_3');
			showValue('Espece_3');
			showValue('Remarques');
								
			result.rows[0].doc.Echantillons.forEach(function(row){ 
				
				var tableRef = document.getElementById('example').getElementsByTagName('tbody')[0];
				var newRow   = tableRef.insertRow();
				var newCell  = newRow.insertCell(0);
				var newText  = document.createTextNode(row.N_identification_echantillon);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(1);
				var newText  = document.createTextNode(row.Type_echantillon);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(2);
				var newText  = document.createTextNode(row.Nbre_feces_par_tube);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(3);
				var newText  = document.createTextNode(row.Urine_methode);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(4);
				var newText  = document.createTextNode(row.Urine_papier_buvard_nbre_cercles);
				newCell.appendChild(newText);
			    
			});
			
		}
	
	}).catch(function (err) {
		console.log(err);
	});
}
