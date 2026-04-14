/* ==================== GERENCIADOR DE NAVEGAÇÃO (ROUTER) ==================== */

/**
 * Sistema de roteamento principal para gerenciar navegação entre telas
 * Usa o PageLoader para carregar páginas dinamicamente
 */
class Router {
    constructor() {
        this.currentScreen = 'login';
        this.pageLoader = null;
    }

    /**
     * Define o carregador de páginas (deve ser chamado após PageLoader ser inicializado)
     */
    setPageLoader(loader) {
        this.pageLoader = loader;
    }

    /**
     * Mostra a tela solicitada
     * @param {string} screenId - ID da tela (ex: 'loginScreen', 'dashboardScreen')
     */
    showScreen(screenId) {
        // Extrair o nome da página do ID
        const pageName = screenId.replace('Screen', '');
        
        if (this.pageLoader) {
            this.pageLoader.loadPage(pageName);
            this.currentScreen = pageName;
        }
    }

    /**
     * Obtém a tela atualmente ativa
     */
    getCurrentScreen() {
        return this.currentScreen;
    }

    /**
     * Navega para o dashboard
     */
    toDashboard() {
        this.pageLoader?.loadPage('dashboard');
        this.currentScreen = 'dashboard';
    }

    /**
     * Navega para upload
     */
    toUpload() {
        this.pageLoader?.loadPage('upload');
        this.currentScreen = 'upload';
    }

    /**
     * Navega para visualização de nota
     */
    toNote() {
        this.pageLoader?.loadPage('note');
        this.currentScreen = 'note';
    }

    /**
     * Navega para questões
     */
    toQuestions() {
        this.pageLoader?.loadPage('questions');
        this.currentScreen = 'questions';
    }

    /**
     * Navega para login
     */
    toLogin() {
        this.pageLoader?.loadPage('login');
        this.currentScreen = 'login';
    }
}

// Instância global do router
const router = new Router();

// ==================== FUNÇÕES GLOBAIS DE NAVEGAÇÃO ====================
function showScreen(screenId) {
    router.showScreen(screenId);
}

function goToDashboard() {
    router.toDashboard();
}

function goToUpload() {
    router.toUpload();
}

function goToNote() {
    router.toNote();
}

function goToQuestions() {
    router.toQuestions();
}

function goToLogin() {
    router.toLogin();
}
