var chauves_souris_organes_table = localStorage.getItem('table_chauves_souris_organes');

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
			 { type: 'date-eu', targets: 4  }
		],
		columns: [
			{ data: null, render: 'Identification'},					
			{ data: null, render: 'Animal'},
			{ data: null, render: 'Espece'},
	        { data: null, render: 'Village'},
	        { data: null, render: 'Date_collecte'},
	        { data: null, render: 'Action'}
	    ],
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + chauves_souris_organes_table + debug);
	} else {
		var DB = new PouchDB(chauves_souris_organes_table + debug);
	};		
		
	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new Chauves_souris_organes(row.doc.Identification, row.doc.Animal, row.doc.Espece, row.doc.Village, row.doc.Date_collecte,
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

function Chauves_souris_organes(Identification, Animal, Espece, Village, Date_collecte, Action) {
    if (Identification !== null) {
    	this._Identification = Identification;
    } else {
    	this._Identification = '';
    };
    if (Animal !== null) {
    	this._Animal = Animal;	
    } else {
    	this._Animal = '';
    };
    if (Espece !== null) {
    	this._Espece = Espece;	
    } else {
    	this._Espece = '';
    };
    if (Village !== null) {
    	this._Village = Village;	
    } else {
    	this._Village = '';
    };
    if (Date_collecte !== null) {
    	this._Date_collecte = Date_collecte;	
    } else {
    	this._Date_collecte = '';
    };
    this._Action = Action;
    		    
    this.Identification = function() {
        return this._Identification;
    };
    
    this.Animal = function() {
        return this._Animal;
    };
    
    this.Espece  = function () {
    	return this._Espece;
    };
 
    this.Village = function () {
        return this._Village;
    };	
    
    this.Date_collecte = function () {
        return this._Date_collecte;
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

