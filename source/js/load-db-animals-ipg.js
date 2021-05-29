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
			{ data: null, render: 'ID', width: '5%'},					
			{ data: null, render: 'Especes', width: '15%'},
			{ data: null, render: 'Sampling_date', width: '10%'},
	        { data: null, render: 'Age', width: '10%'},
	        { data: null, render: 'Sex', width: '10%'},
	        { data: null, render: 'Weight', width: '10%'},
	        { data: null, render: 'Sampling_site', width: '30%'},
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
    			table.row.add(new Animal(row.doc.ID, row.doc.Especes, row.doc.Sampling_date, row.doc.Age, row.doc.Weight, row.doc.Sex, row.doc.Sampling_site,
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

function Animal(ID, Especes, Sampling_date, Age, Weight, Sex, Sampling_site, Action) {
    if (ID !== null) {
    	this._ID = ID;
    } else {
    	this._ID = '';
    };
    if (Especes !== null) {
    	this._Especes = Especes;	
    } else {
    	this._Especes = '';
    };
    if (Sampling_date !== null) {
    	this._Sampling_date = Sampling_date;	
    } else {
    	this._Sampling_date = '';
    };
    if (Age !== null) {
    	this._Age = Age;	
    } else {
    	this._Age = '';
    };
    if (Weight !== null) {
    	this._Weight = Weight;	
    } else {
    	this._Weight = '';
    };
    if (Sex !== null) {
    	this._Sex = Sex;	
    } else {
    	this._Sex = '';
    };
    if (Sampling_site !== null) {
    	this._Sampling_site = Sampling_site;	
    } else {
    	this._Sampling_site = '';
    };
    this._Action = Action;
    		    
    this.ID = function() {
        return this._ID;
    };
    
    this.Especes = function() {
        return this._Especes;
    };
    
    this.Sampling_date  = function () {
    	return this._Sampling_date;
    };
 
    this.Age = function () {
        return this._Age;
    };

    this.Weight = function () {
        return this._Weight;
    };
    
    this.Sex = function () {
        return this._Sex;
    };	
    
    this.Sampling_site = function () {
        return this._Sampling_site;
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

