// Senha para o primeiro botão
document.getElementById("confirmarSenhaBotao").addEventListener("click", function() {
  const senhaInput = document.getElementById("senhaInputBotao");
  const senha = "12345"; // Senha para o primeiro botão

  if (senhaInput.value === senha) {
    // Se a senha estiver correta, exibe o botão "Clica Aqui"
    document.getElementById("meuBotao").style.display = "block";
    document.getElementById("senhaBotao").style.display = "none"; // Esconde o campo de senha
    document.getElementById("erroMensagem").style.display = "none"; // Remove o aviso de erro
  } else {
    // Se a senha estiver errada, exibe a mensagem de erro
    document.getElementById("erroMensagem").style.display = "block";
  }
});

// Função para exibir o segundo botão "Mostrar Texto Secreto" ao clicar em "Clica Aqui"
document.getElementById("meuBotao").addEventListener("click", function() {
  const senhaTextoContainer = document.getElementById("senhaTexto");
  senhaTextoContainer.style.display = "block"; // Exibe o campo para senha do segundo botão
});

// Senha para o segundo botão
document.getElementById("confirmarSenhaTexto").addEventListener("click", function() {
  const senhaInputTexto = document.getElementById("senhaInputTexto");
  const senhaTexto = "67890"; // Senha para o segundo botão

  if (senhaInputTexto.value === senhaTexto) {
    // Se a senha estiver correta, exibe o botão "Mostrar Texto Secreto"
    document.getElementById("mostrarTexto").style.display = "block";
    document.getElementById("senhaTexto").style.display = "none"; // Esconde o campo de senha
    document.getElementById("erroMensagem").style.display = "none"; // Remove o aviso de erro
  } else {
    // Se a senha estiver errada, exibe a mensagem de erro
    document.getElementById("erroMensagem").style.display = "block";
  }
});

// Exibe o texto secreto ao clicar no botão "Mostrar Texto Secreto"
document.getElementById("mostrarTexto").addEventListener("click", function() {
  const textoSecreto = document.getElementById("textoSecreto");
  textoSecreto.style.display = textoSecreto.style.display === "none" ? "block" : "none";
});
