

var fields = 
    			['Identification', 'Animal', 'Espece', 'Village', 'Pays', 'Date_collecte', 'Echantillon_biologique', 'Point_GPS_LAT', 
    			'Point_GPS_LONG', 'Username']


var fields_CSV_head =   'Identification;Animal;Espece;Village;Pays;Date_collecte;Echantillon_biologique;Point_GPS_LAT;' +
    						'Point_GPS_LONG;Username;\r\n';


var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

add_heading = true;
CSV_heading = '';
CSV_data = '';



var array_selected_fields = [];

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DBchauves_souris_organes_mivegec_congo = new PouchDB(remote_couchdb + 'chauves_souris_organes_mivegec_congo' + debug);
} else {
	var DBchauves_souris_organes_mivegec_congo = new PouchDB('chauves_souris_organes_mivegec_congo' + debug);
};


var tab_chauves_souris_organes_mivegec_congo = new Array();
var tab = new Array();


DBchauves_souris_organes_mivegec_congo.allDocs({  		
	include_docs: true,
	attachments: true
}).then(function (result) {
	// handle result
	if (typeof(JSON.stringify(result)) != "undefined"){  
		var tableData = JSON.parse(JSON.stringify(result));
		i = 0;
		tableData.rows.forEach(function(row){   
   			try {
   				//tab[i] = new Array();
   				var obj = new Object();
   				
   				obj.Identification = row.doc.Identification; 
   				obj.Animal = row.doc.Animal; 
   				obj.Espece = row.doc.Espece; 
   				obj.Village = row.doc.Village; 
   				obj.Pays = row.doc.Pays; 
  				obj.Date_collecte = row.doc.Date_collecte; 
   				obj.Echantillon_biologique = row.doc.Echantillon_biologique; 
   				obj.Point_GPS_LAT = row.doc.Point_GPS_LAT; 
    			obj.Point_GPS_LONG = row.doc.Point_GPS_LONG; 
				
			  	obj.Username = row.doc.Username;


   				tab_chauves_souris_organes_mivegec_congo.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}

	
	
	
	
		
		
		
	DBchauves_souris_organes_mivegec_congo.info().then((infos) => {
		
		count = infos.doc_count;
		
		
		
		
		
		
		
		
	}).catch((error) => {
	});
		
		
	

	
}).catch(function (err) {
   	console.log(err);
});

function addChauvesSourisOrganesMivegecCongoRecord(row, selected) {
	
	console.log('ok');
	

	
	if (count > 0) {
		count--
		i--
		//console.log(count);
		
		//console.log(row.N_identification_CS);
		//console.log(row['NumFilet/piege']);
		
		if (!selected) { 	
			
			CSV_data = CSV_data +
				
				row.Identification + ';' +
   				row.Animal + ';' +
   				row.Espece + ';' + 
   				row.Village + ';' +
   				row.Pays + ';' +
  				row.Date_collecte + ';' + 
   				row.Echantillon_biologique + ';' +
   				row.Point_GPS_LAT + ';' + 
    			row.Point_GPS_LONG + ';' +
		  	 
				row.Username + ';\r\n'
				

		
			} else {	
				 
				add_selection_field(row)
				
				
				if (add_heading) {
					CSV_heading = CSV_heading + "\r\n";
					CSV_data = CSV_heading + CSV_data + "\r\n"
					add_heading = false;
				} else {
					CSV_data = CSV_data + "\r\n";
				}
			}
			
			console.log(count);
			if (count == 0) {
				var blob = new Blob(['\ufeff' + CSV_data], {type: "text/csv;charset=ISO-8859-1"});
				saveAs(blob, "chauves_souris_organes_mivegec_congo_" + clock.now + ".csv");
				// Redirection vers une autre page après un délai de 1 seconde
				/*setTimeout(function() {
				    window.location.href = "import_export.html?table=_transvihmi_cameroun&type=rongeurs";
				}, 1000); // Délai de 1 seconde*/

			}	
			
	} 
			
	
}

function add_selection_field(row) {
	for (var i=0; i < fields.length; i++) {
		if (array_selected_fields.indexOf(fields[i]) > -1) {
			if (add_heading == true) {
				CSV_heading = CSV_heading + fields[i] + ';';
			}
			CSV_data = CSV_data + row[fields[i]] + ";"
		};
	}
}



window.onload = function() {
    $('#export_all_fields').click(function(){
        CSV_data = fields_CSV_head;

        var res = alasql("SELECT Identification, Animal, Espece, Village, Pays, Date_collecte, Echantillon_biologique, Point_GPS_LAT, Point_GPS_LONG, Username FROM ? ORDER BY Date", [tab_chauves_souris_organes_mivegec_congo]);

        var CS = JSON.stringify(res);

        var obj_CS = JSON.parse(CS);

        res.forEach(function(row){
            if (count == i) {
                addChauvesSourisOrganesMivegecCongoRecord(row, false);
            }
        });
    });



	$('#export_selected_fields').click(function(){
		
		array_selected_fields = [];
		array_selected_fields.length = 0;
		
		$('#multiselect1 :selected').each(function(i, sel){ 
			array_selected_fields.push($(sel).val()); 
			//alert($(sel).val())
		});
		
		var res = alasql("SELECT Identification, Animal, Espece, Village, Pays, Date_collecte, Echantillon_biologique, Point_GPS_LAT, Point_GPS_LONG, Username FROM ? ORDER BY Date", [tab_chauves_souris_organes_mivegec_congo]);
 			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		   
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
			//alert(count)
			if (count == i) {
				addChauvesSourisOrganesMivegecCongoRecord(row, true);
			}
			
			
		}).catch(function (err) {
			console.log(err);
		});
	})
	
	$("#add_selection_criteria").attr("disabled", true);

	var $multiselect1 = $("#multiselect1");
	
	$.each(fields, function(index, value) {
		console.log(value);
		$multiselect1.append($("<option>").attr("value", value).text(value));
	});
	
	$multiselect1.multiSelect('refresh');
}



	
