var import_table = localStorage.getItem('import_table'); 
var file = localStorage.getItem('file_import');
var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

var valid_field = 
	['Mission', 'Date_de_collecte', 'Identifiant_plaques', 'Nd_de_guanos', 'Point_GPS_LAT', 'Point_GPS_LONG', 'Village'];
     
     


var field = [];
var data = [];
            	
var lines = file.trim().split("\n");
var lines_length = lines.length;
var tab = new Array();

var tab_max = 0;
var progressbar_count = 0;
var step = 0;
var width = 0;

var rowContent_length;

var i = 0;

var myTab = new Array();

var rowContent = [];


var row = 0;

importation()

function importation() {
	disable_li();
	disable_button();
	
	if (lines_length > 1) {
	
		var row = 0;
		
		field = lines[0].trim().split(";");
		rowContent_length = field.length;
		
		//verif valid template
		if (fields_is_valid()) {
			
				for (var line = 1; line < lines_length; line++) {
					rowContent = lines[line].trim().split(";");
					fill_tab_datas_chauves_souris_guano(line);
				};
			
		} else {
			failure_fields("Vérifier que les noms des champs sont valides et bien placés !");
		};	
	};
}

function fields_is_valid() {
	for (var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
		if (field[rowCountContent] != valid_field[rowCountContent]) {
			console.log(field[rowCountContent] + '-' + valid_field[rowCountContent]);	
			if (field[rowCountContent] != '') {
				return false;
			}			
		};
	};
	return true;
};

function fill_tab_datas_chauves_souris_guano(file_line) {
	tab[file_line] = new Array();
	
	for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
		tab[file_line][rowCountContent] = rowContent[rowCountContent];
	};
	
	if (file_line == lines_length - 1) {
		show_progress_bar();
		
		progressbar_count = Math.round(lines_length / 20);
		step = 100 / progressbar_count; 
		step = step / 2;
		width = 0;
		
		search_N_identification_Recursif(lines_length);
	};
};

function search_N_identification_Recursif(/*localDB, */i) {
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'chauves_souris_guano' + import_table + debug);
	} else {
		var DB = new PouchDB('chauves_souris_guano' + import_table + debug);
	};
	
	if (i > 0) {

		if (typeof tab[i] !== "undefined") {
			var ID = tab[i][2];
			
			DB.find({
		       	selector: {ID: ID}
			}).then(function (result) {
		    	
		    	if (result.docs.length > 0) {
		    		move();
		    		row++;
		    		if (record_exists(result)) {
		    			
		    			var id = result.docs[0]._id;
		    			put_with_id_chauves_souris_guano(id, i);
		    			
		    			search_N_identification_Recursif(/*localDB, */i-1);
		    			
				    } else {
		    			search_N_identification_Recursif(/*localDB, */i-1);
				    };
		    	} else {
		    		
		    		var new_doc = {};
		    		
		    		for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
						
		    			
		    			
			    			var name_field = field[rowCountContent];
							var rowContent = tab[i][rowCountContent]
							new_doc[name_field] = rowContent;
		    				
					};
					
					var id = uuid();
					new_doc._id = id;
					new_doc.Username = localStorage.getItem('loginUsername');
					
					
								
					put_new_id_chauves_souris_guano(new_doc, i);
					
					move();
					row++;
					
					search_N_identification_Recursif(/*localDB, */i-1);
		    		
		    	}
		    }).catch(function (err) {
		       	console.log(err);
		    });
			
			console.log("full - " + i);
		} else {
			console.log("empty - " + i);
			move();
			row++;
			
			search_N_identification_Recursif(/*localDB, */i-1);
			
		};
	} else {
		
		synchronizeAnimals();
		
	};
};

function put_with_id_chauves_souris_guano(id, i) {
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'chauves_souris_guano' + import_table + debug);
	} else {
		var DB = new PouchDB('chauves_souris_guano' + import_table + debug);
	};
	DB.get(id).then(function (doc) {
		
		for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
			
			
				var name_field = field[rowCountContent];
				
				var rowContent = tab[i][rowCountContent];
				
				doc[name_field] = rowContent;
				
			

		};
		doc.Username = localStorage.getItem('loginUsername');
		
		return DB.put(doc).then(function () {
			return DB.get(id).then(function () {
			});
		});
	}).catch(function (err) {
       	console.log(err);
       	console.log('error ' + id);
    });
};


function put_new_id_chauves_souris_guano(doc, i) {
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'chauves_souris_guano' + import_table + debug);
	} else {
		var DB = new PouchDB('chauves_souris_guano' + import_table + debug);
	};
	DB.put(doc).then(function () {
		console.log('put - add : ' + i);
		console.log(i + " : " + tab[i][0]);
	});
};

function synchronizeAnimals() {
	
	if (localStorage.getItem('web') !== 'oui') {
		var localDB = new PouchDB('chauves_souris_guano' + import_table + debug);
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var remoteDB = new PouchDB(remote_couchdb + 'chauves_souris_guano' + import_table + debug, {skip_setup: true});
		localDB.sync(remoteDB, {batch_size: 20}).on('complete', (info) => {              
			hide_progress_bar();
			enable_li();
			enable_button();
			success();
		}).on('change', (change) => {
			move_2();
		}).on('error', function (err) {
			alert('alert ' + import_table + ': ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		hide_progress_bar();
		enable_li();
		enable_button();
		success();
	}
	
	console.log('synchronized !');
};

function record_exists(result) {
    var doc = result.docs[0];
	if (result.docs[0].ID_animal !== null) {
		return true
	} else {
		return false
	};
};

function move() {
	i++;
	if (i == 20) { 
		var bar = document.getElementById("myBar");
    	width = width + step;
    	bar.style.width = width + '%';
    	i = 0;
    };
};

function move_2() {
    var elem = document.getElementById("myBar");
    width = width + step;
    elem.style.width = width + '%';
};

function hide_progress_bar() {		
	var elem = document.getElementById("child");
	elem.style.display = "none";
};

function show_progress_bar() {		
	var elem = document.getElementById("child");
	elem.style.display="block";
	var label =  document.getElementById("progress_label");
	label.innerHTML = 'Importation des données...';
};

function success() {
	var elem = document.getElementById("success_label");
	elem.style.display = "block";
	var label =  document.getElementById("success");
	label.style.color = "green";
	label.innerHTML = 'Importation du fichier réussie !';
};

function failure_fields(msg) {
	var elem = document.getElementById("success_label");
	elem.style.display = "block";
	var label =  document.getElementById("success");
	label.style.color = "red";
	label.innerHTML = msg;
	enable_li();
	enable_button();
};

function hide_success() {	
	var elem = document.getElementById("success_label");
	elem.style.display = "none";
};

function disable_button() {
	var button_open =  document.getElementById("button_open");
	button_open.classList.add("noclick");
	var button_download =  document.getElementById("button_download");
	button_download.classList.add("noclick");
};

function enable_button() {
	var button_open =  document.getElementById("button_open");
	button_open.classList.remove("noclick");
	var button_download =  document.getElementById("button_download");
	button_download.classList.remove("noclick");
};



