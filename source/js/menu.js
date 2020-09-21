$(function () { 
	$('li').on('click', function (e) {
		//e.preventDefault();
		var id = this.id;
		
		if (id === 'li_transvihmiDropdown') {
			unexpanded2('1');
		} else if (id === 'li_mivegecDropdown') {
			unexpanded2('2');
		} else if (id === 'li_astreDropdown') {
			unexpanded2('6');
		} else if (id === 'li_CIBUDropdown') {
			unexpanded2('3');
		} else if (id === 'li_batTransvihmiDropdown') {
			unexpanded2('1');
		} else if (id === 'li_viande_de_brousse_TransvihmiDropdown') {
			unexpanded2('1');
		} else if (id === 'li_batAstreDropdown') {
			unexpanded2('6');
		} else if (id === 'li_batCIBUDropdown') {
			unexpanded2('3');
		}
	});
});

function unexpanded(a, ul) {
	var component_a = document.getElementById(a);
	component_a.setAttribute('aria-expanded', 'false');
	var component_ul =  document.getElementById(ul);
	component_ul.classList.remove('show');
};

function unexpanded2(num) {
	$('li a').each( function(){
		try {
			console.log($(this).attr('name').length);
			if (!isNaN(Number(num))) {
				if (Number(num) !== Number($(this).attr('name'))) {
					var component_a = document.getElementById($(this).attr('id'));
					component_a.setAttribute('aria-expanded', 'false');
				};
			};
		}
		catch(error) {
		};
	});	
	
	$('li ul').each( function(){
		try {
			
			console.log($(this).attr('name').length);
			//alert(num);
			if (!isNaN(Number(num))) {
				if (Number(num) !== Number($(this).attr('name'))) {
					var component_ul =  document.getElementById($(this).attr('id'));
					component_ul.classList.remove('show');
				};
			};
		}
		catch(error) {
		};
	});
};


