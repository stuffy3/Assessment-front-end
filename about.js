console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted');
}

function duckComp(evt) {
	evt.preventDefault();

	alert("You're cool!")
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let image = document.querySelector('img');

image.addEventListener('mouseover', duckComp);