console.log('ok');

var import_table = localStorage.getItem('import_table'); 
var file = localStorage.getItem('file_import');
var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

var tabN_site = [];
var tabNewN_site = [];
var tabPays = [];
var tabNewPays = [];
var tabEspeceAnimal = [];
var tabNewEspeceAnimal = [];
var tabLieu_collecte = [];
var tabNewLieu_collecte = [];
var tabPreleve_chez = [];
var tabNewPreleve_chez = [];
var tabMethode_chasse = [];
var tabNewMethode_chasse = [];
var tabDestination = [];
var tabNewDestination = [];
var tabType_animal = [];
var tabNewType_animal = [];
var tabEtat_carcasse_animal = [];
var tabNewEtat_carcasse_animal = [];
var tabQualite_echantillon = [];
var tabNewQualite_echantillon = [];
var tabEndroit_prelevement = [];
var tabNewEndroit_prelevement = [];

var valid_field = 
	['N_identification_echantillon', 'N_site', 'Date', 'Pays', 'Enqueteur', 'Region_collecte', 'Site_collecte', 
	 'Environnement', 'Lieu_collecte', 'Lat_degre_dec', 'Latitude', 'Long_degre_dec', 'Longitude', 
	 'Preleve_chez', 'Tue_par_chasseur', 'Methode_chasse', 'Nbre_pieges', 'Distance_village', 'Duree_de_chasse',
	 'Destination', 'Lieu_vente', 'Prix_vente', 'Type_animal', 'Espece_nom_local', 'Famille', 'Genre', 'Espece', 
	 'Sexe', 'Age', 'Mort_depuis', 'Etat_carcasse_animal', 'Decoupage_carcasse', 'L_total_corps', 'Poids', 
	 'Observations_carcasse', 'Collecte_sang_DBS', 'Qualite_echantillon', 'Endroit_prelevement', 'Remarques_echantillon'];	

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

/*var DB = new PouchDB('site' + nom_equipe + debug);
DB.allDocs({  		
	include_docs: true,
	attachments: true
}).then(function (result) {
	// handle result
	var siteTablesData = JSON.parse(JSON.stringify(result));
	siteTablesData.rows.forEach(function(row){   
		tabN_site.push(row.doc.N_site);
	});
	tab_Pays();
}).catch(function (err) {
	console.log(err);
});*/

var siteTablesData = JSON.parse(localStorage.getItem('site' + import_table + 'TablesData'));
siteTablesData.rows.forEach(function(row){   
	tabN_site.push(row.doc.N_site);
});
tab_Pays();

function tab_Pays() {
	var paysTablesData = JSON.parse(localStorage.getItem('pays' + import_table + 'TablesData'));
	paysTablesData.rows.forEach(function(row){   
		tabPays.push(row.doc.Pays);
	});
	tab_Espece_Animal();
}

function tab_Espece_Animal() {
	var espece_animalTablesData = JSON.parse(localStorage.getItem('espece_animal' + import_table + 'TablesData'));
	
	for (var i=0; i<espece_animalTablesData.rows[0].doc.Famille.length; i++) {
		if (espece_animalTablesData.rows[0].doc.Famille[i].Genre != null) {
			for (var j=0; j<espece_animalTablesData.rows[0].doc.Famille[i].Genre.length; j++) {
				if (espece_animalTablesData.rows[0].doc.Famille[i].Genre[j].Espece != null) {
					for (var k=0; k<espece_animalTablesData.rows[0].doc.Famille[i].Genre[j].Espece.length; k++) {
						tabEspeceAnimal.push(espece_animalTablesData.rows[0].doc.Famille[i].Nom + ' ' +
								       espece_animalTablesData.rows[0].doc.Famille[i].Genre[j].Nom + ' ' + 
								       espece_animalTablesData.rows[0].doc.Famille[i].Genre[j].Espece[k].Nom);
					};
				} else {
					tabEspeceAnimal.push(espece_animalTablesData.rows[0].doc.Famille[i].Nom + ' ' +
							       espece_animalTablesData.rows[0].doc.Famille[i].Genre[j].Nom);
				};
			};
		} else {
			tabEspeceAnimal.push(espece_animalTablesData.rows[0].doc.Famille[i].Nom);
		}
	};
	tab_Lieu_collecte()
}

function tab_Lieu_collecte() {
	var lieu_collecteTablesData = JSON.parse(localStorage.getItem('lieu_collecte' + import_table + 'TablesData'));
	lieu_collecteTablesData.rows.forEach(function(row){ 
		tabLieu_collecte.push(row.doc.Lieu_collecte);
	});
	tab_Preleve_chez();
}

function tab_Preleve_chez() {
	//var tabPreleve_chez = [];
	var preleve_chezTablesData = JSON.parse(localStorage.getItem('preleve_chez' + import_table + 'TablesData'));
	preleve_chezTablesData.rows.forEach(function(row){   
		tabPreleve_chez.push(row.doc.Preleve_chez);
	});
	tab_Methode_chasse();
};

function tab_Methode_chasse() {
	//var tabMethode_chasse = [];
	var methode_chasseTablesData = JSON.parse(localStorage.getItem('methode_chasse' + import_table + 'TablesData'));
	methode_chasseTablesData.rows.forEach(function(row){   
		tabMethode_chasse.push(row.doc.Methode_chasse);
	});
	tab_Destination();
};

function tab_Destination() {
	//var tabDestination = [];
	var destinationTablesData = JSON.parse(localStorage.getItem('destination' + import_table + 'TablesData'));
	destinationTablesData.rows.forEach(function(row){   
		tabDestination.push(row.doc.Destination);
	});
	tab_Type_animal();
};

function tab_Type_animal() {
	//var tabType_animal = [];
	var type_animalTablesData = JSON.parse(localStorage.getItem('type_animal' + import_table + 'TablesData'));
	type_animalTablesData.rows.forEach(function(row){   
		tabType_animal.push(row.doc.Type_animal);
	});
	tab_Etat_carcasse_animal();
};

function tab_Etat_carcasse_animal() {
	//var tabEtat_carcasse_animal = [];
	var etat_carcasse_animalTablesData = JSON.parse(localStorage.getItem('etat_carcasse_animal' + import_table + 'TablesData'));
	etat_carcasse_animalTablesData.rows.forEach(function(row){   
		tabEtat_carcasse_animal.push(row.doc.Etat_carcasse_animal);
	});
	tab_Qualite_echantillon();
};

function tab_Qualite_echantillon() {
	//var tabQualite_echantillon = [];
	var qualite_echantillonTablesData = JSON.parse(localStorage.getItem('qualite_echantillon' + import_table + 'TablesData'));
	qualite_echantillonTablesData.rows.forEach(function(row){   
		tabQualite_echantillon.push(row.doc.Qualite_echantillon);
	});
	tab_Endroit_prelevement();
};

function tab_Endroit_prelevement() {
	//var tabEndroit_prelevement = [];
	var endroit_prelevementTablesData = JSON.parse(localStorage.getItem('endroit_prelevement' + import_table + 'TablesData'));
	endroit_prelevementTablesData.rows.forEach(function(row){   
		tabEndroit_prelevement.push(row.doc.Endroit_prelevement);
	});
	importation()
};

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
			
				for (var line = 1; line < lines_length; line++) {
					rowContent = lines[line].trim().split(";");
						
					var num_string = extraireNombre(rowContent[0]);
					var num = Number(num_string);
						
					if (tab_max < num) {
						tab_max = num;
					} 
				}
				
				for (var line = 1; line < lines_length; line++) {
					rowContent = lines[line].trim().split(";");
					//console.log(rowContent[0]);
					fill_tab_datas_bushmeat(rowContent[0], line);
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
	var i_pays = 3;
	
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

function fill_tab_datas_bushmeat(id, file_line) {
	var numero_individu_string = extraireNombre(id);
	var numero_individu = Number(numero_individu_string);
	
	tab[numero_individu] = new Array();
	
	for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
		tab[numero_individu][rowCountContent] = rowContent[rowCountContent];
	};
	
	if (file_line == lines_length - 1) {
		show_progress_bar();
		
		progressbar_count = Math.round(tab_max / 20);
		step = 100 / progressbar_count; 
		step = step / 2;
		width = 0;
		
		//var localDB = new PouchDB(import_table + debug);
		
		search_N_identification_Recursif_Bushmeat(/*localDB, */tab_max);
	};
};

function search_N_identification_Recursif_Bushmeat(/*localDB, */i) {
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'viande_de_brousse' + import_table + debug);
	} else {
		var DB = new PouchDB('viande_de_brousse' + import_table + debug);
	};
	
	if (i > 0) {

		if (typeof tab[i] !== "undefined") {
			var N_identification_echantillon = tab[i][0];
			
			
			DB.find({
				selector: {N_identification_echantillon: N_identification_echantillon}
			}).then(function (result) {
			
				if (result.docs.length > 0) {
					move();
		    		row++;
					if (record_change_bushmeat(result, rowContent_length)) {
						var id = result.docs[0]._id;
						
						put_with_id_bushmeat(id, i);
						search_N_identification_Recursif_Bushmeat(/*localDB, */i-1);
					} else {
						search_N_identification_Recursif_Bushmeat(/*localDB, */i-1);
					}
				} else {
	    		
					var sN_identification;
	    		
					var new_doc = {};
	    		
					var numero_echantillon_string = extraireNombre(N_identification_echantillon);
					var numero_echantillon = Number(numero_echantillon_string);
	    		
					for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
						var name_field = field[rowCountContent];
						var rowContent = tab[numero_echantillon][rowCountContent]
					
						
					
						//trim pour Famille/Genre/Espèce
						if (rowCountContent > 22 && rowCountContent < 26) {
							new_doc[name_field] = rowContent.trim();
						} else {
							new_doc[name_field] = rowContent;
							
							addValueInTableReferenceBushmeat(rowCountContent, rowContent);
						}
					};
					
					addEspeceInTableReferenceBushmeat(i);
					
					var id = uuid();
					new_doc._id = id;
					new_doc.Numero_echantillon = String(numero_echantillon);
					new_doc.Username = localStorage.getItem('loginUsername');
								
					put_new_id_bushmeat(new_doc, i)
					
					move();
					row++;
					
					search_N_identification_Recursif_Bushmeat(/*localDB, */i-1);
		    		
		    	}
		    }).catch(function (err) {
		       	console.log(err);
		    });
			
			console.log("full - " + i);
		} else {
			console.log("empty - " + i);
			move();
			row++;
			
			search_N_identification_Recursif_Bushmeat(/*localDB, */i-1);
			
		};
	} else {
		synchronizeBushmeat();
		if (localStorage.getItem('web') !== 'oui') {
			synchronizeEspece('espece_animal');
		}
	};
};

function record_exists(result) {
    var doc = result.docs[0];
	var num_string = extraireNombre(result.docs[0].N_identification_collecte);
	if (num_string !== null) {
		return true
	} else {
		return false
	};
};

function put_with_id_bushmeat(id, i) {
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'viande_de_brousse' + import_table + debug);
	} else {
		var DB = new PouchDB('viande_de_brousse' + import_table + debug);
	};
	DB.get(id).then(function (doc) {
		
		for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
			var name_field = field[rowCountContent];
			
			var rowContent = tab[i][rowCountContent];
			
			addValueInTableReferenceBushmeat(rowCountContent, rowContent);
			
			//trim pour Famille/Genre/Espèce
			if (rowCountContent > 21 && rowCountContent < 25) {	
				doc[name_field] = rowContent.trim();
			} else {
				doc[name_field] = rowContent;
			};
			
			if (rowCountContent == 1) {	
				console.log(i + " : " + tab[i][rowCountContent]);
			};
		};
		
		doc.Username = localStorage.getItem('loginUsername');
		
		addEspeceInTableReferenceBushmeat(i);		
		
		return DB.put(doc).then(function () {
			return DB.get(id).then(function () {
				/*if (i == tab_max) {
					if (navigator.onLine) {
						synchronizeBushmeat();
					};
				}; */
			});
		});	
			
	}).catch(function (err) {
       	console.log(err);
       	console.log('error ' + id);
    });
};

function put_new_id_bushmeat(doc, i) {
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'viande_de_brousse' + import_table + debug);
	} else {
		var DB = new PouchDB('viande_de_brousse' + import_table + debug);
	};
	DB.put(doc).then(function () {
		console.log('put - add : ' + i);
		console.log(i + " : " + tab[i][0]);
	});
};

function synchronizeBushmeat() {
	
	if (localStorage.getItem('web') !== 'oui') {
		var localDB = new PouchDB('viande_de_brousse' + import_table + debug);
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var remoteDB = new PouchDB(remote_couchdb + 'viande_de_brousse' + import_table + debug, {skip_setup: true});
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
	
	
	var i = tabNewN_site.length;
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
			
			doc.Date = tab[j][3];
			doc.Equipe = tab[j][4]; 
			doc.Pays = tab[j][5];
			doc.Region_capture = tab[j][6]; 
			doc.Site_capture = tab[j][7];
			doc.Environnement = tab[j][9];
			doc.Latitude = tab[j][10];
			doc.Lat_degre_dec = tab[j][11];	
			doc.Longitude = tab[j][12];
			doc.Long_degre_dec = tab[j][13];	
			doc.Proximite_village_km = tab[j][14];
			
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'site' + import_table + debug);
			} else {
				var DB = new PouchDB('site' + import_table + debug);
			};
			DB.put(doc).then(function(response){
				return addN_site(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('site' + import_table + debug);
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
	};
	
	var i = tabNewPays.length;
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
	};
	
	var i = tabNewEspeceAnimal.length;
	addFamilleGenreEspece(i, 'espece_animal', 'espece_animal');

	var i = tabNewLieu_collecte.length;
	addLieu_collecte(i);
	function addLieu_collecte(i) {
	    if (i > 0) {
	    	var id = uuid();
			var doc = new Object();
			doc._id = id;
			doc.Lieu_collecte = tabNewLieu_collecte[i-1];
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'lieu_collecte' + import_table + debug);
			} else {
				var DB = new PouchDB('lieu_collecte' + import_table + debug);
			};
			DB.put(doc).then(function(response){
				return addLieu_collecte(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('lieu_collecte' + import_table + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'lieu_collecte' + import_table + debug);
					localDB.sync(remoteDB).on('complete', (info) => {   
				    }).on('error', function (err) {
				   		alert('alert sync lieu_collecte : ' + JSON.stringify(err));
				   	});
				}).catch(function (err) {
					console.log(err);
				});
			}
		};
	};
	
	var i = tabNewPreleve_chez.length;
	addPreleve_chez(i);
	function addPreleve_chez(i) {
	    if (i > 0) {
	    	var id = uuid();
			var doc = new Object();
			doc._id = id;
			doc.Preleve_chez = tabNewPreleve_chez[i-1];
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'preleve_chez' + import_table + debug);
			} else {
				var DB = new PouchDB('preleve_chez' + import_table + debug);
			};
			DB.put(doc).then(function(response){
				return addPreleve_chez(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('preleve_chez' + import_table + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'preleve_chez' + import_table + debug);
					localDB.sync(remoteDB).on('complete', (info) => {   
				    }).on('error', function (err) {
				   		alert('alert sync preleve_chez : ' + JSON.stringify(err));
				   	});
				}).catch(function (err) {
					console.log(err);
				});
			}
		};
	};	
		
	var i = tabNewMethode_chasse.length;
	addMethode_chasse(i);
	function addMethode_chasse(i) {
		if (i > 0) {
			var id = uuid();
			var doc = new Object();
			doc._id = id;
			doc.Methode_chasse = tabNewMethode_chasse[i-1];
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'methode_chasse' + import_table + debug);
			} else {
				var DB = new PouchDB('methode_chasse' + import_table + debug);
			};
			DB.put(doc).then(function(response){
				return addMethode_chasse(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('methode_chasse' + import_table + debug);
					localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'methode_chasse' + import_table + debug);
					localDB.sync(remoteDB).on('complete', (info) => {   
				    }).on('error', function (err) {
				    	alert('alert sync methode_chasse : ' + JSON.stringify(err));
				    });
				}).catch(function (err) {
					console.log(err);
				});
			}
		};
	};
			
	var i = tabNewDestination.length;
	addDestination(i);
	function addDestination(i) {
	    if (i > 0) {
	    	var id = uuid();
	    	var doc = new Object();
	    	doc._id = id;
	    	doc.Destination = tabNewDestination[i-1];
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'destination' + import_table + debug);
			} else {
				var DB = new PouchDB('destination' + import_table + debug);
			};			
			DB.put(doc).then(function(response){
				return addDestination(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('destination' + import_table + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'destination' + import_table + debug);
					localDB.sync(remoteDB).on('complete', (info) => {   
				    }).on('error', function (err) {
				    	alert('alert sync destination : ' + JSON.stringify(err));
					});
				}).catch(function (err) {
					console.log(err);
				});
			}
		};
	};
				
	var i = tabNewType_animal.length;
	addType_animal(i);
	function addType_animal(i) {
	    if (i > 0) {
	    	var id = uuid();
			var doc = new Object();
			doc._id = id;
			doc.Type_animal = tabNewType_animal[i-1];
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'type_animal' + import_table + debug);
			} else {
				var DB = new PouchDB('type_animal' + import_table + debug);
			};
			DB.put(doc).then(function(response){
				return addType_animal(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('type_animal' + import_table + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'type_animal' + import_table + debug);
					localDB.sync(remoteDB).on('complete', (info) => {   
				    }).on('error', function (err) {
				   		alert('alert sync type_animal : ' + JSON.stringify(err));
					});
				}).catch(function (err) {
					console.log(err);
				});
			}
		};
	};
						
	var i = tabNewEtat_carcasse_animal.length;
	addEtat_carcasse_animal(i);
	function addEtat_carcasse_animal(i) {
		if (i > 0) {
			var id = uuid();
			var doc = new Object();
			doc._id = id;
			doc.Etat_carcasse_animal = tabNewEtat_carcasse_animal[i-1];
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'etat_carcasse_animal' + import_table + debug);
			} else {
				var DB = new PouchDB('etat_carcasse_animal' + import_table + debug);
			};
			DB.put(doc).then(function(response){
				return addEtat_carcasse_animal(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('etat_carcasse_animal' + import_table + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'etat_carcasse_animal' + import_table + debug);
					localDB.sync(remoteDB).on('complete', (info) => {   
					}).on('error', function (err) {
				   		alert('alert sync etat_carcasse_animal : ' + JSON.stringify(err));
					});
				}).catch(function (err) {
					console.log(err);
				});
			}
		};
	};
	
	var i = tabNewQualite_echantillon.length;
	addQualite_echantillon(i);
	function addQualite_echantillon(i) {
		if (i > 0) {
			var id = uuid();
			var doc = new Object();
			doc._id = id;
			doc.Qualite_echantillon = tabNewQualite_echantillon[i-1];
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'qualite_echantillon' + import_table + debug);
			} else {
				var DB = new PouchDB('qualite_echantillon' + import_table + debug);
			};
			DB.put(doc).then(function(response){
				return addQualite_echantillon(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('qualite_echantillon' + import_table + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'qualite_echantillon' + import_table + debug);
					localDB.sync(remoteDB).on('complete', (info) => {   
					}).on('error', function (err) {
				   		alert('alert sync qualite_echantillon : ' + JSON.stringify(err));
					});
				}).catch(function (err) {
					console.log(err);
				});
			}
		};
	};
	
	var i = tabNewEndroit_prelevement.length;
	addEndroit_prelevement(i);
	function addEndroit_prelevement(i) {
		if (i > 0) {
			var id = uuid();
			var doc = new Object();
			doc._id = id;
			doc.Endroit_prelevement = tabNewEndroit_prelevement[i-1];
			var localDB = new PouchDB('endroit_prelevement' + import_table + debug);
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'endroit_prelevement' + import_table + debug);
			} else {
				var DB = new PouchDB('endroit_prelevement' + import_table + debug);
			};
			DB.put(doc).then(function(response){
				return addEndroit_prelevement(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('endroit_prelevement' + import_table + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'endroit_prelevement' + import_table + debug);
					localDB.sync(remoteDB).on('complete', (info) => {   
					}).on('error', function (err) {
				   		alert('alert sync endroit_prelevement : ' + JSON.stringify(err));
					});
				}).catch(function (err) {
					console.log(err);
				});
			}
		};
	};
	
	console.log('synchronized !');
};

function synchronizeEspece(table) {
	var localDB = new PouchDB(table + import_table/*synchronizeEspece*/ + debug);
	localDB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var remoteDB = new PouchDB(remote_couchdb + table + import_table/*synchronizeEspece*/ + debug);
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
};

function record_change_bushmeat(result, rowContent_length) {
    
	var doc = result.docs[0];
	
	var num_string = extraireNombre(result.docs[0].N_identification_echantillon);
	var num = Number(num_string);
		
	var name_field = field[num];
	
	for (var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
		var name_field = field[rowCountContent];
		var value_from_database, value_from_file;
		
		if (typeof doc[name_field] === "undefined") {
			alert("doc[name_field] : undefined - " + name_field);
			value_from_database = '';
		} else {
			value_from_database = doc[name_field].toString();
			value_from_database = value_from_database.trim();	
		};
		
		if (typeof tab[num][rowCountContent] === "undefined") {
			alert("tab[" + num + "][" + rowCountContent + "] : undefined - " + name_field);
			value_from_file = '';
		} else {
			value_from_file = tab[num][rowCountContent];
			value_from_file = value_from_file.toString();
			value_from_file = value_from_file.trim();	
		};
		
		if (value_from_database != value_from_file) {
			console.log('value_from_database : "' + value_from_database + '" --- value_from_file : "' + value_from_file + '"'); 
			console.log('record change : ' + tab[num][0] + ' --- ' + name_field + ' --- ' + doc._id);
			return true;
		};
	};
	return false;
};

function addValueInTableReferenceBushmeat(rowCountContent, rowContent) {
	
	//N_identification
	if (rowCountContent == 0) {
		sN_identification = rowContent;
	}  else
	//N_site
	if ((rowCountContent == 1) && (rowContent !== String(''))) {
		var new_site = true;
		for (var i = 0; i < tabN_site.length; i++) {
			if (tabN_site[i] == String(rowContent)) {
				new_site = false;
			};
		};
		if (new_site) {
			tabN_site.push(rowContent);
			tabNewN_site.push(rowContent);		
		};
	} else
	//Pays
	if ((rowCountContent == 3) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
		var new_pays = true;
		for (var i = 0; i < tabPays.length; i++) {
			if (tabPays[i] == String(rowContent)) {
				new_pays = false;
			};
		};
		if (new_pays) {
			tabPays.push(rowContent);
			tabNewPays.push(rowContent);		
		};
	} else
	//Lieu_collecte
	if ((rowCountContent == 8) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
		var new_lieu_collecte = true;
		for (var i = 0; i < tabLieu_collecte.length; i++) {
			//alert(tabLieu_collecte[i]);
			if (tabLieu_collecte[i] == String(rowContent)) {
				new_lieu_collecte = false;
			};
		};
		if (new_lieu_collecte) {
			tabLieu_collecte.push(rowContent);
			tabNewLieu_collecte.push(rowContent);		
		};
	} else
	//Preleve_chez
	if ((rowCountContent == 13) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
		var new_preleve_chez = true;
		for (var i = 0; i < tabPreleve_chez.length; i++) {
			//alert('tabPreleve_chez[i]:' + tabPreleve_chez[i] + '--rowContent:' + rowContent)
			if (tabPreleve_chez[i] == String(rowContent)) {
				new_preleve_chez = false;
			};
		};
		if (new_preleve_chez) {
			tabPreleve_chez.push(rowContent);
			tabNewPreleve_chez.push(rowContent);		
		};
	} else
	//Methode_chasse
	if ((rowCountContent == 15) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
		var new_methode_chasse = true;
		for (var i = 0; i < tabMethode_chasse.length; i++) {
			if (tabMethode_chasse[i] == String(rowContent)) {
				new_methode_chasse = false;
			};
		};
		if (new_methode_chasse) {
			tabMethode_chasse.push(rowContent);
			tabNewMethode_chasse.push(rowContent);				
		}
	} else
	//Destination
	if ((rowCountContent == 19) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
		var new_destination = true;
		for (var i = 0; i < tabDestination.length; i++) {
			if (tabDestination[i] == String(rowContent)) {
				new_destination = false;
			};
		};
		if (new_destination) {
			tabDestination.push(rowContent);
			tabNewDestination.push(rowContent);		
		};
	} else
	//Type_animal
	if ((rowCountContent == 22) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
		var new_type_animal = true;
		for (var i = 0; i < tabType_animal.length; i++) {
			if (tabType_animal[i] == String(rowContent)) {
				new_type_animal = false;
			};
		};
		if (new_type_animal) {
			tabType_animal.push(rowContent);
			tabNewType_animal.push(rowContent);		
		};
	} else
	//Etat_carcasse_animal
	if ((rowCountContent == 30) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
		var new_etat_carcasse_animal = true;
		for (var i = 0; i < tabEtat_carcasse_animal.length; i++) {
			if (tabEtat_carcasse_animal[i] == String(rowContent)) {
				new_etat_carcasse_animal = false;
			};
		};
		if (new_etat_carcasse_animal) {
			tabEtat_carcasse_animal.push(rowContent);
			tabNewEtat_carcasse_animal.push(rowContent);		
		};
	} else
	//Qualite_echantillon
	if ((rowCountContent == 36) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
		var new_qualite_echantillon = true;
		for (var i = 0; i < tabQualite_echantillon.length; i++) {
			if (tabQualite_echantillon[i] == String(rowContent)) {
				new_qualite_echantillon = false;
			};
		};
		if (new_qualite_echantillon) {
			tabQualite_echantillon.push(rowContent);
			tabNewQualite_echantillon.push(rowContent);		
		}
	} else
	//Endroit_prelevement
	if ((rowCountContent == 37) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
		var new_endroit_prelevement = true;
		for (var i = 0; i < tabEndroit_prelevement.length; i++) {
			if (tabEndroit_prelevement[i] == String(rowContent)) {
				new_endroit_prelevement = false;
			};
		};
		if (new_endroit_prelevement) {
			tabEndroit_prelevement.push(rowContent);
			tabNewEndroit_prelevement.push(rowContent);		
		};
	};
};

function addEspeceInTableReferenceBushmeat(i) {
	console.log(i + ' : ' + tab[i][24].trim() + ' ' + tab[i][25].trim() + ' ' + tab[i][26].trim());
	
	//Espece
	Espece = tab[i][24].trim().toUpperCase() + ' ' + tab[i][25].trim() + ' ' + tab[i][26].trim();
	
	addNewEspeceAnimalInTab(Espece);
	
	function addNewEspeceAnimalInTab(EspeceAnimal) {
		var new_espece_animal = true;
		for (var i = 0; i < tabEspeceAnimal.length; i++) {
			if (tabEspeceAnimal[i].trim() == '') {
				new_espece_animal = false;
			} else if (tabEspeceAnimal[i].trim() == EspeceAnimal.trim()) {
				new_espece_animal = false;
			} else if (tabEspeceAnimal[i].trim().includes(EspeceAnimal.trim())) {
				new_espece_animal = false;
			};
		};
		if (new_espece_animal) {			
			tabEspeceAnimal.push(EspeceAnimal.trim());
			tabNewEspeceAnimal.push(EspeceAnimal.trim());	
		};
	};	
};

function addNom(NomX) {
    this.Nom = NomX;
    this.NomX = function() {
        return this.Nom;
    };		    
};

function addFamilleGenreEspece(i, table) {
	if (i > 0) {
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
};

function addNewObjectToTab(arr, i) {
	obj = new addEchantillon(tab[i][27], tab[i][28], tab[i][29], tab[i][30], tab[i][31]);
	arr.push(obj);
};

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



