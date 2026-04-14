/* ==================== GERENCIAMENTO DE VISUALIZAÇÃO DE ANOTAÇÃO ==================== */

let currentNote = null;

/**
 * Mostra a anotação atual
 */
function showNote() {
    if (!currentNote) return;

    // Atualizar elementos
    document.getElementById('noteTitle').textContent = currentNote.title;
    document.getElementById('noteMaterialBadge').textContent = currentNote.material;
    document.getElementById('noteImage').src = currentNote.image;
    document.getElementById('noteContent').innerHTML = currentNote.content;

    // Cores das badges por matéria
    const colors = {
        'Matemática': '#667eea',
        'Física': '#f5576c',
        'Química': '#00f2fe',
        'Biologia': '#38f9d7'
    };
    const badgeColor = colors[currentNote.material] || '#667eea';
    document.getElementById('noteMaterialBadge').style.backgroundColor = badgeColor;

    router.toNote();
}

/**
 * Deleta a anotação atual
 */
function handleDeleteNote() {
    if (confirm('Tem certeza que deseja excluir esta anotação?')) {
        currentNote = null;
        alert('Anotação excluída com sucesso!');
        router.toDashboard();
    }
}

/**
 * Obtém a anotação atual
 */
function getCurrentNote() {
    return currentNote;
}

/**
 * Define a anotação atual
 */
function setCurrentNote(note) {
    currentNote = note;
}
