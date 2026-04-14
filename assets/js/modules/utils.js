/* ==================== UTILITÁRIOS GLOBAIS ==================== */

/**
 * Formata uma data para o formato brasileiro (dd/mm/aaaa)
 */
function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString('pt-BR', options);
}

/**
 * Retorna as iniciais de um nome
 */
function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

/**
 * Valida um email
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Valida força de senha
 */
function validatePassword(password) {
    return password && password.length >= 6;
}

/**
 * Mostra notificação (placeholder para melhorias futuras)
 */
function showNotification(message, type = 'info') {
    // Implementar sistema de notificações real
    console.log(`[${type.toUpperCase()}] ${message}`);
}

/**
 * Limpa todos os formulários da página
 */
function clearAllForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => form.reset());
}
