var faune_table = localStorage.getItem('faune_table');

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
			 //{ type: 'date-eu', targets: 2 }
		],
		columns: [			
			{ data: null, render: 'ID_NI_faune'},
	        { data: null, render: 'Date_collecte'},
			{ data: null, render: 'Prefecture'},
	        { data: null, render: 'Site_capture'},
	        { data: null, render: 'Espece_animale'},
	        { data: null, render: 'Action'}
	    ],
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + faune_table + debug);
	} else {
		var DB = new PouchDB(faune_table + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new Caracterisations(row.doc.ID_NI_faune, row.doc.Date_collecte, row.doc.Prefecture, row.doc.Site_capture, row.doc.Espece_animale, 
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

function Caracterisations(ID_NI_faune, Date_collecte, Prefecture, Site_capture, Espece_animale, Action) {
    if (ID_NI_faune !== null) {
    	this._ID_NI_faune = ID_NI_faune;
    } else {
    	this._ID_NI_faune = '';
    };
    if (Date_collecte !== null) {
    	this._Date_collecte = Date_collecte;	
    } else {
    	this._Date_collecte = '';
    };
     if (Prefecture !== null) {
    	this._Prefecture = Prefecture;	
    } else {
    	this._Prefecture = '';
    };
    
    if (Site_capture !== null) {
    	this._Site_capture = Site_capture;	
    } else {
    	this._Site_capture = '';
    };
    if (Espece_animale !== null) {
    	this._Espece_animale = Espece_animale;	
    } else {
    	this._Espece_animale = '';
    };
    
    this._Action = Action;
    		    
    this.ID_NI_faune = function() {
        return this._ID_NI_faune;
    };

    this.Date_collecte = function() {
        return this._Date_collecte;
    };
    
    this.Prefecture = function () {
        return this._Prefecture;
    };	    
    
    this.Site_capture = function() {
        return this._Site_capture;
    };
    
    this.Espece_animale = function() {
        return this._Espece_animale;
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

