function chargement_de_la_page_d_inscription(table, option) {
	showConnexionStatus();
	
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
	
	var Equipe = document.getElementById("Equipe");		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'equipe' + debug);
	} else {
		var DB = new PouchDB('equipe' + debug);
	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var equipeTablesData = JSON.parse(JSON.stringify(result));
			
    		equipeTablesData.rows.forEach(function(row){   
    			registerEquipe.options[registerEquipe.options.length] = new Option(row.doc.Equipe, '0'); 
    		});		    		
		}
	}).catch(function (err) {
		console.log(err);
	});  	

}