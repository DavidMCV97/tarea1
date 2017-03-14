var txt, res, i;

res = "";
n = 0;

txt = '<div class="externo"><br>' + 
	'<div><img src="../img/platon.jpg"></div><br>' + 
	'<div class="interno"><p>#' + 
	Math.floor(Math.random() * 1000000) +
	'</p></div><br>';

function aparece() {
	n++;
	for (i = 1; i<=n; i++) 
	{
		res = res + txt;
	}
	document.getElementById("cuadros").innerHTML = txt;
}