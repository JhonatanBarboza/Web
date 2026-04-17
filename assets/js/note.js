function backToGallery() {
    const urlParams = new URLSearchParams(window.location.search);
    const material = urlParams.get('material');

    window.location.href = "../html/gallery.html?material=" + encodeURIComponent(material);
}

function handleDeleteNote() {
    if (confirm('Tem certeza que deseja excluir esta anotação?')) {
        currentNote = null;
        alert('Anotação excluída com sucesso!');
        backToGallery();
    }
}

function goToQuestions() {
    if (!currentNote) {
        alert('Nenhuma anotação selecionada!');
        return;
    }

    // Atualizar título das questões
    document.getElementById('questionsTitle').textContent = `Questões sobre ${currentNote.material}`;

    // showScreen('questionsScreen');
    window.location.href = "../html/question.html";

}