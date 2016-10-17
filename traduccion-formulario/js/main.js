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
