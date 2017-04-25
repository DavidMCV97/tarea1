var code, i, j, pub, idio, selector, elementos, res, tit;
selector = document.getElementById("selIdio");
pub = document.getElementById("publish");
res = "";
elementos = new Array("0");

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
	selector.options[j].style.display = "list-item";
}
function display() {
	i = selector.selectedIndex;
	idio = selector.options[selector.selectedIndex].text;
	
	code = document.createElement("div");
	code.class = "divExterno";
	code.id = i;
	code.innerHTML = 	  '<div class="divExterno" id = "' + i + '">'
						+ '<div class="divTitulo" id = "tit'+ i +'">' + idio + '</div>'
						+ '<button class="btnCruz" onclick="desaparece(&#39;' + i + '&#39;)">x</button>'
						+ '<div class="divInterno">'
						+ 'Nivel:<select>'
						+ '<option>Avanzado</option><option>Intermedio</option><option>Principiante</option>'
						+ '</select>'
						+ '</div></div>';
	pub.appendChild(code);

	elementos.push(i);
	selector.selectedIndex = 0;
	selector.options[i].style.display = "none";
}
function escribe() {
	for (j = 1; j < elementos.length; j++){
		tit = "tit" + elementos[j];
		res = res + document.getElementById(tit).textContent;
	}
	document.getElementById("texto").innerHTML = res;
}