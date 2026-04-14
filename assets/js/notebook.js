function goToUpload() {
    // Definir data atual
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('noteDate').value = today;

    // Resetar upload
    resetFileSelection();

    // showScreen('uploadScreen');
    window.location.href = "../../html/upload.html";
}

function viewMaterial(materialName) {
    currentMaterial = materialName;
    alert(`Abrindo anotações de ${materialName}. (Funcionalidade para Parte 2)`);
}

function showAddMaterialModal() {
    const newMaterialName = prompt('Digite o nome da nova matéria:');
    if (newMaterialName && newMaterialName.trim()) {
        alert(`Matéria "${newMaterialName}" adicionada! (Funcionalidade para Parte 2)`);
    }
}