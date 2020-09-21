var site_table = localStorage.getItem('site_table');

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
		
	/*{
        orderable: false,
        className: 'select-checkbox',
        targets:   0
    },*/
	/*{ data: null, defaultContent: '' },*/
	/*,
        select: {
            style:    'os',
            selector: 'td:first-child'
        }
        */
	var table = $('#example').DataTable({
		columnDefs: [
			 { type: 'date-eu', targets: 2 }
		],
		columns: [			
			{ data: null, render: 'N_site'},					
			{ data: null, render: 'Date'},
	        { data: null, render: 'Region_capture'},
	        { data: null, render: 'Environnement'},
	        { data: null, render: 'Action'}
	    ],
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + site_table + debug);
	} else {
		var DB = new PouchDB(site_table + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new Site(row.doc.N_site, row.doc.Date, row.doc.Region_capture, row.doc.Environnement, 
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

function Site(N_site, Date, Region_capture, Environnement, Action) {
    if (N_site !== null) {
    	this._N_site = N_site;
    } else {
    	this._N_site = '';
    };
    if (Date !== null) {
    	this._Date = Date; 
    } else {
    	this._Date = '';
    };
    if (Region_capture !== null) {
    	this._Region_capture = Region_capture;	
    } else {
    	this._Region_capture = '';
    };
    if (Environnement !== null) {
    	this._Environnement = Environnement;	
    } else {
    	this._Environnement = '';
    };
    this._Action = Action;
    		    
    this.N_site = function() {
        return this._N_site;
    };
        
    this.Date  = function () {
    	return this._Date;
    };
 
    this.Region_capture = function () {
        return this._Region_capture;
    };	    

    this.Environnement = function() {
        return this._Environnement;
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

