let currentGalleryMaterial = '';

const notesData = {
    'Matemática': [
        {
            id: 1,
            title: 'Derivadas — 12/04',
            date: '12/04/2026',
            description: 'Conceitos fundamentais sobre derivadas e suas aplicações',
            material: 'Matemática',
            color: 'var(--secondary-color)'
        },
        {
            id: 2,
            title: 'Integrais — 10/04',
            date: '10/04/2026',
            description: 'Integração e cálculo de áreas sob curvas',
            material: 'Matemática',
            color: 'var(--secondary-color)'
        },
        {
            id: 3,
            title: 'Diferenciais — 08/04',
            date: '08/04/2026',
            description: 'Resolução de equações diferenciais ordinárias',
            material: 'Matemática',
            color: 'var(--secondary-color)'
        }
    ],
    'Física': [
        {
            id: 4,
            title: 'Ótica — 11/04',
            date: '11/04/2026',
            description: 'Fenômenos ópticos e propagação da luz',
            material: 'Física',
            color: 'var(--secondary-color)'
        },
        {
            id: 5,
            title: 'Termodinâmica — 09/04',
            date: '09/04/2026',
            description: 'Leis da termodinâmica e transformações de energia',
            material: 'Física',
            color: 'var(--secondary-color)'
        }
    ],
    'Química': [
        {
            id: 6,
            title: 'Estequiometria — 07/04',
            date: '07/04/2026',
            description: 'Cálculos estequiométricos e proporções químicas',
            material: 'Química',
            color: 'var(--secondary-color)'
        }
    ],
    'Português': [
        {
            id: 7,
            title: 'Sintaxe da Oração — 06/04',
            date: '06/04/2026',
            description: 'Análise sintática e estrutura das orações',
            material: 'Português',
            color: 'var(--secondary-color)'
        }
    ],
    'História': [
        {
            id: 8,
            title: 'Revolução Francesa — 05/04',
            date: '05/04/2026',
            description: 'Contexto histórico e consequências da Revolução Francesa',
            material: 'História',
            color: 'var(--secondary-color)'
        }
    ]
};

function initGallery() {
    // Obter o material a partir da URL
    const urlParams = new URLSearchParams(window.location.search);
    const material = urlParams.get('material');
    
    if (!material) {
        window.location.href = "../html/notebook.html";
        return;
    }
    
    currentGalleryMaterial = material;
    
    // Atualizar título da galeria
    const galleryTitle = document.getElementById('galleryTitle');
    
    if (galleryTitle) {
        galleryTitle.textContent = `Anotações de ${currentGalleryMaterial}`;
    }

    // verificar se é uma nova nota (simulação de criação)
    const isNew = urlParams.get('new');
    if(isNew){
        // alert('Anotação criada com sucesso!');
        // adicionar a nova nota à galeria (simulação)
        const newNote = {
            id: urlParams.get('noteId'),
            title: urlParams.get('title'),
            material: urlParams.get('material'),
            date: new Date().toLocaleDateString('pt-BR'),
            description: 'Anotação gerada a partir da imagem enviada',
            color: 'var(--secondary-color)'
        };
        notesData[currentGalleryMaterial].unshift(newNote);
    }
    // atualizar a URL para remover os parâmetros de nova nota (evitar alertas repetidos ao recarregar)
    window.history.replaceState({}, document.title, window.location.pathname + '?material=' + encodeURIComponent(currentGalleryMaterial));

    loadNotesForMaterial(currentGalleryMaterial);
}

function loadNotesForMaterial(materialName) {
    
    const notesGrid = document.getElementById('notesGrid');
    
    if (!notesGrid) {
        return;
    }
    
    // Forçar grid display como fallback
    notesGrid.style.display = 'grid';
    notesGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(250px, 1fr))';
    notesGrid.style.gap = '1.5rem';
    
    notesGrid.innerHTML = '';
    
    // Adicionar botão de nova anotação como primeiro item
    const newNoteButton = createNewNoteButton(materialName);
    notesGrid.appendChild(newNoteButton);
    
    const notes = notesData[materialName] || [];
    
    if (notes.length === 0) {
        return;
    }
    
    notes.forEach((note, index) => {
        const noteCard = createNoteCard(note);
        notesGrid.appendChild(noteCard);
    });
}

function createNewNoteButton(materialName) {
    
    const button = document.createElement('div');
    button.className = 'new-note-button';
    button.onclick = () => goToUpload(materialName);
    
    button.innerHTML = `
        <div class="new-note-button-icon">+</div>
        <div class="new-note-button-text">Nova Anotação</div>
    `;
    
    return button;
}

function goToUpload() {
    const urlParams = new URLSearchParams(window.location.search);
    const material = urlParams.get('material');
    window.location.href = "../html/upload.html?material=" + encodeURIComponent(material);
}

function createNoteCard(note) {
    
    const card = document.createElement('div');
    card.className = 'note-thumbnail';
    card.onclick = () => viewNote(note.id);
    
    // Forçar estilos como fallback
    card.style.background = 'white';
    card.style.borderRadius = '1rem';
    card.style.overflow = 'hidden';
    card.style.cursor = 'pointer';
    card.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    card.style.height = '320px';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    
    card.innerHTML = `
        <div class="note-thumbnail-image" style="background: var(--primary-color); flex-shrink: 0; width: 100%; height: 150px; display: flex; align-items: center; justify-content: center;">
            <img src="${note.image}" alt="${note.title}" onerror="this.style.display='none'" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="note-thumbnail-content" style="padding: 1.25rem; flex: 1; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden;">
            <div style="flex-shrink: 0; overflow: hidden;">
                <h3 class="note-thumbnail-title" style="font-size: 1rem; font-weight: 600; color: #2c3e50; margin: 0 0 0.5rem 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">${note.title}</h3>
                <p class="note-thumbnail-date" style="font-size: 0.85rem; color: #7f8c8d; margin: 0 0 0.75rem 0;">${formatDate(note.date)}</p>
                <p class="note-thumbnail-summary" style="font-size: 0.85rem; color: #7f8c8d; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; margin: 0;">${note.description}</p>
            </div>
            <span class="note-thumbnail-badge" style="display: inline-block; padding: 0.4rem 0.8rem; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 600; color: white; margin-top: 0.75rem; width: fit-content; background-color: ${note.color}; flex-shrink: 0;">${note.material}</span>
        </div>
    `;
    
    return card;
}

function viewNote(noteId) {
    // Salvar o ID da nota selecionada e redirecionar para a página de visualização
    localStorage.setItem('selectedNoteId', noteId);
    localStorage.setItem('currentMaterial', currentGalleryMaterial);
    window.location.href = "../html/note.html?noteId=" + noteId + "&material=" + encodeURIComponent(currentGalleryMaterial);
}

function goToDashboard() {
    window.location.href = "../html/notebook.html";
}

function formatDate(dateStr) {
    try {
        const [day, month, year] = dateStr.split('/');
        const date = new Date(year, month - 1, day);
        return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
    } catch (e) {
        return dateStr;
    }
}

// Inicializa a galeria quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initGallery();
});