var step = 0;
var width = 0;

var remote_couchdb = localStorage.getItem('remote_couchdb');
var code_equipe = localStorage.getItem('code_equipe');
var nom_pays = localStorage.getItem('nom_pays');
var light = localStorage.getItem('light');
var debug = localStorage.getItem('debug') || '';

show_infos();
disable_li();
show_progress_bar();

var progressbar_count = 0;
var tables_principales = getTablesPrincipales();
var tables_references = getTablesReferences();
var tabCount = new Array(tables_principales.length).fill(0);

step = 100 / (tables_principales.length + tables_references.length);

loadTablesCount(tables_principales.length);

async function loadTablesCount(i) {
  if (i > 0) {
    try {
      const localDB = new PouchDB(tables_principales[i - 1]);
      const remoteDB = new PouchDB(`${remote_couchdb}${tables_principales[i - 1]}`, { skip_setup: true });
      const infos = await remoteDB.info();
      localStorage[`${tables_principales[i - 1]}_count`] = infos.doc_count;
      tabCount[i - 1] = infos.doc_count;
    } catch (error) {
      console.error(`Error fetching info for ${tables_principales[i - 1]}:`, error);
      tabCount[i - 1] = 0;
    } finally {
      await loadTablesCount(i - 1);
    }
  } else {
    loadCountTotal();
  }
}

function loadCountTotal() {
  var total_progress_count = 0;
  for (var i = 0; i < tabCount.length; i++) {
    total_progress_count += tabCount[i];
    localStorage[`doc_${tables_principales[i]}_progress_count`] = tabCount[i];
  }
  progressbar_count = total_progress_count;
  localStorage['step'] = step;
  loadTablesReferences(tables_references.length);
}

async function loadTablesReferences(i, retries = 3) {
  if (i > 0) {
    try {
      const localDB = new PouchDB(tables_references[i - 1]);
      const remoteDB = new PouchDB(`${remote_couchdb}${tables_references[i - 1]}`, { skip_setup: true });
      await localDB.sync(remoteDB, { batch_size: 500 });
      move();
    } catch (err) {
      console.error(`Error syncing ${tables_references[i - 1]}:`, err);
      if (retries > 0) {
        console.log(`Retrying sync for ${tables_references[i - 1]} (${retries} attempts left)...`);
        await loadTablesReferences(i, retries - 1);
        return;
      } else {
        alert(`alert ${tables_references[i - 1]} ${JSON.stringify(err)}`);
        window.location = 'login.html';
      }
    } finally {
      await loadTablesReferences(i - 1);
    }
  } else {
    loadTablesPrincipales(tables_principales.length);
  }
}

async function loadTablesPrincipales(i, retries = 3) {
  if (i > 0) {
    try {
      const localDB = new PouchDB(tables_principales[i - 1]);
      const remoteDB = new PouchDB(`${remote_couchdb}${tables_principales[i - 1]}`, { skip_setup: true });
      await localDB.sync(remoteDB, { batch_size: 500 });
      move();
    } catch (err) {
      console.error(`Error syncing ${tables_principales[i - 1]}:`, err);
      if (retries > 0) {
        console.log(`Retrying sync for ${tables_principales[i - 1]} (${retries} attempts left)...`);
        await loadTablesPrincipales(i, retries - 1);
        return;
      }
    } finally {
      await loadTablesPrincipales(i - 1);
    }
  } else {
    loadjs('js/db_loaded.js');
  }
}

function move() {
  var elem = document.getElementById("myBar");
  width = width + step;
  elem.style.width = width + '%';
}

function show_progress_bar() {
  var elem = document.getElementById("child");
  elem.style.display = "block";
}

function getTablesPrincipales() {
  if (debug !== '') {
    return [
      'chauves_souris_capturees_transvihmi_guinee_debug', 'chauves_souris_non_invasives_transvihmi_guinee_debug',
      'viande_de_brousse_transvihmi_guinee_debug', 'site_transvihmi_guinee_debug', 
      'donnees_mission_transvihmi_guinee_debug', 'donnees_journalieres_transvihmi_guinee_debug',
      'chauves_souris_capturees_transvihmi_cameroun_debug', 'chauves_souris_non_invasives_transvihmi_cameroun_debug',
      'viande_de_brousse_transvihmi_cameroun_debug', 'viande_de_brousse_nhp_transvihmi_cameroun_debug', 'site_transvihmi_cameroun_debug', 
      'donnees_mission_transvihmi_cameroun_debug', 'donnees_journalieres_transvihmi_cameroun_debug',
      'chauves_souris_capturees_transvihmi_rdc_debug', 'chauves_souris_non_invasives_transvihmi_rdc_debug',
      'viande_de_brousse_transvihmi_rdc_debug', 'site_transvihmi_rdc_debug', 
      'donnees_mission_transvihmi_rdc_debug', 'donnees_journalieres_transvihmi_rdc_debug',
      'chauves_souris_capturees_astre_guinee_debug', 'chauves_souris_non_invasives_astre_guinee_debug',
      'animals_mivegec_gabon_debug', 'chauves_souris_organes_mivegec_congo_debug', 'chauves_souris_guano_mivegec_congo_debug',
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
      'grands_singes_antilopes_transvihmi_cameroun_debug', 'grands_singes_antilopes_transvihmi_rdc_debug',
      'grands_singes_antilopes_transvihmi_gabon_debug',
      'grands_singes_antilopes_transvihmi_rca_debug', 'grands_singes_antilopes_transvihmi_rwanda_debug',
      'animals_ipg_guinee_debug', 'animals_ipg_guinee_2_debug', 'animals_ipg_guinee_3_debug', 'animals_ipg_guinee_3_debug',
      'animals_ipg_guinee_4_debug', 'animals_ipg_guinee_5_debug',
      'chauves_souris_capturees_astre_transvihmi_guinee_debug', 'chauves_souris_non_invasives_astre_transvihmi_guinee_debug',
      'caracterisations_grottes_astre_transvihmi_guinee_debug', 'cameras_trap_astre_transvihmi_guinee_debug',
      'donnees_mission_astre_transvihmi_guinee_debug', 'donnees_journalieres_astre_transvihmi_guinee_debug',
      'faune_astre_transvihmi_guinee_debug',
      'rongeurs_transvihmi_cameroun_debug',
      'username', 'version'
    ];
  } else if (code_equipe === '1' && nom_pays === 'guinee') {
    return [
      'chauves_souris_capturees_transvihmi_guinee', 'chauves_souris_non_invasives_transvihmi_guinee',
      'viande_de_brousse_transvihmi_guinee', 'site_transvihmi_guinee', 
      'donnees_mission_transvihmi_guinee', 'donnees_journalieres_transvihmi_guinee',
      'chauves_souris_capturees_astre_transvihmi_guinee', 'chauves_souris_non_invasives_astre_transvihmi_guinee',
      'caracterisations_grottes_astre_transvihmi_guinee', 'cameras_trap_astre_transvihmi_guinee',
      'donnees_mission_astre_transvihmi_guinee', 'donnees_journalieres_astre_transvihmi_guinee',
      'faune_astre_transvihmi_guinee'
    ];
  } else if (code_equipe === '1' && nom_pays == 'rdc') {
    return [
      'chauves_souris_capturees_transvihmi_rdc',
      'grands_singes_antilopes_transvihmi_rdc',
      'chauves_souris_non_invasives_transvihmi_rdc',
      'viande_de_brousse_transvihmi_rdc',
      'site_transvihmi_rdc',
      'donnees_mission_transvihmi_rdc',
      'donnees_journalieres_transvihmi_rdc'
    ];
  }	else if (code_equipe === '1' && nom_pays == 'cameroun') {
	   return [
	     'chauves_souris_capturees_transvihmi_cameroun', 'chauves_souris_non_invasives_transvihmi_cameroun',
		 'viande_de_brousse_transvihmi_cameroun', 'viande_de_brousse_nhp_transvihmi_cameroun', 'site_transvihmi_cameroun',
		 'donnees_mission_transvihmi_cameroun', 'donnees_journalieres_transvihmi_cameroun',
		 'grands_singes_antilopes_transvihmi_cameroun',
	 	 'rongeurs_transvihmi_cameroun',
	   ];
	 }
  return [];
}

function getTablesReferences() {
  if (debug !== '') {
    return [
      'espece_transvihmi_guinee_debug',
      'pays_transvihmi_guinee_debug',
      'lieu_capture_transvihmi_guinee_debug'
    ];
  } else if (code_equipe === '1' && nom_pays === 'guinee') {
    return [
		'espece_transvihmi_guinee', 'pays_transvihmi_guinee', 'lieu_capture_transvihmi_guinee', 'lieu_collecte_transvihmi_guinee', 'methode_capture_transvihmi_guinee', 
        'couleur_pelage_dorsal_transvihmi_guinee', 'couleur_pelage_ventral_transvihmi_guinee',  
        'preleve_chez_transvihmi_guinee', 'methode_chasse_transvihmi_guinee', 'destination_transvihmi_guinee', 'type_animal_transvihmi_guinee', 'etat_carcasse_animal_transvihmi_guinee',
        'qualite_echantillon_transvihmi_guinee', 'endroit_prelevement_transvihmi_guinee', 'espece_animal_transvihmi_guinee', 'phenologie_transvihmi_guinee', 'activite_humaine_transvihmi_guinee'
    ];
  } else if (code_equipe === '1' && nom_pays == 'rdc') {
    return [
      'espece_transvihmi_rdc', 'pays_transvihmi_rdc', 'lieu_capture_transvihmi_rdc', 'lieu_collecte_transvihmi_rdc', 'methode_capture_transvihmi_rdc', 
      'couleur_pelage_dorsal_transvihmi_rdc', 'couleur_pelage_ventral_transvihmi_rdc',  
      'preleve_chez_transvihmi_rdc', 'methode_chasse_transvihmi_rdc', 'destination_transvihmi_rdc', 'type_animal_transvihmi_rdc', 'etat_carcasse_animal_transvihmi_rdc',
      'qualite_echantillon_transvihmi_rdc', 'endroit_prelevement_transvihmi_rdc', 'espece_animal_transvihmi_rdc', 'phenologie_transvihmi_rdc', 'activite_humaine_transvihmi_rdc'
    ];
  }	else if (code_equipe === '1' && nom_pays === 'cameroun') {
   return [
	'espece_transvihmi_cameroun', 'pays_transvihmi_cameroun', 'lieu_capture_transvihmi_cameroun', 'lieu_collecte_transvihmi_cameroun', 'methode_capture_transvihmi_cameroun', 
       'couleur_pelage_dorsal_transvihmi_cameroun', 'couleur_pelage_ventral_transvihmi_cameroun',  
       'preleve_chez_transvihmi_cameroun', 'methode_chasse_transvihmi_cameroun', 'destination_transvihmi_cameroun', 'type_animal_transvihmi_cameroun', 'etat_carcasse_animal_transvihmi_cameroun',
       'qualite_echantillon_transvihmi_cameroun', 'endroit_prelevement_transvihmi_cameroun', 'espece_animal_transvihmi_cameroun', 'phenologie_transvihmi_cameroun', 'activite_humaine_transvihmi_cameroun'
   ];
 }
  return [];
}
