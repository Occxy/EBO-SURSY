var fields = 
    			['N_site', 'Date', 'Pays', 'Prefecture', 'Sous-prefecture', 'Ville/village', 
    			 'Site_capture', 'Environnement', 'Latitude', 'Lat_degre_dec', 'Longitude', 
    			 'Long_degre_dec', 'Proximite_village_km', 'Proximite_source_m', 'Description_entree', 
    			 'Nb_entree', 'Entree_longueur_1', 'Entree_largeur_1', 'Entree_hauteur_1', 'Entree_longueur_2', 
    			 'Entree_largeur_2', 'Entree_hauteur_2', 'Entree_longueur_3', 'Entree_largeur_3', 'Entree_hauteur_3', 
    			 'Presence_puit_sortie', 'Puit_longueur', 'Puit_largeur', 'Puit_hauteur', 'Description_grotte', 
    			 'Nb_chambre', 'Chambre_longueur_1', 'Chambre_largeur_1', 'Chambre_hauteur_1', 'Presence_eau_1', 
    			 'Presence_annuelle_eau_1', 'Presence_lac_souterrain_1', 'Presence_riviere_souterraine_1', 
    			 'Presence_faune_aquatique_1', 'Espece_aquatique_1', 'Autre_faune_1', 'Chambre_longueur_2', 
    			 'Chambre_largeur_2', 'Chambre_hauteur_2', 'Presence_eau_2', 'Presence_annuelle_eau_2', 
    			 'Presence_lac_souterrain_2', 'Presence_riviere_souterraine_2', 'Presence_faune_aquatique_2', 
    			 'Espece_aquatique_2', 'Autre_faune_2', 'Chambre_longueur_3', 'Chambre_largeur_3', 'Chambre_hauteur_3', 
    			 'Presence_eau_3', 'Presence_annuelle_eau_3', 'Presence_lac_souterrain_3', 'Presence_riviere_souterraine_3', 
    			 'Presence_faune_aquatique_3', 'Espece_aquatique_3', 'Autre_faune_3', 'Chambre_longueur_4', 
    			 'Chambre_largeur_4', 'Chambre_hauteur_4', 'Presence_eau_4', 'Presence_annuelle_eau_4', 
    			 'Presence_lac_souterrain_4', 'Presence_riviere_souterraine_4', 'Presence_faune_aquatique_4', 
    			 'Espece_aquatique_4', 'Autre_faune_4', 'Username']

    				
var fields_CSV_head = 'N_site;Date;Pays;Prefecture;Sous-prefecture;Ville/village;' + 
					  'Site_capture;Environnement;Latitude;Lat_degre_dec;Longitude;' + 
					  'Long_degre_dec;Proximite_village_km;Proximite_source_m;Description_entree;' + 
					  'Nb_entree;Entree_longueur_1;Entree_largeur_1;Entree_hauteur_1;Entree_longueur_2;' + 
					  'Entree_largeur_2;Entree_hauteur_2;Entree_longueur_3;Entree_largeur_3;Entree_hauteur_3;' + 
					  'Presence_puit_sortie;Puit_longueur;Puit_largeur;Puit_hauteur;Description_grotte;' + 
					  'Nb_chambre;Chambre_longueur_1;Chambre_largeur_1;Chambre_hauteur_1;Presence_eau_1;' + 
					  'Presence_annuelle_eau_1;Presence_lac_souterrain_1;Presence_riviere_souterraine_1;' + 
					  'Presence_faune_aquatique_1;Espece_aquatique_1;Autre_faune_1;Chambre_longueur_2;' + 
					  'Chambre_largeur_2;Chambre_hauteur_2;Presence_eau_2;Presence_annuelle_eau_2;' + 
					  'Presence_lac_souterrain_2;Presence_riviere_souterraine_2;Presence_faune_aquatique_2;' + 
					  'Espece_aquatique_2;Autre_faune_2;Chambre_longueur_3;Chambre_largeur_3;Chambre_hauteur_3;' + 
					  'Presence_eau_3;Presence_annuelle_eau_3;Presence_lac_souterrain_3;Presence_riviere_souterraine_3;' + 
					  'Presence_faune_aquatique_3;Espece_aquatique_3;Autre_faune_3;Chambre_longueur_4;' + 
					  'Chambre_largeur_4;Chambre_hauteur_4;Presence_eau_4;Presence_annuelle_eau_4;' + 
					  'Presence_lac_souterrain_4;Presence_riviere_souterraine_4;Presence_faune_aquatique_4;' + 
					  'Espece_aquatique_4;Autre_faune_4;Username;\r\n';

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

add_heading = true;
CSV_heading = '';
CSV_data = '';

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DB_Caracterisations = new PouchDB(remote_couchdb + 'caracterisations_grottes' + nom_table + debug);
} else {
	var DB_Caracterisations = new PouchDB('caracterisations_grottes' + nom_table + debug);
};

var tab_Caracterisations = new Array();



DB_Caracterisations.allDocs({  		
	include_docs: true,
	attachments: true
}).then(function (result) {
	// handle result
	if (typeof(JSON.stringify(result)) != "undefined"){  
			
		var tableData = JSON.parse(JSON.stringify(result));
		i = 0;	
		tableData.rows.forEach(function(row){   
   			try {
   				//tab[i] = new Array();
   				var obj = new Object();
   				obj.N_site = row.doc.N_site 
   				obj.Date = row.doc.Date 
   				obj.Pays = row.doc.Pays 
   				obj.Prefecture = row.doc.Prefecture 
   				obj['Sous-prefecture'] = row.doc['Sous-prefecture']
   				obj['Ville/village'] = row.doc['Ville/village']
   				obj.Site_capture = row.doc.Site_capture 
   				obj.Environnement = row.doc.Environnement 
   				obj.Latitude = row.doc.Latitude 
   				obj.Lat_degre_dec = row.doc.Lat_degre_dec 
   				obj.Longitude = row.doc.Longitude 
   				obj.Long_degre_dec = row.doc.Long_degre_dec 
   				obj.Proximite_village_km = row.doc.Proximite_village_km 
   				obj.Proximite_source_m = row.doc.Proximite_source_m 
   				obj.Description_entree= row.doc.Description_entree  
   				obj.Nb_entree= row.doc.Nb_entree 
   				obj.Entree_longueur_1= row.doc.Entree_longueur_1 
   				obj.Entree_largeur_1= row.doc.Entree_largeur_1 
   				obj.Entree_hauteur_1= row.doc.Entree_hauteur_1 
   				obj.Entree_longueur_2= row.doc.Entree_longueur_2  
   				obj.Entree_largeur_2= row.doc.Entree_largeur_2 
   				obj.Entree_hauteur_2= row.doc.Entree_hauteur_2 
   				obj.Entree_longueur_3= row.doc.Entree_longueur_3 
   				obj.Entree_largeur_3= row.doc.Entree_largeur_3 
   				obj.Entree_hauteur_3= row.doc.Entree_hauteur_3 
   				obj.Presence_puit_sortie= row.doc.Presence_puit_sortie 
   				obj.Puit_longueur= row.doc.Puit_longueur 
   				obj.Puit_largeur= row.doc.Puit_largeur 
   				obj.Puit_hauteur= row.doc.Puit_hauteur 
   				obj.Description_grotte= row.doc.Description_grotte 
   				obj.Nb_chambre= row.doc.Nb_chambre 
   				obj.Chambre_longueur_1= row.doc.Chambre_longueur_1 
   				obj.Chambre_largeur_1= row.doc.Chambre_largeur_1 
   				obj.Chambre_hauteur_1= row.doc.Chambre_hauteur_1 
   				obj.Presence_eau_1= row.doc.Presence_eau_1 
   				obj.Presence_annuelle_eau_1= row.doc.Presence_annuelle_eau_1 
   				obj.Presence_lac_souterrain_1= row.doc.Presence_lac_souterrain_1 
   				obj.Presence_riviere_souterraine_1= row.doc.Presence_riviere_souterraine_1 
   				obj.Presence_faune_aquatique_1= row.doc.Presence_faune_aquatique_1 
   				obj.Espece_aquatique_1= row.doc.Espece_aquatique_1 
   				obj.Autre_faune_1= row.doc.Autre_faune_1 
   				obj.Chambre_longueur_2= row.doc.Chambre_longueur_2 
   				obj.Chambre_largeur_2= row.doc.Chambre_largeur_2 
   				obj.Chambre_hauteur_2= row.doc.Chambre_hauteur_2 
   				obj.Presence_eau_2= row.doc.Presence_eau_2 
   				obj.Presence_annuelle_eau_2 = row.doc.Presence_annuelle_eau_2 
   				obj.Presence_lac_souterrain_2= row.doc.Presence_lac_souterrain_2 
   				obj.Presence_riviere_souterraine_2= row.doc.Presence_riviere_souterraine_2 
   				obj.Presence_faune_aquatique_2= row.doc.Presence_faune_aquatique_2 
   				obj.Espece_aquatique_2= row.doc.Espece_aquatique_2 
   				obj.Autre_faune_2= row.doc.Autre_faune_2 
   				obj.Chambre_longueur_3= row.doc.Chambre_longueur_3 
   				obj.Chambre_largeur_3= row.doc.Chambre_largeur_3 
   				obj.Chambre_hauteur_3= row.doc.Chambre_hauteur_3 
   				obj.Presence_eau_3= row.doc.Presence_eau_3 
   				obj.Presence_annuelle_eau_3= row.doc.Presence_annuelle_eau_3 
   				obj.Presence_lac_souterrain_3= row.doc.Presence_lac_souterrain_3 
   				obj.Presence_riviere_souterraine_3= row.doc.Presence_riviere_souterraine_3 
   				obj.Presence_faune_aquatique_3= row.doc.Presence_faune_aquatique_3 
   				obj.Espece_aquatique_3= row.doc.Espece_aquatique_3 
   				obj.Autre_faune_3= row.doc.Autre_faune_3 
   				obj.Chambre_longueur_4= row.doc.Chambre_longueur_4 
   				obj.Chambre_largeur_4= row.doc.Chambre_largeur_4 
   				obj.Chambre_hauteur_4= row.doc.Chambre_hauteur_4 
   				obj.Presence_eau_4= row.doc.Presence_eau_4 
   				obj.Presence_annuelle_eau_4= row.doc.Presence_annuelle_eau_4 
   				obj.Presence_lac_souterrain_4= row.doc.Presence_lac_souterrain_4 
   				obj.Presence_riviere_souterraine_4= row.doc.Presence_riviere_souterraine_4 
   				obj.Presence_faune_aquatique_4= row.doc.Presence_faune_aquatique_4 
   				obj.Espece_aquatique_4= row.doc.Espece_aquatique_4 
   				obj.Autre_faune_4= row.doc.Autre_faune_4 
   				obj.Username = row.doc.Username
   				tab_Caracterisations.push(obj);
   				i++;	
   				
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
	
	
	
	DB_Caracterisations.info().then((infos) => {
		
		count = infos.doc_count;
		//alert(count)
		
		
		
		
		
		
	}).catch((error) => {
	});
	
	
}).catch(function (err) {
   	console.log(err);
});

function addChauves_souris_capturees(row, selected) {
	
	console.log('ok');
	
	//alert(row.N_site);
	
	if (count > 0) {
		count--
		i--
		
		if (!selected) { 	
			CSV_data = CSV_data +
				row.N_site + ';' +
				row.Date + ';' +
				row.Pays + ';' + 
				row.Prefecture + ';' + 
				row['Sous_prefecture'] + ';' +
				row['Ville_village'] + ';' +
				row.Site_capture + ';' +
				row.Environnement + ';' + 
				row.Latitude + ';' + 
				row.Lat_degre_dec + ';' + 
				row.Longitude + ';' + 
				row.Long_degre_dec + ';' +
				row.Proximite_village_km + ';' + 
				row.Proximite_source_m + ';' + 			
				row.Description_entree + ';' +   
   				row.Nb_entree + ';' + 
   				row.Entree_longueur_1 + ';' + 
   				row.Entree_largeur_1 + ';' + 
   				row.Entree_hauteur_1 + ';' +  
   				row.Entree_longueur_2 + ';' + 
   				row.Entree_largeur_2 + ';' + 
   				row.Entree_hauteur_2 + ';' + 
   				row.Entree_longueur_3 + ';' + 
   				row.Entree_largeur_3 + ';' + 
   				row.Entree_hauteur_3 + ';' + 
   				row.Presence_puit_sortie + ';' + 
   				row.Puit_longueur + ';' + 
   				row.Puit_largeur + ';' + 
   				row.Puit_hauteur + ';' + 
   				row.Description_grotte + ';' +  
   				row.Nb_chambre + ';' + 
   				row.Chambre_longueur_1 + ';' + 
   				row.Chambre_largeur_1 + ';' + 
   				row.Chambre_hauteur_1 + ';' + 
   				row.Presence_eau_1 + ';' + 
   				row.Presence_annuelle_eau_1 + ';' + 
   				row.Presence_lac_souterrain_1 + ';' + 
   				row.Presence_riviere_souterraine_1 + ';' + 
   				row.Presence_faune_aquatique_1 + ';' +  
   				row.Espece_aquatique_1 + ';' + 
   				row.Autre_faune_1 + ';' + 
   				row.Chambre_longueur_2 + ';' + 
   				row.Chambre_largeur_2 + ';' + 
   				row.Chambre_hauteur_2 + ';' + 
   				row.Presence_eau_2 + ';' + 
   				row.Presence_annuelle_eau_2 + ';' + 
   				row.Presence_lac_souterrain_2 + ';' + 
   				row.Presence_riviere_souterraine_2 + ';' + 
   				row.Presence_faune_aquatique_2 + ';' +  
   				row.Espece_aquatique_2 + ';' + 
   				row.Autre_faune_2 + ';' + 
   				row.Chambre_longueur_3 + ';' + 
   				row.Chambre_largeur_3 + ';' + 
   				row.Chambre_hauteur_3 + ';' + 
   				row.Presence_eau_3 + ';' + 
   				row.Presence_annuelle_eau_3 + ';' + 
   				row.Presence_lac_souterrain_3 + ';' + 
   				row.Presence_riviere_souterraine_3 + ';' + 
   				row.Presence_faune_aquatique_3 + ';' + 
   				row.Espece_aquatique_3 + ';' + 
   				row.Autre_faune_3 + ';' + 
   				row.Chambre_longueur_4 + ';' +  
   				row.Chambre_largeur_4 + ';' + 
   				row.Chambre_hauteur_4 + ';' + 
   				row.Presence_eau_4 + ';' + 
   				row.Presence_annuelle_eau_4 + ';' + 
   				row.Presence_lac_souterrain_4 + ';' + 
   				row.Presence_riviere_souterraine_4 + ';' +  
   				row.Presence_faune_aquatique_4 + ';' + 
   				row.Espece_aquatique_4 + ';' + 
   				row.Autre_faune_4 + ';' + 
   				row.Username + ';\r\n'
		
			} else {				 
				if (array_selected_fields.indexOf('N_site') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'N_site;';
					}
					CSV_data = CSV_data + row.N_site + ";"
				};
				if (array_selected_fields.indexOf('Date') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Date;';
					}
					CSV_data = CSV_data + row.Date + ";"
				};
				if (array_selected_fields.indexOf('Prefecture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Prefecture;';
					}
					CSV_data = CSV_data + row.Prefecture + ";"
				};				
				if (array_selected_fields.indexOf('Sous-prefecture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Sous-prefecture;';
					}
					CSV_data = CSV_data + row['Sous-prefecture'] + ";"
				};				
				if (array_selected_fields.indexOf('Ville_village') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Ville/village;';
					}
					CSV_data = CSV_data + row['Ville/village'] + ";"
				};
				if (array_selected_fields.indexOf('Site_capture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Site_capture;';
					}
					CSV_data = CSV_data + row.Site_capture + ";"
				};
				if (array_selected_fields.indexOf('Environnement') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Environnement;';
					}
					CSV_data = CSV_data + row.Environnement + ";"
				};
				if (array_selected_fields.indexOf('Latitude') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Latitude;';
					}
					CSV_data = CSV_data + row.Latitude + ";"
				};
				if (array_selected_fields.indexOf('Lat_degre_dec') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Lat_degre_dec;';
					}
					CSV_data = CSV_data + row.Lat_degre_dec + ";"
				};
				if (array_selected_fields.indexOf('Longitude') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Longitude;';
					}
					CSV_data = CSV_data + row.Longitude + ";"
				};
				if (array_selected_fields.indexOf('Long_degre_dec') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Long_degre_dec;';
					}
					CSV_data = CSV_data + row.Long_degre_dec + ";"
				};
				if (array_selected_fields.indexOf('Proximite_village_km') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Proximite_village_km;';
					}
					CSV_data = CSV_data + row.Proximite_village_km + ";"
				};
				if (array_selected_fields.indexOf('Proximite_source_m') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Proximite_source_m;';
					}
					CSV_data = CSV_data + row.Proximite_source_m + ";"
				}; 
   				if (array_selected_fields.indexOf('Description_entree') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Description_entree;';
					}
					CSV_data = CSV_data + row.Description_entree + ";"
				};
				if (array_selected_fields.indexOf('Nb_entree') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_entree;';
					}
					CSV_data = CSV_data + row.Nb_entree + ";"
				};
				if (array_selected_fields.indexOf('Entree_longueur_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Entree_longueur_1;';
					}
					CSV_data = CSV_data + row.Entree_longueur_1 + ";"
				};
				if (array_selected_fields.indexOf('Entree_largeur_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Entree_largeur_1;';
					}
					CSV_data = CSV_data + row.Entree_largeur_1 + ";"
				};
				if (array_selected_fields.indexOf('Entree_hauteur_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Entree_hauteur_1;';
					}
					CSV_data = CSV_data + row.Entree_hauteur_1 + ";"
				};
				if (array_selected_fields.indexOf('Entree_longueur_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Entree_longueur_2;';
					}
					CSV_data = CSV_data + row.Entree_longueur_2 + ";"
				};
				if (array_selected_fields.indexOf('Entree_largeur_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Entree_largeur_2;';
					}
					CSV_data = CSV_data + row.Entree_largeur_2 + ";"
				};
				if (array_selected_fields.indexOf('Entree_hauteur_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Entree_hauteur_2;';
					}
					CSV_data = CSV_data + row.Entree_hauteur_2 + ";"
				};
				if (array_selected_fields.indexOf('Entree_largeur_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Entree_largeur_3;';
					}
					CSV_data = CSV_data + row.Entree_largeur_3 + ";"
				};
				if (array_selected_fields.indexOf('Entree_longueur_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Entree_longueur_3;';
					}
					CSV_data = CSV_data + row.Entree_longueur_3 + ";"
				};
				if (array_selected_fields.indexOf('Entree_hauteur_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Entree_hauteur_3;';
					}
					CSV_data = CSV_data + row.Entree_hauteur_3 + ";"
				};
				if (array_selected_fields.indexOf('Presence_puit_sortie') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_puit_sortie;';
					}
					CSV_data = CSV_data + row.Presence_puit_sortie + ";"
				};
				if (array_selected_fields.indexOf('Puit_longueur') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Puit_longueur;';
					}
					CSV_data = CSV_data + row.Puit_longueur + ";"
				};
				if (array_selected_fields.indexOf('Puit_largeur') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Puit_largeur;';
					}
					CSV_data = CSV_data + row.Puit_largeur + ";"
				};
				if (array_selected_fields.indexOf('Puit_hauteur') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Puit_hauteur;';
					}
					CSV_data = CSV_data + row.Puit_hauteur + ";"
				};
				if (array_selected_fields.indexOf('Description_grotte') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Description_grotte;';
					}
					CSV_data = CSV_data + row.Description_grotte + ";"
				};
				if (array_selected_fields.indexOf('Nb_chambre') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nb_chambre;';
					}
					CSV_data = CSV_data + row.Nb_chambre + ";"
				};   				 
				if (array_selected_fields.indexOf('Chambre_longueur_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Chambre_longueur_1;';
					}
					CSV_data = CSV_data + row.Chambre_longueur_1 + ";"
				};
				if (array_selected_fields.indexOf('Chambre_largeur_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Chambre_largeur_1;';
					}
					CSV_data = CSV_data + row.Chambre_largeur_1 + ";"
				};
				if (array_selected_fields.indexOf('Chambre_hauteur_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Chambre_hauteur_1;';
					}
					CSV_data = CSV_data + row.Chambre_hauteur_1 + ";"
				};
				if (array_selected_fields.indexOf('Presence_eau_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_eau_1;';
					}
					CSV_data = CSV_data + row.Presence_eau_1 + ";"
				};
				if (array_selected_fields.indexOf('Presence_annuelle_eau_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_annuelle_eau_1;';
					}
					CSV_data = CSV_data + row.Presence_annuelle_eau_1 + ";"
				};
				if (array_selected_fields.indexOf('Presence_lac_souterrain_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_lac_souterrain_1;';
					}
					CSV_data = CSV_data + row.Presence_lac_souterrain_1 + ";"
				};
				if (array_selected_fields.indexOf('Presence_riviere_souterraine_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_riviere_souterraine_1;';
					}
					CSV_data = CSV_data + row.Presence_riviere_souterraine_1 + ";"
				};
				if (array_selected_fields.indexOf('Presence_faune_aquatique_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_faune_aquatique_1;';
					}
					CSV_data = CSV_data + row.Presence_faune_aquatique_1 + ";"
				};
				if (array_selected_fields.indexOf('Espece_aquatique_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_aquatique_1;';
					}
					CSV_data = CSV_data + row.Espece_aquatique_1 + ";"
				};
				if (array_selected_fields.indexOf('Autre_faune_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Autre_faune_1;';
					}
					CSV_data = CSV_data + row.Autre_faune_1 + ";"
				};
				if (array_selected_fields.indexOf('Chambre_longueur_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Chambre_longueur_2;';
					}
					CSV_data = CSV_data + row.Chambre_longueur_2 + ";"
				};
				if (array_selected_fields.indexOf('Chambre_largeur_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Chambre_largeur_2;';
					}
					CSV_data = CSV_data + row.Chambre_largeur_2 + ";"
				};
				if (array_selected_fields.indexOf('Chambre_hauteur_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Chambre_hauteur_2;';
					}
					CSV_data = CSV_data + row.Chambre_hauteur_2 + ";"
				};
				if (array_selected_fields.indexOf('Presence_eau_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_eau_2;';
					}
					CSV_data = CSV_data + row.Presence_eau_2 + ";"
				};
				if (array_selected_fields.indexOf('Presence_annuelle_eau_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_annuelle_eau_2;';
					}
					CSV_data = CSV_data + row.Presence_annuelle_eau_2 + ";"
				};
				
				if (array_selected_fields.indexOf('Presence_lac_souterrain_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_lac_souterrain_2;';
					}
					CSV_data = CSV_data + row.Presence_lac_souterrain_2 + ";"
				};
				if (array_selected_fields.indexOf('Presence_riviere_souterraine_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_riviere_souterraine_2;';
					}
					CSV_data = CSV_data + row.Presence_riviere_souterraine_2 + ";"
				};
				if (array_selected_fields.indexOf('Presence_faune_aquatique_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_faune_aquatique_2;';
					}
					CSV_data = CSV_data + row.Presence_faune_aquatique_2 + ";"
				};
				if (array_selected_fields.indexOf('Espece_aquatique_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_aquatique_2;';
					}
					CSV_data = CSV_data + row.Espece_aquatique_2 + ";"
				};
				if (array_selected_fields.indexOf('Autre_faune_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Autre_faune_2;';
					}
					CSV_data = CSV_data + row.Autre_faune_2 + ";"
				};
				if (array_selected_fields.indexOf('Chambre_longueur_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Chambre_longueur_3;';
					}
					CSV_data = CSV_data + row.Chambre_longueur_3 + ";"
				};
				if (array_selected_fields.indexOf('Chambre_largeur_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Chambre_largeur_3;';
					}
					CSV_data = CSV_data + row.Chambre_largeur_3 + ";"
				};
				if (array_selected_fields.indexOf('Chambre_hauteur_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Chambre_hauteur_3;';
					}
					CSV_data = CSV_data + row.Chambre_hauteur_3 + ";"
				};
				if (array_selected_fields.indexOf('Presence_eau_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_eau_3;';
					}
					CSV_data = CSV_data + row.Presence_eau_3 + ";"
				};
				if (array_selected_fields.indexOf('Presence_annuelle_eau_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_annuelle_eau_3;';
					}
					CSV_data = CSV_data + row.Presence_annuelle_eau_3 + ";"
				};
				if (array_selected_fields.indexOf('Presence_lac_souterrain_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_lac_souterrain_3;';
					}
					CSV_data = CSV_data + row.Presence_lac_souterrain_3 + ";"
				};
				if (array_selected_fields.indexOf('Presence_riviere_souterraine_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_riviere_souterraine_3;';
					}
					CSV_data = CSV_data + row.Presence_riviere_souterraine_3 + ";"
				};
				if (array_selected_fields.indexOf('Presence_faune_aquatique_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_faune_aquatique_3;';
					}
					CSV_data = CSV_data + row.Presence_faune_aquatique_3 + ";"
				};
				if (array_selected_fields.indexOf('Espece_aquatique_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_aquatique_3;';
					}
					CSV_data = CSV_data + row.Espece_aquatique_3 + ";"
				};
				if (array_selected_fields.indexOf('Autre_faune_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Autre_faune_3;';
					}
					CSV_data = CSV_data + row.Autre_faune_3 + ";"
				};
				if (array_selected_fields.indexOf('Chambre_longueur_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Chambre_longueur_4;';
					}
					CSV_data = CSV_data + row.Chambre_longueur_4 + ";"
				};				
				if (array_selected_fields.indexOf('Chambre_largeur_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Chambre_largeur_4;';
					}
					CSV_data = CSV_data + row.Chambre_largeur_4 + ";"
				};
				if (array_selected_fields.indexOf('Chambre_hauteur_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Chambre_hauteur_4;';
					}
					CSV_data = CSV_data + row.Chambre_hauteur_4 + ";"
				};
				if (array_selected_fields.indexOf('Presence_eau_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_eau_4;';
					}
					CSV_data = CSV_data + row.Presence_eau_4 + ";"
				};
				if (array_selected_fields.indexOf('Presence_annuelle_eau_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_annuelle_eau_4;';
					}
					CSV_data = CSV_data + row.Presence_annuelle_eau_4 + ";"
				};
				if (array_selected_fields.indexOf('Presence_lac_souterrain_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_lac_souterrain_4;';
					}
					CSV_data = CSV_data + row.Presence_lac_souterrain_4 + ";"
				};
				if (array_selected_fields.indexOf('Presence_riviere_souterraine_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_riviere_souterraine_4;';
					}
					CSV_data = CSV_data + row.Presence_riviere_souterraine_4 + ";"
				};
				if (array_selected_fields.indexOf('Presence_faune_aquatique_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_faune_aquatique_4;';
					}
					CSV_data = CSV_data + row.Presence_faune_aquatique_4 + ";"
				};				
				if (array_selected_fields.indexOf('Espece_aquatique_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_aquatique_4;';
					}
					CSV_data = CSV_data + row.Espece_aquatique_4 + ";"
				};
				if (array_selected_fields.indexOf('Autre_faune_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Autre_faune_4;';
					}
					CSV_data = CSV_data + row.Autre_faune_4 + ";"
				};
				if (array_selected_fields.indexOf('Username') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Username;';
					}
					CSV_data = CSV_data + row.Username + ";"
				};
				
				if (add_heading) {
					CSV_heading = CSV_heading + "\r\n";
					CSV_data = CSV_heading + CSV_data + "\r\n"
					add_heading = false;
				} else {
					CSV_data = CSV_data + "\r\n";
				}
			}
			
			console.log(count);
			if (count == 0) {
				var blob = new Blob(['\ufeff' + CSV_data], {type: "text/csv;charset=ISO-8859-1"});
	       		saveAs(blob, "ebo-sursy" + clock.now + ".csv");
			}	
			
	} 
			
	
}

$('#export_all_fields').click(function(){
 
	
	CSV_data = fields_CSV_head;
	
	var res = alasql("SELECT N_site, Date, Pays, Prefecture, [Sous-prefecture], [Ville/village], Site_capture, Environnement, Latitude, Lat_degre_dec, Longitude, Long_degre_dec, Proximite_village_km, Proximite_source_m, Description_entree, Nb_entree, Entree_longueur_1, Entree_largeur_1, Entree_hauteur_1, Entree_longueur_2, Entree_largeur_2, Entree_hauteur_2, Entree_longueur_3, Entree_largeur_3, Entree_hauteur_3, Presence_puit_sortie, Puit_longueur, Puit_largeur, Puit_hauteur, Description_grotte, Nb_chambre, Chambre_longueur_1, Chambre_largeur_1, Chambre_hauteur_1, Presence_eau_1, Presence_annuelle_eau_1, Presence_lac_souterrain_1, Presence_riviere_souterraine_1, Presence_faune_aquatique_1, Espece_aquatique_1, Autre_faune_1, Chambre_longueur_2, Chambre_largeur_2, Chambre_hauteur_2, Presence_eau_2, Presence_annuelle_eau_2, Presence_lac_souterrain_2, Presence_riviere_souterraine_2, Presence_faune_aquatique_2, Espece_aquatique_2, Autre_faune_2, Chambre_longueur_3, Chambre_largeur_3, Chambre_hauteur_3, Presence_eau_3, Presence_annuelle_eau_3, Presence_lac_souterrain_3, Presence_riviere_souterraine_3, Presence_faune_aquatique_3, Espece_aquatique_3, Autre_faune_3, Chambre_longueur_4, Chambre_largeur_4, Chambre_hauteur_4, Presence_eau_4, Presence_annuelle_eau_4, Presence_lac_souterrain_4, Presence_riviere_souterraine_4, Presence_faune_aquatique_4, Espece_aquatique_4, Autre_faune_4, Username FROM ? ORDER BY N_site", [tab_Caracterisations] );
    			
    var CS = JSON.stringify(res);
    			
    var obj_CS = JSON.parse(CS);
	   
    /*function wait(ms){
       var start = new Date().getTime();
       var end = start;
       while(end < start + ms) {
         end = new Date().getTime();
      }
    }

    wait(10000)*/
    
    res.forEach(function(row){
    	//wait(10);
		//alert(count)
    	//alert(row.N_site)
		if (count == i) {
			addChauves_souris_capturees(row, false);
		}
		
		
	}).catch(function (err) {
		console.log(err);
	});
})


$('#export_selected_fields').click(function(){
	var res = alasql("SELECT N_site, Date, Pays, Prefecture, [Sous-prefecture], [Ville/village], Site_capture, Environnement, Latitude, Lat_degre_dec, Longitude, Long_degre_dec, Proximite_village_km, Proximite_source_m, Description_entree, Nb_entree, Entree_longueur_1, Entree_largeur_1, Entree_hauteur_1, Entree_longueur_2, Entree_largeur_2, Entree_hauteur_2, Entree_longueur_3, Entree_largeur_3, Entree_hauteur_3, Presence_puit_sortie, Puit_longueur, Puit_largeur, Puit_hauteur, Description_grotte, Nb_chambre, Chambre_longueur_1, Chambre_largeur_1, Chambre_hauteur_1, Presence_eau_1, Presence_annuelle_eau_1, Presence_lac_souterrain_1, Presence_riviere_souterraine_1, Presence_faune_aquatique_1, Espece_aquatique_1, Autre_faune_1, Chambre_longueur_2, Chambre_largeur_2, Chambre_hauteur_2, Presence_eau_2, Presence_annuelle_eau_2, Presence_lac_souterrain_2, Presence_riviere_souterraine_2, Presence_faune_aquatique_2, Espece_aquatique_2, Autre_faune_2, Chambre_longueur_3, Chambre_largeur_3, Chambre_hauteur_3, Presence_eau_3, Presence_annuelle_eau_3, Presence_lac_souterrain_3, Presence_riviere_souterraine_3, Presence_faune_aquatique_3, Espece_aquatique_3, Autre_faune_3, Chambre_longueur_4, Chambre_largeur_4, Chambre_hauteur_4, Presence_eau_4, Presence_annuelle_eau_4, Presence_lac_souterrain_4, Presence_riviere_souterraine_4, Presence_faune_aquatique_4, Espece_aquatique_4, Autre_faune_4, Username FROM ? ORDER BY N_site", [tab_Caracterisations] );
    			
    var CS = JSON.stringify(res);
    			
    var obj_CS = JSON.parse(CS);
	   
    /*function wait(ms){
       var start = new Date().getTime();
       var end = start;
       while(end < start + ms) {
         end = new Date().getTime();
      }
    }

    wait(10000)*/
    
    res.forEach(function(row){
    	//wait(10);
		//alert(count)
		if (count == i) {
			addChauves_souris_capturees(row, true);
		}
		
		
	}).catch(function (err) {
		console.log(err);
	});
})

document.getElementById("add_selection_criteria").disabled = true;

var multiselect1 = document.getElementById("multiselect1");
for (var i = 0; i < fields.length; i++) {
	multiselect1.options[i] = new Option(fields[i], fields[i]);
};


	
