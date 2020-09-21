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
disable_li();

show_progress_bar();

var progressbar_count = 0;

var localDB_chauves_souris_capturees_transvihmi_guinee = new PouchDB('chauves_souris_capturees_transvihmi_guinee' + debug);
var remoteDB_chauves_souris_capturees_transvihmi_guinee = new PouchDB(remote_couchdb + 'chauves_souris_capturees_transvihmi_guinee' + debug, {skip_setup: true});
var localDB_chauves_souris_capturees_transvihmi_cameroun = new PouchDB('chauves_souris_capturees_transvihmi_cameroun' + debug);
var remoteDB_chauves_souris_capturees_transvihmi_cameroun = new PouchDB(remote_couchdb + 'chauves_souris_capturees_transvihmi_cameroun' + debug, {skip_setup: true});
var localDB_chauves_souris_capturees_mivegec = new PouchDB('chauves_souris_capturees_mivegec' + debug);
var remoteDB_chauves_souris_capturees_mivegec = new PouchDB(remote_couchdb + 'chauves_souris_capturees_mivegec' + debug, {skip_setup: true});
var localDB_chauves_souris_capturees_astre = new PouchDB('chauves_souris_capturees_astre' + debug);
var remoteDB_chauves_souris_capturees_astre = new PouchDB(remote_couchdb + 'chauves_souris_capturees_astre' + debug, {skip_setup: true});

var localDB_chauves_souris_non_invasives_transvihmi = new PouchDB('chauves_souris_non_invasives_transvihmi' + debug);
var remoteDB_chauves_souris_non_invasives_transvihmi = new PouchDB(remote_couchdb + 'chauves_souris_non_invasives_transvihmi' + debug, {skip_setup: true});
var localDB_chauves_souris_non_invasives_mivegec = new PouchDB('chauves_souris_non_invasives_mivegec' + debug);
var remoteDB_chauves_souris_non_invasives_mivegec = new PouchDB(remote_couchdb + 'chauves_souris_non_invasives_mivegec' + debug, {skip_setup: true});
var localDB_chauves_souris_non_invasives_astre = new PouchDB('chauves_souris_non_invasives_astre' + debug);
var remoteDB_chauves_souris_non_invasives_astre = new PouchDB(remote_couchdb + 'chauves_souris_non_invasives_astre' + debug, {skip_setup: true});

var localDB_viande_de_brousse_mivegec = new PouchDB('viande_de_brousse_mivegec' + debug);
var remoteDB_viande_de_brousse_mivegec = new PouchDB(remote_couchdb + 'viande_de_brousse_mivegec' + debug, {skip_setup: true});
var localDB_viande_de_brousse_transvihmi = new PouchDB('viande_de_brousse_transvihmi' + debug);
var remoteDB_viande_de_brousse_transvihmi = new PouchDB(remote_couchdb + 'viande_de_brousse_transvihmi' + debug, {skip_setup: true});

var localDB_site_transvihmi = new PouchDB('site_transvihmi' + debug);
var remoteDB_site_transvihmi = new PouchDB(remote_couchdb + 'site_transvihmi' + debug, {skip_setup: true});
var localDB_site_mivegec = new PouchDB('site_mivegec' + debug);
var remoteDB_site_mivegec = new PouchDB(remote_couchdb + 'site_mivegec' + debug, {skip_setup: true});
var localDB_site_astre = new PouchDB('site_astre' + debug);
var remoteDB_site_astre = new PouchDB(remote_couchdb + 'site_astre' + debug, {skip_setup: true});

var localDB_donnees_mission_transvihmi = new PouchDB('donnees_mission_transvihmi' + debug);
var remoteDB_donnees_mission_transvihmi = new PouchDB(remote_couchdb + 'donnees_mission_transvihmi' + debug, {skip_setup: true});
var localDB_donnees_mission_mivegec = new PouchDB('donnees_mission_mivegec' + debug);
var remoteDB_donnees_mission_mivegec = new PouchDB(remote_couchdb + 'donnees_mission_mivegec' + debug, {skip_setup: true});
var localDB_donnees_mission_astre = new PouchDB('donnees_mission_astre' + debug);
var remoteDB_donnees_mission_astre = new PouchDB(remote_couchdb + 'donnees_mission_astre' + debug, {skip_setup: true});

var localDB_donnees_journalieres_transvihmi = new PouchDB('donnees_journalieres_transvihmi' + debug);
var remoteDB_donnees_journalieres_transvihmi = new PouchDB(remote_couchdb + 'donnees_journalieres_transvihmi' + debug, {skip_setup: true});
var localDB_donnees_journalieres_mivegec = new PouchDB('donnees_journalieres_mivegec' + debug);
var remoteDB_donnees_journalieres_mivegec = new PouchDB(remote_couchdb + 'donnees_journalieres_mivegec' + debug, {skip_setup: true});
var localDB_donnees_journalieres_astre = new PouchDB('donnees_journalieres_astre' + debug);
var remoteDB_donnees_journalieres_astre = new PouchDB(remote_couchdb + 'donnees_journalieres_astre' + debug, {skip_setup: true});

var counter_chauves_souris_capturees_transvihmi_guinee = 0;
var counter_chauves_souris_capturees_transvihmi_cameroun = 0;
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


/*var doc_chauves_souris_capturees_transvihmi_count = 20;
var doc_chauves_souris_non_invasives_transvihmi_count = 20;
var doc_viande_de_brousse_transvihmi_count = 20;
var doc_chauves_souris_capturees_mivegec_count = 20;
var doc_chauves_souris_non_invasives_mivegec_count = 20;
var doc_viande_de_brousse_mivegec_count = 20;
var doc_chauves_souris_non_invasives_astre_count = 20;
var doc_chauves_souris_capturees_astre_count = 20;*/


var doc_chauves_souris_capturees_transvihmi_guinee_progress_count = 0;
var doc_chauves_souris_capturees_transvihmi_cameroun_progress_count = 0;
var doc_chauves_souris_non_invasives_transvihmi_progress_count = 0;
var doc_viande_de_brousse_transvihmi_progress_count = 0;
var doc_chauves_souris_capturees_mivegec_progress_count = 0;
var doc_chauves_souris_non_invasives_mivegec_progress_count = 0;
var doc_viande_de_brousse_mivegec_progress_count = 0;
var doc_chauves_souris_non_invasives_astre_progress_count = 0;
var doc_chauves_souris_capturees_astre_progress_count = 0;
var doc_site_transvihmi_progress_count = 0;
var doc_site_mivegec_progress_count = 0;
var doc_site_astre_progress_count = 0;
var doc_donnees_mission_transvihmi_progress_count = 0;
var doc_donnees_mission_mivegec_progress_count = 0;
var doc_donnees_mission_astre_progress_count = 0;
var doc_donnees_journalieres_transvihmi_progress_count = 0;
var doc_donnees_journalieres_mivegec_progress_count = 0;
var doc_donnees_journalieres_astre_progress_count = 0;

var nom_equipe;
if (code_equipe === '1') {
	nom_equipe = '_transvihmi';
} else if (code_equipe === '2') {
	nom_equipe = '_mivegec';
} else if (code_equipe === '6') {
	nom_equipe = '_astre';
};

if (((code_equipe === '1') && (nom_pays == 'guinee')) || (debug !== '')) {
    console.log('---chauves_souris_capturees_transvihmi_guinee---');
	remoteDB_chauves_souris_capturees_transvihmi_guinee.info().then((infos) => {
		localStorage['chauves_souris_capturees_transvihmi_guinee_count'] = infos.doc_count;
			if (infos.doc_count > 20) {
				doc_chauves_souris_capturees_transvihmi_guinee_progress_count = infos.doc_count;
			} else {
				doc_chauves_souris_capturees_transvihmi_guinee_progress_count = 20;
			};
			console.log('doc_chauves_souris_capturees_transvihmi_guinee_count', localStorage.getItem('chauves_souris_capturees_transvihmi_guinee_count')); 
			console.log('doc_chauves_souris_capturees_transvihmi_guinee_progress_count', doc_chauves_souris_capturees_transvihmi_guinee_progress_count);
			getCount_chauves_souris_capturees_transvihmi_cameroun();
	}).catch((error) => {
		console.error(error);
		localDB_chauves_souris_capturees_transvihmi_guinee.info().then((infos) => {
			localStorage['chauves_souris_capturees_transvihmi_guinee_count'] = infos.doc_count;
			if (infos.doc_count > 20) {
				doc_chauves_souris_capturees_transvihmi_guinee_progress_count = infos.doc_count;
			} else {
				doc_chauves_souris_capturees_transvihmi_guinee_progress_count = 20;
			};
			console.log('doc_chauves_souris_capturees_transvihmi_guinee_count', localStorage.getItem('chauves_souris_capturees_transvihmi_guinee_count')); 
			console.log('doc_chauves_souris_capturees_transvihmi_guinee_progress_count', doc_chauves_souris_capturees_transvihmi_guinee_progress_count);
			getCount_chauves_souris_capturees_transvihmi_cameroun();
		}).catch((error) => {
			console.error(error);
		});
	});
} else {
	doc_chauves_souris_capturees_transvihmi_guinee_progress_count = 20;
	getCount_chauves_souris_capturees_transvihmi_cameroun();
};

function getCount_chauves_souris_capturees_transvihmi_cameroun() {
	if (((code_equipe === '1') && (nom_pays == 'cameroun')) || (debug !== '')) {
	    console.log('---chauves_souris_capturees_transvihmi_cameroun---');
		remoteDB_chauves_souris_capturees_transvihmi_cameroun.info().then((infos) => {
			localStorage['chauves_souris_capturees_transvihmi_cameroun_count'] = infos.doc_count;
				if (infos.doc_count > 20) {
					doc_chauves_souris_capturees_transvihmi_cameroun_progress_count = infos.doc_count;
				} else {
					doc_chauves_souris_capturees_transvihmi_cameroun_progress_count = 20;
				};
				console.log('doc_chauves_souris_capturees_transvihmi_cameroun_count', localStorage.getItem('chauves_souris_capturees_transvihmi_cameroun_count')); 
				console.log('doc_chauves_souris_capturees_transvihmi_cameroun_progress_count', doc_chauves_souris_capturees_transvihmi_cameroun_progress_count);
				getCount_chauves_souris_capturees_mivegec();
		}).catch((error) => {
			console.error(error);
			localDB_chauves_souris_capturees_transvihmi_cameroun.info().then((infos) => {
				localStorage['chauves_souris_capturees_transvihmi_cameroun_count'] = infos.doc_count;
				if (infos.doc_count > 20) {
					doc_chauves_souris_capturees_transvihmi_cameroun_progress_count = infos.doc_count;
				} else {
					doc_chauves_souris_capturees_transvihmi_cameroun_progress_count = 20;
				};
				console.log('doc_chauves_souris_capturees_transvihmi_cameroun_count', localStorage.getItem('chauves_souris_capturees_transvihmi_cameroun_count')); 
				console.log('doc_chauves_souris_capturees_transvihmi_cameroun_progress_count', doc_chauves_souris_capturees_transvihmi_cameroun_progress_count);
				getCount_chauves_souris_capturees_mivegec();
			}).catch((error) => {
				console.error(error);
			});
		});
	} else {
		doc_chauves_souris_capturees_transvihmi_cameroun_progress_count = 20;
		getCount_chauves_souris_capturees_mivegec();
	};
}

function getCount_chauves_souris_capturees_mivegec() {
	if ((code_equipe === '2') || (debug !== '')) {
		console.log('---chauves_souris_capturees_mivegec---');
		remoteDB_chauves_souris_capturees_mivegec.info().then((infos) => {
			localStorage['chauves_souris_capturees_mivegec_count'] = infos.doc_count;
			if (infos.doc_count > 20) {
				doc_chauves_souris_capturees_mivegec_progress_count = infos.doc_count;
			} else {
				doc_chauves_souris_capturees_mivegec_progress_count = 20;
			};
			console.log('doc_chauves_souris_capturees_mivegec_count', localStorage.getItem('chauves_souris_capturees_mivegec_count')); 
			console.log('doc_chauves_souris_capturees_mivegec_progress_count', doc_chauves_souris_capturees_mivegec_progress_count);
			getCount_chauves_souris_capturees_astre();
		}).catch((error) => {
			console.error(error);
			localDB_chauves_souris_capturees_mivegec.info().then((infos) => {
				localStorage['chauves_souris_capturees_mivegec_count'] = infos.doc_count;
				if (infos.doc_count > 20) {
					doc_chauves_souris_capturees_mivegec_progress_count = infos.doc_count;
				} else {
					doc_chauves_souris_capturees_mivegec_progress_count = 20;
				};
				console.log('doc_chauves_souris_capturees_mivegec_count', localStorage.getItem('chauves_souris_capturees_mivegec_count')); 
				console.log('doc_chauves_souris_capturees_mivegec_progress_count', doc_chauves_souris_capturees_mivegec_progress_count);
				getCount_chauves_souris_capturees_astre();
			}).catch((error) => {
				console.error(error);
			});
		});
	} else {
		doc_chauves_souris_capturees_mivegec_progress_count = 20;
		getCount_chauves_souris_capturees_astre();
	};
};

function getCount_chauves_souris_capturees_astre() {
	if ((code_equipe === '6') || (debug !== '')) {
		console.log('---chauves_souris_capturees_astre---');
		remoteDB_chauves_souris_capturees_astre.info().then((infos) => {
			localStorage['chauves_souris_capturees_astre_count'] = infos.doc_count;
			if (infos.doc_count > 20) {
				doc_chauves_souris_capturees_astre_progress_count = infos.doc_count;
			} else {
				doc_chauves_souris_capturees_astre_progress_count = 20;
			};
			console.log('doc_chauves_souris_capturees_astre_count', localStorage.getItem('chauves_souris_capturees_astre_count')); 
			console.log('doc_chauves_souris_capturees_astre_progress_count', doc_chauves_souris_capturees_astre_progress_count);
			getCount_chauves_souris_non_invasives_transvihmi();
		}).catch((error) => {
			console.error(error);
			localDB_chauves_souris_capturees_astre.info().then((infos) => {
				localStorage['chauves_souris_capturees_astre_count'] = infos.doc_count;
				if (infos.doc_count > 20) {
					doc_chauves_souris_capturees_astre_progress_count = infos.doc_count;
				} else {
					doc_chauves_souris_capturees_astre_progress_count = 20;
				};
				console.log('doc_chauves_souris_capturees_astre_count', localStorage.getItem('chauves_souris_capturees_astre_count')); 
				console.log('doc_chauves_souris_capturees_astre_progress_count', doc_chauves_souris_capturees_astre_progress_count);
				getCount_chauves_souris_non_invasives_transvihmi();
			}).catch((error) => {
				console.error(error);
			});
		});
	} else {
		doc_chauves_souris_capturees_astre_progress_count = 20;
		getCount_chauves_souris_non_invasives_transvihmi();
	};
};

function getCount_chauves_souris_non_invasives_transvihmi() {
	if ((code_equipe === '1') || (debug !== '')) {
		console.log('---chauves_souris_non_invasives_transvihmi---');
		remoteDB_chauves_souris_non_invasives_transvihmi.info().then((infos) => {
			localStorage['chauves_souris_non_invasives_transvihmi_count'] = infos.doc_count;
				if (infos.doc_count > 20) {
					doc_chauves_souris_non_invasives_transvihmi_progress_count = infos.doc_count;
				} else {
					doc_chauves_souris_non_invasives_transvihmi_progress_count = 20;
				};
				console.log('doc_chauves_souris_non_invasives_transvihmi_count', localStorage.getItem('chauves_souris_non_invasives_transvihmi_count')); 
				console.log('doc_chauves_souris_non_invasives_transvihmi_progress_count', doc_chauves_souris_non_invasives_transvihmi_progress_count);
				getCount_chauves_souris_non_invasives_mivegec();
		}).catch((error) => {
			console.error(error);
			localDB_chauves_souris_non_invasives_transvihmi.info().then((infos) => {
				localStorage['chauves_souris_non_invasives_transvihmi_count'] = infos.doc_count;
				if (infos.doc_count > 20) {
					doc_chauves_souris_non_invasives_transvihmi_progress_count = infos.doc_count;
				} else {
					doc_chauves_souris_non_invasives_transvihmi_progress_count = 20;
				};
				console.log('doc_chauves_souris_non_invasives_transvihmi_count', localStorage.getItem('chauves_souris_non_invasives_transvihmi_count')); 
				console.log('doc_chauves_souris_non_invasives_transvihmi_progress_count', doc_chauves_souris_non_invasives_transvihmi_progress_count);
				getCount_chauves_souris_non_invasives_mivegec();
			}).catch((error) => {
				console.error(error);
			});
		});
	} else {
		doc_chauves_souris_non_invasives_transvihmi_progress_count = 20;
		getCount_chauves_souris_non_invasives_mivegec();
	};
};

function getCount_chauves_souris_non_invasives_mivegec() {
	if ((code_equipe === '2') || (debug !== '')) {
		console.log('---chauves_souris_non_invasives_mivegec---');
		remoteDB_chauves_souris_non_invasives_mivegec.info().then((infos) => {
			localStorage['chauves_souris_non_invasives_mivegec_count'] = infos.doc_count;
			if (infos.doc_count > 20) {
				doc_chauves_souris_non_invasives_mivegec_progress_count = infos.doc_count;
			} else {
				doc_chauves_souris_non_invasives_mivegec_progress_count = 20;
			};
			console.log('doc_chauves_souris_non_invasives_mivegec_count', localStorage.getItem('chauves_souris_non_invasives_mivegec_count')); 
			console.log('doc_chauves_souris_non_invasives_mivegec_progress_count', doc_chauves_souris_non_invasives_mivegec_progress_count);
			getCount_chauves_souris_non_invasives_astre();
		}).catch((error) => {
			console.error(error);
			localDB_chauves_souris_non_invasives_mivegec.info().then((infos) => {
				localStorage['chauves_souris_non_invasives_mivegec_count'] = infos.doc_count;
				if (infos.doc_count > 20) {
					doc_chauves_souris_non_invasives_mivegec_progress_count = infos.doc_count;
				} else {
					doc_chauves_souris_non_invasives_mivegec_progress_count = 20;
				};
				console.log('doc_chauves_souris_non_invasives_mivegec_count', localStorage.getItem('chauves_souris_non_invasives_mivegec_count')); 
				console.log('doc_chauves_souris_non_invasives_mivegec_progress_count', doc_chauves_souris_non_invasives_mivegec_progress_count);
				getCount_chauves_souris_non_invasives_astre();
			}).catch((error) => {
				console.error(error);
			});
		});
	} else {
		doc_chauves_souris_non_invasives_mivegec_progress_count = 20;
		getCount_chauves_souris_non_invasives_astre();
	};
};

function getCount_chauves_souris_non_invasives_astre() {
	if ((code_equipe === '6') || (debug !== '')) {
		console.log('---chauves_souris_non_invasives_astre---');
		remoteDB_chauves_souris_non_invasives_astre.info().then((infos) => {
			localStorage['chauves_souris_non_invasives_astre_count'] = infos.doc_count;
			if (infos.doc_count > 20) {
				doc_chauves_souris_non_invasives_astre_progress_count = infos.doc_count;
			} else {
				doc_chauves_souris_non_invasives_astre_progress_count = 20;
			};
			console.log('doc_chauves_souris_non_invasives_astre_count', localStorage.getItem('chauves_souris_non_invasives_astre_count')); 
			console.log('doc_chauves_souris_non_invasives_astre_progress_count', doc_chauves_souris_non_invasives_astre_progress_count); 
			getCount_viande_de_brousse_transvihmi();
		}).catch((error) => {
			console.error(error);
			localDB_chauves_souris_capturees_astre.info().then((infos) => {
				localStorage['chauves_souris_non_invasives_astre_count'] = infos.doc_count;
				if (infos.doc_count > 20) {
					doc_chauves_souris_non_invasives_astre_progress_count = infos.doc_count;
				} else {
					doc_chauves_souris_non_invasives_astre_progress_count = 20;
				};
				console.log('doc_chauves_souris_non_invasives_astre_count', localStorage.getItem('chauves_souris_non_invasives_astre_count')); 
				console.log('doc_chauves_souris_non_invasives_astre_progress_count', doc_chauves_souris_non_invasives_astre_progress_count); 
				getCount_viande_de_brousse_transvihmi();
			}).catch((error) => {
				console.error(error);
			});
		});
	} else {
		doc_chauves_souris_capturees_astre_progress_count = 20;
		getCount_viande_de_brousse_transvihmi();
	};
};

function getCount_viande_de_brousse_transvihmi() {
	if ((code_equipe === '2') || (debug !== '')) {
		console.log('---viande_de_brousse_transvihmi---');
		remoteDB_viande_de_brousse_transvihmi.info().then((infos) => {
			localStorage['viande_de_brousse_transvihmi_count'] = infos.doc_count;
			if (infos.doc_count > 20) {
				doc_viande_de_brousse_transvihmi_progress_count = infos.doc_count;
			} else {
				doc_viande_de_brousse_transvihmi_progress_count = 20;
			};
			console.log('doc_viande_de_brousse_transvihmi_count', localStorage.getItem('viande_de_brousse_transvihmi_count')); 
			console.log('doc_viande_de_brousse_transvihmi_progress_count', doc_viande_de_brousse_transvihmi_progress_count);
			getCount_chauves_souris_non_invasives_astre();
		}).catch((error) => {
			console.error(error);
			localDB_viande_de_brousse_transvihmi.info().then((infos) => {
				localStorage['viande_de_brousse_transvihmi_count'] = infos.doc_count;
				if (infos.doc_count > 20) {
					doc_viande_de_brousse_transvihmi_progress_count = infos.doc_count;
				} else {
					doc_viande_de_brousse_transvihmi_progress_count = 20;
				};
				console.log('doc_viande_de_brousse_transvihmi_count', localStorage.getItem('viande_de_brousse_transvihmi_count')); 
				console.log('doc_viande_de_brousse_transvihmi_progress_count', doc_viande_de_brousse_transvihmi_progress_count);
				getCount_chauves_souris_non_invasives_astre();	    	
			}).catch((error) => {
				console.error(error);
			});
		});
	} else {
		doc_viande_de_brousse_transvihmi_progress_count = 20;
		getCount_chauves_souris_non_invasives_astre();
	};
};

function getCount_viande_de_brousse_transvihmi() {
	if ((code_equipe === '1') || (debug !== '')) {
		console.log('---viande_de_brousse_transvihmi---');
		remoteDB_viande_de_brousse_transvihmi.info().then((infos) => {
			localStorage['viande_de_brousse_transvihmi_count'] = infos.doc_count;
			if (infos.doc_count > 20) {
				doc_viande_de_brousse_transvihmi_progress_count = infos.doc_count;
			} else {
				doc_viande_de_brousse_transvihmi_progress_count = 20;
			};
			console.log('doc_viande_de_brousse_transvihmi_count', localStorage.getItem('viande_de_brousse_transvihmi_count')); 
			console.log('doc_viande_de_brousse_transvihmi_progress_count', doc_viande_de_brousse_transvihmi_progress_count);
			getCount_viande_de_brousse_mivegec();
		}).catch((error) => {
			console.error(error);
			localDB_viande_de_brousse_transvihmi.info().then((infos) => {
				localStorage['viande_de_brousse_transvihmi_count'] = infos.doc_count;
				if (infos.doc_count > 20) {
					doc_viande_de_brousse_transvihmi_progress_count = infos.doc_count;
				} else {
					doc_viande_de_brousse_transvihmi_progress_count = 20;
				};
				console.log('doc_viande_de_brousse_transvihmi_count', localStorage.getItem('viande_de_brousse_transvihmi_count')); 
				console.log('doc_viande_de_brousse_transvihmi_progress_count', doc_viande_de_brousse_transvihmi_progress_count);
				getCount_viande_de_brousse_mivegec();	    	
			}).catch((error) => {
				console.error(error);
			});
		});
	} else {
		doc_viande_de_brousse_transvihmi_progress_count = 20;
		getCount_viande_de_brousse_mivegec();
	};
};

function getCount_viande_de_brousse_mivegec() {
	if ((code_equipe === '2') || (debug !== '')) {
		console.log('---viande_de_brousse_mivegec---');
		remoteDB_viande_de_brousse_mivegec.info().then((infos) => {
			localStorage['viande_de_brousse_mivegec_count'] = infos.doc_count;
			if (infos.doc_count > 20) {
				doc_viande_de_brousse_mivegec_progress_count = infos.doc_count;
			} else {
				doc_viande_de_brousse_mivegec_progress_count = 20;
			};
			console.log('doc_viande_de_brousse_mivegec_count', localStorage.getItem('viande_de_brousse_mivegec_count')); 
			console.log('doc_viande_de_brousse_mivegec_progress_count', doc_viande_de_brousse_mivegec_progress_count);
			getCount_site_transvihmi();
		}).catch((error) => {
			console.error(error);
			localDB_viande_de_brousse_mivegec.info().then((infos) => {
				localStorage['viande_de_brousse_mivegec_count'] = infos.doc_count;
				if (infos.doc_count > 20) {
					doc_viande_de_brousse_mivegec_progress_count = infos.doc_count;
				} else {
					doc_viande_de_brousse_mivegec_progress_count = 20;
				};
				console.log('doc_viande_de_brousse_mivegec_count', localStorage.getItem('viande_de_brousse_mivegec_count')); 
				console.log('doc_viande_de_brousse_mivegec_progress_count', doc_viande_de_brousse_mivegec_progress_count);
				getCount_site_transvihmi();	    	
			}).catch((error) => {
				console.error(error);
			});
		});
	} else {
		doc_viande_de_brousse_mivegec_progress_count = 20;
		getCount_site_transvihmi();
	};
};

function getCount_site_transvihmi() {
	if ((code_equipe === '6') || (debug !== '')) {
		console.log('---site_transvihmi---');
		remoteDB_site_transvihmi.info().then((infos) => {
			localStorage['site_transvihmi_count'] = infos.doc_count;
			if (infos.doc_count > 20) {
				doc_site_transvihmi_progress_count = infos.doc_count;
			} else {
				doc_site_transvihmi_progress_count = 20;
			};
			console.log('doc_site_transvihmi_count', localStorage.getItem('site_transvihmi_count')); 
			console.log('doc_site_transvihmi_progress_count', doc_site_transvihmi_progress_count);
			getCount_site_mivegec();
		}).catch((error) => {
			console.error(error);
			localDB_site_astre.info().then((infos) => {
				localStorage['site_transvihmi_count'] = infos.doc_count;
				if (infos.doc_count > 20) {
					doc_site_transvihmi_progress_count = infos.doc_count;
				} else {
					doc_site_transvihmi_progress_count = 20;
				};
				console.log('doc_site_transvihmi_count', localStorage.getItem('site_transvihmi_count')); 
				console.log('doc_site_transvihmi_progress_count', doc_site_transvihmi_progress_count);
				getCount_site_mivegec();	    	
			}).catch((error) => {
				console.error(error);
			});
		});
	} else {
		doc_site_transvihmi_progress_count = 20;
		getCount_site_mivegec();
	};
};

function getCount_site_mivegec() {
	if ((code_equipe === '6') || (debug !== '')) {
		console.log('---site_mivegec---');
		remoteDB_site_mivegec.info().then((infos) => {
			localStorage['site_mivegec_count'] = infos.doc_count;
			if (infos.doc_count > 20) {
				doc_site_mivegec_progress_count = infos.doc_count;
			} else {
				doc_site_mivegec_progress_count = 20;
			};
			console.log('doc_site_mivegec_count', localStorage.getItem('site_mivegec_count')); 
			console.log('doc_site_mivegec_progress_count', doc_site_mivegec_progress_count);
			getCount_site_astre();
		}).catch((error) => {
			console.error(error);
			localDB_site_astre.info().then((infos) => {
				localStorage['site_mivegec_count'] = infos.doc_count;
				if (infos.doc_count > 20) {
					doc_site_mivegec_progress_count = infos.doc_count;
				} else {
					doc_site_mivegec_progress_count = 20;
				};
				console.log('doc_site_mivegec_count', localStorage.getItem('site_mivegec_count')); 
				console.log('doc_site_mivegec_progress_count', doc_site_mivegec_progress_count);
				getCount_site_astre();	    	
			}).catch((error) => {
				console.error(error);
			});
		});
	} else {
		doc_site_astre_progress_count = 20;
		getCount_site_astre();
	};
};

function getCount_site_astre() {
	if ((code_equipe === '6') || (debug !== '')) {
		console.log('---site_astre---');
		remoteDB_site_astre.info().then((infos) => {
			localStorage['site_astre_count'] = infos.doc_count;
			if (infos.doc_count > 20) {
				doc_site_astre_progress_count = infos.doc_count;
			} else {
				doc_site_astre_progress_count = 20;
			};
			console.log('doc_site_astre_count', localStorage.getItem('site_astre_count')); 
			console.log('doc_site_astre_progress_count', doc_site_astre_progress_count);
			getCount_donnees_mission_transvihmi();
		}).catch((error) => {
			console.error(error);
			localDB_site_astre.info().then((infos) => {
				localStorage['site_astre_count'] = infos.doc_count;
				if (infos.doc_count > 20) {
					doc_site_astre_progress_count = infos.doc_count;
				} else {
					doc_site_astre_progress_count = 20;
				};
				console.log('doc_site_astre_count', localStorage.getItem('site_astre_count')); 
				console.log('doc_site_astre_progress_count', doc_site_astre_progress_count);
				getCount_donnees_mission_transvihmi();	    	
			}).catch((error) => {
				console.error(error);
			});
		});
	} else {
		doc_site_astre_progress_count = 20;
		getCount_donnees_mission_transvihmi();
	};
};

function getCount_donnees_mission_transvihmi() {
	if ((code_equipe === '1') || (debug !== '')) {
		console.log('---donnees_mission_transvihmi---');
		remoteDB_donnees_mission_transvihmi.info().then((infos) => {
			localStorage['donnees_mission_transvihmi_count'] = infos.doc_count;
			if (infos.doc_count > 20) {
				doc_donnees_mission_transvihmi_progress_count = infos.doc_count;
			} else {
				doc_donnees_mission_transvihmi_progress_count = 20;
			};
			console.log('doc_donnees_mission_transvihmi_count', localStorage.getItem('donnees_mission_transvihmi_count')); 
			console.log('doc_donnees_mission_transvihmi_progress_count', doc_donnees_mission_transvihmi_progress_count);
			getCount_donnees_mission_mivegec();
		}).catch((error) => {
			console.error(error);
			localDB_donnees_mission_transvihmi.info().then((infos) => {
				localStorage['donnees_mission_transvihmi_count'] = infos.doc_count;
				if (infos.doc_count > 20) {
					doc_donnees_mission_transvihmi_progress_count = infos.doc_count;
				} else {
					doc_donnees_mission_transvihmi_progress_count = 20;
				};
				console.log('doc_donnees_mission_transvihmi_count', localStorage.getItem('donnees_mission_transvihmi_count')); 
				console.log('doc_donnees_mission_transvihmi_progress_count', doc_donnees_mission_transvihmi_progress_count);
				getCount_donnees_mission_mivegec();	    	
			}).catch((error) => {
				console.error(error);
			});
		});
	} else {
		doc_donnees_mission_transvihmi_progress_count = 20;
		getCount_donnees_mission_mivegec();
	};
};

function getCount_donnees_mission_mivegec() {
	if ((code_equipe === '2') || (debug !== '')) {
		console.log('---donnees_mission_mivegec---');
		remoteDB_donnees_mission_mivegec.info().then((infos) => {
			localStorage['donnees_mission_mivegec_count'] = infos.doc_count;
			if (infos.doc_count > 20) {
				doc_donnees_mission_mivegec_progress_count = infos.doc_count;
			} else {
				doc_donnees_mission_mivegec_progress_count = 20;
			};
			console.log('doc_donnees_mission_mivegec_count', localStorage.getItem('donnees_mission_mivegec_count')); 
			console.log('doc_donnees_mission_mivegec_progress_count', doc_donnees_mission_mivegec_progress_count);
			getCount_donnees_mission_astre();
		}).catch((error) => {
			console.error(error);
			localDB_donnees_mission_mivegec.info().then((infos) => {
				localStorage['donnees_mission_mivegec_count'] = infos.doc_count;
				if (infos.doc_count > 20) {
					doc_donnees_mission_mivegec_progress_count = infos.doc_count;
				} else {
					doc_donnees_mission_mivegec_progress_count = 20;
				};
				console.log('doc_donnees_mission_mivegec_count', localStorage.getItem('donnees_mission_mivegec_count')); 
				console.log('doc_donnees_mission_mivegec_progress_count', doc_donnees_mission_mivegec_progress_count);
				getCount_donnees_mission_astre();	    	
			}).catch((error) => {
				console.error(error);
			});
		});
	} else {
		doc_donnees_mission_mivegec_progress_count = 20;
		getCount_donnees_mission_astre();
	};
};

function getCount_donnees_mission_astre() {
	if ((code_equipe === '6') || (debug !== '')) {
		console.log('---donnees_mission_astre---');
		remoteDB_donnees_mission_astre.info().then((infos) => {
			localStorage['donnees_mission_astre_count'] = infos.doc_count;
			if (infos.doc_count > 20) {
				doc_donnees_mission_astre_progress_count = infos.doc_count;
			} else {
				doc_donnees_mission_astre_progress_count = 20;
			};
			console.log('doc_donnees_mission_astre_count', localStorage.getItem('donnees_mission_astre_count')); 
			console.log('doc_donnees_mission_astre_progress_count', doc_donnees_mission_astre_progress_count);
			getCount_donnees_journalieres_transvihmi();
		}).catch((error) => {
			console.error(error);
			localDB_donnees_mission_astre.info().then((infos) => {
				localStorage['donnees_mission_astre_count'] = infos.doc_count;
				if (infos.doc_count > 20) {
					doc_donnees_mission_astre_progress_count = infos.doc_count;
				} else {
					doc_donnees_mission_astre_progress_count = 20;
				};
				console.log('doc_donnees_mission_astre_count', localStorage.getItem('donnees_mission_astre_count')); 
				console.log('doc_donnees_mission_astre_progress_count', doc_donnees_mission_astre_progress_count);
				getCount_donnees_journalieres_transvihmi();	    	
			}).catch((error) => {
				console.error(error);
			});
		});
	} else {
		doc_donnees_mission_astre_progress_count = 20;
		getCount_donnees_journalieres_transvihmi();
	};
};

function getCount_donnees_journalieres_transvihmi() {
	if ((code_equipe === '1') || (debug !== '')) {
		console.log('---donnees_journalieres_transvihmi---');
		remoteDB_donnees_journalieres_transvihmi.info().then((infos) => {
			localStorage['donnees_journalieres_transvihmi_count'] = infos.doc_count;
			if (infos.doc_count > 20) {
				doc_donnees_journalieres_transvihmi_progress_count = infos.doc_count;
			} else {
				doc_donnees_journalieres_transvihmi_progress_count = 20;
			};
			console.log('doc_donnees_journalieres_transvihmi_count', localStorage.getItem('donnees_journalieres_transvihmi_count')); 
			console.log('doc_donnees_journalieres_transvihmi_progress_count', doc_donnees_journalieres_transvihmi_progress_count);
			getCount_donnees_journalieres_mivegec();
		}).catch((error) => {
			console.error(error);
			localDB_donnees_journalieres_transvihmi.info().then((infos) => {
				localStorage['donnees_journalieres_transvihmi_count'] = infos.doc_count;
				if (infos.doc_count > 20) {
					doc_donnees_journalieres_transvihmi_progress_count = infos.doc_count;
				} else {
					doc_donnees_journalieres_transvihmi_progress_count = 20;
				};
				console.log('doc_donnees_journalieres_transvihmi_count', localStorage.getItem('donnees_journalieres_transvihmi_count')); 
				console.log('doc_donnees_journalieres_transvihmi_progress_count', doc_donnees_journalieres_transvihmi_progress_count);
				getCount_donnees_journalieres_mivegec();	    	
			}).catch((error) => {
				console.error(error);
			});
		});
	} else {
		doc_donnees_journalieres_transvihmi_progress_count = 20;
		getCount_donnees_journalieres_mivegec();
	};
};

function getCount_donnees_journalieres_mivegec() {
	if ((code_equipe === '2') || (debug !== '')) {
		console.log('---donnees_journalieres_mivegec---');
		remoteDB_donnees_journalieres_mivegec.info().then((infos) => {
			localStorage['donnees_journalieres_mivegec_count'] = infos.doc_count;
			if (infos.doc_count > 20) {
				doc_donnees_journalieres_mivegec_progress_count = infos.doc_count;
			} else {
				doc_donnees_journalieres_mivegec_progress_count = 20;
			};
			console.log('doc_donnees_journalieres_mivegec_count', localStorage.getItem('donnees_journalieres_mivegec_count')); 
			console.log('doc_donnees_journalieres_mivegec_progress_count', doc_donnees_journalieres_mivegec_progress_count);
			getCount_donnees_journalieres_astre();
		}).catch((error) => {
			console.error(error);
			localDB_donnees_journalieres_mivegec.info().then((infos) => {
				localStorage['donnees_journalieres_mivegec_count'] = infos.doc_count;
				if (infos.doc_count > 20) {
					doc_donnees_journalieres_mivegec_progress_count = infos.doc_count;
				} else {
					doc_donnees_journalieres_mivegec_progress_count = 20;
				};
				console.log('doc_donnees_journalieres_mivegec_count', localStorage.getItem('donnees_journalieres_mivegec_count')); 
				console.log('doc_donnees_journalieres_mivegec_progress_count', doc_donnees_journalieres_mivegec_progress_count);
				getCount_donnees_journalieres_astre();	    	
			}).catch((error) => {
				console.error(error);
			});
		});
	} else {
		doc_donnees_journalieres_mivegec_progress_count = 20;
		getCount_donnees_journalieres_astre();
	};
};

function getCount_donnees_journalieres_astre() {
	if ((code_equipe === '6') || (debug !== '')) {
		console.log('---donnees_journalieres_astre---');
		remoteDB_donnees_journalieres_astre.info().then((infos) => {
			localStorage['donnees_journalieres_astre_count'] = infos.doc_count;
			if (infos.doc_count > 20) {
				doc_donnees_journalieres_astre_progress_count = infos.doc_count;
			} else {
				doc_donnees_journalieres_astre_progress_count = 20;
			};
			console.log('doc_donnees_journalieres_astre_count', localStorage.getItem('donnees_journalieres_astre_count')); 
			console.log('doc_donnees_journalieres_astre_progress_count', doc_donnees_journalieres_astre_progress_count);
			getCount_total();
		}).catch((error) => {
			console.error(error);
			localDB_donnees_journalieres_astre.info().then((infos) => {
				localStorage['donnees_journalieres_astre_count'] = infos.doc_count;
				if (infos.doc_count > 20) {
					doc_donnees_journalieres_astre_progress_count = infos.doc_count;
				} else {
					doc_donnees_journalieres_astre_progress_count = 20;
				};
				console.log('doc_donnees_journalieres_astre_count', localStorage.getItem('donnees_journalieres_astre_count')); 
				console.log('doc_donnees_journalieres_astre_progress_count', doc_donnees_journalieres_astre_progress_count);
				getCount_total();	    	
			}).catch((error) => {
				console.error(error);
			});
		});
	} else {
		doc_donnees_journalieres_astre_progress_count = 20;
		getCount_total();
	};
};


function getCount_total() {
    
	//on arrondit chaque les progress_count au multiple de 20 supérieur
	var non_multiple_de_20_count = 0;
	
	var reste_p_c_chauves_souris_capturees_transvihmi_guinee = doc_chauves_souris_capturees_transvihmi_guinee_progress_count % 20;
	doc_chauves_souris_capturees_transvihmi_guinee_progress_count = doc_chauves_souris_capturees_transvihmi_guinee_progress_count - reste_p_c_chauves_souris_capturees_transvihmi_guinee;
	localStorage['doc_chauves_souris_capturees_transvihmi_guinee_progress_count'] = doc_chauves_souris_capturees_transvihmi_guinee_progress_count;	
	var reste_p_c_chauves_souris_capturees_transvihmi_cameroun = doc_chauves_souris_capturees_transvihmi_cameroun_progress_count % 20;
	doc_chauves_souris_capturees_transvihmi_cameroun_progress_count = doc_chauves_souris_capturees_transvihmi_cameroun_progress_count - reste_p_c_chauves_souris_capturees_transvihmi_cameroun;
	localStorage['doc_chauves_souris_capturees_transvihmi_cameroun_progress_count'] = doc_chauves_souris_capturees_transvihmi_cameroun_progress_count;	
		
	var reste_p_c_chauves_souris_capturees_mivegec = doc_chauves_souris_capturees_mivegec_progress_count % 20;
	doc_chauves_souris_capturees_mivegec_progress_count = doc_chauves_souris_capturees_mivegec_progress_count - reste_p_c_chauves_souris_capturees_mivegec;
	localStorage['doc_chauves_souris_capturees_mivegec_progress_count'] = doc_chauves_souris_capturees_mivegec_progress_count;	
	var reste_p_c_chauves_souris_capturees_astre = doc_chauves_souris_capturees_astre_progress_count % 20;
	doc_chauves_souris_capturees_astre_progress_count = doc_chauves_souris_capturees_astre_progress_count - reste_p_c_chauves_souris_capturees_astre;
	localStorage['doc_chauves_souris_capturees_astre_progress_count'] = doc_chauves_souris_capturees_astre_progress_count;	
	
	var reste_p_c_chauves_souris_non_invasives_transvihmi = doc_chauves_souris_non_invasives_transvihmi_progress_count % 20;
	doc_chauves_souris_non_invasives_transvihmi_progress_count = doc_chauves_souris_non_invasives_transvihmi_progress_count - reste_p_c_chauves_souris_non_invasives_transvihmi;
	localStorage['doc_chauves_souris_non_invasives_transvihmi_progress_count'] = doc_chauves_souris_non_invasives_transvihmi_progress_count;	
	var reste_p_c_chauves_souris_non_invasives_mivegec = doc_chauves_souris_non_invasives_mivegec_progress_count % 20;
	doc_chauves_souris_non_invasives_mivegec_progress_count = doc_chauves_souris_non_invasives_mivegec_progress_count - reste_p_c_chauves_souris_non_invasives_mivegec;
	localStorage['doc_chauves_souris_non_invasives_mivegec_progress_count'] = doc_chauves_souris_non_invasives_mivegec_progress_count;	
	var reste_p_c_chauves_souris_non_invasives_astre = doc_chauves_souris_non_invasives_astre_progress_count % 20;
	doc_chauves_souris_non_invasives_astre_progress_count = doc_chauves_souris_non_invasives_astre_progress_count - reste_p_c_chauves_souris_non_invasives_astre;
	localStorage['doc_chauves_souris_non_invasives_astre_progress_count'] = doc_chauves_souris_non_invasives_astre_progress_count;	
	
	var reste_p_c_viande_de_brousse_transvihmi = doc_viande_de_brousse_transvihmi_progress_count % 20;
	doc_viande_de_brousse_transvihmi_progress_count = doc_viande_de_brousse_transvihmi_progress_count - reste_p_c_viande_de_brousse_transvihmi;
	localStorage['doc_viande_de_brousse_transvihmi_progress_count'] = doc_viande_de_brousse_transvihmi_progress_count;	
	var reste_p_c_viande_de_brousse_mivegec = doc_viande_de_brousse_mivegec_progress_count % 20;
	doc_viande_de_brousse_mivegec_progress_count = doc_viande_de_brousse_mivegec_progress_count - reste_p_c_viande_de_brousse_mivegec;
	localStorage['doc_viande_de_brousse_mivegec_progress_count'] = doc_viande_de_brousse_mivegec_progress_count;	
	
	var reste_p_c_site_transvihmi = doc_site_transvihmi_progress_count % 20;
	doc_site_transvihmi_progress_count = doc_site_transvihmi_progress_count - reste_p_c_site_transvihmi
	localStorage['doc_site_transvihmi_progress_count'] = doc_site_transvihmi_progress_count;	
	var reste_p_c_site_mivegec = doc_site_mivegec_progress_count % 20;
	doc_site_mivegec_progress_count = doc_site_mivegec_progress_count - reste_p_c_site_mivegec;
	localStorage['doc_site_mivegec_progress_count'] = doc_site_mivegec_progress_count;	
	var reste_p_c_site_astre = doc_site_astre_progress_count % 20;
	doc_site_astre_progress_count = doc_site_astre_progress_count - reste_p_c_site_astre;
	localStorage['doc_site_astre_progress_count'] = doc_site_astre_progress_count;	
	
	var reste_p_c_donnees_mission_transvihmi = doc_donnees_mission_transvihmi_progress_count % 20;
	doc_donnees_mission_transvihmi_progress_count = doc_donnees_mission_transvihmi_progress_count - reste_p_c_donnees_mission_transvihmi
	localStorage['doc_donnees_mission_transvihmi_progress_count'] = doc_donnees_mission_transvihmi_progress_count;	
	var reste_p_c_donnees_mission_mivegec = doc_donnees_mission_mivegec_progress_count % 20;
	doc_donnees_mission_mivegec_progress_count = doc_donnees_mission_mivegec_progress_count - reste_p_c_donnees_mission_mivegec;
	localStorage['doc_donnees_mission_mivegec_progress_count'] = doc_donnees_mission_mivegec_progress_count;	
	var reste_p_c_donnees_mission_astre = doc_donnees_mission_astre_progress_count % 20;
	doc_donnees_mission_astre_progress_count = doc_donnees_mission_astre_progress_count - reste_p_c_donnees_mission_astre;
	localStorage['doc_donnees_mission_astre_progress_count'] = doc_donnees_mission_astre_progress_count;	
	
	var reste_p_c_donnees_journalieres_transvihmi = doc_donnees_journalieres_transvihmi_progress_count % 20;
	doc_donnees_journalieres_transvihmi_progress_count = doc_donnees_journalieres_transvihmi_progress_count - reste_p_c_donnees_journalieres_transvihmi
	localStorage['doc_donnees_journalieres_transvihmi_progress_count'] = doc_donnees_journalieres_transvihmi_progress_count;	
	var reste_p_c_donnees_journalieres_mivegec = doc_donnees_journalieres_mivegec_progress_count % 20;
	doc_donnees_journalieres_mivegec_progress_count = doc_donnees_journalieres_mivegec_progress_count - reste_p_c_donnees_journalieres_mivegec;
	localStorage['doc_donnees_journalieres_mivegec_progress_count'] = doc_donnees_journalieres_mivegec_progress_count;	
	var reste_p_c_donnees_journalieres_astre = doc_donnees_journalieres_astre_progress_count % 20;
	doc_donnees_journalieres_astre_progress_cjournalieres = doc_donnees_journalieres_astre_progress_count - reste_p_c_donnees_journalieres_astre;
	localStorage['doc_donnees_journalieres_astre_progress_count'] = doc_donnees_journalieres_astre_progress_count;
	
	if ((debug !== null) && (debug !== '')) {
		doc_total_progress_count =  doc_chauves_souris_capturees_transvihmi_guinee_progress_count 
                            		+ doc_chauves_souris_capturees_transvihmi_cameroun_progress_count
									+ doc_chauves_souris_non_invasives_transvihmi_progress_count 
                                    + doc_viande_de_brousse_transvihmi_progress_count 
                                    + doc_chauves_souris_capturees_mivegec_progress_count
                                    + doc_chauves_souris_non_invasives_mivegec_progress_count 
                                    + doc_viande_de_brousse_mivegec_progress_count 
		                            + doc_chauves_souris_capturees_astre_progress_count
		                            + doc_chauves_souris_non_invasives_astre_progress_count
		                            + doc_site_transvihmi_progress_count
		                            + doc_site_mivegec_progress_count
		                            + doc_site_astre_progress_count
		                            + doc_donnees_mission_transvihmi_progress_count
		                            + doc_donnees_mission_mivegec_progress_count
		                            + doc_donnees_mission_astre_progress_count
		                            + doc_donnees_journalieres_transvihmi_progress_count
		                            + doc_donnees_journalieres_mivegec_progress_count
		                            + doc_donnees_journalieres_astre_progress_count
		                            + 15 * 20;
		//alert(doc_total_progress_count + 'doc_total_progress_count');
	} else {
		if (code_equipe === '1') && (nom_pays === 'tous') {
			

			console.log('---!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!---');
			console.log(doc_chauves_souris_capturees_transvihmi_progress_count);
					console.log(doc_chauves_souris_non_invasives_transvihmi_progress_count);
							console.log(doc_viande_de_brousse_transvihmi_progress_count);
									console.log(doc_donnees_mission_transvihmi_progress_count);
											
			doc_total_progress_count = doc_chauves_souris_capturees_transvihmi_guinee_progress_count + doc_chauves_souris_capturees_transvihmi_cameroun_progress_count
									   + doc_chauves_souris_non_invasives_transvihmi_progress_count + doc_viande_de_brousse_transvihmi_progress_count 
			                           + doc_donnees_mission_transvihmi_progress_count + doc_donnees_mission_transvihmi_progress_count + doc_donnees_journalieres_transvihmi_progress_count + 15 * 20;
		} else if (code_equipe === '2') {
			doc_total_progress_count = doc_chauves_souris_capturees_mivegec_progress_count + doc_chauves_souris_non_invasives_progress_mivegec_count + doc_viande_de_brousse_mivegec_progress_count + doc_site_mivegec_progress_count + doc_donnees_mission_mivegec_progress_count + doc_donnees_journalieres_mivegec_progress_count + 15 * 20;
		} else if (code_equipe === '6') {
			doc_total_progress_count = doc_chauves_souris_capturees_astre_progress_count + doc_chauves_souris_non_invasives_astre_progress_count + doc_site_astre_progress_count + doc_donnees_mission_astre_progress_count + doc_donnees_journalieres_astre_progress_count + 15 * 20;
		};
	};

	console.log('doc_total_progress_count', doc_total_progress_count);
				
	progressbar_count = Math.round(doc_total_progress_count / 20);
	step = 100 / progressbar_count; 
	//localStorage['step'] = step;
	
	//var step = parseFloat(localStorage.getItem('step'));
	
	localStorage['step'] = step;
	localStorage['non_multiple_de_20_count'] = non_multiple_de_20_count;
	
	//width = parseFloat(step) * 14;
	
	/*for (i=0; i<non_multiple_de_20_count; i++) {
		move();
	};*/
	if (debug !== '') {
		load_db_pays_debug();
	} else {
		load_db_pays();
	}
	
	
};

function load_db_pays() {

	var localDB = new PouchDB('pays' + nom_equipe + debug);
	var remoteDB = new PouchDB(remote_couchdb + 'pays' + nom_equipe + debug, {skip_setup: true});
	console.log('---pays---');
	
	//alert("pays");
	//alert("width : " + width + " - step :" + step);
	localDB.sync(remoteDB).on('complete', (info) => {   
		move();
		load_db_environnement();
	}).on('error', function (err) {
		// error while replicating
		alert('alert pays: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
};

function load_db_pays_debug() {

	var localDB = new PouchDB('pays_transvihmi' + debug);
	var remoteDB = new PouchDB(remote_couchdb + 'pays_transvihmi' + debug, {skip_setup: true});
	console.log('---pays_transvihmi---');
	localDB.sync(remoteDB).on('complete', (info) => {   
	}).on('error', function (err) {
		// error while replicating
		alert('alert pays: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
	
	var localDB2 = new PouchDB('pays_mivegec' + debug);
	var remoteDB2 = new PouchDB(remote_couchdb + 'pays_mivegec' + debug, {skip_setup: true});
	console.log('---pays_mivegec---');
	localDB2.sync(remoteDB2).on('complete', (info) => {   
	}).on('error', function (err) {
		// error while replicating
		alert('alert pays: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
	
	var localDB3 = new PouchDB('pays_astre' + debug);
	var remoteDB3 = new PouchDB(remote_couchdb + 'pays_astre' + debug, {skip_setup: true});
	console.log('---pays_astre---');
	localDB3.sync(remoteDB3).on('complete', (info) => {
		move();
		load_db_environnement_debug();
	}).on('error', function (err) {
		// error while replicating
		alert('alert pays: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
	
	
};

function load_db_environnement() {
	var localDB = new PouchDB('environnement' + nom_equipe + debug);
	var remoteDB = new PouchDB(remote_couchdb + 'environnement' + nom_equipe + debug,  {skip_setup: true});
	console.log('---environnement---');
	
	//alert("environnement");
	localDB.sync(remoteDB).on('complete', (info) => {   
		move();
		load_db_lieu_capture();
	}).on('error', function (err) {
		// error while replicating
		alert('alert environnement: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
};

function load_db_environnement_debug() {
	var localDB = new PouchDB('environnement_transvihmi' + debug);
	var remoteDB = new PouchDB(remote_couchdb + 'environnement_transvihmi' + debug,  {skip_setup: true});
	console.log('---environnement_transvihmi---');
	
	//alert("environnement");
	localDB.sync(remoteDB).on('complete', (info) => {   
	}).on('error', function (err) {
		// error while replicating
		alert('alert environnement: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
	
	var localDB2 = new PouchDB('environnement_mivegec' + debug);
	var remoteDB2 = new PouchDB(remote_couchdb + 'environnement_mivegec' + debug,  {skip_setup: true});
	console.log('---environnement---');
	
	//alert("environnement");
	localDB2.sync(remoteDB2).on('complete', (info) => {   
	}).on('error', function (err) {
		// error while replicating
		alert('alert environnement: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
	
	var localDB3 = new PouchDB('environnement_astre' + debug);
	var remoteDB3 = new PouchDB(remote_couchdb + 'environnement_astre' + debug,  {skip_setup: true});
	console.log('---environnement---');
	
	//alert("environnement");
	localDB3.sync(remoteDB3).on('complete', (info) => {   
		move();
		load_db_lieu_capture_debug();
	}).on('error', function (err) {
		// error while replicating
		alert('alert environnement: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
};

function load_db_lieu_capture() {
	var localDB = new PouchDB('lieu_capture' + nom_equipe + debug);
	var remoteDB = new PouchDB(remote_couchdb + 'lieu_capture' + nom_equipe + debug,  {skip_setup: true});
	console.log('---lieu_capture---');	
	localDB.sync(remoteDB).on('complete', (info) => {   
		move();
		load_db_lieu_collecte();
	}).on('error', function (err) {
		// error while replicating
		alert('alert lieu_capture: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
};

function load_db_lieu_capture_debug() {
	var localDB = new PouchDB('lieu_capture_transvihmi' + debug);
	var remoteDB = new PouchDB(remote_couchdb + 'lieu_capture_transvihmi' + debug,  {skip_setup: true});
	console.log('---lieu_capture_transvihmi---');
	
	localDB.sync(remoteDB).on('complete', (info) => {   
	}).on('error', function (err) {
		// error while replicating
		alert('alert environnement: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
	
	var localDB2 = new PouchDB('lieu_capture_mivegec' + debug);
	var remoteDB2 = new PouchDB(remote_couchdb + 'lieu_capture_mivegec' + debug,  {skip_setup: true});
	console.log('---lieu_capture_mivegec---');
	
	//alert("environnement");
	localDB2.sync(remoteDB2).on('complete', (info) => {   
	}).on('error', function (err) {
		// error while replicating
		alert('alert environnement: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
	
	var localDB3 = new PouchDB('lieu_capture_astre' + debug);
	var remoteDB3 = new PouchDB(remote_couchdb + 'lieu_capture_astre' + debug,  {skip_setup: true});
	console.log('---lieu_capture_astre---');
	
	//alert("environnement");
	localDB3.sync(remoteDB3).on('complete', (info) => {   
		move();
		load_db_lieu_collecte_debug();
	}).on('error', function (err) {
		// error while replicating
		alert('alert environnement: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
};

function load_db_lieu_collecte() {
	var localDB = new PouchDB('lieu_collecte' + nom_equipe + debug);
	var remoteDB = new PouchDB(remote_couchdb + 'lieu_collecte' + nom_equipe + debug,  {skip_setup: true});
	console.log('---lieu_collecte---');		
	localDB.sync(remoteDB).on('complete', (info) => {   
		move();
		load_db_methode_capture();
	}).on('error', function (err) {
		// error while replicating
		alert('alert lieu_collecte: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
};

function load_db_lieu_collecte_debug() {
	var localDB = new PouchDB('lieu_collecte_transvihmi' + debug);
	var remoteDB = new PouchDB(remote_couchdb + 'lieu_collecte_transvihmi' + debug,  {skip_setup: true});
	console.log('---lieu_collecte_transvihmi---');
	
	localDB.sync(remoteDB).on('complete', (info) => {   
	}).on('error', function (err) {
		// error while replicating
		alert('alert environnement: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
	
	var localDB2 = new PouchDB('lieu_collecte_mivegec' + debug);
	var remoteDB2 = new PouchDB(remote_couchdb + 'lieu_collecte_mivegec' + debug,  {skip_setup: true});
	console.log('---lieu_collecte_mivegec---');
	
	//alert("environnement");
	localDB2.sync(remoteDB2).on('complete', (info) => {   
	}).on('error', function (err) {
		// error while replicating
		alert('alert environnement: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
	
	var localDB3 = new PouchDB('lieu_collecte_astre' + debug);
	var remoteDB3 = new PouchDB(remote_couchdb + 'lieu_collecte_astre' + debug,  {skip_setup: true});
	console.log('---lieu_collecte_astre---');
	
	//alert("environnement");
	localDB3.sync(remoteDB3).on('complete', (info) => {   
		move();
		load_db_lieu_collecte/*_debug*/();
	}).on('error', function (err) {
		// error while replicating
		alert('alert environnement: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
};

function load_db_methode_capture() {
	var localDB = new PouchDB('methode_capture' + debug);
	var remoteDB = new PouchDB(remote_couchdb + 'methode_capture' + debug,  {skip_setup: true});
	console.log('---methode_capture---');		
	localDB.sync(remoteDB).on('complete', (info) => {   
		move();
		load_db_preleve_chez();
	}).on('error', function (err) {
		// error while replicating
		alert('alert methode: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
};

function load_db_preleve_chez() {
	var localDB = new PouchDB('preleve_chez' + debug);
	var remoteDB = new PouchDB(remote_couchdb + 'preleve_chez' + debug, {skip_setup: true});
	console.log('---preleve_chez---');		
	localDB.sync(remoteDB).on('complete', (info) => {   
		move();
		loadjs('js/load-db-tables-reference2-online.js');
	
	}).on('error', function (err) {
		// error while replicating
		alert('alert preleve_chez: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
};

function move() {
    var elem = document.getElementById("myBar");    
    width = width + step;
    //alert("width : " + width + " - step :" + step);
    console.log("width : " + width);
    elem.style.width = width + '%';
    console.log("elem.style.width : " + elem.style.width + '%');
};

function show_progress_bar() {		
	var elem = document.getElementById("child");
	elem.style.display="block";
};


