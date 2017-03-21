var num, res, i;

res = "";

function aparece() {
	num = Math.floor(Math.random() * 1000000);
	res = res + '<div class="externo" id="' + 
				num +
				'">' +
				'<div><img src="../img/platon.jpg"></div>' + 
				'<div class="interno"><p>#' + 
				num +
				'</p></div></div>';
	document.getElementById("cuadros").innerHTML = res;
}