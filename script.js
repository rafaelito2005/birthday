document.getElementById("meuBotao").addEventListener("click", function () {
  // Exibe a caixa de senha para o primeiro botão
  document.getElementById("senhaCaixa").style.display = "block";
});

document.getElementById("confirmarSenha").addEventListener("click", function () {
  const senhaInput = document.getElementById("senhaInput").value;
  const senhaCorreta = "02012005"; // Senha de exemplo para a primeira caixa

  if (senhaInput === senhaCorreta) {
    // Esconde a caixa de senha e exibe a galeria
    document.getElementById("senhaCaixa").style.display = "none";
    document.getElementById("imageGallery").style.display = "grid";
    mostrarImagens();
    document.getElementById("mostrarTexto").style.display = "block"; // Exibe o botão de mostrar o texto secreto
  } else {
    // Exibe a mensagem de erro
    document.getElementById("aviso").style.display = "block";
  }
});

// Função para adicionar as imagens dinamicamente
function mostrarImagens() {
  const gallery = document.getElementById("imageGallery");
  const imagens = [
    { src: "./images/picture1.jpg", texto: "Finalmente a gente tinha tirado uma foto boa juntos, porque aquela primeira a gente ficou parecendo dois ET" },
    { src: "./images/picture2.jpg", texto: "Essa aqui é uma das melhores" },
    { src: "./images/picture3.jpg", texto: "Essa também não podia faltar né muito fofinha" },
    { src: "./images/picture4.jpg", texto: "Simplesmente eu fardado e tu de boina, ficou incrível, preciso dizer algo mais?... a segunda senha é o meu aniversário" }
  ];

  imagens.forEach(({ src, texto }) => {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = src;
    img.alt = "Foto da galeria";
    img.style.width = "100%";
    img.style.margin = "10px";

    const caption = document.createElement("figcaption");
    caption.innerText = texto;

    figure.appendChild(img);
    figure.appendChild(caption);
    gallery.appendChild(figure);
  });
}

// Função para exibir a caixa de senha do botão "Mostrar Texto Secreto"
document.getElementById("mostrarTexto").addEventListener("click", function () {
  // Exibe a caixa de senha para o texto secreto
  document.getElementById("senhaCaixaSecreta").style.display = "block";
});

// Caixa de senha do botão "Mostrar Texto Secreto"
document.getElementById("confirmarSenhaSecreta").addEventListener("click", function () {
  const senhaInputSecreta = document.getElementById("senhaInputSecreta").value;
  const senhaCorretaSecreta = "03122005"; // Senha do texto secreto, altere conforme necessário

  if (senhaInputSecreta === senhaCorretaSecreta) {
    // Se a senha estiver correta, exibe o texto secreto
    document.getElementById("textoSecreto").style.display = "block";  // Torna o texto visível
    document.getElementById("senhaCaixaSecreta").style.display = "none"; // Esconde a caixa de senha
  } else {
    // Exibe a mensagem de erro
    alert("Senha incorreta! Tente novamente.");
  }
});
