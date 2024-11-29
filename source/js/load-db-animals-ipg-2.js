var animals_table = localStorage.getItem('table_animals_ipg');

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
			 { type: 'date-eu', targets: 2 }
		],
		columns: [
			{ data: null, render: 'Commun_name', width: '5%'},					
			{ data: null, render: 'Date', width: '15%'},
			{ data: null, render: 'Number', width: '10%'},
	        { data: null, render: 'Square', width: '10%'},
	        { data: null, render: 'Commun', width: '10%'},
	        { data: null, render: 'Town', width: '10%'},
	        { data: null, render: 'Action', width: '10%'}
	    ],
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + animals_table + debug);
	} else {
		var DB = new PouchDB(animals_table + debug);
	};		
		
	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new Animal(row.doc['Commun name'], row.doc.Date, row.doc.Number, row.doc.Square, row.doc.Commun, row.doc.Town,
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

function Animal(Commun_name, Date, Number, Square, Commun, Town, Action) {
    if (Commun_name !== null) {
    	this._Commun_name = Commun_name;
    } else {
    	this._Commun_name = '';
    };
    if (Date !== null) {
    	this._Date = Date;	
    } else {
    	this._Date = '';
    };
    if (Number !== null) {
    	this._Number = Number;	
    } else {
    	this._Number = '';
    };
    if (Square !== null) {
    	this._Square = Square;	
    } else {
    	this._Square = '';
    };
    if (Commun !== null) {
    	this._Commun = Commun;	
    } else {
    	this._Commun = '';
    };
    if (Town !== null) {
    	this._Town = Town;	
    } else {
    	this.Town = '';
    };
    this._Action = Action;
    		    
    this.Commun_name = function() {
        return this._Commun_name;
    };
    
    this.Date = function() {
        return this._Date;
    };
    
    this.Number  = function () {
    	return this._Number;
    };
 
    this.Square = function () {
        return this._Square;
    };

    this.Commun = function () {
        return this._Commun;
    };
    
    this.Town = function () {
        return this._Town;
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

