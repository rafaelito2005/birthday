// Quando o botão for clicado, mostra a galeria de imagens
document.getElementById("meuBotao").addEventListener("click", function() {
  // Mostra ou esconde a galeria de imagens
  const gallery = document.getElementById("imageGallery");
  gallery.style.display = gallery.style.display === "none" ? "block" : "none";
});

// Controle de senha para mostrar o texto secreto
document.getElementById("confirmarSenha").addEventListener("click", function() {
  const senha = document.getElementById("senhaInput").value;
  if (senha === "1234") {
    document.getElementById("textoSecreto").style.display = "block"; // Mostra o texto secreto
    document.getElementById("senhaCaixa").style.display = "none"; // Esconde o campo de senha
  } else {
    document.getElementById("aviso").style.display = "block"; // Mostra aviso de erro
  }
});

// Controle de senha para acessar o texto secreto
document.getElementById("confirmarSenhaSecreta").addEventListener("click", function() {
  const senhaSecreta = document.getElementById("senhaInputSecreta").value;
  if (senhaSecreta === "5678") {
    document.getElementById("textoSecreto").style.display = "block"; // Mostra o texto secreto
    document.getElementById("senhaCaixaSecreta").style.display = "none"; // Esconde o campo de senha
  } else {
    alert("Senha incorreta. Tente novamente.");
  }
});
