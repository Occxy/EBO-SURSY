var donnees_journalieres = localStorage.getItem('donnees_journalieres');

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

disable_li();
disable_button();

var localDB = new PouchDB(donnees_journalieres + debug);

var counter = 0;
var progressbar_count = 0;
var step = 0;
var width = 0;

$(document).ready(function() {		
	
	if (donnees_journalieres != 'donnees_journalieres_astre_transvihmi_guinee') {
		var table = $('#example').DataTable({
			columnDefs: [
				 { type: 'date-eu', targets: 2 }
			],
			columns: [
				{ data: null, render: 'Date'},					
				{ data: null, render: 'N_site'},
		        { data: null, render: 'ID_CS_preleve_debut'},
		        { data: null, render: 'ID_CS_preleve_fin'},
		        { data: null, render: 'Roost_diurne'},
		        { data: null, render: 'Utilisation_site_nocturne'},
		        { data: null, render: 'Action'}
		    ],
		    language: {
	            url: 'plug-ins/i18n/French.lang.json'
	        }
		});
	} else {
		var table = $('#example').DataTable({
			columnDefs: [
				 { type: 'date-eu', targets: 2 }
			],
			columns: [
				{ data: null, render: 'Date'},					
				{ data: null, render: 'ID_CS_preleve_debut'},
		        { data: null, render: 'ID_CS_preleve_fin'},
		        { data: null, render: 'Prefecture'},
		        { data: null, render: 'Ville_village'},
		        { data: null, render: 'Site_capture'},
		        { data: null, render: 'Action'}
		    ],
		    language: {
	            url: 'plug-ins/i18n/French.lang.json'
	        }
		});
	}
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + donnees_journalieres + debug);
	} else {
		var DB = new PouchDB(donnees_journalieres + debug);
	};		
	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    	
    		if (donnees_journalieres == 'donnees_journalieres_astre_transvihmi_guinee') {
	    		dataTablesData.rows.forEach(function(row){   
	    			table.row.add(new Journaliere2(row.doc.Date, row.doc.ID_CS_preleve_debut, row.doc.ID_CS_preleve_fin, row.doc.Prefecture, row.doc['Ville/village'], row.doc.Site_capture,
	    				"<td><button data-id='" + row.doc._id + "' class='btn btn-danger btn-sm deletebtn' data-title='Supprimer' data-toggle='modal' data-target='#deletemodal'><span class='fa fa-trash'></span></button>" +
	                    "<button data-id='" + row.doc._id + "' class='btn btn-primary btn-sm modifybtn' data-title='Modifier'><span class='fa fa-pencil'></span></button>" +
	                    "<button data-id='" + row.doc._id + "' class='btn btn-info btn-sm seebtn showbtn' data-title='Consulter'><span class='fa fa-search'></span></button>" +
	                    "<input data-id=" + row.doc._id + " type='checkbox' class='chk'></td>"
		    		));
				});
    		} else {
    			dataTablesData.rows.forEach(function(row){   
	    			table.row.add(new Journaliere(row.doc.Date, row.doc.N_site, row.doc.ID_CS_preleve_debut, row.doc.ID_CS_preleve_fin, row.doc.Roost_diurne, row.doc.Utilisation_site_nocturne,
	    				"<td><button data-id='" + row.doc._id + "' class='btn btn-danger btn-sm deletebtn' data-title='Supprimer' data-toggle='modal' data-target='#deletemodal'><span class='fa fa-trash'></span></button>" +
	                    "<button data-id='" + row.doc._id + "' class='btn btn-primary btn-sm modifybtn' data-title='Modifier'><span class='fa fa-pencil'></span></button>" +
	                    "<button data-id='" + row.doc._id + "' class='btn btn-info btn-sm seebtn showbtn' data-title='Consulter'><span class='fa fa-search'></span></button>" +
	                    "<input data-id=" + row.doc._id + " type='checkbox' class='chk'></td>"
		    		));
				});
    		}
	    	table.draw();	
	    	enable_li();
	    	enable_button();
		}
	}).catch(function (err) {
		console.log(err);
	}); 	
					
});

function Journaliere(Date, N_site, ID_CS_preleve_debut, ID_CS_preleve_fin, Roost_diurne, Utilisation_site_nocturne, Action) {
    if (Date !== null) {
    	this._Date = Date; 
    } else {
    	this._Date = '';
    };
    if (N_site !== null) {
    	this._N_site = N_site;
    } else {
    	this._N_site = '';
    };
    if (ID_CS_preleve_debut !== null) {
    	this._ID_CS_preleve_debut = ID_CS_preleve_debut;
    } else {
    	this._ID_CS_preleve_debut = '';
    };
    if (ID_CS_preleve_fin !== null) {
    	this._ID_CS_preleve_fin = ID_CS_preleve_fin;	
    } else {
    	this._ID_CS_preleve_fin = '';
    };
    if (Roost_diurne !== null) {
    	this._Roost_diurne = Roost_diurne;	
    } else {
    	this._Roost_diurne = '';
    };
    if (Utilisation_site_nocturne !== null) {
    	this._Utilisation_site_nocturne = Utilisation_site_nocturne;	
    } else {
    	this._Utilisation_site_nocturne = '';
    };
        
    this._Action = Action;
        
    this.Date  = function () {
    	return this._Date;
    };
 
    this.N_site = function() {
        return this._N_site;
    };
    
    this.ID_CS_preleve_debut = function () {
        return this._ID_CS_preleve_debut;
    };	    

    this.ID_CS_preleve_fin = function() {
        return this._ID_CS_preleve_fin;
    };
    
    this.Roost_diurne = function () {
        return this._Roost_diurne;
    };	    

    this.Utilisation_site_nocturne = function() {
        return this._Utilisation_site_nocturne;
    };
    
    this.Action = function () {
        return this._Action;
    };
}


function Journaliere2(Date, ID_CS_preleve_debut, ID_CS_preleve_fin, Prefecture, Ville_village, Site_capture, Action) {
    if (Date !== null) {
    	this._Date = Date; 
    } else {
    	this._Date = '';
    };
    if (ID_CS_preleve_debut !== null) {
    	this._ID_CS_preleve_debut = ID_CS_preleve_debut;
    } else {
    	this._ID_CS_preleve_debut = '';
    };
    if (ID_CS_preleve_fin !== null) {
    	this._ID_CS_preleve_fin = ID_CS_preleve_fin;	
    } else {
    	this._ID_CS_preleve_fin = '';
    };
    if (Prefecture !== null) {
    	this._Prefecture = Prefecture;	
    } else {
    	this._Prefecture = '';
    };
    if (Ville_village !== null) {
    	this._Ville_village = Ville_village;	
    } else {
    	this._Ville_village = '';
    };
    if (Site_capture !== null) {
    	this._Site_capture = Site_capture;	
    } else {
    	this._Site_capture = '';
    };
    
    this._Action = Action;
        
    this.Date  = function () {
    	return this._Date;
    };
    
    this.ID_CS_preleve_debut = function () {
        return this._ID_CS_preleve_debut;
    };	    

    this.ID_CS_preleve_fin = function() {
        return this._ID_CS_preleve_fin;
    };
    
    this.Prefecture = function () {
        return this._Prefecture;
    };	    

    this.Ville_village = function() {
        return this._Ville_village;
    };
    
    this.Site_capture = function() {
        return this._Site_capture;
    };
    
    this.Action = function () {
        return this._Action;
    };
}

function disable_button() {
	var button_add =  document.getElementById("button_add");
	button_add.classList.add("noclick");
};

function enable_button() {
	var button_add =  document.getElementById("button_add");
	button_add.classList.remove("noclick");
};

