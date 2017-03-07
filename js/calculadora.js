var n1, n2, res, i;

function operar(tipo) {
	n1 = document.getElementById("numero_1").value;
	n2 = document.getElementById("numero_2").value;

	if (n1 != "" && n2 !="") {
		if (tipo == 1) {
			document.getElementById("resultado").innerHTML = parseInt(num1) + parseInt(num2);
		}
		else
			if (tipo == 2) {
				document.getElementById("resultado").innerHTML = parseInt(num1) - parseInt(num2);
			}
	}
	else{
		if (n1 == "") {
			alerta(1);
		}
		else {
			document.getElementById("er1").style.display = "none";
		}
		if (n2 == "") {
			alerta(2);
		}
		else {
			document.getElementById("er1").style.display = "none";
		}
	}
}

function alerta(i) {
	switch(i){
		case 1: 
			document.getElementById("er1").style.display = "initial";
			break;
		case 2: 
			document.getElementById("er2").style.display = "initial";
	}
	document.getElementById("resultado").innerHTML = "";
}
