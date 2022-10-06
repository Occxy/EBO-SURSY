var cameras_trap_table = localStorage.getItem('cameras_trap_table');

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
			{ data: null, render: 'Region_capture'},					
			{ data: null, render: 'Site_capture'},
	        { data: null, render: 'ID_camera_1'},
	        { data: null, render: 'Date_debut_camera_1'},
	        { data: null, render: 'Heure_debut_camera_1'},
	        { data: null, render: 'Action'}
	    ],
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + cameras_trap_table + debug);
	} else {
		var DB = new PouchDB(cameras_trap_table + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new Cameras_trap(row.doc.Region_capture, row.doc.Site_capture, row.doc.ID_camera_1, row.doc.Date_debut_camera_1, row.doc.Heure_debut_camera_1,  
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

function Cameras_trap(Region_capture, Site_capture, ID_camera_1, Date_debut_camera_1, Heure_debut_camera_1, Action) {
    if (Region_capture !== null) {
    	this._Region_capture = Region_capture;
    } else {
    	this._Region_capture = '';
    };
    if (Site_capture !== null) {
    	this._Site_capture = Site_capture; 
    } else {
    	this._Site_capture = '';
    };
    if (ID_camera_1 !== null) {
    	this._ID_camera_1 = ID_camera_1;	
    } else {
    	this._ID_camera_1 = '';
    };
    if (Date_debut_camera_1 !== null) {
    	this._Date_debut_camera_1 = Date_debut_camera_1;	
    } else {
    	this._Date_debut_camera_1 = '';
    };
    if (Heure_debut_camera_1 !== null) {
    	this._Heure_debut_camera_1 = Heure_debut_camera_1;	
    } else {
    	this._Heure_debut_camera_1 = '';
    };
    
    this._Action = Action;
    		    
    this.Region_capture = function() {
        return this._Region_capture;
    };
        
    this.Site_capture  = function () {
    	return this._Site_capture;
    };
 
    this.ID_camera_1 = function () {
        return this._ID_camera_1;
    };	    

    this.Date_debut_camera_1 = function() {
        return this._Date_debut_camera_1;
    };
    
    this.Heure_debut_camera_1 = function() {
        return this._Heure_debut_camera_1;
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

