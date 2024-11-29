var chauves_souris_guano_table = localStorage.getItem('table_chauves_souris_guano');

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

			{ data: null, render: 'Mission'},					
			{ data: null, render: 'Date_de_collecte'},
			{ data: null, render: 'Identifiant_plaques'},
	        { data: null, render: 'Nd_de_guanos'},
	        { data: null, render: 'Village'},
	        { data: null, render: 'Action'}
	    ],
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + chauves_souris_guano_table + debug);
	} else {
		var DB = new PouchDB(chauves_souris_guano_table + debug);
	};		
		
	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new Chauves_souris_guano(row.doc.Mission, row.doc.Date_de_collecte, row.doc.Identifiant_plaques, row.doc.Nd_de_guanos, row.doc.Village,
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

function Chauves_souris_guano(Mission, Date_de_collecte, Identifiant_plaques, Nd_de_guanos, Village, Action) {
    if (Mission !== null) {
    	this._Mission = Mission;
    } else {
    	this._Mission = '';
    };
    if (Date_de_collecte !== null) {
    	this._Date_de_collecte = Date_de_collecte;	
    } else {
    	this._Date_de_collecte = '';
    };
    if (Identifiant_plaques !== null) {
    	this._Identifiant_plaques = Identifiant_plaques;	
    } else {
    	this._Identifiant_plaques = '';
    };
    if (Nd_de_guanos !== null) {
    	this._Nd_de_guanos = Nd_de_guanos;	
    } else {
    	this._Nd_de_guanos = '';
    };
    if (Village !== null) {
    	this._Village = Village;	
    } else {
    	this._Village = '';
    };
    this._Action = Action;
    		    
    this.Mission = function() {
        return this._Mission;
    };
    
    this.Date_de_collecte = function() {
        return this._Date_de_collecte;
    };
    
    this.Identifiant_plaques  = function () {
    	return this._Identifiant_plaques;
    };
 
    this.Nd_de_guanos = function () {
        return this._Nd_de_guanos;
    };	
    
    this.Village = function () {
        return this._Village;
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

