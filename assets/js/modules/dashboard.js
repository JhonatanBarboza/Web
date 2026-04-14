/* ==================== GERENCIAMENTO DO DASHBOARD ==================== */

let currentMaterial = null;

/**
 * Atualiza as informações do dashboard com dados do usuário
 */
function updateDashboard() {
    if (currentUser) {
        document.getElementById('userName').textContent = currentUser.name;
    }
}

/**
 * Abre uma matéria específica
 */
function viewMaterial(materialName) {
    currentMaterial = materialName;
    alert(`Abrindo anotações de ${materialName}. (Funcionalidade para Parte 2)`);
}

/**
 * Mostra modal para adicionar nova matéria
 */
function showAddMaterialModal() {
    const newMaterialName = prompt('Digite o nome da nova matéria:');
    if (newMaterialName && newMaterialName.trim()) {
        alert(`Matéria "${newMaterialName}" adicionada! (Funcionalidade para Parte 2)`);
    }
}

/**
 * Obtém a matéria atualmente selecionada
 */
function getCurrentMaterial() {
    return currentMaterial;
}
