function corrigirQuiz() {
    let acertos = 0;
  
    const respostas = {
      q1: 'b', // Primeira Lei de Newton
      q2: 'b', // Porque tem mais massa
      q3: 'b', // Energia cinética
    };
  
    const total = Object.keys(respostas).length;
    for (let q in respostas) {
      const marcado = document.querySelector(`input[name="${q}"]:checked`);
      if (marcado && marcado.value === respostas[q]) {
        acertos++;
      }
    }
  
    let resultado = document.getElementById('quiz-resultado');
    resultado.innerHTML = `Você acertou <span style="color:#f9c846">${acertos} de ${total}</span> perguntas!`;
  }
  