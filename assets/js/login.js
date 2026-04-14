function switchTab(tabName) {
    // Alternar entre abas de login e cadastro
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

function handleLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (!email || !password) {
        alert('Por favor, preencha todos os campos!');
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
    // showScreen('dashboardScreen');
    // updateDashboard();
    window.location.href = "../html/notebook.html";
}

function handleSignup() {
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const confirm = document.getElementById('signupConfirm').value.trim();

    if (!name || !email || !password || !confirm) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    if (password !== confirm) {
        alert('As senhas não coincidem!');
        return;
    }

    if (password.length < 6) {
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