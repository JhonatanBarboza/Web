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

// ==================== AUTENTICAÇÃO ====================
// function switchTab(tabName) {
//     // Alternar entre abas de login e cadastro
//     const loginForm = document.getElementById('loginForm');
//     const signupForm = document.getElementById('signupForm');
//     const tabBtns = document.querySelectorAll('.tab-btn');

//     tabBtns.forEach(btn => btn.classList.remove('active'));
    
//     if (tabName === 'login') {
//         loginForm.classList.add('active');
//         signupForm.classList.remove('active');
//         tabBtns[0].classList.add('active');
//     } else {
//         loginForm.classList.remove('active');
//         signupForm.classList.add('active');
//         tabBtns[1].classList.add('active');
//     }
// }

// function handleLogin() {
//     const email = document.getElementById('loginEmail').value.trim();
//     const password = document.getElementById('loginPassword').value.trim();

//     if (!email || !password) {
//         alert('Por favor, preencha todos os campos!');
//         return;
//     }

//     // Simular login (dados dummy)
//     currentUser = {
//         id: 1,
//         name: 'Ana',
//         email: email,
//         createdAt: new Date()
//     };

//     // Limpar formulário
//     document.getElementById('loginForm').reset();

//     // Ir para dashboard
//     showScreen('dashboardScreen');
//     updateDashboard();
// }

// function handleSignup() {
//     const name = document.getElementById('signupName').value.trim();
//     const email = document.getElementById('signupEmail').value.trim();
//     const password = document.getElementById('signupPassword').value.trim();
//     const confirm = document.getElementById('signupConfirm').value.trim();

//     if (!name || !email || !password || !confirm) {
//         alert('Por favor, preencha todos os campos!');
//         return;
//     }

//     if (password !== confirm) {
//         alert('As senhas não coincidem!');
//         return;
//     }

//     if (password.length < 6) {
//         alert('A senha deve ter no mínimo 6 caracteres!');
//         return;
//     }

//     // Simular cadastro
//     currentUser = {
//         id: Math.random(),
//         name: name,
//         email: email,
//         createdAt: new Date()
//     };

//     // Limpar formulário
//     document.getElementById('signupForm').reset();

//     // Voltar para aba de login
//     switchTab('login');
//     alert('Conta criada com sucesso! Você já pode fazer login.');
// }

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

// function goToDashboard() {
//     showScreen('dashboardScreen');
//     updateDashboard();
// }

// function viewMaterial(materialName) {
//     currentMaterial = materialName;
//     alert(`Abrindo anotações de ${materialName}. (Funcionalidade para Parte 2)`);
// }

// function showAddMaterialModal() {
//     const newMaterialName = prompt('Digite o nome da nova matéria:');
//     if (newMaterialName && newMaterialName.trim()) {
//         alert(`Matéria "${newMaterialName}" adicionada! (Funcionalidade para Parte 2)`);
//     }
// }

// ==================== UPLOAD E NOVA ANOTAÇÃO ====================
// function goToUpload() {
//     // Definir data atual
//     const today = new Date().toISOString().split('T')[0];
//     document.getElementById('noteDate').value = today;

//     // Resetar upload
//     resetFileSelection();

//     showScreen('uploadScreen');
// }

// function handleFileSelect(event) {
//     const file = event.target.files[0];

//     if (!file) return;

//     // Validar tipo de arquivo
//     const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
//     if (!validTypes.includes(file.type)) {
//         alert('Formato inválido! Aceitar JPG, PNG ou PDF.');
//         return;
//     }

//     uploadedFile = file;

//     // Mostrar preview
//     const reader = new FileReader();
//     reader.onload = function(e) {
//         document.getElementById('previewImage').src = e.target.result;
//         document.getElementById('previewSection').style.display = 'block';
//         document.querySelector('.drop-zone').style.display = 'none';
//     };
//     reader.readAsDataURL(file);
// }

// function resetFileSelection() {
//     uploadedFile = null;
//     document.getElementById('fileInput').value = '';
//     document.getElementById('previewSection').style.display = 'none';
//     document.querySelector('.drop-zone').style.display = 'block';
// }

// function handleTranscribe() {
//     const material = document.getElementById('noteMaterial').value;
//     const date = document.getElementById('noteDate').value;
//     const title = document.getElementById('noteTitle').value;

//     if (!material) {
//         alert('Por favor, selecione uma matéria!');
//         return;
//     }

//     if (!uploadedFile) {
//         alert('Por favor, selecione uma imagem!');
//         return;
//     }

//     // Simular processamento com loader
//     showLoadingState();

//     // Simular delay de IA (1-2 segundos)
//     setTimeout(() => {
//         hideLoadingState();

//         // Criar nota dummy
//         currentNote = {
//             id: Math.random(),
//             title: title || `Anotação - ${date}`,
//             material: material,
//             date: date,
//             image: document.getElementById('previewImage').src,
//             content: '<h3>Conceito de Derivada</h3><p>A derivada de uma função f(x) em um ponto x₀ é definida como o limite:</p><p style="text-align: center; font-family: \'Courier New\', monospace;">f\'(x₀) = lim(h→0) [f(x₀+h) - f(x₀)] / h</p><h3>Propriedades das Derivadas</h3><ul><li><strong>Regra da Potência:</strong> d/dx(xⁿ) = n·xⁿ⁻¹</li><li><strong>Regra do Produto:</strong> (f·g)\' = f\'·g + f·g\'</li><li><strong>Regra da Cadeia:</strong> (f∘g)\' = f\'(g)·g\'</li></ul>',
//             createdAt: new Date()
//         };

//         // Ir para tela de visualização
//         showNote();
//     }, 2000);
// }

function showLoadingState() {
    // Mostrar loader (simples)
    alert('🔄 Processando imagem com IA...\nIsso pode levar alguns segundos.');
}

function hideLoadingState() {
    // Hide loading (simples)
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

// function goToNote() {
//     showNote();
// }

// function handleDeleteNote() {
//     if (confirm('Tem certeza que deseja excluir esta anotação?')) {
//         currentNote = null;
//         alert('Anotação excluída com sucesso!');
//         goToDashboard();
//     }
// }

// ==================== QUESTÕES DE REVISÃO ====================
// function goToQuestions() {
//     if (!currentNote) {
//         alert('Nenhuma anotação selecionada!');
//         return;
//     }

//     // Atualizar título das questões
//     document.getElementById('questionsTitle').textContent = `Questões sobre ${currentNote.material}`;

//     showScreen('questionsScreen');
// }

// function answerQuestion(questionNumber, answer) {
//     console.log(`Questão ${questionNumber} respondida com: ${answer}`);
//     // Atualizar progresso (simples)
//     updateProgressBar();
// }

function updateProgressBar() {
    // Contar respostas selecionadas
    const radios = document.querySelectorAll('.questions-list input[type="radio"]:checked');
    const total = document.querySelectorAll('.questions-list .question-card').length;
    const progress = (radios.length / total) * 100;

    document.getElementById('progressFill').style.width = progress + '%';
}

// function submitAnswers() {
//     const radios = document.querySelectorAll('.questions-list input[type="radio"]:checked');
//     const total = document.querySelectorAll('.questions-list .question-card').length;

//     if (radios.length < total) {
//         alert(`Por favor, responda todas as ${total} questões antes de finalizar!`);
//         return;
//     }

//     alert('Revisão finalizada! (Validação real será na Parte 2)');
//     goToNote();
// }

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
