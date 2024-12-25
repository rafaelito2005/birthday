// Função para liberar o botão de galeria de imagens
document.getElementById("confirmarSenhaBotao").addEventListener("click", function() {
  const senhaInput = document.getElementById("senhaInputBotao");
  const senha = "12345"; // Senha correta para a galeria

  if (senhaInput.value === senha) {
    document.getElementById("meuBotao").style.display = "block"; // Exibe o botão "Clica Aqui"
    document.getElementById("senhaBotao").style.display = "none"; // Oculta o campo de senha
  } else {
    document.getElementById("avisoBotao").style.display = "block"; // Exibe aviso de senha incorreta
  }
});

// Exibir a galeria de imagens quando o botão "Clica Aqui" for pressionado
document.getElementById("meuBotao").addEventListener("click", function() {
  const gallery = document.getElementById("imageGallery");
  gallery.style.display = gallery.style.display === "none" ? "block" : "none";
});

// Função para liberar o botão de texto secreto
document.getElementById("confirmarSenhaTexto").addEventListener("click", function() {
  const senhaInputTexto = document.getElementById("senhaInputTexto");
  const senhaTexto = "67890"; // Senha correta para o texto secreto

  if (senhaInputTexto.value === senhaTexto) {
    document.getElementById("mostrarTexto").style.display = "block"; // Exibe o botão "Mostrar Texto Secreto"
    document.getElementById("senhaTexto").style.display = "none"; // Oculta o campo de senha
  } else {
    document.getElementById("avisoTexto").style.display = "block"; // Exibe aviso de senha incorreta
  }
});

// Exibir o texto secreto quando o botão "Mostrar Texto Secreto" for pressionado
document.getElementById("mostrarTexto").addEventListener("click", function() {
  const textoSecreto = document.getElementById("textoSecreto");
  textoSecreto.style.display = textoSecreto.style.display === "none" ? "block" : "none";
});
