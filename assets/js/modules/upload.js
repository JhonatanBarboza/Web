/* ==================== GERENCIAMENTO DE UPLOAD E NOVA ANOTAÇÃO ==================== */

let uploadedFile = null;

/**
 * Processa a seleção de arquivo
 */
function handleFileSelect(event) {
    const file = event.target.files[0];

    if (!file) return;

    // Validar tipo de arquivo
    const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!validTypes.includes(file.type)) {
        alert('Formato inválido! Aceitos: JPG, PNG ou PDF');
        return;
    }

    uploadedFile = file;

    // Mostrar preview
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('previewImage').src = e.target.result;
        document.getElementById('previewSection').style.display = 'block';
        document.querySelector('.drop-zone').style.display = 'none';
    };
    reader.readAsDataURL(file);
}

/**
 * Reseta a seleção de arquivo
 */
function resetFileSelection() {
    uploadedFile = null;
    document.getElementById('fileInput').value = '';
    document.getElementById('previewSection').style.display = 'none';
    document.querySelector('.drop-zone').style.display = 'block';
}

/**
 * Processa a transcrição da anotação (simulada com IA)
 */
function handleTranscribe() {
    const material = document.getElementById('noteMaterial').value;
    const date = document.getElementById('noteDate').value;
    const title = document.getElementById('noteTitle').value;

    // Validações
    if (!material) {
        alert('Por favor, selecione uma matéria!');
        return;
    }

    if (!uploadedFile) {
        alert('Por favor, selecione uma imagem!');
        return;
    }

    // Mostrar estado de carregamento
    showLoadingState();

    // Simular delay de IA (1-2 segundos)
    setTimeout(() => {
        hideLoadingState();

        // Criar nota dummy
        currentNote = {
            id: Math.random(),
            title: title || `Anotação - ${date}`,
            material: material,
            date: date,
            image: document.getElementById('previewImage').src,
            content: '<h3>Conceito de Derivada</h3><p>A derivada de uma função f(x) em um ponto x₀ é definida como o limite:</p><p style="text-align: center; font-family: \'Courier New\', monospace;">f\'(x₀) = lim(h→0) [f(x₀+h) - f(x₀)] / h</p><h3>Propriedades das Derivadas</h3><ul><li><strong>Regra da Potência:</strong> d/dx(xⁿ) = n·xⁿ⁻¹</li><li><strong>Regra do Produto:</strong> (f·g)\' = f\'·g + f·g\'</li><li><strong>Regra da Cadeia:</strong> (f∘g)\' = f\'(g)·g\'</li></ul>',
            createdAt: new Date()
        };

        // Ir para tela de visualização
        showNote();
    }, 2000);
}

/**
 * Mostra estado de carregamento
 */
function showLoadingState() {
    alert('🔄 Processando imagem com IA...\nIsso pode levar alguns segundos.');
}

/**
 * Esconde estado de carregamento
 */
function hideLoadingState() {
    // Placeholder para sistema de loading real
}

/**
 * Obtém o arquivo carregado
 */
function getUploadedFile() {
    return uploadedFile;
}

// ==================== DRAG AND DROP ====================
/**
 * Gerencia arrastar sobre a zona de drop
 */
function handleDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.2)';
    event.currentTarget.style.borderColor = '#764ba2';
}

/**
 * Gerencia sair da zona de drop
 */
function handleDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.05)';
    event.currentTarget.style.borderColor = '#667eea';
}

/**
 * Gerencia drop de arquivo
 */
function handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;
    if (files.length > 0) {
        const file = files[0];
        // Simular seleção de arquivo
        const fileInput = document.getElementById('fileInput');
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        fileInput.files = dataTransfer.files;

        // Disparar evento de mudança
        const changeEvent = new Event('change', { bubbles: true });
        fileInput.dispatchEvent(changeEvent);
    }

    event.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.05)';
    event.currentTarget.style.borderColor = '#667eea';
}

/**
 * Inicializa drag and drop
 */
function initializeDragAndDrop() {
    const dropZone = document.getElementById('dropZone');

    if (dropZone) {
        dropZone.addEventListener('dragover', handleDragOver);
        dropZone.addEventListener('dragleave', handleDragLeave);
        dropZone.addEventListener('drop', handleDrop);
    }

    // Definir data atual no campo de data
    const dateInput = document.getElementById('noteDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
    }
}
