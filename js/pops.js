var num, i, res, elem, s, para, node, j;

res = document.getElementById("cuadros");
i = 0;

function aparece() {
	i = i + 1;
	num = Math.floor(Math.random() * 1000000);
	para = document.createElement("div");
	para.class = "externo";
	para.id = i;
	para.innerHTML = '<div class="externo" id="' + i +'">' +
			'<button class="tache" onclick="desaparece(' + i + ')">x</button>' +
			'<div><img src="../img/platon.jpg"></div>' + 
			'<div class="interno"><p>#' + num + '</p></div>' +
			'</div>';
	res.appendChild(para);
}

function desaparece(j) {
	elem = document.getElementById(j);
	elem.parentNode.removeChild(elem);
}