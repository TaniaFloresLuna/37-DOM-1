
function validateForm(){
	/* Escribe tú código aquí */


	//Variables nombre, apellido
	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");

	//Variable contraseña
	var contra = document.getElementById("input-password");

	//variables de e-mail.
	var email = document.getElementById("input-email").value;
	
	//variable selector
	var seleccion = document.querySelector("select").value;

	//validar campos en blanco
	if (nombre == "" || apellido == "" || email == "" || contra =="") {
		alert("Este campo es obligatorio");
		return false;
	}

	//Validar nombre
	if (!/^[A-Z][a-z]*$/g.test(document.getElementById('lastname').value) ){
		alert('Unicamente la primera letra debe ser Mayuscula');
		return false;
	}

	//validar apellido


	//Validar e-mail

	//validar contraseña
	if (((contra.length < 6)||(contra.length >20)) || (contra == "password")|| (contra == 123456) || (contra == 09876)){
		alert("La contraseña debe tener más de 6 caracteres y menos de 20");
		return false;
	}


	//validar selección
	if (!seleccion) {
		alert("no seecciono ninguna");
		return false;
	}



}//Cierra functión validateForme                                                                                                                                                                                                                   ]]]]]]]]]