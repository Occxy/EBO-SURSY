var import_table = localStorage.getItem('import_table'); 
var file = localStorage.getItem('file_import');
var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

var tabPays = [];
var tabNewPays = [];

var valid_field = 
	['Date', 'Equipe', 'ID_CS_preleve_debut', 'ID_CS_preleve_fin',
	 'Pairs_impairs', 'Sans_ID_1', 'Sans_ID_2', 'Sans_ID_3', 'Avec_ID_1', 'Avec_ID_2', 'Avec_ID_3', 'Numero_mission',
	 'N_site', 'Pays', 'Region_capture', 'Site_capture', 'Environnement',	'Proximite_village_km',
	 'Lat_degre_dec', 'Latitude', 'Long_degre_dec', 'Longitude', 'Roost_diurne', 'Presence_diurne', 
	 'Famille_diurne1', 'Genre_diurne1', 'Espece_diurne1',
	 'Famille_diurne2', 'Genre_diurne2', 'Espece_diurne2',
	 'Famille_diurne3', 'Genre_diurne3', 'Espece_diurne3',
	 'Famille_diurne4', 'Genre_diurne4', 'Espece_diurne4',
	 'Famille_diurne5', 'Genre_diurne5', 'Espece_diurne5',
	 'Famille_diurne6', 'Genre_diurne6', 'Espece_diurne6',
	 'Famille_diurne7', 'Genre_diurne7', 'Espece_diurne7',
	 'Methode_comptage_diurne', 'Resultat_comptage_diurne_1', 'Resultat_comptage_diurne_2',
	 'Utilisation_site_nocturne', 'Aliment_consomme', 'Presence_nocturne',
	 'Famille_nocturne1', 'Genre_nocturne1',	'Espece_nocturne1',
	 'Famille_nocturne2', 'Genre_nocturne2',	'Espece_nocturne2',
	 'Famille_nocturne3', 'Genre_nocturne3',	'Espece_nocturne3',
	 'Famille_nocturne4', 'Genre_nocturne4',	'Espece_nocturne4',
	 'Famille_nocturne5', 'Genre_nocturne5',	'Espece_nocturne5',
	 'Famille_nocturne6', 'Genre_nocturne6',	'Espece_nocturne6',
	 'Famille_nocturne7', 'Genre_nocturne7',	'Espece_nocturne7',
	 'Methode_comptage_nocturne', 'Resultat_comptage_nocturne_1', 'Resultat_comptage_nocturne_2',
	 'Vocalisations', 'Parade_sexuelle',
	 'Famille_vocalisations', 'Genre_vocalisations', 'Espece_vocalisations',
	 'Copulations', 
	 'Famille_copulations', 'Genre_copulations', 'Espece_copulations',
	 'Suitee', 
	 'Famille_suitee1', 'Genre_suitee1', 'Espece_suitee1', 
	 'Famille_suitee2', 'Genre_suitee2', 'Espece_suitee2',
	 'Famille_suitee3', 'Genre_suitee3', 'Espece_suitee3',
	 'Famille_suitee4', 'Genre_suitee4', 'Espece_suitee4',
	 'Agressions',
	 'Famille_agressions', 'Genre_agressions', 'Espece_agressions',
	 'Gestante', 
	 'Famille_gestante1', 'Genre_gestante1', 'Espece_gestante1', 
	 'Famille_gestante2', 'Genre_gestante2', 'Espece_gestante2',
	 'Famille_gestante3', 'Genre_gestante3', 'Espece_gestante3',
	 'Famille_gestante4', 'Genre_gestante4', 'Espece_gestante4',
	 'Lactante', 
	 'Famille_lactante1', 'Genre_lactante1', 'Espece_lactante1', 
	 'Famille_lactante2', 'Genre_lactante2', 'Espece_lactante2',
	 'Famille_lactante3', 'Genre_lactante3', 'Espece_lactante3',
	 'Famille_lactante4', 'Genre_lactante4', 'Espece_lactante4', 
	 'Filet_canopee_nb_7', 'Filet_canopee_m2_7',
	 'NumFilet7_1', 'LongueurFilet7_1', 'HauteurFilet7_1',
	 'Lat_degre_decFilet7_1', 'LatitudeFilet7_1',
	 'Long_degre_decFilet7_1', 'LongitudeFilet7_1',
	 'NumFilet7_2', 'LongueurFilet7_2', 'HauteurFilet7_2',
	 'Lat_degre_decFilet7_2', 'LatitudeFilet7_2',
	 'Long_degre_decFilet7_2', 'LongitudeFilet7_2',
	 'NumFilet7_3', 'LongueurFilet7_3', 'HauteurFilet7_3',
	 'Lat_degre_decFilet7_3', 'LatitudeFilet7_3',
	 'Long_degre_decFilet7_3', 'LongitudeFilet7_3',
	 'NumFilet7_4', 'LongueurFilet7_4', 'HauteurFilet7_4',
	 'Lat_degre_decFilet7_4', 'LatitudeFilet7_4',
	 'Long_degre_decFilet7_4', 'LongitudeFilet7_4',
	 'NumFilet7_5', 'LongueurFilet7_5', 'HauteurFilet7_5',
	 'Lat_degre_decFilet7_5', 'LatitudeFilet7_5',
	 'Long_degre_decFilet7_5', 'LongitudeFilet7_5',
	 'NumFilet7_6', 'LongueurFilet7_6', 'HauteurFilet7_6',
	 'Lat_degre_decFilet7_6', 'LatitudeFilet7_6',
	 'Long_degre_decFilet7_6', 'LongitudeFilet7_6',
	 'NumFilet7_7', 'LongueurFilet7_7', 'HauteurFilet7_7',
	 'Lat_degre_decFilet7_7', 'LatitudeFilet7_7',
	 'Long_degre_decFilet7_7', 'LongitudeFilet7_7',
	 'Filet_canopee_nb_20', 'Filet_canopee_m2_20', 
	 'NumFilet20_1', 'LongueurFilet20_1', 'HauteurFilet20_1',
	 'Lat_degre_decFilet20_1', 'LatitudeFilet20_1',
	 'Long_degre_decFilet20_1', 'LongitudeFilet20_1',
	 'NumFilet20_2', 'LongueurFilet20_2', 'HauteurFilet20_2',
	 'Lat_degre_decFilet20_2', 'LatitudeFilet20_2',
	 'Long_degre_decFilet20_2', 'LongitudeFilet20_2',
	 'NumFilet20_3', 'LongueurFilet20_3', 'HauteurFilet20_3',
	 'Lat_degre_decFilet20_3', 'LatitudeFilet20_3',
	 'Long_degre_decFilet20_3', 'LongitudeFilet20_3',
	 'NumFilet20_4', 'LongueurFilet20_4', 'HauteurFilet20_4',
	 'Lat_degre_decFilet20_4', 'LatitudeFilet20_4',
	 'Long_degre_decFilet20_4', 'LongitudeFilet20_4',
	 'NumFilet20_5', 'LongueurFilet20_5', 'HauteurFilet20_5',
	 'Lat_degre_decFilet20_5', 'LatitudeFilet20_5',
	 'Long_degre_decFilet20_5', 'LongitudeFilet20_5',
	 'NumFilet20_6', 'LongueurFilet20_6', 'HauteurFilet20_6',
	 'Lat_degre_decFilet20_6', 'LatitudeFilet20_6',
	 'Long_degre_decFilet20_6', 'LongitudeFilet20_6',
	 'NumFilet20_7', 'LongueurFilet20_7', 'HauteurFilet20_7',
	 'Lat_degre_decFilet20_7', 'LatitudeFilet20_7',
	 'Long_degre_decFilet20_7', 'LongitudeFilet20_7',
	 'Filet_sol_nb', 'Filet_sol_m2',
	 'NumFiletSol_1', 'LongueurFiletSol_1', 'HauteurFiletSol_1',
	 'Lat_degre_decFiletSol_1', 'LatitudeFiletSol_1',
	 'Long_degre_decFiletSol_1', 'LongitudeFiletSol_1',
	 'NumFiletSol_2', 'LongueurFiletSol_2', 'HauteurFiletSol_2',
	 'Lat_degre_decFiletSol_2', 'LatitudeFiletSol_2',
	 'Long_degre_decFiletSol_2', 'LongitudeFiletSol_2',
	 'NumFiletSol_3', 'LongueurFiletSol_3', 'HauteurFiletSol_3',
	 'Lat_degre_decFiletSol_3', 'LatitudeFiletSol_3',
	 'Long_degre_decFiletSol_3', 'LongitudeFiletSol_3',
	 'NumFiletSol_4', 'LongueurFiletSol_4', 'HauteurFiletSol_4',
	 'Lat_degre_decFiletSol_4', 'LatitudeFiletSol_4',
	 'Long_degre_decFiletSol_4', 'LongitudeFiletSol_4',
	 'NumFiletSol_5', 'LongueurFiletSol_5', 'HauteurFiletSol_5',
	 'Lat_degre_decFiletSol_5', 'LatitudeFiletSol_5',
	 'Long_degre_decFiletSol_5', 'LongitudeFiletSol_5',
	 'NumFiletSol_6', 'LongueurFiletSol_6', 'HauteurFiletSol_6',
	 'Lat_degre_decFiletSol_6', 'LatitudeFiletSol_6',
	 'Long_degre_decFiletSol_6', 'LongitudeFiletSol_6',
	 'NumFiletSol_7', 'LongueurFiletSol_7', 'HauteurFiletSol_7',
	 'Lat_degre_decFiletSol_7', 'LatitudeFiletSol_7',
	 'Long_degre_decFiletSol_7', 'LongitudeFiletSol_7',
	 'Filet_debut', 'Filet_fin', 'Filet_temps', 'Filet_capture_nb', 'Harp_debut',
	 'Harp_fin', 'Harp_temps', 'Harpe_nb', 'Saison', 'Climat', 'Autre_climat',
	 'Precipitation', 'Vent', 'Lune', 'Temperature_logger', 'Humidite_logger',
	 'Arret_Capture', 'Causes_Arret_Capture'];

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

var paysTablesData = JSON.parse(localStorage.getItem('pays' + import_table + 'TablesData'));
paysTablesData.rows.forEach(function(row){   
	tabPays.push(row.doc.Pays);
});
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
			
			if (is_only_one_country()) {
			
				tab_max = lines_length-1;
				
				for (var line = 1; line < lines_length; line++) {
					rowContent = lines[line].trim().split(";");
					//console.log(rowContent[0]);
					fill_tab_datas_missions(line);
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
	var i_pays = 13;
	
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

function fill_tab_datas_missions(file_line) {
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
		
		search_N_identification_Recursif_Journalieres(/*DB,*/ lines_length-1, 0, -1, '', row);
	};
};

function search_N_identification_Recursif_Journalieres(/*localDB,*/ i, j, k, N_identification_missions, row) {
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'donnees_journalieres' + import_table + debug);
	} else {
		var DB = new PouchDB('donnees_journalieres' + import_table + debug);
	};
	
	if (i > 0) {

		if (typeof tab[i] !== "undefined") {
			
			var new_code;
			var ID_CS_preleve_debut = tab[i][2];
			new_code = ID_CS_preleve_debut;
			var ID_CS_preleve_fin = tab[i][3];
			new_code = new_code + ID_CS_preleve_fin;
			
			console.log('new_code : ' + new_code)
			
			DB.find({
		       	selector: {N_identification_journalieres: new_code}
			}).then(function (result) {
		    	
		    	if (result.docs.length > 0) {
		    		move();
		    		row++;
		    		//if (record_change_bat_capturees(result, rowContent_length)) {
		    			var id = result.docs[0]._id;
		    			put_with_id_journalieres(id, i);
		    			
		    			for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
							var rowContent = tab[i][rowCountContent]
							addValueInTableReferenceJournalieres(rowCountContent, rowContent);
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
		    			
		    			if ((rowCountContent < 24)
		    					|| ((rowCountContent > 44) && (rowCountContent < 51)) 
		        				|| ((rowCountContent > 71) && (rowCountContent < 129)) 
		        				|| ((rowCountContent > 177) && (rowCountContent < 180))
		        				|| ((rowCountContent > 228) && (rowCountContent < 231))
		        				|| (rowCountContent > 279)) {
		    			
			    			var name_field = field[rowCountContent];
							var rowContent = tab[/*numero_individu*/i][rowCountContent]
							
							console.log(name_field + ' : ' + rowContent)
							
							new_doc[name_field] = rowContent;
								
							addValueInTableReferenceJournalieres(rowCountContent, rowContent);
		    			}	
					};
					
					//addEspeceInTableReferenceBatCapturees(i);
					
					var id = uuid();
					new_doc._id = id;
					new_doc.N_identification_journalieres = /*String(numero_individu)*/new_code;
					new_doc.Username = localStorage.getItem('loginUsername');
					
					myTab = null;
					myTab = new Array();
					if (typeof myTab !== "undefined") {
						
						addNewObjectToTabDiurne(myTab, i);
					};						
					var TaxonomieDiurne = JSON.stringify(myTab);
					console.log(TaxonomieDiurne);
					TaxonomieDiurne = JSON.parse(TaxonomieDiurne);
					
					new_doc.TaxonomieDiurne = TaxonomieDiurne;
					
					myTab = null;
					myTab = new Array();
					if (typeof myTab !== "undefined") {
						
						addNewObjectToTabNocturne(myTab, i);
					};						
					var TaxonomieNocturne = JSON.stringify(myTab);
					console.log(TaxonomieNocturne);
					TaxonomieNocturne = JSON.parse(TaxonomieNocturne);
					
					new_doc.TaxonomieNocturne = TaxonomieNocturne;
					
					myTab = null;
					myTab = new Array();
					if (typeof myTab !== "undefined") {
						
						addNewObjectToTabFilet7(myTab, i);
					};						
					var FiletCanopee_7 = JSON.stringify(myTab);
					console.log(FiletCanopee_7);
					FiletCanopee_7 = JSON.parse(FiletCanopee_7);
					
					new_doc.FiletCanopee_7 = FiletCanopee_7;
					
					myTab = null;
					myTab = new Array();
					if (typeof myTab !== "undefined") {
						
						addNewObjectToTabFilet20(myTab, i);
					};						
					var FiletCanopee_20 = JSON.stringify(myTab);
					console.log(FiletCanopee_20);
					FiletCanopee_20 = JSON.parse(FiletCanopee_20);
					
					new_doc.FiletCanopee_20 = FiletCanopee_20;
					
					myTab = null;
					myTab = new Array();
					if (typeof myTab !== "undefined") {
						
						addNewObjectToTabFiletSol(myTab, i);
					};						
					var FiletSol = JSON.stringify(myTab);
					console.log(FiletSol);
					FiletSol = JSON.parse(FiletSol);
					
					new_doc.FiletSol = FiletSol;
					
					put_new_id_journalieres(new_doc/*, i*/);
					
					move();
					row++;
					
					search_N_identification_Recursif_Journalieres(/*localDB, */i-1);
		    		
		    	}
		    }).catch(function (err) {
		       	console.log(err);
		    });
			
			console.log("full - " + i);
		} else {
			console.log("empty - " + i);
			move();
			row++;
			
			search_N_identification_Recursif_Journalieres(/*localDB, */i-1);
			
		};
	} else {
		
		synchronizeJournalieres();
		/*if (localStorage.getItem('web') !== 'oui') {
			synchronizeEspece('espece');
		}*/
	};
};

function put_with_id_journalieres(id, i) {
	
	var sN_identification;
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'donnees_journalieres' + import_table + debug);
	} else {
		var DB = new PouchDB('donnees_journalieres' + import_table + debug);
	};
	DB.get(id).then(function (doc) {
		
		for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
			
			if ((rowCountContent < 24)
    				|| ((rowCountContent > 44) && (rowCountContent < 51)) 
       				|| ((rowCountContent > 71) && (rowCountContent < 129)) 
       				|| ((rowCountContent > 177) && (rowCountContent < 180))
       				|| ((rowCountContent > 228) && (rowCountContent < 231))
       				|| (rowCountContent > 279)) {
				var name_field = field[rowCountContent];
				
				var rowContent = tab[i][rowCountContent];
				
				doc[name_field] = rowContent;
				
				doc.Username = localStorage.getItem('loginUsername');
					
				myTab = null;
				myTab = new Array();
				if (typeof myTab !== "undefined") {
					
					addNewObjectToTabDiurne(myTab, i);
				};						
				var TaxonomieDiurne = JSON.stringify(myTab);
				console.log(TaxonomieDiurne);
				TaxonomieDiurne = JSON.parse(TaxonomieDiurne);
				
				doc.TaxonomieDiurne = TaxonomieDiurne;
				
				myTab = null;
				myTab = new Array();
				if (typeof myTab !== "undefined") {
					
					addNewObjectToTabNocturne(myTab, i);
				};						
				var TaxonomieNocturne = JSON.stringify(myTab);
				console.log(TaxonomieNocturne);
				TaxonomieNocturne = JSON.parse(TaxonomieNocturne);
				
				doc.TaxonomieNocturne = TaxonomieNocturne;
				
				myTab = null;
				myTab = new Array();
				if (typeof myTab !== "undefined") {
					
					addNewObjectToTabFilet7(myTab, i);
				};						
				var FiletCanopee_7 = JSON.stringify(myTab);
				console.log(FiletCanopee_7);
				FiletCanopee_7 = JSON.parse(FiletCanopee_7);
				
				doc.FiletCanopee_7 = FiletCanopee_7;
				
				myTab = null;
				myTab = new Array();
				if (typeof myTab !== "undefined") {
					
					addNewObjectToTabFilet20(myTab, i);
				};						
				var FiletCanopee_20 = JSON.stringify(myTab);
				console.log(FiletCanopee_20);
				FiletCanopee_20 = JSON.parse(FiletCanopee_20);
				
				doc.FiletCanopee_20 = FiletCanopee_20;
				
				myTab = null;
				myTab = new Array();
				if (typeof myTab !== "undefined") {
					
					addNewObjectToTabFiletSol(myTab, i);
				};						
				var FiletSol = JSON.stringify(myTab);
				console.log(FiletSol);
				FiletSol = JSON.parse(FiletSol);
				
				doc.FiletSol = FiletSol;
			
			}		
		};
		
		//addEspeceInTableReferenceBatCapturees(i);
		
		return DB.put(doc).then(function () {
			return DB.get(id).then(function () {
				/*if (i == tab_max) {
					if (navigator.onLine) {
						synchronizeBatCapturees();
					};
				};*/
				search_N_identification_Recursif_Journalieres(/*localDB, */i-1)
			});
		});
	}).catch(function (err) {
       	console.log(err);
       	console.log('error ' + id);
    });
};

function put_new_id_journalieres(doc/*, i*/) {
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'donnees_journalieres' + import_table + debug);
	} else {
		var DB = new PouchDB('donnees_journalieres' + import_table + debug);
		
	};
	DB.put(doc).then(function () {
		console.log(doc);
	});
};

function synchronizeJournalieres() {
	
	//alert('synchronizeBatNoninvasives');
	
	if (localStorage.getItem('web') !== 'oui') {
		var localDB = new PouchDB('donnees_journalieres' + import_table + debug);
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var remoteDB = new PouchDB(remote_couchdb + 'donnees_journalieres' + import_table + debug, {skip_setup: true});
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
				var DB = new PouchDB(remote_couchdb + 'pays' + import_table /*+ nom_equipe*/ + debug);
			} else {
				var DB = new PouchDB('pays' + import_table /*+ nom_equipe*/ + debug);
			};
			DB.put(doc).then(function(response){
				return addPays(i-1);
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			if (localStorage.getItem('web') !== 'oui') {
				var localDB = new PouchDB('pays' + import_table /*+ nom_equipe*/ + debug);
				localDB.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					// handle result
					var remote_couchdb = localStorage.getItem('remote_couchdb');
					var remoteDB = new PouchDB(remote_couchdb + 'pays' + import_table /*+ nom_equipe*/ + debug);
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

function addTaxonomie(FamilleX, GenreX, EspeceX) {
    this.Famille = FamilleX;
    this.Genre = GenreX
    this.Espece = EspeceX;
    	    
    this.FamilleX = function() {
        return this.Famille;
    };
    
    this.GenreX = function() {
        return this.Genre;
    };
    
    this.EspeceX = function() {
        return this.Espece;
    };
    
};

function addFilet(NumFiletX, LongueurFiletX, HauteurFiletX, Lat_degre_decFiletX, LatitudeFiletX, Long_degre_decFiletX, LongitudeFiletX) {
    this.NumFilet = NumFiletX;
    this.LongueurFilet = LongueurFiletX
    this.HauteurFilet = HauteurFiletX;
    this.Lat_degre_decFilet = Lat_degre_decFiletX;
    this.LatitudeFilet = LatitudeFiletX
    this.Long_degre_decFilet =Long_degre_decFiletX;
    this.LongitudeFilet = LongitudeFiletX;
    	    
    this.NumFiletX = function() {
        return this.NumFilet;
    };
    
    this.LongueurFiletX = function() {
        return this.LongueurFilet;
    };
    
    this.HauteurFiletX = function() {
        return this.HauteurFilet;
    };
    
    this.Lat_degre_decFiletX = function() {
        return this.Lat_degre_decFilet;
    };
    
    this.LatitudeFiletX = function() {
        return this.LatitudeFilet;
    };
    
    this.Long_degre_decFiletX = function() {
        return this.Long_degre_decFilet;
    };
    
    this.LongitudeFiletX = function() {
        return this.LongitudeFilet;
    };
    
};

function addValueInTableReferenceJournalieres(rowCountContent, rowContent) {
	
	//Pays
	if ((rowCountContent == 13) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
		if (rowContent != '') {
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
	} /*else
	if ((rowCountContent == 62) && (rowContent != String('')) && (rowContent != String('Manquant'))) {
		if (rowContent != '') {
			
			var content = rowContent.split(",");
			
			for (var j = 0; j < content.length; j++) {
				var new_activite_humaine = true;
				for (var i = 0; i < tabActivite_humaine.length; i++) {
					if (tabActivite_humaine[i] == String(content[j])) {
						new_activite_humaine = false;
					};
				};
				if (new_activite_humaine) {
					tabActivite_humaine.push(content[j]);
					tabNewActivite_humaine.push(content[j]);		
				};
			};
			
		}
	};*/
};

/*function addEspeceInTableReferenceBatNoninvasives(i) {
	console.log(i + ' : ' + tab[i][17].trim() + ' ' + tab[i][18].trim() + ' ' + tab[i][19].trim());
	console.log(i + ' : ' + tab[i][20].trim() + ' ' + tab[i][21].trim() + ' ' + tab[i][22].trim());
	console.log(i + ' : ' + tab[i][23].trim() + ' ' + tab[i][24].trim() + ' ' + tab[i][25].trim());
	
	//Espece
	Espece1 = tab[i][17].trim().toUpperCase() + ' ' + tab[i][18].trim() + ' ' + tab[i][19].trim();
	Espece2 = tab[i][20].trim().toUpperCase() + ' ' + tab[i][21].trim() + ' ' + tab[i][22].trim();
	Espece3 = tab[i][23].trim().toUpperCase() + ' ' + tab[i][24].trim() + ' ' + tab[i][25].trim();
	
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
};*/

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

function addNewObjectToTabDiurne(arr, i) {
	if ((tab[i][24] != '') || (tab[i][25] != '') || (tab[i][26] != '')) {
		obj = new addTaxonomie(tab[i][24], tab[i][25], tab[i][26]);
		arr.push(obj);
	}
	if ((tab[i][27] != '') ||(tab[i][28] != '') ||(tab[i][29] != '')) {
		obj = new addTaxonomie(tab[i][27], tab[i][28], tab[i][29]);
		arr.push(obj);
	}
	if ((tab[i][30] != '') ||(tab[i][31] != '') ||(tab[i][32] != '')) {
		obj = new addTaxonomie(tab[i][30], tab[i][31], tab[i][32]);
		arr.push(obj);
	}
	if ((tab[i][33] != '') ||(tab[i][34] != '') ||(tab[i][35] != '')) {
		obj = new addTaxonomie(tab[i][33], tab[i][34], tab[i][35]);
		arr.push(obj);
	}
	if ((tab[i][36] != '') ||(tab[i][37] != '') ||(tab[i][38] != '')) {
		obj = new addTaxonomie(tab[i][36], tab[i][37], tab[i][38]);
		arr.push(obj);
	}
	if ((tab[i][39] != '') ||(tab[i][40] != '') ||(tab[i][41] != '')) {
		obj = new addTaxonomie(tab[i][39], tab[i][40], tab[i][41]);
		arr.push(obj);
	}
	if ((tab[i][42] != '') ||(tab[i][43] != '') ||(tab[i][44] != '')) {
		obj = new addTaxonomie(tab[i][42], tab[i][43], tab[i][44]);
		arr.push(obj);
	}
};

function addNewObjectToTabNocturne(arr, i) {
	if ((tab[i][51] != '') ||(tab[i][52] != '') ||(tab[i][53] != '')) {
		obj = new addTaxonomie(tab[i][51], tab[i][52], tab[i][53]);
		arr.push(obj);
	}
	if ((tab[i][54] != '') ||(tab[i][55] != '') ||(tab[i][56] != '')) {
		obj = new addTaxonomie(tab[i][54], tab[i][55], tab[i][56]);
		arr.push(obj);
	}
	if ((tab[i][57] != '') ||(tab[i][58] != '') ||(tab[i][59] != '')) {
		obj = new addTaxonomie(tab[i][57], tab[i][58], tab[i][59]);
		arr.push(obj);
	}
	if ((tab[i][60] != '') ||(tab[i][61] != '') ||(tab[i][62] != '')) {
		obj = new addTaxonomie(tab[i][60], tab[i][61], tab[i][62]);
		arr.push(obj);
	}
	if ((tab[i][63] != '') ||(tab[i][64] != '') ||(tab[i][65] != '')) {
		obj = new addTaxonomie(tab[i][63], tab[i][64], tab[i][65]);
		arr.push(obj);
	}
	if ((tab[i][66] != '') ||(tab[i][67] != '') ||(tab[i][68] != '')) {
		obj = new addTaxonomie(tab[i][66], tab[i][67], tab[i][68]);
		arr.push(obj);
	}
	if ((tab[i][69] != '') ||(tab[i][70] != '') ||(tab[i][71] != '')) {
		obj = new addTaxonomie(tab[i][69], tab[i][70], tab[i][71]);
		arr.push(obj);
	}
};

function addNewObjectToTabFilet7(arr, i) {
	if (tab[i][129] != '') {
		obj = new addFilet(tab[i][129], tab[i][130], tab[i][131], tab[i][132], tab[i][133], tab[i][134], tab[i][135]);
		arr.push(obj);
	}
	if (tab[i][136] != '') {
		obj = new addFilet(tab[i][136], tab[i][137], tab[i][138], tab[i][139], tab[i][140], tab[i][141], tab[i][142]);
		arr.push(obj);
	}
	if (tab[i][143] != '') {
		obj = new addFilet(tab[i][143], tab[i][144], tab[i][145], tab[i][146], tab[i][147], tab[i][148], tab[i][149]);
		arr.push(obj);
	}
	if (tab[i][150] != '') {
		obj = new addFilet(tab[i][150], tab[i][151], tab[i][152], tab[i][153], tab[i][154], tab[i][155], tab[i][156]);
		arr.push(obj);
	}
	if (tab[i][157] != '') {
		obj = new addFilet(tab[i][157], tab[i][158], tab[i][159], tab[i][160], tab[i][161], tab[i][162], tab[i][163]);
		arr.push(obj);
	}
	if (tab[i][164] != '') {
		obj = new addFilet(tab[i][164], tab[i][165], tab[i][166], tab[i][167], tab[i][168], tab[i][169], tab[i][170]);
		arr.push(obj);
	}
	if (tab[i][171] != '') {
		obj = new addFilet(tab[i][171], tab[i][172], tab[i][173], tab[i][174], tab[i][175], tab[i][176], tab[i][177]);
		arr.push(obj);
	}
};

function addNewObjectToTabFilet20(arr, i) {
	if (tab[i][180] != '') {
		obj = new addFilet(tab[i][180], tab[i][181], tab[i][182], tab[i][183], tab[i][184], tab[i][185], tab[i][186]);
		arr.push(obj);
	}
	if (tab[i][187] != '') {
		obj = new addFilet(tab[i][187], tab[i][188], tab[i][189], tab[i][190], tab[i][191], tab[i][192], tab[i][193]);
		arr.push(obj);
	}
	if (tab[i][194] != '') {
		obj = new addFilet(tab[i][194], tab[i][195], tab[i][196], tab[i][197], tab[i][198], tab[i][199], tab[i][200]);
		arr.push(obj);
	}
	if (tab[i][201] != '') {
		obj = new addFilet(tab[i][201], tab[i][202], tab[i][203], tab[i][204], tab[i][205], tab[i][206], tab[i][207]);
		arr.push(obj);
	}
	if (tab[i][208] != '') {
		obj = new addFilet(tab[i][208], tab[i][209], tab[i][210], tab[i][211], tab[i][212], tab[i][213], tab[i][214]);
		arr.push(obj);
	}
	if (tab[i][215] != '') {
		obj = new addFilet(tab[i][215], tab[i][216], tab[i][217], tab[i][218], tab[i][219], tab[i][220], tab[i][221]);
		arr.push(obj);
	}
	if (tab[i][222] != '') {
		obj = new addFilet(tab[i][222], tab[i][223], tab[i][224], tab[i][225], tab[i][226], tab[i][227], tab[i][228]);
		arr.push(obj);
	}
};

function addNewObjectToTabFiletSol(arr, i) {
	if (tab[i][231] != '') {
		obj = new addFilet(tab[i][231], tab[i][232], tab[i][233], tab[i][234], tab[i][235], tab[i][236], tab[i][237]);
		arr.push(obj);
	}
	if (tab[i][238] != '') {
		obj = new addFilet(tab[i][238], tab[i][239], tab[i][240], tab[i][241], tab[i][242], tab[i][243], tab[i][244]);
		arr.push(obj);
	}
	if (tab[i][245] != '') {
		obj = new addFilet(tab[i][245], tab[i][246], tab[i][247], tab[i][248], tab[i][249], tab[i][250], tab[i][251]);
		arr.push(obj);
	}
	if (tab[i][252] != '') {
		obj = new addFilet(tab[i][252], tab[i][253], tab[i][254], tab[i][255], tab[i][256], tab[i][257], tab[i][258]);
		arr.push(obj);
	}
	if (tab[i][259] != '') {
		obj = new addFilet(tab[i][259], tab[i][260], tab[i][261], tab[i][262], tab[i][263], tab[i][264], tab[i][265]);
		arr.push(obj);
	}
	if (tab[i][266] != '') {
		obj = new addFilet(tab[i][266], tab[i][267], tab[i][268], tab[i][269], tab[i][270], tab[i][271], tab[i][272]);
		arr.push(obj);
	}
	if (tab[i][273] != '') {
		obj = new addFilet(tab[i][273], tab[i][274], tab[i][275], tab[i][276], tab[i][277], tab[i][278], tab[i][279]);
		arr.push(obj);
	}
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




