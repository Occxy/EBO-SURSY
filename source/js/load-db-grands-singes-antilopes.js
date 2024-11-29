var grands_singes_antilopes_table = localStorage.getItem('table_grands_singes_antilopes');

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
		/*columnDefs: [
			 { type: 'date-eu', targets: 1 }
		],*/
		columns: [
			{ data: null, render: 'N_labo'},					
			{ data: null, render: 'date_collecte'},
			{ data: null, render: 'boite_labo'},
	        { data: null, render: 'N_espece_terrain'},
	        { data: null, render: 'lieu_principal'},
	        { data: null, render: 'Action'}
	    ],
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + grands_singes_antilopes_table + debug);
	} else {
		var DB = new PouchDB(grands_singes_antilopes_table + debug);
	};		
		
	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new Grands_singes_antilopes(row.doc.N_labo, row.doc.date_collecte, row.doc.boite_labo, row.doc.N_espece_terrain, row.doc.lieu_principal,
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

function Grands_singes_antilopes(N_labo, date_collecte, boite_labo, N_espece_terrain, lieu_principal, Action) {
    if (N_labo !== null) {
    	this._N_labo = N_labo;
    } else {
    	this._N_labo = '';
    };
    if (date_collecte !== null) {
    	this._date_collecte = date_collecte;	
    } else {
    	this._date_collecte = '';
    };
    if (boite_labo !== null) {
    	this._boite_labo = boite_labo;	
    } else {
    	this._boite_labo = '';
    };
    if (N_espece_terrain !== null) {
    	this._N_espece_terrain = N_espece_terrain;	
    } else {
    	this._N_espece_terrain = '';
    };lieu_principal
    if (lieu_principal !== null) {
    	this._lieu_principal = lieu_principal;	
    } else {
    	this._lieu_principal = '';
    };
    this._Action = Action;
    		    
    this.N_labo = function() {
        return this._N_labo;
    };
    
    this.date_collecte = function() {
        return this._date_collecte;
    };
    
    this.boite_labo  = function () {
    	return this._boite_labo;
    };
 
    this.N_espece_terrain = function () {
        return this._N_espece_terrain;
    };	
    
    this.lieu_principal = function () {
        return this._lieu_principal;
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

