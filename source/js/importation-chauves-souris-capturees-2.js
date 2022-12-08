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

var tabN_site = [];
var tabNewN_site = [];
var tabPays = [];
var tabNewPays = [];
var tabEspece = [];
var tabNewEspece = [];
var tabNewRegimeAlimentaire = []
var tabLieu_capture = [];
var tabNewLieu_capture = [];
var tabMethode_capture = [];
var tabNewMethode_capture = [];
var tabCouleur_pelage_dorsal = [];
var tabNewCouleur_pelage_dorsal = [];
var tabCouleur_pelage_ventral = [];
var tabNewCouleur_pelage_ventral = [];
var tabFilet = [];

var tabImportedFile = new Array();

if (import_table != '_astre_transvihmi_guinee') {
	var valid_field = 
		['N_identification_CS', 'N_identification_mere', 'Numero_mission', 'N_site', 'Date',
		 'Equipe', 'Pays', 'Region_capture', 'Site_capture', 'Lieu_capture',
	     'Environnement', 'Latitude', 'Lat_degre_dec', 'Longitude', 'Long_degre_dec',
	     'Proximite_village_km', 'Methode_capture', 'NumFilet'/*, 'LongueurFilet',
	     'HauteurFilet', 'Lat_degre_decFilet', 'LatitudeFilet', 'Long_degre_decFilet',
	     'LongitudeFilet'*/, 'Lat_degre_dec_Lieu_capture', 'Latitude_Lieu_capture', 
	     'Long_degre_dec_Lieu_capture', 'Longitude_Lieu_capture',
	     'Collier', 'Type_collier', 'Num_serie',
	     'Type_chauve_souris', 'Espece_identifiee', 'Famille_terrain', 'Genre_terrain', 'Espece_terrain',
	     'Famille_labo', 'Genre_labo', 'Espece_labo', 'Famille_consensus', 'Genre_consensus', 
	     'Espece_consensus', 'Sexe', 'Age', 'Gestante', 'Lactation', 'Suitee', 'Sexe_enfant',
	     'Poids_enfant', 'Identifiant_enfant', 'Vivante', 'Cause_deces', 'Poids_gr',
	     'L_avant_bras_mm', 'L_totale_corps_mm', 'Taille_yeux', 'L_queue_mm',
	     'L_metacarpe_3ieme_doigt_mm', 'Couleur_pelage_dorsal',
	     'Couleur_pelage_ventral', 'Photo', 'Remarques_anomalies', 'Sang_DBS_nb_cercles', 
	     'Sang_tube_EDTA', 'Feces_RNAl', 'Urine', 'Urine_DUS_nombre_cercles',
	     'Feces_urine_RNAl', 'Ecouvillon_gorge_RNAl', 'Ecouvillon_rectal_RNAl',
	     'Ectoparasites_ethanol', 'Poils_ethanol', 'Wing_punch_ethanol',
	     'Feces_culture_glycerol', 'Feces_ethanol', 'Sperme', 'Lait', 'Autres_echantillons_remarques',
	     'Specimen_entier', 'Specimen_preserve_dans', 'Prelevement_organe',
	     'Foie_formol', 'Foie_RNAl', 'Rate_formol', 'Rate_RNAl', 'Reins_formol',
	     'Reins_RNAl', 'Intestins_formol', 'Intestins_RNAl', 'Poumons_formol',
	     'Poumons_RNAl', 'Coeur_formol','Coeur_RNAl', 'Ggl_lymph_formol',
	     'Ggl_lymph_RNAl', 'Testicules_formol', 'Testicules_RNAl', 'Peau_formol',
	     'Peau_RNAl', 'Muscles_formol', 'Muscles_RNAl', 'Cerveau_formol',
	     'Cerveau_RNAl', 'Autre', 'Autre_formol', 'Autre_RNAl', 'Remarques_echantillons'];
	} else {
		var valid_field = 
			['N_identification_CS', 'N_identification_mere', 'Numero_mission', 'N_site', 'Date', 'Equipe', 'Pays', 'Prefecture', 
			 'Sous-prefecture', 'Ville/village', 'Site_capture', 'Environnement', 'Latitude', 'Lat_degre_dec', 'Longitude', 'Long_degre_dec', 
			 'Proximite_village_km', 'Proximite_source_m', 'Methode_capture', 'NumFilet/piege', 'LongueurFilet', 'HauteurFilet', 'Lat_degre_decFilet', 
			 'LatitudeFilet', 'Long_degre_decFilet', 'LongitudeFilet', 'Lat_degre_dec_Lieu_capture', 'Latitude_Lieu_capture', 
			 'Long_degre_dec_Lieu_capture', 'Longitude_Lieu_capture', 'Type_chauve_souris', 'Espece_identifiee', 'Famille_terrain', 'Genre_terrain', 
			 'Espece_terrain', 'Famille_labo', 'Genre_labo', 'Espece_labo', 'Famille_consensus', 'Genre_consensus', 'Espece_consensus', 'Sexe', 
			 'Age', 'Gestante', 'Lactation', 'Suitee', 'Sexe_enfant', 'Poids_enfant', 'Identifiant_enfant', 'Vivante', 'Cause_deces', 'Poids_gr', 
			 'L_avant_bras_mm', 'Ailes_WS', 'L_totale_corps_Ltc_mm', 'TL_L_Totale_avec_queue_mm', 'Taille_yeux', 'L_queue_T_mm', 'E_mm', 'Tr_mm', 'Tib_mm', 
			 'HF_L_arriere_pied_mm', 'NL_breadth_larg_feuille_de_nez_mm', 'NL_lenght_mm', 'L_metacarpe_3ieme_doigt_mm', 'Couleur_pelage_dorsal', 
			 'Couleur_pelage_ventral', 'Photo', 'Remarques_anomalies', 'Sang_DBS_nb_cercles', 'Sang_tube_EDTA', 'Feces_RNAl', 'Urine', 
			 'Urine_DUS_nombre_cercles', 'Feces_urine_RNAl', 'Ecouvillon_gorge_RNAl', 'Ecouvillon_rectal_RNAl', 'Ectoparasites_ethanol', 
			 'Poils_ethanol', 'Wing_punch_ethanol', 'Feces_culture_glycerol', 'Feces_ethanol', 'Sperme', 'Lait', 'Autres_echantillons_remarques', 
			 'Specimen_entier', 'Specimen_preserve_dans', 'Prelevement_organe', 'Foie_formol', 'Foie_RNAl', 'Rate_formol', 'Rate_RNAl', 
			 'Reins_formol', 'Reins_RNAl', 'Intestins_formol', 'Intestins_RNAl', 'Poumons_formol', 'Poumons_RNAl', 'Coeur_formol', 'Coeur_RNAl', 
			 'Ggl_lymph_formol', 'Ggl_lymph_RNAl', 'Testicules_formol', 'Testicules_RNAl', 'Peau_formol', 'Peau_RNAl', 'Muscles_formol', 
			 'Muscles_RNAl', 'Cerveau_formol', 'Cerveau_RNAl', 'Autre', 'Autre_formol', 'Autre_RNAl', 'Remarques_echantillons', 'Username', 
			 'Filet_temps', 'Arret_Capture']

	}

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
if (import_table != '_astre_transvihmi_guinee') {
	var siteTablesData = JSON.parse(localStorage.getItem('site' + import_table + 'TablesData'));
	siteTablesData.rows.forEach(function(row){   
		tabN_site.push(row.doc.N_site);
	});
	tab_Lieu_Capture();
} else {
	var caracterisations_grottesTablesData = JSON.parse(localStorage.getItem('caracterisations_grottes' + import_table + 'TablesData'));
	caracterisations_grottesTablesData.rows.forEach(function(row){   
		tabN_site.push(row.doc.N_site);
	});
	tab_Couleur_pelage_dorsal()
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
	
	tab_Pays()
}

function tab_Pays() {
	var paysTablesData = JSON.parse(localStorage.getItem('pays' + import_table + 'TablesData'));
	paysTablesData.rows.forEach(function(row){   
		tabPays.push(row.doc.Pays);
	});
	importation();
}

function importation() {
	disable_li();
	disable_button();
	
	if (lines_length > 1) {
	
		var row = 0;
		
		field = lines[0].trim().split(";");
		rowContent_length = field.length;
		
		/*alert(field.length);
		alert(valid_field.length);*/
		
		
		//verif valid template
		if (fields_is_valid()) {
			
			if (is_only_one_country()) {
			
				/*for (var line = 1; line < lines_length; line++) {
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
					fill_tab_datas_bat_capturees(rowContent[0], line);
				};*/
				
				for (var line = 1; line < lines_length; line++) {
					tabImportedFile[line-1] = new Array();
					rowContent = lines[line].trim().split(";");
					for(var rowCountContent = 0; rowCountContent < valid_field.length; rowCountContent++) {
						tabImportedFile[line-1][rowCountContent] = rowContent[rowCountContent];
						//console.log(valid_field[rowCountContent] + ' : ' + tabImportedFile[line-1][rowCountContent]);
					};
				}
				
				//if (file_line == lines_length - 1) {
					show_progress_bar();
					
					progressbar_count = Math.round((lines_length-1) / 20);
					step = 100 / progressbar_count; 
					step = step / 2;
					width = 0;
					
					/*if (localStorage.getItem('web') === 'oui') {
						var remote_couchdb = localStorage.getItem('remote_couchdb');
						var DB = new PouchDB(remote_couchdb + import_table + debug);
					} else {
						var DB = new PouchDB(import_table + debug);
					};*/
					
					search_N_identification_Recursif_CS(lines_length-1);
				//};
				
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
	
	var i_pays = 6;
	
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

/*function fill_tab_datas_bat_capturees(id, file_line) {
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
		
		/*if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + import_table + debug);
		} else {
			var DB = new PouchDB(import_table + debug);
		};*/
		
		/*search_N_identification_Recursif_CS(tab_max);
	};
};*/

function search_N_identification_Recursif_CS(/*localDB, */i) {
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'chauves_souris_capturees' + import_table + debug);
	} else {
		var DB = new PouchDB('chauves_souris_capturees' + import_table + debug);
	};
	
	if (i > -1) {

		//if (typeof tab[i] !== "undefined") {
			//var N_identification_CS = tab[i][0];
		if (typeof tabImportedFile[i] !== "undefined") {
			var N_identification_CS = tabImportedFile[i][0];
	
			
			DB.find({
		       	selector: {N_identification_CS: N_identification_CS}
			}).then(function (result) {
		    	
		    	if (result.docs.length > 0) {
		    		move();
		    		row++;
		    		
		    		/*var id = result.docs[0]._id;
	    			put_with_id_bat_capturees(id, i);
	    			
	    			for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
						//var rowContent = tab[i][rowCountContent]
	    				var rowContent = tabImportedFile[i][rowCountContent]
						addValueInTableReferenceBatCapturees(rowCountContent, rowContent);
	    			};
					
					addEspeceInTableReferenceBatCapturees(i);
	    			search_N_identification_Recursif_CS(i-1);*/
	    			
		    		
		    		
		    		if (record_change_bat_capturees(i, result, rowContent_length)) {
		    			var id = result.docs[0]._id;
		    			put_with_id_bat_capturees(id, i);
		    			
		    			for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
							//var rowContent = tab[i][rowCountContent]
		    				var rowContent = tabImportedFile[i][rowCountContent]
							addValueInTableReferenceBatCapturees(rowCountContent, rowContent);
		    			};
						
						addEspeceInTableReferenceBatCapturees(i);
		    			
		    			search_N_identification_Recursif_CS(i-1);
		    			//addEspeceInTableReferenceBatCapturees(i);
		    			
				    } else {
		    			search_N_identification_Recursif_CS(i-1);
				    };
		    	} else {
		    		
		    		var new_doc = {};
		    		
		    		//var numero_individu_string = extraireNombre(N_identification_CS);
		    		//var numero_individu = Number(numero_individu_string);
		    		
		    		for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
						var name_field = field[rowCountContent];
						//var rowContent = tab[numero_individu][rowCountContent]
						var rowContent = tabImportedFile[i][rowCountContent]
						
						
						//trim pour Famille/Genre/Espèce
						if (import_table != '_astre_transvihmi_guinee') {
							//if (rowCountContent > 29 && rowCountContent < 39) {
							//	if ((rowCountContent === 30) || (rowCountContent === 33) || (rowCountContent === 36)) {
							if (rowCountContent > 26 && rowCountContent < 36) {	
								if ((rowCountContent === 27) || (rowCountContent === 30) || (rowCountContent === 33)) {
									new_doc[name_field] = rowContent.trim().toUpperCase();
								} else {
									new_doc[name_field] = rowContent.trim();	
								};
							} else {
								new_doc[name_field] = rowContent;
								
								addValueInTableReferenceBatCapturees(rowCountContent, rowContent);
							};
						} else {
							if (rowCountContent > 31 && rowCountContent < 41) {
								if ((rowCountContent === 32) || (rowCountContent === 35) || (rowCountContent === 38)) {
									new_doc[name_field] = rowContent.trim().toUpperCase();
								} else {
									new_doc[name_field] = rowContent.trim();	
								};
							} else {
								new_doc[name_field] = rowContent;
								
								addValueInTableReferenceBatCapturees(rowCountContent, rowContent);
							};
						}
							
					};
					
					addEspeceInTableReferenceBatCapturees(i);
					
					var id = uuid();
					new_doc._id = id;
					//new_doc.Numero_individu = String(numero_individu);
					new_doc.Username = localStorage.getItem('loginUsername');
								
					put_new_id_bat_capturees(new_doc, i);
					
					move();
					row++;
					
					search_N_identification_Recursif_CS(/*localDB, */i-1);
		    		
		    	}
		    }).catch(function (err) {
		       	console.log(err);
		    });
			
			console.log("full - " + i);
		} else {
			
			//addEspeceInTableReferenceBatCapturees(i);
			
			console.log("empty - " + i);
			move();
			row++;
			
			search_N_identification_Recursif_CS(/*localDB, */i-1);
			
		};
	} else {
		
		synchronizeBatCapturees();
		if (localStorage.getItem('web') !== 'oui') {
			synchronizeEspece('espece');
		}
	};
};

function put_with_id_bat_capturees(id, i) {
	
	var sN_identification;
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'chauves_souris_capturees' + import_table + debug);
	} else {
		var DB = new PouchDB('chauves_souris_capturees' + import_table + debug);
	};
	DB.get(id).then(function (doc) {
		
		for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
			var name_field = field[rowCountContent];
			
			//var rowContent = tab[i][rowCountContent];
			var rowContent = tabImportedFile[i][rowCountContent];		
			
			//addValueInTableReferenceBatCapturees(rowCountContent, rowContent);
						
			//trim pour Famille/Genre/Espèce
			/*if (rowCountContent > 26 && rowCountContent < 36) {	
				if ((rowCountContent === 27) || (rowCountContent === 30) || (rowCountContent === 33)) {
					doc[name_field] = rowContent.trim().toUpperCase();
				} else {
					doc[name_field] = rowContent.trim();	
				};
			} else {
				doc[name_field] = rowContent;
			};*/
			
			if (import_table != '_astre_transvihmi_guinee') {
				//if (rowCountContent > 29 && rowCountContent < 39) {
				//	if ((rowCountContent === 30) || (rowCountContent === 33) || (rowCountContent === 36)) {
				if (rowCountContent > 26 && rowCountContent < 36) {	
					if ((rowCountContent === 27) || (rowCountContent === 30) || (rowCountContent === 33)) {
						doc[name_field] = rowContent.trim().toUpperCase();
					} else {
						doc[name_field] = rowContent.trim();	
					};
				} else {
					doc[name_field] = rowContent;
				};
			} else {
				//Species
				if (rowCountContent > 31 && rowCountContent < 41) {
					if ((rowCountContent === 32) || (rowCountContent === 35) || (rowCountContent === 38)) {
						doc[name_field] = rowContent.trim().toUpperCase();
					} else if ((rowCountContent === 33) || (rowCountContent === 36) || (rowCountContent === 39)) {
						doc[name_field] = rowContent[0].toUpperCase() + rowContent.slice(1).toLowerCase();
					} else {
						doc[name_field] = rowContent.trim();	
					};
				} else {
					doc[name_field] = rowContent;
				};
				//Age
				if (rowCountContent === 42) {
					doc[name_field] = rowContent[0].toUpperCase() + rowContent.slice(1).toLowerCase();
				}
			}
			
			doc.Username = localStorage.getItem('loginUsername');
			//doc.Username = 'MorganeL';
			
			

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


function put_new_id_bat_capturees(doc, i) {
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'chauves_souris_capturees' + import_table + debug);
	} else {
		var DB = new PouchDB('chauves_souris_capturees' + import_table + debug);
	};
	DB.put(doc).then(function () {
		console.log('put - add : ' + i);
		//console.log(i + " : " + tab[i][0]);
		console.log(i + " : " + tabImportedFile[i][0]);
	});
};

function synchronizeBatCapturees() {
	
	if (localStorage.getItem('web') !== 'oui') {
		var localDB = new PouchDB('chauves_souris_capturees' + import_table + debug);
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var remoteDB = new PouchDB(remote_couchdb + 'chauves_souris_capturees' + import_table + debug, {skip_setup: true});
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
				//if (typeof tab[j] !== "undefined") {
				//	if (tab[j][2] == tabNewN_site[i-1]) {
				if (typeof tabImportedFile[j] !== "undefined") {
					if (tabImportedFile[j][2] == tabNewN_site[i-1]) {
						newSite = true;
					} else {
						j++;
					};
					
				}
				else {
					j++;
				};
			};
			
			/*doc.Date = tab[j][4];
			doc.Equipe = tab[j][5]; 
			doc.Pays = tab[j][6];
			doc.Region_capture = tab[j][7]; 
			doc.Site_capture = tab[j][8];
			doc.Lieu_capture = tab[j][9];
			doc.Environnement = tab[j][10];
			doc.Latitude = tab[j][11];
			doc.Lat_degre_dec = tab[j][12];	
			doc.Longitude = tab[j][13];
			doc.Long_degre_dec = tab[j][14];	
			doc.Proximite_village_km = tab[j][15];*/
			
			doc.Date = tabImportedFile[j][4];
			doc.Equipe = tabImportedFile[j][5]; 
			doc.Pays = tabImportedFile[j][6];
			doc.Region_capture = tabImportedFile[j][7]; 
			doc.Site_capture = tabImportedFile[j][8];
			doc.Lieu_capture = tabImportedFile[j][9];
			doc.Environnement = tabImportedFile[j][10];
			doc.Latitude = tabImportedFile[j][11];
			doc.Lat_degre_dec = tabImportedFile[j][12];	
			doc.Longitude = tabImportedFile[j][13];
			doc.Long_degre_dec = tabImportedFile[j][14];	
			doc.Proximite_village_km = tabImportedFile[j][15];
			
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + 'site' + import_table/*nom_equipe*/ + debug);
			} else {
				var DB = new PouchDB('site' + import_table/*+ nom_equipe*/ + debug);
			};
			DB.put(doc).then(function(response){
				return addN_site(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('site' + import_table/*+ nom_equipe*/ + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'site' + import_table/*+ nom_equipe*/ + debug);
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
				var DB = new PouchDB(remote_couchdb + 'pays' + import_table/*+ nom_equipe*/ + debug);
			} else {
				var DB = new PouchDB('pays' + import_table/*+ nom_equipe*/ + debug);
			};
			DB.put(doc).then(function(response){
				return addPays(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('pays' + import_table/*+ nom_equipe*/ + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'pays' + import_table/*+ nom_equipe*/ + debug);
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
				var DB = new PouchDB(remote_couchdb + 'lieu_capture' + import_table /*+ nom_equipe*/ + debug);
			} else {
				var DB = new PouchDB('lieu_capture' + import_table/*+ nom_equipe*/ + debug);
			};
			DB.put(doc).then(function(response){
				return addLieu_capture(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('lieu_capture' + import_table/*+ nom_equipe*/ + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'lieu_capture' + import_table /*+ nom_equipe*/ + debug);
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
	};*/
	
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
				var DB = new PouchDB(remote_couchdb + 'methode_capture' + import_table/*+ nom_equipe*/ + debug);
			} else {
				var DB = new PouchDB('methode_capture' + import_table/*+ nom_equipe*/ + debug);
			};
			DB.put(doc).then(function(response){
				return addMethode_capture(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('methode_capture' + import_table /*+ nom_equipe*/ + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'methode_capture' + import_table /*+ nom_equipe*/ + debug);
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
				var DB = new PouchDB(remote_couchdb + 'couleur_pelage_dorsal' + import_table/*+ nom_equipe*/ + debug);
			} else {
				var DB = new PouchDB('couleur_pelage_dorsal' + import_table/*+ nom_equipe*/ + debug);
			};
			DB.put(doc).then(function(response){
				return addCouleur_pelage_dorsal(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('couleur_pelage_dorsal' + import_table/*+ nom_equipe*/ + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'couleur_pelage_dorsal' + import_table/*+ nom_equipe*/ + debug);
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
				var DB = new PouchDB(remote_couchdb + 'couleur_pelage_ventral' + import_table/*+ nom_equipe*/ + debug);
			} else {
				var DB = new PouchDB('couleur_pelage_ventral' + import_table/*+ nom_equipe*/ + debug);
			};
			DB.put(doc).then(function(response){
				return addCouleur_pelage_ventral(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('couleur_pelage_ventral' + import_table/*+ nom_equipe*/ + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'couleur_pelage_ventral' + import_table/*+ nom_equipe*/ + debug);
					localDB.sync(remoteDB).on('complete', (info) => {   
				    }).on('error', function (err) {
				   		alert('alert sync couleur_pelage_ventral : ' + JSON.stringify(err));
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
	var localDB = new PouchDB(table + import_table/*+ nom_equipe*/ + debug);
	localDB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var remoteDB = new PouchDB(remote_couchdb + table + import_table/*+ nom_equipe*/ + debug);
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

function record_change_bat_capturees(i, result, rowContent_length) {
    
	var doc = result.docs[0];
	
	//var num_string = extraireNombre(result.docs[0].N_identification_CS);
	//var num = Number(num_string);
		
	//var name_field = field[num];
	
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
		
		//if (typeof tab[num][rowCountContent] === "undefined") {
		if (typeof tabImportedFile[i][rowCountContent] === "undefined") {
			//alert("tab[" + num + "][" + rowCountContent + "] : undefined - " + name_field);
			alert("tabImportedFile[" + i + "][" + rowCountContent + "] : undefined - " + name_field);
			value_from_file = '';
		} else {
			//value_from_file = tab[num][rowCountContent];
			value_from_file = tabImportedFile[i][rowCountContent];
			value_from_file = value_from_file.toString();
			value_from_file = value_from_file.trim();	
		};
		
		if (value_from_database != value_from_file) {
			console.log('value_from_database : "' + value_from_database + '" --- value_from_file : "' + value_from_file + '"'); 
			//console.log('record change : ' + tab[num][0] + ' --- ' + name_field + ' --- ' + doc._id);
			console.log('record change : ' + tabImportedFile[i][0] + ' --- ' + name_field + ' --- ' + doc._id);
			return true;
		};
	};
	return false;
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

/*function addEchantillon(N_identification_echantillonX, Type_echantillonX, Nbre_feces_par_tubeX, Urine_methodeX, Urine_papier_buvard_nbre_cerclesX) {
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
};*/

function addValueInTableReferenceBatCapturees(rowCountContent, rowContent) {
	if (import_table != '_astre_transvihmi_guinee') {
		//N_identification
		if (rowCountContent == 0) {
			sN_identification = rowContent;
		} else
		//N_site
		if ((rowCountContent == 3) && (rowContent !== String(''))) {
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
		if ((rowCountContent == 6) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
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
		if ((rowCountContent == 9) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
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
		} else*/
		//Methode_capture
		if ((rowCountContent == 16) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
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
		if ((rowCountContent == 52) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
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
		if ((rowCountContent == 53) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
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
 	} else {
 		if (rowCountContent == 0) {
			sN_identification = rowContent;
		} else
		//Pays
		if ((rowCountContent == 6) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
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
		}
 		//Couleur_pelage_dorsal
		if ((rowCountContent == 65) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
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
		if ((rowCountContent == 66) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
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
 	}
		
	
	return true;
};

function addEspeceInTableReferenceBatCapturees(i) {
	//console.log(i + ' : ' + tab[i][28].trim() + ' ' + tab[i][30].trim() + ' ' + tab[i][31].trim() + ' ' + tab[i][32].trim());
	//console.log(i + ' : ' + tab[i][28].trim() + ' ' + tab[i][33].trim() + ' ' + tab[i][34].trim() + ' ' + tab[i][35].trim());
	//console.log(i + ' : ' + tab[i][28].trim() + ' ' + tab[i][36].trim() + ' ' + tab[i][37].trim() + ' ' + tab[i][38].trim());
	
	if (import_table != '_astre_transvihmi_guinee') {
		console.log(i + ' : ' + tabImportedFile[i][28].trim() + ' ' + tabImportedFile[i][30].trim() + ' ' + tabImportedFile[i][31].trim() + ' ' + tabImportedFile[i][32].trim());
		console.log(i + ' : ' + tabImportedFile[i][28].trim() + ' ' + tabImportedFile[i][33].trim() + ' ' + tabImportedFile[i][34].trim() + ' ' + tabImportedFile[i][35].trim());
		console.log(i + ' : ' + tabImportedFile[i][28].trim() + ' ' + tabImportedFile[i][36].trim() + ' ' + tabImportedFile[i][37].trim() + ' ' + tabImportedFile[i][38].trim());
		
		Espece1 = tabImportedFile[i][30].trim().toUpperCase() + ' ' + tabImportedFile[i][31].trim() + ' ' + tabImportedFile[i][32].trim();
		Espece2 = tabImportedFile[i][33].trim().toUpperCase() + ' ' + tabImportedFile[i][34].trim() + ' ' + tabImportedFile[i][35].trim();
		Espece3 = tabImportedFile[i][36].trim().toUpperCase() + ' ' + tabImportedFile[i][37].trim() + ' ' + tabImportedFile[i][38].trim();
	} else {
		console.log(i + ' : ' + tabImportedFile[i][30].trim() + ' ' + tabImportedFile[i][32].trim() + ' ' + tabImportedFile[i][33].trim() + ' ' + tabImportedFile[i][34].trim());
		console.log(i + ' : ' + tabImportedFile[i][30].trim() + ' ' + tabImportedFile[i][35].trim() + ' ' + tabImportedFile[i][36].trim() + ' ' + tabImportedFile[i][37].trim());
		console.log(i + ' : ' + tabImportedFile[i][30].trim() + ' ' + tabImportedFile[i][38].trim() + ' ' + tabImportedFile[i][39].trim() + ' ' + tabImportedFile[i][38].trim());
		
		Espece1 = tabImportedFile[i][32].trim().toUpperCase() + ' ' + tabImportedFile[i][33].trim() + ' ' + tabImportedFile[i][34].trim();
		Espece2 = tabImportedFile[i][35].trim().toUpperCase() + ' ' + tabImportedFile[i][36].trim() + ' ' + tabImportedFile[i][37].trim();
		Espece3 = tabImportedFile[i][38].trim().toUpperCase() + ' ' + tabImportedFile[i][39].trim() + ' ' + tabImportedFile[i][40].trim();
	} 
	
	addNewEspeceInTab(Espece1);
	addNewEspeceInTab(Espece2);
	addNewEspeceInTab(Espece3);
	
	function addNewEspeceInTab(Espece) {
		var new_espece = true;
		for (var j = 0; j < tabEspece.length; j++) {
			if (tabEspece[j].trim() == '') {
				new_espece = false;
			} else if (tabEspece[j].trim() == Espece.trim()) {
				new_espece = false;
			} else if (tabEspece[j].trim().includes(Espece.trim())) {
				new_espece = false;
			};
		};
		if (new_espece) {			
			tabEspece.push(Espece.trim());
			tabNewEspece.push(Espece.trim());
			if (import_table != '_astre_transvihmi_guinee') {
				tabNewRegimeAlimentaire.push(tabImportedFile[i][28].trim());
			} else {
				tabNewRegimeAlimentaire.push(tabImportedFile[i][30].trim());
			}
		};
	};	
};

function addNom(NomX) {
    this.Nom = NomX;
    this.NomX = function() {
        return this.Nom;
    };		    
};

function addNom(NomX,Regime_alimentaireX) {
    this.Nom = NomX;
    	    
    this.NomX = function() {
        return this.Nom;
    };		
    
    this.Regime_alimentaire = Regime_alimentaireX;
    
    this.Regime_alimentaireX = function() {
        return this.Regime_alimentaire;
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
			return addFamille(tabEspeceToAdd[0].trim(), tabNewRegimeAlimentaire[i-1].trim(), i, table);
		} else if (tabEspeceToAdd.length == 2) {
			return addGenre(tabEspeceToAdd[0].trim(), tabEspeceToAdd[1].trim(), tabNewRegimeAlimentaire[i-1].trim(), i, table);
		} else if (tabEspeceToAdd.length == 3) {
			return addEspece(tabEspeceToAdd[0].trim(), tabEspeceToAdd[1].trim(), tabEspeceToAdd[2].trim(), tabNewRegimeAlimentaire[i-1].trim(), i, table);
		} else {
			return addFamilleGenreEspece(i-1, table);
		};
		
	} 
};

function addFamille(value, regime_alimentaire, i, table) {
	
	//alert(regime_alimentaire)
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + table + import_table/*+ nom_equipe*/ + debug);
	} else {
		var DB = new PouchDB(table + import_table/*+ nom_equipe*/ + debug);
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
			rowFamille[j] = new addNom(value, regime_alimentaire);
			famille = JSON.stringify(rowFamille);
			famille = JSON.parse(famille);
			
			if (nouvelle_famille) {
				if (localStorage.getItem('web') === 'oui') {
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var EspeceDB = new PouchDB(remote_couchdb + table + import_table/*+ nom_equipe*/ + debug);
				} else {
					var EspeceDB = new PouchDB(table + import_table/*+ nom_equipe*/ + debug);
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

function addGenre(value, value2, regime_alimentaire, i, table) {
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + table + import_table/*+ nom_equipe*/ + debug);
	} else {
		var DB = new PouchDB(table + import_table/*+ nom_equipe*/ + debug);
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
				var EspeceDB = new PouchDB(remote_couchdb + table + import_table/*+ nom_equipe*/ + debug);
			} else {
				var EspeceDB = new PouchDB(table + import_table/*+ nom_equipe*/ + debug);
			};
			EspeceDB.get(id).then(function (doc) {
				value = value.toUpperCase();
				rowFamille[f] = new addNom(value, regime_alimentaire,);
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
				var EspeceDB = new PouchDB(remote_couchdb + table + import_table/*+ nom_equipe*/ + debug);
			} else {
				var EspeceDB = new PouchDB(table + import_table/*+ nom_equipe*/ + debug);
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

function addEspece(value, value2, value3, regime_alimentaire, i, table) {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + table + import_table/*+ nom_equipe*/ + debug);
		
	} else {
		var DB = new PouchDB(table + import_table/*+ nom_equipe*/ + debug);
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
				var EspeceDB = new PouchDB(remote_couchdb + table + import_table/*+ nom_equipe*/ + debug);
			} else {
				var EspeceDB = new PouchDB(table + import_table/*+ nom_equipe*/ + debug);
			};
			EspeceDB.get(id).then(function (doc) {
				value = value.toUpperCase();
				rowFamille[f] = new addNom(value, regime_alimentaire);
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
				var EspeceDB = new PouchDB(remote_couchdb + table + import_table/*+ nom_equipe*/ + debug);
			} else {
				var EspeceDB = new PouchDB(table + import_table/*+ nom_equipe*/ + debug);
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
				var EspeceDB = new PouchDB(remote_couchdb + table + import_table/*+ nom_equipe*/ + debug);
			} else {
				var EspeceDB = new PouchDB(table + import_table/*+ nom_equipe*/ + debug);
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

/*function addNewObjectToTab(arr, i) {
	obj = new addEchantillon(tab[i][28], tab[i][29], tab[i][30], tab[i][31], tab[i][32]);
	arr.push(obj);
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



