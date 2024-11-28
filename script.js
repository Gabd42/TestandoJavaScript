function mudar_texto() {
	var nome1;
	nome1 = prompt("Digite seu nome: ");
	var h2 = document.getElementsByTagName("h2");
	h2[0].innerText = nome1;

	if(nome1.toLocaleLowerCase() == "kauê", "kaue"){
		var h3 = document.getElementsByTagName("h3");
		h3[0].innerText = "Salomão!";
	}if(nome1.toLocaleLowerCase() == "gabriel"){
		h3[0].innerText = "Jumenta de Balaao!";
	}
}