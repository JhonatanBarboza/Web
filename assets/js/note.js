function goToDashboard() {
    showScreen('dashboardScreen');
    updateDashboard();
}

function handleDeleteNote() {
    if (confirm('Tem certeza que deseja excluir esta anotação?')) {
        currentNote = null;
        alert('Anotação excluída com sucesso!');
        goToDashboard();
    }
}

function goToQuestions() {
    if (!currentNote) {
        alert('Nenhuma anotação selecionada!');
        return;
    }

    // Atualizar título das questões
    document.getElementById('questionsTitle').textContent = `Questões sobre ${currentNote.material}`;

    showScreen('questionsScreen');
}