/*var remote_couchdb = localStorage.getItem('remote_couchdb');

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

var code_equipe = localStorage.getItem('code_equipe');

var doc_chauves_souris_capturees_transvihmi_guinee_progress_count = localStorage.getItem('doc_chauves_souris_capturees_transvihmi_guinee_progress_count');	
alert(doc_chauves_souris_capturees_transvihmi_guinee_progress_count);
var doc_chauves_souris_capturees_transvihmi_cameroun_progress_count = localStorage.getItem('doc_chauves_souris_capturees_transvihmi_cameroun_progress_count');	
var doc_chauves_souris_non_invasives_transvihmi_progress_count = localStorage.getItem('doc_chauves_souris_non_invasives_transvihmi_progress_count');
var doc_viande_de_brousse_transvihmi_progress_count = localStorage.getItem('doc_viande_de_brousse_transvihmi_progress_count');
var doc_site_transvihmi_progress_count = localStorage.getItem('doc_site_transvihmi_progress_count');
var doc_chauves_souris_capturees_mivegec_progress_count = localStorage.getItem('doc_chauves_souris_capturees_mivegec_progress_count');
var doc_chauves_souris_non_invasives_mivegec_progress_count = localStorage.getItem('doc_chauves_souris_non_invasives_mivegec_progress_count');
var doc_viande_de_brousse_mivegec_progress_count = localStorage.getItem('doc_viande_de_brousse_mivegec_progress_count');
var doc_chauves_souris_non_invasives_astre_progress_count = localStorage.getItem('doc_chauves_souris_non_invasives_astre_progress_count');
var doc_chauves_souris_capturees_astre_progress_count = localStorage.getItem('doc_chauves_souris_capturees_astre_progress_count');
var doc_site_transvihmi_progress_count = localStorage.getItem('doc_site_transvihmi_progress_count');
var doc_site_mivegec_progress_count = localStorage.getItem('doc_site_mivegec_progress_count');
var doc_site_astre_progress_count = localStorage.getItem('doc_site_astre_progress_count');
var doc_donnees_mission_transvihmi_progress_count = localStorage.getItem('doc_donnees_mission_transvihmi_progress_count');
var doc_donnees_mission_mivegec_progress_count = localStorage.getItem('doc_donnees_mission_mivegec_progress_count');
var doc_donnees_mission_astre_progress_count = localStorage.getItem('doc_donnees_mission_astre_progress_count');
var doc_donnees_journalieres_mission_transvihmi_progress_count = localStorage.getItem('doc_donnees_journalieres_transvihmi_progress_count');
var doc_donnees_journalieres_mivegec_progress_count = localStorage.getItem('doc_donnees_journalieres_mivegec_progress_count');
var doc_donnees_journalieres_astre_progress_count = localStorage.getItem('doc_donnees_journalieres_astre_progress_count');
var doc_individus_cibu_progress_count = localStorage.getItem('doc_individus_cibu_progress_count');

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

var localDB_viande_de_brousse_transvihmi = new PouchDB('viande_de_brousse_transvihmi' + debug);
var remoteDB_viande_de_brousse_transvihmi = new PouchDB(remote_couchdb + 'viande_de_brousse_transvihmi' + debug, {skip_setup: true});
var localDB_viande_de_brousse_mivegec = new PouchDB('viande_de_brousse_mivegec' + debug);
var remoteDB_viande_de_brousse_mivegec = new PouchDB(remote_couchdb + 'viande_de_brousse_mivegec' + debug, {skip_setup: true});

var localDB_site_transvihmi = new PouchDB('site_transvihmi' + debug);
var remoteDB_site_transvihmi = new PouchDB(remote_couchdb + 'site_transvihmi' + debug, {skip_setup: true});
var localDB_site_mivegec = new PouchDB('site_mivegec' + debug);
var remoteDB_site_mivegec = new PouchDB(remote_couchdb + 'site_mivegec' + debug, {skip_setup: true});
var localDB_site_astre = new PouchDB('site_astre' + debug);
var remoteDB_site_astre = new PouchDB(remote_couchdb + 'site_astre' + debug, {skip_setup: true});

var localDB_doc_donnees_mission_transvihmi = new PouchDB('doc_donnees_mission_transvihmi' + debug);
var remoteDB_doc_donnees_mission_transvihmi = new PouchDB(remote_couchdb + 'doc_donnees_mission_transvihmi' + debug, {skip_setup: true});
var localDB_doc_donnees_mission_mivegec = new PouchDB('doc_donnees_mission_mivegec' + debug);
var remoteDB_doc_donnees_mission_mivegec = new PouchDB(remote_couchdb + 'doc_donnees_mission_mivegec' + debug, {skip_setup: true});
var localDB_doc_donnees_mission_astre = new PouchDB('doc_donnees_mission_astre' + debug);
var remoteDB_doc_donnees_mission_astre = new PouchDB(remote_couchdb + 'doc_donnees_mission_astre' + debug, {skip_setup: true});

var localDB_doc_donnees_journalieres_journalieres_transvihmi = new PouchDB('donnees_journalieres_transvihmi' + debug);
var remoteDB_donnees_journalieres_transvihmi = new PouchDB(remote_couchdb + 'donnees_journalieres_transvihmi' + debug, {skip_setup: true});
var localDB_donnees_journalieres_mivegec = new PouchDB('donnees_journalieres_mivegec' + debug);
var remoteDB_donnees_journalieres_mivegec = new PouchDB(remote_couchdb + 'donnees_journalieres_mivegec' + debug, {skip_setup: true});
var localDB_donnees_journalieres_astre = new PouchDB('donnees_journalieres_astre' + debug);
var remoteDB_donnees_journalieres_astre = new PouchDB(remote_couchdb + 'donnees_journalieres_astre' + debug, {skip_setup: true});

var localDB_individus_cibu = new PouchDB('individus_cibu' + debug);
var remoteDB_individus_cibu = new PouchDB(remote_couchdb + 'individus_cibu' + debug, {skip_setup: true});
var localDB_prelevements_cibu = new PouchDB('prelevements_cibu' + debug);
var remoteDB_prelevements_cibu = new PouchDB(remote_couchdb + 'prelevements_cibu' + debug, {skip_setup: true});


var counter_chauves_souris_capturees_transvihmi_guinee = 0;
var counter_chauves_souris_capturees_transvihmi_cameroun = 0;
var counter_chauves_souris_capturees_mivegec = 0;
var counter_chauves_souris_capturees_astre = 0;

var counter_chauves_souris_non_invasives_transvihmi = 0;
var counter_chauves_souris_non_invasives_mivegec = 0;
var counter_chauves_souris_non_invasives_astre = 0;

var counter_viande_de_brousse_transvihmi = 0;
var counter_viande_de_brousse_mivegec = 0;

var counter_site_transvihmi = 0;
var counter_site_mivegec = 0;
var counter_site_astre = 0;

var counter_donnees_mission_transvihmi = 0;
var counter_donnees_mission_mivegec = 0;
var counter_donnees_mission_astre = 0;

var counter_donnees_journalieres_transvihmi = 0;
var counter_donnees_journalieres_mivegec = 0;
var counter_donnees_journalieres_astre = 0;

var counter_individus_cibu = 0;
var counter_prelevements_cibu = 0;

var step = parseFloat(localStorage.getItem('step'));
var width = parseFloat(step) * 15;


if (((code_equipe === '1') && (nom_pays == 'guinee')) || (debug !== '')) {
	localDB_chauves_souris_capturees_transvihmi_guinee.sync(remoteDB_chauves_souris_capturees_transvihmi_guinee, {batch_size: 20}).on('complete', (info) => {
		doc_chauves_souris_capturees_transvihmi_guinee_progress_count = doc_chauves_souris_capturees_transvihmi_guinee_progress_count / 20;
		for (i=0; i<doc_chauves_souris_capturees_transvihmi_guinee_progress_count; i++) {
			move();
		};
		load_db_chauves_souris_capturees_mivegec();
	}).on('change', (change) => {
		counter_chauves_souris_capturees_transvihmi_guinee++;  //to count how many data is sync
		console.log('Data sync chauves_souris_capturees_transvihmi_guinee', counter_chauves_souris_capturees_transvihmi_guinee);	
		console.log('change', change);
	}).on('error', function (err) {
		window.location = 'login.html';
	});
} else {
	load_db_chauves_souris_capturees_mivegec();
};

function load_db_chauves_souris_capturees_transvihmi_cameroun() {
	if (((code_equipe === '1') && (nom_pays == 'cameroun')) || (debug !== '')) {
		localDB_chauves_souris_capturees_transvihmi_cameroun.sync(remoteDB_chauves_souris_capturees_transvihmi_cameroun, {batch_size: 20}).on('complete', (info) => {
			doc_chauves_souris_capturees_transvihmi_cameroun_progress_count = doc_chauves_souris_capturees_transvihmi_cameroun_progress_count / 20;
			for (i=0; i<doc_chauves_souris_capturees_transvihmi_cameroun_progress_count; i++) {
				move();
			};
			load_db_chauves_souris_capturees_mivegec();
		}).on('change', (change) => {
			counter_chauves_souris_capturees_transvihmi_cameroun++;  //to count how many data is sync
			console.log('Data sync chauves_souris_capturees_transvihmi_cameroun', counter_chauves_souris_capturees_transvihmi_cameroun);	
			console.log('change', change);
		}).on('error', function (err) {
			window.location = 'login.html';
		});
	} else {
		load_db_chauves_souris_capturees_mivegec();
	};
}

function load_db_chauves_souris_capturees_mivegec() {
	if ((code_equipe === '2') || (debug !== '')) {
		localDB_chauves_souris_capturees_mivegec.sync(remoteDB_chauves_souris_capturees_mivegec, {batch_size: 20}).on('complete', (info) => {
			doc_chauves_souris_capturees_mivegec_progress_count = doc_chauves_souris_capturees_mivegec_progress_count / 20;
			for (i=0; i<doc_chauves_souris_capturees_mivegec_progress_count; i++) {
				move();
			};
			load_db_chauves_souris_capturees_astre();
		}).on('change', (change) => {
			counter_chauves_souris_capturees_mivegec++;  //to count how many data is sync
			console.log('Data sync chauves_souris_capturees_mivegec', counter_chauves_souris_capturees_mivegec);	
			console.log('change', change);
		}).on('error', function (err) {
			// error while replicating
			alert('alert chauves_souris_capturees_mivegec: ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		load_db_chauves_souris_capturees_astre();
	}
};

function load_db_chauves_souris_capturees_astre() {
	if (((code_equipe === '1') && (nom_pays == 'cameroun')) || (debug !== '')) {
		localDB_chauves_souris_capturees_astre.sync(remoteDB_chauves_souris_capturees_astre, {batch_size: 20}).on('complete', (info) => {
			doc_chauves_souris_capturees_astre_progress_count = doc_chauves_souris_capturees_astre_progress_count / 20;
			for (i=0; i<doc_chauves_souris_capturees_astre_progress_count; i++) {
				move();
			};
			load_db_chauves_souris_non_invasives_transvihmi();
		}).on('change', (change) => {
			counter_chauves_souris_capturees_astre++;  //to count how many data is sync
			console.log('Data sync chauves_souris_capturees_astre', counter_chauves_souris_capturees_astre);	
			console.log('change', change);
		}).on('error', function (err) {
			// error while replicating
			alert('alert chauves_souris_capturees_astre: ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		load_db_chauves_souris_non_invasives_transvihmi();
	}
};

function load_db_chauves_souris_non_invasives_transvihmi() {
	if ((code_equipe === '1') || (debug !== '')) {
		localDB_chauves_souris_non_invasives_transvihmi.sync(remoteDB_chauves_souris_non_invasives_transvihmi, {batch_size: 20}).on('complete', (info) => {
			doc_chauves_souris_non_invasives_transvihmi_progress_count = doc_chauves_souris_non_invasives_transvihmi_progress_count / 20;
			for (i=0; i<doc_chauves_souris_non_invasives_transvihmi_progress_count; i++) {
				move();
			};
			load_db_chauves_souris_non_invasives_mivegec();
		}).on('change', (change) => {
			counter_chauves_souris_non_invasives_transvihmi++;  //to count how many data is sync
			console.log('Data sync chauves_souris_non_invasives_transvihmi', counter_chauves_souris_non_invasives_transvihmi);	
			console.log('change', change);
		}).on('error', function (err) {
			// error while replicating
			alert('alert chauves_souris_non_invasives_transvihmi: ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		load_db_chauves_souris_non_invasives_mivegec();
	}
};

function load_db_chauves_souris_non_invasives_mivegec() {
	if ((code_equipe === '2') || (debug !== '')) {
		localDB_chauves_souris_non_invasives_mivegec.sync(remoteDB_chauves_souris_non_invasives_mivegec, {batch_size: 20}).on('complete', (info) => {
			doc_chauves_souris_non_invasives_mivegec_progress_count = doc_chauves_souris_non_invasives_mivegec_progress_count / 20;
			for (i=0; i<doc_chauves_souris_non_invasives_mivegec_progress_count; i++) {
				move();
			};
			load_db_chauves_souris_non_invasives_astre();
		}).on('change', (change) => {
			counter_chauves_souris_non_invasives_mivegec++;  //to count how many data is sync
			console.log('Data sync chauves_souris_non_invasives_mivegec', counter_chauves_souris_non_invasives_mivegec);	
			console.log('change', change);
		}).on('error', function (err) {
			// error while replicating
			alert('alert chauves_souris_non_invasives_mivegec: ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		load_db_chauves_souris_non_invasives_astre();
	}
};

function load_db_chauves_souris_non_invasives_astre() {
	if ((code_equipe === '6') || (debug !== '')) {
		localDB_chauves_souris_non_invasives_astre.sync(remoteDB_chauves_souris_non_invasives_astre, {batch_size: 20}).on('complete', (info) => {
			doc_chauves_souris_non_invasives_astre_progress_count = doc_chauves_souris_non_invasives_astre_progress_count / 20;
			for (i=0; i<doc_chauves_souris_non_invasives_astre_progress_count; i++) {
				move();
			};
			load_db_viande_de_brousse_transvihmi();
			
		}).on('change', (change) => {
			counter_chauves_souris_non_invasives_astre++;  //to count how many data is sync
			console.log('Data sync chauves_souris_non_invasives_astre', counter_chauves_souris_non_invasives_astre);	
			console.log('change', change);
		}).on('error', function (err) {
			// error while replicating
			alert('alert chauves_souris_non_invasives_astre: ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		load_db_viande_de_brousse_transvihmi();
	}
};

function load_db_viande_de_brousse_transvihmi() {
	if ((code_equipe === '1') || (debug !== '')) {
		localDB_viande_de_brousse_transvihmi.sync(remoteDB_viande_de_brousse_transvihmi, {batch_size: 20}).on('complete', (info) => {              
			doc_viande_de_brousse_transvihmi_progress_count	= doc_viande_de_brousse_transvihmi_progress_count / 20;	
			for (i=0; i<doc_viande_de_brousse_transvihmi_progress_count; i++) {
				move();
			};
			load_db_viande_de_brousse_mivegec();
		}).on('change', (change) => {
			counter_viande_de_brousse_transvihmi++;  //to count how many data is sync
			console.log('Data sync viande_de_brousse_transvihmi', counter_viande_de_brousse_transvihmi);	
			console.log('change', change);
		}).on('error', function (err) {
			// error while replicating
			alert('alert viande_de_brousse_transvihmi: ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		load_db_viande_de_brousse_mivegec();
	}
};

function load_db_viande_de_brousse_mivegec() {
	if ((code_equipe === '2') || (debug !== '')) {
		localDB_viande_de_brousse_mivegec.sync(remoteDB_viande_de_brousse_mivegec, {batch_size: 20}).on('complete', (info) => {              
			doc_viande_de_brousse_mivegec_progress_count	= doc_viande_de_brousse_mivegec_progress_count / 20;	
			for (i=0; i<doc_viande_de_brousse_mivegec_progress_count; i++) {
				move();
			};
			load_db_site_transvihmi();
		}).on('change', (change) => {
			counter_viande_de_brousse_mivegec++;  //to count how many data is sync
			console.log('Data sync viande_de_brousse_mivegec', counter_viande_de_brousse_mivegec);	
			console.log('change', change);
		}).on('error', function (err) {
			// error while replicating
			alert('alert viande_de_brousse_mivegec: ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		load_db_site_transvihmi();
	}
};

function load_db_site_transvihmi() {
	if ((code_equipe === '1') || (debug !== '')) {
		localDB_site_transvihmi.sync(remoteDB_site_transvihmi, {batch_size: 20}).on('complete', (info) => {              
			doc_site_transvihmi_progress_count	= doc_site_transvihmi_progress_count / 20;	
			for (i=0; i<doc_site_transvihmi_progress_count; i++) {
				move();
			};
			load_db_site_mivegec();
		}).on('change', (change) => {
			counter_site_transvihmi++;  //to count how many data is sync
			console.log('Data sync site_transvihmi', counter_site_transvihmi);	
			console.log('change', change);
		}).on('error', function (err) {
			// error while replicating
			alert('alert site_transvihmi: ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		load_db_site_mivegec();
	}
};

function load_db_site_mivegec() {
	if ((code_equipe === '2') || (debug !== '')) {
		localDB_site_mivegec.sync(remoteDB_site_mivegec, {batch_size: 20}).on('complete', (info) => {              
			doc_site_mivegec_progress_count	= doc_site_mivegec_progress_count / 20;	
			for (i=0; i<doc_site_mivegec_progress_count; i++) {
				move();
			};
			load_db_site_astre();
		}).on('change', (change) => {
			counter_site_mivegec++;  //to count how many data is sync
			console.log('Data sync site_mivegec', counter_site_mivegec);	
			console.log('change', change);
		}).on('error', function (err) {
			// error while replicating
			alert('alert site_mivegec: ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		load_db_site_astre();
	}
};

function load_db_site_astre() {
	if ((code_equipe === '6') || (debug !== '')) {
		localDB_site_astre.sync(remoteDB_site_astre, {batch_size: 20}).on('complete', (info) => { 
			doc_site_astre_progress_count = doc_site_astre_progress_count / 20;	
			for (i=0; i<doc_site_astre_progress_count; i++) {
				move();
			};
			load_db_donnees_mission_transvihmi();
		}).on('change', (change) => {
			counter_site_astre++;  //to count how many data is sync
			console.log('Data sync site_astre', counter_site_astre);	
			console.log('change', change);
		}).on('error', function (err) {
			// error while replicating
			alert('alert site_astre: ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		load_db_donnees_mission_transvihmi();
	}
};

function load_db_donnees_mission_transvihmi() {
	if ((code_equipe === '1') || (debug !== '')) {
		localDB_donnees_mission_transvihmi.sync(remoteDB_donnees_mission_transvihmi, {batch_size: 20}).on('complete', (info) => { 
			doc_donnees_mission_transvihmi_progress_count = doc_donnees_mission_transvihmi_progress_count / 20;	
			for (i=0; i<doc_donnees_mission_transvihmi_progress_count; i++) {
				move();
			};
			load_db_donnees_mission_mivegec()
		}).on('change', (change) => {
			counter_donnees_mission_transvihmi++;  //to count how many data is sync
			console.log('Data sync donnees_mission_transvihmi', counter_donnees_mission_transvihmi);	
			console.log('change', change);
		}).on('error', function (err) {
			// error while replicating
			alert('alert donnees_mission_transvihmi: ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		load_db_donnees_mission_mivegec();
	}
};

function load_db_donnees_mission_mivegec() {
	if ((code_equipe === '2') || (debug !== '')) {
		localDB_donnees_mission_mivegec.sync(remoteDB_donnees_mission_mivegec, {batch_size: 20}).on('complete', (info) => { 
			doc_donnees_mission_mivegec_progress_count = doc_donnees_mission_mivegec_progress_count / 20;	
			for (i=0; i<doc_donnees_mission_mivegec_progress_count; i++) {
				move();
			};
			load_db_donnees_mission_astre();
		}).on('change', (change) => {
			counter_donnees_mission_mivegec++;  //to count how many data is sync
			console.log('Data sync donnees_mission_mivegec', counter_donnees_mission_mivegec);	
			console.log('change', change);
		}).on('error', function (err) {
			// error while replicating
			alert('alert donnees_mission_mivegec: ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		load_db_donnees_mission_astre();
	}
};

function load_db_donnees_mission_astre() {
	if ((code_equipe === '6') || (debug !== '')) {
		localDB_donnees_mission_astre.sync(remoteDB_donnees_mission_astre, {batch_size: 20}).on('complete', (info) => { 
			doc_donnees_mission_astre_progress_count = doc_donnees_mission_astre_progress_count / 20;	
			for (i=0; i<doc_donnees_mission_astre_progress_count; i++) {
				move();
			};
			load_db_donnees_journalieres_transvihmi()
		}).on('change', (change) => {
			counter_donnees_mission_astre++;  //to count how many data is sync
			console.log('Data sync donnees_mission_astre', counter_donnees_mission_astre);	
			console.log('change', change);
		}).on('error', function (err) {
			// error while replicating
			alert('alert donnees_mission_astre: ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		load_db_donnees_journalieres_transvihmi()
	}
};

function load_db_donnees_journalieres_transvihmi() {
	if ((code_equipe === '1') || (debug !== '')) {
		localDB_donnees_journalieres_transvihmi.sync(remoteDB_donnees_journalieres_transvihmi, {batch_size: 20}).on('complete', (info) => { 
			doc_donnees_journalieres_transvihmi_progress_count = doc_donnees_journalieres_transvihmi_progress_count / 20;	
			for (i=0; i<doc_donnees_journalieres_transvihmi_progress_count; i++) {
				move();
			};
			load_db_donnees_journalieres_mivegec()
		}).on('change', (change) => {
			counter_donnees_journalieres_transvihmi++;  //to count how many data is sync
			console.log('Data sync donnees_journalieres_transvihmi', counter_donnees_journalieres_transvihmi);	
			console.log('change', change);
		}).on('error', function (err) {
			// error while replicating
			alert('alert donnees_journalieres_transvihmi: ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		load_db_donnees_journalieres_mivegec()
	}
};


function load_db_donnees_journalieres_mivegec() {
	if ((code_equipe === '2') || (debug !== '')) {
		localDB_donnees_journalieres_mivegec.sync(remoteDB_donnees_journalieres_mivegec, {batch_size: 20}).on('complete', (info) => { 
			doc_donnees_journalieres_mivegec_progress_count = doc_donnees_journalieres_mivegec_progress_count / 20;	
			for (i=0; i<doc_donnees_journalieres_mivegec_progress_count; i++) {
				move();
			};
			load_db_donnees_journalieres_astre()
		}).on('change', (change) => {
			counter_donnees_journalieres_mivegec++;  //to count how many data is sync
			console.log('Data sync donnees_journalieres_mivegec', counter_donnees_journalieres_mivegec);	
			console.log('change', change);
		}).on('error', function (err) {
			// error while replicating
			alert('alert donnees_journalieres_mivegec: ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		load_db_donnees_journalieres_astre()
	}
};

function load_db_donnees_journalieres_astre() {
	if ((code_equipe === '6') || (debug !== '')) {
		localDB_donnees_journalieres_astre.sync(remoteDB_donnees_journalieres_astre, {batch_size: 20}).on('complete', (info) => { 
			doc_donnees_journalieres_astre_progress_count = doc_donnees_journalieres_astre_progress_count / 20;	
			for (i=0; i<doc_donnees_journalieres_astre_progress_count; i++) {
				move();
			};
			load_db_individus_cibu();
		}).on('change', (change) => {
			counter_donnees_journalieres_astre++;  //to count how many data is sync
			console.log('Data sync donnees_journalieres_astre', counter_donnees_journalieres_astre);	
			console.log('change', change);
		}).on('error', function (err) {
			// error while replicating
			alert('alert donnees_journalieres_astre: ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		load_db_individus_cibu()
	}
};

function load_db_individus_cibu() {
	if ((code_equipe === '3') || (debug !== '')) {
		localDB_individus_cibu.sync(remoteDB_individus_cibu, {batch_size: 20}).on('complete', (info) => { 
			doc_individus_cibu_progress_count = doc_individus_cibu_progress_count / 20;	
			for (i=0; i<doc_individus_cibu_progress_count; i++) {
				move();
			};
			load_db_prelevements_cibu()
		}).on('change', (change) => {
			counter_individus_cibu++;  //to count how many data is sync
			console.log('Data sync individus_cibu', counter_individus_cibu);	
			console.log('change', change);
		}).on('error', function (err) {
			// error while replicating
			alert('alert individus_cibu: ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		load_db_prelevements_cibu()
	}
};

function load_db_prelevements_cibu() {
	if ((code_equipe === '3') || (debug !== '')) {
		localDB_prelevements_cibu.sync(remoteDB_prelevements_cibu, {batch_size: 20}).on('complete', (info) => { 
			doc_prelevements_cibu_progress_count = doc_prelevements_cibu_progress_count / 20;	
			for (i=0; i<doc_prelevements_cibu_progress_count; i++) {
				move();
			};
			loadjs('js/db_loaded.js');
		}).on('change', (change) => {
			counter_prelevements_cibu++;  //to count how many data is sync
			console.log('Data sync prelevements_cibu', counter_prelevements_cibu);	
			console.log('change', change);
		}).on('error', function (err) {
			// error while replicating
			alert('alert prelevements_cibu: ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		loadjs('js/db_loaded.js');
	}
};

function move() {
    var elem = document.getElementById("myBar");
    width = width + step;
    console.log("width : " + width);
    elem.style.width = width + '%';
    console.log("elem.style.width : " + myBar.style.width + '%');
} ;

function hide_progress_bar() {		
	var elem = document.getElementById("child");
	elem.style.display="none";
};*/


