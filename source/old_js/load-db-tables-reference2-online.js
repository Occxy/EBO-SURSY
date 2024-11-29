var step = parseFloat(localStorage.getItem('step'));
var width = parseFloat(step) * 5;

var remote_couchdb = localStorage.getItem('remote_couchdb');

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

var localDB = new PouchDB('espece' + debug);
var remoteDB = new PouchDB(remote_couchdb + 'espece' + debug, {skip_setup: true});
console.log('---espece---');
localDB.sync(remoteDB).on('complete', (info) => {   
	move();
	load_db_espece_animal();	
}).on('error', function (err) {
	// error while replicating
	alert('alert espece: ' + JSON.stringify(err));
	console.log(err);
});

function load_db_espece_animal() {
	var localDB = new PouchDB('espece_animal' + debug);
	var remoteDB = new PouchDB(remote_couchdb + 'espece_animal' + debug, {skip_setup: true});
	console.log('---espece_animal---');
	localDB.sync(remoteDB).on('complete', (info) => {   
		move();
		load_db_methode_chasse();
	}).on('error', function (err) {
		// error while replicating
		alert('alert espece_animal: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
}

function load_db_methode_chasse() {
	var localDB = new PouchDB('methode_chasse' + debug);
	var remoteDB = new PouchDB(remote_couchdb + 'methode_chasse' + debug, {skip_setup: true});
	console.log('---methode_chasse---');		
	localDB.sync(remoteDB).on('complete', (info) => {   
		move();
		load_db_destination();
	}).on('error', function (err) {
		// error while replicating
		alert('alert methode_chasse: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
}

function load_db_destination() {
	var localDB = new PouchDB('destination' + debug);
	var remoteDB = new PouchDB(remote_couchdb + 'destination' + debug, {skip_setup: true});
	console.log('---destination---');		
	localDB.sync(remoteDB).on('complete', (info) => {   
		move();
		load_db_type_animal();
	}).on('error', function (err) {
		// error while replicating
		alert('alert destination: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
}

function load_db_type_animal() {
	var localDB = new PouchDB('type_animal' + debug);
	var remoteDB = new PouchDB(remote_couchdb + 'type_animal' + debug, {skip_setup: true});
	console.log('---type_animal---');		
	localDB.sync(remoteDB).on('complete', (info) => {   
		move();
		load_db_etat_carcasse_animal();		
	}).on('error', function (err) {
		// error while replicating
		alert('alert type_animal: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
}

function load_db_etat_carcasse_animal() {
	var localDB = new PouchDB('etat_carcasse_animal' + debug);
	var remoteDB = new PouchDB(remote_couchdb + 'etat_carcasse_animal' + debug, {skip_setup: true});
	console.log('---etat_carcasse_animal---');
	localDB.sync(remoteDB).on('complete', (info) => {   
		move();
		load_db_qualite_echantillon();
	}).on('error', function (err) {
		// error while replicating
		alert('alert etat_carcasse_animal: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
}

function load_db_qualite_echantillon() {
	var localDB = new PouchDB('qualite_echantillon' + debug);
	var remoteDB = new PouchDB(remote_couchdb + 'qualite_echantillon' + debug, {skip_setup: true});
	console.log('---qualite_echantillon---');		
	localDB.sync(remoteDB).on('complete', (info) => {   
		move();
		load_db_endroit_prelevement();
	}).on('error', function (err) {
		// error while replicating
		alert('alert qualite_echantillon: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
}

function load_db_endroit_prelevement() {
	var localDB = new PouchDB('endroit_prelevement' + debug);
	var remoteDB = new PouchDB(remote_couchdb + 'endroit_prelevement' + debug, {skip_setup: true});
	console.log('---endroit_prelevement---');			
	localDB.sync(remoteDB).on('complete', (info) => {   
		move();
		load_db_activite_humaine();
	}).on('error', function (err) {
		// error while replicating
		alert('alert endroit_prelevement: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
};

function load_db_activite_humaine() {
	var localDB = new PouchDB('activite_humaine' + debug);
	var remoteDB = new PouchDB(remote_couchdb + 'activite_humaine' + debug, {skip_setup: true});
	console.log('---activite_humaine---');			
	localDB.sync(remoteDB).on('complete', (info) => {   
		move();
		loadjs('js/load-alldbs-online.js');
	}).on('error', function (err) {
		// error while replicating
		alert('alert activite_humaine: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
};

function move() {
    var elem = document.getElementById("myBar");    
    width = width + step;
    console.log("width : " + width);
    elem.style.width = width + '%';
    console.log("elem.style.width : " + elem.style.width + '%');
}


