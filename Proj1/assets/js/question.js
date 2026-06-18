function goToNote() {
    window.location.href = "../html/note.html?noteId=1&material=Matemática";
}

function answerQuestion(questionNumber, answer) {
    console.log(`Questão ${questionNumber} respondida com: ${answer}`);
    // Atualizar progresso (simples)
    updateProgressBar();
}

function submitAnswers() {
    const radios = document.querySelectorAll('.questions-list input[type="radio"]:checked');
    const total = document.querySelectorAll('.questions-list .question-card').length;

    if (radios.length < total) {
        alert(`Por favor, responda todas as ${total} questões antes de finalizar!`);
        return;
    }

    alert('Revisão finalizada! (Validação real será na Parte 2)');
    goToNote();
}