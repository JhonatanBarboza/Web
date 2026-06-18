// ==================== ESTADO GLOBAL ====================
let currentUser = null;
let currentNote = null;
let currentMaterial = null;
let uploadedFile = null;

// ==================== GERENCIAMENTO DE TELAS ====================
function showScreen(screenId) {
    // Esconder todas as telas
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    // Mostrar a tela solicitada
    const screen = document.getElementById(screenId);
    if (screen) {
        screen.classList.add('active');
        window.scrollTo(0, 0);
    }
}

function handleLogout() {
    const overlay = document.createElement("div");
    overlay.className = "overlay";

    overlay.innerHTML = `
    <div class="popup">
        <button class="btn-fechar"> X </button>
        <p>Tem certeza que deseja sair?</p>
        <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
            <button class="btn" id="btn-sairconfirma" style="flex: 1; color: white;background-color: var(--danger-color);">Sim</button>
            <button class="btn" id="btn-naosair" style="flex: 1;">Não</button>   
        </div>
    </div>
    `;

    document.body.appendChild(overlay);

    // confirmar
    overlay.querySelector("#btn-sairconfirma").onclick = () => {
        currentUser = null;
        currentNote = null;
        uploadedFile = null;

        // Limpar localStorage
        localStorage.clear();

        // Verificar se estamos na página de notebook ou em outra página
        if (document.getElementById('loginScreen')) {
            // Se estamos na página de login/signup, mostrar a tela de login
            showScreen('loginScreen');
            switchTab('login');
        } else {
            // Se estamos em outra página (notebook.html, gallery.html, etc), redirecionar para login
            window.location.href = "../html/login.html";
        }
    }

    overlay.querySelector(".btn-fechar").onclick = () => overlay.remove();
    overlay.querySelector("#btn-naosair").onclick = () => overlay.remove();
}

// ==================== DASHBOARD ====================
function updateDashboard() {
    if (currentUser) {
        document.getElementById('userName').textContent = currentUser.name;
    }
}

// ==================== VISUALIZAÇÃO DE ANOTAÇÃO ====================
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

    showScreen('noteScreen');
}

// ==================== QUESTÕES DE REVISÃO ====================

function updateProgressBar() {
    // Contar respostas selecionadas
    const radios = document.querySelectorAll('.questions-list input[type="radio"]:checked');
    const total = document.querySelectorAll('.questions-list .question-card').length;
    const progress = (radios.length / total) * 100;

    document.getElementById('progressFill').style.width = progress + '%';
}

// ==================== DRAG AND DROP ====================
document.addEventListener('DOMContentLoaded', function() {
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
});

function handleDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.2)';
    event.currentTarget.style.borderColor = '#764ba2';
}

function handleDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.05)';
    event.currentTarget.style.borderColor = '#667eea';
}

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

// ==================== INICIALIZAÇÃO ====================
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar tela de login  como padrão
    showScreen('loginScreen');

    // Adicionar atalhos de teclado
    document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const activeTab = document.querySelector('.tab-btn.active');
            if (activeTab && activeTab.textContent === 'Entrar') {
                handleLogin();
            } else if (activeTab && activeTab.textContent === 'Cadastrar') {
                handleSignup();
            }
        }
    });
});

// ==================== UTILITÁRIOS ====================
function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString('pt-BR', options);
}

function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

goToDashboard = function() {
    window.location.href = "../html/notebook.html";
}

function goToGallery(materialName) {
    window.location.href = "../html/gallery.html?material=" + encodeURIComponent(materialName);
}
