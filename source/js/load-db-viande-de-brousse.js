var viande_de_brousse_table = localStorage.getItem('viande_de_brousse_table');

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
			 { type: 'date-eu', targets: 0 }
		],
		columns: [
			{ data: null, render: 'Date'},					
			{ data: null, render: 'Pays'},
			{ data: null, render: 'Genre'},
	        { data: null, render: 'Espece'},
	        { data: null, render: 'Identification'},
			{ data: null, render: 'Action'}
	    ],
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + viande_de_brousse_table + debug);
	} else {
		var DB = new PouchDB(viande_de_brousse_table + debug);
	};
	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new Viande_de_brousse(row.doc.Date, row.doc.Pays, row.doc.Genre, row.doc.Espece, row.doc.N_identification_echantillon,
    				"<td><button data-id='" + row.doc._id + "' class='btn btn-danger btn-sm deletebtn' data-title='Supprimer' data-toggle='modal' data-target='#deletemodal'><span class='fa fa-trash'></span></button>" +
                    "<button data-id='" + row.doc._id + "' class='btn btn-primary btn-sm modifybtn' data-title='Modifier'><span class='fa fa-pencil'></span></button>" +
                    "<button data-id='" + row.doc._id + "' class='btn btn-info btn-sm seebtn showbtn' data-title='Consulter'><span class='fa fa-search'></span></button>" + 
                    "<input data-id=" + row.doc._id + " type='checkbox' class='chk'></td>"
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

function Viande_de_brousse(Date, Pays, Genre, Espece, Identification, Action) {
	
    this._Date = Date;
    this._Pays = Pays;					
    this._Genre = Genre;
    this._Espece = Espece;
    this._Identification = Identification;
    this._Action = Action;
    		    
    this.Date = function() {
        return this._Date;
    };
    
    this.Pays = function() {
        return this._Pays;
    };
    
    this.Genre  = function () {
    	return this._Genre;
    };
 
    this.Espece = function () {
        return this._Espece;
    };	
    
    this.Identification = function () {
        return this._Identification;
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

