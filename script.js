// Quando o botão for clicado, mostra a galeria de imagens
document.getElementById("meuBotao").addEventListener("click", function() {
  // Mostra ou esconde a galeria de imagens
  const gallery = document.getElementById("imageGallery");
  gallery.style.display = gallery.style.display === "none" ? "block" : "none";
});

// Exibir o texto secreto quando o botão for pressionado
document.getElementById("mostrarTexto").addEventListener("click", function() {
  const textoSecreto = document.getElementById("textoSecreto");
  textoSecreto.style.display = textoSecreto.style.display === "none" ? "block" : "none";
});

// Função para confirmar a senha e exibir a galeria de imagens
document.getElementById("confirmarSenha").addEventListener("click", function() {
  const senhaInput = document.getElementById("senhaInput");
  const senha = "12345"; // Exemplo de senha

  if (senhaInput.value === senha) {
    document.getElementById("imageGallery").style.display = "block";
    document.getElementById("senhaCaixa").style.display = "none"; // Ocultar caixa de senha
  } else {
    document.getElementById("aviso").style.display = "block"; // Exibir aviso de senha incorreta
  }
});

// Função para confirmar a senha do texto secreto
document.getElementById("confirmarSenhaSecreta").addEventListener("click", function() {
  const senhaInputSecreta = document.getElementById("senhaInputSecreta");
  const senhaSecreta = "67890"; // Exemplo de senha secreta

  if (senhaInputSecreta.value === senhaSecreta) {
    document.getElementById("textoSecreto").style.display = "block";
    document.getElementById("senhaCaixaSecreta").style.display = "none"; // Ocultar caixa de senha secreta
  } else {
    alert("Senha incorreta!"); // Mensagem de erro caso a senha secreta esteja errada
  }
});
