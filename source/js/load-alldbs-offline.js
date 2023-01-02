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

	tables_principales = ['chauves_souris_capturees_transvihmi_guinee', 'chauves_souris_non_invasives_transvihmi_guinee',
		  'viande_de_brousse_transvihmi_guinee', 'site_transvihmi_guinee', 
		  'donnees_mission_transvihmi_guinee', 'donnees_journalieres_transvihmi_guinee',
		  'chauves_souris_capturees_transvihmi_cameroun', 'chauves_souris_non_invasives_transvihmi_cameroun',
		  'viande_de_brousse_transvihmi_cameroun', 'viande_de_brousse_nhp_transvihmi_cameroun', 'site_transvihmi_cameroun', 
		  'donnees_mission_transvihmi_cameroun', 'donnees_journalieres_transvihmi_cameroun',
		  'chauves_souris_capturees_transvihmi_rdc', 'chauves_souris_non_invasives_transvihmi_rdc',
		  'viande_de_brousse_transvihmi_rdc', 'site_transvihmi_rdc', 
		  'donnees_mission_transvihmi_rdc', 'donnees_journalieres_transvihmi_rdc',
		  'chauves_souris_capturees_astre_guinee', 'chauves_souris_non_invasives_astre_guinee',
		  'animals_mivegec_congo', 'animals_mivegec_gabon',
		  'site_astre_guinee', 
		  'donnees_mission_astre_guinee', 'donnees_journalieres_astre_guinee',
		  'chauves_souris_capturees_astre_congo', 'chauves_souris_non_invasives_astre_congo',
		  'site_astre_congo', 
		  'donnees_mission_astre_congo', 'donnees_journalieres_astre_congo',
		  'chauves_souris_capturees_astre_gabon', 'chauves_souris_non_invasives_astre_gabon',
		  'site_astre_gabon', 
		  'donnees_mission_astre_gabon', 'donnees_journalieres_astre_gabon',
		  'chauves_souris_capturees_mivegec', 'chauves_souris_non_invasives_mivegec',
		  'site_mivegec', 
		  'donnees_mission_mivegec', 'donnees_journalieres_mivegec',
		  'grands_singes_antilopes_transvihmi_cameroun', 'grands_singes_antilopes_transvihmi_rdc',
		  'grands_singes_antilopes_transvihmi_rca', 'grands_singes_antilopes_transvihmi_rwanda',
		  'animals_ipg_guinee',
		  'chauves_souris_capturees_astre_transvihmi_guinee', 'chauves_souris_non_invasives_astre_transvihmi_guinee',
		  'caracterisations_grottes_astre_transvihmi_guinee', 'cameras_trap_astre_transvihmi_guinee',
		  'donnees_mission_astre_transvihmi_guinee', 'donnees_journalieres_astre_transvihmi_guinee',
		  'faune_astre_transvihmi_guinee']
} else if ((code_equipe === '1') && (nom_pays == 'guinee')) {
	tables_principales = ['chauves_souris_capturees_transvihmi_guinee', 'chauves_souris_non_invasives_transvihmi_guinee',
						  'viande_de_brousse_transvihmi_guinee', 'site_transvihmi_guinee', 
						  'donnees_mission_transvihmi_guinee', 'donnees_journalieres_transvihmi_guinee',
						  'chauves_souris_capturees_astre_transvihmi_guinee', 'chauves_souris_non_invasives_astre_transvihmi_guinee',
						  'caracterisations_grottes_astre_transvihmi_guinee', 'cameras_trap_astre_transvihmi_guinee',
						  'donnees_mission_astre_transvihmi_guinee', 'donnees_journalieres_astre_transvihmi_guinee',
						  'faune_astre_transvihmi_guinee'];
} else if ((code_equipe === '1') && (nom_pays == 'cameroun')) {
	tables_principales = ['chauves_souris_capturees_transvihmi_cameroun', 'chauves_souris_non_invasives_transvihmi_cameroun',
						  'viande_de_brousse_transvihmi_cameroun', 'site_transvihmi_cameroun', 
						  'donnees_mission_transvihmi_cameroun', 'donnees_journalieres_transvihmi_cameroun'];
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
		   	localStorage[tables_principales[i-1]  + debug + '_count'] = count;
		   	
		   	//label_count.innerHTML = count;
		   	console.log('doc_' + tables_principales[i-1]  + debug + '_count', count); 
		   	return load_tables_principales(i-1);
		}).catch((error) => {
		    console.error(error);
		});
	} else {
		localStorage['db_loaded'] = '1';
		enable_li();
		loadjs('js/db_loaded.js');
	}		
}

function hide_progress_bar() {		
	var elem = document.getElementById("child");
	elem.style.display="none";
}

