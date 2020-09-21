var individus_cibu_table = localStorage.getItem('individus_cibu');

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
		columns: [
			{ data: null, render: 'N_identification'},					
			{ data: null, render: 'Espece'},
			{ data: null, render: 'Age'},
	        { data: null, render: 'Pays_habitation'},
			{ data: null, render: 'Action'}
	    ],
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + individus_cibu_table + debug);
	} else {
		var DB = new PouchDB(individus_cibu_table + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new Individu(row.doc.N_identification, row.doc.Espece, row.doc.Age, row.doc.Pays_habitation, 
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

function Individu(N_identification, Espece, Age, Pays_habitation, Action) {
    if (N_identification !== null) {
    	this._N_identification = N_identification;
    } else {
    	this._N_identification = '';
    };
    if (Espece !== null) {
    	this._Espece = Espece;	
    } else {
    	this._Espece = '';
    };
    if (Age !== null) {
    	this._Age = Age;	
    } else {
    	this._Age = '';
    };
    if (Pays_habitation !== null) {
    	this._Pays_habitation = Pays_habitation;	
    } else {
    	this._Pays_habitation = '';
    };
    this._Action = Action;
    		    
    this.N_identification = function() {
        return this._N_identification;
    };
    
    this.Espece = function() {
        return this._Espece;
    };
    
    this.Age  = function () {
    	return this._Age;
    };
 
    this.Pays_habitation = function () {
        return this._Pays_habitation;
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

