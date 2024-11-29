function getXMLHttpRequest() {
	var xhr = null;
	if (window.XMLHttpRequest || window.ActiveXObject) {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		} else {
			xhr = new XMLHttpRequest(); 
		}
	} else {
		alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
		return null;
	}
	return xhr;
}

function sendMail(id, token, email, callback){
	var xhr = getXMLHttpRequest(); // Voyez la fonction getXMLHttpRequest() définie dans la partie précédente
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
		    callback(xhr.responseText);
		}
	};
	xhr.open("GET", "https://database.ebo-sursy.eu/ebola/source/sendmail2.php?id=" + id + "&token=" + token + "&email=" + email, true);
	xhr.send(null);
}

function msgValidate(sData){
	if (sData == "Message has been sent") {
		var data={	
		    type: 'success',
		    message : 'La confirmation de la réinitialisation de votre mot de passe vous a été envoyé par e-mail, veuillez cliquer sur le lien à l\'intérieur de celui-ci pour pouvoir changer votre mot de passe svp'
		};			
		
		var val = JSON.stringify(data);
		sessionStorage.setItem('flash', val);
		localStorage['new_password'] = '1';
		window.location = 'login.html';
	} else {
    	alert("Y'a eu un problème");
    }
}