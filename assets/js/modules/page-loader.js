/* ==================== CARREGADOR DE PÁGINAS DINÂMICO ==================== */

/**
 * Sistema de carregamento dinâmico de páginas HTML
 * Carrega os arquivos de páginas/tela.html sob demanda
 */
class PageLoader {
    constructor(containerId = 'app-container') {
        this.container = document.getElementById(containerId);
        this.currentPage = null;
        this.loadedPages = {}; // Cache de páginas já carregadas
    }

    /**
     * Carrega e renderiza uma página
     * @param {string} pageName - Nome da página (ex: 'login', 'dashboard')
     */
    async loadPage(pageName) {
        try {
            // Se já foi carregada, usar cache
            if (this.loadedPages[pageName]) {
                this.renderPage(pageName, this.loadedPages[pageName]);
                return;
            }

            const response = await fetch(`pages/${pageName}.html`);
            if (!response.ok) {
                throw new Error(`Erro ao carregar página: ${pageName}`);
            }

            const html = await response.text();
            this.loadedPages[pageName] = html;
            this.renderPage(pageName, html);
        } catch (error) {
            console.error(`Erro ao carregar ${pageName}:`, error);
            this.container.innerHTML = `<p>Erro ao carregar página: ${pageName}</p>`;
        }
    }

    /**
     * Renderiza a página no container
     */
    renderPage(pageName, html) {
        // Limpar telas anteriores
        const oldScreens = this.container.querySelectorAll('.screen');
        oldScreens.forEach(screen => screen.classList.remove('active'));

        // Verificar se a página já existe no DOM
        let existingPage = document.getElementById(`${pageName}Screen`);
        
        if (!existingPage) {
            // Criar container wrapper para a página
            const wrapper = document.createElement('div');
            wrapper.innerHTML = html;
            this.container.appendChild(wrapper);
        }

        // Ativar a tela
        const screen = document.getElementById(`${pageName}Screen`);
        if (screen) {
            screen.classList.add('active');
            this.currentPage = pageName;
            window.scrollTo(0, 0);
        }
    }

    /**
     * Carrega todas as páginas no background (pré-carregamento)
     */
    async preloadAllPages() {
        const pages = ['login', 'dashboard', 'upload', 'note', 'questions'];
        for (const page of pages) {
            try {
                const response = await fetch(`pages/${page}.html`);
                if (response.ok) {
                    const html = await response.text();
                    this.loadedPages[page] = html;
                }
            } catch (error) {
                console.warn(`Não foi possível pré-carregar ${page}`);
            }
        }
    }

    /**
     * Obtém a página atualmente carregada
     */
    getCurrentPage() {
        return this.currentPage;
    }
}

// Instância global do carregador
let pageLoader;

/**
 * Inicializa o carregador de páginas quando o DOM estiver pronto
 */
document.addEventListener('DOMContentLoaded', function() {
    pageLoader = new PageLoader('app-container');
    
    // Pré-carregar todas as páginas silenciosamente
    pageLoader.preloadAllPages();
    
    // Carregar página de login por padrão
    pageLoader.loadPage('login');
});
