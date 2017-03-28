var num, res, i;

res = "";

function aparece() {
	num = Math.floor(Math.random() * 1000000);
	res = res + '<div class="externo" id="' + num +'">' +
				'<button class="tache" onclick="desaparece()">x</button>' +
				'<div><img src="../img/platon.jpg"></div>' + 
				'<div class="interno"><p>#' + num + '</p></div>' +
				'</div>';
	document.getElementById("cuadros").innerHTML = res;
}

function desaparece() {
	document.removeChild(getElementById(""));
}