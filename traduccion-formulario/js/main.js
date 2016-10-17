function cambiarLenguaje (idioma){

var encabezado = document.getElementById("form-signin-heading");
var eMail = document.getElementById("inputEmail");
var passWord = document.getElementById("inputPassword");
var checkBox = document.getElementById("remember");
var butTon = document.getElementById("sub");


	eMail.setAttribute("placeholder", "Correo electronico");
	var mail = document.getElementById("inputEmail");
	passWord.setAttribute("placeholder", "Contraseña");
	var contra = document.getElementById("inputPassword");



	if (idioma == "es") {
		encabezado.innerHTML = "Por favor inicia sesión";
		eMail.innerHTML = "Correo electronico";
		passWord.innerHTML = "Contraseña";
		checkBox.innerHTML = "Recordar datos";
		butTon.innerHTML = "Iniciar sesión";
	}


} cambiarLenguaje("es");

	var btnEs = document.getElementById("btnEsp");
	btnEs.onkeypress = function(){
		cambiarLenguaje("es");
	};
	var btnEng = document.getElementById("btnEng");
	btnEng.onkeypress = function(){
		cambiarLenguaje("Eng");
	};




/*

function cambiarIdioma (idioma){

var elUser = document.getElementById("inputEmail");
var elPassword = document.getElementById("inputPassword");
var elRemember = document.getElementById("remember");


	
		if (idioma == "es") {
				elUser.innerHTML = "correo";
				elPassword.setAttribute = "Contraseña";
				elRemember.setAttribute = "Recuerdame";
			}

		else{
			elUser.setAttribute("placeholder", "mail");
			var input_usuario = document.getElementById("inputEmail");

			elPassword.setAttribute("placeholder", "password");
			var input_usuario = document.getElementById("inputPassword");

			elRemember.setAttribute("check", "remember");
			var checkbox = document.getElementById("Rememberme");
		}

} cambiarIdioma("es");


	var btnEs = document.getElementById("btnEsp");
	btnEs.onclick = function(){
		cambiarIdioma("es");
	};
	var btnEng = document.getElementById("btnEng");
	btnEng.onclick = function(){
		cambiarIdioma("Eng");
	};
*/