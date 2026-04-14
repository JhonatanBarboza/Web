# 🔧 Documentação Técnica - Caderno+

## 📂 Estrutura de Arquivos

```
web/
├── index.html           # Todas as 5 telas HTML
├── Readme.md           # Documentação principal do projeto
├── INSTRUÇÕES.md       # Guia de teste detalhado
├── TÉCNICO.md         # Este arquivo
└── assets/
    ├── css/
    │   └── style.css   # Estilos CSS (1000+ linhas)
    └── js/
        └── script.js   # Lógica JavaScript (400+ linhas)
```

---

## 🎯 Estrutura HTML

### Telas (Divs com class "screen")

```html
<div id="loginScreen" class="screen active">...</div>
<div id="dashboardScreen" class="screen">...</div>
<div id="uploadScreen" class="screen">...</div>
<div id="noteScreen" class="screen">...</div>
<div id="questionsScreen" class="screen">...</div>
```

### Navegação Entre Telas

- Função: `showScreen(screenId)`
- Exemplo: `showScreen('dashboardScreen')`
- Efeito: Fade in com scroll automático

### Elementos Principais

| Tela | Elementos Principais |
|------|----------------------|
| Login | Form, Tabs, Input, Button |
| Dashboard | Grid, Cards, Header, Links |
| Upload | DropZone, FileInput, Form, Preview |
| Note | Image, Content, Buttons, Badge |
| Questions | Progress, Cards, RadioButtons, Counter |

---

## 🎨 CSS - Estrutura

### Organização
```css
/* Reset e Variáveis Globais */
/* Utilitários */
/* Botões */
/* Formulários */
/* Login Screen */
/* Dashboard Screen */
/* Upload Screen */
/* Note Screen */
/* Questions Screen */
/* Modais */
/* Responsivo */
```

### Variáveis Principais

```css
--primary-color: #667eea
--secondary-color: #764ba2
--accent-color: #f093fb
--success-color: #38d9a9
--danger-color: #ff6b6b
--background: #f8f9fa
--surface: #ffffff
--text-primary: #2c3e50
--text-secondary: #7f8c8d
```

### Componentes CSS Reutilizáveis

- `.btn` - Classe base para botões
- `.form-group` - Grupo de formulário
- `.form-input`, `.form-select` - Inputs
- `.screen` - Container de tela
- `.card` - Cards genéricos

### Grid System

- Dashboard: `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))`
- Upload Form: `max-width: 600px` (centralizado)
- Note Content: `max-width: 800px` (centralizado)
- Questions: `max-width: 800px` (centralizado)

### Media Queries

```css
@media (max-width: 768px)   /* Tablet */
@media (max-width: 480px)   /* Mobile */
```

---

## 🔧 JavaScript - Estrutura

### Variáveis Globais

```javascript
let currentUser = null          // {id, name, email, createdAt}
let currentNote = null          // {id, title, material, date, image, content}
let currentMaterial = null      // String (nome da matéria)
let uploadedFile = null         // File object
```

### Funções Principais

#### Gerenciamento de Telas
```javascript
showScreen(screenId)            // Mostra tela e esconde outras
```

#### Autenticação
```javascript
switchTab(tabName)              // Login vs Cadastro
handleLogin()                   // Simula login
handleSignup()                  // Simula cadastro
handleLogout()                  // Logout com confirmação
updateDashboard()               // Atualiza nome do usuário
```

#### Upload
```javascript
handleFileSelect(event)         // Processa arquivo selecionado
resetFileSelection()            // Limpa upload
handleTranscribe()              // Simula IA (2 segundos)
```

#### Notas
```javascript
showNote()                      // Mostra nota atual
goToNote()                      // Navega para nota
handleDeleteNote()              // Deleta com confirmação
```

#### Questões
```javascript
goToQuestions()                 // Vai para tela de questões
answerQuestion(num, answer)     // Registra resposta
updateProgressBar()             // Atualiza progresso visual
submitAnswers()                 // Valida e finaliza
```

#### Drag & Drop
```javascript
handleDragOver(event)
handleDragLeave(event)
handleDrop(event)               // Processa arquivo arrastado
```

### Padrões Implementados

**MVC Simples:**
- Model: `currentUser`, `currentNote` (estado global)
- View: HTML com classes dinâmicas
- Controller: Funções de evento (onclick)

**State Management:**
- Estado global mínimo apenas
- Dados dummy nunca são persistidos

**Event Handling:**
- `onclick` para eventos de botões
- Event listeners para drag & drop
- Enter key para submissão de formulários

---

## 🎨 Design System

### Cores por Matéria

| Matéria | Cor | Gradient |
|---------|-----|----------|
| Matemática | #667eea | #667eea → #764ba2 |
| Física | #f5576c | #f093fb → #f5576c |
| Química | #00f2fe | #4facfe → #00f2fe |
| Biologia | #38f9d7 | #43e97b → #38f9d7 |

### Tipografia

```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Espaçamento

- Padding base: 1rem (16px)
- Margin base: 1rem (16px)
- Gap em grids: 1.5rem

### Sombras

```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08)
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12)
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.16)
```

### Transições

```css
transition: all 0.3s ease;
```

---

## 📱 Responsividade

### Breakpoints

1. **Desktop** (> 1024px)
   - Grid 4 colunas no dashboard
   - Layouts full-width
   - Modais centralizadas

2. **Tablet** (768px - 1024px)
   - Grid 2-3 colunas
   - Padding reduzido
   - Ajustes de fonte

3. **Mobile** (< 768px)
   - Grid 1-2 colunas
   - Botões maiores para touch
   - Padding ajustado
   - Fonte menor

4. **Pequenos Celulares** (< 480px)
   - Stack vertical
   - Mínimo padding
   - Full-width buttons

---

## 🔄 Fluxo de Navegação

```
Login/Cadastro
    ↓
Dashboard (após login)
    ├→ + Nova Anotação → Upload
    │       ↓
    │   Transcrever
    │       ↓
    │   Visualização da Nota
    │       ├→ Gerar Questões → Questões → Finalizar → Volta
    │       ├→ Editar → (Alerta)
    │       └→ Deletar → Confirma → Volta ao Dashboard
    │
    ├→ + Nova Matéria → (Alerta)
    │
    ├→ Acessar Matéria → (Alerta)
    │
    └→ Sair → Confirma → Login
```

---

## 🎯 Funcionalidades Simuladas (Dummy)

| Funcionalidade | Status | Parte |
|---|---|---|
| Login/Cadastro | ✅ Simulado | 1 |
| Navegação | ✅ Funcional | 1 |
| Upload | ✅ Funcional | 1 |
| Preview | ✅ Funcional | 1 |
| Transcrição IA | ⏳ Simulada (2s) | 2 |
| Salvar nota | ❌ Não persiste | 2 |
| Gerar questões | ⏳ Dados dummy | 2 |
| Editar nota | ⏳ Não funciona | 2 |
| Exportar | ❌ Não implementado | 2 |

---

## ⚙️ Configuração e Deploy

### Desenvolvimento Local

**Opção 1: Abrir direto**
```bash
open index.html
```

**Opção 2: VSCode Live Server**
- Extensão: "Live Server" by Ritwick Dey
- Clique: "Go Live" (canto inferior direito)

**Opção 3: Python**
```bash
python -m http.server 8000
# Acesse: http://localhost:8000
```

**Opção 4: Node.js**
```bash
npx http-server
# Acesse: http://localhost:8080
```

### Produção

**Considerations:**
- [ ] Minificar CSS e JS
- [ ] Implementar CSP headers
- [ ] HTTPS obrigatório
- [ ] Cache headers
- [ ] Lazy loading de imagens
- [ ] Service workers
- [ ] Compressão Gzip

---

## 🔒 Segurança (Considerações)

### Atual (Parte 1)
- Tudo em memória (não persiste)
- Validação apenas client-side
- Sem dados sensíveis

### Parte 2
- [ ] Validação server-side
- [ ] Hash de senhas
- [ ] JWT com expiração
- [ ] CSRF protection
- [ ] Sanitizar uploads
- [ ] Rate limiting
- [ ] CORS configurado

---

## 📊 Performance

### Bundle Size
- CSS: ~15KB (com comments)
- JS: ~12KB (com comments)
- HTML: ~35KB
- **Total: ~62KB** (sem compressão)

### Otimizações Futuras
- CSS modular (BEM naming)
- JS tree-shaking
- Code splitting
- Image optimization
- Lighthouse audit

---

## 🧪 Testes (Manual)

### Checklist QA

**Funcionalidade:**
- [ ] Login/Cadastro validam
- [ ] Navegação sem erros
- [ ] Upload aceita arquivos
- [ ] Preview mostra imagem
- [ ] Questões contabilizam
- [ ] Logout funciona

**Design:**
- [ ] Mobile responsivo
- [ ] Cores corretas
- [ ] Fontes legíveis
- [ ] Spacing consistente
- [ ] Hover effects

**UX:**
- [ ] Feedback claro
- [ ] Confirmações importantes
- [ ] Sem erros JS console
- [ ] Atalhos funcionam

---

## 📚 Referências de Código

### Adicionar Nova Tela

1. No HTML:
```html
<div id="newScreen" class="screen">
    <h1>Conteúdo</h1>
</div>
```

2. No CSS:
```css
#newScreen {
    /* estilos */
}
```

3. No JS:
```javascript
function goToNewScreen() {
    showScreen('newScreen');
}
```

### Adicionar Novo Botão

```html
<button class="btn btn-primary" onclick="handleClick()">Texto</button>
```

### Adicionar Formulário

```html
<div class="form-group">
    <label for="field">Label</label>
    <input type="text" id="field" class="form-input" placeholder="...">
</div>
```

---

## 🎓 Próximos Passos (Parte 2)

1. **Backend Setup**
   - [ ] Node.js + Express
   - [ ] PostgreSQL/MongoDB
   - [ ] JWT Authentication

2. **API Endpoints**
   - [ ] POST /api/auth/login
   - [ ] POST /api/auth/register
   - [ ] GET /api/notes
   - [ ] POST /api/notes
   - [ ] PUT /api/notes/:id
   - [ ] DELETE /api/notes/:id

3. **Integração**
   - [ ] Fetch API calls
   - [ ] Error handling
   - [ ] Loading states
   - [ ] Session management

4. **Features**
   - [ ] OCR via IA
   - [ ] Gerador de questões
   - [ ] Resumos automáticos
   - [ ] Explicações

---

## 📖 Glossário

| Termo | Definição |
|-------|-----------|
| **SPA** | Single Page Application (uma página) |
| **Dummy** | Dados simulados para demonstração |
| **Responsive** | Adapta-se a diferentes telas |
| **Gradient** | Transição de cores |
| **Drag & Drop** | Arrastar e soltar |
| **OCR** | Reconhecimento óptico de caracteres |
| **LLM** | Large Language Model (IA) |
| **JWT** | JSON Web Token (autenticação) |
| **CRUD** | Create, Read, Update, Delete |

---

**Versão**: 1.0  
**Última atualização**: 14 de abril de 2025  
**Status**: ✅ Front-end Completo
