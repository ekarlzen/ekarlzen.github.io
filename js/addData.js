const form = document.querySelector('#form');

function submitForm() {
	db.collection('userInput').add({
			name:form.name.value,
			email:form.email.value,
	});
    
    form.name.value='';
    form.email.value='';
}		