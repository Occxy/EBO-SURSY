var viande_de_brousse_nhp_table = localStorage.getItem('viande_de_brousse_nhp_table');

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
		columns: [
			{ data: null, render: 'number'},					
			{ data: null, render: 'date'},
			{ data: null, render: 'nom'},
	        { data: null, render: 'nom_scientifique'},
	        { data: null, render: 'site'},
	        { data: null, render: 'village'},
			{ data: null, render: 'Action'}
	    ],
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + viande_de_brousse_nhp_table + debug);
	} else {
		var DB = new PouchDB(viande_de_brousse_nhp_table + debug);
	};
	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new Viande_de_brousse_nhp(row.doc.number, row.doc.date, row.doc.nom, row.doc.nom_scientifique, row.doc.site, row.doc.village,
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

function Viande_de_brousse_nhp(number, date, nom, nom_scientifique, site, village, Action) {
	
    this._number = number;
    this._date = date;					
    this._nom = nom;
    this._nom_scientifique = nom_scientifique;
    this._site = site;
    this._village = village;
    this._Action = Action;
    		    
    this.number = function() {
        return this._number;
    };
    
    this.date = function() {
        return this._date;
    };
    
    this.nom  = function () {
    	return this._nom;
    };
 
    this.nom_scientifique = function () {
        return this._nom_scientifique;
    };	
    
    this.site = function () {
        return this._site;
    };	
    
    this.village= function () {
        return this._village;
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

