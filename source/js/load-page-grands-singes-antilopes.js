function chargement_des_grands_singes_et_des_antilopes() {
	showConnexionStatus();
	
    var option = searchParams.get('option');
    var table = searchParams.get('table');
    
	//chargement_des_tables_de_reference(table, option);
    if ((option == 1) || (option == 2)) {
    	modifier(table, option);
    }
}

function modifier(table, option) {
	

	var doc;
	if (option == 1) {
		doc = JSON.parse(localStorage.getItem('grands_singes_antilopesTablesData'));
		
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
		
		addValue('N_espece_terrain');
		addValue('date_collecte');
		addValue('pays');
		addValue('lieu_code');
		addValue('lieu_principal');
		addValue('lieu_detail');
		addValue('fraicheur');
		addValue('boite_labo');
		addValue('temp1');
		addValue('temp2');
		addValue('espece_labo_mitDNA');
		addValue('espece_labo_12S');
		addValue('espece_consensus');				
		addValue('individu_microsatellite');
		addValue('sous-espece');
		addValue('temp3');
		addValue('point_GPS');
		addValue('GPS_corrige');
		addValue('observations_terrain');
		addValue('preveleur');
		addValue('autres_observations');				
		

	} else {
		
		
		var id = localStorage.getItem('ID_grands_singes_antilopes' + table);
				
		var debug;
		if (localStorage.getItem('debug') === null) {
			debug = '';
		} else {
			debug = localStorage.getItem('debug');
		};
		
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'grands_singes_antilopes' + table + debug);
		} else {
			var DB = new PouchDB('grands_singes_antilopes' + table + debug);
		};
		DB.allDocs({  		
				keys: [id],
			include_docs: true,
			attachments: true
		}).then(function (result) {
	
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
				console.log(JSON.stringify(result.rows));
					
				var N_labo = document.getElementById("N_labo");
				N_labo.value = result.rows[0].doc.N_labo;
											
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
				addValue('N_espece_terrain');
				addValue('date_collecte');
				addValue('pays');
				addValue('lieu_code');
				addValue('lieu_principal');
				addValue('lieu_detail');
				addValue('fraicheur');
				addValue('boite_labo');
				addValue('N_labo');
				addValue('temp1');
				addValue('temp2');
				addValue('espece_labo_mitDNA');
				addValue('espece_labo_12S');
				addValue('espece_consensus');				
				addValue('individu_microsatellite');
				addValue('sous-espece');
				addValue('temp3');
				addValue('point_GPS');
				addValue('GPS_corrige');
				addValue('observations_terrain');
				addValue('preveleur');
				addValue('autres_observations');
	    	};
	    	
		}).catch(function (err) {
			console.log(err);
		});
	}
}


