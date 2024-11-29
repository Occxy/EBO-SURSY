$(function () {
	
	if (localStorage.getItem('login') == '1') {
		localStorage['login'] = '0';
		
		Messenger.options = {
			extraClasses: 'messenger-fixed messenger-on-top  messenger-on-right',
			theme: 'flat',
			messageDefaults: {
				showCloseButton: true
			}
		}
    	
		Messenger().post({
			//message: 'Hey, how are you?<br>Welcome to the Material Admin Premium template by Bootstrapious.',
        	message: 'Bonjour ' + localStorage.getItem('loginUsername') + ', bienvenue dans la base de données du projet Ebo-Sursy.',
        	//message: sessionStorage["loginUsername"],
        	type: 'success'
		});
    }
});