/* ==================== GERENCIAMENTO DE QUESTÕES DE REVISÃO ==================== */

/**
 * Navega para tela de questões
 */
function goToQuestions() {
    if (!currentNote) {
        alert('Nenhuma anotação selecionada!');
        return;
    }

    // Atualizar título das questões
    document.getElementById('questionsTitle').textContent = `Questões sobre ${currentNote.material}`;

    router.toQuestions();
}

/**
 * Registra resposta de uma questão
 */
function answerQuestion(questionNumber, answer) {
    console.log(`Questão ${questionNumber} respondida com: ${answer}`);
    updateProgressBar();
}

/**
 * Atualiza barra de progresso
 */
function updateProgressBar() {
    // Contar respostas selecionadas
    const radios = document.querySelectorAll('.questions-list input[type="radio"]:checked');
    const total = document.querySelectorAll('.questions-list .question-card').length;
    const progress = (radios.length / total) * 100;

    document.getElementById('progressFill').style.width = progress + '%';
}

/**
 * Envia respostas e finaliza revisão
 */
function submitAnswers() {
    const radios = document.querySelectorAll('.questions-list input[type="radio"]:checked');
    const total = document.querySelectorAll('.questions-list .question-card').length;

    if (radios.length < total) {
        alert(`Por favor, responda todas as ${total} questões antes de finalizar!`);
        return;
    }

    alert('Revisão finalizada! (Validação real será na Parte 2)');
    router.toNote();
}
