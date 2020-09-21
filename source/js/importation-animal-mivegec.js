var import_table = localStorage.getItem('import_table'); 
var file = localStorage.getItem('file_import');
var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

/*var nom_equipe;	
if (import_table == 'chauves_souris_capturees_astre') {
	nom_equipe = '_astre';
} else if (import_table == 'chauves_souris_capturees_transvihmi') {
	nom_equipe = '_transvihmi';
} else if (import_table == 'chauves_souris_capturees_mivegec') {
	nom_equipe = '_mivegec';
};*/

/*var tabN_site = [];
var tabNewN_site = [];
var tabPays = [];
var tabNewPays = [];
var tabEspece = [];
var tabNewEspece = [];
var tabLieu_capture = [];
var tabNewLieu_capture = [];
var tabMethode_capture = [];
var tabNewMethode_capture = [];
var tabCouleur_pelage_dorsal = [];
var tabNewCouleur_pelage_dorsal = [];
var tabCouleur_pelage_ventral = [];
var tabNewCouleur_pelage_ventral = [];*/

var valid_field = 
	['ID_animal', 'pays', 'mission', 'date', 'village', 'type_chasse_capture',
	 'Point_GPS_LAT', 'Point_GPS_LONG', 'animal', 'especes', 'sexes', 'age',
     'poids', 'etat-physioloque', 'plasma', 'serum', 'blood_spot',
     'coeur', 'cerveau', 'foie_rate', 'glandes_salivaires',
     'poumons', 'reins', 'intestins', 'urine',
     'ecouvillon_salivaire', 'ecouvillon_rectal', 'ecouvillon_nasal', 'ectoparasites', 'placenta', 
     'liquide_amniotique', 'testicules', 'lesions_ou_nodules', 'lait', 'foetus', 'observation',
     'guano', 'longueur_bras', 'longueur_avant_bras', 'longueur_corporelle'];

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

/*var siteTablesData = JSON.parse(localStorage.getItem('site' + import_table + 'TablesData'));
siteTablesData.rows.forEach(function(row){   
	tabN_site.push(row.doc.N_site);
});
tab_Pays();

function tab_Pays() {
	var paysTablesData = JSON.parse(localStorage.getItem('pays' + import_table + 'TablesData'));
	paysTablesData.rows.forEach(function(row){   
		tabPays.push(row.doc.Pays);
	});
	tab_Lieu_Capture();
}

function tab_Lieu_Capture() {
	var lieu_captureTablesData = JSON.parse(localStorage.getItem('lieu_capture' + import_table + 'TablesData'));
	lieu_captureTablesData.rows.forEach(function(row){   
		tabLieu_capture.push(row.doc.Lieu_capture);
	});
	tab_Espece();
}

function tab_Espece() {
	
	var especeTablesData = JSON.parse(localStorage.getItem('espece' + import_table + 'TablesData'));
	//alert(localStorage.getItem('espece' + import_table + 'TablesData'));
	
	for (var i=0; i<especeTablesData.rows[0].doc.Famille.length; i++) {
		if (especeTablesData.rows[0].doc.Famille[i].Genre != null) {
			for (var j=0; j<especeTablesData.rows[0].doc.Famille[i].Genre.length; j++) {
				if (especeTablesData.rows[0].doc.Famille[i].Genre[j].Espece != null) {
					for (var k=0; k<especeTablesData.rows[0].doc.Famille[i].Genre[j].Espece.length; k++) {
						tabEspece.push(especeTablesData.rows[0].doc.Famille[i].Nom + ' ' +
								       especeTablesData.rows[0].doc.Famille[i].Genre[j].Nom + ' ' + 
								       especeTablesData.rows[0].doc.Famille[i].Genre[j].Espece[k].Nom);
					};
				} else {
					tabEspece.push(especeTablesData.rows[0].doc.Famille[i].Nom + ' ' +
							       especeTablesData.rows[0].doc.Famille[i].Genre[j].Nom);
				};
			};
		} else {
			tabEspece.push(especeTablesData.rows[0].doc.Famille[i].Nom);
		}
	};
	tab_Methode_capture();
}

function tab_Methode_capture() {
	var methode_captureTablesData = JSON.parse(localStorage.getItem('methode_capture' + import_table + 'TablesData'));
	methode_captureTablesData.rows.forEach(function(row){   
		tabMethode_capture.push(row.doc.Methode_capture);
	});
	
	tab_Couleur_pelage_dorsal()
}

function tab_Couleur_pelage_dorsal() {
	var couleur_pelage_dorsalTablesData = JSON.parse(localStorage.getItem('couleur_pelage_dorsal' + import_table + 'TablesData'));
	couleur_pelage_dorsalTablesData.rows.forEach(function(row){   
		tabCouleur_pelage_dorsal.push(row.doc.Couleur_pelage_dorsal);
	});
	
	tab_Couleur_pelage_ventral()
}

function tab_Couleur_pelage_ventral() {
	var couleur_pelage_ventralTablesData = JSON.parse(localStorage.getItem('couleur_pelage_ventral' + import_table + 'TablesData'));
	couleur_pelage_ventralTablesData.rows.forEach(function(row){   
		tabCouleur_pelage_ventral.push(row.doc.Couleur_pelage_ventral);
	});
	
	importation()
}*/

importation()

function importation() {
	disable_li();
	disable_button();
	
	if (lines_length > 1) {
	
		var row = 0;
		
		field = lines[0].trim().split(";");
		rowContent_length = field.length;
		
		//verif valid template
		if (fields_is_valid()) {
			
			//if (is_only_one_country()) {
			
				/*for (var line = 1; line < lines_length; line++) {
					rowContent = lines[line].trim().split(";");
						
					var num_string = extraireNombre(rowContent[0]);
					var num = Number(num_string);
						
					if (tab_max < num) {
						tab_max = num;
					} 
				}
				*/
				for (var line = 1; line < lines_length; line++) {
					rowContent = lines[line].trim().split(";");
					//console.log(rowContent[0]);
					fill_tab_datas_animals(/*rowContent[0], */line);
				};
			/*} else {
				failure_fields("Le fichier d'importation ne doit concerner qu'un seul et même pays !");
			};*/	
			
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

/*function is_only_one_country() {
	var i_pays = 5;
	
	var rowContent = lines[1].trim().split(";");
	var country = rowContent[i_pays]; 
	for (var line = 2; line < lines_length; line++) {
		rowContent = lines[line].trim().split(";");
		if (rowContent[i_pays] != country) {
			return false;
		};
	};
	return true;
};*/

function fill_tab_datas_animals(file_line) {
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
		
		search_N_identification_Recursif(lines_length);
	};
};

function search_N_identification_Recursif(/*localDB, */i) {
	
	//alert(import_table)
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'animals' + import_table + debug);
	} else {
		var DB = new PouchDB('animals' + import_table + debug);
	};
	
	if (i > 0) {

		if (typeof tab[i] !== "undefined") {
			var ID_animal = tab[i][0];
			
			DB.find({
		       	selector: {ID_animal: ID_animal}
			}).then(function (result) {
		    	
		    	if (result.docs.length > 0) {
		    		move();
		    		row++;
		    		//if (record_change_animals(result, rowContent_length)) {
		    		if (record_exists(result)) {
		    			
		    			var id = result.docs[0]._id;
		    			put_with_id_animals(id, i);
		    			
		    			/*for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
							var rowContent = tab[i][rowCountContent]
							addValueInTableReferenceBatCapturees(rowCountContent, rowContent);
		    			};*/
						
						//addEspeceInTableReferenceBatCapturees(i);
		    			
		    			search_N_identification_Recursif(/*localDB, */i-1);
		    			//addEspeceInTableReferenceBatCapturees(i);
		    			
				    } else {
		    			search_N_identification_Recursif(/*localDB, */i-1);
				    };
		    	} else {
		    		
		    		var new_doc = {};
		    		
		    		//var numero_individu_string = extraireNombre(N_identification_CS);
		    		//var numero_individu = Number(numero_individu_string);
		    		
		    		for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
						var name_field = field[rowCountContent];
						var rowContent = tab[i][rowCountContent]
						
						
						//trim pour Famille/Genre/Espèce
						/*if (rowCountContent > 18 && rowCountContent < 28) {
							if ((rowCountContent === 19) || (rowCountContent === 22) || (rowCountContent === 25)) {
								new_doc[name_field] = rowContent.trim().toUpperCase();
							} else {
								new_doc[name_field] = rowContent.trim();	
							};
						} else {*/
							new_doc[name_field] = rowContent;
							
							/*addValueInTableReferenceBatCapturees(rowCountContent, rowContent);
						};*/
					};
					
					//addEspeceInTableReferenceBatCapturees(i);
					
					var id = uuid();
					new_doc._id = id;
					//new_doc.Numero_individu = String(numero_individu);
					new_doc.Username = localStorage.getItem('loginUsername');
								
					put_new_id_animals(new_doc, i);
					
					move();
					row++;
					
					search_N_identification_Recursif(/*localDB, */i-1);
		    		
		    	}
		    }).catch(function (err) {
		       	console.log(err);
		    });
			
			console.log("full - " + i);
		} else {
			console.log("empty - " + i);
			move();
			row++;
			
			search_N_identification_Recursif(/*localDB, */i-1);
			
		};
	} else {
		
		synchronizeAnimals();
		/*if (localStorage.getItem('web') !== 'oui') {
			synchronizeEspece('espece');
		}*/
	};
};

function put_with_id_animals(id, i) {
	
	//var sN_identification;
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'animals' + import_table + debug);
	} else {
		var DB = new PouchDB('animals' + import_table + debug);
	};
	DB.get(id).then(function (doc) {
		
		for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
			var name_field = field[rowCountContent];
			
			var rowContent = tab[i][rowCountContent];
			
			//addValueInTableReferenceBatCapturees(rowCountContent, rowContent);
						
			//trim pour Famille/Genre/Espèce
			/*if (rowCountContent > 18 && rowCountContent < 28) {	
				if ((rowCountContent === 19) || (rowCountContent === 22) || (rowCountContent === 25)) {
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
			});
		});
	}).catch(function (err) {
       	console.log(err);
       	console.log('error ' + id);
    });
};


function put_new_id_animals(doc, i) {
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'animals' + import_table + debug);
	} else {
		var DB = new PouchDB('animals' + import_table + debug);
	};
	DB.put(doc).then(function () {
		console.log('put - add : ' + i);
		console.log(i + " : " + tab[i][0]);
	});
};

function synchronizeAnimals() {
	
	if (localStorage.getItem('web') !== 'oui') {
		var localDB = new PouchDB('animals' + import_table + debug);
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var remoteDB = new PouchDB(remote_couchdb + 'animals' + import_table + debug, {skip_setup: true});
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
					if (tab[j][2] == tabNewN_site[i-1]) {
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
			doc.Lieu_capture = tab[j][8];
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
	
	var i = tabNewEspece.length;
	addFamilleGenreEspece(i, 'espece');

	var i = tabNewLieu_capture.length;
	addLieu_capture(i);
	function addLieu_capture(i) {
	    if (i > 0) {
	    	var id = uuid();
			var doc = new Object();
			doc._id = id;
			doc.Lieu_capture = tabNewLieu_capture[i-1];
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'lieu_capture' + import_table + debug);
			} else {
				var DB = new PouchDB('lieu_capture' + import_table + debug);
			};
			DB.put(doc).then(function(response){
				return addLieu_capture(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('lieu_capture' + import_table + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'lieu_capture' + import_table + debug);
					localDB.sync(remoteDB).on('complete', (info) => {   
				    }).on('error', function (err) {
				   		alert('alert sync lieu_capture : ' + JSON.stringify(err));
				   	});
				}).catch(function (err) {
					console.log(err);
				});
			}
		};
	};

	/*var i = tabNewEnvironnement.length;
	addEnvironnement(i);
	function addEnvironnement(i) {
	    if (i > 0) {
	    	var id = uuid();
			var doc = new Object();
			doc._id = id;
			doc.Environnement = tabNewEnvironnement[i-1];
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'environnement' + nom_equipe + debug);
			} else {
				var DB = new PouchDB('environnement' + nom_equipe + debug);
			};
			DB.put(doc).then(function(response){
				return addEnvironnement(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('environnement' + nom_equipe + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'environnement' + nom_equipe + debug);
					localDB.sync(remoteDB).on('complete', (info) => {   
				    }).on('error', function (err) {
				   		alert('alert sync environnement : ' + JSON.stringify(err));
				   	});
				}).catch(function (err) {
					console.log(err);
				});
			}
		};
	};
	
	var i = tabNewMethode_capture.length;
	addMethode_capture(i);
	function addMethode_capture(i) {
	    if (i > 0) {
	    	var id = uuid();
			var doc = new Object();
			doc._id = id;
			doc.Methode_capture = tabNewMethode_capture[i-1];
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'methode_capture' + import_table + debug);
			} else {
				var DB = new PouchDB('methode_capture' + import_table + debug);
			};
			DB.put(doc).then(function(response){
				return addMethode_capture(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('methode_capture' + import_table + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'methode_capture' + import_table + debug);
					localDB.sync(remoteDB).on('complete', (info) => {   
				    }).on('error', function (err) {
				   		alert('alert sync methode_capture : ' + JSON.stringify(err));
				   	});
				}).catch(function (err) {
					console.log(err);
				});
			}
		};
	};
	
	var i = tabNewCouleur_pelage_dorsal.length;
	addCouleur_pelage_dorsal(i);
	function addCouleur_pelage_dorsal(i) {
	    if (i > 0) {
	    	var id = uuid();
			var doc = new Object();
			doc._id = id;
			doc.Couleur_pelage_dorsal = tabNewCouleur_pelage_dorsal[i-1];
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'couleur_pelage_dorsal' + import_table + debug);
			} else {
				var DB = new PouchDB('couleur_pelage_dorsal' + import_table + debug);
			};
			DB.put(doc).then(function(response){
				return addCouleur_pelage_dorsal(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('couleur_pelage_dorsal' + import_table + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'couleur_pelage_dorsal' + import_table + debug);
					localDB.sync(remoteDB).on('complete', (info) => {   
				    }).on('error', function (err) {
				   		alert('alert sync couleur_pelage_dorsal : ' + JSON.stringify(err));
				   	});
				}).catch(function (err) {
					console.log(err);
				});
			}
		};
	};
	
	var i = tabNewCouleur_pelage_ventral.length;
	addCouleur_pelage_ventral(i);
	function addCouleur_pelage_ventral(i) {
	    if (i > 0) {
	    	var id = uuid();
			var doc = new Object();
			doc._id = id;
			doc.Couleur_pelage_ventral = tabNewCouleur_pelage_ventral[i-1];
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'couleur_pelage_ventral' + import_table + debug);
			} else {
				var DB = new PouchDB('couleur_pelage_ventral' + import_table + debug);
			};
			DB.put(doc).then(function(response){
				return addCouleur_pelage_ventral(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('couleur_pelage_ventral' + import_table + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'couleur_pelage_ventral' + import_table + debug);
					localDB.sync(remoteDB).on('complete', (info) => {   
				    }).on('error', function (err) {
				   		alert('alert sync couleur_pelage_ventral : ' + JSON.stringify(err));
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

/*function record_change_animals(result, rowContent_length) {
    
	var doc = result.docs[0];
	
	var num_string = extraireNombre(result.docs[0].N_identification_CS);
	var num = Number(num_string);
		
	var name_field = field[num];
	
	for (var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
		var name_field = field[rowCountContent];
		var value_from_database, value_from_file;
		
		if (typeof doc[name_field] === "undefined") {
			//alert("doc[name_field] : undefined - " + name_field);
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
};*/

function record_exists(result) {
    var doc = result.docs[0];
	if (result.docs[0].ID_animal !== null) {
		return true
	} else {
		return false
	};
};

/*function record_exists(result) {
    var doc = result.docs[0];
	var num_string = extraireNombre(result.docs[0].N_identification_collecte);
	if (num_string !== null) {
		return true
	} else {
		return false
	};
};

function addEchantillon(N_identification_echantillonX, Type_echantillonX, Nbre_feces_par_tubeX, Urine_methodeX, Urine_papier_buvard_nbre_cerclesX) {
    this.N_identification_echantillon = N_identification_echantillonX;
    this.Type_echantillon = Type_echantillonX
    this.Nbre_feces_par_tube = Nbre_feces_par_tubeX;
    this.Urine_methode = Urine_methodeX;
    this.Urine_papier_buvard_nbre_cercles = Urine_papier_buvard_nbre_cerclesX;
    	    
    this.Type_echantillonX = function() {
        return this.Type_echantillon;
    };
    
    this.N_identification_echantillonX = function() {
        return this.N_identification_echantillon;
    };
    
    this.Nbre_feces_par_tubeX = function() {
        return this.Nbre_feces_par_tube;
    };
    
    this.Urine_methodeX = function() {
        return this.Urine_methode;
    };
    
    this.Urine_papier_buvard_nbre_cerclesX = function() {
        return this.Urine_papier_buvard_nbre_cercles;
    };
};

function addValueInTableReferenceBatCapturees(rowCountContent, rowContent) {
		
	//N_identification
	if (rowCountContent == 0) {
		sN_identification = rowContent;
	} else
	//N_site
	if ((rowCountContent == 2) && (rowContent !== String(''))) {
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
	if ((rowCountContent == 5) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
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
	//Lieu_capture
	if ((rowCountContent == 8) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
		var new_lieu_capture = true;
		for (var i = 0; i < tabLieu_capture.length; i++) {
			if (tabLieu_capture[i] == String(rowContent)) {
				new_lieu_capture = false;
			};
		};
		if (new_lieu_capture) {
			tabLieu_capture.push(rowContent);
			tabNewLieu_capture.push(rowContent);		
		};
	} else
	//Environnement
	/*if ((rowCountContent == 9) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
		var new_environnement = true;
		for (var i = 0; i < tabEnvironnement.length; i++) {
			if (tabEnvironnement[i] == String(rowContent)) {
				new_environnement = false;
			};
		};
		if (new_environnement) {
			tabEnvironnement.push(rowContent);
			tabNewEnvironnement.push(rowContent);		
		};
	} else
	//Methode_capture
	if ((rowCountContent == 15) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
		var new_methode_capture = true;
		for (var i = 0; i < tabMethode_capture.length; i++) {
			if (tabMethode_capture[i] == String(rowContent)) {
				new_methode_capture = false;
			};
		};
		if (new_methode_capture) {
			tabMethode_capture.push(rowContent);
			tabNewMethode_capture.push(rowContent);		
		};
	} else 
	//Couleur_pelage_dorsal
	if ((rowCountContent == 44) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
		var new_couleur_pelage_dorsal = true;
		for (var i = 0; i < tabCouleur_pelage_dorsal.length; i++) {
			if (tabCouleur_pelage_dorsal[i] == String(rowContent)) {
				new_couleur_pelage_dorsal = false;
			};
		};
		if (new_couleur_pelage_dorsal) {
			tabCouleur_pelage_dorsal.push(rowContent);
			tabNewCouleur_pelage_dorsal.push(rowContent);		
		};
	} else 
	//Couleur_pelage_ventral
	if ((rowCountContent == 45) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
		var new_couleur_pelage_ventral = true;
		for (var i = 0; i < tabCouleur_pelage_ventral.length; i++) {
			if (tabCouleur_pelage_ventral[i] == String(rowContent)) {
				new_couleur_pelage_ventral = false;
			};
		};
		if (new_couleur_pelage_ventral) {
			tabCouleur_pelage_ventral.push(rowContent);
			tabNewCouleur_pelage_ventral.push(rowContent);		
		};
	};
		
	
	return true;
};

function addEspeceInTableReferenceBatCapturees(i) {
	console.log(i + ' : ' + tab[i][19].trim() + ' ' + tab[i][20].trim() + ' ' + tab[i][21].trim());
	console.log(i + ' : ' + tab[i][22].trim() + ' ' + tab[i][23].trim() + ' ' + tab[i][24].trim());
	console.log(i + ' : ' + tab[i][25].trim() + ' ' + tab[i][26].trim() + ' ' + tab[i][27].trim());
	
	//Espece
	Espece1 = tab[i][19].trim().toUpperCase() + ' ' + tab[i][20].trim() + ' ' + tab[i][21].trim();
	Espece2 = tab[i][22].trim().toUpperCase() + ' ' + tab[i][23].trim() + ' ' + tab[i][24].trim();
	Espece3 = tab[i][25].trim().toUpperCase() + ' ' + tab[i][26].trim() + ' ' + tab[i][27].trim();
	
	addNewEspeceInTab(Espece1);
	addNewEspeceInTab(Espece2);
	addNewEspeceInTab(Espece3);
	
	function addNewEspeceInTab(Espece) {
		var new_espece = true;
		for (var i = 0; i < tabEspece.length; i++) {
			if (tabEspece[i].trim() == '') {
				new_espece = false;
			} else if (tabEspece[i].trim() == Espece.trim()) {
				new_espece = false;
			} else if (tabEspece[i].trim().includes(Espece.trim())) {
				new_espece = false;
			};
		};
		if (new_espece) {			
			tabEspece.push(Espece.trim());
			tabNewEspece.push(Espece.trim());
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
	var remote_couchdb = localStorage.getItem('remote_couchdb');
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
			var nouvelle_espece = true;
			
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
	obj = new addEchantillon(tab[i][28], tab[i][29], tab[i][30], tab[i][31], tab[i][32]);
	arr.push(obj);
};

function extraireNombre(str) { 
	return str.match(/[0-9]+/g)
};*/

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



