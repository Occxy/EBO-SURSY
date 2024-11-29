var fields = 
    			['N_site', 'Pays', 'Prefecture', 'Sous-prefecture', 'Ville/village', 'Site_capture', 
    			 'Environnement', 'Latitude', 'Lat_degre_dec', 'Longitude', 'Long_degre_dec', 'Proximite_village_km', 
    			 'Proximite_source_m', 'Date_collecte', 'Equipe', 'ID_NI_faune', 'Espece_animale', 'Localisation', 'Username']

    				
var fields_CSV_head =   'N_site;Pays;Prefecture;Sous-prefecture;Ville/village;Site_capture;' +
						'Environnement;Latitude;Lat_degre_dec;Longitude;Long_degre_dec;Proximite_village_km;' +
						'Proximite_source_m;Date_collecte;Equipe;ID_NI_faune;Espece_animale;Localisation;' +
						'Username;\r\n';

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
	var DB_Faune = new PouchDB(remote_couchdb + 'faune_astre_transvihmi_guinee' + debug);
} else {
	var DB_Faune = new PouchDB('faune_astre_transvihmi_guinee' + debug);
};

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DBCaraterisations = new PouchDB(remote_couchdb + 'caracterisations_grottes' + nom_table + debug);
} else {
	var DBCaraterisations = new PouchDB('caracterisations_grottes' + nom_table + debug);
};

var tab_faune = new Array();
var tab_faune_sorted = new Array();
var tab = new Array();


DB_Faune.allDocs({  		
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
   				obj.Date_collecte = row.doc.Date_collecte 
   				obj.Equipe = row.doc.Equipe 
   				obj.ID_NI_faune = row.doc.ID_NI_faune 
   				obj.Espece_animale = row.doc.Espece_animale 
   				obj.Localisation = row.doc.Localisation 
   				obj.Username = row.doc.Username 

   				tab_faune.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}
}).then(function () {
	
	/*tab_faune_sorted = tab_faune.sort(
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
		
		
		
		DB_Faune.info().then((infos) => {
			
			count = infos.doc_count;
			
			
			
			
			
			
			
		}).catch((error) => {
		});
		
		
	}).catch(function (err) {
	   	console.log(err);
	});

	
}).catch(function (err) {
   	console.log(err);
});

function addChauves_souris_capturees(row, selected) {
	
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
			if (row.Prefecture != null) {
				Prefecture = row.Prefecture;
			} else {
				Prefecture = '';
			}
			if (row['Sous-prefecture'] != null) {
				Sous_prefecture = row['Sous-prefecture'];
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
				row.Date_collecte + ';' + 
   				row.Equipe + ';' + 
   				row.ID_NI_faune + ';' + 
   				row.Espece_animale + ';' + 
   				row.Localisation + ';' + 
   				row.Username + ';\r\n'
		
			} else {				 
				if (array_selected_fields.indexOf('N_identification_CS') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'N_identification_CS;';
					}
					CSV_data = CSV_data + row.N_identification_CS + ";" 
				};
				if (array_selected_fields.indexOf('N_identification_mere') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'N_identification_mere;';
					}
					CSV_data = CSV_data + row.N_identification_mere + ";"
				};
				if (array_selected_fields.indexOf('Numero_mission') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Numero_mission;';
					}
					CSV_data = CSV_data + row.Numero_mission + ";"
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
				if (array_selected_fields.indexOf('Prefecture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Prefecture;';
					}
					CSV_data = CSV_data + Prefecture + ";"
				};				
				if (array_selected_fields.indexOf('Sous-prefecture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Sous-prefecture;';
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
				if (array_selected_fields.indexOf('Methode_capture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Methode_capture;';
					}
					CSV_data = CSV_data + row.Methode_capture + ";"
				};
				if (array_selected_fields.indexOf('NumFilet/piege') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'NumFilet/piege;';
					}
					CSV_data = CSV_data + row['NumFilet/piege'] + ";"
				};
				if (array_selected_fields.indexOf('LongueurFilet') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'LongueurFilet;';
					}
					CSV_data = CSV_data + row.LongueurFilet + ";"
				};
				if (array_selected_fields.indexOf('HauteurFilet') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'HauteurFilet;';
					}
					CSV_data = CSV_data + row.HauteurFilet + ";"
				};
				if (array_selected_fields.indexOf('Lat_degre_decFilet') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Lat_degre_decFilet;';
					}
					CSV_data = CSV_data + row.Lat_degre_decFilet + ";"
				}; 
				if (array_selected_fields.indexOf('LatitudeFilet') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'LatitudeFilet;';
					}
					CSV_data = CSV_data + row.LatitudeFilet + ";"
				};  
				if (array_selected_fields.indexOf('Long_degre_decFilet') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Long_degre_decFilet;';
					}
					CSV_data = CSV_data + row.Long_degre_decFilet + ";"
				}; 
				if (array_selected_fields.indexOf('LongitudeFilet') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'LongitudeFilet;';
					}
					CSV_data = CSV_data + row.LongitudeFilet + ";"
				};
				if (array_selected_fields.indexOf('Lat_degre_dec_Lieu_capture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Lat_degre_dec_Lieu_capture;';
					}
					CSV_data = CSV_data + row.Lat_degre_dec_Lieu_capture + ";"
				};
				if (array_selected_fields.indexOf('Latitude_Lieu_capture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Latitude_Lieu_capture;';
					}
					CSV_data = CSV_data + row.Latitude_Lieu_capture + ";"
				};
				if (array_selected_fields.indexOf('Long_degre_dec_Lieu_capture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Long_degre_dec_Lieu_capture;';
					}
					CSV_data = CSV_data + row.Long_degre_dec_Lieu_capture + ";"
				};
				if (array_selected_fields.indexOf('Longitude_Lieu_capture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Longitude_Lieu_capture;';
					}
					CSV_data = CSV_data + row.Longitude_Lieu_capture + ";"
				};   				
				if (array_selected_fields.indexOf('Type_chauve_souris') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Type_chauve_souris;';
					}
					CSV_data = CSV_data + row.Type_chauve_souris + ";"
				};
				if (array_selected_fields.indexOf('Espece_identifiee') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_identifiee;';
					}
					CSV_data = CSV_data + row.Espece_identifiee + ";"
				};
				if (array_selected_fields.indexOf('Famille_terrain') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_terrain;';
					}
					CSV_data = CSV_data + row.Famille_terrain + ";"
				};
	    		if (array_selected_fields.indexOf('Genre_terrain') > -1) {
	    			if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_terrain;';
					}
					CSV_data = CSV_data + row.Genre_terrain + ";"
				};
				if (array_selected_fields.indexOf('Espece_terrain') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_terrain;';
					}
					CSV_data = CSV_data + row.Espece_terrain + ";"
				};
				if (array_selected_fields.indexOf('Famille_labo') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_labo;';
					}
					CSV_data = CSV_data + row.Famille_labo + ";"
				};
				if (array_selected_fields.indexOf('Genre_labo') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_labo;';
					}
					CSV_data = CSV_data + row.Genre_labo + ";"
				};
				if (array_selected_fields.indexOf('Espece_labo') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_labo;';
					}
					CSV_data = CSV_data + row.Espece_labo + ";"
				};
				if (array_selected_fields.indexOf('Famille_consensus') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille_consensus;';
					}
					CSV_data = CSV_data + row.Famille_consensus + ";"
				};
				if (array_selected_fields.indexOf('Genre_consensus') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre_consensus;';
					}
					CSV_data = CSV_data + row.Genre_consensus + ";"
				};
				if (array_selected_fields.indexOf('Espece_consensus') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_consensus;';
					}
					CSV_data = CSV_data + row.Espece_consensus + ";"
				};
				if (array_selected_fields.indexOf('Sexe') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Sexe;';
					}
					CSV_data = CSV_data + row.Sexe + ";"
				};
				if (array_selected_fields.indexOf('Age') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Age;';
					}
					CSV_data = CSV_data + row.Age + ";"
				};
				if (array_selected_fields.indexOf('Gestante') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Gestante;';
					}
					CSV_data = CSV_data + row.Gestante + ";"
				};
				if (array_selected_fields.indexOf('Lactation') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Lactation;';
					}
					CSV_data = CSV_data + row.Lactation + ";"
				};
				if (array_selected_fields.indexOf('Suitee') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Suitee;';
					}
					CSV_data = CSV_data + row.Suitee + ";"
				};
				if (array_selected_fields.indexOf('Sexe_enfant') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Sexe_enfant;';
					}
					CSV_data = CSV_data + row.Sexe_enfant + ";"
				};
				if (array_selected_fields.indexOf('Poids_enfant') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Poids_enfant;';
					}
					CSV_data = CSV_data + row.Poids_enfant + ";"
				};
				if (array_selected_fields.indexOf('Identifiant_enfant') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Identifiant_enfant;';
					}
					CSV_data = CSV_data + row.Identifiant_enfant + ";"
				};
				if (array_selected_fields.indexOf('Vivante') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Vivante;';
					}
					CSV_data = CSV_data + row.Vivante + ";"
				};
				if (array_selected_fields.indexOf('Cause_deces') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Cause_deces;';
					}
					CSV_data = CSV_data + row.Cause_deces + ";"
				};
				if (array_selected_fields.indexOf('Poids_gr') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Poids_gr;';
					}
					CSV_data = CSV_data + row.Poids_gr + ";"
				};
				if (array_selected_fields.indexOf('L_avant_bras_mm') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'L_avant_bras_mm;';
					}
					CSV_data = CSV_data + row.L_avant_bras_mm + ";"
				};				
   				if (array_selected_fields.indexOf('Ailes_WS') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Ailes_WS;';
					}
					CSV_data = CSV_data + row.Ailes_WS + ";"
				};   				
				if (array_selected_fields.indexOf('L_totale_corps_Ltc_mm') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'L_totale_corps_Ltc_mm;';
					}
					CSV_data = CSV_data + row.L_totale_corps_Ltc_mm + ";"
				};
				if (array_selected_fields.indexOf('TL_L_Totale_avec_queue_mm') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'TL_L_Totale_avec_queue_mm;';
					}
					CSV_data = CSV_data + row.TL_L_Totale_avec_queue_mm + ";"
				};
	    		if (array_selected_fields.indexOf('Taille_yeux') > -1) {
	    			if (add_heading == true) {
						CSV_heading = CSV_heading + 'Taille_yeux;';
					}
					CSV_data = CSV_data + row.Taille_yeux + ";"
				};
				if (array_selected_fields.indexOf('L_queue_T_mm') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'L_queue_T_mm;';
					}
					CSV_data = CSV_data + row.L_queue_T_mm + ";"
				}; 
   				if (array_selected_fields.indexOf('E_mm') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'E_mm;';
					}
					CSV_data = CSV_data + row.E_mm + ";"
				};
				if (array_selected_fields.indexOf('Tr_mm') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Tr_mm;';
					}
					CSV_data = CSV_data + row.Tr_mm + ";"
				};
				if (array_selected_fields.indexOf('Tib_mm') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Tib_mm;';
					}
					CSV_data = CSV_data + row.Tib_mm + ";"
				};
				if (array_selected_fields.indexOf('HF_L_arriere_pied_mm') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'HF_L_arriere_pied_mm;';
					}
					CSV_data = CSV_data + row.HF_L_arriere_pied_mm + ";"
				};
				if (array_selected_fields.indexOf('NL_breadth_larg_feuille_de_nez_mm') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'NL_breadth_larg_feuille_de_nez_mm;';
					}
					CSV_data = CSV_data + row.NL_breadth_larg_feuille_de_nez_mm + ";"
				};
				if (array_selected_fields.indexOf('NL_lenght_mm') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'NL_lenght_mm;';
					}
					CSV_data = CSV_data + row.NL_lenght_mm + ";"
				};
				if (array_selected_fields.indexOf('L_metacarpe_3ieme_doigt_mm') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'L_metacarpe_3ieme_doigt_mm;';
					}
					CSV_data = CSV_data + row.L_metacarpe_3ieme_doigt_mm + ";"
				};
				if (array_selected_fields.indexOf('Couleur_pelage_dorsal') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Couleur_pelage_dorsal;';
					}
					CSV_data = CSV_data + row.Couleur_pelage_dorsal + ";"
				};
				if (array_selected_fields.indexOf('Couleur_pelage_ventral') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Couleur_pelage_ventral;';
					}
					CSV_data = CSV_data + row.Couleur_pelage_ventral + ";"
				};
				if (array_selected_fields.indexOf('Photo') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Photo;';
					}
					CSV_data = CSV_data + row.Photo + ";"
				};
				if (array_selected_fields.indexOf('Remarques_anomalies') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Remarques_anomalies;';
					}
					CSV_data = CSV_data + row.Remarques_anomalies.split(';').join(',') + ";"
				};		  				
				if (array_selected_fields.indexOf('Sang_DBS_nb_cercles') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Sang_DBS_nb_cercles;';
					}
					CSV_data = CSV_data + row.Sang_DBS_nb_cercles + ";"
				};
				if (array_selected_fields.indexOf('Sang_tube_EDTA') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Sang_tube_EDTA;';
					}
					CSV_data = CSV_data + row.Sang_tube_EDTA + ";"
				};
				if (array_selected_fields.indexOf('Feces_RNAl') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Feces_RNAl;';
					}
					CSV_data = CSV_data + row.Feces_RNAl + ";"
				};
				if (array_selected_fields.indexOf('Urine') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Urine;';
					}
					CSV_data = CSV_data + row.Urine + ";"
				};
				if (array_selected_fields.indexOf('Urine_DUS_nombre_cercles') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Urine_DUS_nombre_cercles;';
					}
					CSV_data = CSV_data + row.Urine_DUS_nombre_cercles + ";"
				};
				if (array_selected_fields.indexOf('Feces_urine_RNAl') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Feces_urine_RNAl;';
					}
					CSV_data = CSV_data + row.Feces_urine_RNAl + ";"
				};
				if (array_selected_fields.indexOf('Ecouvillon_gorge_RNAl') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Ecouvillon_gorge_RNAl;';
					}
					CSV_data = CSV_data + row.Ecouvillon_gorge_RNAl + ";"
				};
				if (array_selected_fields.indexOf('Ecouvillon_rectal_RNAl') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Ecouvillon_rectal_RNAl;';
					}
					CSV_data = CSV_data + row.Ecouvillon_rectal_RNAl + ";"
				};
				if (array_selected_fields.indexOf('Ectoparasites_ethanol') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Ectoparasites_ethanol;';
					}
					CSV_data = CSV_data + row.Ectoparasites_ethanol + ";"
				};
				if (array_selected_fields.indexOf('Poils_ethanol') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Poils_ethanol;';
					}
					CSV_data = CSV_data + row.Poils_ethanol + ";"
				};
				if (array_selected_fields.indexOf('Wing_punch_ethanol') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Wing_punch_ethanol;';
					}
					CSV_data = CSV_data + row.Wing_punch_ethanol + ";"
				};
				if (array_selected_fields.indexOf('Feces_culture_glycerol') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Feces_culture_glycerol;';
					}
					CSV_data = CSV_data + row.Feces_culture_glycerol + ";"
				};
				if (array_selected_fields.indexOf('Feces_ethanol') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Feces_ethanol;';
					}
					CSV_data = CSV_data + row.Feces_ethanol + ";"
				};if (array_selected_fields.indexOf('Sperme') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Sperme;';
					}
					CSV_data = CSV_data + row.Sperme + ";"
				};
				if (array_selected_fields.indexOf('Lait') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Lait;';
					}
					CSV_data = CSV_data + row.Lait + ";"
				};
				if (array_selected_fields.indexOf('Autres_echantillons_remarques') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Autres_echantillons_remarques;';
					}
					CSV_data = CSV_data + row.Autres_echantillons_remarques.split(';').join(',') + ";"
				};
				if (array_selected_fields.indexOf('Specimen_entier') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Specimen_entier;';
					}
					CSV_data = CSV_data + row.Specimen_entier + ";"
				};
	    		if (array_selected_fields.indexOf('Specimen_preserve_dans') > -1) {
	    			if (add_heading == true) {
						CSV_heading = CSV_heading + 'Specimen_preserve_dans;';
					}
					CSV_data = CSV_data + row.Specimen_preserve_dans + ";"
				};
				if (array_selected_fields.indexOf('Prelevement_organe') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Prelevement_organe;';
					}
					CSV_data = CSV_data + row.Prelevement_organe + ";"
				};
				if (array_selected_fields.indexOf('Foie_formol') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Foie_formol;';
					}
					CSV_data = CSV_data + row.Foie_formol + ";"
				};
				if (array_selected_fields.indexOf('Foie_RNAl') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Foie_RNAl;';
					}
					CSV_data = CSV_data + row.Foie_RNAl + ";"
				};
				if (array_selected_fields.indexOf('Rate_formol') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Rate_formol;';
					}
					CSV_data = CSV_data + row.Rate_formol + ";"
				};
				if (array_selected_fields.indexOf('Rate_RNAl') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Rate_RNAl;';
					}
					CSV_data = CSV_data + row.Rate_RNAl + ";"
				};
				if (array_selected_fields.indexOf('Reins_formol') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Reins_formol;';
					}
					CSV_data = CSV_data + row.Reins_formol + ";"
				};
				if (array_selected_fields.indexOf('Reins_RNAl') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Reins_RNAl;';
					}
					CSV_data = CSV_data + row.Reins_RNAl + ";"
				};
				if (array_selected_fields.indexOf('Intestins_formol') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Intestins_formol;';
					}
					CSV_data = CSV_data + row.Intestins_formol + ";"
				};
				if (array_selected_fields.indexOf('Intestins_RNAl') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Intestins_RNAl;';
					}
					CSV_data = CSV_data + row.Intestins_RNAl + ";"
				};
				if (array_selected_fields.indexOf('Poumons_formol') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Poumons_formol;';
					}
					CSV_data = CSV_data + row.Poumons_formol + ";"
				};
				if (array_selected_fields.indexOf('Poumons_RNAl') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Poumons_RNAl;';
					}
					CSV_data = CSV_data + row.Poumons_RNAl + ";"
				};
				if (array_selected_fields.indexOf('Coeur_formol') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Coeur_formol;';
					}
					CSV_data = CSV_data + row.Coeur_formol + ";"
				};
				if (array_selected_fields.indexOf('Coeur_RNAl') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Coeur_RNAl;';
					}
					CSV_data = CSV_data + row.Coeur_RNAl + ";"
				};
				if (array_selected_fields.indexOf('Ggl_lymph_formol') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Ggl_lymph_formol;';
					}
					CSV_data = CSV_data + row.Ggl_lymph_formol + ";"
				};
				if (array_selected_fields.indexOf('Ggl_lymph_RNAl') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Ggl_lymph_RNAl;';
					}
					CSV_data = CSV_data + row.Ggl_lymph_RNAl + ";"
				};
				if (array_selected_fields.indexOf('Testicules_formol') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Testicules_formol;';
					}
					CSV_data = CSV_data + row.Testicules_formol + ";"
				};
				if (array_selected_fields.indexOf('Testicules_RNAl') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Testicules_RNAl;';
					}
					CSV_data = CSV_data + row.Testicules_RNAl + ";"
				};
				if (array_selected_fields.indexOf('Peau_formol') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Peau_formol;';
					}
					CSV_data = CSV_data + row.Peau_formol + ";"
				};
				if (array_selected_fields.indexOf('Peau_RNAl') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Peau_RNAl;';
					}
					CSV_data = CSV_data + row.Peau_RNAl + ";"
				};
				if (array_selected_fields.indexOf('Muscles_formol') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Muscles_formol;';
					}
					CSV_data = CSV_data + row.Muscles_formol + ";"
				};
				if (array_selected_fields.indexOf('Muscles_RNAl') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Muscles_RNAl;';
					}
					CSV_data = CSV_data + row.Muscles_RNAl + ";"
				};
				if (array_selected_fields.indexOf('Cerveau_formol') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Cerveau_formol;';
					}
					CSV_data = CSV_data + row.Cerveau_formol + ";"
				};
				if (array_selected_fields.indexOf('Cerveau_RNAl') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Cerveau_RNAl;';
					}
					CSV_data = CSV_data + row.Cerveau_RNAl + ";"
				};
				if (array_selected_fields.indexOf('Autre') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Autre;';
					}
					CSV_data = CSV_data + row.Autre + ";"
				};
				if (array_selected_fields.indexOf('Autre_formol') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Autre_formol;';
					}
					CSV_data = CSV_data + row.Autre_formol + ";"
				};
				if (array_selected_fields.indexOf('Autre_RNAl') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Autre_RNAl;';
					}
					CSV_data = CSV_data + row.Autre_RNAl + ";"
				};
				if (array_selected_fields.indexOf('Remarques_echantillons') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Remarques_echantillons;';
					}
					CSV_data = CSV_data + row.Remarques_echantillons.split(';').join(',') + ";"
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
	
	var res = alasql("SELECT N_site, Pays, Prefecture, Sous-prefecture, Ville/village, Site_capture, Environnement, Latitude, Lat_degre_dec, Longitude, Long_degre_dec, Proximite_village_km, Proximite_source_m, Date_collecte, Equipe, ID_NI_faune, Espece_animale, Localisation, Username FROM ? ORDER BY ID_NI_faune", [tab_faune] );
    			
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
			addChauves_souris_capturees(row, false);
		}
		
		
	}).catch(function (err) {
		console.log(err);
	});
})


$('#export_selected_fields').click(function(){
	var res = alasql("SELECT N_site, Pays, Prefecture, Sous-prefecture, Ville/village, Site_capture, Environnement, Latitude, Lat_degre_dec, Longitude, Long_degre_dec, Proximite_village_km, Proximite_source_m, Date_collecte, Equipe, ID_NI_faune, Espece_animale, Localisation, Username FROM ? ORDER BY ID_NI_faune", [tab_faune] );
    			
    var Faune = JSON.stringify(res);
    			
    var obj_Faune = JSON.parse(Faune);
	   
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


	
