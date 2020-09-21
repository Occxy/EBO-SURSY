var animals_table = localStorage.getItem('table_animals');

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
var countCCGU = 0;

$(document).ready(function() {			
		
	var table = $('#example').DataTable({
		columnDefs: [
			 { type: 'date-eu', targets: 2 }
		],
		columns: [
			{ data: null, render: 'ID_animal'},					
			{ data: null, render: 'mission'},
			{ data: null, render: 'date'},
	        { data: null, render: 'village'},
	        { data: null, render: 'animal'},
	        { data: null, render: 'Action'}
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
    			table.row.add(new Animal(row.doc.ID_animal, row.doc.mission, row.doc.date, row.doc.village, row.doc.animal,
    				"<td><button data-id='" + row.doc._id + "' class='btn btn-danger btn-sm deletebtn' data-title='Supprimer' data-toggle='modal' data-target='#deletemodal'><span class='fa fa-trash'></span></button>" +
                    "<button data-id='" + row.doc._id + "' class='btn btn-primary btn-sm modifybtn' data-title='Modifier'><span class='fa fa-pencil'></span></button>" +
                    "<button data-id='" + row.doc._id + "' class='btn btn-info btn-sm seebtn showbtn' data-title='Consulter'><span class='fa fa-search'></span></button>" +
                    "<input data-id=" + row.doc._id + " type='checkbox' class='chk'></td>"
    			));
    			
    			/*if ((row.doc.N_identification_CS.substr(0, 4)) == 'CCGU') {
    				countCCGU++;
    				DB.get(row.doc._id).then(function (doc) {
    					//Deleting an existing document
    					if (localStorage.getItem('web') === 'oui') {
    						var remote_couchdb = localStorage.getItem('remote_couchdb');
    						var DB2 = new PouchDB(remote_couchdb + bat_capturees_table + debug);
    					} else {
    						var DB2 = new PouchDB(bat_capturees_table + debug);
    					};
    					DB2.remove(doc._id, doc._rev, function(err) {
    						if (err) {
    							return console.log(err);
    					  	} else {
    					  		console.log('Document deleted successfully');
    					  		DB2.allDocs({
    								include_docs: true,
    								attachments: true
    							}).then(function (result) {
    								if ((navigator.onLine) && (localStorage.getItem('web') !== 'oui')) {
    									var localDB3 = new PouchDB(bat_capturees_table + debug);
    									var debug;
    									if (localStorage.getItem('debug') === null) {
    										debug = '';
    									} else {
    										debug = localStorage.getItem('debug');
    									};
    									var remoteDB = new PouchDB(remote_couchdb + bat_capturees_table + debug,  {skip_setup: true});
    									localDB3.sync(remoteDB).on('complete', (info) => { 
    									}).on('error', function (err) {
    							  			// error while replicating
    							  			alert('alert delete record ' + delete_record_table + ': ' + JSON.stringify(err));
    							  			window.location = 'index.html';
    							  		});
    								};
    							});
    					  	}
    					});
    				});
    			}*/
    			
			});
	    	table.draw();	
	    	enable_li();
	    	enable_button();
	    	
	    	//alert(countCCGU);
	    	
		}
	}).catch(function (err) {
		console.log(err);
	}); 	
					
});

function Animal(ID_animal, mission, date, village, animal, Action) {
    if (ID_animal !== null) {
    	this._ID_animal = ID_animal;
    } else {
    	this._ID_animal = '';
    };
    if (mission !== null) {
    	this._mission = mission;	
    } else {
    	this._mission = '';
    };
    if (date !== null) {
    	this._date = date;	
    } else {
    	this._date = '';
    };
    if (village !== null) {
    	this._village = village;	
    } else {
    	this._village = '';
    };
    if (animal !== null) {
    	this._animal = animal;	
    } else {
    	this._animal = '';
    };
    this._Action = Action;
    		    
    this.ID_animal = function() {
        return this._ID_animal;
    };
    
    this.mission = function() {
        return this._mission;
    };
    
    this.date  = function () {
    	return this._date;
    };
 
    this.village = function () {
        return this._village;
    };	
    
    this.animal = function () {
        return this._animal;
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

