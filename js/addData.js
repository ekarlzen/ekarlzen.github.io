const form= document.querySelector('#form');
form.addEventListener('submit', function(evt) {
	evt.preventDefult();
	db.collection('userinput').add({
			name:form.name.value,
			email:form.email.value,
	});
		form.name.value=";
		form.email.value=";
})
		
			
			
			