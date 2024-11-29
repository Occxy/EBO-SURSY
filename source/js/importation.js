var import_table = localStorage.getItem('import_table'); 
var file = localStorage.getItem('file_import');
var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

var nom_equipe;	

if ((import_table == 'chauves_souris_capturees_astre') || (import_table == 'chauves_souris_capturees_transvihmi') || (import_table == 'chauves_souris_capturees_mivegec')) {
	var tabN_site = [];
	if (import_table == 'chauves_souris_capturees_astre') {
		nom_equipe = '_astre';
	} else if (import_table == 'chauves_souris_capturees_transvihmi') {
		nom_equipe = '_transvihmi';
	} else if (import_table == 'chauves_souris_capturees_mivegec') {
		nom_equipe = '_mivegec';
	};
	var DB = new PouchDB('site' + nom_equipe + debug);
 	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		var siteTablesData = JSON.parse(JSON.stringify(result));
		siteTablesData.rows.forEach(function(row){   
			tabN_site.push(row.doc.N_site);
		});
	}).catch(function (err) {
		console.log(err);
	});
 	var tabNewN_site = [];
};

var tabPays = [];
var paysTablesData = JSON.parse(localStorage.getItem('paysTablesData'));
paysTablesData.rows.forEach(function(row){   
	tabPays.push(row.doc.Pays);
});
var tabNewPays = [];

if ((import_table == 'chauves_souris_capturees_astre') || (import_table == 'chauves_souris_capturees_transvihmi') || (import_table == 'chauves_souris_capturees_mivegec')) {
	var tabLieu_capture = [];
	var lieu_captureTablesData = JSON.parse(localStorage.getItem('lieu_captureTablesData'));
	lieu_captureTablesData.rows.forEach(function(row){   
		tabLieu_capture.push(row.doc.Lieu_capture);
	});
	var tabNewLieu_capture = [];
} else if ((import_table == 'chauves_souris_non_invasives_astre') || (import_table == 'chauves_souris_non_invasives_transvihmi') || (import_table == 'chauves_souris_non_invasives_mivegec') || (import_table == 'viande_de_brousse_transvihmi') || (import_table == 'viande_de_brousse_mivegec')) {
	var tabLieu_collecte = [];
	var lieu_collecteTablesData = JSON.parse(localStorage.getItem('lieu_collecteTablesData'));
	lieu_collecteTablesData.rows.forEach(function(row){   
		tabLieu_collecte.push(row.doc.Lieu_collecte);
	});
	var tabNewLieu_collecte = [];
};

if ((import_table == 'chauves_souris_capturees_astre') || (import_table == 'chauves_souris_capturees_transvihmi') || (import_table == 'chauves_souris_capturees_mivegec')
	 || (import_table == 'chauves_souris_non_invasives_astre') || (import_table == 'chauves_souris_non_invasives_transvihmi') || (import_table == 'chauves_souris_non_invasives_mivegec')) {
	var tabEspece = [];
	var especeTablesData = JSON.parse(localStorage.getItem('especeTablesData'));
	
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
	var tabNewEspece = [];
} else if ((import_table == 'viande_de_brousse_transvihmi') || (import_table == 'viande_de_brousse_mivegec')) {
	var tabEspeceAnimal = [];
	var especeAnimalTablesData = JSON.parse(localStorage.getItem('especeAnimalTablesData'));
	
	for (var i=0; i<especeAnimalTablesData.rows[0].doc.Famille.length; i++) {
		if (especeAnimalTablesData.rows[0].doc.Famille[i].Genre != null) {
			for (var j=0; j<especeAnimalTablesData.rows[0].doc.Famille[i].Genre.length; j++) {
				if (especeAnimalTablesData.rows[0].doc.Famille[i].Genre[j].Espece != null) {
					for (var k=0; k<especeAnimalTablesData.rows[0].doc.Famille[i].Genre[j].Espece.length; k++) {
						tabEspeceAnimal.push(especeAnimalTablesData.rows[0].doc.Famille[i].Nom + ' ' +
								       especeAnimalTablesData.rows[0].doc.Famille[i].Genre[j].Nom + ' ' + 
								       especeAnimalTablesData.rows[0].doc.Famille[i].Genre[j].Espece[k].Nom);
					};
				} else {
					tabEspeceAnimal.push(especeAnimalTablesData.rows[0].doc.Famille[i].Nom + ' ' +
							       especeAnimalTablesData.rows[0].doc.Famille[i].Genre[j].Nom);
				};
			};
		} else {
			tabEspeceAnimal.push(especeAnimalTablesData.rows[0].doc.Famille[i].Nom);
		}
	};
	var tabNewEspeceAnimal = [];
	
	for (var i = 1; i < tabEspeceAnimal.length; i++) {
		console.log(tabEspeceAnimal[i]);
	};
};

var tabEnvironnement = [];
var environnementTablesData = JSON.parse(localStorage.getItem('environnementTablesData'));
environnementTablesData.rows.forEach(function(row){   
	tabEnvironnement.push(row.doc.Environnement);
});
var tabNewEnvironnement = [];

if ((import_table == 'chauves_souris_capturees_astre') || (import_table == 'chauves_souris_capturees_transvihmi') || (import_table == 'chauves_souris_capturees_mivegec')) {
	var tabMethode_capture = [];
	var methode_captureTablesData = JSON.parse(localStorage.getItem('methode_captureTablesData'));
	methode_captureTablesData.rows.forEach(function(row){   
		tabMethode_capture.push(row.doc.Methode_capture);
	});
	var tabNewMethode_capture = [];
};

if ((import_table == 'viande_de_brousse_transvihmi') || (import_table == 'viande_de_brousse_mivegec')) {
	var tabPreleve_chez = [];
	var preleve_chezTablesData = JSON.parse(localStorage.getItem('preleve_chez'));
	preleve_chezTablesData.rows.forEach(function(row){   
		tabPreleve_chez.push(row.doc.Preleve_chez);
	});
	var tabNewPreleve_chez = [];
};

if ((import_table == 'viande_de_brousse_transvihmi') || (import_table == 'viande_de_brousse_mivegec')) {
	var tabMethode_chasse = [];
	var methode_chasseTablesData = JSON.parse(localStorage.getItem('methode_chasse'));
	methode_chasseTablesData.rows.forEach(function(row){   
		tabMethode_chasse.push(row.doc.Methode_chasse);
	});
	var tabNewMethode_chasse = [];
};

if ((import_table == 'viande_de_brousse_transvihmi') || (import_table == 'viande_de_brousse_mivegec')) {
	var tabDestination = [];
	var destinationTablesData = JSON.parse(localStorage.getItem('destination'));
	destinationTablesData.rows.forEach(function(row){   
		tabDestination.push(row.doc.Destination);
	});
	var tabNewDestination = [];
};

if ((import_table == 'viande_de_brousse_transvihmi') || (import_table == 'viande_de_brousse_mivegec')) {
	var tabType_animal = [];
	var type_animalTablesData = JSON.parse(localStorage.getItem('type_animal'));
	type_animalTablesData.rows.forEach(function(row){   
		tabType_animal.push(row.doc.Type_animal);
	});
	var tabNewType_animal = [];
};

if ((import_table == 'viande_de_brousse_transvihmi') || (import_table == 'viande_de_brousse_mivegec')) {
	var tabEtat_carcasse_animal = [];
	var etat_carcasse_animalTablesData = JSON.parse(localStorage.getItem('etat_carcasse_animal'));
	etat_carcasse_animalTablesData.rows.forEach(function(row){   
		tabEtat_carcasse_animal.push(row.doc.Etat_carcasse_animal);
	});
	var tabNewEtat_carcasse_animal = [];
};

if ((import_table == 'viande_de_brousse_transvihmi') || (import_table == 'viande_de_brousse_mivegec')) {
	var tabQualite_echantillon = [];
	var qualite_echantillonTablesData = JSON.parse(localStorage.getItem('qualite_echantillon'));
	qualite_echantillonTablesData.rows.forEach(function(row){   
		tabQualite_echantillon.push(row.doc.Qualite_echantillon);
	});
	var tabNewQualite_echantillon = [];
};

if ((import_table == 'viande_de_brousse_transvihmi') || (import_table == 'viande_de_brousse_mivegec')) {
	var tabEndroit_prelevement = [];
	var endroit_prelevementTablesData = JSON.parse(localStorage.getItem('endroit_prelevement'));
	endroit_prelevementTablesData.rows.forEach(function(row){   
		tabEndroit_prelevement.push(row.doc.Endroit_prelevement);
	});
	var tabNewEndroit_prelevement = [];
};


disable_li();
disable_button();

if ((import_table == 'chauves_souris_capturees_astre') || (import_table == 'chauves_souris_capturees_transvihmi') || (import_table == 'chauves_souris_capturees_mivegec')) {
	var valid_field = 
		['N_identification_CS', 'N_identification_mere', 'N_site', 'Date',
		 'Equipe', 'Pays', 'Region_capture', 'Site_capture', 'Lieu_capture',
	     'Environnement', 'Latitude', 'Lat_degre_dec', 'Longitude', 'Long_degre_dec',
	     'Proximite_village_km', 'Methode_capture', 'Type_chauve_souris',
	     'Espece_identifiee', 'Famille_terrain', 'Genre_terrain', 'Espece_terrain',
	     'Famille_labo', 'Genre_labo', 'Espece_labo', 'Famille_consensus', 'Genre_consensus', 
	     'Espece_consensus', 'Sexe', 'Age', 'Gestante', 'Lactation', 'Suitee', 'Sexe_enfant',
	     'Poids_enfant', 'Identifiant_enfant', 'Vivante', 'Cause_deces', 'Poids_gr',
	     'L_avant_bras_mm', 'L_totale_corps_mm', 'Taille_yeux', 'L_queue_mm',
	     'L_metacarpe_3ieme_doigt_mm', 'Couleur_pelage_dorsal',
	     'Couleur_pelage_ventral', 'Remarques_anomalies', 'Sang_DBS_nb_cercles', 
	     'Sang_tube_EDTA', 'Feces_RNAl', 'Urine', 'Urine_DUS_nombre_cercles',
	     'Feces_urine_RNAl', 'Ecouvillon_gorge_RNAl', 'Ecouvillon_rectal_RNAl',
	     'Ectoparasites_ethanol', 'Poils_ethanol', 'Wing_punch_ethanol',
	     'Feces_culture_glycerol', 'Sperme', 'Autres_echantillons_remarques',
	     'Specimen_entier', 'Specimen_preserve_dans', 'Prelevement_organe',
	     'Foie_formol', 'Foie_RNAl', 'Rate_formol', 'Rate_RNAl', 'Reins_formol',
	     'Reins_RNAl', 'Intestins_formol', 'Intestins_RNAl', 'Poumons_formol',
	     'Poumons_RNAl', 'Coeur_formol','Coeur_RNAl', 'Ggl_lymph_formol',
	     'Ggl_lymph_RNAl', 'Testicules_formol', 'Testicules_RNAl', 'Peau_formol',
	     'Peau_RNAl', 'Muscles_formol', 'Muscles_RNAl', 'Cerveau_formol',
	     'Cerveau_RNAl', 'Autre', 'Autre_formol', 'Autre_RNAl', 'Remarques_echantillons'];
} else if ((import_table == 'chauves_souris_non_invasives_astre') || (import_table == 'chauves_souris_non_invasives_transvihmi') || (import_table == 'chauves_souris_non_invasives_mivegec')) {
	var valid_field = 
		['Date', 'Heure_debut', 'Heure_fin', 'N_site', 'Equipe', 'Pays', 'Region_collecte', 'Site_collecte', 'Environnement', 
		 'Lieu_collecte', 'Lat_degre_dec', 'Latitude', 'Long_degre_dec', 'Longitude', 'Type_site', 'Proximite_village_km',
		 'Type_chauves_souris', 'Famille_1', 'Genre_1', 'Espece_1', 'Famille_2', 'Genre_2', 'Espece_2', 'Famille_3', 
		 'Genre_3', 'Espece_3', 'Remarques', 'N_identification_echantillon', 'Type_echantillon', 'Nbre_feces_par_tube',
		 'Urine_methode', 'Urine_papier_buvard_nbre_cercles'];	
} else if ((import_table == 'viande_de_brousse_transvihmi') || (import_table == 'viande_de_brousse_mivegec')) {
	var valid_field = 
		['N_identification_echantillon', 'Date', 'Pays', 'Enqueteur', 'Region_collecte', 'Site_collecte', 
		 'Environnement', 'Lieu_collecte', 'Lat_degre_dec', 'Latitude', 'Long_degre_dec', 'Longitude', 
		 'Preleve_chez', 'Tue_par_chasseur', 'Methode_chasse', 'Nbre_pieges', 'Distance_village', 'Duree_de_chasse',
		 'Destination', 'Lieu_vente', 'Prix_vente', 'Type_animal', 'Espece_nom_local', 'Famille', 'Genre', 'Espece', 
		 'Sexe', 'Age', 'Mort_depuis', 'Etat_carcasse_animal', 'Decoupage_carcasse', 'L_total_corps', 'Poids', 
		 'Observations_carcasse', 'Collecte_sang_DBS', 'Qualite_echantillon', 'Endroit_prelevement', 'Remarques_echantillon'];	
};
	
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

if (lines_length > 1) {

	var row = 0;
	
	field = lines[0].trim().split(";");
	rowContent_length = field.length;
	
	//verif valid template
	if (fields_is_valid()) {
		
		if (is_only_one_country()) {
		
			if ((import_table == 'chauves_souris_capturees_astre') || (import_table == 'chauves_souris_capturees_transvihmi') || (import_table == 'chauves_souris_capturees_mivegec') || (import_table == 'viande_de_brousse_transvihmi') || (import_table == 'viande_de_brousse_mivegec')) {
				for (var line = 1; line < lines_length; line++) {
					var rowContent = lines[line].trim().split(";");
					
					var num_string = extraireNombre(rowContent[0]);
					var num = Number(num_string);
					
					if (tab_max < num) {
						tab_max = num;
					} 
				}
			};
			
			for (var line = 1; line < lines_length; line++) {
				var rowContent = lines[line].trim().split(";");
				//console.log(rowContent[0]);
				if ((import_table == 'chauves_souris_capturees_astre') || (import_table == 'chauves_souris_capturees_transvihmi') || (import_table == 'chauves_souris_capturees_mivegec')) {
					fill_tab_datas_bat_capturees(rowContent[0], line);
				} else if ((import_table == 'chauves_souris_non_invasives_astre') || (import_table == 'chauves_souris_non_invasives_transvihmi') || (import_table == 'chauves_souris_non_invasives_mivegec')) {
					fill_tab_datas_bat_non_invasives(line);
				} else if ((import_table == 'viande_de_brousse_transvihmi') || (import_table == 'viande_de_brousse_mivegec')) {
					fill_tab_datas_bushmeat(rowContent[0], line);
				}
			};
		} else {
			failure_fields("Le fichier d'importation ne doit concerner qu'un seul et même pays !");
		};	
		
	} else {
		
		failure_fields("Vérifier que les noms des champs sont valides et bien placés !");
	};	
};

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
	if ((import_table == 'viande_de_brousse_transvihmi') || (import_table == 'viande_de_brousse_mivegec')) {
		var i_pays = 2;
	} else {
		var i_pays = 5;
	}
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

function fill_tab_datas_bat_capturees(id, file_line) {
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
		
		var localDB = new PouchDB(import_table + debug);
		
		search_N_identification_Recursif_CS(localDB, tab_max);
	};
};

function fill_tab_datas_bat_non_invasives(file_line) {
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
		
		var localDB = new PouchDB(import_table + debug);
		
		var row = []; 
		row.length = lines_length;
		
		search_N_identification_Recursif_collecte(localDB, lines_length-1, 0, -1, '', row);
	};
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
		
		var localDB = new PouchDB(import_table + debug);
		
		search_N_identification_Recursif_Bushmeat(localDB, tab_max);
	};
};

function search_N_identification_Recursif_CS(localDB, i) {
	
	var localDB = new PouchDB(import_table + debug);
	
	if (i > 0) {

		if (typeof tab[i] !== "undefined") {
			var N_identification_CS = tab[i][0];
			
			localDB.find({
		       	selector: {N_identification_CS: N_identification_CS}
			}).then(function (result) {
		    	
		    	if (result.docs.length > 0) {
		    		move();
		    		row++;
		    		if (record_change_bat_capturees(result, rowContent_length)) {
		    			var id = result.docs[0]._id;
		    			put_with_id_bat_capturees(id, i);
		    			search_N_identification_Recursif_CS(localDB, i-1);
				    } else {
		    			search_N_identification_Recursif_CS(localDB, i-1);
				    };
		    	} else {
		    		
		    		var new_doc = {};
		    		
		    		var numero_individu_string = extraireNombre(N_identification_CS);
		    		var numero_individu = Number(numero_individu_string);
		    		
		    		for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
						var name_field = field[rowCountContent];
						var rowContent = tab[numero_individu][rowCountContent]
						
						
						//trim pour Famille/Genre/Espèce
						if (rowCountContent > 17 && rowCountContent < 27) {
							if ((rowCountContent === 18) || (rowCountContent === 21) || (rowCountContent === 24)) {
								new_doc[name_field] = rowContent.trim().toUpperCase();
							} else {
								new_doc[name_field] = rowContent.trim();	
							};
						} else {
							new_doc[name_field] = rowContent;
							
							addValueInTableReferenceBatCapturees(rowCountContent, rowContent);
							
							/*var check = function(){
							    if(addValueInTableReferenceBatCapturees(rowCountContent, rowContent)){
							        // run when condition is met
							    }
							    else {
							        setTimeout(check, 1000); // check again in a second
							    }
							}
							check();*/
						};
					};
					
					addEspeceInTableReferenceBatCapturees(i);
					
					var id = uuid();
					new_doc._id = id;
					new_doc.Numero_individu = String(numero_individu);
								
					put_new_id_bat_capturees(new_doc, i);
					
					move();
					row++;
					
					search_N_identification_Recursif_CS(localDB, i-1);
		    		
		    	}
		    }).catch(function (err) {
		       	console.log(err);
		    });
			
			console.log("full - " + i);
		} else {
			console.log("empty - " + i);
			move();
			row++;
			
			search_N_identification_Recursif_CS(localDB, i-1);
			
		};
	} else {
		synchronizeBatCapturees();
		synchronizeEspece('espece');
	};
};

/*function search_N_identification_Recursif_collecte(localDB, i, j, k, N_identification_collecte, row) {
	
	if (i > 0) {

		if (typeof tab[i] !== "undefined") {
			
			var new_code;
			var date = tab[i][0];
			new_code = date.replace(/\//g, '');
			var lat = tab[i][9];
			new_code = new_code + lat.replace(',', '');
			var long = tab[i][11];
			new_code = new_code + long.replace(',', '');
			
			if (new_code === N_identification_collecte) {
				if (typeof row[k] !== "undefined") {
					row[k][j] = new addEchantillon(tab[i][26], tab[i][27], tab[i][28], tab[i][29], tab[i][30]);
					j = j + 1;
					search_N_identification_Recursif_collecte(localDB, i-1, j, k, N_identification_collecte, row);
		    	} else {
					j = j + 1;
					search_N_identification_Recursif_collecte(localDB, i-1, j, k, N_identification_collecte, row);
		    	}
			} else {
				
				if (N_identification_collecte !== '') {
			    	
					var Echantillons = JSON.stringify(row[k]);
					Echantillons = JSON.parse(Echantillons);
					
					//move();
		    		//row++;
					
					localDB.find({
				       	selector: {N_identification_collecte: new_code}
					}).then(function (result) {
				    	
				    	if (result.docs.length > 0) {
				    		
				    		if (record_exists(result)) {
				    			var id = result.docs[0]._id;
				    			put_with_id_non_invasives(id, i, Echantillons);
				    			alert(1);
				    			search_N_identification_Recursif_collecte(localDB, i-1, j, k, N_identification_collecte, row);
					    		
				    		} else {
				    			console.log('no change : ' + new_code);
				    			alert(2);
				    			search_N_identification_Recursif_collecte(localDB, i-1, j, k, N_identification_collecte, row);
					    		
					    	};
				    	
				    	} else {
				    		
				    		var new_doc = {};
				    		
				    		for(var rowCountContent = 0; rowCountContent < rowContent_length - 5; rowCountContent++) {
				    			var name_field = field[rowCountContent];
				    			var rowContent = tab[i+1][rowCountContent]
								
				    			addValueInTableReferenceBatNoninvasives(rowCountContent, rowContent);
				    			
				    			//trim pour Famille/Genre/Espèce
								if (rowCountContent > 15 && rowCountContent < 25) {
									new_doc[name_field] = rowContent.trim();
								} else {
									new_doc[name_field] = rowContent;
								}
				    		};
				    		
				    		var id = uuid();
							new_doc._id = id;
							new_doc.N_identification_collecte = new_code;
							new_doc.Echantillons = Echantillons;
							
							put_new_id_bat_non_invasives(new_doc, i);
							move();
							row++;
							
							addEspeceInTableReferenceBatNoninvasives(i);
							
							alert(3);
							
							search_N_identification_Recursif_collecte(localDB, i-1, j, k, N_identification_collecte, row);
				    		
						}
				    }).catch(function (err) {
				       	console.log(err);
				    });
				};
				
				j = 0;
				
				k = k + 1;
				
				row[k] = new Array();
				
				if (typeof row[k] !== "undefined") {
					row[k][j] = new addEchantillon(tab[i][26], tab[i][27], tab[i][28], tab[i][29], tab[i][30]);
				}
				
				j = j + 1;
				
				N_identification_collecte = new_code;
				
				console.log("full - " + i);
				move();
	    		row++;
				
	    		alert(4);
				search_N_identification_Recursif_collecte(localDB, i-1, j, k, N_identification_collecte, row);
				
			};
			//console.log("full - " + i);
			//move();
    		//row++;
			
			//search_N_identification_Recursif_collecte(localDB, i-1, j, k, N_identification_collecte, row);
			
		} else {
			console.log("empty - " + i);
			move();
			row++;
			alert(5);
			search_N_identification_Recursif_collecte(localDB, i-1, j, k, N_identification_collecte, row);
		};
	} else {
		
		var Echantillons = JSON.stringify(row[k]);
		Echantillons = JSON.parse(Echantillons);
		
		localDB.find({
	       	selector: {N_identification_collecte: N_identification_collecte}
		}).then(function (result) {
	    	
	    	if (result.docs.length > 0) {
	    		
	    		if (record_exists(result)) {
	    			var id = result.docs[0]._id;
	    			put_with_id_non_invasives(id, i, Echantillons);
	    		} else {
	    			console.log('no change : ' + N_identification_collecte);
	    		};
	    		
	    		move();
	    		row++;
	    		
	    	} else {
	    		
	    		var new_doc = {};
	    		
	    		for(var rowCountContent = 0; rowCountContent < rowContent_length - 5; rowCountContent++) {
	    			var name_field = field[rowCountContent];
	    			var rowContent = tab[i+1][rowCountContent]
					
	    			addValueInTableReferenceBatNoninvasives(rowCountContent, rowContent);
	    			
	    			//trim pour Famille/Genre/Espèce
					if (rowCountContent > 15 && rowCountContent < 25) {
						new_doc[name_field] = rowContent.trim();
					} else {
						new_doc[name_field] = rowContent;
					}
	    		};
	    		
	    		addEspeceInTableReferenceBatNoninvasives(i);
	    		
				var id = uuid();
				new_doc._id = id;
				new_doc.N_identification_collecte = N_identification_collecte;
				new_doc.Echantillons = Echantillons;
				
				put_new_id_bat_non_invasives(new_doc, i);
				move();
				row++;
	    		
	    	};
	    	
	    	synchronizeBatNoninvasives();
	    	synchronizeEspece('espece_animal');
	    	
	    }).catch(function (err) {
	       	console.log(err);
	    });
		
	};
};*/

function search_N_identification_Recursif_collecte(localDB, i, j, k, N_identification_collecte, row) {
	
	if (i > 1) {

		if (typeof tab[i] !== "undefined") {
			
			var new_code;
			var date = tab[i][0];
			new_code = date.replace(/\//g, '');
			var lat = tab[i][10];
			new_code = new_code + lat.replace(',', '');
			var long = tab[i][12];
			new_code = new_code + long.replace(',', '');
			
			if (new_code === N_identification_collecte) {
				if (typeof myTab !== "undefined") {
					addNewObjectToTab(myTab, i);
					k++;
					search_N_identification_Recursif_collecte(localDB, i-1, j, k, N_identification_collecte, row);
				} else {
					k++;
					search_N_identification_Recursif_collecte(localDB, i-1, j, k, N_identification_collecte, row);
		    	}
			} else {
				if (N_identification_collecte !== '') {
			    	
					var Echantillons = JSON.stringify(myTab);
					console.log(Echantillons);
					Echantillons = JSON.parse(Echantillons);
					myTab = null;
					myTab = new Array();
					
					localDB.find({
				       	selector: {N_identification_collecte: N_identification_collecte}
					}).then(function (result) {
				    	
				    	if (result.docs.length > 0) {
				    		if (record_exists(result)) {
				    			var id = result.docs[0]._id;
				    			j = 0;
				    			put_with_id_non_invasives(id, i, Echantillons, localDB, j, k, N_identification_collecte, row);
				    			//search_N_identification_Recursif_collecte(localDB, i-1, j, k, N_identification_collecte, row);
				    		} else {
				    			console.log('no change : ' + new_code);
				    			j = 0;
				    			search_N_identification_Recursif_collecte(localDB, i-1, j, k, N_identification_collecte, row);
					    	};
				    	} else {
				    		var new_doc = {};
				    		for(var rowCountContent = 0; rowCountContent < rowContent_length - 5; rowCountContent++) {
				    			var name_field = field[rowCountContent];
				    			var rowContent = tab[i+1][rowCountContent]
								addValueInTableReferenceBatNoninvasives(rowCountContent, rowContent);
				    			
				    			//trim pour Famille/Genre/Espèce
								if (rowCountContent > 16 && rowCountContent < 26) {
									if ((rowCountContent === 17) || (rowCountContent === 20) || (rowCountContent === 23)) {
										new_doc[name_field] = rowContent.trim().toUpperCase();
									} else {
										new_doc[name_field] = rowContent.trim();	
									};
								} else {
									new_doc[name_field] = rowContent;
								};
				    		};
				    		
				    		var id = uuid();
							new_doc._id = id;
							new_doc.N_identification_collecte = N_identification_collecte;
							new_doc.Echantillons = Echantillons;
							
							put_new_id_bat_non_invasives(new_doc/*, i*/);
							move();
							row++;
							
							addEspeceInTableReferenceBatNoninvasives(i+1);
							
							j = 0;
							k = k + 1;
							addNewObjectToTab(myTab, i);
							j = j + 1;
							N_identification_collecte = new_code;
							console.log("full - " + i);
							move();
				    		row++;
							search_N_identification_Recursif_collecte(localDB, i-1, j, k, N_identification_collecte, row);
				    	};
				    }).catch(function (err) {
				       	console.log(err);
				    });
				} else {
					j = 0;
					k = k + 1;
					addNewObjectToTab(myTab, i);
					j = j + 1;
					N_identification_collecte = new_code;
					console.log("full - " + i);
					move();
		    		row++;
					search_N_identification_Recursif_collecte(localDB, i-1, j, k, N_identification_collecte, row);
				};
			};
		} else {
			console.log("empty - " + i);
			move();
			row++;
			search_N_identification_Recursif_collecte(localDB, i-1, j, k, N_identification_collecte, row);
		};
	} else if (i === 1) {
		
		var new_code;
		var date = tab[i][0];
		new_code = date.replace(/\//g, '');
		var lat = tab[i][10];
		new_code = new_code + lat.replace(',', '');
		var long = tab[i][12];
		new_code = new_code + long.replace(',', '');
		
		if (new_code !== N_identification_collecte) {
			myTab = null;
			myTab = new Array();
		};
		
		if (typeof myTab !== "undefined") {
			addNewObjectToTab(myTab, i);
		};
			
		var Echantillons = JSON.stringify(myTab);
		console.log(Echantillons);
		Echantillons = JSON.parse(Echantillons);		
		
		localDB.find({
	       	selector: {N_identification_collecte: new_code}
		}).then(function (result) {
	    	
	    	if (result.docs.length > 0) {
	    		
	    		if (record_exists(result)) {
	    			var id = result.docs[0]._id;
	    			console.log('id = ' + id);
	    			put_with_id_non_invasives(id, i, Echantillons, localDB, j, k, N_identification_collecte, row);
	    			//search_N_identification_Recursif_collecte(localDB, i-1, j, k, N_identification_collecte, row);
	    		} else {
	    			console.log('no change : ' + N_identification_collecte);
	    			search_N_identification_Recursif_collecte(localDB, i-1, j, k, N_identification_collecte, row);
	    		};
	    		move();
	    		row++;
	    	} else {
	    		var new_doc = {};
	    		for(var rowCountContent = 0; rowCountContent < rowContent_length - 5; rowCountContent++) {
	    			var name_field = field[rowCountContent];
	    			var rowContent = tab[i][rowCountContent]
					addValueInTableReferenceBatNoninvasives(rowCountContent, rowContent);
	    			
	    			//trim pour Famille/Genre/Espèce
					if (rowCountContent > 16 && rowCountContent < 26) {
						if ((rowCountContent === 17) || (rowCountContent === 20) || (rowCountContent === 23)) {
							new_doc[name_field] = rowContent.trim().toUpperCase();
						} else {
							new_doc[name_field] = rowContent.trim();	
						};
					} else {
						new_doc[name_field] = rowContent;
					}
	    		};
	    		
				var id = uuid();
				new_doc._id = id;
				new_doc.N_identification_collecte = new_code;
				new_doc.Echantillons = Echantillons;
				
				put_new_id_bat_non_invasives(new_doc/*, i*/);
				move();
				row++;
				
				addEspeceInTableReferenceBatNoninvasives(i);
				
				//alert(3);
				
				j = 0;
				search_N_identification_Recursif_collecte(localDB, i-1, j, k, N_identification_collecte, row);
				
	    	};
	    }).catch(function (err) {
	       	console.log(err);
	    });
		
	} else {
		synchronizeBatNoninvasives();
    	synchronizeEspece('espece');
	};
};

function search_N_identification_Recursif_Bushmeat(localDB, i) {
	
	if (i > 0) {

		if (typeof tab[i] !== "undefined") {
			var N_identification_Echantillon = tab[i][0];
			
			localDB.find({
				selector: {N_identification_Echantillon: N_identification_Echantillon}
			}).then(function (result) {
			
				if (result.docs.length > 0) {
	    		
					if (record_change_bushmeat(result, rowContent_length)) {
						var id = result.docs[0]._id;
						put_with_id_bushmeat(id, i);
					};
					
					addEspeceInTableReferenceBushmeat(i);
	    		
					move();
					row++;
					
					search_N_identification_Recursif_Bushmeat(localDB, i-1);
					
				} else {
	    		
					var sN_identification;
	    		
					var new_doc = {};
	    		
					var numero_echantillon_string = extraireNombre(N_identification_Echantillon);
					var numero_echantillon = Number(numero_echantillon_string);
	    		
					for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
						var name_field = field[rowCountContent];
						var rowContent = tab[numero_echantillon][rowCountContent]
					
						addValueInTableReferenceBushmeat(rowCountContent, rowContent);
					
						//trim pour Famille/Genre/Espèce
						if (rowCountContent > 21 && rowCountContent < 25) {
							new_doc[name_field] = rowContent.trim();
						} else {
							new_doc[name_field] = rowContent;
						}
					};
					
					addEspeceInTableReferenceBushmeat(i);
					
					var id = uuid();
					new_doc._id = id;
					new_doc.Numero_echantillon = String(numero_echantillon);
								
					put_new_id_bushmeat(new_doc, i)
					
					move();
					row++;
					
					search_N_identification_Recursif_Bushmeat(localDB, i-1);
		    		
		    	}
		    }).catch(function (err) {
		       	console.log(err);
		    });
			
			console.log("full - " + i);
		} else {
			console.log("empty - " + i);
			move();
			row++;
			
			search_N_identification_Recursif_Bushmeat(localDB, i-1);
			
		};
	} else {
		synchronizeBushmeat();
		synchronizeEspece('espece');
	};
};

function put_with_id_bat_capturees(id, i) {
	
	var sN_identification;
	
	var localDB = new PouchDB(import_table + debug);
	localDB.get(id).then(function (doc) {
		
		for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
			var name_field = field[rowCountContent];
			
			var rowContent = tab[i][rowCountContent];
			
			addValueInTableReferenceBatCapturees(rowCountContent, rowContent);
						
			//trim pour Famille/Genre/Espèce
			if (rowCountContent > 17 && rowCountContent < 27) {	
				if ((rowCountContent === 18) || (rowCountContent === 21) || (rowCountContent === 24)) {
					doc[name_field] = rowContent.trim().toUpperCase();
				} else {
					doc[name_field] = rowContent.trim();	
				};
			} else {
				doc[name_field] = rowContent;
			};
			
			if (rowCountContent == 1) {	
				console.log(i + " : " + tab[i][rowCountContent]);
			};
		};
		
		addEspeceInTableReferenceBatCapturees(i);
		
		return localDB.put(doc).then(function () {
			return localDB.get(id).then(function () {
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

function put_with_id_non_invasives(id, i, Echantillons, localDB, j, k, N_identification_collecte, row) {
	var localDB = new PouchDB(import_table + debug);
	localDB.get(id).then(function (doc) {
		
		for(var rowCountContent = 0; rowCountContent < rowContent_length - 5; rowCountContent++) {
			
			var name_field = field[rowCountContent];
			
			addValueInTableReferenceBatNoninvasives(rowCountContent, rowContent);
			
			var rowContent = tab[i+1][rowCountContent];
			//trim pour Famille/Genre/Espèce
			if (rowCountContent > 16 && rowCountContent < 26) {
				if ((rowCountContent === 17) || (rowCountContent === 20) || (rowCountContent === 23)) {
					doc[name_field] = rowContent.trim().toUpperCase();
				} else {
					doc[name_field] = rowContent.trim();	
				};
			} else {
				doc[name_field] = rowContent;
			}
			
			/*if (rowCountContent == 1) {	
				console.log(i + " : " + tab[i][rowCountContent]);
			}*/
		};
		
		doc.Echantillons = Echantillons;
		
		addEspeceInTableReferenceBatNoninvasives(i+1);
		
		return localDB.put(doc).then(function () {
			
			var new_code;
			var date = tab[i][0];
			new_code = date.replace(/\//g, '');
			var lat = tab[i][9];
			new_code = new_code + lat.replace(',', '');
			var long = tab[i][11];
			new_code = new_code + long.replace(',', '');
			
			j = 0;
			k = k + 1;
			addNewObjectToTab(myTab, i);
			j = j + 1;
			N_identification_collecte = new_code;
			console.log("change - " + tab[i][rowCountContent]);
			move();
    		row++;
			
			return localDB.get(id).then(function () {
				
				/*if (i == tab_max) {
					if (navigator.onLine) {
						synchronizeBatNoninvasives();
					};
				};*/
				
				search_N_identification_Recursif_collecte(localDB, i-1, j, k, N_identification_collecte, row);
		    	
			});
		});			
				
	}).catch(function (err) {
       	console.log(err);
       	console.log('error ' + id);
    });
};

function put_with_id_bushmeat(id, i) {
	
	var localDB = new PouchDB(import_table + debug);
	localDB.get(id).then(function (doc) {
		
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
		
		addEspeceInTableReferenceBushmeat(i);		
		
		return localDB.put(doc).then(function () {
			return localDB.get(id).then(function () {
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

function put_new_id_bat_capturees(doc, i) {
	var localDB = new PouchDB(import_table + debug);
	localDB.put(doc).then(function () {
		console.log('put - add : ' + i);
		console.log(i + " : " + tab[i][0]);
	});
};

function put_new_id_bat_non_invasives(doc/*, i*/) {
	var localDB = new PouchDB(import_table + debug);
	localDB.put(doc).then(function () {
		//console.log('i : ' + i + ' ----- ' + 'lines_length : ' + lines_length);
	});
};

function put_new_id_bushmeat(doc, i) {
	var localDB = new PouchDB(import_table + debug);
	localDB.put(doc).then(function () {
		console.log('put - add : ' + i);
		console.log(i + " : " + tab[i][0]);
	});
};

function synchronizeBatCapturees() {
	
	var localDB = new PouchDB(import_table + debug);
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var remoteDB = new PouchDB(remote_couchdb + import_table + debug, {skip_setup: true});
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
			
			var localDB = new PouchDB('site' + nom_equipe + debug);
			localDB.put(doc).then(function(response){
				return addN_site(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			var localDB = new PouchDB('site' + nom_equipe + debug);
			localDB.allDocs({
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var remoteDB = new PouchDB(remote_couchdb + 'site' + nom_equipe + debug);
				localDB.sync(remoteDB).on('complete', (info) => {   
			    }).on('error', function (err) {
			   		alert('alert sync site : ' + JSON.stringify(err));
			   	});
			}).catch(function (err) {
				console.log(err);
			});
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
			var localDB = new PouchDB('pays' + debug);
			localDB.put(doc).then(function(response){
				return addPays(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			var localDB = new PouchDB('pays' + debug);
			localDB.allDocs({
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var remoteDB = new PouchDB(remote_couchdb + 'pays' + debug);
				localDB.sync(remoteDB).on('complete', (info) => {   
			    }).on('error', function (err) {
			   		alert('alert sync pays : ' + JSON.stringify(err));
			   	});
			}).catch(function (err) {
				console.log(err);
			});
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
			var localDB = new PouchDB('lieu_capture' + debug);
			localDB.put(doc).then(function(response){
				return addLieu_capture(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			var localDB = new PouchDB('lieu_capture' + debug);
			localDB.allDocs({
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var remoteDB = new PouchDB(remote_couchdb + 'lieu_capture' + debug);
				localDB.sync(remoteDB).on('complete', (info) => {   
			    }).on('error', function (err) {
			   		alert('alert sync lieu_capture : ' + JSON.stringify(err));
			   	});
			}).catch(function (err) {
				console.log(err);
			});
		};
	};

	var i = tabNewEnvironnement.length;
	addEnvironnement(i);
	function addEnvironnement(i) {
	    if (i > 0) {
	    	var id = uuid();
			var doc = new Object();
			doc._id = id;
			doc.Environnement = tabNewEnvironnement[i-1];
			var localDB = new PouchDB('environnement' + debug);
			localDB.put(doc).then(function(response){
				return addEnvironnement(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			var localDB = new PouchDB('environnement' + debug);
			localDB.allDocs({
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var remoteDB = new PouchDB(remote_couchdb + 'environnement' + debug);
				localDB.sync(remoteDB).on('complete', (info) => {   
			    }).on('error', function (err) {
			   		alert('alert sync environnement : ' + JSON.stringify(err));
			   	});
			}).catch(function (err) {
				console.log(err);
			});
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
			var localDB = new PouchDB('methode_capture' + debug);
			localDB.put(doc).then(function(response){
				return addMethode_capture(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			var localDB = new PouchDB('methode_capture' + debug);
			localDB.allDocs({
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var remoteDB = new PouchDB(remote_couchdb + 'methode_capture' + debug);
				localDB.sync(remoteDB).on('complete', (info) => {   
			    }).on('error', function (err) {
			   		alert('alert sync methode_capture : ' + JSON.stringify(err));
			   	});
			}).catch(function (err) {
				console.log(err);
			});
		};
	};
	console.log('synchronized !');
};

function synchronizeBatNoninvasives() {
	
	//alert('synchronizeBatNoninvasives');
	
	var localDB = new PouchDB(import_table + debug);
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var remoteDB = new PouchDB(remote_couchdb + import_table + debug, {skip_setup: true});
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
		
	var i = tabNewPays.length;
	addPays(i);
	function addPays(i) {
	    if (i > 0) {
	    	var id = uuid();
			var doc = new Object();
			doc._id = id;
			doc.Pays = tabNewPays[i-1];
			var localDB = new PouchDB('pays' + debug);
			localDB.put(doc).then(function(response){
				return addPays(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			var localDB = new PouchDB('pays' + debug);
			localDB.allDocs({
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var remoteDB = new PouchDB(remote_couchdb + 'pays' + debug);
				localDB.sync(remoteDB).on('complete', (info) => {   
			    }).on('error', function (err) {
			   		alert('alert sync pays : ' + JSON.stringify(err));
			   	});
			}).catch(function (err) {
				console.log(err);
			});
		};
	};
	
	var i = tabNewEspece.length;
	addFamilleGenreEspece(i, 'espece');
	
	var i = tabNewEnvironnement.length;
	addEnvironnement(i);
	function addEnvironnement(i) {
	    if (i > 0) {
	    	var id = uuid();
			var doc = new Object();
			doc._id = id;
			doc.Environnement = tabNewEnvironnement[i-1];
			var localDB = new PouchDB('environnement' + debug);
			localDB.put(doc).then(function(response){
				return addEnvironnement(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			var localDB = new PouchDB('environnement' + debug);
			localDB.allDocs({
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var remoteDB = new PouchDB(remote_couchdb + 'environnement' + debug);
				localDB.sync(remoteDB).on('complete', (info) => {   
			    }).on('error', function (err) {
			   		alert('alert sync environnement : ' + JSON.stringify(err));
			   	});
			}).catch(function (err) {
				console.log(err);
			});
		};
	};
	
	var i = tabNewLieu_collecte.length;
	addLieu_collecte(i);
	function addLieu_collecte(i) {
	    if (i > 0) {
	    	var id = uuid();
			var doc = new Object();
			doc._id = id;
			doc.Lieu_collecte = tabNewLieu_collecte[i-1];
			var localDB = new PouchDB('lieu_collecte' + debug);
			localDB.put(doc).then(function(response){
				return addLieu_collecte(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			var localDB = new PouchDB('lieu_collecte' + debug);
			localDB.allDocs({
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var remoteDB = new PouchDB(remote_couchdb + 'lieu_collecte' + debug);
				localDB.sync(remoteDB).on('complete', (info) => {   
			    }).on('error', function (err) {
			   		alert('alert sync lieu_collecte : ' + JSON.stringify(err));
			   	});
			}).catch(function (err) {
				console.log(err);
			});
		};
	};
	
	console.log('synchronized !');
};

function synchronizeBushmeat() {
	
	var localDB = new PouchDB(import_table + debug);
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var remoteDB = new PouchDB(remote_couchdb + import_table + debug, {skip_setup: true});
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
	
	var i = tabNewPays.length;
	addPays(i);
	function addPays(i) {
	    if (i > 0) {
	    	var id = uuid();
			var doc = new Object();
			doc._id = id;
			doc.Pays = tabNewPays[i-1];
			var localDB = new PouchDB('pays' + debug);
			localDB.put(doc).then(function(response){
				return addPays(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			var localDB = new PouchDB('pays' + debug);
			localDB.allDocs({
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var remoteDB = new PouchDB(remote_couchdb + 'pays' + debug);
				localDB.sync(remoteDB).on('complete', (info) => {   
			    }).on('error', function (err) {
			   		alert('alert sync pays : ' + JSON.stringify(err));
			   	});
			}).catch(function (err) {
				console.log(err);
			});
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
			var localDB = new PouchDB('lieu_collecte' + debug);
			localDB.put(doc).then(function(response){
				return addLieu_collecte(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			var localDB = new PouchDB('lieu_collecte' + debug);
			localDB.allDocs({
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var remoteDB = new PouchDB(remote_couchdb + 'lieu_collecte' + debug);
				localDB.sync(remoteDB).on('complete', (info) => {   
			    }).on('error', function (err) {
			   		alert('alert sync lieu_collecte : ' + JSON.stringify(err));
			   	});
			}).catch(function (err) {
				console.log(err);
			});
		};
	};

	var i = tabNewEnvironnement.length;
	addEnvironnement(i);
	function addEnvironnement(i) {
	    if (i > 0) {
	    	var id = uuid();
			var doc = new Object();
			doc._id = id;
			doc.Environnement = tabNewEnvironnement[i-1];
			var localDB = new PouchDB('environnement' + debug);
			localDB.put(doc).then(function(response){
				return addEnvironnement(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			var localDB = new PouchDB('environnement' + debug);
			localDB.allDocs({
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var remoteDB = new PouchDB(remote_couchdb + 'environnement' + debug);
				localDB.sync(remoteDB).on('complete', (info) => {   
			    }).on('error', function (err) {
			   		alert('alert sync environnement : ' + JSON.stringify(err));
			   	});
			}).catch(function (err) {
				console.log(err);
			});
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
			var localDB = new PouchDB('preleve_chez' + debug);
			localDB.put(doc).then(function(response){
				return addPreleve_chez(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			var localDB = new PouchDB('preleve_chez' + debug);
			localDB.allDocs({
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var remoteDB = new PouchDB(remote_couchdb + 'preleve_chez' + debug);
				localDB.sync(remoteDB).on('complete', (info) => {   
			    }).on('error', function (err) {
			   		alert('alert sync preleve_chez : ' + JSON.stringify(err));
			   	});
			}).catch(function (err) {
				console.log(err);
			});
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
			var localDB = new PouchDB('methode_chasse' + debug);
			localDB.put(doc).then(function(response){
				return addMethode_chasse(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			var localDB = new PouchDB('methode_chasse' + debug);
				localDB.allDocs({
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var remoteDB = new PouchDB(remote_couchdb + 'methode_chasse' + debug);
				localDB.sync(remoteDB).on('complete', (info) => {   
			    }).on('error', function (err) {
			    	alert('alert sync methode_chasse : ' + JSON.stringify(err));
			    });
			}).catch(function (err) {
				console.log(err);
			});
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
			var localDB = new PouchDB('destination' + debug);
			localDB.put(doc).then(function(response){
				return addDestination(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			var localDB = new PouchDB('destination' + debug);
			localDB.allDocs({
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var remoteDB = new PouchDB(remote_couchdb + 'destination' + debug);
				localDB.sync(remoteDB).on('complete', (info) => {   
			    }).on('error', function (err) {
			    	alert('alert sync destination : ' + JSON.stringify(err));
				});
			}).catch(function (err) {
				console.log(err);
			});
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
			var localDB = new PouchDB('type_animal' + debug);
			localDB.put(doc).then(function(response){
				return addType_animal(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			var localDB = new PouchDB('type_animal' + debug);
			localDB.allDocs({
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var remoteDB = new PouchDB(remote_couchdb + 'type_animal' + debug);
				localDB.sync(remoteDB).on('complete', (info) => {   
			    }).on('error', function (err) {
			   		alert('alert sync type_animal : ' + JSON.stringify(err));
				});
			}).catch(function (err) {
				console.log(err);
			});
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
			var localDB = new PouchDB('etat_carcasse_animal' + debug);
			localDB.put(doc).then(function(response){
				return addEtat_carcasse_animal(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			var localDB = new PouchDB('etat_carcasse_animal' + debug);
			localDB.allDocs({
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var remoteDB = new PouchDB(remote_couchdb + 'etat_carcasse_animal' + debug);
				localDB.sync(remoteDB).on('complete', (info) => {   
				}).on('error', function (err) {
			   		alert('alert sync etat_carcasse_animal : ' + JSON.stringify(err));
				});
			}).catch(function (err) {
				console.log(err);
			});
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
			var localDB = new PouchDB('qualite_echantillon' + debug);
			localDB.put(doc).then(function(response){
				return addQualite_echantillon(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			var localDB = new PouchDB('qualite_echantillon' + debug);
			localDB.allDocs({
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var remoteDB = new PouchDB(remote_couchdb + 'qualite_echantillon' + debug);
				localDB.sync(remoteDB).on('complete', (info) => {   
				}).on('error', function (err) {
			   		alert('alert sync qualite_echantillon : ' + JSON.stringify(err));
				});
			}).catch(function (err) {
				console.log(err);
			});
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
			var localDB = new PouchDB('endroit_prelevement' + debug);
			localDB.put(doc).then(function(response){
				return addEndroit_prelevement(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			var localDB = new PouchDB('endroit_prelevement' + debug);
			localDB.allDocs({
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var remoteDB = new PouchDB(remote_couchdb + 'endroit_prelevement' + debug);
				localDB.sync(remoteDB).on('complete', (info) => {   
				}).on('error', function (err) {
			   		alert('alert sync endroit_prelevement : ' + JSON.stringify(err));
				});
			}).catch(function (err) {
				console.log(err);
			});
		};
	};
	
	console.log('synchronized !');
};

function synchronizeEspece(table) {
	var localDB = new PouchDB(table + debug);
	localDB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var remoteDB = new PouchDB(remote_couchdb + table + debug);
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

function record_change_bat_capturees(result, rowContent_length) {
    
	var doc = result.docs[0];
	
	var num_string = extraireNombre(result.docs[0].N_identification_CS);
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

function record_exists(result) {
    var doc = result.docs[0];
	var num_string = extraireNombre(result.docs[0].N_identification_collecte);
	if (num_string !== null) {
		return true
	} else {
		return false
	};
};

function record_change_bushmeat(result, rowContent_length) {
    
	var doc = result.docs[0];
	
	var num_string = extraireNombre(result.docs[0].N_identification_Echantillon);
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
	if (rowCountContent == 2) {
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
	if ((rowCountContent == 9) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
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
	};
	
	return true;
};

function addEspeceInTableReferenceBatCapturees(i) {
	console.log(i + ' : ' + tab[i][17].trim() + ' ' + tab[i][18].trim() + ' ' + tab[i][19].trim());
	console.log(i + ' : ' + tab[i][20].trim() + ' ' + tab[i][21].trim() + ' ' + tab[i][22].trim());
	console.log(i + ' : ' + tab[i][23].trim() + ' ' + tab[i][24].trim() + ' ' + tab[i][25].trim());
	
	//Espece
	Espece1 = tab[i][17].trim() + ' ' + tab[i][18].trim() + ' ' + tab[i][19].trim();
	Espece2 = tab[i][20].trim() + ' ' + tab[i][21].trim() + ' ' + tab[i][22].trim();
	Espece3 = tab[i][23].trim() + ' ' + tab[i][24].trim() + ' ' + tab[i][25].trim();
	
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

function addValueInTableReferenceBatNoninvasives(rowCountContent, rowContent) {
	//N_identification
	if (rowCountContent == 0) {
		sN_identification = rowContent;
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
	//Environnement
	if ((rowCountContent == 8) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
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
	//Lieu_collecte
	if ((rowCountContent == 9) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
		var new_lieu_collecte = true;
		for (var i = 0; i < tabLieu_collecte.length; i++) {
			if (tabLieu_collecte[i] == String(rowContent)) {
				new_lieu_collecte = false;
			};
		};
		if (new_lieu_collecte) {
			tabLieu_collecte.push(rowContent);
			tabNewLieu_collecte.push(rowContent);		
		};
	};
};

function addEspeceInTableReferenceBatNoninvasives(i) {
	console.log(i + ' : ' + tab[i][17].trim() + ' ' + tab[i][18].trim() + ' ' + tab[i][19].trim());
	console.log(i + ' : ' + tab[i][20].trim() + ' ' + tab[i][21].trim() + ' ' + tab[i][22].trim());
	console.log(i + ' : ' + tab[i][23].trim() + ' ' + tab[i][24].trim() + ' ' + tab[i][25].trim());
	
	//Espece
	Espece1 = tab[i][17].trim() + ' ' + tab[i][18].trim() + ' ' + tab[i][19].trim();
	Espece2 = tab[i][20].trim() + ' ' + tab[i][21].trim() + ' ' + tab[i][22].trim();
	Espece3 = tab[i][23].trim() + ' ' + tab[i][24].trim() + ' ' + tab[i][25].trim();
	
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

function addValueInTableReferenceBushmeat(rowCountContent, rowContent) {
	
	//N_identification
	if (rowCountContent == 0) {
		sN_identification = rowContent;
	} else
	//Pays
	if ((rowCountContent == 2) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
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
	//Environnement
	if ((rowCountContent == 6) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
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
	//Lieu_collecte
	if ((rowCountContent == 7) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
		var new_lieu_collecte = true;
		for (var i = 0; i < tabLieu_collecte.length; i++) {
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
	if ((rowCountContent == 12) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
		var new_preleve_chez = true;
		for (var i = 0; i < tabPreleve_chez.length; i++) {
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
	if ((rowCountContent == 14) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
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
	if ((rowCountContent == 18) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
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
	if ((rowCountContent == 21) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
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
	if ((rowCountContent == 29) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
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
	if ((rowCountContent == 35) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
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
	if ((rowCountContent == 35) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
		var new_endroit_prelevement = true;
		for (var i = 0; i < tabEndroit_prelevement.length; i++) {
			if (tabEndroit_prelevement[i] == String(rowContent)) {
				new_endroit_prelevement = false;
			};
		};
		if (new_endroit_prelevement) {
			tabEndroit_prelevement.push(rowContent);
			tabEndroit_prelevement.push(rowContent);		
		};
	};
};

function addEspeceInTableReferenceBushmeat(i) {
	console.log(i + ' : ' + tab[i][23].trim() + ' ' + tab[i][24].trim() + ' ' + tab[i][24].trim());
	
	//Espece
	Espece = tab[i][23].trim() + ' ' + tab[i][24].trim() + ' ' + tab[i][25].trim();
	
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
		
	} /*else {
		var localDB = new PouchDB(table + debug);
		localDB.allDocs({
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var remoteDB = new PouchDB(remote_couchdb + table + debug);
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
};

function addFamille(value, i, table) {
	localDB = new PouchDB(table + debug);
	localDB.allDocs({
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
				localEspeceDB = new PouchDB(table + debug);
				return localEspeceDB.get(id).then(function(doc) {
					doc.Famille = famille;	
				    return localEspeceDB.put(doc).then(function () {
					    return localEspeceDB.get(id).then(function () {
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
	localDB = new PouchDB(table + debug);	
	localDB.allDocs({
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
			localEspeceDB = new PouchDB(table + debug);
			localEspeceDB.get(id).then(function (doc) {
				value = value.toUpperCase();
				rowFamille[f] = new addNom(value);
				famille = JSON.stringify(rowFamille);
				famille = JSON.parse(famille);
				doc.Famille = famille;
				return localEspeceDB.put(doc).then(function (doc) {
					return localEspeceDB.get(id).then(function (doc) {
						var rowGenre =[];
						rowGenre[0] = new addNom(value2);
						genre = JSON.stringify(rowGenre);
						genre = JSON.parse(genre);
						doc.Famille[f].Genre = genre;							
						return localEspeceDB.put(doc).then(function () {
							return localEspeceDB.get(id).then(function () {
								return localEspeceDB.allDocs({include_docs: true}).then(function () {
									return addFamilleGenreEspece(i-1, table);
								});
							});
						});
					});
				});
			});	
		} else if ((nouvelle_famille == false) && (nouveau_genre)) {
			localEspeceDB = new PouchDB(table + debug);
			return localEspeceDB.get(id).then(function (doc) {
				doc.Famille[iFamille].Genre = genre;	
				return localEspeceDB.put(doc).then(function () {
					return localEspeceDB.get(id).then(function (doc) {
						return localEspeceDB.allDocs({include_docs: true}).then(function (doc) {
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
	localDB = new PouchDB(table + debug);	
	localDB.allDocs({
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
			localEspeceDB = new PouchDB(table + debug);
			localEspeceDB.get(id).then(function (doc) {
				value = value.toUpperCase();
				rowFamille[f] = new addNom(value);
				famille = JSON.stringify(rowFamille);
				famille = JSON.parse(famille);
				doc.Famille = famille;
				return localEspeceDB.put(doc).then(function (doc) {
					return localEspeceDB.get(id).then(function (doc) {
						var rowGenre =[];
						rowGenre[0] = new addNom(value2);
						genre = JSON.stringify(rowGenre);
						genre = JSON.parse(genre);
						doc.Famille[f].Genre = genre;							
						return localEspeceDB.put(doc).then(function (doc) {
							return localEspeceDB.get(id).then(function (doc) {
								var rowEspece =[];
								rowEspece[0] = new addNom(value3);
								espece = JSON.stringify(rowEspece);
								espece = JSON.parse(espece);
								//alert(j);
								doc.Famille[f].Genre[j].Espece = espece;
								return localEspeceDB.put(doc).then(function () {
									return localEspeceDB.get(id).then(function () {
										return localEspeceDB.allDocs({include_docs: true}).then(function () {
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
			localEspeceDB = new PouchDB(table + debug);
			return localEspeceDB.get(id).then(function (doc) {
				doc.Famille[iFamille].Genre = genre;
				return localEspeceDB.put(doc).then(function () {
					return localEspeceDB.get(id).then(function (doc) {
						var rowEspece =[];
						rowEspece[0] = new addNom(value3);
						espece = JSON.stringify(rowEspece);
						espece = JSON.parse(espece);
						//alert(j);
						doc.Famille[iFamille].Genre[j].Espece = espece;
						return localEspeceDB.put(doc).then(function () {
							return localEspeceDB.get(id).then(function () {
								return localEspeceDB.allDocs({include_docs: true}).then(function () {
									return addFamilleGenreEspece(i-1, table);
								});
							});
						});
					});
				});
			});
		} else {
		    //alert('ancienne famille et ancien genre');
			localEspeceDB = new PouchDB(table + debug);
			return localEspeceDB.get(id).then(function (doc) {
				doc.Famille[iFamille].Genre[iGenre].Espece = espece;
				return localEspeceDB.put(doc).then(function () {
					return localEspeceDB.get(id).then(function () {
						return localEspeceDB.allDocs({include_docs: true}).then(function () {
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
