function overAcept() {
	document.getElementById("btnAceptar").style.color = "yellow";
	document.getElementById("btnAceptar").style.backgroundColor = "black";
}
function outAcept() {
	document.getElementById("btnAceptar").style.color = "black";
	document.getElementById("btnAceptar").style.backgroundColor = "yellow";
}
function desaparece(j) {
	elem = document.getElementById(j);
	elem.parentNode.removeChild(elem);
}

var code, id; 
function display() {
	id = Math.floor(Math.random() * 1000000);
	code = 	'<div class="divExterno" id="aleatorio">'
			+ '<div class="divTitulo">Idioma</div>'
			+ '<button class="btnCruz" onclick="desaparece(&#39;aleatorio&#39;)">x</button>'
			+ '<div class="divInterno">'
			+ 'Nivel:<select>'
			+ '<option>Avanzado</option><option>Intermedio</option><option>Principiante</option>'
			+ '</select>'
			+ '</div></div>';