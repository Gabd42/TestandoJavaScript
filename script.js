function Gritar() {
	alert("Ahhhhhhhhhhhhhhhhhhhhhhh")
}

function Perguntar() {
	var nome;
	nome = prompt("Digite seu nome: ")
	alert("Olá," + nome)
}

function mudar_texto() {
	var nome1;
	nome1 = prompt("Digite seu nome: ");
	var h1 = document.getElementsByTagName("h1");

	h1[0].innerText = nome1;
}