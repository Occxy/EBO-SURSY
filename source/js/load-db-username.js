var remote_couchdb = localStorage.getItem('remote_couchdb');

var localDB = new PouchDB('username');
var remoteDB = new PouchDB(remote_couchdb + 'username', {skip_setup: true});
			
localDB.sync(remoteDB).on('complete', (info) => {              
	
}).on('error', function (err) {
	// error while replicating
	alert('alert username: ' + JSON.stringify(err));
	window.location = 'login.html';
});