/*var tabGenre = [[''],
				['Cloeotis','Hipposideros'],
				['TEST0','TEST0','TEST0']];*/



function addReference(nom_table, html, table, field, select, select2, select3) {
		
	if (html == 'capturees') {
		var Famille_terrain = document.getElementById('Famille_terrain');
		var Famille_labo = document.getElementById('Famille_labo');
		var Famille_consensus = document.getElementById('Famille_consensus');
		var Genre_terrain = document.getElementById('Genre_terrain');
		var Genre_labo = document.getElementById('Genre_labo');
		var Genre_consensus = document.getElementById('Genre_consensus');
		var Espece_terrain = document.getElementById('Espece_terrain');
		var Espece_labo = document.getElementById('Espece_labo');
		var Espece_consensus = document.getElementById('Espece_consensus');
	} else if (html == 'non_invasives') {
		var Famille_1 = document.getElementById('Famille_1');
		var Famille_2 = document.getElementById('Famille_2');
		var Famille_3 = document.getElementById('Famille_3');		
		var Genre_1 = document.getElementById('Genre_1');
		var Genre_2 = document.getElementById('Genre_2');
		var Genre_3 = document.getElementById('Genre_3');
		var Espece_1 = document.getElementById('Espece_1');
		var Espece_2 = document.getElementById('Espece_2');
		var Espece_3 = document.getElementById('Espece_3');
	} else if (html == 'non_invasives_astre_transvihmi') {
		var Famille_observe_1 = document.getElementById('Famille_observe_1');
		var Famille_observe_2 = document.getElementById('Famille_observe_2');
		var Famille_observe_3 = document.getElementById('Famille_observe_3');
		var Famille_observe_4 = document.getElementById('Famille_observe_4');
		var Famille_observe_5 = document.getElementById('Famille_observe_5');
		var Famille_observe1_bache_1 = document.getElementById('Famille_observe1_bache_1');
		var Famille_observe2_bache_1 = document.getElementById('Famille_observe2_bache_1');
		var Famille_observe1_bache_2 = document.getElementById('Famille_observe1_bache_2');
		var Famille_observe2_bache_2 = document.getElementById('Famille_observe2_bache_2');
		var Famille_observe1_bache_3 = document.getElementById('Famille_observe1_bache_3');
		var Famille_observe2_bache_3 = document.getElementById('Famille_observe2_bache_3');
		var Famille_observe1_bache_4 = document.getElementById('Famille_observe1_bache_4');
		var Famille_observe2_bache_4 = document.getElementById('Famille_observe2_bache_4');
		var Famille_observe1_bache_5 = document.getElementById('Famille_observe1_bache_5');
		var Famille_observe2_bache_5 = document.getElementById('Famille_observe2_bache_5');
		var Famille_observe1_bache_6 = document.getElementById('Famille_observe1_bache_6');
		var Famille_observe2_bache_6 = document.getElementById('Famille_observe2_bache_6');
		var Famille_observe1_bache_7 = document.getElementById('Famille_observe1_bache_7');
		var Famille_observe2_bache_7 = document.getElementById('Famille_observe2_bache_7');
		var Famille_observe1_bache_8 = document.getElementById('Famille_observe1_bache_8');
		var Famille_observe2_bache_8 = document.getElementById('Famille_observe2_bache_8');
		var Famille_observe1_bache_9 = document.getElementById('Famille_observe1_bache_9');
		var Famille_observe2_bache_9 = document.getElementById('Famille_observe2_bache_9');
		var Famille_observe1_bache_10 = document.getElementById('Famille_observe1_bache_10');
		var Famille_observe2_bache_10 = document.getElementById('Famille_observe2_bache_10');
		var Genre_observe_1 = document.getElementById('Genre_observe_1');
		var Genre_observe_2 = document.getElementById('Genre_observe_2');
		var Genre_observe_3 = document.getElementById('Genre_observe_3');
		var Genre_observe_4 = document.getElementById('Genre_observe_4');
		var Genre_observe_5 = document.getElementById('Genre_observe_5');
		var Genre_observe1_bache_1 = document.getElementById('Genre_observe1_bache_1');
		var Genre_observe2_bache_1 = document.getElementById('Genre_observe2_bache_1');
		var Genre_observe1_bache_2 = document.getElementById('Genre_observe1_bache_2');
		var Genre_observe2_bache_2 = document.getElementById('Genre_observe2_bache_2');
		var Espece_observe_1 = document.getElementById('Espece_observe_1');
		var Espece_observe_2 = document.getElementById('Espece_observe_2');
		var Espece_observe_3 = document.getElementById('Espece_observe_3');
		var Espece_observe_4 = document.getElementById('Espece_observe_4');
		var Espece_observe_5 = document.getElementById('Espece_observe_5');
		var Espece_observe1_bache_1 = document.getElementById('Espece_observe1_bache_1');
		var Espece_observe2_bache_1 = document.getElementById('Espece_observe2_bache_1');
		var Espece_observe1_bache_2 = document.getElementById('Espece_observe1_bache_2');
		var Espece_observe2_bache_2 = document.getElementById('Espece_observe2_bache_2');
	} else if (html == 'viande_de_brousse') {
		var Famille = document.getElementById('Famille');
		var Genre = document.getElementById('Genre');
		var Espece = document.getElementById('Espece');
	} else if (html == 'donnees_journalieres') {
		var Famille_vocalisations = document.getElementById('Famille_vocalisations');
		var Famille_copulations = document.getElementById('Famille_copulations');
		var Famille_suitee1 = document.getElementById('Famille_suitee1');
		var Famille_suitee2 = document.getElementById('Famille_suitee2');
		var Famille_suitee3 = document.getElementById('Famille_suitee3');
		var Famille_suitee4 = document.getElementById('Famille_suitee4');
		var Famille_agressions = document.getElementById('Famille_agressions');
		var Famille_gestante1 = document.getElementById('Famille_gestante1');
		var Famille_gestante2 = document.getElementById('Famille_gestante2');
		var Famille_gestante3 = document.getElementById('Famille_gestante3');
		var Famille_gestante4 = document.getElementById('Famille_gestante4');
		var Famille_lactante1 = document.getElementById('Famille_lactante1');
		var Famille_lactante2 = document.getElementById('Famille_lactante2');
		var Famille_lactante3 = document.getElementById('Famille_lactante3');
		var Famille_lactante4 = document.getElementById('Famille_lactante4');
		var Genre_vocalisations = document.getElementById('Genre_vocalisations');
		var Genre_copulations = document.getElementById('Genre_copulations');
		var Genre_suitee1 = document.getElementById('Genre_suitee1');
		var Genre_suitee2 = document.getElementById('Genre_suitee2');
		var Genre_suitee3 = document.getElementById('Genre_suitee3');
		var Genre_suitee4 = document.getElementById('Genre_suitee4');
		var Genre_agressions = document.getElementById('Genre_agressions');
		var Genre_gestante1 = document.getElementById('Genre_gestante1');
		var Genre_gestante2 = document.getElementById('Genre_gestante2');
		var Genre_gestante3 = document.getElementById('Genre_gestante3');
		var Genre_gestante4 = document.getElementById('Genre_gestante4');
		var Genre_lactante1 = document.getElementById('Genre_lactante1');
		var Genre_lactante2 = document.getElementById('Genre_lactante2');
		var Genre_lactante3 = document.getElementById('Genre_lactante3');
		var Genre_lactante4 = document.getElementById('Genre_lactante4');
		var Espece_vocalisations = document.getElementById('Espece_vocalisations');
		var Espece_copulations = document.getElementById('Espece_copulations');
		var Espece_suitee1 = document.getElementById('Espece_suitee1');
		var Espece_suitee2 = document.getElementById('Espece_suitee2');
		var Espece_suitee3 = document.getElementById('Espece_suitee3');
		var Espece_suitee4 = document.getElementById('Espece_suitee4');
		var Espece_agressions = document.getElementById('Espece_agressions');
		var Espece_gestante1 = document.getElementById('Espece_gestante1');
		var Espece_gestante2 = document.getElementById('Espece_gestante2');
		var Espece_gestante3 = document.getElementById('Espece_gestante3');
		var Espece_gestante4 = document.getElementById('Espece_gestante4');
		var Espece_lactante1 = document.getElementById('Espece_lactante1');
		var Espece_lactante2 = document.getElementById('Espece_lactante2');
		var Espece_lactante3 = document.getElementById('Espece_lactante3');
		var Espece_lactante4 = document.getElementById('Espece_lactante4');
		
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
				
	var value = document.getElementById('referenceInput').value;
	if (select2 != null) {
		var value2 = document.getElementById('genreInput').value;
	}			
		
	if (select3 != null) {
		var value3 = document.getElementById('genreInput2').value;
	}
	
	var animal = '';
  	if ((select !== null) && (select.getAttribute('id') == 'Famille')) {
  		animal = '_animal'
  	}
	if (field == 'Famille') {
				
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'espece' + animal  + nom_table + debug);
		} else {
			var DB = new PouchDB('espece' + animal + nom_table + debug);
		};	
		DB.allDocs({
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined") {  
				
				id = result.rows[0].doc._id;
				
				var i = 0;						
				var rowFamille =[];						
				result.rows[0].doc.Famille.forEach(function(row){
					if (row !== null) {
						rowFamille[i] = JSON.stringify(row);
						rowFamille[i] = JSON.parse(rowFamille[i]);
					};
					i = i + 1;
				});
				value = value.toUpperCase();
				
				var value2 = document.getElementById('regimeAlimentaireSelect').value;
				
				rowFamille[i] = new addNom(value, value2);
				famille = JSON.stringify(rowFamille);
				famille = JSON.parse(famille);
						
		    	DB.get(id).then(function (doc) {
					doc.Famille = famille;				
					return DB.put(doc).then(function (doc) {
						
						if ((navigator.onLine) && (localStorage.getItem('web') !== 'oui')) {
							var remote_couchdb = localStorage.getItem('remote_couchdb');
							var remoteDB = new PouchDB(remote_couchdb + 'espece' + animal + nom_table + debug);
							DB.sync(remoteDB).on('complete', (info) => {   
					    		if (html == 'non_invasives') {
									Famille_1.options[Famille_1.options.length] = new Option(value, value);
						    		Famille_2.options[Famille_2.options.length] = new Option(value, value);
						    		Famille_3.options[Famille_3.options.length] = new Option(value, value);
					    		} else if (html == 'non_invasives_astre_transvihmi') {
					    			Famille_observe_1.options[Famille_observe_1.options.length] = new Option(value, value);
						    		Famille_observe_2.options[Famille_observe_2.options.length] = new Option(value, value);
						    		Famille_observe_3.options[Famille_observe_3.options.length] = new Option(value, value);
						    		Famille_observe_4.options[Famille_observe_4.options.length] = new Option(value, value);
						    		Famille_observe_5.options[Famille_observe_5.options.length] = new Option(value, value);
						    		Famille_observe1_bache_1.options[Famille_observe1_bache_1.options.length] = new Option(value, value);
						    		Famille_observe2_bache_1.options[Famille_observe2_bache_1.options.length] = new Option(value, value);
						    		Famille_observe1_bache_2.options[Famille_observe1_bache_2.options.length] = new Option(value, value);
						    		Famille_observe2_bache_2.options[Famille_observe2_bache_2.options.length] = new Option(value, value);
						    		Famille_observe1_bache_3.options[Famille_observe1_bache_3.options.length] = new Option(value, value);
						    		Famille_observe2_bache_3.options[Famille_observe2_bache_3.options.length] = new Option(value, value);
						    		Famille_observe1_bache_4.options[Famille_observe1_bache_4.options.length] = new Option(value, value);
						    		Famille_observe2_bache_4.options[Famille_observe2_bache_4.options.length] = new Option(value, value);
						    		Famille_observe1_bache_5.options[Famille_observe1_bache_5.options.length] = new Option(value, value);
						    		Famille_observe2_bache_5.options[Famille_observe2_bache_5.options.length] = new Option(value, value);
						    		Famille_observe1_bache_6.options[Famille_observe1_bache_6.options.length] = new Option(value, value);
						    		Famille_observe2_bache_6.options[Famille_observe2_bache_6.options.length] = new Option(value, value);
						    		Famille_observe1_bache_7.options[Famille_observe1_bache_7.options.length] = new Option(value, value);
						    		Famille_observe2_bache_7.options[Famille_observe2_bache_7.options.length] = new Option(value, value);
						    		Famille_observe1_bache_8.options[Famille_observe1_bache_8.options.length] = new Option(value, value);
						    		Famille_observe2_bache_8.options[Famille_observe2_bache_8.options.length] = new Option(value, value);
						    		Famille_observe1_bache_9.options[Famille_observe1_bache_9.options.length] = new Option(value, value);
						    		Famille_observe2_bache_9.options[Famille_observe2_bache_9.options.length] = new Option(value, value);
						    		Famille_observe1_bache_10.options[Famille_observe1_bache_10.options.length] = new Option(value, value);
						    		Famille_observe2_bache_10.options[Famille_observe2_bache_10.options.length] = new Option(value, value);
					    		} else if (html == 'capturees') {
									Famille_terrain.options[Famille_terrain.options.length] = new Option(value, value);
						    		Famille_labo.options[Famille_labo.options.length] = new Option(value, value);
						    		Famille_consensus.options[Famille_consensus.options.length] = new Option(value, value);
					    		} else if (html == 'viande_de_brousse') {
					    			Famille.options[Famille.options.length] = new Option(value, value);
						    	} else if (html == 'donnees_journalieres') {
					    			Famille_vocalisations.options[Famille_vocalisations.options.length] = new Option(value, value);
					    			Famille_copulations.options[Famille_copulations.options.length] = new Option(value, value);
					    			Famille_suitee1.options[Famille_suitee1.options.length] = new Option(value, value);
					    			Famille_suitee2.options[Famille_suitee2.options.length] = new Option(value, value);
					    			Famille_suitee3.options[Famille_suitee3.options.length] = new Option(value, value);
					    			Famille_suitee4.options[Famille_suitee4.options.length] = new Option(value, value);
					    			Famille_agressions.options[Famille_agressions.options.length] = new Option(value, value);
					    			Famille_gestante1.options[Famille_gestante1.options.length] = new Option(value, value);
					    			Famille_gestante2.options[Famille_gestante2.options.length] = new Option(value, value);
					    			Famille_gestante3.options[Famille_gestante3.options.length] = new Option(value, value);
					    			Famille_gestante4.options[Famille_gestante4.options.length] = new Option(value, value);
					    			Famille_lactante1.options[Famille_lactante1.options.length] = new Option(value, value);
					    			Famille_lactante2.options[Famille_lactante2.options.length] = new Option(value, value);
					    			Famille_lactante3.options[Famille_lactante3.options.length] = new Option(value, value);
					    			Famille_lactante4.options[Famille_lactante4.options.length] = new Option(value, value);
					    			
								};
					    		select.value = value;
					    		select.onchange();
							}).on('error', function (err) {
						   		// error while replicating
						   		alert('alert espece' + animal + ' : ' + JSON.stringify(err));
						   	});
								
						} else {
							if (html == 'non_invasives') {
								Famille_1.options[Famille_1.options.length] = new Option(value, value);
					    		Famille_2.options[Famille_2.options.length] = new Option(value, value);
					    		Famille_3.options[Famille_3.options.length] = new Option(value, value);
				    		} else if (html == 'non_invasives_astre_transvihmi') {
				    			Famille_observe_1.options[Famille_observe_1.options.length] = new Option(value, value);
					    		Famille_observe_2.options[Famille_observe_2.options.length] = new Option(value, value);
					    		Famille_observe_3.options[Famille_observe_3.options.length] = new Option(value, value);
					    		Famille_observe_4.options[Famille_observe_4.options.length] = new Option(value, value);
					    		Famille_observe_5.options[Famille_observe_5.options.length] = new Option(value, value);
					    		Famille_observe1_bache_1.options[Famille_observe1_bache_1.options.length] = new Option(value, value);
					    		Famille_observe2_bache_1.options[Famille_observe2_bache_1.options.length] = new Option(value, value);
					    		Famille_observe1_bache_2.options[Famille_observe1_bache_2.options.length] = new Option(value, value);
					    		Famille_observe2_bache_2.options[Famille_observe2_bache_2.options.length] = new Option(value, value);
					    		Famille_observe1_bache_3.options[Famille_observe1_bache_3.options.length] = new Option(value, value);
					    		Famille_observe2_bache_3.options[Famille_observe2_bache_3.options.length] = new Option(value, value);
					    		Famille_observe1_bache_4.options[Famille_observe1_bache_4.options.length] = new Option(value, value);
					    		Famille_observe2_bache_4.options[Famille_observe2_bache_4.options.length] = new Option(value, value);
					    		Famille_observe1_bache_5.options[Famille_observe1_bache_5.options.length] = new Option(value, value);
					    		Famille_observe2_bache_5.options[Famille_observe2_bache_5.options.length] = new Option(value, value);
					    		Famille_observe1_bache_6.options[Famille_observe1_bache_6.options.length] = new Option(value, value);
					    		Famille_observe2_bache_6.options[Famille_observe2_bache_6.options.length] = new Option(value, value);
					    		Famille_observe1_bache_7.options[Famille_observe1_bache_7.options.length] = new Option(value, value);
					    		Famille_observe2_bache_7.options[Famille_observe2_bache_7.options.length] = new Option(value, value);
					    		Famille_observe1_bache_8.options[Famille_observe1_bache_8.options.length] = new Option(value, value);
					    		Famille_observe2_bache_8.options[Famille_observe2_bache_8.options.length] = new Option(value, value);
					    		Famille_observe1_bache_9.options[Famille_observe1_bache_9.options.length] = new Option(value, value);
					    		Famille_observe2_bache_9.options[Famille_observe2_bache_9.options.length] = new Option(value, value);
					    		Famille_observe1_bache_10.options[Famille_observe1_bache_10.options.length] = new Option(value, value);
					    		Famille_observe2_bache_10.options[Famille_observe2_bache_10.options.length] = new Option(value, value);
				    		 }else if (html == 'capturees') {
								Famille_terrain.options[Famille_terrain.options.length] = new Option(value, value);
					    		Famille_labo.options[Famille_labo.options.length] = new Option(value, value);
					    		Famille_consensus.options[Famille_consensus.options.length] = new Option(value, value);
				    		} else if (html == 'viande_de_brousse') {
				    			Famille.options[Famille.options.length] = new Option(value, value);
					    	} else if (html == 'donnees_journalieres') {
				    			Famille_vocalisations.options[Famille_vocalisations.options.length] = new Option(value, value);
				    			Famille_copulations.options[Famille_copulations.options.length] = new Option(value, value);
				    			Famille_suitee1.options[Famille_suitee1.options.length] = new Option(value, value);
				    			Famille_suitee2.options[Famille_suitee2.options.length] = new Option(value, value);
				    			Famille_suitee3.options[Famille_suitee3.options.length] = new Option(value, value);
				    			Famille_suitee4.options[Famille_suitee4.options.length] = new Option(value, value);
				    			Famille_agressions.options[Famille_agressions.options.length] = new Option(value, value);
				    			Famille_gestante1.options[Famille_gestante1.options.length] = new Option(value, value);
				    			Famille_gestante2.options[Famille_gestante2.options.length] = new Option(value, value);
				    			Famille_gestante3.options[Famille_gestante3.options.length] = new Option(value, value);
				    			Famille_gestante4.options[Famille_gestante4.options.length] = new Option(value, value);
				    			Famille_lactante1.options[Famille_lactante1.options.length] = new Option(value, value);
				    			Famille_lactante2.options[Famille_lactante2.options.length] = new Option(value, value);
				    			Famille_lactante3.options[Famille_lactante3.options.length] = new Option(value, value);
				    			Famille_lactante4.options[Famille_lactante4.options.length] = new Option(value, value);
						    };
				    		select.value = value;
				    		select.onchange();
						}
					});	
				});	
			}
		}).catch(function (err) {
			console.log(err);
		});
						
	} else if (field == 'Genre') {
				
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'espece' + animal + nom_table + debug);
		} else {
			var DB = new PouchDB('espece' + animal + nom_table + debug);
		};	
		
		DB.allDocs({
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
				id = result.rows[0].doc._id;
					
				var i = 0;			
				var iGenre;
				var j = 0;
				
				result.rows[0].doc.Famille.forEach(function(row){
					if (row.Nom == value) {
						iGenre = j;
						var rowGenre =[];	
						if (!("Genre" in row) == 0) {
							row.Genre.forEach(function(row1){
								if (row1 !== null) {
									rowGenre[i] = JSON.stringify(row1);
									rowGenre[i] = JSON.parse(rowGenre[i]);
								};
								i = i + 1;
							});
						};
						rowGenre[i] = new addNom(value2);
						genre = JSON.stringify(rowGenre);
						genre = JSON.parse(genre);
			   		};	
			   		j = j + 1;
				});
						
				DB.get(id).then(function (doc) {
					doc.Famille[iGenre].Genre = genre;							
					return DB.put(doc);
				}).then(function (doc) {
							
					if ((navigator.onLine) && (localStorage.getItem('web') !== 'oui')) {
						var remote_couchdb = localStorage.getItem('remote_couchdb');
						var remoteDB = new PouchDB(remote_couchdb + 'espece' + animal + nom_table + debug);
						DB.sync(remoteDB).on('complete', (info) => {   
							if (html == 'non_invasives') {
								if (Famille_1.value == value) {
									Genre_1.options[Genre_1.options.length] = new Option(value2, value2);
								}
								if (Famille_2.value == value) {
									Genre_2.options[Genre_2.options.length] = new Option(value2, value2);
								}
								if (Famille_3.value == value) {
									Genre_3.options[Genre_3.options.length] = new Option(value2, value2);
								}
				    		} else if (html == 'non_invasives_astre_transvihmi') {
								if (Famille_observe_1.value == value) {
									Genre_observe_1.options[Genre_observe_1.options.length] = new Option(value2, value2);
								}
								if (Famille_observe_2.value == value) {
									Genre_observe_2.options[Genre_observe_2.options.length] = new Option(value2, value2);
								}
								if (Famille_observe_3.value == value) {
									Genre_observe_3.options[Genre_observe_3.options.length] = new Option(value2, value2);
								}
								if (Famille_observe_4.value == value) {
									Genre_observe_4.options[Genre_observe_4.options.length] = new Option(value2, value2);
								}
								if (Famille_observe_5.value == value) {
									Genre_observe_5.options[Genre_observe_5.options.length] = new Option(value2, value2);
								}
								if (Famille_observe1_bache_1.value == value) {
									Genre_observe1_bache_1.options[Genre_observe1_bache_1.options.length] = new Option(value2, value2);
								}
								if (Famille_observe2_bache_1.value == value) {
									Genre_observe2_bache_1.options[Genre_observe2_bache_1.options.length] = new Option(value2, value2);
								}
								if (Famille_observe1_bache_2.value == value) {
									Genre_observe1_bache_2.options[Genre_observe1_bache_2.options.length] = new Option(value2, value2);
								}
								if (Famille_observe2_bache_2.value == value) {
									Genre_observe2_bache_2.options[Genre_observe2_bache_2.options.length] = new Option(value2, value2);
								}
								if (Famille_observe1_bache_3.value == value) {
									Genre_observe1_bache_3.options[Genre_observe1_bache_3.options.length] = new Option(value2, value2);
								}
								if (Famille_observe2_bache_3.value == value) {
									Genre_observe2_bache_3.options[Genre_observe2_bache_3.options.length] = new Option(value2, value2);
								}
								if (Famille_observe1_bache_4.value == value) {
									Genre_observe1_bache_4.options[Genre_observe1_bache_4.options.length] = new Option(value2, value2);
								}
								if (Famille_observe2_bache_4.value == value) {
									Genre_observe2_bache_4.options[Genre_observe2_bache_4.options.length] = new Option(value2, value2);
								}
								if (Famille_observe1_bache_5.value == value) {
									Genre_observe1_bache_5.options[Genre_observe1_bache_5.options.length] = new Option(value2, value2);
								}
								if (Famille_observe2_bache_5.value == value) {
									Genre_observe2_bache_5.options[Genre_observe2_bache_5.options.length] = new Option(value2, value2);
								}
								if (Famille_observe1_bache_6.value == value) {
									Genre_observe1_bache_6.options[Genre_observe1_bache_6.options.length] = new Option(value2, value2);
								}
								if (Famille_observe2_bache_6.value == value) {
									Genre_observe2_bache_6.options[Genre_observe2_bache_6.options.length] = new Option(value2, value2);
								}
								if (Famille_observe1_bache_7.value == value) {
									Genre_observe1_bache_7.options[Genre_observe1_bache_7.options.length] = new Option(value2, value2);
								}
								if (Famille_observe2_bache_7.value == value) {
									Genre_observe2_bache_7.options[Genre_observe2_bache_7.options.length] = new Option(value2, value2);
								}
								if (Famille_observe1_bache_8.value == value) {
									Genre_observe1_bache_8.options[Genre_observe1_bache_8.options.length] = new Option(value2, value2);
								}
								if (Famille_observe2_bache_8.value == value) {
									Genre_observe2_bache_8.options[Genre_observe2_bache_8.options.length] = new Option(value2, value2);
								}
								if (Famille_observe1_bache_9.value == value) {
									Genre_observe1_bache_9.options[Genre_observe1_bache_9.options.length] = new Option(value2, value2);
								}
								if (Famille_observe2_bache_9.value == value) {
									Genre_observe2_bache_9.options[Genre_observe2_bache_9.options.length] = new Option(value2, value2);
								}
								if (Famille_observe1_bache_10.value == value) {
									Genre_observe1_bache_10.options[Genre_observe1_bache_10.options.length] = new Option(value2, value2);
								}
								if (Famille_observe2_bache_10.value == value) {
									Genre_observe2_bache_10.options[Genre_observe2_bache_10.options.length] = new Option(value2, value2);
								}
				    		} else if (html == 'capturees') {
				    			if (Famille_terrain.value == value) {
				    				Genre_terrain.options[Genre_terrain.options.length] = new Option(value2, value2);
				    			}
				    			if (Famille_labo.value == value) {
				    				Genre_labo.options[Genre_labo.options.length] = new Option(value2, value2);
				    			}
				    			if (Famille_consensus.value == value) {
				    				Genre_consensus.options[Genre_consensus.options.length] = new Option(value2, value2);
				    			}
				    		} else if (html == 'viande_de_brousse') {
				    			if (Famille.value == value) {
				    				Genre.options[Genre.options.length] = new Option(value2, value2);
				    			}
				    		} else if (html == 'donnees_journalieres') {
				    			if (Famille_vocalisations.value == value) {
				    				Genre_vocalisations.options[Genre_vocalisations.options.length] = new Option(value2, value2);
				    			};
				    			if (Famille_copulations.value == value) {
				    				Genre_copulations.options[Genre_copulations.options.length] = new Option(value2, value2);
				    			};
				    			if (Famille_suitee1.value == value) {
				    				Genre_suitee1.options[Genre_suitee1.options.length] = new Option(value2, value2);
				    			};
				    			if (Famille_suitee2.value == value) {
				    				Genre_suitee2.options[Genre_suitee2.options.length] = new Option(value2, value2);
				    			};
				    			if (Famille_suitee3.value == value) {
				    				Genre_suitee3.options[Genre_suitee3.options.length] = new Option(value2, value2);
				    			};
				    			if (Famille_suitee4.value == value) {
				    				Genre_suitee4.options[Genre_suitee4.options.length] = new Option(value2, value2);
				    			};
				    			if (Famille_agressions.value == value) {
				    				Genre_agressions.options[Genre_agressions.options.length] = new Option(value2, value2);
				    			}
				    			if (Famille_gestante1.value == value) {
				    				Genre_gestante1.options[Genre_gestante1.options.length] = new Option(value2, value2);
				    			};
				    			if (Famille_gestante2.value == value) {
				    				Genre_gestante2.options[Genre_gestante2.options.length] = new Option(value2, value2);
				    			};
				    			if (Famille_gestante3.value == value) {
				    				Genre_gestante3.options[Genre_gestante3.options.length] = new Option(value2, value2);
				    			};
				    			if (Famille_gestante4.value == value) {
				    				Genre_gestante4.options[Genre_gestante4.options.length] = new Option(value2, value2);
				    			};
				    			if (Famille_lactante1.value == value) {
				    				Genre_lactante1.options[Genre_lactante1.options.length] = new Option(value2, value2);
				    			};
				    			if (Famille_lactante2.value == value) {
				    				Genre_lactante2.options[Genre_lactante2.options.length] = new Option(value2, value2);
				    			};
				    			if (Famille_lactante3.value == value) {
				    				Genre_lactante3.options[Genre_lactante3.options.length] = new Option(value2, value2);
				    			};
				    			if (Famille_lactante4.value == value) {
				    				Genre_lactante4.options[Genre_lactante4.options.length] = new Option(value2, value2);
				    			};
					    	};
							select2.value = value2;
					    	select2.onchange();
					   	}).on('error', function (err) {
					   		// error while replicating
					   		alert('alert espece' + animal + ' : ' + JSON.stringify(err));
					   	});
					} else {
						if (html == 'non_invasives') {
							if (Famille_1.value == value) {
								Genre_1.options[Genre_1.options.length] = new Option(value2, value2);
							}
							if (Famille_2.value == value) {
								Genre_2.options[Genre_2.options.length] = new Option(value2, value2);
							}
							if (Famille_3.value == value) {
								Genre_3.options[Genre_3.options.length] = new Option(value2, value2);
							}
			    		} else if (html == 'non_invasives_astre_transvihmi') {
							if (Famille_observe_1.value == value) {
								Genre_observe_1.options[Genre_observe_1.options.length] = new Option(value2, value2);
							}
							if (Famille_observe_2.value == value) {
								Genre_observe_2.options[Genre_observe_2.options.length] = new Option(value2, value2);
							}
							if (Famille_observe_3.value == value) {
								Genre_observe_3.options[Genre_observe_3.options.length] = new Option(value2, value2);
							}
							if (Famille_observe_4.value == value) {
								Genre_observe_4.options[Genre_observe_4.options.length] = new Option(value2, value2);
							}
							if (Famille_observe_5.value == value) {
								Genre_observe_5.options[Genre_observe_5.options.length] = new Option(value2, value2);
							}
							if (Famille_observe1_bache_1.value == value) {
								Genre_observe1_bache_1.options[Genre_observe1_bache_1.options.length] = new Option(value2, value2);
							}
							if (Famille_observe2_bache_1.value == value) {
								Genre_observe2_bache_1.options[Genre_observe2_bache_1.options.length] = new Option(value2, value2);
							}
							if (Famille_observe1_bache_2.value == value) {
								Genre_observe1_bache_2.options[Genre_observe1_bache_2.options.length] = new Option(value2, value2);
							}
							if (Famille_observe2_bache_2.value == value) {
								Genre_observe2_bache_2.options[Genre_observe2_bache_2.options.length] = new Option(value2, value2);
							}
							if (Famille_observe1_bache_3.value == value) {
								Genre_observe1_bache_3.options[Genre_observe1_bache_3.options.length] = new Option(value2, value2);
							}
							if (Famille_observe2_bache_3.value == value) {
								Genre_observe2_bache_3.options[Genre_observe2_bache_3.options.length] = new Option(value2, value2);
							}
							if (Famille_observe1_bache_4.value == value) {
								Genre_observe1_bache_4.options[Genre_observe1_bache_4.options.length] = new Option(value2, value2);
							}
							if (Famille_observe2_bache_4.value == value) {
								Genre_observe2_bache_4.options[Genre_observe2_bache_4.options.length] = new Option(value2, value2);
							}
							if (Famille_observe1_bache_5.value == value) {
								Genre_observe1_bache_5.options[Genre_observe1_bache_5.options.length] = new Option(value2, value2);
							}
							if (Famille_observe2_bache_5.value == value) {
								Genre_observe2_bache_5.options[Genre_observe2_bache_5.options.length] = new Option(value2, value2);
							}
							if (Famille_observe1_bache_6.value == value) {
								Genre_observe1_bache_6.options[Genre_observe1_bache_6.options.length] = new Option(value2, value2);
							}
							if (Famille_observe2_bache_6.value == value) {
								Genre_observe2_bache_6.options[Genre_observe2_bache_6.options.length] = new Option(value2, value2);
							}
							if (Famille_observe1_bache_7.value == value) {
								Genre_observe1_bache_7.options[Genre_observe1_bache_7.options.length] = new Option(value2, value2);
							}
							if (Famille_observe2_bache_7.value == value) {
								Genre_observe2_bache_7.options[Genre_observe2_bache_7.options.length] = new Option(value2, value2);
							}
							if (Famille_observe1_bache_8.value == value) {
								Genre_observe1_bache_8.options[Genre_observe1_bache_8.options.length] = new Option(value2, value2);
							}
							if (Famille_observe2_bache_8.value == value) {
								Genre_observe2_bache_8.options[Genre_observe2_bache_8.options.length] = new Option(value2, value2);
							}
							if (Famille_observe1_bache_9.value == value) {
								Genre_observe1_bache_9.options[Genre_observe1_bache_9.options.length] = new Option(value2, value2);
							}
							if (Famille_observe2_bache_9.value == value) {
								Genre_observe2_bache_9.options[Genre_observe2_bache_9.options.length] = new Option(value2, value2);
							}
							if (Famille_observe1_bache_10.value == value) {
								Genre_observe1_bache_10.options[Genre_observe1_bache_10.options.length] = new Option(value2, value2);
							}
							if (Famille_observe2_bache_10.value == value) {
								Genre_observe2_bache_10.options[Genre_observe2_bache_10.options.length] = new Option(value2, value2);
							}
			    		} else if (html == 'capturees') {
			    			if (Famille_terrain.value == value) {
			    				Genre_terrain.options[Genre_terrain.options.length] = new Option(value2, value2);
			    			}
			    			if (Famille_labo.value == value) {
			    				Genre_labo.options[Genre_labo.options.length] = new Option(value2, value2);
			    			}
			    			if (Famille_consensus.value == value) {
			    				Genre_consensus.options[Genre_consensus.options.length] = new Option(value2, value2);
			    			}
			    		} else if (html == 'viande_de_brousse') {
			    			if (Famille.value == value) {
			    				Genre.options[Genre.options.length] = new Option(value2, value2);
			    			}
			    		}  else if (html == 'donnees_journalieres') {
			    			if (Famille_vocalisations.value == value) {
			    				Genre_vocalisations.options[Genre_vocalisations.options.length] = new Option(value2, value2);
			    			};
			    			if (Famille_copulations.value == value) {
			    				Genre_copulations.options[Genre_copulations.options.length] = new Option(value2, value2);
			    			};
			    			if (Famille_suitee1.value == value) {
			    				Genre_suitee1.options[Genre_suitee1.options.length] = new Option(value2, value2);
			    			};
			    			if (Famille_suitee2.value == value) {
			    				Genre_suitee2.options[Genre_suitee2.options.length] = new Option(value2, value2);
			    			};
			    			if (Famille_suitee3.value == value) {
			    				Genre_suitee3.options[Genre_suitee3.options.length] = new Option(value2, value2);
			    			};
			    			if (Famille_suitee4.value == value) {
			    				Genre_suitee4.options[Genre_suitee4.options.length] = new Option(value2, value2);
			    			};
			    			if (Famille_agressions.value == value) {
			    				Genre_agressions.options[Genre_agressions.options.length] = new Option(value2, value2);
			    			}
			    			if (Famille_gestante1.value == value) {
			    				Genre_gestante1.options[Genre_gestante1.options.length] = new Option(value2, value2);
			    			};
			    			if (Famille_gestante2.value == value) {
			    				Genre_gestante2.options[Genre_gestante2.options.length] = new Option(value2, value2);
			    			};
			    			if (Famille_gestante3.value == value) {
			    				Genre_gestante3.options[Genre_gestante3.options.length] = new Option(value2, value2);
			    			};
			    			if (Famille_gestante4.value == value) {
			    				Genre_gestante4.options[Genre_gestante4.options.length] = new Option(value2, value2);
			    			};
			    			if (Famille_lactante1.value == value) {
			    				Genre_lactante1.options[Genre_lactante1.options.length] = new Option(value2, value2);
			    			};
			    			if (Famille_lactante2.value == value) {
			    				Genre_lactante2.options[Genre_lactante2.options.length] = new Option(value2, value2);
			    			};
			    			if (Famille_lactante3.value == value) {
			    				Genre_lactante3.options[Genre_lactante3.options.length] = new Option(value2, value2);
			    			};
			    			if (Famille_lactante4.value == value) {
			    				Genre_lactante4.options[Genre_lactante4.options.length] = new Option(value2, value2);
			    			};
				    	};
			    		select2.value = value2;
				   		select2.onchange();
					}
				});			
			}
		}).catch(function (err) {
			console.log(err);
		});
						
	} else if (field == 'Espece') {

		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'espece' + animal + nom_table + debug);
		} else {
			var DB = new PouchDB('espece' + animal + nom_table + debug);
		};	
							
		DB.allDocs({
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
				id = result.rows[0].doc._id;
						
				var i = 0;			
				var iGenre;
				var iEspece;
				var j = 0;
				var k = 0;
						
				result.rows[0].doc.Famille.forEach(function(row){
					if (row.Nom == value) {
						iGenre = j;
						if (!("Genre" in row) == 0) {
							row.Genre.forEach(function(row1){
								if (row1.Nom == value2) {
									iEspece = k;
									var rowEspece =[];	
									if (!("Espece" in row1) == 0) {
										row1.Espece.forEach(function(row2){
											if (row2 !== null) {
												rowEspece[i] = JSON.stringify(row2);
												rowEspece[i] = JSON.parse(rowEspece[i]);
											};
											i = i + 1;
										});
									};
									rowEspece[i] = new addNom(value3);
									espece = JSON.stringify(rowEspece);
									espece = JSON.parse(espece);
								};
								k = k + 1;
							});
						}
		    		};	
		    		j = j + 1;
		    	});
						
				DB.get(id).then(function (doc) {
					doc.Famille[iGenre].Genre[iEspece].Espece = espece;							
					return DB.put(doc);
				}).then(function (doc) {
							
					if ((navigator.onLine) && (localStorage.getItem('web') !== 'oui')) {
						var remote_couchdb = localStorage.getItem('remote_couchdb');
						var remoteDB = new PouchDB(remote_couchdb + 'espece' + animal + nom_table + debug);
						DB.sync(remoteDB).on('complete', (info) => {   
							if (html == 'non_invasives') {
								if ((Famille_1.value == value) && (Genre_1.value == value2))  {
									Espece_1.options[Espece_1.options.length] = new Option(value3, value3);
								}
								if ((Famille_2.value == value) && (Genre_2.value == value2)) {
									Espece_2.options[Espece_2.options.length] = new Option(value3, value3);
								}
								if ((Famille_3.value == value) && (Genre_3.value == value2)) {
									Espece_3.options[Espece_3.options.length] = new Option(value3, value3);
								}
				    		} else if (html == 'non_invasives_astre_transvihmi') {
								if ((Famille_observe_1.value == value) && (Genre_observe_1.value == value2))  {
									Espece_observe_1.options[Espece_observe_1.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe_2.value == value) && (Genre_observe_2.value == value2)) {
									Espece_observe_2.options[Espece_observe_2.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe_3.value == value) && (Genre_observe_3.value == value2)) {
									Espece_observe_3.options[Espece_observe_3.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe_4.value == value) && (Genre_observe_4.value == value2)) {
									Espece_observe_4.options[Espece_observe_4.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe_5.value == value) && (Genre_observe_5.value == value2)) {
									Espece_observe_5.options[Espece_observe_5.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe1_bache_1.value == value) && (Genre_observe1_bache_1.value == value2)) {
									Espece_observe1_bache_1.options[Espece_observe1_bache_1.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe2_bache_1.value == value) && (Genre_observe2_bache_1.value == value2)) {
									Espece_observe2_bache_1.options[Espece_observe2_bache_1.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe1_bache_2.value == value) && (Genre_observe1_bache_2.value == value2)) {
									Espece_observe1_bache_2.options[Espece_observe1_bache_2.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe2_bache_2.value == value) && (Genre_observe2_bache_2.value == value2)) {
									Espece_observe2_bache_2.options[Espece_observe2_bache_2.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe1_bache_3.value == value) && (Genre_observe1_bache_3.value == value2)) {
									Espece_observe1_bache_3.options[Espece_observe1_bache_3.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe2_bache_3.value == value) && (Genre_observe2_bache_3.value == value2)) {
									Espece_observe2_bache_3.options[Espece_observe2_bache_3.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe1_bache_4.value == value) && (Genre_observe1_bache_4.value == value2)) {
									Espece_observe1_bache_4.options[Espece_observe1_bache_4.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe2_bache_4.value == value) && (Genre_observe2_bache_4.value == value2)) {
									Espece_observe2_bache_4.options[Espece_observe2_bache_4.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe1_bache_5.value == value) && (Genre_observe1_bache_5.value == value2)) {
									Espece_observe1_bache_5.options[Espece_observe1_bache_5.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe2_bache_5.value == value) && (Genre_observe2_bache_5.value == value2)) {
									Espece_observe2_bache_5.options[Espece_observe2_bache_5.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe1_bache_6.value == value) && (Genre_observe1_bache_6.value == value2)) {
									Espece_observe1_bache_6.options[Espece_observe1_bache_6.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe2_bache_6.value == value) && (Genre_observe2_bache_6.value == value2)) {
									Espece_observe2_bache_6.options[Espece_observe2_bache_6.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe1_bache_7.value == value) && (Genre_observe1_bache_7.value == value2)) {
									Espece_observe1_bache_7.options[Espece_observe1_bache_7.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe2_bache_7.value == value) && (Genre_observe2_bache_7.value == value2)) {
									Espece_observe2_bache_7.options[Espece_observe2_bache_7.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe1_bache_8.value == value) && (Genre_observe1_bache_8.value == value2)) {
									Espece_observe1_bache_8.options[Espece_observe1_bache_8.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe2_bache_8.value == value) && (Genre_observe2_bache_8.value == value2)) {
									Espece_observe2_bache_8.options[Espece_observe2_bache_8.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe1_bache_9.value == value) && (Genre_observe1_bache_9.value == value2)) {
									Espece_observe1_bache_9.options[Espece_observe1_bache_9.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe2_bache_9.value == value) && (Genre_observe2_bache_9.value == value2)) {
									Espece_observe2_bache_9.options[Espece_observe2_bache_9.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe1_bache_10.value == value) && (Genre_observe1_bache_10.value == value2)) {
									Espece_observe1_bache_10.options[Espece_observe1_bache_10.options.length] = new Option(value3, value3);
								}
								if ((Famille_observe2_bache_10.value == value) && (Genre_observe2_bache_10.value == value2)) {
									Espece_observe2_bache_10.options[Espece_observe2_bache_10.options.length] = new Option(value3, value3);
								}
				    		} else if (html == 'capturees') {
				    			if ((Famille_terrain.value == value) && (Genre_terrain.value == value2)) {
				    				Espece_terrain.options[Espece_terrain.options.length] = new Option(value3, value3);
				    			}
				    			if ((Famille_labo.value == value) && (Genre_labo.value == value2)) {
				    				Espece_labo.options[Espece_labo.options.length] = new Option(value3, value3);
				    			}
				    			if ((Famille_consensus.value == value) && (Genre_consensus.value == value2)) {
				    				Espece_consensus.options[Espece_consensus.options.length] = new Option(value3, value3);
				    			}
				    		} else if (html == 'viande_de_brousse') {
				    			if ((Famille.value == value) && (Genre.value == value2)) {
				    				Espece.options[Espece.options.length] = new Option(value3, value3);
				    			}
				    		} else if (html == 'donnees_journalieres') {
				    			if ((Famille_vocalisations.value == value) && (Genre_vocalisations.value == value2)) {
				    				Espece_vocalisations.options[Espece_vocalisations.options.length] = new Option(value3, value3);
				    			};
				    			if ((Famille_copulations.value == value) && (Genre_copulations.value == value2)) {
				    				Espece_copulations.options[Espece_copulations.options.length] = new Option(value3, value3);
				    			};
				    			if ((Famille_suitee1.value == value) && (Genre_suitee1.value == value2)) {
				    				Espece_suitee1.options[Espece_suitee1.options.length] = new Option(value3, value3);
				    			};
				    			if ((Famille_suitee2.value == value) && (Genre_suitee2.value == value2)) {
				    				Espece_suitee2.options[Espece_suitee2.options.length] = new Option(value3, value3);
				    			};
				    			if ((Famille_suitee3.value == value) && (Genre_suitee3.value == value2)) {
				    				Espece_suitee3.options[Espece_suitee3.options.length] = new Option(value3, value3);
				    			};
				    			if ((Famille_suitee4.value == value) && (Genre_suitee4.value == value2)) {
				    				Espece_suitee4.options[Espece_suitee4.options.length] = new Option(value3, value3);
				    			};
				    			if ((Famille_agressions.value == value) && (Genre_agressions.value == value2)) {
				    				Espece_agressions.options[Espece_agressions.options.length] = new Option(value3, value3);
				    			}
				    			if ((Famille_gestante1.value == value) && (Genre_gestante1.value == value2)) {
				    				Espece_gestante1.options[Espece_gestante1.options.length] = new Option(value3, value3);
				    			};
				    			if ((Famille_gestante2.value == value) && (Genre_gestante2.value == value2)) {
				    				Espece_gestante2.options[Espece_gestante2.options.length] = new Option(value3, value3);
				    			};
				    			if ((Famille_gestante3.value == value) && (Genre_gestante3.value == value2)) {
				    				Espece_gestante3.options[Espece_gestante3.options.length] = new Option(value3, value3);
				    			};
				    			if ((Famille_gestante4.value == value) && (Genre_gestante4.value == value2)) {
				    				Espece_gestante4.options[Espece_gestante4.options.length] = new Option(value3, value3);
				    			};
				    			if ((Famille_lactante1.value == value) && (Genre_lactante1.value == value2)) {
				    				Espece_lactante1.options[Espece_lactante1.options.length] = new Option(value3, value3);
				    			};
				    			if ((Famille_lactante2.value == value) && (Genre_lactante2.value == value2)) {
				    				Espece_lactante2.options[Espece_lactante2.options.length] = new Option(value3, value3);
				    			};
				    			if ((Famille_lactante3.value == value) && (Genre_lactante3.value == value2)) {
				    				Espece_lactante3.options[Espece_lactante3.options.length] = new Option(value3, value3);
				    			};
				    			if ((Famille_lactante4.value == value) && (Genre_lactante4.value == value2)) {
				    				Espece_lactante4.options[Espece_lactante4.options.length] = new Option(value3, value3);
				    			};
					    	};
				    		select3.value = value3;							    		
				    	}).on('error', function (err) {
					   		// error while replicating
					   		alert('alert espece' + animal + ' : ' + JSON.stringify(err));
					   	});
					} else {
						if (html == 'non_invasives') {
							if ((Famille_1.value == value) && (Genre_1.value == value2))  {
								Espece_1.options[Espece_1.options.length] = new Option(value3, value3);
							}
							if ((Famille_2.value == value) && (Genre_2.value == value2)) {
								Espece_2.options[Espece_2.options.length] = new Option(value3, value3);
							}
							if ((Famille_3.value == value) && (Genre_3.value == value2)) {
								Espece_3.options[Espece_3.options.length] = new Option(value3, value3);
							}
			    		} else if (html == 'non_invasives_astre_transvihmi') {
							if ((Famille_observe_1.value == value) && (Genre_observe_1.value == value2))  {
								Espece_observe_1.options[Espece_observe_1.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe_2.value == value) && (Genre_observe_2.value == value2)) {
								Espece_observe_2.options[Espece_observe_2.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe_3.value == value) && (Genre_observe_3.value == value2)) {
								Espece_observe_3.options[Espece_observe_3.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe_4.value == value) && (Genre_observe_4.value == value2)) {
								Espece_observe_4.options[Espece_observe_4.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe_5.value == value) && (Genre_observe_5.value == value2)) {
								Espece_observe_5.options[Espece_observe_5.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe1_bache_1.value == value) && (Genre_observe1_bache_1.value == value2)) {
								Espece_observe1_bache_1.options[Espece_observe1_bache_1.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe2_bache_1.value == value) && (Genre_observe2_bache_1.value == value2)) {
								Espece_observe2_bache_1.options[Espece_observe2_bache_1.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe1_bache_2.value == value) && (Genre_observe1_bache_2.value == value2)) {
								Espece_observe1_bache_2.options[Espece_observe1_bache_2.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe2_bache_2.value == value) && (Genre_observe2_bache_2.value == value2)) {
								Espece_observe2_bache_2.options[Espece_observe2_bache_2.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe1_bache_3.value == value) && (Genre_observe1_bache_3.value == value2)) {
								Espece_observe1_bache_3.options[Espece_observe1_bache_3.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe2_bache_3.value == value) && (Genre_observe2_bache_3.value == value2)) {
								Espece_observe2_bache_3.options[Espece_observe2_bache_3.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe1_bache_4.value == value) && (Genre_observe1_bache_4.value == value2)) {
								Espece_observe1_bache_4.options[Espece_observe1_bache_4.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe2_bache_4.value == value) && (Genre_observe2_bache_4.value == value2)) {
								Espece_observe2_bache_4.options[Espece_observe2_bache_4.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe1_bache_5.value == value) && (Genre_observe1_bache_5.value == value2)) {
								Espece_observe1_bache_5.options[Espece_observe1_bache_5.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe2_bache_5.value == value) && (Genre_observe2_bache_5.value == value2)) {
								Espece_observe2_bache_5.options[Espece_observe2_bache_5.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe1_bache_6.value == value) && (Genre_observe1_bache_6.value == value2)) {
								Espece_observe1_bache_6.options[Espece_observe1_bache_6.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe2_bache_6.value == value) && (Genre_observe2_bache_6.value == value2)) {
								Espece_observe2_bache_6.options[Espece_observe2_bache_6.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe1_bache_7.value == value) && (Genre_observe1_bache_7.value == value2)) {
								Espece_observe1_bache_7.options[Espece_observe1_bache_7.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe2_bache_7.value == value) && (Genre_observe2_bache_7.value == value2)) {
								Espece_observe2_bache_7.options[Espece_observe2_bache_7.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe1_bache_8.value == value) && (Genre_observe1_bache_8.value == value2)) {
								Espece_observe1_bache_8.options[Espece_observe1_bache_8.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe2_bache_8.value == value) && (Genre_observe2_bache_8.value == value2)) {
								Espece_observe2_bache_8.options[Espece_observe2_bache_8.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe1_bache_9.value == value) && (Genre_observe1_bache_9.value == value2)) {
								Espece_observe1_bache_9.options[Espece_observe1_bache_9.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe2_bache_9.value == value) && (Genre_observe2_bache_9.value == value2)) {
								Espece_observe2_bache_9.options[Espece_observe2_bache_9.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe1_bache_10.value == value) && (Genre_observe1_bache_10.value == value2)) {
								Espece_observe1_bache_10.options[Espece_observe1_bache_10.options.length] = new Option(value3, value3);
							}
							if ((Famille_observe2_bache_10.value == value) && (Genre_observe2_bache_10.value == value2)) {
								Espece_observe2_bache_10.options[Espece_observe2_bache_10.options.length] = new Option(value3, value3);
							}
			    		} else if (html == 'capturees') {
			    			if ((Famille_terrain.value == value) && (Genre_terrain.value == value2)) {
			    				Espece_terrain.options[Espece_terrain.options.length] = new Option(value3, value3);
			    			}
			    			if ((Famille_labo.value == value) && (Genre_labo.value == value2)) {
			    				Espece_labo.options[Espece_labo.options.length] = new Option(value3, value3);
			    			}
			    			if ((Famille_consensus.value == value) && (Genre_consensus.value == value2)) {
			    				Espece_consensus.options[Espece_consensus.options.length] = new Option(value3, value3);
			    			}
			    		} else if (html == 'viande_de_brousse') {
			    			if ((Famille.value == value) && (Genre.value == value2)) {
			    				Espece.options[Espece.options.length] = new Option(value3, value3);
			    			}
			    		} else if (html == 'donnees_journalieres') {
			    			if ((Famille_vocalisations.value == value) && (Genre_vocalisations.value == value2)) {
			    				Espece_vocalisations.options[Espece_vocalisations.options.length] = new Option(value3, value3);
			    			};
			    			if ((Famille_copulations.value == value) && (Genre_copulations.value == value2)) {
			    				Espece_copulations.options[Espece_copulations.options.length] = new Option(value3, value3);
			    			};
			    			if ((Famille_suitee1.value == value) && (Genre_suitee1.value == value2)) {
			    				Espece_suitee1.options[Espece_suitee1.options.length] = new Option(value3, value3);
			    			};
			    			if ((Famille_suitee2.value == value) && (Genre_suitee2.value == value2)) {
			    				Espece_suitee2.options[Espece_suitee2.options.length] = new Option(value3, value3);
			    			};
			    			if ((Famille_suitee3.value == value) && (Genre_suitee3.value == value2)) {
			    				Espece_suitee3.options[Espece_suitee3.options.length] = new Option(value3, value3);
			    			};
			    			if ((Famille_suitee4.value == value) && (Genre_suitee4.value == value2)) {
			    				Espece_suitee4.options[Espece_suitee4.options.length] = new Option(value3, value3);
			    			};
			    			if ((Famille_agressions.value == value) && (Genre_agressions.value == value2)) {
			    				Espece_agressions.options[Espece_agressions.options.length] = new Option(value3, value3);
			    			}
			    			if ((Famille_gestante1.value == value) && (Genre_gestante1.value == value2)) {
			    				Espece_gestante1.options[Espece_gestante1.options.length] = new Option(value3, value3);
			    			};
			    			if ((Famille_gestante2.value == value) && (Genre_gestante2.value == value2)) {
			    				Espece_gestante2.options[Espece_gestante2.options.length] = new Option(value3, value3);
			    			};
			    			if ((Famille_gestante3.value == value) && (Genre_gestante3.value == value2)) {
			    				Espece_gestante3.options[Espece_gestante3.options.length] = new Option(value3, value3);
			    			};
			    			if ((Famille_gestante4.value == value) && (Genre_gestante4.value == value2)) {
			    				Espece_gestante4.options[Espece_gestante4.options.length] = new Option(value3, value3);
			    			};
			    			if ((Famille_lactante1.value == value) && (Genre_lactante1.value == value2)) {
			    				Espece_lactante1.options[Espece_lactante1.options.length] = new Option(value3, value3);
			    			};
			    			if ((Famille_lactante2.value == value) && (Genre_lactante2.value == value2)) {
			    				Espece_lactante2.options[Espece_lactante2.options.length] = new Option(value3, value3);
			    			};
			    			if ((Famille_lactante3.value == value) && (Genre_lactante3.value == value2)) {
			    				Espece_lactante3.options[Espece_lactante3.options.length] = new Option(value3, value3);
			    			};
			    			if ((Famille_lactante4.value == value) && (Genre_lactante4.value == value2)) {
			    				Espece_lactante4.options[Espece_lactante4.options.length] = new Option(value3, value3);
			    			};
				    	};
			    		select3.value = value3;			    		
			    	}
				});	
			}
		}).catch(function (err) {
			console.log(err);
		});
	} else if (field == 'Activite_humaine') {
		
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + table + debug);
		} else {
			var DB = new PouchDB(table + debug);
		};
		DB.allDocs({
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
				
				var id = uuid();
				var doc = new Object();
				doc._id = id;
				doc[field] = value;
				
				var element = document.getElementById("test");
				var numberOfChildren = element.children.length;
				
				return DB.put(doc).then(function (doc) {
					if ((navigator.onLine) && (localStorage.getItem('web') !== 'oui')) {
						var remote_couchdb = localStorage.getItem('remote_couchdb');
						var remoteDB = new PouchDB(remote_couchdb + table + debug);
						DB.sync(remoteDB).on('complete', (info) => {   
							var line = document.createElement("div");
                      		line.innerHTML = '<label id="labelActivite_humaine' + numberOfChildren + '" class="checkbox-inline">' +
		                    					'<input id="Activite_humaine' + numberOfChildren + '" name="Activite_humaine" type="checkbox" value="option1"> ' +
		                    					value +
		                    				 '</label>';
		                    document.getElementById("test").appendChild(line);
	    		               
						}).on('error', function (err) {
				    		// error while replicating
				    		alert('alert ' + table + ' : ' + JSON.stringify(err));
				    	});
					} else {
						var line = document.createElement("div");
                  		line.innerHTML = '<label class="checkbox-inline">' +
	                    					'<input id="Activite_humaine' + numberOfChildren + '" name="Activite_humaine" type="checkbox" value="option1"> ' +
	                    					value +
	                    				 '</label>';
	                    document.getElementById("test").appendChild(line);
 		            }	
				});	
			};	
		}).catch(function (err) {
			console.log(err);
		});
	} else  {
				
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + table + nom_table + debug);
		} else {
			var DB = new PouchDB(table + nom_table + debug);
		};	
								
		DB.allDocs({
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
				
				var id = uuid();
				var doc = new Object();
				doc._id = id;
				doc[field] = value;
				
				return DB.put(doc).then(function (doc) {
					if ((navigator.onLine) && (localStorage.getItem('web') !== 'oui')) {
						var remote_couchdb = localStorage.getItem('remote_couchdb');
						var remoteDB = new PouchDB(remote_couchdb + table + nom_table + debug);
						DB.sync(remoteDB).on('complete', (info) => {   
							select.options[select.options.length] = new Option(value, value);
							select.value = value;
						}).on('error', function (err) {
				    		// error while replicating
				    		alert('alert ' + table + ' : ' + JSON.stringify(err));
				    	});
					} else {
						select.options[select.options.length] = new Option(value, value);
						select.value = value;
					}	
				});	
			};	
		}).catch(function (err) {
			console.log(err);
		});
	}
}  

function select_famille(table, select, select2, select3) {
	
	//if (localStorage.getItem('table_espece') == 'non') {
		
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
		  	
		  	if (select.getAttribute('name') == 'FamillePhenologie') {
		  		if (localStorage.getItem('web') === 'oui') {
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var DB = new PouchDB(remote_couchdb + 'phenologie' + nom_table + debug);
				} else {
					var DB = new PouchDB('phenologie' + nom_table + debug);
				};
		  	} else {
			  	var animal = '';
			  	if (select.getAttribute('id') == 'Famille') {
			  		animal = '_animal'
			  	}
			  	if (localStorage.getItem('web') === 'oui') {
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var DB = new PouchDB(remote_couchdb + 'espece' + animal + nom_table + debug);
				} else {
					var DB = new PouchDB('espece' + animal + nom_table + debug);
				};	
		  	}
		  	
			
			DB.allDocs({
				include_docs: true,
				attachments: true
			}).then(function (result) {
				
				result.rows[0].doc.Famille.forEach(function(row){    			
	    			if (row.Nom == valeur) {
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
	/*} else if (localStorage.getItem('table_espece') == 'oui') {
		while (select2.options.length) {
			select2.remove(0);
	    };
		while (select3.options.length) {
			select3.remove(0);
	    };
	    
		var valeur = select.options[select.selectedIndex].value;
		select2.disabled = false;	
		
		if (valeur == 'HIPPOSIDERIDAE') {
			
			var i = select.selectedIndex;
			
			alert(i);
			
			select2.options[select2.options.length] = new Option("", "");
			select2.options[select2.options.length] = new Option(tabGenre[i][0], tabGenre[i][0]);
			select2.options[select2.options.length] = new Option(tabGenre[i][1], tabGenre[i][1]);
		}
	}*/
	
}

function select_genre(table, select, select2, select3) {
		 
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
		
		if (select.getAttribute('name') == 'FamillePhenologie') {
	  		if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'phenologie' + nom_table + debug);
			} else {
				var DB = new PouchDB('phenologie' + nom_table + debug);
			};
	  	} else {
			var animal = '';
		  	if (select.getAttribute('id') == 'Famille') {
		  		animal = '_animal'
		  	}
		  	if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'espece' + animal + nom_table + debug);
			} else {
				var DB = new PouchDB('espece' + animal + nom_table + debug);
			};
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
			    			  			if (row2 != null) {
			    			  				Espece.options[Espece.options.length] = new Option(row2.Nom, row2.Nom);     	    			
			    			  			}
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

function select_change(table, select, select2, select3, value_famille, value_genre, value_espece) {
		
	var Famille = select;
	Famille.value = value_famille.toUpperCase(); 
	var Genre = select2;
  	var Espece = select3;
	var nameEspece = "#nouvelle" + Espece.name;
    
    $(nameEspece).addClass('btn-outline-dark');
	$(nameEspece).addClass('input-group-addon-disabled');
	$(nameEspece).removeClass('btn-primary');
	Espece.disabled = true;		  	
  	
	var nameGenre = "#nouveau" + Genre.name;
    			
  	if ((value_famille == "") || (value_famille == "INDETERMINEE") || (value_famille == "Manquant")) {
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
	  	
	  	if (select.getAttribute('name') == 'FamillePhenologie') {
	  		if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'phenologie' + nom_table + debug);
			} else {
				var DB = new PouchDB('phenologie' + nom_table + debug);
			};
	  	} else {
		  	var animal = '';
		  	if (select.getAttribute('id') == 'Famille') {
		  		animal = '_animal';
		  		
		  	}
		  	if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'espece' + animal + nom_table + debug);
			} else {
				var DB = new PouchDB('espece' + animal + nom_table + debug);
			};
	  	}
	  	
	  	DB.allDocs({
			include_docs: true,
			attachments: true
		}).then(function (result) {
			
			result.rows[0].doc.Famille.forEach(function(row){ 
				
				if (row.Nom == value_famille.toUpperCase()) {
    			  	
    				Genre.options[Genre.options.length] = new Option("", "");
    			  	if (!("Genre" in row) == 0) {
    			    	row.Genre.forEach(function(row1){
    			    		Genre.options[Genre.options.length] = new Option(row1.Nom, row1.Nom);
    			    	});
    			    };
    			    Genre.options[Genre.options.length] = new Option("Manquant", "Manquant");
    			    Genre.value = value_genre;
    			    
    			    if ((value_genre == "") || (value_genre == "INDETERMINEE") || (value_genre == "Manquant")) {
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
    				}
    			    
    			    result.rows[0].doc.Famille.forEach(function(row){
    					if (row.Nom == value_famille.toUpperCase()) {
    						if (!("Genre" in row) == 0) {
    		    			    row.Genre.forEach(function(row1){
    		    			  		if (row1.Nom == value_genre) {
    			    			  		Espece.options[Espece.options.length] = new Option("", "");
    				    			    if (!("Espece" in row1) == 0) {
    				    			  		row1.Espece.forEach(function(row2){
    				    			  			Espece.options[Espece.options.length] = new Option(row2.Nom, row2.Nom);     	    			
    				    			  		});   
    				    			    };
    				    			  	Espece.options[Espece.options.length] = new Option("Manquant", "Manquant");
    				    			  	Espece.value = value_espece; 
    				    			  	
    		    			  		}
    		    			  	});
    	    				};
    	    			}  	
    				});
    			    
    			}  
    		});
		});
	}
}