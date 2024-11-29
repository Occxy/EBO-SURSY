var import_table = localStorage.getItem('import_table'); 
var remote_couchdb = localStorage.getItem('remote_couchdb');

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

disable_li();

var localDB = new PouchDB(import_table + debug);
var remoteDB = new PouchDB(remote_couchdb + import_table + debug, {skip_setup: true});

var counter = 0;
var progressbar_count = 0;
var step = 0;
var width = 0;

var doc_count = 0;
remoteDB.info().then((infos) => {
	doc_count = infos.doc_count;
    console.log('doc_count', doc_count);    
    progressbar_count = Math.round(doc_count / 20);
    step = 100 / progressbar_count;    
}).catch((error) => {
    console.error(error);
});

localDB.sync(remoteDB, {batch_size: 20}).on('complete', (info) => {              
	hide_progress_bar();
	enable_li();
}).on('change', (change) => {
	counter++;  //to count how many data is sync
	console.log('Data sync', counter);	
	console.log('change', change);
	move();
}).on('error', function (err) {
	// error while replicating
	alert('alert ' + table + ': ' + JSON.stringify(err));
	window.location = 'login.html';
});

function move() {
    var elem = document.getElementById("myBar");
    width = width + step;
    elem.style.width = width + '%';
} 

function hide_progress_bar() {		
	var elem = document.getElementById("child");
	elem.style.display="none";
}
