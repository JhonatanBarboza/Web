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

    const formLogin = document.getElementById('loginForm');
    const errorText = document.createElement('p');
    errorText.style.color = 'red';
    errorText.style.marginTop = '10px';
    errorText.style.marginBottom = '10px';


    if (!email || !password) {
        errorText.textContent = 'Por favor, preencha todos os campos!';
        if(!formLogin.querySelector('p')){
        formLogin.insertBefore(errorText, formLogin.lastElementChild);
        }
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

    const formSingUp = document.getElementById('signupForm');
    const errorText = document.createElement('p');
    errorText.style.color = 'red';
    errorText.style.marginTop = '10px';
    errorText.style.marginBottom = '10px';

    if (!name || !email || !password || !confirm) {
        errorText.textContent = 'Por favor, preencha todos os campos!';
        if(formSingUp.querySelector('p')){
            formSingUp.querySelector('p').remove();
        }
        formSingUp.insertBefore(errorText, formSingUp.lastElementChild);
        return;
    }

    if (password !== confirm) {
        errorText.textContent = 'As senhas não coincidem!';
        if(formSingUp.querySelector('p')){
            formSingUp.querySelector('p').remove();
        }
        formSingUp.insertBefore(errorText, formSingUp.lastElementChild);
        return;
    }

    if (password.length < 6) {
        errorText.textContent = 'A senha deve ter no mínimo 6 caracteres!';
        if(formSingUp.querySelector('p')){
            formSingUp.querySelector('p').remove();
        }
        formSingUp.insertBefore(errorText, formSingUp.lastElementChild);
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

    successText = document.createElement('p');
    successText.style.color = 'green';
    successText.style.marginTop = '10px';
    successText.style.marginBottom = '10px';
    successText.textContent = 'Conta criada com sucesso! Você já pode fazer login.';
    if(formSingUp.querySelector('p')){
        formSingUp.querySelector('p').remove();
    }
    formSingUp.insertBefore(successText, formSingUp.lastElementChild);
}