# 🎯 Guia de Teste - Caderno+

## ⚡ Início Rápido

### 1. Abrir o projeto
- Abra o arquivo `index.html` em um navegador moderno
- Ou use um live server (VSCode, Python, Node)

### 2. Dados de Teste (Dummy)

**Login:**
- Email: `qualquer@email.com`
- Senha: `qualquer coisa com 6+ caracteres`

**Cadastro:**
- Nome: `Ana`
- Email: `ana@email.com`
- Senha: `123456`
- Confirmar: `123456`

---

## 🧪 Testando Cada Tela

### Tela 1: Login / Cadastro ✅

**Abas disponíveis:**
- [x] **Entrar** - Formulário de login
- [x] **Cadastrar** - Formulário de cadastro

**Para testar:**
1. Digite um email válido
2. Digite uma senha (mín. 6 caracteres no cadastro)
3. Clique em "Entrar" ou "Criar Conta"
4. ✅ Será levado ao Dashboard

**Validações:**
- ✅ Campos obrigatórios
- ✅ Senhas diferentes (cadastro)
- ✅ Senha mínimo 6 caracteres (cadastro)

---

### Tela 2: Dashboard ✅

**Elementos:**
- [x] Saudação com nome do usuário
- [x] 4 cards de materiais (Matemática, Física, Química, Biologia)
- [x] Card "+ Nova Matéria"
- [x] Botão "+ Nova Anotação" (top right)
- [x] Botão "Sair"

**Para testar:**
1. ✅ Clique em "Acessar" em qualquer matéria → Alerta de informação
2. ✅ Clique em "+ Nova Anotação" → Vai para Tela de Upload
3. ✅ Clique em "+ Nova Matéria" → Solicita nome da nova matéria
4. ✅ Clique em "Sair" → Volta ao Login com confirmação

**Design:**
- ✨ Cards coloridos com gradientes
- 📱 Grid responsivo
- 🎨 Hover effects nos cards

---

### Tela 3: Upload e Nova Anotação ✅

**Elementos:**
- [x] Drop zone (arrastar arquivo ou clicar)
- [x] Preview de imagem
- [x] Seletor de matéria (Matemática, Física, Química, Biologia)
- [x] Date picker (data preenchida com hoje)
- [x] Campo de título (opcional)
- [x] Botão "Transcrever com IA"

**Para testar:**

**Método 1: Clique**
1. Clique na drop zone
2. Selecione uma imagem (JPG, PNG) ou PDF
3. ✅ Imagen aparecerá em preview
4. Selecione uma matéria
5. (Título é opcional)
6. Clique "Transcrever com IA"
7. ⏳ Loader por 2 segundos
8. ✅ Vai para Tela de Visualização

**Método 2: Drag & Drop**
1. Arraste uma imagem para a drop zone
2. ✅ Preview automático
3. Continue como (Método 1)

**Validações:**
- ✅ Arquivo obrigatório
- ✅ Matéria obrigatória
- ✅ Apenas JPG, PNG, PDF
- ✅ Data preenchida automaticamente

---

### Tela 4: Visualização da Anotação ✅

**Elementos:**
- [x] Título da anotação
- [x] Badge de matéria (colorida)
- [x] Imagem original
- [x] Conteúdo transcrito (dummy sobre Derivadas)
- [x] Botão Editar
- [x] Botão Deletar
- [x] Botões: "Gerar Questões", "Ver Resumo", "Explicação"

**Para testar:**
1. ✅ Veja o título, imagem e conteúdo
2. ✅ Clique "Gerar Questões" → Vai para Tela de Questões
3. ✅ Clique "Ver Resumo" → Alerta (Funcionalidade Parte 2)
4. ✅ Clique "Explicação" → Alerta (Funcionalidade Parte 2)
5. ✅ Clique no ícone de Editar → Alerta (Funcionalidade Parte 2)
6. ✅ Clique no ícone de Deletar → Confirmação, volta ao Dashboard

**Design:**
- 🎨 Badge colorido por matéria
- 📸 Imagem responsiva
- ⚡ Hover effects nos botões

---

### Tela 5: Questões de Revisão ✅

**Elementos:**
- [x] Título do tópico (ex: "Questões sobre Derivadas")
- [x] Barra de progresso
- [x] Contador (X de 5 corretas)
- [x] 5 cards de questões:
  - Q1 e Q2: Pré-respondidas (2 corretas)
  - Q3, Q4, Q5: Não respondidas
- [x] Botão "Finalizar Revisão"

**Para testar:**
1. ✅ Veja Q1 e Q2 marcadas como "✓ Correto" (verde)
2. ✅ Responda Q3, Q4, Q5
3. ⏳ Progresso atualiza conforme responde
4. ✅ Clique "Finalizar Revisão"
5. ✅ Alerta de conclusão
6. ✅ Volta para Tela de Anotação

**Interatividade:**
- 📊 Progresso visual em tempo real
- ✅ Validação (todas as questões obrigatórias)
- 🎓 Cards com estados visual diferente

**Design:**
- 🎨 Questões corretas em verde
- 📱 Cards responsivos
- ⚡ Animações suaves

---

## 🔄 Fluxo Completo Recomendado

Para testar tudo em sequência:

1. **Login** → Digite email/senha → "Entrar"
2. **Dashboard** → Clique "+ Nova Anotação"
3. **Upload** → Selecione arquivo → Selecione matéria → "Transcrever"
4. **Visualização** → Clique "Gerar Questões"
5. **Questões** → Responda 3 questões → "Finalizar"
6. **Voltar à Visualização** → "Voltar"
7. **Dashboard** → Clique "Sair" → Confirmar logout

---

## 🎨 Testar Responsividade

**Desktop** (> 1024px)
- Abra em monitores grandes
- Grid em 4 colunas no dashboard

**Tablet** (768px - 1024px)
- Redimensione navegador
- Grid em 2-3 colunas no dashboard
- Menu comprimido

**Mobile** (< 768px)
- Redimensione para ~375px
- Grid em 1-2 colunas
- Botões maiores para touch

**Testar em DevTools:**
- F12 → Toggle device toolbar (Ctrl+Shift+M)
- Teste em iPhone, iPad, Samsung, etc.

---

## ⌨️ Atalhos de Teclado

- **Enter** em Login → Submete formulário
- **Enter** em Cadastro → Submete rformário
- **F12** → Abre DevTools
- **Ctrl+Shift+M** → Toggle responsive mode

---

## 🐛 Troubleshooting

### Problema: Página em branco
- ✅ Verifique se abriu `index.html`
- ✅ Limpe cache (Ctrl+Shift+Delete) e recarregue
- ✅ Abra DevTools (F12) e verifique erros

### Problema: Estilos não carregam
- ✅ Verifique se os arquivos CSS/JS estão em `assets/css/` e `assets/js/`
- ✅ Use server local (não abra direto do sistema de arquivos)

### Problema: Arquivo muito grande
- ✅ Tudo está em um único `index.html` (para simplicidade)
- ✅ A Parte 2 separará em componentes

### Problema: Questões não progridem
- ✅ Selecione as opções com clique no radio button
- ✅ Responda todas as 5 questões

---

## ✨ Destaques da Implementação

✅ **5 telas totalmente funcionais e interativas**
✅ **Navegação suave com transições**
✅ **Upload com drag & drop**
✅ **Validação de formulários**
✅ **Design responsivo mobile-first**
✅ **Paleta de cores profissional com gradientes**
✅ **Estados visuais (hover, active, feedback)**
✅ **Dados dummy estrategicamente posicionados**
✅ **Pronto para integração com back-end**

---

## 📝 Notas

- Todos os dados são **dummy/simulados** para demonstração
- A validação real será implementada na Parte 2
- Nenhum dado é persistido (página recarrega = dados são perdidos)
- O processamento de IA é simulado (2 segundos de delay)

---

## 🚀 Pronto para Apresentação!

Este projeto demonstra:
- Compreensão do cliente e problema
- Design UX/UI profissional
- Implementação robusta de front-end
- Preparação clara para back-end (Parte 2)

**Bom teste! 🎉**
