var import_table = localStorage.getItem('import_table'); 
var file = localStorage.getItem('file_filets');
var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

var valid_field = 
	['fid', 'id', 'elevation', 'name',
	 'comment', 'descriptio', 'symbol', 'type', 'capture_ti',
     'xcoord', 'ycoord'];

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

var tab_donnees_journalieres = new Array();

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DB = new PouchDB(remote_couchdb + 'donnees_journalieres' + nom_table + debug);
} else {
	var DB = new PouchDB('donnees_journalieres' + nom_table + debug);
};

DB.allDocs({  		
	include_docs: true,
	attachments: true
}).then(function (result) {
	// handle result
	if (typeof(JSON.stringify(result)) != "undefined"){  
			
		var tableData = JSON.parse(JSON.stringify(result));
			
		tableData.rows.forEach(function(row){   
   			try {
   				//tab[i] = new Array();
   				
   				//alert(row.doc._id + ' : ' + row.doc.ID_CS_preleve_debut)
   				var obj = new Object();
   				obj.id = row.doc._id;
   				obj.Date = row.doc.Date;
    	  	    obj.Equipe = row.doc.Equipe;
    		  	obj.ID_CS_preleve_debut = row.doc.ID_CS_preleve_debut;
    		  	obj.ID_CS_preleve_fin = row.doc.ID_CS_preleve_fin;
    		  	obj.N_site = row.doc.N_site;
    		  	obj.Pays = row.doc.Pays;
    		  	obj.Region_capture = row.doc.Region_capture;
    		  	obj.Site_capture = row.doc.Site_capture;
    		  	obj.Environnement = row.doc.Environnement;
    		  	obj.Lat_degre_dec = row.doc.Lat_degre_dec;
    		  	obj.Latitude = row.doc.Latitude;
    		  	obj.Long_degre_dec = row.doc.Long_degre_dec;
    		  	obj.Longitude = row.doc.Longitude;
    		  	obj.Proximite_village_km = row.doc.Proximite_village_km;
    		  	obj.Roost_diurne = row.doc.Roost_diurne;	
    		  	obj.Presence_diurne = row.doc.Presence_diurne;
    		  	obj.TaxonomieDiurne = row.doc.TaxonomieDiurne;			
    		  	obj.Methode_comptage_diurne = row.doc.Methode_comptage_diurne;	
    		  	obj.Resultat_comptage_diurne_1 = row.doc.Resultat_comptage_diurne_1;	
    		  	obj.Resultat_comptage_diurne_2 = row.doc.Resultat_comptage_diurne_2;	
    		  	obj.Utilisation_site_nocturne = row.doc.Utilisation_site_nocturne;	
    		  	obj.Aliment_consomme = row.doc.Aliment_consomme;	
    		  	obj.Presence_nocturne = row.doc.Presence_nocturne;
    		  	obj.TaxonomieNocturne = row.doc.TaxonomieNocturne;
    		  	
    		  	obj.Methode_comptage_nocturne = row.doc.Methode_comptage_nocturne;	
    		  	obj.Resultat_comptage_nocturne_1 = row.doc.Resultat_comptage_nocturne_1;	
    		  	obj.Resultat_comptage_nocturne_2 = row.doc.Resultat_comptage_nocturne_2;	
    		  	obj.Vocalisations = row.doc.Vocalisations;	
    		  	obj.Parade_sexuelle = row.doc.Parade_sexuelle;
    		  	obj.Famille_vocalisations = row.doc.Famille_vocalisations;
    		  	obj.Genre_vocalisations = row.doc.Genre_vocalisations;
    		  	obj.Espece_vocalisations = row.doc.Espece_vocalisations;
    		  	obj.Copulations = row.doc.Copulations;	
    		  	obj.Famille_copulations = row.doc.Famille_copulations;
    		  	obj.Genre_copulations = row.doc.Genre_copulations;
    		  	obj.Espece_copulations = row.doc.Espece_copulations;
    		  	obj.Suitee = row.doc.Suitee;	
    		  	obj.Famille_suitee1 = row.doc.Famille_suitee1;
    		  	obj.Genre_suitee1 = row.doc.Genre_suitee1;
    		  	obj.Espece_suitee1 = row.doc.Espece_suitee1;
    		  	obj.Famille_suitee2 = row.doc.Famille_suitee2;
    		  	obj.Genre_suitee2 = row.doc.Genre_suitee2;
    		  	obj.Espece_suitee2 = row.doc.Espece_suitee2;
    		  	obj.Famille_suitee3 = row.doc.Famille_suitee3;
    		  	obj.Genre_suitee3 = row.doc.Genre_suitee3;
    		  	obj.Espece_suitee3 = row.doc.Espece_suitee3;
    		  	obj.Famille_suitee4 = row.doc.Famille_suitee4;
    		  	obj.Genre_suitee4 = row.doc.Genre_suitee4;
    		  	obj.Espece_suitee4 = row.doc.Espece_suitee4;
    		  	obj.Agressions = row.doc.Agressions;
    		  	obj.Famille_agressions = row.doc.Famille_agressions;
    		  	obj.Genre_agressions = row.doc.Genre_agressions;
    		  	obj.Espece_agressions = row.doc.Espece_agressions;
    		  	
    		  	obj.Gestante = row.doc.Gestante;	
    			obj.Famille_gestante1 = row.doc.Famille_gestante1;
    			obj.Genre_gestante1 = row.doc.Genre_gestante1;
    			obj.Espece_gestante1 = row.doc.Espece_gestante1;
    			obj.Famille_gestante2 = row.doc.Famille_gestante2;
    			obj.Genre_gestante2 = row.doc.Genre_gestante2;
    			obj.Espece_gestante2 = row.doc.Espece_gestante2;
    			obj.Famille_gestante3 = row.doc.Famille_gestante3;
    			obj.Genre_gestante3 = row.doc.Genre_gestante3;
    			obj.Espece_gestante3 = row.doc.Espece_gestante3;
    			obj.Famille_gestante4 = row.doc.Famille_gestante4;
    			obj.Genre_gestante4 = row.doc.Genre_gestante4;
    			obj.Espece_gestante4 = row.doc.Espece_gestante4;
    			obj.Lactante = row.doc.Lactante;	
    			obj.Famille_lactante1 = row.doc.Famille_lactante1;
    			obj.Genre_lactante1 = row.doc.Genre_lactante1;
    			obj.Espece_lactante1 = row.doc.Espece_lactante1;
    			obj.Famille_lactante2 = row.doc.Famille_lactante2;
    			obj.Genre_lactante2 = row.doc.Genre_lactante2;
    			obj.Espece_lactante2 = row.doc.Espece_lactante2;
    			obj.Famille_lactante3 = row.doc.Famille_lactante3;
    			obj.Genre_lactante3 = row.doc.Genre_lactante3;
    			obj.Espece_lactante3 = row.doc.Espece_lactante3;
    			obj.Famille_lactante4 = row.doc.Famille_lactante4;
    			obj.Genre_lactante4 = row.doc.Genre_lactante4;
    			obj.Espece_lactante4 = row.doc.Espece_lactante4;
    		  	
    		  	obj.Filet_canopee_nb_7 = row.doc.Filet_canopee_nb_7;
    		  	obj.Filet_canopee_m2_7 = row.doc.Filet_canopee_m2_7;
    		  	//obj.FiletCanopee_7 = filetCanopee_7;	
    		  	obj.Filet_canopee_nb_20 = row.doc.Filet_canopee_nb_20;	
    		  	obj.Filet_canopee_m2_20 = row.doc.Filet_canopee_m2_20;	
    		  	//obj.FiletCanopee_20 = filetCanopee_20;
    		  	obj.Filet_sol_nb = row.doc.Filet_sol_nb;
    		  	obj.Filet_sol_m2 = row.doc.Filet_sol_m2;
    		  	//obj.FiletSol = filetSol;
    		  	obj.Filet_debut = row.doc.Filet_debut;	
    		  	obj.Filet_fin = row.doc.Filet_fin;	
    		  	obj.Filet_temps = row.doc.Filet_temps;	
    		  	obj.Filet_capture_nb = row.doc.Filet_capture_nb;	
    		  	obj.Harp_debut = row.doc.Harp_debut;	
    		  	obj.Harp_fin = row.doc.Harp_fin;	
    		  	obj.Harp_temps = row.doc.Harp_temps;	
    		  	obj.Harpe_nb = row.doc.Harpe_nb;	
    		  	obj.Saison = row.doc.Saison;	
    		  	obj.Climat = row.doc.Climat;	
    		  	obj.Autre_climat = row.doc.Autre_climat;	
    		  	obj.Precipitation = row.doc.Precipitation;	
    		  	obj.Vent = row.doc.Vent;	
    		  	obj.Lune = row.doc.Lune;	
    		  	obj.Temperature_logger = row.doc.Temperature_logger;	
    		  	obj.Humidite_logger = row.doc.Humidite_logger;
    		  	obj.Username = row.doc.Username;
    		  	tab_donnees_journalieres.push(obj);
   				//i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
			
   	}
}).then(function () {
	/*var res = alasql('SELECT N_site, Pays, Region_capture, Site_capture, Environnement, Latitude, Lat_degre_dec, Longitude, Long_degre_dec, COUNT(*) AS NbSite FROM ?  GROUP BY N_site, Pays, Region_capture, Site_capture, Environnement, Latitude, Lat_degre_dec, Longitude, Long_degre_dec', [tab] );
	
	var site = JSON.stringify(res);
	
	var obj_site = JSON.parse(site);
	
	obj_site.forEach(function(row){
		alert(row.N_site);
	});	*/
	
}).catch(function (err) {
   	console.log(err);
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
			
			/*for (var line = 1; line < lines_length; line++) {
				rowContent = lines[line].trim().split(";");
						
				var num_string = extraireNombre(rowContent[0]);
				var num = Number(num_string);
						
				if (tab_max < num) {
					tab_max = num;
				} 
			}*/
			
			tab_max = lines_length-1;
				
			for (var line = 1; line < lines_length; line++) {
				rowContent = lines[line].trim().split(";");
				//console.log(rowContent[0]);
				//fill_tab_datas_bat_capturees(rowContent[0], line);
				//alert(rowContent[3])
				
				tab[line] = new Array();
				
				for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
					tab[line][rowCountContent] = rowContent[rowCountContent];
				};
				
				
				
				
			};
			
			search_filets(tab_max)
			
			hide_progress_bar();
			enable_li();
			enable_button();
			success();
			
		}	
			
	} else {
		failure_fields("Vérifier que les noms des champs sont valides et bien placés !");
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

function search_filets(i) {
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'donnees_journalieres' + nom_table + debug);
	} else {
		var DB = new PouchDB('donnees_journalieres' + nom_table + debug);
		var DB2 = new PouchDB('donnees_journalieres' + nom_table + debug);
	};
	
	if (i > 0) {
		
		var rowContent = tab[i][3];
		//alert(rowContent);
		
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
	    		var donnees_journalieresTablesData = JSON.parse(JSON.stringify(result));
	    		
	    		var filetCanopee_7, filetCanopee_20, filetSol;
	    		
	    		var valueFounded;
	    		
	    		var id, old_id;
	    		
	    		donnees_journalieresTablesData.rows.forEach(function(row, idx, array){
	    			
	    			var new_id = uuid();
	        		var doc = new Object();
	        		//doc._id =  id;
	        		
	        		old_id = id;
	        		id = row.doc._id;
	        		//alert(id)
	        		
	    			
	    			valueFounded = false;
	    			if (typeof row.doc.FiletCanopee_7 !== 'undefined') {
		    			var j = 0;						
						var rowFiletCanopee_7 =[];	
	    				row.doc.FiletCanopee_7.forEach(function(row1){ 
		    				//NumFilet.options[NumFilet.options.length] = new Option(row1.NumFilet, row1.NumFilet + ';' + row1.LongueurFilet + ';' + row1.HauteurFilet + ';' + row1.Lat_degre_decFilet + ';' + row1.LatitudeFilet + ';' + row1.Long_degre_decFilet + ';' + row1.LongitudeFilet); 
		    				
		    				if ((row1 !== null) && (rowContent != row1.NumFilet)) {
								rowFiletCanopee_7[j] = JSON.stringify(row1);
								rowFiletCanopee_7[j] = JSON.parse(rowFiletCanopee_7[j]);
							};
							
							if ((row1 !== null) && (rowContent == row1.NumFilet)) {
								//alert(rowContent + " trouvé ! - " + row.doc.Date + " - " + row.doc.ID_CS_preleve_debut + ' - 7')
								rowFiletCanopee_7[j] = new addFilet('BIG TEST');
								valueFounded = true;
								//alert(row1.LongueurFilet)
			    			}
							
							j = j + 1;
		    				filetCanopee_7 = JSON.stringify(rowFiletCanopee_7);
		    				filetCanopee_7 = JSON.parse(filetCanopee_7);
		    			});
	    			};
	    			if (typeof row.doc.FiletCanopee_20 !== 'undefined') {
	    				var j = 0;						
						var rowFiletCanopee_20 =[];
	    				row.doc.FiletCanopee_20.forEach(function(row1){ 
		    				//NumFilet.options[NumFilet.options.length] = new Option(row1.NumFilet, row1.NumFilet + ';' + row1.LongueurFilet + ';' + row1.HauteurFilet + ';' + row1.Lat_degre_decFilet + ';' + row1.LatitudeFilet + ';' + row1.Long_degre_decFilet + ';' + row1.LongitudeFilet); 
		    				//alert(row1.NumFilet)
	    					if ((row1 !== null) && (rowContent != row1.NumFilet)) {
								rowFiletCanopee_20[j] = JSON.stringify(row1);
								rowFiletCanopee_20[j] = JSON.parse(rowFiletCanopee_20[j]);
							};
							
							if ((row1 !== null) && (rowContent == row1.NumFilet)) {
								//alert(rowContent + " trouvé ! - " + row.doc.Date + " - " + row.doc.ID_CS_preleve_debut + ' - 20')
								rowFiletCanopee_20[j] = new addFilet('BIG TEST');
								valueFounded = true;
								//alert(row1.LongueurFilet)
			    			}
							
							j = j + 1;
		    				filetCanopee_20 = JSON.stringify(rowFiletCanopee_20);
		    				filetCanopee_20 = JSON.parse(filetCanopee_20);
		    				
		    				
		    			});
	    			};
	    			if (typeof row.doc.FiletSol !== 'undefined') {
	    				var j = 0;						
						var rowFiletSol =[];
	    				row.doc.FiletSol.forEach(function(row1, idx, array){ 
		    				//NumFilet.options[NumFilet.options.length] = new Option(row1.NumFilet, row1.NumFilet + ';' + row1.LongueurFilet + ';' + row1.HauteurFilet + ';' + row1.Lat_degre_decFilet + ';' + row1.LatitudeFilet + ';' + row1.Long_degre_decFilet + ';' + row1.LongitudeFilet);
		    				//alert(row1.NumFilet)
		    				if ((row1 !== null) && (rowContent != row1.NumFilet)) {
		    					rowFiletSol[j] = JSON.stringify(row1);
		    					rowFiletSol[j] = JSON.parse(rowFiletSol[j]);
							};
								
							if ((row1 !== null) && (rowContent == row1.NumFilet)) {
								//alert(rowContent + " trouvé ! - " + row.doc.Date + " - " + row.doc.ID_CS_preleve_debut + ' - Sol')
								rowFiletSol[j] = new addFilet('BIG TEST');
								valueFounded = true;
								//alert(valueFounded)
								//alert(row1.LongueurFilet)
				    		}
								
							j = j + 1;
			    			filetSol = JSON.stringify(rowFiletSol);
			    			filetSol = JSON.parse(filetSol);
			    			
			    			if ((idx === array.length - 1) && valueFounded) {
	    						alert(rowContent + ' ajouté !')
	    						//alert(id)
	    						
			    				/*if (old_id != id) {
			    				
				    				var res = alasql('SELECT id, Date, N_site, ID_CS_preleve_debut, ID_CS_preleve_fin, Roost_diurne, Utilisation_site_nocturne FROM ? WHERE id=="' + id +'"', [tab_donnees_journalieres] );
		    						
		    		    			var donnees_journalieres = JSON.stringify(res);
		    		    			
		    		    			var obj_donnees_journalieres = JSON.parse(donnees_journalieres);
		    		    			
		    		    			obj_donnees_journalieres.forEach(function(row){
		    		    				alert(row.id + " : " + row.ID_CS_preleve_debut);
		    		    				doc._id = new_id;
						    	  	  	doc.Date = row.Date;
						    	  	  	doc.N_site = row.N_site;
						    	  	    doc.Equipe = row.Equipe;
						    		  	doc.ID_CS_preleve_debut = row.ID_CS_preleve_debut;
						    		  	doc.ID_CS_preleve_fin = row.ID_CS_preleve_fin;
						    		  	doc.Roost_diurne = row.Roost_diurne;
						    		  	doc.Utilisation_site_nocturne = row.Utilisation_site_nocturne;
						    		  	
						    		  	doc.FiletCanopee_7 = filetCanopee_7;
						    		  	
						    		  	doc.FiletCanopee_20 = filetCanopee_20;
						    		  						    		  	
			    						doc.FiletSol = filetSol;
			    						
			    						return DB2.put(doc).then(function () {
						    				return DB2.get(id).then(function () {
						    					
						    				});
						    			});
		    		    			});
		    		    						    				
			    				}*/
	    					}
			    			
			    			/*if (idx === array.length - 1) {
			    				search_filets(i-1);
			    			}*/
		    			});
	    			};
	    			
	    			
	    			
	    			if /*(*/(idx === array.length - 1)/* && valueFounded)*/ { 
	    				//alert(idx);
	    				
	    				//alert(rowContent + ' - ' + valueFounded)
	    				
	    				if (valueFounded) {
	    					
	    					//alert(rowContent + ' ajouté !')
		    				/*var id = uuid();
			        		var doc = new Object();
			        		doc._id =  id;
			    	  	  	doc.Date = row.doc.Date;
			    	  	    doc.Equipe = row.doc.Equipe;
			    		  	doc.ID_CS_preleve_debut = row.doc.ID_CS_preleve_debut;
			    		  	doc.ID_CS_preleve_fin = row.doc.ID_CS_preleve_fin;
			    		  	doc.N_site = row.doc.N_site;
			    		  	doc.Pays = row.doc.Pays;
			    		  	doc.Region_capture = row.doc.Region_capture;
			    		  	doc.Site_capture = row.doc.Site_capture;
			    		  	doc.Environnement = row.doc.Environnement;
			    		  	doc.Lat_degre_dec = row.doc.Lat_degre_dec;
			    		  	doc.Latitude = row.doc.Latitude;
			    		  	doc.Long_degre_dec = row.doc.Long_degre_dec;
			    		  	doc.Longitude = row.doc.Longitude;
			    		  	doc.Proximite_village_km = row.doc.Proximite_village_km;
			    		  	doc.Roost_diurne = row.doc.Roost_diurne;	
			    		  	doc.Presence_diurne = row.doc.Presence_diurne;
			    		  	doc.TaxonomieDiurne = row.doc.TaxonomieDiurne;			
			    		  	doc.Methode_comptage_diurne = row.doc.Methode_comptage_diurne;	
			    		  	doc.Resultat_comptage_diurne_1 = row.doc.Resultat_comptage_diurne_1;	
			    		  	doc.Resultat_comptage_diurne_2 = row.doc.Resultat_comptage_diurne_2;	
			    		  	doc.Utilisation_site_nocturne = row.doc.Utilisation_site_nocturne;	
			    		  	doc.Aliment_consomme = row.doc.Aliment_consomme;	
			    		  	doc.Presence_nocturne = row.doc.Presence_nocturne;
			    		  	doc.TaxonomieNocturne = row.doc.TaxonomieNocturne;
			    		  	
			    		  	doc.Methode_comptage_nocturne = row.doc.Methode_comptage_nocturne;	
			    		  	doc.Resultat_comptage_nocturne_1 = row.doc.Resultat_comptage_nocturne_1;	
			    		  	doc.Resultat_comptage_nocturne_2 = row.doc.Resultat_comptage_nocturne_2;	
			    		  	doc.Vocalisations = row.doc.Vocalisations;	
			    		  	doc.Parade_sexuelle = row.doc.Parade_sexuelle;
			    		  	doc.Famille_vocalisations = row.doc.Famille_vocalisations;
			    		  	doc.Genre_vocalisations = row.doc.Genre_vocalisations;
			    		  	doc.Espece_vocalisations = row.doc.Espece_vocalisations;
			    		  	doc.Copulations = row.doc.Copulations;	
			    		  	doc.Famille_copulations = row.doc.Famille_copulations;
			    		  	doc.Genre_copulations = row.doc.Genre_copulations;
			    		  	doc.Espece_copulations = row.doc.Espece_copulations;
			    		  	doc.Suitee = row.doc.Suitee;	
			    		  	doc.Famille_suitee1 = row.doc.Famille_suitee1;
			    		  	doc.Genre_suitee1 = row.doc.Genre_suitee1;
			    		  	doc.Espece_suitee1 = row.doc.Espece_suitee1;
			    		  	doc.Famille_suitee2 = row.doc.Famille_suitee2;
			    		  	doc.Genre_suitee2 = row.doc.Genre_suitee2;
			    		  	doc.Espece_suitee2 = row.doc.Espece_suitee2;
			    		  	doc.Famille_suitee3 = row.doc.Famille_suitee3;
			    		  	doc.Genre_suitee3 = row.doc.Genre_suitee3;
			    		  	doc.Espece_suitee3 = row.doc.Espece_suitee3;
			    		  	doc.Famille_suitee4 = row.doc.Famille_suitee4;
			    		  	doc.Genre_suitee4 = row.doc.Genre_suitee4;
			    		  	doc.Espece_suitee4 = row.doc.Espece_suitee4;
			    		  	doc.Agressions = row.doc.Agressions;
			    		  	doc.Famille_agressions = row.doc.Famille_agressions;
			    		  	doc.Genre_agressions = row.doc.Genre_agressions;
			    		  	doc.Espece_agressions = row.doc.Espece_agressions;
			    		  	
			    		  	doc.Gestante = row.doc.Gestante;	
			    			doc.Famille_gestante1 = row.doc.Famille_gestante1;
			    			doc.Genre_gestante1 = row.doc.Genre_gestante1;
			    			doc.Espece_gestante1 = row.doc.Espece_gestante1;
			    			doc.Famille_gestante2 = row.doc.Famille_gestante2;
			    			doc.Genre_gestante2 = row.doc.Genre_gestante2;
			    			doc.Espece_gestante2 = row.doc.Espece_gestante2;
			    			doc.Famille_gestante3 = row.doc.Famille_gestante3;
			    			doc.Genre_gestante3 = row.doc.Genre_gestante3;
			    			doc.Espece_gestante3 = row.doc.Espece_gestante3;
			    			doc.Famille_gestante4 = row.doc.Famille_gestante4;
			    			doc.Genre_gestante4 = row.doc.Genre_gestante4;
			    			doc.Espece_gestante4 = row.doc.Espece_gestante4;
			    			doc.Lactante = row.doc.Lactante;	
			    			doc.Famille_lactante1 = row.doc.Famille_lactante1;
			    			doc.Genre_lactante1 = row.doc.Genre_lactante1;
			    			doc.Espece_lactante1 = row.doc.Espece_lactante1;
			    			doc.Famille_lactante2 = row.doc.Famille_lactante2;
			    			doc.Genre_lactante2 = row.doc.Genre_lactante2;
			    			doc.Espece_lactante2 = row.doc.Espece_lactante2;
			    			doc.Famille_lactante3 = row.doc.Famille_lactante3;
			    			doc.Genre_lactante3 = row.doc.Genre_lactante3;
			    			doc.Espece_lactante3 = row.doc.Espece_lactante3;
			    			doc.Famille_lactante4 = row.doc.Famille_lactante4;
			    			doc.Genre_lactante4 = row.doc.Genre_lactante4;
			    			doc.Espece_lactante4 = row.doc.Espece_lactante4;
			    		  	
			    		  	doc.Filet_canopee_nb_7 = row.doc.Filet_canopee_nb_7;
			    		  	doc.Filet_canopee_m2_7 = row.doc.Filet_canopee_m2_7;
			    		  	doc.FiletCanopee_7 = filetCanopee_7;	
			    		  	doc.Filet_canopee_nb_20 = row.doc.Filet_canopee_nb_20;	
			    		  	doc.Filet_canopee_m2_20 = row.doc.Filet_canopee_m2_20;	
			    		  	doc.FiletCanopee_20 = filetCanopee_20;
			    		  	doc.Filet_sol_nb = row.doc.Filet_sol_nb;
			    		  	doc.Filet_sol_m2 = row.doc.Filet_sol_m2;
			    		  	doc.FiletSol = filetSol;
			    		  	doc.Filet_debut = row.doc.Filet_debut;	
			    		  	doc.Filet_fin = row.doc.Filet_fin;	
			    		  	doc.Filet_temps = row.doc.Filet_temps;	
			    		  	doc.Filet_capture_nb = row.doc.Filet_capture_nb;	
			    		  	doc.Harp_debut = row.doc.Harp_debut;	
			    		  	doc.Harp_fin = row.doc.Harp_fin;	
			    		  	doc.Harp_temps = row.doc.Harp_temps;	
			    		  	doc.Harpe_nb = row.doc.Harpe_nb;	
			    		  	doc.Saison = row.doc.Saison;	
			    		  	doc.Climat = row.doc.Climat;	
			    		  	doc.Autre_climat = row.doc.Autre_climat;	
			    		  	doc.Precipitation = row.doc.Precipitation;	
			    		  	doc.Vent = row.doc.Vent;	
			    		  	doc.Lune = row.doc.Lune;	
			    		  	doc.Temperature_logger = row.doc.Temperature_logger;	
			    		  	doc.Humidite_logger = row.doc.Humidite_logger;
			    		  	doc.Username = row.doc.Username;
			        		
			    		  	DB.put(doc);*/
	    				}
	    				
		    		  	//search_filets(i-1);
					  	
	    			}
	    			
	    			if (idx === array.length - 1) {
	    				
	    				search_filets(i-1);
	    			}
		    		
	    		});	
	    		
	    		
	    		
	    	  	
	    		
    			
	    		
	    		//Methode_capture.options[Methode_capture.options.length] = new Option("Manquant", "Manquant");
	    		
			}
			
			
			
			
		}).catch(function (err) {
			console.log(err);
		}); 
		
		
		
	}
	
};

function addFilet(NumFiletX) {
    this.NumFilet = NumFiletX;
    	    
    this.NumFiletX = function() {
        return this.NumFilet;
    };		    
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



