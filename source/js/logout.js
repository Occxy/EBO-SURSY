if ((localStorage.getItem("loginUsername") != null) && (localStorage.getItem("login") != null)) {
	addAlertFlash("success", "Vous êtes maintenant déconnecté")
}

window.location = 'login.html';