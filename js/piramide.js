var n, i, j, res;

function comprobar() 
	{
	n = parseInt(document.getElementById("num").value);
	if (n < 1) 
	{
		alert("numero no válido");
	}
	else
	{
		res = "";
		piramide();
	}
}

function piramide() 
{
	for(i = 1; i <= n && i <= 166; i++)
	{
		res = res + "<p>"
		for (j = 0; j < i; j++)
		{
			res = res + 0;
		}
		res = res + "</p>"
	}
	document.getElementById("piramide").innerHTML = res;
}