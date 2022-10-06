function chargement_des_tables_d_importation() {
	showConnexionStatus();
	
    var table = searchParams.get('table');
    
    if (table != "_ipg_guinee") {
    	chargement_des_tables_de_reference(table);
    }
}

function chargement_des_tables_de_reference(table) {

	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
			
	var nom_equipe;
	if ((table == '_astre_guinee') || (table == '_astre_congo') || (table == '_astre_gabon') || (table == '_astre_transvihmi_guinee')) {
		var site = 'site' + table;
		var pays = 'pays' + table;
		var lieu_collecte = 'lieu_collecte' + table;
		var lieu_capture = 'lieu_capture' + table;
		var methode_capture = 'methode_capture' + table;
		var espece = 'espece' + table;
		var activite_humaine = 'activite_humaine' + table;
		var couleur_pelage_dorsal = 'couleur_pelage_dorsal' + table;
		var couleur_pelage_ventral = 'couleur_pelage_ventral' + table;
		var tables_references = 
			[site, pays, lieu_collecte, lieu_capture, methode_capture, espece, activite_humaine, couleur_pelage_dorsal, couleur_pelage_ventral];
	} else if ((table == '_transvihmi_guinee') || (table == '_transvihmi_cameroun') || (table == '_transvihmi_rdc')
				|| (table == '_mivegec')) {
		var site = 'site' + table;
		var pays = 'pays' + table;
		var lieu_collecte = 'lieu_collecte' + table;
		var lieu_capture = 'lieu_capture' + table;
		var methode_capture = 'methode_capture' + table;
		var espece = 'espece' + table;
		var activite_humaine = 'activite_humaine' + table;
		var espece_animal = 'espece_animal' + table;
		var preleve_chez = 'preleve_chez' + table;
		var methode_chasse = 'methode_chasse' + table;
		var destination = 'destination' + table;
		var type_animal = 'type_animal' + table;
		var etat_carcasse_animal = 'etat_carcasse_animal' + table;
		var qualite_echantillon = 'qualite_echantillon' + table;
		var endroit_prelevement = 'endroit_prelevement' + table;
		var couleur_pelage_dorsal = 'couleur_pelage_dorsal' + table;
		var couleur_pelage_ventral = 'couleur_pelage_ventral' + table;
		var tables_references =  
			[site, pays, lieu_collecte, lieu_capture, methode_capture, espece, activite_humaine,
			 espece_animal, preleve_chez, methode_chasse, destination, type_animal, etat_carcasse_animal,
			 qualite_echantillon, endroit_prelevement, couleur_pelage_dorsal, couleur_pelage_ventral];
	};
	
	
	if ((table != '_mivegec_congo') && (table != '_mivegec_gabon') ) {
	  var tables_references_count = tables_references.length;
	  load_tables(tables_references_count);
	}
	
	function load_tables(i) {
		if (i > 0) {
			if (localStorage.getItem('web') === 'oui') {
				var remote_couchdb = localStorage.getItem('remote_couchdb');
				var DB = new PouchDB(remote_couchdb + tables_references[i-1] + debug);
			} else {
				var DB = new PouchDB(tables_references[i-1] + debug);
			};
			DB.allDocs({  		
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				if (typeof(JSON.stringify(result)) != "undefined"){  
					console.log(tables_references[i-1] + 'TablesData ok');
			    	nomTablesData = tables_references[i-1] + 'TablesData';
					localStorage[nomTablesData] = JSON.stringify(result);
					return load_tables(i-1)
			    };
			}).catch(function (err) {
				console.log(err);
			});
		}
	}
	/*if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'site' + nom_equipe + debug);
	} else {
		var DB = new PouchDB('site' + nom_equipe + debug);
	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
			console.log('siteTablesData ok');
	    	localStorage['siteTablesData'] = JSON.stringify(result);
	    };
	}).catch(function (err) {
		console.log(err);
	});

	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'pays' + nom_equipe + debug);
	} else {
		var DB = new PouchDB('pays' + nom_equipe + debug);
	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
			console.log('paysTablesData ok');
	    	localStorage['paysTablesData'] = JSON.stringify(result);
	    };
	}).catch(function (err) {
		console.log(err);
	});
	
	if ((table == 'chauves_souris_capturees_astre') || (table == 'chauves_souris_capturees_mivegec') ||
		(table == 'chauves_souris_capturees_transvihmi') || (table == 'chauves_souris_non_invasives_astre') ||
		(table == 'chauves_souris_non_invasives_transvihmi') || (table == 'chauves_souris_non_invasives_mivegec')) {
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'espece' + nom_equipe + debug);
		} else {
			var DB = new PouchDB('espece' + nom_equipe + debug);
		};
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		   		localStorage['especeTablesData'] = JSON.stringify(result);
		   		var especeTablesData = JSON.parse(localStorage.getItem('especeTablesData'));
		   	};
		}).catch(function (err) {
			console.log(err);
		});
	} else if ((table == 'viande_de_brousse_mivegec') || (table == 'viande_de_brousse_transvihmi')) {
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'espece_animal' + nom_equipe + debug);
		} else {
			var DB = new PouchDB('espece_animal' + nom_equipe + debug);
		};
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		   		localStorage['espece_animalTablesData'] = JSON.stringify(result);
		   		var especeTablesData = JSON.parse(localStorage.getItem('espece_animalTablesData'));
		   	};
		}).catch(function (err) {
			console.log(err);
		});
	}
		
	
	if ((table == 'chauves_souris_capturees_astre') || (table == 'chauves_souris_capturees_mivegec') ||
	   (table == 'chauves_souris_capturees_transvihmi')) {
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'lieu_capture' + nom_equipe + debug);
		} else {
			var DB = new PouchDB('lieu_capture' + nom_equipe + debug);
		};
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		    	localStorage['lieu_captureTablesData'] = JSON.stringify(result);
		    }
		}).catch(function (err) {
			console.log(err);
		});
	} else {
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'lieu_collecte' + nom_equipe + debug);
		} else {
			var DB = new PouchDB('lieu_collecte' + nom_equipe + debug);
		};
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		    	localStorage['lieu_collecteTablesData'] = JSON.stringify(result);
		    }
		}).catch(function (err) {
			console.log(err);
		});
	}
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'environnement' + nom_equipe + debug);
	} else {
		var DB = new PouchDB('environnement' + nom_equipe + debug);
	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
			localStorage['environnementTablesData'] = JSON.stringify(result);
	    }
	}).catch(function (err) {
		console.log(err);
	});
	 
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'methode_capture' + nom_equipe + debug);
	} else {
		var DB = new PouchDB('methode_capture' + nom_equipe + debug);
	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	localStorage['methode_captureTablesData'] = JSON.stringify(result);
	    }
	}).catch(function (err) {
		console.log(err);
	});
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'preleve_chez' + nom_equipe + debug);
	} else {
		var DB = new PouchDB('preleve_chez' + nom_equipe + debug);
	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	localStorage['preleve_chezTablesData'] = JSON.stringify(result);
	    }
	}).catch(function (err) {
		console.log(err);
	});
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'methode_chasse' + nom_equipe + debug);
	} else {
		var DB = new PouchDB('methode_chasse' + nom_equipe + debug);
	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	localStorage['methode_chasseTablesData'] = JSON.stringify(result);
	    }
	}).catch(function (err) {
		console.log(err);
	});
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'destination' + nom_equipe + debug);
	} else {
		var DB = new PouchDB('destination' + nom_equipe + debug);
	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	localStorage['destinationTablesData'] = JSON.stringify(result);
	    }
	}).catch(function (err) {
		console.log(err);
	});
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'type_animal' + nom_equipe + debug);
	} else {
		var DB = new PouchDB('type_animal' + nom_equipe + debug);
	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	localStorage['type_animalTablesData'] = JSON.stringify(result);
	    }
	}).catch(function (err) {
		console.log(err);
	});
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'etat_carcasse_animal' + nom_equipe + debug);
	} else {
		var DB = new PouchDB('etat_carcasse_animal' + nom_equipe + debug);
	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	localStorage['etat_carcasse_animalTablesData'] = JSON.stringify(result);
	    }
	}).catch(function (err) {
		console.log(err);
	});
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'qualite_echantillon' + nom_equipe + debug);
	} else {
		var DB = new PouchDB('qualite_echantillon' + nom_equipe + debug);
	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	localStorage['qualite_echantillonTablesData'] = JSON.stringify(result);
	    }
	}).catch(function (err) {
		console.log(err);
	});
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'endroit_prelevement' + nom_equipe + debug);
	} else {
		var DB = new PouchDB('endroit_prelevement' + nom_equipe + debug);
	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	localStorage['endroit_prelevementTablesData'] = JSON.stringify(result);
	    }
	}).catch(function (err) {
		console.log(err);
	});*/
	
}