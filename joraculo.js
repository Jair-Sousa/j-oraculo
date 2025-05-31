const consultaOraculo = async () => {
  const question = document.getElementById("question").value;
  document.getElementById("pergunta").innerHTML = question;

  try {
    const response = await fetch("https://j-oraculo-backend.onrender.com/perguntar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ pergunta: question })
    });

    const data = await response.json();

    if (data.resposta) {
      document.getElementById("resposta").innerHTML = data.resposta;
    } else if (data.erro) {
      document.getElementById("resposta").innerHTML = data.erro;
    } else {
      document.getElementById("resposta").innerHTML = "Resposta indefinida.";
    }

  } catch (error) {
    console.error(error);
    document.getElementById("resposta").innerHTML = "Erro ao consultar o oráculo.";
  }
};
