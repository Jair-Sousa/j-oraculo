// Início do código JavaScript para o Oráculo

document.addEventListener('keydown', function(event) {
  // Verifica se a tecla pressionada é Enter
  if (event.key === 'Enter') {
    // Impede o envio padrão do formulário se o foco estiver em um input
    event.preventDefault();
    // Pega o valor do campo de pergunta
    const questionInput = document.getElementById('question');
    if (questionInput && questionInput.value.trim() !== '') {
      consultaOraculo();
    }
  }
});


// barra de progresso 
const consultaOraculo = async () => {
  const question = document.getElementById("question").value;
  document.getElementById("pergunta").innerHTML = question;

  // Exibe a barra de progresso e inicia animação
  const progressBar = document.getElementById("progress-bar");
  const progressInner = document.getElementById("progress-inner");
  progressBar.style.display = "block";
  progressInner.style.width = "0%";

  // Simula progresso enquanto aguarda resposta
  let progress = 0;
  const interval = setInterval(() => {
    if (progress < 90) { // Vai até 90% enquanto espera
      progress += 10;
      progressInner.style.width = progress + "%";
    }
  }, 200);

  try {
    const response = await fetch("https://j-oraculo-backend.onrender.com/perguntar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ pergunta: question })
    });

    const data = await response.json();

    // Finaliza a barra de progresso
    clearInterval(interval);
    progressInner.style.width = "100%";
    setTimeout(() => {
      progressBar.style.display = "none";
      progressInner.style.width = "0%";
    }, 400);

    if (data.resposta) {
      document.getElementById("resposta").innerHTML = data.resposta;
    } else if (data.erro) {
      document.getElementById("resposta").innerHTML = data.erro;
    } else {
      document.getElementById("resposta").innerHTML = "Resposta indefinida.";
    }

  } catch (error) {
    clearInterval(interval);
    progressBar.style.display = "none";
    progressInner.style.width = "0%";
    console.error(error);
    document.getElementById("resposta").innerHTML = "Erro ao consultar o oráculo.";
  }
};
// ...Fim do código...
