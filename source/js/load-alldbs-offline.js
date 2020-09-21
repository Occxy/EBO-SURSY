var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

var code_equipe = localStorage.getItem('code_equipe');
var nom_pays = localStorage.getItem('nom_pays');

hide_progress_bar();
show_infos();
disable_li();


var tables_principales = [];
if  (debug !== '') {
} else if ((code_equipe === '1') && (nom_pays == 'guinee')) {
	tables_principales = ['chauves_souris_capturees_transvihmi_guinee', 'chauves_souris_non_invasives_transvihmi_guinee',
						  'viande_de_brousse_transvihmi', 'site_transvihmi', 
						  'donnees_mission_transvihmi', 'donnees_journalieres_transvihmi'];
} else if ((code_equipe === '1') && (nom_pays == 'cameroun')) {
}

var tables_principales_count = tables_principales.length;
load_tables_principales(tables_principales_count);

function load_tables_principales(i) {
	if (i > 0) {
		var localDB = new PouchDB(tables_principales[i-1] + debug); 
		localDB.info().then((infos) => {
		   	//doc_count = doc_count + infos.doc_count;
		   	count = infos.doc_count;
		   	//alert("label_" + tables_principales[i-1] + "_count");
		   	//var label_count =  document.getElementById("label_" + tables_principales[i-1] + "_count");
		   	localStorage[tables_principales[i-1] + '_count'] = count;
		   	localStorage['db_loaded'] = '1';
		   	//label_count.innerHTML = count;
		   	console.log('doc_' + tables_principales[i-1] + '_count', count); 
		   	return load_tables_principales(i-1);
		}).catch((error) => {
		    console.error(error);
		});
	} else {
		enable_li();
		loadjs('js/db_loaded.js');
	}		
}

function hide_progress_bar() {		
	var elem = document.getElementById("child");
	elem.style.display="none";
}

