var donnees_mission = localStorage.getItem('donnees_mission');

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

disable_li();
disable_button();

var counter = 0;
var progressbar_count = 0;
var step = 0;
var width = 0;

$(document).ready(function() {			
	
	var table;
	
	if (donnees_mission != 'donnees_mission_astre_transvihmi_guinee') {
		table = $('#example').DataTable({
			columnDefs: [
				 { type: 'date-eu', targets: 0 },
				 { type: 'date-eu', targets: 1 },
			],
			order: [[0, 'asc']],
			columns: [
				{ data: null, render: 'Date_debut'},					
				{ data: null, render: 'Date_fin'},
		        { data: null, render: 'N_site'},
		        { data: null, render: 'Type'},
		        { data: null, render: 'Interaction'},
		        { data: null, render: 'Action'}
		    ],
		    language: {
	            url: 'plug-ins/i18n/French.lang.json'
	        }
		});
	} else {
		table = $('#example').DataTable({
			columnDefs: [
				 { type: 'date-eu', targets: 0 },
				 { type: 'date-eu', targets: 1 },
			],
			order: [[0, 'asc']],
			columns: [
				{ data: null, render: 'Date_debut_mission'},					
				{ data: null, render: 'Date_fin_mission'},
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
		var DB = new PouchDB(remote_couchdb + donnees_mission + debug);
	} else {
		var DB = new PouchDB(donnees_mission + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    	
    		if (donnees_mission == 'donnees_mission_astre_transvihmi_guinee') {
	    		dataTablesData.rows.forEach(function(row){   
	    			table.row.add(new Mission2(row.doc.Date_debut_mission, row.doc.Date_fin_mission, row.doc['Préfecture'], row.doc['Ville/village'], row.doc.Site_capture, 
	    				"<td><button data-id='" + row.doc._id + "' class='btn btn-danger btn-sm deletebtn' data-title='Supprimer' data-toggle='modal' data-target='#deletemodal'><span class='fa fa-trash'></span></button>" +
	                    "<button data-id='" + row.doc._id + "' class='btn btn-primary btn-sm modifybtn' data-title='Modifier'><span class='fa fa-pencil'></span></button>" +
	                    "<button data-id='" + row.doc._id + "' class='btn btn-info btn-sm seebtn showbtn' data-title='Consulter'><span class='fa fa-search'></span></button>" +
	                    "<input data-id=" + row.doc._id + " type='checkbox' class='chk'></td>"
		    		));
				});
    		} else {
    			dataTablesData.rows.forEach(function(row){   
	    			table.row.add(new Mission(row.doc.Date_debut, row.doc.Date_fin, row.doc.N_site, row.doc.Type, row.doc.Interaction, 
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

function Mission(Date_debut, Date_fin, N_site, Type, Interaction, Action) {
    if (Date_debut !== null) {
    	this._Date_debut = Date_debut; 
    } else {
    	this._Date_debut = '';
    };
    if (Date_fin !== null) {
    	this._Date_fin = Date_fin;
    } else {
    	this._Date_fin = '';
    };
    if (N_site !== null) {
    	this._N_site = N_site;
    } else {
    	this._N_site = '';
    };
    if (Type !== null) {
    	this._Type = Type;	
    } else {
    	this._Type = '';
    };
    if (Interaction !== null) {
    	this._Interaction = Interaction;	
    } else {
    	this._Interaction = '';
    };
    this._Action = Action;
        
    this.Date_debut  = function () {
    	return this._Date_debut;
    };
 
    this.Date_fin  = function () {
    	return this._Date_fin;
    };
    
    this.N_site = function() {
        return this._N_site;
    };
    
    this.Type = function () {
        return this._Type;
    };	    

    this.Interaction = function() {
        return this._Interaction;
    };
    
    this.Action = function () {
        return this._Action;
    };
}


function Mission2(Date_debut_mission, Date_fin_mission, Prefecture, Ville_village, Site_capture, Action) {
    if (Date_debut_mission !== null) {
    	this._Date_debut_mission = Date_debut_mission; 
    } else {
    	this._Date_debut_mission = '';
    };
    if (Date_fin_mission !== null) {
    	this._Date_fin_mission = Date_fin_mission;
    } else {
    	this._Date_fin_mission = '';
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
        
    this.Date_debut_mission  = function () {
    	return this._Date_debut_mission;
    };
 
    this.Date_fin_mission  = function () {
    	return this._Date_fin_mission;
    };
    
    this.Prefecture = function() {
        return this._Prefecture;
    };
    
    this.Ville_village = function () {
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

