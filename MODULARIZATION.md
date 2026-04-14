# 📦 Documentação da Estrutura Modularizada

## Visão Geral

O projeto **Caderno+** foi refatorado de um arquivo monolítico para uma arquitetura modularizada, melhorando a organização, manutenção e escalabilidade.

---

## 📁 Estrutura de Pastas

```
Web/
├── index.html                          # Arquivo principal (ponto de entrada)
├── Readme.md                           # Documentação do projeto
├── MODULARIZATION.md                   # Este arquivo
│
├── pages/                              # 📄 HTML modularizado por tela
│   ├── login.html                      # Tela de Login/Cadastro
│   ├── dashboard.html                  # Dashboard de Materiais
│   ├── upload.html                     # Upload de Nova Anotação
│   ├── note.html                       # Visualização de Anotação
│   └── questions.html                  # Questões de Revisão
│
└── assets/
    ├── css/
    │   ├── modules/                    # 🎨 CSS separado por módulo
    │   │   ├── common.css              # Estilos globais (reset, variáveis)
    │   │   ├── buttons.css             # Estilos de botões
    │   │   ├── login.css               # Estilos da tela de login
    │   │   ├── dashboard.css           # Estilos do dashboard
    │   │   ├── upload.css              # Estilos de upload
    │   │   ├── note.css                # Estilos de visualização de nota
    │   │   └── questions.css           # Estilos de questões
    │   └── style.css                   # (Arquivo antigo - pode ser removido)
    │
    └── js/
        ├── modules/                    # 🚀 JavaScript separado por funcionalidade
        │   ├── utils.js                #  Funções utilitárias globais
        │   ├── router.js               # Sistema de roteamento/navegação
        │   ├── auth.js                 # Gerenciamento de autenticação
        │   ├── dashboard.js            # Lógica do dashboard
        │   ├── upload.js               # Lógica de upload e drag-drop
        │   ├── note.js                 # Lógica de visualização de nota
        │   └── questions.js            # Lógica de questões de revisão
        └── script.js                   # (Arquivo antigo - pode ser removido)
```

---

## 🎯 Módulos JavaScript

### 1. **utils.js** - Utilitários Globais
Funções de propósito geral usadas em toda a aplicação:
- `formatDate()` - Formata datas para pt-BR
- `validateEmail()` - Valida e-mails
- `validatePassword()` - Valida força de senha
- `showNotification()` - Mostra notificações
- `clearAllForms()` - Limpa todos os formulários

### 2. **router.js** - Sistema de Roteamento
Gerencia a navegação entre telas:
- Classe `Router` - Controlador centralizado de telas
- `showScreen()` - Mostra uma tela específica
- `toDashboard()` - Navega para dashboard
- `toUpload()` - Navega para upload
- `toNote()` - Navega para visualização de nota
- `toQuestions()` - Navega para questões

### 3. **auth.js** - Autenticação
Gerencia login, cadastro e autenticação:
- `switchTab()` - Alterna entre abas de login/cadastro
- `handleLogin()` - Processa login
- `handleSignup()` - Processa cadastro
- `handleLogout()` - Realiza logout
- `getCurrentUser()` - Obtém usuário atual
- `isUserLoggedIn()` - Verifica se há usuário autenticado

### 4. **dashboard.js** - Dashboard
Lógica da tela de dashboard:
- `updateDashboard()` - Atualiza informações do dashboard
- `viewMaterial()` - Abre uma matéria específica
- `showAddMaterialModal()` - Mostra modal para adicionar matéria
- `getCurrentMaterial()` - Obtém matéria selecionada

### 5. **upload.js** - Upload e Drag-Drop
Gerencia upload de arquivos e transcrição:
- `handleFileSelect()` - Processa seleção de arquivo
- `resetFileSelection()` - Reseta seleção
- `handleTranscribe()` - Processa transcrição com IA
- `initializeDragAndDrop()` - Inicializa drag-drop
- Funções de drag-drop (`handleDragOver()`, `handleDragLeave()`, `handleDrop()`)

### 6. **note.js** - Visualização de Anotação
Gerencia visualização e edição de anotações:
- `showNote()` - Mostra anotação atual
- `handleDeleteNote()` - Deleta anotação
- `getCurrentNote()` - Obtém anotação atual
- `setCurrentNote()` - Define anotação atual

### 7. **questions.js** - Questões de Revisão
Gerencia questões e progresso:
- `goToQuestions()` - Navega para questões
- `answerQuestion()` - Registra resposta
- `updateProgressBar()` - Atualiza barra de progresso
- `submitAnswers()` - Finaliza revisão

---

## 🎨 Módulos CSS

### 1. **common.css** - Estilos Globais
- Reset CSS (`*`, `html`, `body`)
- Variáveis CSS (cores, sombras, etc)
- Classes utilitárias (`.screen`, `.form-group`)
- Animações globais (`@keyframes fadeIn`)

### 2. **buttons.css** - Estilos de Botões
- Estilos base para `.btn`
- Variações: `.btn-primary`, `.btn-secondary`, `.btn-logout`, `.btn-small`, etc
- Estados de hover

### 3. **login.css** - Tela de Login
- Container de login com layout centralizado
- Estilos de formulários
- Abas de login/cadastro
- Animações de transição

### 4. **dashboard.css** - Tela de Dashboard
- Header do dashboard
- Grid de cards de matérias
- Estilos responsivos para diferentes telas

### 5. **upload.css** - Tela de Upload
- Estilos de drop-zone
- Preview de imagem
- Formulário de informações
- Responsividade

### 6. **note.css** - Visualização de Nota
- Header com ações
- Seção de título e badge
- Visualização de imagem
- Conteúdo transcrito
- Ações de botões

### 7. **questions.css** - Questões
- Barra de progresso
- Cards de questões
- Opções de resposta com estados
- Responsividade

---

## 📄 Estrutura do index.html

O `index.html` agora:
1. ✅ Carrega todos os CSS modularizados
2. ✅ Contém o HTML de todas as 5 telas
3. ✅ Carrega todos os JS modularizados em ordem
4. ✅ Inicializa a aplicação com listeners

**Ordem de carregamento de scripts:**
1. `utils.js` - Funções globais
2. `router.js` - Sistema de navegação
3. `auth.js` - Autenticação
4. `dashboard.js` - Dashboard
5. `upload.js` - Upload
6. `note.js` - Nota
7. `questions.js` - Questões

---

## 🔄 Fluxo de Navegação

```
Login/Cadastro
    ↓
Dashboard (Materiais)
    ├→ Visualizar Material
    ├→ Adicionar Matéria
    └→ Nova Anotação
        ↓
    Upload (Selecionar arquivo + transcrever)
        ↓
    Visualização de Nota
        ├→ Gerar Questões
        ├→ Ver Resumo
        └→ Explicação
            ↓
        Questões de Revisão
            ↓ (Finalizar)
        Volta para Nota
            ↓ (Voltar)
        Volta para Dashboard
            ↓ (Sair)
        Volta para Login
```

---

## ✨ Benefícios da Modularização

### 1. **Manutenção Melhorada**
- Cada módulo tem uma responsabilidade única
- Mais fácil encontrar e corrigir bugs
- Código mais legível e organizado

### 2. **Reutilização de Código**
- Funções utilitárias compartilhadas (`utils.js`)
- Router centralizado (`router.js`)
- Menos duplicação de código

### 3. **Escalabilidade**
- Fácil adicionar novas telas
- Fácil adicionar novos estilos CSS
- Arquitetura preparada para crescimento

### 4. **Separação de Responsabilidades**
- **HTML**: Estrutura em `pages/` + `index.html`
- **CSS**: Estilos modularizados em `assets/css/modules/`
- **JS**: Lógica separada por funcionalidade em `assets/js/modules/`

### 5. **Melhor Performance** (potencial futuro)
- Possibilidade de carregamento lazy de módulos
- Minificação seletiva por módulo
- Build process otimizado

---

## 🚀 Como Adicionar Novas Funcionalidades

### Adicionar Nova Tela

1. Criar HTML: `pages/nova-tela.html`
2. Criar CSS: `assets/css/modules/nova-tela.css`
3. Criar JS: `assets/js/modules/nova_tela.js`
4. Carregar no `index.html`:
   ```html
   <link rel="stylesheet" href="assets/css/modules/nova-tela.css">
   <script src="assets/js/modules/nova_tela.js"></script>
   ```

### Adicionar Nova Função Utilitária

1. Adicionar função em `assets/js/modules/utils.js`
2. Usar em qualquer módulo JS

### Adicionar Novas Rotas

1. Adicionar método na classe `Router` em `router.js`
2. Usar em qualquer módulo

---

## 📝 Checklist de Limpeza

Os seguintes arquivos antigos podem ser removidos:

- [ ] `assets/css/style.css` (substituído por módulos em `assets/css/modules/`)
- [ ] `assets/js/script.js` (substituído por módulos em `assets/js/modules/`)

---

## 🔗 Próximas Melhorias Sugeridas

1. **Sistema de Build** - Usar webpack/vite para minificação
2. **Lazy Loading** - Carregar módulos JS apenas quando necessário
3. **Service Workers** - Cache offline das páginas
4. **TypeScript** - Adicionar tipagem estática
5. **Testes Unitários** - Testar cada módulo isoladamente
6. **Estado Global** - Usar localStorage para persistência de dados

---

**Data de Modularização:** 14 de abril de 2026  
**Versão:** 2.0 (Modularizada)
