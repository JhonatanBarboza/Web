function handleFileSelect(event) {
    const file = event.target.files[0];

    if (!file) return;

    // Validar tipo de arquivo
    const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!validTypes.includes(file.type)) {
        alert('Formato inválido! Aceitar JPG, PNG ou PDF.');
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

function resetFileSelection() {
    uploadedFile = null;
    document.getElementById('fileInput').value = '';
    document.getElementById('previewSection').style.display = 'none';
    document.querySelector('.drop-zone').style.display = 'block';
}

function handleTranscribe() {
    const material = new URLSearchParams(window.location.search).get('material');
    const date = document.getElementById('noteDate').value;
    const title = document.getElementById('noteTitle').value;

    if (!material) {
        alert('Por favor, selecione uma matéria!');
        return;
    }

    if (!uploadedFile) {
        alert('Por favor, selecione uma imagem!');
        return;
    }

    // Criar nota dummy
    const newNote = {
        id: Math.random(),
        title: title || `Anotação - ${date}`,
        material: material,
        date: date,
        image: document.getElementById('previewImage').src,
        content: '<h3>Conceito de Derivada</h3><p>A derivada de uma função f(x) em um ponto x₀ é definida como o limite:</p><p style="text-align: center; font-family: \'Courier New\', monospace;">f\'(x₀) = lim(h→0) [f(x₀+h) - f(x₀)] / h</p><h3>Propriedades das Derivadas</h3><ul><li><strong>Regra da Potência:</strong> d/dx(xⁿ) = n·xⁿ⁻¹</li><li><strong>Regra do Produto:</strong> (f·g)\' = f\'·g + f·g\'</li><li><strong>Regra da Cadeia:</strong> (f∘g)\' = f\'(g)·g\'</li></ul>',
        createdAt: new Date()
    };

    // Ir para tela de visualização
    createNote(newNote);
}

function createNote(newNote){
    // voltar para a galeria, madando informações da nova nota (simulação)
    localStorage.setItem('selectedNoteId', newNote.id);
    localStorage.setItem('currentMaterial', newNote.material);
    window.location.href = "../html/gallery.html?&material=" + encodeURIComponent(newNote.material) + "&title=" + encodeURIComponent(newNote.title) + "&content=" + encodeURIComponent(newNote.content) + "&new=true";
}