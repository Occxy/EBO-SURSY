var prelevements_cibu_table = localStorage.getItem('prelevements_cibu');

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
		
	var table = $('#example').DataTable({
		columnDefs: [
			 { type: 'date-eu', targets: 3 }
		],
		columns: [
			{ data: null, render: 'N_identification'},					
			{ data: null, render: 'ID_preleveur'},
			{ data: null, render: 'Kit_de_prelevement'},
	        { data: null, render: 'Date_de_prelevement'},
			{ data: null, render: 'Action'}
	    ],
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + prelevements_cibu_table + debug);
	} else {
		var DB = new PouchDB(prelevements_cibu_table + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new Prelevement(row.doc.N_identification, row.doc.ID_preleveur, row.doc.Kit_de_prelevement, row.doc.Date_de_prelevement, 
    				"<td><button data-id='" + row.doc._id + "' class='btn btn-danger btn-sm deletebtn' data-title='Supprimer' data-toggle='modal' data-target='#deletemodal'><span class='fa fa-trash'></span></button>" +
                    "<button data-id='" + row.doc._id + "' class='btn btn-primary btn-sm modifybtn' data-title='Modifier'><span class='fa fa-pencil'></span></button>" +
                    "<button data-id='" + row.doc._id + "' class='btn btn-info btn-sm seebtn showbtn' data-title='Consulter'><span class='fa fa-search'></span></button></td>"
	    		));
			});
	    	table.draw();	
	    	enable_li();
	    	enable_button();
		}
	}).catch(function (err) {
		console.log(err);
	}); 	
					
});

function Prelevement(N_identification, ID_preleveur, Kit_de_prelevement, Date_de_prelevement, Action) {
    if (N_identification !== null) {
    	this._N_identification = N_identification;
    } else {
    	this._N_identification = '';
    };
    if (ID_preleveur !== null) {
    	this._ID_preleveur = ID_preleveur;	
    } else {
    	this._ID_preleveur = '';
    };
    if (Kit_de_prelevement !== null) {
    	this._Kit_de_prelevement = Kit_de_prelevement;	
    } else {
    	this._Kit_de_prelevement = '';
    };
    if (Date_de_prelevement !== null) {
    	this._Date_de_prelevement = Date_de_prelevement;	
    } else {
    	this._Date_de_prelevement = '';
    };
    this._Action = Action;
    		    
    this.N_identification = function() {
        return this._N_identification;
    };
    
    this.ID_preleveur = function() {
        return this._ID_preleveur;
    };
    
    this.Kit_de_prelevement  = function () {
    	return this._Kit_de_prelevement;
    };
 
    this.Date_de_prelevement = function () {
        return this._Date_de_prelevement;
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

