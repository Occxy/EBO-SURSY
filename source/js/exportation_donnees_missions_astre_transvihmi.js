var fields = 
    			   ['Date_debut_mission', 'Date_fin_mission', 'Equipe', 'N_site', 'Pays', 
    				'Préfecture', 'Sous-préfecture', 'Ville/village', 'Site_capture', 'Environnement', 'Latitude', 
    		 	    'Lat_degre_dec', 'Longitude', 'Long_degre_dec', 'Proximite_village_km', 'Proximite_source_m', 
    	    		'ID_CS_preleve_debut', 'ID_CS_preleve_fin', 'ID_NI_CS_debut', 'ID_NI_CS_fin', 'ID_NI_faune_debut', 
    				'ID_NI_faune_fin', 'Espece_vegetale_1', 'Stade_espece_1', 'Espece_vegetale_2', 'Stade_espece_2', 
    				'Espece_vegetale_3', 'Stade_espece_3', 'Espece_vegetale_4', 'Stade_espece_4', 'Espece_vegetale_5', 
    				'Stade_espece_5', 'Espece_vegetale_6', 'Stade_espece_6', 'Espece_vegetale_7', 'Stade_espece_7', 
    				'ID_echantillon_vegetale', 'Espece_animale_domestique_1', 'Espece_animale_domestique_2', 
    				'Espece_animale_domestique_3', 'Espece_animale_sauvage_1', 'Espece_animale_sauvage_2', 
    				'Espece_animale_sauvage_3', 'Espece_animale_sauvage_4', 'NI_faune', 'Interaction_CS_faune', 
    				'Description_interaction_CS_faune', 'Activite_humaine_observee', 'Description_interaction_CS_homme', 
    				'Camera_traps', 'NumChambre', 'HauteurCapteur', 'Distance_capteur_grotte', 'Date_debut_capteur', 
    				'Heure_debut_capteur', 'Date_fin_capteur', 'Heure_fin_capteur', 'NumDossier_capteur', 'Username']

    				
var fields_CSV_head = 'Date_debut_mission;Date_fin_mission;Equipe;N_site;Pays;' +
					  'Préfecture;Sous-préfecture;Ville/village;Site_capture;Environnement;Latitude;' +
					  'Lat_degre_dec;Longitude;Long_degre_dec;Proximite_village_km;Proximite_source_m;' +
					  'ID_CS_preleve_debut;ID_CS_preleve_fin;ID_NI_CS_debut;ID_NI_CS_fin;ID_NI_faune_debut;' +
					  'ID_NI_faune_fin;Espece_vegetale_1;Stade_espece_1;Espece_vegetale_2;Stade_espece_2;' +
					  'Espece_vegetale_3;Stade_espece_3;Espece_vegetale_4;Stade_espece_4;Espece_vegetale_5;' +
					  'Stade_espece_5;Espece_vegetale_6;Stade_espece_6;Espece_vegetale_7;Stade_espece_7;' +
					  'ID_echantillon_vegetale;Espece_animale_domestique_1;Espece_animale_domestique_2;' +
					  'Espece_animale_domestique_3;Espece_animale_sauvage_1;Espece_animale_sauvage_2;' +
					  'Espece_animale_sauvage_3;Espece_animale_sauvage_4;NI_faune;Interaction_CS_faune;' +
					  'Description_interaction_CS_faune;Activite_humaine_observee;Description_interaction_CS_homme;' +
					  'Camera_traps;NumChambre;HauteurCapteur;Distance_capteur_grotte;Date_debut_capteur;' +
					  'Heure_debut_capteur;Date_fin_capteur;Heure_fin_capteur;NumDossier_capteur;Username;\r\n';

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
	var DB_Missions = new PouchDB(remote_couchdb + 'donnees_mission_astre_transvihmi_guinee' + debug);
} else {
	var DB_Missions = new PouchDB('donnees_mission_astre_transvihmi_guinee' + debug);
};

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DBCaraterisations = new PouchDB(remote_couchdb + 'caracterisations_grottes' + nom_table + debug);
} else {
	var DBCaraterisations = new PouchDB('caracterisations_grottes' + nom_table + debug);
};

var tab_missions = new Array();
var tab_missions_sorted = new Array();
var tab = new Array();


DB_Missions.allDocs({  		
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
   				obj.Date_debut_mission = row.doc.Date_debut_mission
   				obj.Date_fin_mission = row.doc.Date_fin_mission
   				obj.Equipe = row.doc.Equipe
   				obj.N_site = row.doc.N_site 
   				obj.Pays = row.doc.Pays 
   				obj['Préfecture'] = row.doc['Préfecture'] 
   				obj['Sous-préfecture'] = row.doc['Sous-préfecture']
   				obj['Ville/village'] = row.doc['Ville/village']
   				obj.Site_capture = row.doc.Site_capture 
   				obj.Environnement = row.doc.Environnement 
   				obj.Latitude = row.doc.Latitude 
   				obj.Lat_degre_dec = row.doc.Lat_degre_dec 
   				obj.Longitude = row.doc.Longitude 
   				obj.Long_degre_dec = row.doc.Long_degre_dec 
   				obj.Proximite_village_km = row.doc.Proximite_village_km 
   				obj.Proximite_source_m = row.doc.Proximite_source_m 
   				obj.ID_CS_preleve_debut = row.doc.ID_CS_preleve_debut 
   				obj.ID_CS_preleve_fin = row.doc.ID_CS_preleve_fin
   				obj.ID_NI_CS_debut = row.doc.ID_NI_CS_debut 
   				obj.ID_NI_CS_fin = row.doc.ID_NI_CS_fin 
   				obj.ID_NI_faune_debut = row.doc.ID_NI_faune_debut 
   				obj.ID_NI_faune_fin = row.doc.ID_NI_faune_fin
   				obj.Espece_vegetale_1 = row.doc.Espece_vegetale_1
   				obj.Stade_espece_1 = row.doc.Stade_espece_1
   				obj.Espece_vegetale_2 = row.doc.Espece_vegetale_2
   				obj.Stade_espece_2 = row.doc.Stade_espece_2
   				obj.Espece_vegetale_3 = row.doc.Espece_vegetale_3
   				obj.Stade_espece_3 = row.doc.Stade_espece_3
   				obj.Espece_vegetale_4 = row.doc.Espece_vegetale_4
   				obj.Stade_espece_4 = row.doc.Stade_espece_4
   				obj.Espece_vegetale_5 = row.doc.Espece_vegetale_5
   				obj.Stade_espece_5 = row.doc.Stade_espece_5
   				obj.Espece_vegetale_6 = row.doc.Espece_vegetale_6
   				obj.Stade_espece_6 = row.doc.Stade_espece_6 
   				obj.Espece_vegetale_7 = row.doc.Espece_vegetale_7 
   				obj.Stade_espece_7 = row.doc.Stade_espece_7 
   				obj.ID_echantillon_vegetale = row.doc.ID_echantillon_vegetale
   				obj.Espece_animale_domestique_1 = row.doc.Espece_animale_domestique_1
   				obj.Espece_animale_domestique_2 = row.doc.Espece_animale_domestique_2
   				obj.Espece_animale_domestique_3 = row.doc.Espece_animale_domestique_3
   				obj.Espece_animale_sauvage_1 = row.doc.Espece_animale_sauvage_1 
   				obj.Espece_animale_sauvage_2 = row.doc.Espece_animale_sauvage_2 
   				obj.Espece_animale_sauvage_3 = row.doc.Espece_animale_sauvage_3 
   				obj.Espece_animale_sauvage_4 = row.doc.Espece_animale_sauvage_4
   				obj.NI_faune = row.doc.NI_faune
   				obj.Interaction_CS_faune = row.doc.Interaction_CS_faune
   				obj.Description_interaction_CS_faune = row.doc.Description_interaction_CS_faune
   				obj.Activite_humaine_observee = row.doc.Activite_humaine_observee
   				obj.Description_interaction_CS_homme = row.doc.Description_interaction_CS_homme
   				obj.Camera_traps = row.doc.Camera_traps
   				obj.NumChambre = row.doc.NumChambre
   				obj.HauteurCapteur = row.doc.HauteurCapteur
   				obj.Distance_capteur_grotte = row.doc.Distance_capteur_grotte
   				obj.Date_debut_capteur = row.doc.Date_debut_capteur
   				obj.Heure_debut_capteur = row.doc.Heure_debut_capteur 
   				obj.Date_fin_capteur = row.doc.Date_fin_capteur 
   				obj.Heure_fin_capteur = row.doc.Heure_fin_capteur 
   				obj.NumDossier_capteur = row.doc.NumDossier_capteur 
   				obj.Username = row.doc.Username 

   				tab_missions.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}
}).then(function () {
	
	/*tab_missions_sorted = tab_missions.sort(
		    (p1, p2) => 
		    (p1.N_identification_CS < p2.N_identification_CS) ? 1 : (p1.N_identification_CS > p2.N_identification_CS) ? -1 : 0)*/
		    
	/*function wait(ms){
	       var start = new Date().getTime();
	       var end = start;
	       while(end < start + ms) {
	         end = new Date().getTime();
	      }
	}
	
	wait(5000);*/
	
	//alert('i = '  + i)
	DBCaraterisations.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
				
			var tableData = JSON.parse(JSON.stringify(result));
				
			tableData.rows.forEach(function(row){   
	   			try {
	   				//tab[i] = new Array();
	   				var obj = new Object();
	   				obj.N_site = row.doc.N_site 
	   				obj.Date = row.doc.Date 
	   				obj.Equipe = row.doc.Equipe 
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
	   				tab.push(obj);
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
		
		
		
		DB_Missions.info().then((infos) => {
			
			count = infos.doc_count;
			
			
			
			
			
			
			
		}).catch((error) => {
		});
		
		
	}).catch(function (err) {
	   	console.log(err);
	});

	
}).catch(function (err) {
   	console.log(err);
});

function addMissions(row, selected) {
	
	console.log('ok');
	

	
	if (count > 0) {
		count--
		i--
		/*alert(count)
		alert(row.N_identification_CS);
		alert(row['NumFilet/piege'])*/
		
		//console.log(count);
		
		if ((row.N_site == null) || (row.N_site == '')) {
			//console.log(row.NUM)
			
			if (row.Pays != null) {
				Pays = row.Pays; 
			} else {
				Pays = '';
			}			
			if (row['Préfecture'] != null) {
				Prefecture = row['Préfecture'];
			} else {
				Prefecture = '';
			}
			if (row['Sous-préfecture'] != null) {
				Sous_prefecture = row['Sous-préfecture'];
			} else {
				Sous_prefecture = '';
			}
			if (row['Ville/village'] != null) {
				Ville_village = row['Ville/village'];
			} else {
				Ville_village = '';
			}
			if (row.Site_capture != null) {
				Site_capture = row.Site_capture;
			} else {
				Site_capture = '';
			}
			if (row.Environnement != null) {
				Environnement = row.Environnement;
			} else {
				Environnement = '';
			}
			if (row.Latitude != null) {
				Latitude = row.Latitude;
			} else {
				Latitude = '';
			}
			if (row.Lat_degre_dec != null) {
				Lat_degre_dec = row.Lat_degre_dec;
				Lat_degre_dec = Lat_degre_dec.replace('°', '');
				Lat_degre_dec = Lat_degre_dec.replace('.', ','); 
			} else {
				Lat_degre_dec = '';
			}
			if (row.Longitude != null) {
				Longitude = row.Longitude;
			} else {
				Longitude = '';
			}
			if (row.Long_degre_dec != null) {
				Long_degre_dec = row.Long_degre_dec;
				Long_degre_dec = Long_degre_dec.replace('°', '');
				Long_degre_dec = Long_degre_dec.replace('.', ',');
			} else {
				Long_degre_dec = '';
			}
			if (row.Proximite_village_km != null) {
				Proximite_village_km = row.Proximite_village_km;
				Proximite_village_km = Proximite_village_km.replace('.', ',');
			} else {
				Proximite_village_km = '';
			}
			if (row.Proximite_source_m != null) {
				Proximite_source_m = row.Proximite_source_m;
			} else {
				Proximite_source_m = '';
			}
			
			
		}
		
		/*var debug;
		if (localStorage.getItem('debug') === null) {
			debug = '';
		} else {
			debug = localStorage.getItem('debug');
		};*/
		
		if ((row.N_site != null) && (row.N_site != '')) {
			var N_site = row.N_site;
			
			var res = alasql('SELECT N_site, Pays, Prefecture, [Sous-prefecture], [Ville/village], Site_capture, Environnement, Latitude, Lat_degre_dec, Longitude, Long_degre_dec, Proximite_village_km, Proximite_source_m, COUNT(*) AS NbSite FROM ?  WHERE N_site == "' + N_site + '" GROUP BY N_site, Pays, Prefecture, [Sous-prefecture], [Ville/village], Site_capture, Environnement, Latitude, Lat_degre_dec, Longitude, Long_degre_dec, Proximite_village_km, Proximite_source_m', [tab] );
			
			var site = JSON.stringify(res);
			
			var obj_site = JSON.parse(site);
			
			obj_site.forEach(function(row1){
				Pays = row1.Pays;
				Prefecture = row1.Prefecture;
				Sous_prefecture = row1['Sous-prefecture'];
				Ville_village = row1['Ville/village'];
				Site_capture = row1.Site_capture;
				Environnement = row1.Environnement;
				Latitude = row1.Latitude;
				if (row1.Lat_degre_dec != null) {
					Lat_degre_dec = row1.Lat_degre_dec;
					Lat_degre_dec = Lat_degre_dec.replace('°', '');
					Lat_degre_dec = Lat_degre_dec.replace('.', ',');
				} else {
					Lat_degre_dec = '';
				}
				Longitude = row1.Longitude;
				if (row1.Long_degre_dec != null) {
					Long_degre_dec = row1.Long_degre_dec;
					Long_degre_dec = Long_degre_dec.replace('°', '');
					Long_degre_dec = Long_degre_dec.replace('.', ',');
				} else {
					Long_degre_dec = '';
				}
				if (row1.Proximite_village_km != null) {
					Proximite_village_km = row1.Proximite_village_km;
					Proximite_village_km = Proximite_village_km.replace('.', ',')
				} else {
					Proximite_village_km = '';
				}
				Proximite_source_m = row1.Proximite_source_m;
				NbSite = row1.NbSite;
			});
		}
			
			
			
		/*LongueurFilet = '';
		HauteurFilet = '';
		Lat_degre_decFilet = '';
		LatitudeFilet = '';
		Long_degre_decFilet = '';
		LongitudeFilet = '';
			
			
		if (row.NumFilet != null) {
			var NumFilet = row.NumFilet;
				
			var res = alasql('SELECT NumFilet, LongueurFilet, HauteurFilet, Lat_degre_decFilet, LatitudeFilet, Long_degre_decFilet, LongitudeFilet FROM ? WHERE NumFilet == "' + NumFilet + '"' + ' GROUP BY NumFilet, LongueurFilet, HauteurFilet, Lat_degre_decFilet, LatitudeFilet, Long_degre_decFilet, LongitudeFilet', [tabFilet] );
				
			var filet = JSON.stringify(res);
				
			var obj_filet = JSON.parse(filet);
				
			obj_filet.forEach(function(row){
				if (row.LongueurFilet != null) {
					LongueurFilet = row.LongueurFilet;
					LongueurFilet = LongueurFilet.replace('.', ',');
				} else {
					LongueurFilet = '';
				}
				if (row.HauteurFilet != null) {
					HauteurFilet = row.HauteurFilet;
					HauteurFilet = HauteurFilet.replace('.', ',');
				} else {
					HauteurFilet = '';
				}
				if (row.Lat_degre_decFilet != null) {
					Lat_degre_decFilet = row.Lat_degre_decFilet;
					Lat_degre_decFilet = Lat_degre_decFilet.replace('.', ',');
				} else {
					Lat_degre_decFilet = '';
				}
				if (row.LatitudeFilet != null) {
					LatitudeFilet = row.LatitudeFilet;
				} else {
					LatitudeFilet = '';
				}
				if (row.Long_degre_decFilet != null) {
					Long_degre_decFilet = row.Long_degre_decFilet;
					Long_degre_decFilet = Long_degre_decFilet.replace('.', ',');
				} else {
					Long_degre_decFilet = '';
				}
				if (row.LongitudeFilet != null) {
					LongitudeFilet = row.LongitudeFilet;
				} else {
					LongitudeFilet = '';
				}
			});
		}
			
		var Filet_temps = '';
		var Arret_Capture = '';*/
		
		
		//alert(row['N_site'])
		//if (row['NumFilet/piege'] != '') {
			//alert(row['NumFilet/piege'])
			//NumFilet_piege = row['NumFilet/piege'];
		//} else {
		//	NumFilet_piege = '';
		//}
		/*if (row.Lat_degre_dec_Lieu_capture != null) {
			Lat_degre_dec_Lieu_capture = row.Lat_degre_dec_Lieu_capture;
			Lat_degre_dec_Lieu_capture = Lat_degre_dec_Lieu_capture.replace('.', ',');
		} else {
			Lat_degre_dec_Lieu_capture = '';
		}
		if (row.Long_degre_dec_Lieu_capture != null) {
			Long_degre_dec_Lieu_capture = row.Long_degre_dec_Lieu_capture;
			Long_degre_dec_Lieu_capture = Long_degre_dec_Lieu_capture.replace('.', ',');
		} else {
			Long_degre_dec_Lieu_capture = '';
		}
		
		if (row.Poids_enfant != null) {
			Poids_enfant = row.Poids_enfant;
			Poids_enfant = Poids_enfant.replace('.', ',');
		} else {
			Poids_enfant = '';
		}
		if (row.Poids_gr != null) {
			Poids_gr = row.Poids_gr;
			Poids_gr = Poids_gr.replace('.', ',');
		} else {
			Poids_gr = '';
		}
		if (row.L_avant_bras_mm != null) {
			L_avant_bras_mm = row.L_avant_bras_mm;
			L_avant_bras_mm = L_avant_bras_mm.replace('.', ',');
		} else {
			L_avant_bras_mm = '';
		}
		if (row.L_totale_corps_mm != null) {
			L_totale_corps_mm = row.L_totale_corps_mm;
			L_totale_corps_mm = L_totale_corps_mm.replace('.', ',');
		} else {
			L_totale_corps_mm = '';
		}
		if (row.L_queue_mm != null) {
			L_queue_mm = row.L_queue_mm;
			L_queue_mm = L_queue_mm.replace('.', ',');
		} else {
			L_queue_mm = '';
		}
		if (row.L_metacarpe_3ieme_doigt_mm != null) {
			L_metacarpe_3ieme_doigt_mm = row.L_metacarpe_3ieme_doigt_mm;
			L_metacarpe_3ieme_doigt_mm.replace('.', ',');
		} else {
			L_metacarpe_3ieme_doigt_mm = '';
		}
		if (row.Sang_DBS_nb_cercles != null) {
			Sang_DBS_nb_cercles = row.Sang_DBS_nb_cercles;
			//alert(Sang_DBS_nb_cercles);
			//if (Sang_DBS_nb_cercles == 0) {
			//	alert('ok');
			//	Sang_DBS_nb_cercles.replace('.', ',');
			//}
			Sang_DBS_nb_cercles = Sang_DBS_nb_cercles.toString();
			Sang_DBS_nb_cercles.replace('.', ',');
		} else {
			Sang_DBS_nb_cercles = '';
		}
		
		if ((row.Feces_ethanol == null) || (row.Feces_ethanol == 'undefined')) {
			Feces_ethanol = '0'
		} else {
			Feces_ethanol = row.Feces_ethanol;
		}
		if ((row.Lait == null) || (row.Lait == 'undefined') || (row.Lait == '')) {
			Lait = '0'
		} else {
			Lait = row.Lait;
		}
		if ((row.Username == null) || (row.Username == 'undefined')) {
			Username = ''
		} else {
			Username = row.Username;
		}*/
	    
		console.log(row.N_identification_CS);
		console.log(row['NumFilet/piege']);
		
		if (!selected) { 	
			CSV_data = CSV_data +
			
				row.Date_debut_mission + ';' +
				row.Date_fin_mission + ';' +
				row.Equipe + ';' +
				row.N_site + ';' +
				Pays + ';' +
				Prefecture + ';' +
				Sous_prefecture + ';' +
				Ville_village + ';' +
				Site_capture + ';' +
				Environnement + ';' + 
				Latitude + ';' +
				Lat_degre_dec + ';' +
				Longitude + ';' +
				Long_degre_dec + ';' +
				Proximite_village_km + ';' +
				Proximite_source_m + ';' +
				row.ID_CS_preleve_debut + ';' +
				row.ID_CS_preleve_fin + ';' +
				row.ID_NI_CS_debut + ';' +
				row.ID_NI_CS_fin + ';' +
				row.ID_NI_faune_debut + ';' +
				row.ID_NI_faune_fin + ';' +
				row.Espece_vegetale_1 + ';' +
				row.Stade_espece_1 + ';' +
				row.Espece_vegetale_2 + ';' +
				row.Stade_espece_2 + ';' +
				row.Espece_vegetale_3 + ';' +
				row.Stade_espece_3 + ';' +
				row.Espece_vegetale_4 + ';' +
				row.Stade_espece_4 + ';' +
				row.Espece_vegetale_5 + ';' +
				row.Stade_espece_5 + ';' +
				row.Espece_vegetale_6 + ';' +
				row.Stade_espece_6 + ';' +
				row.Espece_vegetale_7 + ';' +
				row.Stade_espece_7 + ';' +
				row.ID_echantillon_vegetale + ';' +
				row.Espece_animale_domestique_1 + ';' +
				row.Espece_animale_domestique_2 + ';' +
				row.Espece_animale_domestique_3 + ';' +
				row.Espece_animale_sauvage_1 + ';' +
				row.Espece_animale_sauvage_2 + ';' +
				row.Espece_animale_sauvage_3 + ';' +
				row.Espece_animale_sauvage_4 + ';' +
				row.NI_faune + ';' +
				row.Interaction_CS_faune + ';' +
				row.Description_interaction_CS_faune + ';' +
				row.Activite_humaine_observee + ';' +
				row.Description_interaction_CS_homme + ';' +
				row.Camera_traps + ';' +
				row.NumChambre + ';' +
				row.HauteurCapteur + ';' +
				row.Distance_capteur_grotte + ';' +
				row.Date_debut_capteur + ';' +
				row.Heure_debut_capteur + ';' +
				row.Date_fin_capteur + ';' +
				row.Heure_fin_capteur + ';' +
				row.NumDossier_capteur + ';' +
				row.Username + ';\r\n'
		
			} else {			 
				if (array_selected_fields.indexOf('Date_debut_mission') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Date_debut_mission;';
					}
					CSV_data = CSV_data + row.Date_debut_mission + ";" 
				};
				if (array_selected_fields.indexOf('Date_fin_mission') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Date_fin_mission;';
					}
					CSV_data = CSV_data + row.Date_fin_mission + ";"
				};
				if (array_selected_fields.indexOf('Equipe') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Equipe;';
					}
					CSV_data = CSV_data + row.Equipe + ";"
				};
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
				if (array_selected_fields.indexOf('Equipe') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Equipe;';
					}
					CSV_data = CSV_data + row.Equipe + ";"
				};
				if (array_selected_fields.indexOf('Préfecture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Préfecture;';
					}
					CSV_data = CSV_data + Prefecture + ";"
				};				
				if (array_selected_fields.indexOf('Sous-préfecture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Sous-préfecture;';
					}
					CSV_data = CSV_data + Sous_prefecture + ";"
				};				
				if (array_selected_fields.indexOf('Ville_village') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Ville/village;';
					}
					CSV_data = CSV_data + Ville_village + ";"
				};
				if (array_selected_fields.indexOf('Site_capture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Site_capture;';
					}
					CSV_data = CSV_data + Site_capture + ";"
				};
				if (array_selected_fields.indexOf('Environnement') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Environnement;';
					}
					CSV_data = CSV_data + Environnement + ";"
				};
				if (array_selected_fields.indexOf('Latitude') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Latitude;';
					}
					CSV_data = CSV_data + Latitude + ";"
				};
				if (array_selected_fields.indexOf('Lat_degre_dec') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Lat_degre_dec;';
					}
					CSV_data = CSV_data + Lat_degre_dec + ";"
				};
				if (array_selected_fields.indexOf('Longitude') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Longitude;';
					}
					CSV_data = CSV_data + Longitude + ";"
				};
				if (array_selected_fields.indexOf('Long_degre_dec') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Long_degre_dec;';
					}
					CSV_data = CSV_data + Long_degre_dec + ";"
				};
				if (array_selected_fields.indexOf('Proximite_village_km') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Proximite_village_km;';
					}
					CSV_data = CSV_data + Proximite_village_km + ";"
				};
				if (array_selected_fields.indexOf('Proximite_source_m') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Proximite_source_m;';
					}
					CSV_data = CSV_data + Proximite_source_m + ";"
				};				
				if (array_selected_fields.indexOf('ID_CS_preleve_debut') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_CS_preleve_debut;';
					}
					CSV_data = CSV_data + row.ID_CS_preleve_debut + ";"
				};
				if (array_selected_fields.indexOf('ID_CS_preleve_fin') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_CS_preleve_fin;';
					}
					CSV_data = CSV_data + row.ID_CS_preleve_fin + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_CS_debut') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_CS_debut;';
					}
					CSV_data = CSV_data + row.ID_NI_CS_debut + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_CS_fin') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_CS_fin;';
					}
					CSV_data = CSV_data + row.ID_NI_CS_fin + ";"
				};
				if (array_selected_fields.indexOf('ID_NI_faune_debut') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_faune_debut;';
					}
					CSV_data = CSV_data + row.ID_NI_faune_debut + ";"
				}; 
				if (array_selected_fields.indexOf('ID_NI_faune_fin') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_NI_faune_fin;';
					}
					CSV_data = CSV_data + row.ID_NI_faune_fin + ";"
				};  
				if (array_selected_fields.indexOf('Espece_vegetale_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_vegetale_1;';
					}
					CSV_data = CSV_data + row.Espece_vegetale_1 + ";"
				}; 
				if (array_selected_fields.indexOf('Stade_espece_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Stade_espece_1;';
					}
					CSV_data = CSV_data + row.Stade_espece_1 + ";"
				};
				if (array_selected_fields.indexOf('Espece_vegetale_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_vegetale_2;';
					}
					CSV_data = CSV_data + row.Espece_vegetale_2 + ";"
				};
				if (array_selected_fields.indexOf('Stade_espece_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Stade_espece_2;';
					}
					CSV_data = CSV_data + row.Stade_espece_2 + ";"
				};
				if (array_selected_fields.indexOf('Espece_vegetale_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_vegetale_3;';
					}
					CSV_data = CSV_data + row.Espece_vegetale_3 + ";"
				};
				if (array_selected_fields.indexOf('Stade_espece_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Stade_espece_3;';
					}
					CSV_data = CSV_data + row.Stade_espece_3 + ";"
				};   				
				if (array_selected_fields.indexOf('Espece_vegetale_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_vegetale_4;';
					}
					CSV_data = CSV_data + row.Espece_vegetale_4 + ";"
				};
				if (array_selected_fields.indexOf('Stade_espece_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Stade_espece_4;';
					}
					CSV_data = CSV_data + row.Stade_espece_4 + ";"
				};
				if (array_selected_fields.indexOf('Espece_vegetale_5') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_vegetale_5;';
					}
					CSV_data = CSV_data + row.Espece_vegetale_5 + ";"
				};
	    		if (array_selected_fields.indexOf('Stade_espece_5') > -1) {
	    			if (add_heading == true) {
						CSV_heading = CSV_heading + 'Stade_espece_5;';
					}
					CSV_data = CSV_data + row.Stade_espece_5 + ";"
				};
				if (array_selected_fields.indexOf('Espece_vegetale_6') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_vegetale_6;';
					}
					CSV_data = CSV_data + row.Espece_vegetale_6 + ";"
				};
				if (array_selected_fields.indexOf('Stade_espece_6') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Stade_espece_6;';
					}
					CSV_data = CSV_data + row.Stade_espece_6 + ";"
				};
				if (array_selected_fields.indexOf('Espece_vegetale_7') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_vegetale_7;';
					}
					CSV_data = CSV_data + row.Espece_vegetale_7 + ";"
				};
				if (array_selected_fields.indexOf('Stade_espece_7') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Stade_espece_7;';
					}
					CSV_data = CSV_data + row.Stade_espece_7 + ";"
				};
				if (array_selected_fields.indexOf('Famille_consensus') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_consensus;';
					}
					CSV_data = CSV_data + row.Famille_consensus + ";"
				};
				if (array_selected_fields.indexOf('ID_echantillon_vegetale') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_echantillon_vegetale;';
					}
					CSV_data = CSV_data + row.ID_echantillon_vegetale + ";"
				};
				if (array_selected_fields.indexOf('Espece_animale_domestique_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_animale_domestique_1;';
					}
					CSV_data = CSV_data + row.Espece_animale_domestique_1 + ";"
				};
				if (array_selected_fields.indexOf('Espece_animale_domestique_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_animale_domestique_2;';
					}
					CSV_data = CSV_data + row.Espece_animale_domestique_2 + ";"
				};
				if (array_selected_fields.indexOf('Espece_animale_domestique_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_animale_domestique_3;';
					}
					CSV_data = CSV_data + row.Espece_animale_domestique_3 + ";"
				};
				if (array_selected_fields.indexOf('Espece_animale_sauvage_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_animale_sauvage_1;';
					}
					CSV_data = CSV_data + row.Espece_animale_sauvage_1 + ";"
				};
				if (array_selected_fields.indexOf('Espece_animale_sauvage_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_animale_sauvage_2;';
					}
					CSV_data = CSV_data + row.Espece_animale_sauvage_2 + ";"
				};
				if (array_selected_fields.indexOf('Espece_animale_sauvage_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_animale_sauvage_3;';
					}
					CSV_data = CSV_data + row.Espece_animale_sauvage_3 + ";"
				};
				if (array_selected_fields.indexOf('Espece_animale_sauvage_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_animale_sauvage_4;';
					}
					CSV_data = CSV_data + row.Espece_animale_sauvage_4 + ";"
				};
				if (array_selected_fields.indexOf('NI_faune') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'NI_faune;';
					}
					CSV_data = CSV_data + row.NI_faune + ";"
				};
				if (array_selected_fields.indexOf('Interaction_CS_faune') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Interaction_CS_faune;';
					}
					CSV_data = CSV_data + row.Interaction_CS_faune + ";"
				};
				if (array_selected_fields.indexOf('Description_interaction_CS_faune') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Description_interaction_CS_faune;';
					}
					CSV_data = CSV_data + row.Description_interaction_CS_faune + ";"
				};
				if (array_selected_fields.indexOf('Activite_humaine_observee') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Activite_humaine_observee;';
					}
					CSV_data = CSV_data + row.Activite_humaine_observee + ";"
				};
				if (array_selected_fields.indexOf('Description_interaction_CS_homme') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Description_interaction_CS_homme;';
					}
					CSV_data = CSV_data + row.Description_interaction_CS_homme + ";"
				};
				if (array_selected_fields.indexOf('Camera_traps') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Camera_traps;';
					}
					CSV_data = CSV_data + row.Camera_traps + ";"
				};				
   				if (array_selected_fields.indexOf('NumChambre') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'NumChambre;';
					}
					CSV_data = CSV_data + row.NumChambre + ";"
				};   				
				if (array_selected_fields.indexOf('HauteurCapteur') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'HauteurCapteur;';
					}
					CSV_data = CSV_data + row.HauteurCapteur + ";"
				};
				if (array_selected_fields.indexOf('Distance_capteur_grotte') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Distance_capteur_grotte;';
					}
					CSV_data = CSV_data + row.Distance_capteur_grotte + ";"
				};
	    		if (array_selected_fields.indexOf('Date_debut_capteur') > -1) {
	    			if (add_heading == true) {
						CSV_heading = CSV_heading + 'Date_debut_capteur;';
					}
					CSV_data = CSV_data + row.Date_debut_capteur + ";"
				};
				if (array_selected_fields.indexOf('Heure_debut_capteur') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Heure_debut_capteur;';
					}
					CSV_data = CSV_data + row.Heure_debut_capteur + ";"
				}; 
   				if (array_selected_fields.indexOf('Date_fin_capteur') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Date_fin_capteur;';
					}
					CSV_data = CSV_data + row.Date_fin_capteur + ";"
				};
				if (array_selected_fields.indexOf('Heure_fin_capteur') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Heure_fin_capteur';
					}
					CSV_data = CSV_data + row.Heure_fin_capteur + ";"
				};
				if (array_selected_fields.indexOf('NumDossier_capteur') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'NumDossier_capteur;';
					}
					CSV_data = CSV_data + row.NumDossier_capteur + ";"
				};
				if (array_selected_fields.indexOf('Username') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Username;';
					}
					CSV_data = CSV_data + row.Username + ";"
				};
				/*if (array_selected_fields.indexOf('Filet_temps') > -1) {
					CSV_data = CSV_data + Filet_temps + ";"
				};
				if (array_selected_fields.indexOf('Arret_Capture') > -1) {
					CSV_data = CSV_data + Arret_Capture + ";"
				};*/
				
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
	
	var res = alasql("SELECT Date_debut_mission, Date_fin_mission, Equipe, N_site, Pays, [Préfecture], [Sous-préfecture], [Ville/village], Site_capture, Environnement, Latitude, Lat_degre_dec, Longitude, Long_degre_dec, Proximite_village_km, Proximite_source_m, ID_CS_preleve_debut, ID_CS_preleve_fin, ID_NI_CS_debut, ID_NI_CS_fin, ID_NI_faune_debut, ID_NI_faune_fin, Espece_vegetale_1, Stade_espece_1, Espece_vegetale_2, Stade_espece_2, Espece_vegetale_3, Stade_espece_3, Espece_vegetale_4, Stade_espece_4, Espece_vegetale_5, Stade_espece_5, Espece_vegetale_6, Stade_espece_6, Espece_vegetale_7, Stade_espece_7, ID_echantillon_vegetale, Espece_animale_domestique_1, Espece_animale_domestique_2, Espece_animale_domestique_3, Espece_animale_sauvage_1, Espece_animale_sauvage_2, Espece_animale_sauvage_3, Espece_animale_sauvage_4, NI_faune, Interaction_CS_faune, Description_interaction_CS_faune, Activite_humaine_observee, Description_interaction_CS_homme, Camera_traps, NumChambre, HauteurCapteur, Distance_capteur_grotte, Date_debut_capteur, Heure_debut_capteur, Date_fin_capteur, Heure_fin_capteur, NumDossier_capteur, Username FROM ? ORDER BY Date_debut_mission", [tab_missions] );
    			
    var missions = JSON.stringify(res);
    			
    var obj_missions = JSON.parse(missions);
	   
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
		console.log(row.N_identification_CS)
		//alert(count)
		if (count == i) {
			addMissions(row, false);
		}
		
		
	}).catch(function (err) {
		console.log(err);
	});
})


$('#export_selected_fields').click(function(){
	var res = alasql("SELECT Date_debut_mission, Date_fin_mission, Equipe, N_site, Pays, [Préfecture], [Sous-préfecture], [Ville/village], Site_capture, Environnement, Latitude, Lat_degre_dec, Longitude, Long_degre_dec, Proximite_village_km, Proximite_source_m, ID_CS_preleve_debut, ID_CS_preleve_fin, ID_NI_CS_debut, ID_NI_CS_fin, ID_NI_faune_debut, ID_NI_faune_fin, Espece_vegetale_1, Stade_espece_1, Espece_vegetale_2, Stade_espece_2, Espece_vegetale_3, Stade_espece_3, Espece_vegetale_4, Stade_espece_4, Espece_vegetale_5, Stade_espece_5, Espece_vegetale_6, Stade_espece_6, Espece_vegetale_7, Stade_espece_7, ID_echantillon_vegetale, Espece_animale_domestique_1, Espece_animale_domestique_2, Espece_animale_domestique_3, Espece_animale_sauvage_1, Espece_animale_sauvage_2, Espece_animale_sauvage_3, Espece_animale_sauvage_4, NI_faune, Interaction_CS_faune, Description_interaction_CS_faune, Activite_humaine_observee, Description_interaction_CS_homme, Camera_traps, NumChambre, HauteurCapteur, Distance_capteur_grotte, Date_debut_capteur, Heure_debut_capteur, Date_fin_capteur, Heure_fin_capteur, NumDossier_capteur, Username FROM ? ORDER BY Date_debut_mission", [tab_missions] );
    			
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
		console.log(row.N_identification_CS)
		//alert(count)
		if (count == i) {
			addMissions(row, true);
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


	
