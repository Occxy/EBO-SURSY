function chargement_individus_cibu(table, option) {
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
	
	if ((option == 1) || (option == 2)) {
		modifier(table, option);
	};
}

function modifier(table, option) {
	
	var id = localStorage.getItem('ID_' + table);
	
	var doc;
	if (option == 1) {
		doc = JSON.parse(localStorage.getItem('individus_cibuTablesData'));
	}
	
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + table + debug);
	} else {
		var DB = new PouchDB(table + debug);
	};
	DB.allDocs({  		
			keys: [id],
		include_docs: true,
		attachments: true
	}).then(function (result) {

		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
			console.log(JSON.stringify(result.rows));
				
			//alert(result.rows[0].doc['N_identification_mere']);
			
			function addValue(elementName, option, onchange) {
				var element = document.getElementById(elementName);
				if (option == 1) {
					element.value = doc[elementName];
				} else {
					element.value = result.rows[0].doc[elementName];
				};
				try {
					if (onchange) {
						element.onchange();
					}
				} catch(err) {
				};
			}
		
			addValue('N_identification', option);
			addValue('Espece', option);
			addValue('Sexe', option);
			addValue('Age', option);
			addValue('Pays_habitation', option);
			addValue('Departement_habitation', option);
			addValue('Commune_habitation', option);
			addValue('Coordonnees_GPS', option);
			addValue('Date_d_apparition_des_symptomes', option);
	  
    	};

	}).catch(function (err) {
		console.log(err);
	});
}