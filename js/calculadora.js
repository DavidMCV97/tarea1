svar n1, n2, res, i;

function operar(tipo)
{
	n1 = document.getElementById("numero_1").value;
	n2 = document.getElementById("numero_2").value;

	if (n1 != "" && n2 !="")
	{
		document.getElementById("er1").style.display = "none";
		document.getElementById("er2").style.display = "none";
		if (tipo ==1)
		{
			document.getElementById("resultado").innerHTML = parseInt(n1) + parseInt(n2);
		}
		else
		{
			document.getElementById("resultado").innerHTML = parseInt(n1) - parseInt(n2);
		}
	}
	else
	{
		if (n1 == "")
		{
			document.getElementById("er1").style.display = "initial";
		}
		else
			document.getElementById("er1").style.display = "none";
		if (n2 == "")
		{
			document.getElementById("er2").style.display = "initial";
		}
		else
			document.getElementById("er2").style.display = "none";
	}
}