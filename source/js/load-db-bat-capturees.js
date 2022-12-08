var bat_capturees_table = localStorage.getItem('table_chauves_souris_capturees');

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
	
	if (bat_capturees_table != 'chauves_souris_capturees_astre_transvihmi_guinee') {
		var table = $('#example').DataTable({
			columnDefs: [
				 { type: 'formatted-num', targets: 0}, 
				 {  type: 'date-eu', targets: 1} 
			],
			columns: [
				//{ data: null, render: 'Numero_individu'},					
				{ data: null, render: 'N_identification_CS'},
				{ data: null, render: 'Date'},
		        { data: null, render: 'Region_capture'},
				{ data: null, render: 'Action'}
		    ],
		    language: {
	            url: 'plug-ins/i18n/French.lang.json'
	        }
		});
			
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + bat_capturees_table + debug);
		} else {
			var DB = new PouchDB(bat_capturees_table + debug);
		};	
	} else {
		var table = $('#example').DataTable({
			columnDefs: [
				 {  type: 'date-eu', targets: 1} 
			],
			columns: [
				//{ data: null, render: 'Numero_individu'},					
				{ data: null, render: 'N_identification_CS'},
				{ data: null, render: 'Date'},
		        { data: null, render: 'Site_capture'},
				{ data: null, render: 'Action'}
		    ],
		    language: {
	            url: 'plug-ins/i18n/French.lang.json'
	        }
		});
			
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + bat_capturees_table + debug);
		} else {
			var DB = new PouchDB(bat_capturees_table + debug);
		};	
	}
		
	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
    		
    		if (bat_capturees_table == 'chauves_souris_capturees_astre_transvihmi_guinee') {
	    		dataTablesData.rows.forEach(function(row){   
	    			table.row.add(new Bat2(/*row.doc.Numero_individu,*/ row.doc.N_identification_CS, row.doc.Date, row.doc.Site_capture, 
	    				"<td><button data-id='" + row.doc._id + "' class='btn btn-danger btn-sm deletebtn' data-title='Supprimer' data-toggle='modal' data-target='#deletemodal'><span class='fa fa-trash'></span></button>" +
	                    "<button data-id='" + row.doc._id + "' class='btn btn-primary btn-sm modifybtn' data-title='Modifier'><span class='fa fa-pencil'></span></button>" +
	                    "<button data-id='" + row.doc._id + "' class='btn btn-info btn-sm seebtn showbtn' data-title='Consulter'><span class='fa fa-search'></span></button>" +
	                    "<input data-id=" + row.doc._id + " type='checkbox' class='chk'></td>"
	    			));
	    		});
	    	} else {
	    		dataTablesData.rows.forEach(function(row){   
	    			table.row.add(new Bat(/*row.doc.Numero_individu,*/ row.doc.N_identification_CS, row.doc.Date, row.doc.Region_capture, 
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
	    	
	    	//alert(countCCGU);
	    	
		}
	}).catch(function (err) {
		console.log(err);
	}); 	
					
});

function Bat(/*Numero_individu,*/ N_identification_CS, Date, Region_capture, Action) {
    /*if (Numero_individu !== null) {
    	this._Numero_individu = Numero_individu;
    } else {
    	this._Numero_individu = '';
    };*/
    if (N_identification_CS !== null) {
    	this._N_identification_CS = N_identification_CS;	
    } else {
    	this._N_identification_CS = '';
    };
    if (Region_capture !== null) {
    	this._Region_capture = Region_capture;	
    } else {
    	this._Region_capture = '';
    };
    if (Date !== null) {
    	this._Date = Date;	
    } else {
    	this._Date = '';
    };
    this._Action = Action;
    		    
    /*this.Numero_individu = function() {
        return this._Numero_individu;
    };*/
    
    this.N_identification_CS = function() {
        return this._N_identification_CS;
    };
    
    this.Date  = function () {
    	return this._Date;
    };
 
    this.Region_capture = function () {
        return this._Region_capture;
    };	
    
    this.Action = function () {
        return this._Action;
    };
}

function Bat2(N_identification_CS, Date, Site_capture, Action) {
    
    if (N_identification_CS !== null) {
    	this._N_identification_CS = N_identification_CS;	
    } else {
    	this._N_identification_CS = '';
    };
    if (Site_capture !== null) {
    	this._Site_capture = Site_capture;	
    } else {
    	this._Site_capture = '';
    };
    if (Date !== null) {
    	this._Date = Date;	
    } else {
    	this._Date = '';
    };
    this._Action = Action;
    
    
    this.N_identification_CS = function() {
        return this._N_identification_CS;
    };
    
    this.Date  = function () {
    	return this._Date;
    };
 
    this.Site_capture = function () {
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

