var import_table = localStorage.getItem('import_table'); 
var file = localStorage.getItem('file_import');

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

var valid_field = 
	['Equipe', 'N_site', 'Pays', 'Prefecture', 'Sous-prefecture', 'Ville/village', 'Site_capture', 'Environnement', 'Lat_degre_dec', 'Latitude', 
	 'Long_degre_dec', 'Longitude', 'Proximite_village_km', 'Proximite_source_m', 'ID_camera_1', 'NumSD_inseree_1', 'NumSD_remplacee_1', 
	 'Date_debut_camera_1', 'Heure_debut_camera_1', 'Changement_emplacement_camera_1', 'Emplacement_camera_1', 'NumEntree_camera_1', 'Hauteur_camera_1', 
	 'Support_camera_1', 'Distance_camera_entree_1', 'Presence_autre_camera_1', 'Distance_camera_camera_1', 'Changement_batterie_camera_1', 
	 'ID_camera_2', 'NumSD_inseree_2', 'NumSD_remplacee_2', 'Date_debut_camera_2', 'Heure_debut_camera_2', 'Changement_emplacement_camera_2', 
	 'Emplacement_camera_2', 'NumEntree_camera_2', 'Hauteur_camera_2', 'Support_camera_2', 'Distance_camera_entree_2', 'Presence_autre_camera_2', 
	 'Distance_camera_camera_2', 'Changement_batterie_camera_2', 'ID_camera_3', 'NumSD_inseree_3', 'NumSD_remplacee_3', 'Date_debut_camera_3', 
	 'Heure_debut_camera_3', 'Changement_emplacement_camera_3', 'Emplacement_camera_3', 'NumEntree_camera_3', 'Hauteur_camera_3', 'Support_camera_3', 
	 'Distance_camera_entree_3', 'Presence_autre_camera_3', 'Distance_camera_camera_3', 'Changement_batterie_camera_3', 'ID_camera_4', 'NumSD_inseree_4', 
	 'NumSD_remplacee_4', 'Date_debut_camera_4', 'Heure_debut_camera_4', 'Changement_emplacement_camera_4', 'Emplacement_camera_4', 'NumEntree_camera_4',
	 'Hauteur_camera_4', 'Support_camera_4', 'Distance_camera_entree_4', 'Presence_autre_camera_4', 'Distance_camera_camera_4', 
	 'Changement_batterie_camera_4'];



var field = [];
var data = [];
            	
var lines = file.trim().split("\n");
var lines_length = lines.length;
var tab = new Array();

var tab_max = 0;
var progressbar_count = 0;
var step = 0;
var width = 0;

var rowContent_length;

var i = 0;

var myTab = new Array();

var rowContent = [];


var row = 0;

importation();

function importation() {
	
	disable_li();
	disable_button();
	
	if (lines_length > 1) {
	
		var row = 0;
		
		field = lines[0].trim().split(";");
		rowContent_length = field.length;
		
		//verif valid template
		if (fields_is_valid()) {
			
			if (is_only_one_country()) {
			
				tab_max = lines_length-1;
				
				for (var line = 1; line < lines_length; line++) {
					
					rowContent = lines[line].trim().split(";");
					//console.log(rowContent[0]);
					fill_tab_datas_cameras_trap(line);
				};
			} else {
				failure_fields("Le fichier d'importation ne doit concerner qu'un seul et même pays !");
			};	
			
		} else {
			failure_fields("Vérifier que les noms des champs sont valides et bien placés !");
		};	
	};
}

function fields_is_valid() {
	for (var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
		if (field[rowCountContent] != valid_field[rowCountContent]) {
			console.log(field[rowCountContent] + '-' + valid_field[rowCountContent]);	
			if (field[rowCountContent] != '') {
				return false;
			}			
		};
	};
	return true;
};

function is_only_one_country() {
	
	var i_pays = 2;

	
	var rowContent = lines[1].trim().split(";");
	var country = rowContent[i_pays]; 
	
	for (var line = 2; line < lines_length; line++) {
		rowContent = lines[line].trim().split(";");
		if (rowContent[i_pays] != country) {
			return false;
		};
	};
	return true;
};

function fill_tab_datas_cameras_trap(file_line) {
	
	
	tab[file_line] = new Array();
	
	for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
		tab[file_line][rowCountContent] = rowContent[rowCountContent];
		
	};
	
	if (file_line == lines_length - 1) {
		show_progress_bar();
		
		progressbar_count = Math.round(lines_length / 20);
		step = 100 / progressbar_count; 
		step = step / 2;
		width = 0;
		
		/*if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + import_table + debug);
		} else {
			var DB = new PouchDB(import_table + debug);
		};*/
				
		var row = []; 
		row.length = lines_length;
		
		search_N_identification_Recursif_Caracterisations(/*DB,*/ lines_length-1, 0, -1, '', row);
	};
};

function search_N_identification_Recursif_Caracterisations(/*localDB,*/ i, j, k, N_cameras_trap, row) {
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'cameras_trap' + import_table + debug);
	} else {
		var DB = new PouchDB('cameras_trap' + import_table + debug);
	};
	
	if (i > 0) {

		if (typeof tab[i] !== "undefined") {
			
			
			N_cameras_trap = tab[i][14] + tab[i][15] + tab[i][28] + tab[i][29];
			
			DB.find({
		       	selector: {N_cameras_trap: N_cameras_trap}
			}).then(function (result) {
		    	
		    	if (result.docs.length > 0) {
		    		move();
		    		row++;
		    		//if (record_change_bat_capturees(result, rowContent_length)) {
		    			var id = result.docs[0]._id;
		    			put_with_id_cameras_trap(id, i);
		    			
		    			for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
							var rowContent = tab[i][rowCountContent]
							//addValueInTableReferenceMissions(rowCountContent, rowContent);
		    			};
						
						//addEspeceInTableReferenceBatCapturees(i);
		    			
		    			//search_N_identification_Recursif_Missions(i-1);
		    			//addEspeceInTableReferenceBatCapturees(i);
		    			
				    /*} else {
		    			search_N_identification_Recursif_CS(i-1);
				    };*/
		    	} else {
		    		
		    		var new_doc = {};
		    		
		    		/*var numero_individu_string = extraireNombre(N_identification_CS);
		    		var numero_individu = Number(numero_individu_string);*/
		    		
		    		for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
						var name_field = field[rowCountContent];
						var rowContent = tab[/*numero_individu*/i][rowCountContent]
						
						console.log(name_field + ' : ' + rowContent)
						
						
						//trim pour Famille/Genre/Espèce
						/*if (rowCountContent > 17 && rowCountContent < 27) {
							if ((rowCountContent === 18) || (rowCountContent === 21) || (rowCountContent === 24)) {
								new_doc[name_field] = rowContent.trim().toUpperCase();
							} else {
								new_doc[name_field] = rowContent.trim();	
							};
						} else {*/
							new_doc[name_field] = rowContent;
							
							//addValueInTableReferenceMissions(rowCountContent, rowContent);
						//};
					};
					
					//addEspeceInTableReferenceBatCapturees(i);
					
					var id = uuid();
					new_doc._id = id;
					new_doc.N_cameras_trap = tab[i][14] + tab[i][15] + tab[i][28] + tab[i][29];
					new_doc.Username = localStorage.getItem('loginUsername');
					
					
					put_new_id_cameras_trap(new_doc/*, i*/);
					
					move();
					row++;
					
					search_N_identification_Recursif_Caracterisations(/*localDB, */i-1);
		    		
		    	}
		    }).catch(function (err) {
		       	console.log(err);
		    });
			
			console.log("full - " + i);
		} else {
			console.log("empty - " + i);
			move();
			row++;
			
			search_N_identification_Recursif_Caracterisations(/*localDB, */i-1);
			
		};
	} else {
		
		synchronizeCaracterisations();
		/*if (localStorage.getItem('web') !== 'oui') {
			synchronizeEspece('espece');
		}*/
	};
};

function put_with_id_cameras_trap(id, i) {
	
	var sN_identification;
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'cameras_trap' + import_table + debug);
	} else {
		var DB = new PouchDB('cameras_trap' + import_table + debug);
	};
	DB.get(id).then(function (doc) {
		
		for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
			var name_field = field[rowCountContent];
			
			var rowContent = tab[i][rowCountContent];
			
			//addValueInTableReferenceBatCapturees(rowCountContent, rowContent);
						
			//trim pour Famille/Genre/Espèce
			/*if (rowCountContent > 17 && rowCountContent < 27) {	
				if ((rowCountContent === 18) || (rowCountContent === 21) || (rowCountContent === 24)) {
					doc[name_field] = rowContent.trim().toUpperCase();
				} else {
					doc[name_field] = rowContent.trim();	
				};
			} else {*/
				doc[name_field] = rowContent;
			//};
				doc.Username = localStorage.getItem('loginUsername');
				
			

		};
		
		//addEspeceInTableReferenceBatCapturees(i);
		
		return DB.put(doc).then(function () {
			return DB.get(id).then(function () {
				/*if (i == tab_max) {
					if (navigator.onLine) {
						synchronizeBatCapturees();
					};
				};*/
				search_N_identification_Recursif_Caracterisations(/*localDB, */i-1)
			});
		});
	}).catch(function (err) {
       	console.log(err);
       	console.log('error ' + id);
    });
};

function put_new_id_cameras_trap(doc/*, i*/) {
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'cameras_trap' + import_table + debug);
	} else {
		var DB = new PouchDB('cameras_trap' + import_table + debug);
		
	};
	DB.put(doc).then(function () {
		console.log(doc);
	});
};

function synchronizeCaracterisations() {
	
	//alert('synchronizeBatNoninvasives');
	
	if (localStorage.getItem('web') !== 'oui') {
		var localDB = new PouchDB('cameras_trap' + import_table + debug);
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var remoteDB = new PouchDB(remote_couchdb + 'cameras_trap' + import_table + debug, {skip_setup: true});
		localDB.sync(remoteDB, {batch_size: 20}).on('complete', (info) => {              
			hide_progress_bar();
			enable_li();
			enable_button();
			success();
		}).on('change', (change) => {
			move_2();
		}).on('error', function (err) {
			alert('alert ' + import_table + ': ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		hide_progress_bar();
		enable_li();
		enable_button();
		success();
	}
	
	/*var i = tabNewN_site.length;
	addN_site(i);
	function addN_site(i) {
	    if (i > 0) {
	    	
	    	
	    	
	    	var id = uuid();
			var doc = new Object();
			doc._id = id;
			doc.N_site = tabNewN_site[i-1];
			
			var newSite = false;
			var j = 0;
			while ((newSite == false) && (j<tab_max)) {
				if (typeof tab[j] !== "undefined") {
					
					if (tab[j][3] == tabNewN_site[i-1]) {
						newSite = true;
					} else {
						j++;
					};
					
				}
				else {
					j++;
				};
			};
			
			doc.Date = tab[j][0];
			doc.Equipe = tab[j][4]; 
			doc.Pays = tab[j][5];
			doc.Region_capture = tab[j][6]; 
			doc.Site_capture = tab[j][7];
			doc.Environnement = tab[j][8];
			doc.Lieu_capture = tab[j][9];
			doc.Latitude = tab[j][10];
			doc.Lat_degre_dec = tab[j][11];	
			doc.Longitude = tab[j][12];
			doc.Long_degre_dec = tab[j][13];	
			doc.Proximite_village_km = tab[j][15];
			
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'site' + import_table  + debug);
			} else {
				var DB = new PouchDB('site' + import_table  + debug);
			};
			DB.put(doc).then(function(response){
				return addN_site(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('site' + import_table  + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'site' + import_table + debug);
					localDB.sync(remoteDB).on('complete', (info) => {   
				    }).on('error', function (err) {
				   		alert('alert sync site : ' + JSON.stringify(err));
				   	});
				}).catch(function (err) {
					console.log(err);
				});
			}
		};
	};*/
		
	/*var i = tabNewPays.length;
	addPays(i);
	function addPays(i) {
	    if (i > 0) {
	    	var id = uuid();
			var doc = new Object();
			doc._id = id;
			doc.Pays = tabNewPays[i-1];
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'pays' + import_table + debug);
			} else {
				var DB = new PouchDB('pays' + import_table + debug);
			};
			DB.put(doc).then(function(response){
				return addPays(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('pays' + import_table + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'pays' + import_table + debug);
					localDB.sync(remoteDB).on('complete', (info) => {   
				    }).on('error', function (err) {
				   		alert('alert sync pays : ' + JSON.stringify(err));
				   	});
				}).catch(function (err) {
					console.log(err);
				});
			}
		};
	};*/
	
	/*var i = tabNewEspece.length;
	addFamilleGenreEspece(i, 'espece');*/

	/*var i = tabNewActivite_humaine.length;
	addActivite_humaine(i);
	function addActivite_humaine(i) {
	    if (i > 0) {
	    	var id = uuid();
			var doc = new Object();
			doc._id = id;
			//alert(tabNewEnvironnement[i-1]);
			doc.Activite_humaine = tabNewActivite_humaine[i-1];
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'activite_humaine' + import_table + debug);
			} else {
				var DB = new PouchDB('activite_humaine' + import_table + debug);
			};
			DB.put(doc).then(function(response){
				return addActivite_humaine(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('activite_humaine' + import_table + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'activite_humaine' + import_table + debug);
					localDB.sync(remoteDB).on('complete', (info) => {   
				    }).on('error', function (err) {
				   		alert('alert sync activite humaine : ' + JSON.stringify(err));
				   	});
				}).catch(function (err) {
					console.log(err);
				});
			}
		};
	};*/
		
	console.log('synchronized !');
};

/*function synchronizeEspece(table) {
	var localDB = new PouchDB(table + import_table + debug);
	localDB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var remoteDB = new PouchDB(remote_couchdb + table + import_table + debug);
		localDB.sync(remoteDB).on('complete', (info) => {   
	    }).on('error', function (err) {
	   		alert('alert sync ' + table + ' : ' + JSON.stringify(err));
	   	});
	}).catch(function (err) {
		console.log(err);
	});
	
	if (table == 'espece') {
		for (var i = 0; i < tabNewEspece.length; i++) {
			console.log(tabNewEspece[i]);
		};
	} else if (table == 'espece_animal') {
		for (var i = 0; i < tabNewEspeceAnimal.length; i++) {
			console.log(tabNewEspeceAnimal[i]);
		};
	};
};*/

function record_exists(result) {
    var doc = result.docs[0];
	var num_string = extraireNombre(result.docs[0].N_identification_collecte);
	if (num_string !== null) {
		return true
	} else {
		return false
	};
};

function addPhenologie(FamilleX, GenreX, EspeceX, Pheno_especeX, Statut_especeX) {
    this.Famille = FamilleX;
    this.Genre = GenreX
    this.Espece = EspeceX;
    this.Pheno_espece = Pheno_especeX;
    this.Statut_espece = Statut_especeX;
    	    
    this.FamilleX = function() {
        return this.Famille;
    };
    
    this.GenreX = function() {
        return this.Genre;
    };
    
    this.EspeceX = function() {
        return this.Espece;
    };
    
    this.Pheno_especeX = function() {
        return this.Pheno_espece;
    };
    
    this.Statut_especeX = function() {
        return this.Statut_espece;
    };
};

function addNom(NomX) {
    this.Nom = NomX;
    this.NomX = function() {
        return this.Nom;
    };		    
};

/*function addFamilleGenreEspece(i, table) {
	if (i > 0) {
		
		console.log(tabNewEspece[i-1].trim().split(" "));
		
		if (table == 'espece') {
			var tabEspeceToAdd = tabNewEspece[i-1].trim().split(" ");
		} else if (table == 'espece_animal') {
			var tabEspeceToAdd = tabNewEspeceAnimal[i-1].trim().split(" ");
		};
		if (tabEspeceToAdd.length == 1) {
			return addFamille(tabEspeceToAdd[0].trim(), i, table);
		} else if (tabEspeceToAdd.length == 2) {
			return addGenre(tabEspeceToAdd[0].trim(), tabEspeceToAdd[1].trim(), i, table);
		} else if (tabEspeceToAdd.length == 3) {
			return addEspece(tabEspeceToAdd[0].trim(), tabEspeceToAdd[1].trim(), tabEspeceToAdd[2].trim(), i, table);
		} else {
			return addFamilleGenreEspece(i-1, table);
		};
		
	} 
};

function addFamille(value, i, table) {
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + table + import_table + debug);
	} else {
		var DB = new PouchDB(table + import_table + debug);
	};
	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined") {  
		
			id = result.rows[0].doc._id;
			
			var nouvelle_famille = true;
			
			var j = 0;						
			var rowFamille =[];						
			result.rows[0].doc.Famille.forEach(function(row){
				if (row !== null) {
					rowFamille[j] = JSON.stringify(row);
					rowFamille[j] = JSON.parse(rowFamille[j]);
					if (row.Nom == value.toUpperCase()) {
						nouvelle_famille = false;
					};
				};
				j = j + 1;
			});
			value = value.toUpperCase();
			rowFamille[j] = new addNom(value);
			famille = JSON.stringify(rowFamille);
			famille = JSON.parse(famille);
			
			if (nouvelle_famille) {
				if (localStorage.getItem('web') === 'oui') {
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var EspeceDB = new PouchDB(remote_couchdb + table + import_table + debug);
				} else {
					var EspeceDB = new PouchDB(table + import_table + debug);
				};
				return EspeceDB.get(id).then(function(doc) {
					doc.Famille = famille;	
				    return EspeceDB.put(doc).then(function () {
					    return EspeceDB.get(id).then(function () {
							return addFamilleGenreEspece(i-1, table);
					    });
					});
				});
				
			} else {
				return addFamilleGenreEspece(i-1, table);
			};
		};
	});
};

function addGenre(value, value2, i, table) {
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + table + import_table + debug);
	} else {
		var DB = new PouchDB(table + import_table + debug);
	};
	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
			id = result.rows[0].doc._id;
				
			var j = 0;			
			var f = 0;						
			var iFamille;
			var rowFamille =[];		
			var genre;
			var nouvelle_famille = true;
			var nouveau_genre = true;
			var cpt = 0;
			
			result.rows[0].doc.Famille.forEach(function(row){
				
				if (row !== null) {
					rowFamille[f] = JSON.stringify(row);
					rowFamille[f] = JSON.parse(rowFamille[f]);
					f = f + 1;
				};
								
				if (row.Nom == value.toUpperCase()) {
					iFamille = cpt;
					var rowGenre =[];	
					
					nouvelle_famille = false;
					
					if (!("Genre" in row) == 0) {
						row.Genre.forEach(function(row1){
							
							if (row1 !== null) {
								rowGenre[j] = JSON.stringify(row1);
								rowGenre[j] = JSON.parse(rowGenre[j]);
								if (row1.Nom == value2) {
									nouveau_genre = false;
								};
							};
							j = j + 1;
						});
					};
					rowGenre[j] = new addNom(value2);
					genre = JSON.stringify(rowGenre);
					genre = JSON.parse(genre);
				};	
				cpt = cpt + 1;
			});
		};
		
		if ((nouvelle_famille) && (nouveau_genre)) {
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var EspeceDB = new PouchDB(remote_couchdb + table + import_table + debug);
			} else {
				var EspeceDB = new PouchDB(table + import_table + debug);
			};
			EspeceDB.get(id).then(function (doc) {
				value = value.toUpperCase();
				rowFamille[f] = new addNom(value);
				famille = JSON.stringify(rowFamille);
				famille = JSON.parse(famille);
				doc.Famille = famille;
				return EspeceDB.put(doc).then(function (doc) {
					return EspeceDB.get(id).then(function (doc) {
						var rowGenre =[];
						rowGenre[0] = new addNom(value2);
						genre = JSON.stringify(rowGenre);
						genre = JSON.parse(genre);
						doc.Famille[f].Genre = genre;							
						return EspeceDB.put(doc).then(function () {
							return EspeceDB.get(id).then(function () {
								return EspeceDB.allDocs({include_docs: true}).then(function () {
									return addFamilleGenreEspece(i-1, table);
								});
							});
						});
					});
				});
			});	
		} else if ((nouvelle_famille == false) && (nouveau_genre)) {
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var EspeceDB = new PouchDB(remote_couchdb + table + import_table + debug);
			} else {
				var EspeceDB = new PouchDB(table + import_table + debug);
			};
			return EspeceDB.get(id).then(function (doc) {
				doc.Famille[iFamille].Genre = genre;	
				return EspeceDB.put(doc).then(function () {
					return EspeceDB.get(id).then(function (doc) {
						return EspeceDB.allDocs({include_docs: true}).then(function (doc) {
							return addFamilleGenreEspece(i-1, table);
						});
					});
				});
			});
		} else if ((nouvelle_famille) && (nouveau_genre == false)) {
			return addFamilleGenreEspece(i-1, table);
		};
	}).catch(function (err) {
		console.log(err);
	});
};

function addEspece(value, value2, value3, i, table) {
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + table + import_table + debug);
	} else {
		var DB = new PouchDB(table + import_table + debug);
	};
	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
			id = result.rows[0].doc._id;
				
			var j = 0;			
			var k = 0;
			var f = 0;						
			var iFamille;						
			var iGenre;
			
			var rowFamille =[];		
			var rowGenre =[];	
			
			var genre;
			var espece;
			
			var nouvelle_famille = true;
			var nouveau_genre = true;
			
			var cpt = 0;
			
			result.rows[0].doc.Famille.forEach(function(row){
				
				if (row !== null) {
					rowFamille[f] = JSON.stringify(row);
					rowFamille[f] = JSON.parse(rowFamille[f]);
					f = f + 1;
				};
				
				if (row.Nom == value.toUpperCase()) {
					iFamille = cpt;
					var rowGenre =[];	
					nouvelle_famille = false;
					
					if (!("Genre" in row) == 0) {
						j = 0;
						row.Genre.forEach(function(row1){
							
							if (row1 !== null) {
								
								rowGenre[j] = JSON.stringify(row1);
								rowGenre[j] = JSON.parse(rowGenre[j]);
								
								if (row1.Nom == value2) {
									
									iGenre = j;
									var rowEspece =[];
									nouveau_genre = false;
									
									if (!("Espece" in row1) == 0) {
										k = 0;
										row1.Espece.forEach(function(row2){
											
											if (row2.Nom == value3) {
												nouvelle_espece = false;
											};
											
											if (row2 !== null) {
												rowEspece[k] = JSON.stringify(row2);
												rowEspece[k] = JSON.parse(rowEspece[k]);
											};
											k = k + 1;
										});
										
										rowEspece[k] = new addNom(value3);
										espece = JSON.stringify(rowEspece);
										espece = JSON.parse(espece);
									};
								};
								j = j + 1;
							};
						});
					};
					rowGenre[j] = new addNom(value2);
					genre = JSON.stringify(rowGenre);
					genre = JSON.parse(genre);
				};	
				cpt = cpt + 1;
			});
		};
		
		if ((nouvelle_famille) && (nouveau_genre)) {
			//alert('nouvelle famille et nouveau genre');
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var EspeceDB = new PouchDB(remote_couchdb + table + import_table + debug);
			} else {
				var EspeceDB = new PouchDB(table + import_table + debug);
			};
			EspeceDB.get(id).then(function (doc) {
				value = value.toUpperCase();
				rowFamille[f] = new addNom(value);
				famille = JSON.stringify(rowFamille);
				famille = JSON.parse(famille);
				doc.Famille = famille;
				return EspeceDB.put(doc).then(function (doc) {
					return EspeceDB.get(id).then(function (doc) {
						var rowGenre =[];
						rowGenre[0] = new addNom(value2);
						genre = JSON.stringify(rowGenre);
						genre = JSON.parse(genre);
						doc.Famille[f].Genre = genre;							
						return EspeceDB.put(doc).then(function (doc) {
							return EspeceDB.get(id).then(function (doc) {
								var rowEspece =[];
								rowEspece[0] = new addNom(value3);
								espece = JSON.stringify(rowEspece);
								espece = JSON.parse(espece);
								//alert(j);
								doc.Famille[f].Genre[j].Espece = espece;
								return EspeceDB.put(doc).then(function () {
									return EspeceDB.get(id).then(function () {
										return EspeceDB.allDocs({include_docs: true}).then(function () {
											return addFamilleGenreEspece(i-1, table);
										});
									});
								});
							});
						});
					});
				});
			});	
		} else if ((nouvelle_famille == false) && (nouveau_genre)) {
			//alert('nouvelle famille et ancien genre');
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var EspeceDB = new PouchDB(remote_couchdb + table + import_table + debug);
			} else {
				var EspeceDB = new PouchDB(table + import_table + debug);
			};
			return EspeceDB.get(id).then(function (doc) {
				doc.Famille[iFamille].Genre = genre;
				return EspeceDB.put(doc).then(function () {
					return EspeceDB.get(id).then(function (doc) {
						var rowEspece =[];
						rowEspece[0] = new addNom(value3);
						espece = JSON.stringify(rowEspece);
						espece = JSON.parse(espece);
						//alert(j);
						doc.Famille[iFamille].Genre[j].Espece = espece;
						return EspeceDB.put(doc).then(function () {
							return EspeceDB.get(id).then(function () {
								return EspeceDB.allDocs({include_docs: true}).then(function () {
									return addFamilleGenreEspece(i-1, table);
								});
							});
						});
					});
				});
			});
		} else if (nouvelle_espece == false) {
			return addFamilleGenreEspece(i-1, table);
		} else {
		    //alert('ancienne famille et ancien genre');
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var EspeceDB = new PouchDB(remote_couchdb + table + import_table + debug);
			} else {
				var EspeceDB = new PouchDB(table + import_table + debug);
			};
			return EspeceDB.get(id).then(function (doc) {
				doc.Famille[iFamille].Genre[iGenre].Espece = espece;
				return EspeceDB.put(doc).then(function () {
					return EspeceDB.get(id).then(function () {
						return EspeceDB.allDocs({include_docs: true}).then(function () {
							return addFamilleGenreEspece(i-1, table);
						});
					});
				});
				
			});
		};
	}).catch(function (err) {
		console.log(err);
	});
};*/

function extraireNombre(str) { 
	return str.match(/[0-9]+/g)
};

function move() {
	i++;
	if (i == 20) { 
		var bar = document.getElementById("myBar");
    	width = width + step;
    	bar.style.width = width + '%';
    	i = 0;
    };
};

function move_2() {
    var elem = document.getElementById("myBar");
    width = width + step;
    elem.style.width = width + '%';
};

function hide_progress_bar() {		
	var elem = document.getElementById("child");
	elem.style.display = "none";
};

function show_progress_bar() {		
	var elem = document.getElementById("child");
	elem.style.display="block";
	var label =  document.getElementById("progress_label");
	label.innerHTML = 'Importation des données...';
};

function success() {
	var elem = document.getElementById("success_label");
	elem.style.display = "block";
	var label =  document.getElementById("success");
	label.style.color = "green";
	label.innerHTML = 'Importation du fichier réussie !';
};

function failure_fields(msg) {
	var elem = document.getElementById("success_label");
	elem.style.display = "block";
	var label =  document.getElementById("success");
	label.style.color = "red";
	label.innerHTML = msg;
	enable_li();
	enable_button();
};

function hide_success() {	
	var elem = document.getElementById("success_label");
	elem.style.display = "none";
};

function disable_button() {
	var button_open =  document.getElementById("button_open");
	button_open.classList.add("noclick");
	var button_download =  document.getElementById("button_download");
	button_download.classList.add("noclick");
};

function enable_button() {
	var button_open =  document.getElementById("button_open");
	button_open.classList.remove("noclick");
	var button_download =  document.getElementById("button_download");
	button_download.classList.remove("noclick");
};




