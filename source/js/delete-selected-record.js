var array_checked_records = JSON.parse(localStorage.getItem("array_checked_records"));
var array_checked_records_count = array_checked_records.length;

var delete_checked_records_table = localStorage.getItem('delete_checked_records_table');

var remote_couchdb = localStorage.getItem('remote_couchdb');
var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DB = new PouchDB(remote_couchdb + delete_checked_records_table + debug);
} else {
	var DB = new PouchDB(delete_checked_records_table + debug);
};


/*DB2 = new PouchDB(remote_couchdb + 'chauves_souris_capturees_transvihmi' );
DB3 = new PouchDB(remote_couchdb + 'chauves_souris_capturees_transvihmi_cameroun' );
DB2.allDocs({  		
	include_docs: true,
	attachments: true
}).then(function (result) {

	// handle result
	if (typeof(JSON.stringify(result)) != "undefined"){  
    	var TablesData = JSON.parse(JSON.stringify(result));
	    	
    	TablesData.rows.forEach(function(row){ 
    		 if ((parseInt(row.doc.Numero_individu) > 4034) &&
    		     (parseInt(row.doc.Numero_individu) <4179)) { 
    			 	console.log(row.doc.N_identification_CS + " : " + row.doc._id);
    			 	
    			 	var id = uuid();
    			 	DB3.put({
    			 		_id: id,
    					Numero_individu: row.doc.Numero_individu,
    					N_identification_CS: row.doc.N_identification_CS,
    					N_identification_mere: row.doc.N_identification_mere,
    					N_site: row.doc.N_site,
    					Pays: row.doc.Pays,
    					Region_capture: row.doc.Region_capture,
    					Site_capture: row.doc.Site_capture,
    					Lieu_capture: row.doc.Lieu_capture,
    					Environnement: row.doc.Environnement,
    					Lat_degre_dec: row.doc.Lat_degre_dec,
    					Latitude: row.doc.Latitude,
    					Long_degre_dec: row.doc.Long_degre_dec,
    					Longitude: row.doc.Longitude,
    					Proximite_village_km: row.doc.Proximite_village_km,
    					Date: row.doc.Date,
    					Equipe: row.doc.Equipe,
    					Methode_capture: row.doc.Methode_capture,
    					NumFilet: row.doc.NumFilet,
    					Lat_degre_dec_Lieu_capture: row.doc.Lat_degre_dec_Lieu_capture,
    					Latitude_Lieu_capture: row.doc.Latitude_Lieu_capture,
    					Long_degre_dec_Lieu_capture: row.doc.Long_degre_dec_Lieu_capture,
    					Longitude_Lieu_capture: row.doc.Longitude_Lieu_capture,
    					Type_chauve_souris: row.doc.Type_chauve_souris,
    					Espece_identifiee: row.doc.Espece_identifiee,
    					Famille_terrain: row.doc.Famille_terrain,
    					Genre_terrain: row.doc.Genre_terrain,
    					Espece_terrain: row.doc.Espece_terrain,
    					Famille_labo: row.doc.Famille_labo,
    					Genre_labo: row.doc.Genre_labo,
    					Espece_labo: row.doc.Espece_labo,
    					Famille_consensus: row.doc.Famille_consensus,
    					Genre_consensus: row.doc.Genre_consensus,
    					Espece_consensus: row.doc.Espece_consensus,
    					Sexe: row.doc.Sexe,
    					Age: row.doc.Age,
    					Gestante: row.doc.Gestante,
    					Lactation: row.doc.Lactation,
    					Suitee: row.doc.Suitee,
    					Sexe_enfant: row.doc.Sexe_enfant,
    					Poids_enfant: row.doc.Poids_enfant,
    					Identifiant_enfant: row.doc.Identifiant_enfant,
    					Vivante: row.doc.Vivante,
    					Cause_deces: row.doc.Cause_deces,
    					Poids_gr: row.doc.Poids_gr,
    					L_avant_bras_mm: row.doc.L_avant_bras_mm,
    					L_totale_corps_mm: row.doc.L_totale_corps_mm,
    					Taille_yeux: row.doc.Taille_yeux,
    					L_queue_mm: row.doc.L_queue_mm,
    					L_metacarpe_3ieme_doigt_mm: row.doc.L_metacarpe_3ieme_doigt_mm,
    					Couleur_pelage_dorsal: row.doc.Couleur_pelage_dorsal,
    					Couleur_pelage_ventral: row.doc.Couleur_pelage_ventral,
    					Photo: row.doc.Photo,
    					Remarques_anomalies: row.doc.Remarques_anomalies,
    					Sang_DBS_nb_cercles: row.doc.Sang_DBS_nb_cercles,
    					Sang_tube_EDTA: row.doc.Sang_tube_EDTA,
    					Feces_RNAl: row.doc.Feces_RNAl,
    					Urine: row.doc.Urine,
    					Urine_DUS_nombre_cercles: row.doc.Urine_DUS_nombre_cercles,
    					Feces_urine_RNAl: row.doc.Feces_urine_RNAl,
    					Ecouvillon_gorge_RNAl: row.doc.Ecouvillon_gorge_RNAl,
    					Ecouvillon_rectal_RNAl: row.doc.Ecouvillon_rectal_RNAl,
    					Ectoparasites_ethanol: row.doc.Ectoparasites_ethanol,
    					Poils_ethanol: row.doc.Poils_ethanol,
    					Wing_punch_ethanol: row.doc.Wing_punch_ethanol,
    					Feces_culture_glycerol: row.doc.Feces_culture_glycerol,
    					Sperme: row.doc.Sperme,
    					Lait: row.doc.Lait,
    					Autres_echantillons_remarques: row.doc.Autres_echantillons_remarques,
    					Specimen_entier: row.doc.Specimen_entier,
    					Specimen_preserve_dans: row.doc.Specimen_preserve_dans,
    					Prelevement_organe: row.doc.Prelevement_organe,
    					Foie_formol: row.doc.Foie_formol,
    					Foie_RNAl: row.doc.Foie_RNAl,
    					Rate_formol: row.doc.Rate_formol,
    					Rate_RNAl: row.doc.Rate_RNAl,
    					Reins_formol: row.doc.Reins_formol,
    					Reins_RNAl: row.doc.Reins_RNAl,
    					Intestins_formol: row.doc.Intestins_formol,
    					Intestins_RNAl: row.doc.Intestins_RNAl,
    					Poumons_formol: row.doc.Poumons_formol,
    					Poumons_RNAl: row.doc.Poumons_RNAl,
    					Coeur_formol: row.doc.Coeur_formol,
    					Coeur_RNAl: row.doc.Coeur_RNAl,
    					Ggl_lymph_formol: row.doc.Ggl_lymph_formol,
    					Ggl_lymph_RNAl: row.doc.Ggl_lymph_RNAl,
    					Testicules_formol: row.doc.Testicules_formol,
    					Testicules_RNAl: row.doc.Testicules_RNAl,
    					Peau_formol: row.doc.Peau_formol,
    					Peau_RNAl: row.doc.Peau_RNAl,
    					Muscles_formol: row.doc.Muscles_formol,
    					Muscles_RNAl: row.doc.Muscles_RNAl,
    					Cerveau_formol: row.doc.Cerveau_formol,
    					Cerveau_RNAl: row.doc.Cerveau_RNAl,
    					Autre: row.doc.Autre,
    					Autre_formol: row.doc.Autre_formol,
    					Autre_RNAl: row.doc.Autre_RNAl,
    					Remarques_echantillons: row.doc.Remarques_echantillons,
    					Username: row.doc.Username});	 	
    		 
    		 }
    		 
    		 
    	});	
    	
    	
    	
	}		
		
}).catch(function (err) {
	console.log(err);
});*/

/*DB = new PouchDB(remote_couchdb + 'chauves_souris_capturees_transvihmi_cameroun_debug' );
//DB3 = new PouchDB(remote_couchdb + 'chauves_souris_capturees_transvihmi_cameroun_debug' );
DB.allDocs({  		
	include_docs: true,
	attachments: true
}).then(function (result) {

	// handle result
	if (typeof(JSON.stringify(result)) != "undefined"){  
    	var TablesData = JSON.parse(JSON.stringify(result));
	    	
    	TablesData.rows.forEach(function(row){ 
    		 if ((parseInt(row.doc.Numero_individu) > 1233) &&
    		     (parseInt(row.doc.Numero_individu) < 1777)) { 
    			 	console.log(row.doc.N_identification_CS + " : " + row.doc._id);
    			 	
    			 	DB.get(row.doc._id).then(function (doc) {
    			 		var DB2 =  new PouchDB(remote_couchdb + 'chauves_souris_capturees_transvihmi_cameroun_debug' );
    					//Deleting an existing document
    					DB2.remove(doc._id, doc._rev, function(err) {
    						if (err) {
    							return console.log(err);
    					  	} else {
    					  		console.log('Document deleted successfully');
    					  	}
    					});
    			 	});
    		 
    		 }
    		 
    		 
    	});	
    	
    	
    	
	}		
		
}).catch(function (err) {
	console.log(err);
});*/


delete_checked_records()


function delete_checked_records() {
	if (array_checked_records_count > 0) {
		
		//alert(array_checked_records[array_checked_records_count-1]);
		
		DB.get(array_checked_records[array_checked_records_count-1]).then(function (doc) {
			//Deleting an existing document
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB2 = new PouchDB(remote_couchdb + delete_checked_records_table + debug);
			} else {
				var DB2 = new PouchDB(delete_checked_records_table + debug);
			};
			DB2.remove(doc._id, doc._rev, function(err) {
				if (err) {
					return console.log(err);
			  	} else {
			  		console.log('Document deleted successfully');
			  		DB2.allDocs({
						include_docs: true,
						attachments: true
					}).then(function (result) {
						if /*(*/(navigator.onLine) /*&& (localStorage.getItem('web') !== 'oui'))*/ {
							var debug;
							if (localStorage.getItem('debug') === null) {
								debug = '';
							} else {
								debug = localStorage.getItem('debug');
							};
							var localDB3 = new PouchDB(delete_checked_records_table + debug);
							//alert(delete_checked_records_table + debug)
							var remote_couchdb = localStorage.getItem('remote_couchdb');
							var remoteDB = new PouchDB(remote_couchdb + delete_checked_records_table + debug,  {skip_setup: true});
							//alert(remote_couchdb + delete_checked_records_table + debug,  {skip_setup: true})
							localDB3.sync(remoteDB).on('complete', (info) => { 
								/*var table = $('#example').DataTable();
								table.row($(clickedBtn).closest('tr')).remove().draw();
					    		$('#deletemodal').modal('hide');*/
							}).on('error', function (err) {
					  			// error while replicating
					  			alert('alert delete record ' + delete_checked_records_table + ': ' + JSON.stringify(err));
					  			window.location = 'index.html';
					  		});
						}
					});
			  	}
			});
		});	
		array_checked_records_count--
		delete_checked_records(array_checked_records_count)
	}
}

