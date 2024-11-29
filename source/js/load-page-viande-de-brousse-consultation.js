function chargement_des_viandes_de_brousse_consultation() {
	showConnexionStatus();
	
    var table = searchParams.get('table');
    
	chargement_des_donnees(table);
}

function chargement_des_donnees(table) {

	var id = localStorage.getItem('ID_viande_de_brousse' + table);
	
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'viande_de_brousse' + table + debug);
	} else {
		var DB = new PouchDB('viande_de_brousse' + table + debug);
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
			showValue('N_identification_echantillon');		
			showValue('Date');
			showValue('Enqueteur');
			
			showValue('N_site');
			showValue('Pays');
		  	showValue('Region_collecte');
		  	showValue('Site_collecte');
		  	showValue('Environnement');
		  	showValue('Latitude');
		  	showValue('Lat_degre_dec');
		  	showValue('Longitude');
		  	showValue('Long_degre_dec');
		  	
		  	showValue('Lieu_collecte');
		  	showValue('Preleve_chez');
		  	showValue('Tue_par_chasseur');	
		  	showValue('Methode_chasse');	
		  	showValue('Nbre_pieges');	
		  	showValue('Distance_village');	
		  	showValue('Duree_de_chasse');      	
		  	showValue('Destination'); 
		  	showValue('Lieu_vente');
		  	showValue('Prix_vente');
		  	showValue('Type_animal');
		  	showValue('Espece_nom_local');		  	
		  	showValue('Famille');
		  	showValue('Genre');
		  	showValue('Espece');
		  	showValue('Sexe');
		  	showValue('Age');
		  	showValue('Mort_depuis');      	
		  	showValue('Etat_carcasse_animal');
		  	showValue('Decoupage_carcasse');
		  	showValue('L_total_corps'); 	
		  	showValue('Poids');
		  	showValue('Observations_carcasse');	
		  	showValue('Collecte_sang_DBS');	
		  	showValue('Qualite_echantillon');	
		  	showValue('Endroit_prelevement');	
		  	showValue('Remarques_echantillon');
			
		}
	
	}).catch(function (err) {
		console.log(err);
	});
}
