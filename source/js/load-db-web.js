var step = 0;
var width = 0;

var remote_couchdb = localStorage.getItem('remote_couchdb');
var code_equipe = localStorage.getItem('code_equipe');
var nom_pays = localStorage.getItem('nom_pays');

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

show_infos();

/*var remoteDB_chauves_souris_capturees_transvihmi = new PouchDB(remote_couchdb + 'chauves_souris_capturees_transvihmi' + debug, {skip_setup: true});
var remoteDB_chauves_souris_capturees_mivegec = new PouchDB(remote_couchdb + 'chauves_souris_capturees_mivegec' + debug, {skip_setup: true});
var remoteDB_chauves_souris_capturees_astre = new PouchDB(remote_couchdb + 'chauves_souris_capturees_astre' + debug, {skip_setup: true});

var remoteDB_chauves_souris_non_invasives_transvihmi = new PouchDB(remote_couchdb + 'chauves_souris_non_invasives_transvihmi' + debug, {skip_setup: true});
var remoteDB_chauves_souris_non_invasives_mivegec = new PouchDB(remote_couchdb + 'chauves_souris_non_invasives_mivegec' + debug, {skip_setup: true});
var remoteDB_chauves_souris_non_invasives_astre = new PouchDB(remote_couchdb + 'chauves_souris_non_invasives_astre' + debug, {skip_setup: true});

var remoteDB_viande_de_brousse_mivegec = new PouchDB(remote_couchdb + 'viande_de_brousse_mivegec' + debug, {skip_setup: true});
var remoteDB_viande_de_brousse_transvihmi = new PouchDB(remote_couchdb + 'viande_de_brousse_transvihmi' + debug, {skip_setup: true});

var remoteDB_site_transvihmi = new PouchDB(remote_couchdb + 'site_transvihmi' + debug, {skip_setup: true});
var remoteDB_site_mivegec = new PouchDB(remote_couchdb + 'site_mivegec' + debug, {skip_setup: true});
var remoteDB_site_astre = new PouchDB(remote_couchdb + 'site_astre' + debug, {skip_setup: true});

var remoteDB_donnees_mission_transvihmi = new PouchDB(remote_couchdb + 'donnees_mission_transvihmi' + debug, {skip_setup: true});
var remoteDB_donnees_mission_mivegec = new PouchDB(remote_couchdb + 'donnees_mission_mivegec' + debug, {skip_setup: true});
var remoteDB_donnees_mission_astre = new PouchDB(remote_couchdb + 'donnees_mission_astre' + debug, {skip_setup: true});

var remoteDB_donnees_journalieres_transvihmi = new PouchDB(remote_couchdb + 'donnees_journalieres_transvihmi' + debug, {skip_setup: true});
var remoteDB_donnees_journalieres_mivegec = new PouchDB(remote_couchdb + 'donnees_journalieres_mivegec' + debug, {skip_setup: true});
var remoteDB_donnees_journalieres_astre = new PouchDB(remote_couchdb + 'donnees_journalieres_astre' + debug, {skip_setup: true});

var counter_chauves_souris_capturees_transvihmi = 0;
var counter_chauves_souris_capturees_mivegec = 0;
var counter_chauves_souris_non_invasives_astre = 0;
var counter_chauves_souris_non_invasives_mivegec = 0;
var counter_viande_de_brousse_transvihmi = 0;
var counter_viande_de_brousse_mivegec = 0;
var counter_chauves_souris_capturees_astre = 0;
var counter_chauves_souris_non_invasives_astre = 0;
var counter_site_transvihmi = 0;
var counter_site_mivegec = 0;
var counter_site_astre = 0;
var counter_donnees_mission_transvihmi = 0;
var counter_donnees_mission_mivegec = 0;
var counter_donnees_mission_astre = 0;
var counter_donnees_journalieres_transvihmi = 0;
var counter_donnees_journalieres_mivegec = 0;
var counter_donnees_journalieres_astre = 0;

if ((code_equipe === '1') || (debug !== '')) {
    console.log('---chauves_souris_capturees_transvihmi---');
	remoteDB_chauves_souris_capturees_transvihmi.info().then((infos) => {
		localStorage['chauves_souris_capturees_transvihmi_count'] = infos.doc_count;
		console.log('doc_chauves_souris_capturees_transvihmi_count', localStorage.getItem('chauves_souris_capturees_transvihmi_count')); 
		getCount_chauves_souris_capturees_mivegec();
	}).catch((error) => {
		console.error(error);
	});
} else {
	getCount_chauves_souris_capturees_mivegec();
};

function getCount_chauves_souris_capturees_mivegec() {
	if ((code_equipe === '2') || (debug !== '')) {
		console.log('---chauves_souris_capturees_mivegec---');
		remoteDB_chauves_souris_capturees_mivegec.info().then((infos) => {
			localStorage['chauves_souris_capturees_mivegec_count'] = infos.doc_count;
			console.log('doc_chauves_souris_capturees_mivegec_count', localStorage.getItem('chauves_souris_capturees_mivegec_count')); 
			getCount_chauves_souris_capturees_astre();
		}).catch((error) => {
			console.error(error);
		});
	} else {
		getCount_chauves_souris_capturees_astre();
	};
};

function getCount_chauves_souris_capturees_astre() {
	if ((code_equipe === '6') || (debug !== '')) {
		console.log('---chauves_souris_capturees_astre---');
		remoteDB_chauves_souris_capturees_astre.info().then((infos) => {
			localStorage['chauves_souris_capturees_astre_count'] = infos.doc_count;
			console.log('doc_chauves_souris_capturees_astre_count', localStorage.getItem('chauves_souris_capturees_astre_count')); 
			getCount_chauves_souris_non_invasives_transvihmi();
		}).catch((error) => {
			console.error(error);
		});
	} else {
		getCount_chauves_souris_non_invasives_transvihmi();
	};
};

function getCount_chauves_souris_non_invasives_transvihmi() {
	if ((code_equipe === '1') || (debug !== '')) {
		console.log('---chauves_souris_non_invasives_transvihmi---');
		remoteDB_chauves_souris_non_invasives_transvihmi.info().then((infos) => {
			localStorage['chauves_souris_non_invasives_transvihmi_count'] = infos.doc_count;
			console.log('doc_chauves_souris_non_invasives_transvihmi_count', localStorage.getItem('chauves_souris_non_invasives_transvihmi_count')); 
			getCount_chauves_souris_non_invasives_mivegec();
		}).catch((error) => {
			console.error(error);
		});
	} else {
		getCount_chauves_souris_non_invasives_mivegec();
	};
};

function getCount_chauves_souris_non_invasives_mivegec() {
	if ((code_equipe === '2') || (debug !== '')) {
		console.log('---chauves_souris_non_invasives_mivegec---');
		remoteDB_chauves_souris_non_invasives_mivegec.info().then((infos) => {
			localStorage['chauves_souris_non_invasives_mivegec_count'] = infos.doc_count;
			console.log('doc_chauves_souris_non_invasives_mivegec_count', localStorage.getItem('chauves_souris_non_invasives_mivegec_count')); 
			getCount_chauves_souris_non_invasives_astre();
		}).catch((error) => {
			console.error(error);
		});
	} else {
		getCount_chauves_souris_non_invasives_astre();
	};
};

function getCount_chauves_souris_non_invasives_astre() {
	if ((code_equipe === '6') || (debug !== '')) {
		console.log('---chauves_souris_non_invasives_astre---');
		remoteDB_chauves_souris_non_invasives_astre.info().then((infos) => {
			localStorage['chauves_souris_non_invasives_astre_count'] = infos.doc_count;
			console.log('doc_chauves_souris_non_invasives_astre_count', localStorage.getItem('chauves_souris_non_invasives_astre_count')); 
			getCount_viande_de_brousse_transvihmi();
		}).catch((error) => {
			console.error(error);
		});
	} else {
		getCount_viande_de_brousse_transvihmi();
	};
};

function getCount_viande_de_brousse_transvihmi() {
	if ((code_equipe === '2') || (debug !== '')) {
		console.log('---viande_de_brousse_transvihmi---');
		remoteDB_viande_de_brousse_transvihmi.info().then((infos) => {
			localStorage['viande_de_brousse_transvihmi_count'] = infos.doc_count;
			console.log('doc_viande_de_brousse_transvihmi_count', localStorage.getItem('viande_de_brousse_transvihmi_count')); 
			getCount_chauves_souris_non_invasives_astre();
		}).catch((error) => {
			console.error(error);
		});
	} else {
		getCount_chauves_souris_non_invasives_astre();
	};
};

function getCount_viande_de_brousse_transvihmi() {
	if ((code_equipe === '1') || (debug !== '')) {
		console.log('---viande_de_brousse_transvihmi---');
		remoteDB_viande_de_brousse_transvihmi.info().then((infos) => {
			localStorage['viande_de_brousse_transvihmi_count'] = infos.doc_count;
			console.log('doc_viande_de_brousse_transvihmi_count', localStorage.getItem('viande_de_brousse_transvihmi_count')); 
			getCount_viande_de_brousse_mivegec();
		}).catch((error) => {
			console.error(error);
		});
	} else {
		getCount_viande_de_brousse_mivegec();
	};
};

function getCount_viande_de_brousse_mivegec() {
	if ((code_equipe === '2') || (debug !== '')) {
		console.log('---viande_de_brousse_mivegec---');
		remoteDB_viande_de_brousse_mivegec.info().then((infos) => {
			localStorage['viande_de_brousse_mivegec_count'] = infos.doc_count;
			console.log('doc_viande_de_brousse_mivegec_count', localStorage.getItem('viande_de_brousse_mivegec_count')); 
			getCount_site_transvihmi();
		}).catch((error) => {
			console.error(error);
		});
	} else {
		getCount_site_transvihmi();
	};
};

function getCount_site_transvihmi() {
	if ((code_equipe === '6') || (debug !== '')) {
		console.log('---site_transvihmi---');
		remoteDB_site_transvihmi.info().then((infos) => {
			localStorage['site_transvihmi_count'] = infos.doc_count;
			console.log('doc_site_transvihmi_count', localStorage.getItem('site_transvihmi_count')); 
			getCount_site_mivegec();
		}).catch((error) => {
			console.error(error);
		});
	} else {
		getCount_site_mivegec();
	};
};

function getCount_site_mivegec() {
	if ((code_equipe === '6') || (debug !== '')) {
		console.log('---site_mivegec---');
		remoteDB_site_mivegec.info().then((infos) => {
			localStorage['site_mivegec_count'] = infos.doc_count;
			console.log('doc_site_mivegec_count', localStorage.getItem('site_mivegec_count')); 
			getCount_site_astre();
		}).catch((error) => {
			console.error(error);
		});
	} else {
		getCount_site_astre();
	};
};

function getCount_site_astre() {
	if ((code_equipe === '6') || (debug !== '')) {
		console.log('---site_astre---');
		remoteDB_site_astre.info().then((infos) => {
			localStorage['site_astre_count'] = infos.doc_count;
			console.log('doc_site_astre_count', localStorage.getItem('site_astre_count')); 
			getCount_donnees_mission_transvihmi();
		}).catch((error) => {
			console.error(error);
		});
	} else {
		getCount_donnees_mission_transvihmi();
	};
};

function getCount_donnees_mission_transvihmi() {
	if ((code_equipe === '1') || (debug !== '')) {
		console.log('---donnees_mission_transvihmi---');
		remoteDB_donnees_mission_transvihmi.info().then((infos) => {
			localStorage['donnees_mission_transvihmi_count'] = infos.doc_count;
			console.log('doc_donnees_mission_transvihmi_count', localStorage.getItem('donnees_mission_transvihmi_count')); 
			getCount_donnees_mission_mivegec();
		}).catch((error) => {
			console.error(error);
		});
	} else {
		getCount_donnees_mission_mivegec();
	};
};

function getCount_donnees_mission_mivegec() {
	if ((code_equipe === '2') || (debug !== '')) {
		console.log('---donnees_mission_mivegec---');
		remoteDB_donnees_mission_mivegec.info().then((infos) => {
			localStorage['donnees_mission_mivegec_count'] = infos.doc_count;
			console.log('doc_donnees_mission_mivegec_count', localStorage.getItem('donnees_mission_mivegec_count')); 
			getCount_donnees_mission_astre();
		}).catch((error) => {
			console.error(error);
		});
	} else {
		getCount_donnees_mission_astre();
	};
};

function getCount_donnees_mission_astre() {
	if ((code_equipe === '6') || (debug !== '')) {
		console.log('---donnees_mission_astre---');
		remoteDB_donnees_mission_astre.info().then((infos) => {
			localStorage['donnees_mission_astre_count'] = infos.doc_count;
			console.log('doc_donnees_mission_astre_count', localStorage.getItem('donnees_mission_astre_count')); 
			getCount_donnees_journalieres_transvihmi();
		}).catch((error) => {
			console.error(error);
		});
	} else {
		getCount_donnees_journalieres_transvihmi();
	};
};

function getCount_donnees_journalieres_transvihmi() {
	if ((code_equipe === '1') || (debug !== '')) {
		console.log('---donnees_journalieres_transvihmi---');
		remoteDB_donnees_journalieres_transvihmi.info().then((infos) => {
			localStorage['donnees_journalieres_transvihmi_count'] = infos.doc_count;
			console.log('doc_donnees_journalieres_transvihmi_count', localStorage.getItem('donnees_journalieres_transvihmi_count')); 
			getCount_donnees_journalieres_mivegec();
		}).catch((error) => {
			console.error(error);
		});
	} else {
		getCount_donnees_journalieres_mivegec();
	};
};

function getCount_donnees_journalieres_mivegec() {
	if ((code_equipe === '2') || (debug !== '')) {
		console.log('---donnees_journalieres_mivegec---');
		remoteDB_donnees_journalieres_mivegec.info().then((infos) => {
			localStorage['donnees_journalieres_mivegec_count'] = infos.doc_count;
			console.log('doc_donnees_journalieres_mivegec_count', localStorage.getItem('donnees_journalieres_mivegec_count')); 
			getCount_donnees_journalieres_astre();
		}).catch((error) => {
			console.error(error);
		});
	} else {
		getCount_donnees_journalieres_astre();
	};
};

function getCount_donnees_journalieres_astre() {
	if ((code_equipe === '6') || (debug !== '')) {
		console.log('---donnees_journalieres_astre---');
		remoteDB_donnees_journalieres_astre.info().then((infos) => {
			localStorage['donnees_journalieres_astre_count'] = infos.doc_count;
			console.log('doc_donnees_journalieres_astre_count', localStorage.getItem('donnees_journalieres_astre_count')); 
			//getCount_total();
			loadjs('js/db_loaded.js');
		}).catch((error) => {
			console.error(error);
		});
	} else {
		//getCount_total();
		loadjs('js/db_loaded.js');
	};
};*/

var tables_principales = [];
if  (debug !== '') {
	tables_principales = ['chauves_souris_capturees_transvihmi_guinee_debug', 'chauves_souris_non_invasives_transvihmi_guinee_debug',
		  'viande_de_brousse_transvihmi_guinee_debug', 'site_transvihmi_guinee_debug', 
		  'donnees_mission_transvihmi_guinee_debug', 'donnees_journalieres_transvihmi_guinee_debug',
		  'chauves_souris_capturees_transvihmi_cameroun_debug', 'chauves_souris_non_invasives_transvihmi_cameroun_debug',
		  'viande_de_brousse_transvihmi_cameroun_debug', 'site_transvihmi_cameroun_debug', 
		  'donnees_mission_transvihmi_cameroun_debug', 'donnees_journalieres_transvihmi_cameroun_debug',
		  'chauves_souris_capturees_transvihmi_rdc_debug', 'chauves_souris_non_invasives_transvihmi_rdc_debug',
		  'viande_de_brousse_transvihmi_rdc_debug', 'site_transvihmi_rdc_debug', 
		  'donnees_mission_transvihmi_rdc_debug', 'donnees_journalieres_transvihmi_rdc_debug',
		  'chauves_souris_capturees_astre_guinee_debug', 'chauves_souris_non_invasives_astre_guinee_debug',
		  'site_astre_guinee_debug', 
		  'donnees_mission_astre_guinee_debug', 'donnees_journalieres_astre_guinee_debug',
		  'chauves_souris_capturees_astre_congo_debug', 'chauves_souris_non_invasives_astre_congo_debug',
		  'site_astre_congo_debug', 
		  'donnees_mission_astre_congo_debug', 'donnees_journalieres_astre_congo_debug',
		  'chauves_souris_capturees_astre_gabon_debug', 'chauves_souris_non_invasives_astre_gabon_debug',
		  'site_astre_gabon_debug', 
		  'donnees_mission_astre_gabon_debug', 'donnees_journalieres_astre_gabon_debug',
		  'chauves_souris_capturees_mivegec_debug', 'chauves_souris_non_invasives_mivegec_debug',
		  'site_mivegec_debug', 
		  'donnees_mission_mivegec_debug', 'donnees_journalieres_mivegec_debug',
		  'chauves_souris_capturees_astre_transvihmi_guinee_debug', 'chauves_souris_non_invasives_astre_transvihmi_guinee_debug',
		  'caracterisations_grottes_astre_transvihmi_guinee_debug', 'cameras_trap_astre_transvihmi_guinee_debug',
		  'donnees_mission_astre_transvihmi_guinee_debug', 'donnees_journalieres_astre_transvihmi_guinee_debug',
		  'faune_astre_transvihmi_guinee_debug',
		  'animals_mivegec_gabon_debug', 'chauves_souris_organes_mivegec_congo_debug', 'chauves_souris_guano_mivegec_congo_debug'];
} else if ((code_equipe === '1') && (nom_pays == 'guinee')) {
	tables_principales = ['chauves_souris_capturees_transvihmi_guinee', 'chauves_souris_non_invasives_transvihmi_guinee',
						  'viande_de_brousse_guinee_transvihmi_guinee', 'site_transvihmi_guinee', 
						  'donnees_mission_transvihmi_guinee', 'donnees_journalieres_transvihmi_guinee',
						  'donnees_mission_mivegec', 'donnees_journalieres_mivegec',
						  'chauves_souris_capturees_astre_transvihmi_guinee', 'chauves_souris_non_invasives_astre_transvihmi_guinee',
						  'caracterisations_grottes_astre_transvihmi_guinee', 'cameras_trap_astre_transvihmi_guinee',
						  'donnees_mission_astre_transvihmi_guinee', 'donnees_journalieres_astre_transvihmi_guinee',
						  'faune_astre_transvihmi_guinee'];
} else if ((code_equipe === '1') && (nom_pays == 'cameroun')) {
			tables_principales = ['chauves_souris_capturees_transvihmi_cameroun', 'chauves_souris_non_invasives_transvihmi_cameroun',
				  'viande_de_brousse_transvihmi_cameroun', 'site_transvihmi_cameroun', 
				  'donnees_mission_transvihmi_cameroun', 'donnees_journalieres_transvihmi_cameroun'];
} else if ((code_equipe === '1') && (nom_pays == 'rdc')) {
	tables_principales = ['chauves_souris_capturees_transvihmi_rdc', 'chauves_souris_non_invasives_transvihmi_rdc',
		  'viande_de_brousse_transvihmi_rdc', 'site_transvihmi_rdc', 
		  'donnees_mission_transvihmi_rdc', 'donnees_journalieres_transvihmi_rdc'];
} else if ((code_equipe === '1') && (nom_pays == 'tous')) {
	tables_principales = ['chauves_souris_capturees_transvihmi_guinee', 'chauves_souris_non_invasives_transvihmi_guinee',
		  'viande_de_brousse_transvihmi_guinee', 'site_transvihmi_guinee', 
		  'donnees_mission_transvihmi_guinee', 'donnees_journalieres_transvihmi_guinee',
		  'chauves_souris_capturees_transvihmi_cameroun', 'chauves_souris_non_invasives_transvihmi_cameroun',
		  'viande_de_brousse_transvihmi_cameroun', 'site_transvihmi_cameroun', 
		  'donnees_mission_transvihmi_cameroun', 'donnees_journalieres_transvihmi_cameroun',
		  'chauves_souris_capturees_transvihmi_rdc', 'chauves_souris_non_invasives_transvihmi_rdc',
		  'viande_de_brousse_transvihmi_rdc', 'site_transvihmi_rdc', 
		  'donnees_mission_transvihmi_rdc', 'donnees_journalieres_transvihmi_rdc',
		  'chauves_souris_capturees_astre_transvihmi_guinee', 'chauves_souris_non_invasives_astre_transvihmi_guinee',
		  'caracterisations_grottes_astre_transvihmi_guinee', 'cameras_trap_astre_transvihmi_guinee',
		  'donnees_mission_astre_transvihmi_guinee', 'donnees_journalieres_astre_transvihmi_guinee',
		  'faune_astre_transvihmi_guinee'];
} else if ((code_equipe === '2') && (nom_pays == 'tous')) {
	tables_principales = ['animals_mivegec_gabon', 'chauves_souris_organes_mivegec_congo', 'chauves_souris_guano_mivegec_congo']; 
} else if ((code_equipe === '5') && (nom_pays == 'tous')) {
	tables_principales = ['animals_ipg_guinee', 'animals_ipg_guinee_2', 'animals_ipg_guinee_3', 'animals_ipg_guinee_4', 'animals_ipg_guinee_5',];
} else if ((code_equipe === '6') && (nom_pays == 'guinee')) {
	tables_principales = ['chauves_souris_capturees_astre_guinee', 'chauves_souris_non_invasives_astre_guinee', 
						  'site_astre_guinee', 'donnees_mission_astre_guinee', 'donnees_journalieres_astre_guinee',
						  'chauves_souris_capturees_astre_transvihmi_guinee', 'chauves_souris_non_invasives_astre_transvihmi_guinee',
						  'caracterisations_grottes_astre_transvihmi_guinee', 'cameras_trap_astre_transvihmi_guinee',
						  'donnees_mission_astre_transvihmi_guinee', 'donnees_journalieres_astre_transvihmi_guinee',
						  'faune_astre_transvihmi_guinee'];
} else if ((code_equipe === '6') && (nom_pays == 'congo')) {
	tables_principales = ['chauves_souris_capturees_astre_congo', 'chauves_souris_non_invasives_astre_congo', 
		  'site_astre_congo', 'donnees_mission_astre_congo', 'donnees_journalieres_astre_congo'];
} else if ((code_equipe === '6') && (nom_pays == 'gabon')) {
	tables_principales = ['chauves_souris_capturees_astre_gabon', 'chauves_souris_non_invasives_astre_gabon', 
		  'site_astre_gabon', 'donnees_mission_astre_gabon', 'donnees_journalieres_astre_gabon'];
} else if ((code_equipe === '6') && (nom_pays == 'tous')) {
	tables_principales = ['chauves_souris_capturees_astre_guinee', 'chauves_souris_non_invasives_astre_guinee', 
		  'site_astre_guinee', 'donnees_mission_astre_guinee', 'donnees_journalieres_astre_guinee',
		  'chauves_souris_capturees_astre_congo', 'chauves_souris_non_invasives_astre_congo', 
		  'site_astre_congo', 'donnees_mission_astre_congo', 'donnees_journalieres_astre_congo',
		  'chauves_souris_capturees_astre_gabon', 'chauves_souris_non_invasives_astre_gabon', 
		  'site_astre_gabon', 'donnees_mission_astre_gabon', 'donnees_journalieres_astre_gabon',
		  'chauves_souris_capturees_astre_transvihmi_guinee', 'chauves_souris_non_invasives_astre_transvihmi_guinee',
		  'caracterisations_grottes_astre_transvihmi_guinee', 'cameras_trap_astre_transvihmi_guinee',
		  'donnees_mission_astre_transvihmi_guinee', 'donnees_journalieres_astre_transvihmi_guinee',
		  'faune_astre_transvihmi_guinee'];
}

var tables_principales_count = tables_principales.length;
load_tables_count(tables_principales_count);

function load_tables_count(i) {
	if (i > 0) {
		var localDB = new PouchDB(tables_principales[i-1] /*+ debug*/);
		var remoteDB = new PouchDB(remote_couchdb + tables_principales[i-1] /*+ debug*/, {skip_setup: true});
		remoteDB.info().then((infos) => {
			var table_principale_count = tables_principales[i-1] + '_count';
			localStorage[table_principale_count] = infos.doc_count;
			//alert(table_principales[i-1] + ' ' + localStorage[table_principale_count])
				/*if (infos.doc_count > 20) {
					//alert(infos.doc_count);
					tabCount[i-1] = infos.doc_count;
				} else {
					tabCount[i-1] = 20;
				};*/
				return load_tables_count(i-1)
		}).catch((error) => {
			console.error(error + ' : ' + tables_principales[i-1]);
			localDB.info().then((infos) => {
				var table_principale_count = tables_principales[i-1] + '_count';
				localStorage[table_principale_count] = infos.doc_count;
				/*if (infos.doc_count > 20) {
					tabCount[i-1] = infos.doc_count;
				} else {
					tabCount[i-1] = 20;
				};*/
				return load_tables_count(i-1)
			}).catch((error) => {
				console.error(error);
			});
		});
	} else {
		//tabCount[i-1] = 20;
		//loadCount_total();
		loadjs('js/db_loaded.js');
	};
}
