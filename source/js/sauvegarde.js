var DB = new PouchDB('http://127.0.0.1:5984/_all_dbs');

DB.allDocs({
	include_docs: true,
	attachments: true
}).then(function (result) {
	if (typeof(JSON.stringify(result)) != "undefined"){  
		
		//alert(result);
		//var dataTablesData = JSON.parse(JSON.stringify(result));
		var dataTablesData = JSON.stringify(result);
		
		
		const db_name = dataTablesData.split(',');
		var liste_tables = document.getElementById('liste_tables');
		for (i=1;i<db_name.length;i++) {
			var table = db_name[i].replaceAll('"','');
			console.log(table);
			liste_tables.options[liste_tables.options.length] = new Option(table, table);
			
		}
		
		/*dataTablesData.rows.forEach(function(row){   
		});*/
    	
	}
}).catch(function (err) {
	console.log(err);
}); 	

