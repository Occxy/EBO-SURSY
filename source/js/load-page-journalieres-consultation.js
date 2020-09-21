function chargement_des_donnees_journalieres_consultation() {
	showConnexionStatus();
	
    var table = searchParams.get('table');
    
	chargement_des_donnees(table);
}

function chargement_des_donnees(table) {

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
				
			function showValue(elementName) {
				var element = document.getElementById(elementName + '_value');
				element.innerHTML = result.rows[0].doc[elementName];
				element.style.color = "red";
			}
			
			showValue('Username');
			showValue('Date');
			showValue('Equipe');
			showValue('ID_CS_preleve_debut');
			showValue('ID_CS_preleve_fin');
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
			showValue('Roost_diurne');
			showValue('Presence_diurne');
			
			result.rows[0].doc.TaxonomieDiurne.forEach(function(row){ 
				
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
			    
			});
			
			
			showValue('Methode_comptage_diurne');
			showValue('Resultat_comptage_diurne_1');
			showValue('Resultat_comptage_diurne_2');
			showValue('Utilisation_site_nocturne');
			showValue('Aliment_consomme');
			showValue('Presence_nocturne');
			
			result.rows[0].doc.TaxonomieNocturne.forEach(function(row){ 
				
				var tableRef = document.getElementById('example2').getElementsByTagName('tbody')[0];
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
			    
			});
			
			showValue('Methode_comptage_nocturne');
			showValue('Resultat_comptage_nocturne_1');
			showValue('Resultat_comptage_nocturne_2');
			
			showValue('Vocalisations');
			showValue('Famille_vocalisations');
			showValue('Genre_vocalisations');
			showValue('Espece_vocalisations');
			
			showValue('Parade_sexuelle');
			showValue('Copulations');
			showValue('Famille_copulations');
			showValue('Genre_copulations');
			showValue('Espece_copulations');
						
			showValue('Suitee');
			showValue('Famille_suitee1');
			showValue('Genre_suitee1');
			showValue('Espece_suitee1');
			showValue('Famille_suitee2');
			showValue('Genre_suitee2');
			showValue('Espece_suitee2');
			showValue('Famille_suitee3');
			showValue('Genre_suitee3');
			showValue('Espece_suitee3');
			showValue('Famille_suitee4');
			showValue('Genre_suitee4');
			showValue('Espece_suitee4');
										
			showValue('Agressions');
			showValue('Famille_agressions');
			showValue('Genre_agressions');
			showValue('Espece_agressions');	
			
			showValue('Gestante');
			showValue('Famille_gestante1');
			showValue('Genre_gestante1');
			showValue('Espece_gestante1');
			showValue('Famille_gestante2');
			showValue('Genre_gestante2');
			showValue('Espece_gestante2');
			showValue('Famille_gestante3');
			showValue('Genre_gestante3');
			showValue('Espece_gestante3');
			showValue('Famille_gestante4');
			showValue('Genre_gestante4');
			showValue('Espece_gestante4');
			
			showValue('Lactante');
			showValue('Famille_lactante1');
			showValue('Genre_lactante1');
			showValue('Espece_lactante1');
			showValue('Famille_lactante2');
			showValue('Genre_lactante2');
			showValue('Espece_lactante2');
			showValue('Famille_lactante3');
			showValue('Genre_lactante3');
			showValue('Espece_lactante3');
			showValue('Famille_lactante4');
			showValue('Genre_lactante4');
			showValue('Espece_lactante4');
							
			showValue('Filet_canopee_nb_7');
			showValue('Filet_canopee_m2_7');
			
			result.rows[0].doc.FiletCanopee_7.forEach(function(row){ 
				
				var tableRef = document.getElementById('example3').getElementsByTagName('tbody')[0];
				var newRow   = tableRef.insertRow();
				var newCell  = newRow.insertCell(0);
				var newText  = document.createTextNode(row.NumFilet);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(1);
				var newText  = document.createTextNode(row.LongueurFilet);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(2);
				var newText  = document.createTextNode(row.HauteurFilet);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(3);
				var newText  = document.createTextNode(row.Lat_degre_decFilet);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(4);
				var newText  = document.createTextNode(row.LatitudeFilet);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(5);
				var newText  = document.createTextNode(row.Long_degre_decFilet);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(6);
				var newText  = document.createTextNode(row.LongitudeFilet);
				newCell.appendChild(newText);
			    
			});
			
			showValue('Filet_canopee_nb_20');
			showValue('Filet_canopee_m2_20');
			
			result.rows[0].doc.FiletCanopee_20.forEach(function(row){ 
				
				var tableRef = document.getElementById('example4').getElementsByTagName('tbody')[0];
				var newRow   = tableRef.insertRow();
				var newCell  = newRow.insertCell(0);
				var newText  = document.createTextNode(row.NumFilet);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(1);
				var newText  = document.createTextNode(row.LongueurFilet);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(2);
				var newText  = document.createTextNode(row.HauteurFilet);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(3);
				var newText  = document.createTextNode(row.Lat_degre_decFilet);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(4);
				var newText  = document.createTextNode(row.LatitudeFilet);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(5);
				var newText  = document.createTextNode(row.Long_degre_decFilet);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(6);
				var newText  = document.createTextNode(row.LongitudeFilet);
				newCell.appendChild(newText);
			    
			});
			
			showValue('Filet_sol_nb');
			showValue('Filet_sol_m2');
			
			result.rows[0].doc.FiletSol.forEach(function(row){ 
				
				var tableRef = document.getElementById('example5').getElementsByTagName('tbody')[0];
				var newRow   = tableRef.insertRow();
				var newCell  = newRow.insertCell(0);
				var newText  = document.createTextNode(row.NumFilet);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(1);
				var newText  = document.createTextNode(row.LongueurFilet);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(2);
				var newText  = document.createTextNode(row.HauteurFilet);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(3);
				var newText  = document.createTextNode(row.Lat_degre_decFilet);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(4);
				var newText  = document.createTextNode(row.LatitudeFilet);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(5);
				var newText  = document.createTextNode(row.Long_degre_decFilet);
				newCell.appendChild(newText);
				var newCell  = newRow.insertCell(6);
				var newText  = document.createTextNode(row.LongitudeFilet);
				newCell.appendChild(newText);
			    
			});
			
			showValue('Filet_debut');
			showValue('Filet_fin');	
			showValue('Filet_temps');
			showValue('Filet_capture_nb');
			showValue('Harp_debut');
			showValue('Harp_fin');
			showValue('Harp_temps');
			showValue('Harpe_nb');
			showValue('Saison');
			showValue('Climat');
			showValue('Autre_climat');
			showValue('Precipitation');
			showValue('Vent');
			showValue('Lune');
			showValue('Temperature_logger');
			showValue('Humidite_logger');
						
		}
	
	}).catch(function (err) {
		console.log(err);
	});
}
