var num, res, i;

res = "";

function aparece() {
	num = Math.floor(Math.random() * 1000000);
	res = res + '<div class="externo" id="' + 
				num +
				'"><br>' +
				'<div><img src="../img/platon.jpg"></div><br>' + 
				'<div class="interno"><p>#' + 
				num +
				'</p></div></div><br>';
	document.getElementById("cuadros").innerHTML = res;
	document.getElementById(String(num)).style.cssFloat = "right";
}