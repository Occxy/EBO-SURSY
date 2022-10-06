var bat_non_invasives_table = localStorage.getItem('table_chauves_souris_non_invasives');

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
	
	if (bat_non_invasives_table != 'chauves_souris_non_invasives_astre_transvihmi_guinee') {
		var table = $('#example').DataTable({
			columnDefs: [
				 { type: 'date-eu', targets: 0 }
			],
			columns: [
				{ data: null, render: 'date'},
				{ data: null, render: 'pays'},
		        { data: null, render: 'region_collecte'},
		        { data:null, render: 'site_collecte'},
				{ data: null, render: 'action'}
		    ],
		    language: {
	            url: 'plug-ins/i18n/French.lang.json'
		    }
		});
	} else {
		var table = $('#example').DataTable({
			columnDefs: [
				 { type: 'date-eu', targets: 0 },
				 { type: 'date-eu', targets: 1 }
			],
			columns: [
				{ data: null, render: 'date_debut_NI'},
				{ data: null, render: 'date_fin_NI'},
				{ data: null, render: 'prefecture'},
		        { data: null, render: 'site_capture'},
				{ data: null, render: 'action'}
		    ],
		    language: {
	            url: 'plug-ins/i18n/French.lang.json'
		    }
		});
	}
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + bat_non_invasives_table + debug);
	} else {
		var DB = new PouchDB(bat_non_invasives_table + debug);
	};		
	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    				    						    
	    	var dataBatNoninvasivesTablesData = JSON.parse(JSON.stringify(result));
	    	
	    	if (bat_non_invasives_table == 'chauves_souris_non_invasives_astre_transvihmi_guinee') {
		    	dataBatNoninvasivesTablesData.rows.forEach(function(row){   
		    		console.log(row.doc.Date_debut_NI + ' ' + row.doc.Date_fin_NI + ' ' + row.doc.Prefecture + ' ' + row.doc.Site_capture)
		    		table.row.add(new Bat_non_invasives2(row.doc.Date_debut_NI, row.doc.Date_fin_NI, row.doc.Prefecture, row.doc.Site_capture, 
		    			"<td><button data-id='" + row.doc._id + "' class='btn btn-danger btn-sm deletebtn' data-title='Supprimer' data-toggle='modal' data-target='#deletemodal'><span class='fa fa-trash'></span></button>" +
	                    "<button data-id='" + row.doc._id + "' class='btn btn-primary btn-sm modifybtn' data-title='Modifier'><span class='fa fa-pencil'></span></button>" +
	                    "<button data-id='" + row.doc._id + "' class='btn btn-info btn-sm seebtn showbtn' data-title='Consulter'><span class='fa fa-search'></span></button>" +
	                    "<input data-id=" + row.doc._id + " type='checkbox' class='chk'></td>"
		    		));	    		
		    	});
	    	} else {
	    		dataBatNoninvasivesTablesData.rows.forEach(function(row){   
		    		console.log(row.doc.Date + ' ' + row.doc.Pays + ' ' + row.doc.Region_collecte + ' ' + row.doc.Site_collecte)
		    		table.row.add(new Bat_non_invasives(row.doc.Date, row.doc.Pays, row.doc.Region_collecte, row.doc.Site_collecte,
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
		}
	}).catch(function (err) {
		console.log(err);
	}); 	
});

function Bat_non_invasives(date, pays, region_collecte, site_collecte, action) {
	this._date = date;
    this._pays = pays;
    this._region_collecte = region_collecte;
    this._site_collecte = site_collecte;
    this._action = action;
    		    
    this.date  = function () {
        return this._date;
    };
    
    this.pays  = function () {
        return this._pays;
    };
 
    this.region_collecte = function () {
        return this._region_collecte;
    };	
    
    this.site_collecte = function () {
        return this._site_collecte;
    };
    
    this.action = function () {
        return this._action;
    };
}

function Bat_non_invasives2(date_debut_NI, date_fin_NI, prefecture, site_capture, action) {
    this._date_debut_NI = date_debut_NI;
    this._date_fin_NI = date_fin_NI;
    this._prefecture = prefecture;
    this._site_capture = site_capture;
    this._action = action;
    		    
    this.date  = function () {
        return this._date;
    };
    
    this.date_debut_NI  = function () {
        return this._date_debut_NI;
    };
 
    this.date_fin_NI = function () {
        return this._date_fin_NI;
    };	
    
    this.prefecture = function () {
        return this._prefecture;
    };
    
    this.site_capture = function () {
        return this._site_capture;
    };
    
    this.action = function () {
        return this._action;
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
