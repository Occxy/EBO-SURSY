var interface_publique_table = localStorage.getItem('interface_publique_table');
var type_table =  localStorage.getItem('type_table');
var version_interface_publique = localStorage.getItem('version_interface_publique');

var interface_publique;

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};



if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	if (type_table == "animals_ipg") {
		var DB = new PouchDB(remote_couchdb + 'animals' + interface_publique_table + debug);
	} else {
		var DB = new PouchDB(remote_couchdb + type_table + interface_publique_table + debug);
	}
} else {
	if (type_table == "animals_ipg") {
		var DB = new PouchDB(remote_couchdb + 'animals' + interface_publique_table + debug);
	} else {
		var DB = new PouchDB(type_table + interface_publique_table + debug);
	}
};

//alert(remote_couchdb + 'animals' + interface_publique_table + debug)

var tab = new Array();

DB.allDocs({  		
	include_docs: true,
	attachments: true
}).then(function (result) {
	// handle result
	if (typeof(JSON.stringify(result)) != "undefined"){  
			
		var tableData = JSON.parse(JSON.stringify(result));
			
		tableData.rows.forEach(function(row){   
   			try {
   				
   				//tab[i] = new Array();
   				var obj = new Object();
   				//obj.pays = row.doc.pays;
   				obj.Point_GPS_LAT = row.doc.Point_GPS_LAT;
   				obj.Point_GPS_LONG = row.doc.Point_GPS_LONG;
   				//var date = row.doc.date;
   				//obj.date = getYear(date);
   				var Sampling_date = row.doc.Sampling_date;
   				obj.Sampling_date = getYear(Sampling_date);
   				obj.Especes = row.doc.Especes.trim();
   				//alert("'" + obj.Especes + "'");
   				/*obj.especes = row.doc.especes;
   				obj.animal = row.doc.animal;
   				
   				obj.plasma = row.doc.plasma;
   				obj.serum = row.doc.serum;
   				obj.blood_spot = row.doc.blood_spot;
   				obj.coeur = row.doc.coeur;
   				obj.cerveau = row.doc.cerveau;
   				obj.foie_rate = row.doc.foie_rate;
   				obj.glandes_salivaires = row.doc.glandes_salivaires;
   				obj.poumons = row.doc.poumons;
   				obj.reins = row.doc.reins;
   				obj.intestins = row.doc.intestins;
   				obj.urine = row.doc.urine;
   				obj.ecouvillon_salivaire = row.doc.ecouvillon_salivaire;
   				obj.ecouvillon_rectal = row.doc.ecouvillon_rectal;
   				obj.ecouvillon_nasal = row.doc.ecouvillon_nasal;
   				obj.ectoparasites = row.doc.ectoparasites;
   				obj.placenta = row.doc.placenta;
   				obj.liquide_amniotique = row.doc.liquide_amniotique;
   				obj.testicules = row.doc.testicules;
   				obj.lesions_ou_nodules = row.doc.lesions_ou_nodules;
   				obj.lait = row.doc.lait;
   				obj.foetus = row.doc.foetus;
   				obj.observation = row.doc.observation;
   				obj.guano = row.doc.guano;
   				obj.longueur_bras = row.doc.longueur_bras;
   				obj.longueur_avant_bras = row.doc.longueur_avant_bras;
   				obj.longueur_corporelle = row.doc.longueur_corporelle;*/
   				
   				tab.push(obj);
   				//i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
			
   	}
}).then(function () {
		    		
	var tabOut = new Array();
	
	
	if (version_interface_publique == 'anglais') {
		
		var resOut = alasql('SELECT Point_GPS_LAT, Point_GPS_LONG, Sampling_date, Especes, COUNT(*) AS Species_Count FROM ? GROUP BY Point_GPS_LAT, Point_GPS_LONG, Sampling_date, Especes', [tab] );
		console.log(resOut)
		for (var j=0;j<resOut.length;j++) {
			tabOut.push(resOut[j]);
		}
		
		/*var resSheep = alasql('SELECT Point_GPS_LAT, Point_GPS_LONG, Sampling_date, Especes, COUNT(*) AS Sheep FROM ? WHERE (Especes = "Sheep") GROUP BY Point_GPS_LAT, Point_GPS_LONG, Sampling_date, Especes', [tab] );
		console.log(resSheep)
		for (var j=0;j<resSheep.length;j++) {
			tabOut.push(resSheep[j]);
		}*/
		
		
		/*var resPlasma = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Plasma FROM ? WHERE (plasma = "oui") GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resPlasma)
		for (var j=0;j<resPlasma.length;j++) {
			tabOut.push(resPlasma[j]);
		}
		
		var resSerum = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Serum FROM ? WHERE serum = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resSerum)
		for (var j=0;j<resSerum.length;j++) {
			tabOut.push(resSerum[j]);
		}
		
		var resBlood_spot = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Blood_spot FROM ? WHERE blood_spot = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resBlood_spot)
		for (var j=0;j<resBlood_spot.length;j++) {
			tabOut.push(resBlood_spot[j]);
		} 
		
		var resCoeur = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Coeur FROM ? WHERE coeur = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resCoeur)
		for (var j=0;j<resCoeur.length;j++) {
			tabOut.push(resCoeur[j]);
		}
		
		var resCerveau = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Cerveau FROM ? WHERE cerveau = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resCerveau)
		for (var j=0;j<resCerveau.length;j++) {
			tabOut.push(resCerveau[j]);
		}
		
		var resFoie_rate = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Foie_rate FROM ? WHERE foie_rate = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resFoie_rate)
		for (var j=0;j<resFoie_rate.length;j++) {
			tabOut.push(resFoie_rate[j]);
		}
		
		var resGlandes_salivaires = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Glandes_salivaires FROM ? WHERE glandes_salivaires = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resGlandes_salivaires)
		for (var j=0;j<resGlandes_salivaires.length;j++) {
			tabOut.push(resGlandes_salivaires[j]);
		}
		
		var resPoumons = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Poumons FROM ? WHERE poumons = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resPoumons)
		for (var j=0;j<resPoumons.length;j++) {
			tabOut.push(resPoumons[j]);
		}
		
		var resReins = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Reins FROM ? WHERE reins = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resReins)
		for (var j=0;j<resReins.length;j++) {
			tabOut.push(resReins[j]);
		}
		
		var resIntestins = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Intestins FROM ? WHERE intestins = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resIntestins)
		for (var j=0;j<resIntestins.length;j++) {
			tabOut.push(resIntestins[j]);
		}
		
		var resUrine = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Urine FROM ? WHERE urine = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resUrine)
		for (var j=0;j<resUrine.length;j++) {
			tabOut.push(resUrine[j]);
		}
		
		var resEcouvillon_salivaire = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Ecouvillon_salivaire FROM ? WHERE ecouvillon_salivaire = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resEcouvillon_salivaire)
		for (var j=0;j<resEcouvillon_salivaire.length;j++) {
			tabOut.push(resEcouvillon_salivaire[j]);
		}
		
		var resEcouvillon_rectal = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Ecouvillon_rectal FROM ? WHERE ecouvillon_rectal = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resEcouvillon_rectal)
		for (var j=0;j<resEcouvillon_rectal.length;j++) {
			tabOut.push(resEcouvillon_rectal[j]);
		}
		
		var resEcouvillon_nasal = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Ecouvillon_nasal FROM ? WHERE ecouvillon_nasal = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resEcouvillon_nasal)
		for (var j=0;j<resEcouvillon_nasal.length;j++) {
			tabOut.push(resEcouvillon_nasal[j]);
		}
		
		var resEctoparasites = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Ectoparasites FROM ? WHERE ectoparasites <> "non" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resEctoparasites)
		for (var j=0;j<resEctoparasites.length;j++) {
			tabOut.push(resEctoparasites[j]);
		}
		
		var resPlacenta = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Placenta FROM ? WHERE placenta = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resPlacenta)
		for (var j=0;j<resPlacenta.length;j++) {
			tabOut.push(resPlacenta[j]);
		}
		
		var resLiquide_amniotique = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Liquide_amniotique FROM ? WHERE liquide_amniotique = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resLiquide_amniotique)
		for (var j=0;j<resLiquide_amniotique.length;j++) {
			tabOut.push(resLiquide_amniotique[j]);
		}
		
		var resTesticules = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Testicules FROM ? WHERE testicules = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resTesticules)
		for (var j=0;j<resTesticules.length;j++) {
			tabOut.push(resTesticules[j]);
		}
		
		var resLait = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Lait FROM ? WHERE lait = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resLait)
		for (var j=0;j<resLait.length;j++) {
			tabOut.push(resLait[j]);
		}
		
		var resFoetus = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Foetus FROM ? WHERE foetus <> "non" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resFoetus)
		for (var j=0;j<resFoetus.length;j++) {
			tabOut.push(resFoetus[j]);
		}
		
		var resGuano = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Guano FROM ? WHERE guano = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resGuano)
		for (var j=0;j<resGuano.length;j++) {
			tabOut.push(resGuano[j]);
		}
		
		var resLongueur_bras = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Longueur_bras FROM ? WHERE longueur_bras <> "non" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resLongueur_bras)
		for (var j=0;j<resLongueur_bras.length;j++) {
			tabOut.push(resLongueur_bras[j]);
		}
		
		var resLongueur_avant_bras = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Longueur_avant_bras FROM ? WHERE longueur_avant_bras <> "non" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resLongueur_avant_bras)
		for (var j=0;j<resLongueur_avant_bras.length;j++) {
			tabOut.push(resLongueur_avant_bras[j]);
		}
		
		var resLongueur_corporelle = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Longueur_corporelle FROM ? WHERE longueur_corporelle <> "non" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resLongueur_corporelle)
		for (var j=0;j<resLongueur_corporelle.length;j++) {
			tabOut.push(resLongueur_corporelle[j]);
		}
		
		var resCount = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Individus_echantillonnes FROM ? GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resCount)
		for (var j=0;j<resCount.length;j++) {
			tabOut.push(resCount[j]);
		}*/
		
		//alert(tabOut.length);
		
		/*var resOut = alasql('SELECT Point_GPS_LAT, Point_GPS_LONG, Sampling_date, Especes, SUM(Cow) AS Cow, SUM(Sheep) AS Sheep FROM ? GROUP BY Point_GPS_LAT, Point_GPS_LONG, Sampling_date, Especes', [tabOut] );
		console.log(resOut)*/
		
		interface_publique = JSON.stringify(resOut);
		
		CSV = 'photo;Point_GPS_LAT;Point_GPS_LONG;Sampling_date;Species;Count\r\n';
				
	} else if (version_interface_publique == 'francais') {
		
		var resOut = alasql('SELECT Point_GPS_LAT, Point_GPS_LONG, Sampling_date, Especes, COUNT(*) AS Species_Count FROM ? GROUP BY Point_GPS_LAT, Point_GPS_LONG, Sampling_date, Especes', [tab] );
		console.log(resOut)
		for (var j=0;j<resOut.length;j++) {
			tabOut.push(resOut[j]);
		}
		
		/*var resPlasma = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Plasma FROM ? WHERE (plasma = "oui") GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resPlasma)
		for (var j=0;j<resPlasma.length;j++) {
			tabOut.push(resPlasma[j]);
		}
		
		var resSerum = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Serum FROM ? WHERE serum = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resSerum)
		for (var j=0;j<resSerum.length;j++) {
			tabOut.push(resSerum[j]);
		}
		
		var resBlood_spot = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Blood_spot FROM ? WHERE blood_spot = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resBlood_spot)
		for (var j=0;j<resBlood_spot.length;j++) {
			tabOut.push(resBlood_spot[j]);
		} 
		
		var resCoeur = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Coeur FROM ? WHERE coeur = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resCoeur)
		for (var j=0;j<resCoeur.length;j++) {
			tabOut.push(resCoeur[j]);
		}
		
		var resCerveau = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Cerveau FROM ? WHERE cerveau = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resCerveau)
		for (var j=0;j<resCerveau.length;j++) {
			tabOut.push(resCerveau[j]);
		}
		
		var resFoie_rate = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Foie_rate FROM ? WHERE foie_rate = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resFoie_rate)
		for (var j=0;j<resFoie_rate.length;j++) {
			tabOut.push(resFoie_rate[j]);
		}
		
		var resGlandes_salivaires = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Glandes_salivaires FROM ? WHERE glandes_salivaires = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resGlandes_salivaires)
		for (var j=0;j<resGlandes_salivaires.length;j++) {
			tabOut.push(resGlandes_salivaires[j]);
		}
		
		var resPoumons = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Poumons FROM ? WHERE poumons = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resPoumons)
		for (var j=0;j<resPoumons.length;j++) {
			tabOut.push(resPoumons[j]);
		}
		
		var resReins = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Reins FROM ? WHERE reins = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resReins)
		for (var j=0;j<resReins.length;j++) {
			tabOut.push(resReins[j]);
		}
		
		var resIntestins = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Intestins FROM ? WHERE intestins = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resIntestins)
		for (var j=0;j<resIntestins.length;j++) {
			tabOut.push(resIntestins[j]);
		}
		
		var resUrine = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Urine FROM ? WHERE urine = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resUrine)
		for (var j=0;j<resUrine.length;j++) {
			tabOut.push(resUrine[j]);
		}
		
		var resEcouvillon_salivaire = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Ecouvillon_salivaire FROM ? WHERE ecouvillon_salivaire = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resEcouvillon_salivaire)
		for (var j=0;j<resEcouvillon_salivaire.length;j++) {
			tabOut.push(resEcouvillon_salivaire[j]);
		}
		
		var resEcouvillon_rectal = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Ecouvillon_rectal FROM ? WHERE ecouvillon_rectal = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resEcouvillon_rectal)
		for (var j=0;j<resEcouvillon_rectal.length;j++) {
			tabOut.push(resEcouvillon_rectal[j]);
		}
		
		var resEcouvillon_nasal = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Ecouvillon_nasal FROM ? WHERE ecouvillon_nasal = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resEcouvillon_nasal)
		for (var j=0;j<resEcouvillon_nasal.length;j++) {
			tabOut.push(resEcouvillon_nasal[j]);
		}
		
		var resEctoparasites = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Ectoparasites FROM ? WHERE ectoparasites <> "non" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resEctoparasites)
		for (var j=0;j<resEctoparasites.length;j++) {
			tabOut.push(resEctoparasites[j]);
		}
		
		var resPlacenta = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Placenta FROM ? WHERE placenta = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resPlacenta)
		for (var j=0;j<resPlacenta.length;j++) {
			tabOut.push(resPlacenta[j]);
		}
		
		var resLiquide_amniotique = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Liquide_amniotique FROM ? WHERE liquide_amniotique = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resLiquide_amniotique)
		for (var j=0;j<resLiquide_amniotique.length;j++) {
			tabOut.push(resLiquide_amniotique[j]);
		}
		
		var resTesticules = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Testicules FROM ? WHERE testicules = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resTesticules)
		for (var j=0;j<resTesticules.length;j++) {
			tabOut.push(resTesticules[j]);
		}
		
		var resLait = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Lait FROM ? WHERE lait = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resLait)
		for (var j=0;j<resLait.length;j++) {
			tabOut.push(resLait[j]);
		}
		
		var resFoetus = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Foetus FROM ? WHERE foetus <> "non" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resFoetus)
		for (var j=0;j<resFoetus.length;j++) {
			tabOut.push(resFoetus[j]);
		}
		
		var resGuano = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Guano FROM ? WHERE guano = "oui" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resGuano)
		for (var j=0;j<resGuano.length;j++) {
			tabOut.push(resGuano[j]);
		}
		
		var resLongueur_bras = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Longueur_bras FROM ? WHERE longueur_bras <> "non" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resLongueur_bras)
		for (var j=0;j<resLongueur_bras.length;j++) {
			tabOut.push(resLongueur_bras[j]);
		}
		
		var resLongueur_avant_bras = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Longueur_avant_bras FROM ? WHERE longueur_avant_bras <> "non" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resLongueur_avant_bras)
		for (var j=0;j<resLongueur_avant_bras.length;j++) {
			tabOut.push(resLongueur_avant_bras[j]);
		}
		
		var resLongueur_corporelle = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Longueur_corporelle FROM ? WHERE longueur_corporelle <> "non" GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resLongueur_corporelle)
		for (var j=0;j<resLongueur_corporelle.length;j++) {
			tabOut.push(resLongueur_corporelle[j]);
		}
		
		var resCount = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, COUNT(*) AS Individus_echantillonnes FROM ? GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tab] );
		console.log(resCount)
		for (var j=0;j<resCount.length;j++) {
			tabOut.push(resCount[j]);
		}*/
		
		//alert(tabOut.length);
		
		/*var resOut = alasql('SELECT pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal, SUM(Individus_echantillonnes) AS Individus_echantillonnes, SUM(Plasma) AS Plasma, SUM(Serum) AS Serum, SUM(Blood_spot) AS Blood_spot, SUM(Coeur) AS Coeur, SUM(Cerveau) AS Cerveau, SUM(Foie_rate) AS Foie_rate, SUM(Glandes_salivaires) AS Glandes_salivaires, SUM(Poumons) AS Poumons, SUM(Reins) AS Reins, SUM(Intestins) AS Intestins, SUM(Urine) AS Urine, SUM(Ecouvillon_salivaire) AS Ecouvillon_salivaire, SUM(Ecouvillon_rectal) AS Ecouvillon_rectal, SUM(Ecouvillon_nasal) AS Ecouvillon_nasal, SUM(Ectoparasites) AS Ectoparasites, SUM(Placenta) AS Placenta, SUM(Liquide_amniotique) AS Liquide_amniotique, SUM(Testicules) AS Testicules, SUM(Lait) AS Lait, SUM(Foetus) AS Foetus, SUM(Guano) AS Guano, SUM(Longueur_bras) AS Longueur_bras, SUM(Longueur_avant_bras) AS Longueur_avant_bras, SUM(Longueur_corporelle) AS Longueur_corporelle FROM ? GROUP BY pays, Point_GPS_LAT, Point_GPS_LONG, date, especes, animal', [tabOut] );
		//, SUM(Salive) AS Salive, SUM(Ecouvillon_rectal) AS Ecouvillon_rectal, SUM(Ectoparasites) AS Ectoparasites, SUM(Poil) AS Poil, SUM(Peau) AS Peau, SUM(Organes) AS Organes, SUM(Specimen_entier) as Specimen_entier 
		//
		console.log(resOut)
		
		interface_publique = JSON.stringify(resOut);
		
		CSV = 'photo;pays;Point_GPS_LAT;Point_GPS_LONG;especes;animal;' +
		  'Individus echantillonnes;Echantillons;date\r\n';*/
		
		interface_publique = JSON.stringify(resOut);
		
		CSV = 'photo;Point_GPS_LAT;Point_GPS_LONG;Date_échantillonnage;Espèce;Effectif\r\n';
		
		
	}
	
		

	var obj_interface_publique = JSON.parse(interface_publique);
	
	obj_interface_publique.forEach(function(row){
		addToCSV(row);
	});	
	
	var blob = new Blob(['\ufeff' + CSV], {type: "text/csv;charset=ISO-8859-1"});
	saveAs(blob, "interface-publique-ebo-sursy" + clock.now + ".csv");
	
	function addToCSV(row) {
		
		var icone = '';
		var espece = '';
		if (row.Especes == 'Sheep') {
			icone = '/media/ovin_black.png;';
			espece = 'Mouton';
		} else if (row.Especes == 'Goat') {
			icone = '/media/caprin_black.png;';
			espece = 'Chevre';
		} else if (row.Especes == 'Pig') {
			icone = '/media/pig.png;';
			espece = 'Porc';
		} else if (row.Especes == 'Zebu') {
			icone = '/media/zebu.png;';
			espece = 'Zebu';
		} else if (row.Especes == 'Cow') {
			icone = '/media/cow.png;';
			espece = 'Vache';
		} else {
			icone = ';'
		}
		/*if ((row.animal == 'Antilope') || (row.animal == 'Antilope rouge')) {
			icone = '/media/antilope_black.png;';
		} else if (row.animal == 'Chauve-souris') {
			icone = '/media/Chauve-souris_Black2.png;';
		} else if (row.animal == 'Caprin') {
			icone = '/media/caprin_black.png;';
		} else if ((row.animal == 'Ovin') || (row.animal == 'ovin')) {
			icone = '/media/ovin_black.png;';
		} else if (row.animal == 'Chien') {
			icone = '/media/chien_black.png;';
		} else if ((row.animal == 'Pangolin géant') || (row.animal == 'Petit Pangolin')) {
			icone = '/media/pangolin_black.png;';
		} else if (row.animal == 'Hérisson') {
			icone = '/media/herisson.png;';
		} else if ((row.animal == 'Petit Singe') || (row.animal == 'Petit singe')) {
			icone = '/media/singe.png;';
		} else if ((row.animal == 'Gazelle') || (row.animal == 'Gazelle rouge')) {
			icone = '/media/gazelle.png;';
		} else if (row.animal == 'Porc-éPic') {
			icone = '/media/porc-epic.png;';
		} else if (row.animal == 'Toucan') {
			icone = '/media/toucan.png;';
		} else if (row.animal == 'Chat-huant') {
			icone = '/media/chat-huant.png;';
		} else if (row.animal == 'Crocodile') {
			icone = '/media/crocodile.png;';
		} else if (row.animal == 'Elan') {
			icone = '/media/elan.png;';
		} else if (row.animal == 'Genette') {
			icone = '/media/genette.png;';
		} else if (row.animal == 'Potamochere') {
			icone = '/media/potamochere_black.png;';
		} else {
			icone = ';'
		}*/
			
		//var blood = addSamples(row)
		if (version_interface_publique == 'anglais') {
			if ((row.Point_GPS_LAT !== '') && (row.Point_GPS_LONG !== '')) {
				CSV = CSV +
				icone + 
				row.Point_GPS_LAT + ';' +
				row.Point_GPS_LONG + ';' +
				row.Sampling_date + ";" +
				row.Especes + ";" +
				row.Species_Count + ";\r\n"
			};
		} else if (version_interface_publique == 'francais') {
			if ((row.Point_GPS_LAT !== '') && (row.Point_GPS_LONG !== '')) {
				CSV = CSV +
				icone + 
				row.Point_GPS_LAT + ';' +
				row.Point_GPS_LONG + ';' +
				row.Sampling_date + ";" +
				espece + ";" +
				row.Species_Count + ";\r\n"
			};
		}
	};
	
	
	function addSamples(row) {
		
		var tab = new Array();
		
		if (version_interface_publique == 'anglais') {
			tab[0] = addSample(row, 'Plasma');
			tab[1] = addSample(row, 'Serum');
			tab[2] = addSample(row, 'Blood_spot'); 
			tab[3] = addSample(row, 'Heart');
			tab[4] = addSample(row, 'Brain');
			tab[5] = addSample(row, 'Liver_spleen');
			tab[6] = addSample(row, 'Salivary_glands');
			tab[7] = addSample(row, 'Lungs');
			tab[8] = addSample(row, 'Kidneys');
			tab[9] = addSample(row, 'Intestines');
			tab[10] = addSample(row, 'Urine');
			tab[11] = addSample(row, 'Salivary_swab');
			tab[12] = addSample(row, 'Rectal_swab');
			tab[13] = addSample(row, 'Nasal_swab');
			tab[14] = addSample(row, 'Ectoparasites');
			tab[15] = addSample(row, 'Placenta');
			tab[16] = addSample(row, 'Amniotic_fluid');
			tab[17] = addSample(row, 'Testes');
			tab[18] = addSample(row, 'Milk');
			tab[19] = addSample(row, 'Fetus');
			tab[20] = addSample(row, 'Guano');
			tab[21] = addSample(row, 'Arm_length');
			tab[22] = addSample(row, 'Forearm_length');
			tab[23] = addSample(row, 'Body_length');
		} else if (version_interface_publique == 'francais') {
			tab[0] = addSample(row, 'Plasma');
			tab[1] = addSample(row, 'Serum');
			tab[2] = addSample(row, 'Blood_spot'); 
			tab[3] = addSample(row, 'Coeur');
			tab[4] = addSample(row, 'Cerveau');
			tab[5] = addSample(row, 'Foie_rate');
			tab[6] = addSample(row, 'Glandes_salivaires');
			tab[7] = addSample(row, 'Poumons');
			tab[8] = addSample(row, 'Reins');
			tab[9] = addSample(row, 'Intestins');
			tab[10] = addSample(row, 'Urine');
			tab[11] = addSample(row, 'Ecouvillon_salivaire');
			tab[12] = addSample(row, 'Ecouvillon_rectal');
			tab[13] = addSample(row, 'Ecouvillon_nasal');
			tab[14] = addSample(row, 'Ectoparasites');
			tab[15] = addSample(row, 'Placenta');
			tab[16] = addSample(row, 'Liquide_amniotique');
			tab[17] = addSample(row, 'Testicules');
			tab[18] = addSample(row, 'Lait');
			tab[19] = addSample(row, 'Foetus');
			tab[20] = addSample(row, 'Guano');
			tab[21] = addSample(row, 'Longueur_bras');
			tab[22] = addSample(row, 'Longueur_avant_bras');
			tab[23] = addSample(row, 'Longueur_corporelle');
			
			
		}
		
		var samples = '';
		for (i=0;i<tab.length;i++) {
			if (tab[i] !== '') {
				if (samples !== '') {
					samples = samples + ', ' + tab[i];
				} else {
					samples = tab[i];
				}
			}
		}
		return samples;
	}
	
	function addSample(row, field) {
		try {
			var floatField = parseFloat(row[field])
			if (floatField > 0) {
				var s = field + ' : ' + row[field];
				console.log(s);
				return s;
			} else {
				var s = '';
				return s;
			}
		} catch(error) {
			console.error(error);
			var s = '';
			return s;
		}
	}
		
	function isFloat(n) {
	  return n === +n && n !== (n|0);
	}

}).catch(function (err) {
   	console.log(err);
}); 


