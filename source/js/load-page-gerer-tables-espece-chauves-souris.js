function chargement_des_familles() {
	
	var table = localStorage.getItem('table_espece_chauves_souris');
	
	var Famille = document.getElementById("Famille");
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + table);
	} else {
		var DB = new PouchDB(table);
	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	   		localStorage['especeTablesData'] = JSON.stringify(result);
	   		var especeTablesData = JSON.parse(localStorage.getItem('especeTablesData'));
		    		
	   		Famille.options[Famille.options.length] = new Option('', ''); 	   		
	   		especeTablesData.rows[0].doc.Famille.forEach(function(row){   
	   			Famille.options[Famille.options.length] = new Option(row.Nom, row.Nom); 
	   		});	
	   		Famille.options[Famille.options.length] = new Option("Manquant", "Manquant");
		}
	}).catch(function (err) {
		console.log(err);
	});
}

function select_famille(select, select2, select3) {
	
	var table = localStorage.getItem('table_espece_chauves_souris');
	
	var valeur = select.options[select.selectedIndex].value;
	var Genre = select2;
	  	
	var Espece = select3;
	while (Espece.options.length) {
		Espece.remove(0);
	};
	    
	var nameEspece = "#nouvelle" + Espece.name;
	     
	$(nameEspece).addClass('btn-outline-dark');
	$(nameEspece).addClass('input-group-addon-disabled');
	$(nameEspece).removeClass('btn-primary');
	Espece.disabled = true;		  	
	  	
	var nameGenre = "#nouveau" + Genre.name;
	    			
	if ((valeur == "") || (valeur == "INDETERMINEE") || (valeur == "Manquant")) {
		
		var elementRegimeAlimentaire = document.getElementById('RegimeAlimentaire');
		elementRegimeAlimentaire.innerHTML = '';
		
		while (Genre.options.length) {
		  	Genre.remove(0);
		};
		$(nameGenre).addClass('btn-outline-dark');
		$(nameGenre).addClass('input-group-addon-disabled');
		$(nameGenre).addClass('noclick');
		$(nameGenre).removeClass('btn-primary');
		Genre.disabled = true;				
			
		$(nameEspece).addClass('btn-outline-dark');
		$(nameEspece).addClass('input-group-addon-disabled');
		$(nameEspece).addClass('noclick');
		$(nameEspece).removeClass('btn-primary');
		Espece.disabled = true;	
		    
	} else {
		$(nameGenre).removeClass('btn-outline-dark');
		$(nameGenre).removeClass('input-group-addon-disabled');
		$(nameGenre).removeClass('noclick');
		$(nameGenre).addClass('btn-primary');
		Genre.disabled = false;		    
		  	
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + table);
		} else {
			var DB = new PouchDB(table);
		};
			
		DB.allDocs({
			include_docs: true,
			attachments: true
		}).then(function (result) {
		    
			
			
			result.rows[0].doc.Famille.forEach(function(row){    			
	    		if (row.Nom == valeur) {
	    			
	    			var value2 = row.Regime_alimentaire;
					var elementRegimeAlimentaire = document.getElementById('RegimeAlimentaire');
					elementRegimeAlimentaire.innerHTML = value2;
	    			
	    		  	while (Genre.options.length) {
	    		  		Genre.remove(0);
	    		    };
	    		    Genre.options[Genre.options.length] = new Option("", "");
	
	    		    if (!("Genre" in row) == 0) {
	    			   	row.Genre.forEach(function(row1){
	    			   		Genre.options[Genre.options.length] = new Option(row1.Nom, row1.Nom);
	    			   	});
	    			};
	    			    
	    			Genre.options[Genre.options.length] = new Option("Manquant", "Manquant");
	    		}  
	    	});
		});
	}
}

function select_genre(select, select2, select3) {
	 
	var table = localStorage.getItem('table_espece_chauves_souris');
	
	var Espece = select3;
	var valeurGenre = select2.options[select2.selectedIndex].value;
	var nameEspece = "#nouvelle" + Espece.name;
	
	if ((valeurGenre == "") || (valeurGenre == "Manquant")){
		while (Espece.options.length) {
			Espece.remove(0);
	    };
	    $(nameEspece).addClass('btn-outline-dark');
		$(nameEspece).addClass('input-group-addon-disabled');
		$(nameEspece).addClass('noclick');
		$(nameEspece).removeClass('btn-primary');
	    Espece.disabled = true;	  
	} else {
		$(nameEspece).removeClass('btn-outline-dark');
		$(nameEspece).removeClass('input-group-addon-disabled');
		$(nameEspece).removeClass('noclick');
		$(nameEspece).addClass('btn-primary');
		Espece.disabled = false;	
		
		var valeurFamille = select.value;
		
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + table);
		} else {
			var DB = new PouchDB(table);
		};
	  				
	  	DB.allDocs({
			include_docs: true,
			attachments: true
		}).then(function (result) {
			
			result.rows[0].doc.Famille.forEach(function(row){
				if (row.Nom == valeurFamille) {
					if (!("Genre" in row) == 0) {
	    			    row.Genre.forEach(function(row1){
	    			  		if (row1.Nom == valeurGenre) {
		    			  		while (Espece.options.length) {
			    			  		Espece.remove(0);
			    			    };
			    			    Espece.options[Espece.options.length] = new Option("", "");
			    			    
			    			    if (!("Espece" in row1) == 0) {
			    			  		row1.Espece.forEach(function(row2){
			    			  			Espece.options[Espece.options.length] = new Option(row2.Nom, row2.Nom);     	    			
			    			  		});   
			    			    };
			    			  	
			    			  	Espece.options[Espece.options.length] = new Option("Manquant", "Manquant");
	    			  		}
	    			  	});
    				};
    			}  	
			});
		});
	}
}