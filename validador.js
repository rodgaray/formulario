window.addEventListener('load',function(){
	var form = document.querySelector('.registro');
	var inputPassword = document.querySelector('input[type="password"');
	form.addEventListener('submit',function(elEvento){
		elEvento.preventDefault();
	})
});