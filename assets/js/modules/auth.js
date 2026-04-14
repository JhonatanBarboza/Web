/* ==================== GERENCIAMENTO DE AUTENTICAÇÃO ==================== */

let currentUser = null;

/**
 * Alterna entre abas de login e cadastro
 */
function switchTab(tabName) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => btn.classList.remove('active'));
    
    if (tabName === 'login') {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        tabBtns[0].classList.add('active');
    } else {
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
        tabBtns[1].classList.add('active');
    }
}

/**
 * Valida e processa login
 */
function handleLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    // Validações
    if (!email || !password) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, digite um email válido!');
        return;
    }

    // Simular login (dados dummy)
    currentUser = {
        id: 1,
        name: 'Ana',
        email: email,
        createdAt: new Date()
    };

    // Limpar formulário
    document.getElementById('loginForm').reset();

    // Ir para dashboard
    router.toDashboard();
    updateDashboard();
}

/**
 * Valida e processa cadastro
 */
function handleSignup() {
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const confirm = document.getElementById('signupConfirm').value.trim();

    // Validações
    if (!name || !email || !password || !confirm) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, digite um email válido!');
        return;
    }

    if (password !== confirm) {
        alert('As senhas não coincidem!');
        return;
    }

    if (!validatePassword(password)) {
        alert('A senha deve ter no mínimo 6 caracteres!');
        return;
    }

    // Simular cadastro
    currentUser = {
        id: Math.random(),
        name: name,
        email: email,
        createdAt: new Date()
    };

    // Limpar formulário
    document.getElementById('signupForm').reset();

    // Voltar para aba de login
    switchTab('login');
    alert('Conta criada com sucesso! Você já pode fazer login.');
}

/**
 * Realiza logout
 */
function handleLogout() {
    if (confirm('Tem certeza que deseja sair?')) {
        currentUser = null;
        
        // Limpar estado global
        clearAllForms();

        // Voltar para login
        router.toLogin();
        switchTab('login');
        
        showNotification('Você saiu da sua conta', 'info');
    }
}

/**
 * Obtém o usuário atual
 */
function getCurrentUser() {
    return currentUser;
}

/**
 * Verifica se há usuário autenticado
 */
function isUserLoggedIn() {
    return currentUser !== null;
}
