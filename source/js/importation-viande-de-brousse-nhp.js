var import_table = localStorage.getItem('import_table'); 
var file = localStorage.getItem('file_import');
var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

var valid_field = 
	['number', 'date', 'nom', 'nom_scientifique', 'site',	
	 'village', 'sex', 'age', 'M_ou_V', 'sero_status_siv', 'siv_pcr', 'dna_species'];

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
					//console.log(rowContent[0]);
					fill_tab_datas_viande_de_brousse_nhp(/*rowContent[0], */line);
				};
			/*} else {
				failure_fields("Le fichier d'importation ne doit concerner qu'un seul et même pays !");
			};*/	
			
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

function fill_tab_datas_viande_de_brousse_nhp(file_line) {
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
	
	//alert(import_table)
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'viande_de_brousse_nhp' + import_table + debug);
	} else {
		var DB = new PouchDB('viande_de_brousse_nhp' + import_table + debug);
	};
	
	if (i > 0) {

		if (typeof tab[i] !== "undefined") {
			var number = tab[i][0];
			
			DB.find({
		       	selector: {number: number}
			}).then(function (result) {
		    	
		    	if (result.docs.length > 0) {
		    		move();
		    		row++;
		    		if (record_exists(result)) {
		    			
		    			var id = result.docs[0]._id;
		    			put_with_id_viande_de_brousse_nhp(id, i);
		    			
		    			
		    			search_N_identification_Recursif(/*localDB, */i-1);
		    			//addEspeceInTableReferenceBatCapturees(i);
		    			
				    } else {
		    			search_N_identification_Recursif(/*localDB, */i-1);
				    };
		    	} else {
		    		
		    		var new_doc = {};
		    		
		    		//var numero_individu_string = extraireNombre(N_identification_CS);
		    		//var numero_individu = Number(numero_individu_string);
		    		
		    		for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
						var name_field = field[rowCountContent];
						var rowContent = tab[i][rowCountContent]
						
						
						//trim pour Famille/Genre/Espèce
						/*if (rowCountContent > 18 && rowCountContent < 28) {
							if ((rowCountContent === 19) || (rowCountContent === 22) || (rowCountContent === 25)) {
								new_doc[name_field] = rowContent.trim().toUpperCase();
							} else {
								new_doc[name_field] = rowContent.trim();	
							};
						} else {*/
							new_doc[name_field] = rowContent;
							
							/*addValueInTableReferenceBatCapturees(rowCountContent, rowContent);
						};*/
					};
					
					//addEspeceInTableReferenceBatCapturees(i);
					
					var id = uuid();
					new_doc._id = id;
					//new_doc.Numero_individu = String(numero_individu);
					new_doc.Username = localStorage.getItem('loginUsername');
								
					put_new_id_viande_de_brousse_nhp(new_doc, i);
					
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
		
		synchronizeGrandsSinges_Antilopes();
		/*if (localStorage.getItem('web') !== 'oui') {
			synchronizeEspece('espece');
		}*/
	};
};

function put_with_id_viande_de_brousse_nhp(id, i) {
	
	//var sN_identification;
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'viande_de_brousse_nhp' + import_table + debug);
	} else {
		var DB = new PouchDB('viande_de_brousse_nhp' + import_table + debug);
	};
	DB.get(id).then(function (doc) {
		
		for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
			var name_field = field[rowCountContent];
			
			var rowContent = tab[i][rowCountContent];
			
			//addValueInTableReferenceBatCapturees(rowCountContent, rowContent);
						
			//trim pour Famille/Genre/Espèce
			/*if (rowCountContent > 18 && rowCountContent < 28) {	
				if ((rowCountContent === 19) || (rowCountContent === 22) || (rowCountContent === 25)) {
					doc[name_field] = rowContent.trim().toUpperCase();
				} else {
					doc[name_field] = rowContent.trim();	
				};
			} else {*/
				doc[name_field] = rowContent;
			//};
			
			doc.Username = localStorage.getItem('loginUsername');
			

		};
		
		//addEspeceInTableReferenceBatCapturees(i);
		
		return DB.put(doc).then(function () {
			return DB.get(id).then(function () {
				/*if (i == tab_max) {
					if (navigator.onLine) {
						synchronizeBatCapturees();
					};
				};*/
			});
		});
	}).catch(function (err) {
       	console.log(err);
       	console.log('error ' + id);
    });
};


function put_new_id_viande_de_brousse_nhp(doc, i) {
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'viande_de_brousse_nhp' + import_table + debug);
	} else {
		var DB = new PouchDB('viande_de_brousse_nhp' + import_table + debug);
	};
	DB.put(doc).then(function () {
		console.log('put - add : ' + i);
		console.log(i + " : " + tab[i][0]);
	});
};

function synchronizeGrandsSinges_Antilopes() {
	
	if (localStorage.getItem('web') !== 'oui') {
		var localDB = new PouchDB('viande_de_brousse_nhp' + import_table + debug);
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var remoteDB = new PouchDB(remote_couchdb + 'viande_de_brousse_nhp' + import_table + debug, {skip_setup: true});
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
	if (result.docs[0].number !== null) {
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



