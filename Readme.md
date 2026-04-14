# 📓 Caderno+ - Caderno Digital Inteligente com IA

Bem-vindo à **Parte 1 (Front-end)** do projeto Caderno+! Este é um aplicativo web moderno para estudantes que fotografam lousa, organizarem e estudarem o conteúdo de forma inteligente.

---

## 👥 Cliente e Problema

### Persona Principal
**Ana, 20 anos, estudante de Engenharia**
- Fotografa a lousa em todas as aulas
- As imagens ficam espalhadas na galeria do celular
- Raramente retorna ao conteúdo para estudar

### Problemas Identificados
1. **Desorganizado** - Fotos misturadas sem matéria ou data
2. **Falta de revisão** - Conteúdo raramente revisitado
3. **Estudo passivo** - Sem ferramentas para fixar conteúdo
4. **Trabalho manual** - Reescrever é tedioso e inútil

---

## ✅ Requisitos Implementados (Parte 1)

### Interfaces HTML/CSS de 5 telas principais:

1. **Tela de Login/Cadastro**
   - Formulário de autenticação
   - Abas para login e cadastro
   - Validação básica de campos

2. **Dashboard de Materiais**
   - Grid de cadernos por matéria
   - Card '+ Nova Matéria'
   - Botão rápido '+ Nova Anotação'
   - Barra com nome do usuário e logout

3. **Tela de Upload e Nova Anotação**
   - Drop zone para upload de arquivos
   - Preview da imagem
   - Formulário: matéria, data, título
   - Botão 'Transcrever com IA' (simulado)

4. **Tela de Visualização da Anotação**
   - Título editável
   - Badge de matéria colorida
   - Imagem original
   - Conteúdo transcrito (dummy)
   - Botões: Editar, Gerar Questões, Excluir

5. **Tela de Questões de Revisão**
   - Título da sessão
   - Cards com questões de múltipla escolha
   - Progresso de respostas
   - Gabarito (dummy com 2 de 5 corretas)

---

## 🛠️ Tecnologias Utilizadas

### Parte 1 (Concluída)
- **HTML5** - Estrutura semântica
- **CSS3** - Design responsivo com gradientes e animações
- **JavaScript Vanilla** - Navegação entre telas (SPA)

### Design Principles
✨ Interface limpa e intuitiva
📱 Totalmente responsiva (mobile-first)
🎨 Paleta de cores com gradientes
⚡ Animações suaves e transições

---

## 📂 Estrutura do Projeto

```
├── index.html              # Todas as 5 telas em um arquivo
├── Readme.md              # Este arquivo
└── assets/
    ├── css/
    │   └── style.css      # CSS com design responsivo
    └── js/
        └── script.js      # Lógica de navegação e interação
```

---

## 🚀 Como Usar

1. **Abrir o projeto**
   ```bash
   # Simplesmente abra index.html em um navegador
   # Ou use um live server:
   # VSCode: Extensão Live Server
   # Python: python -m http.server 8000
   # Node: npx http-server
   ```

2. **Fluxo de Teste**
   - **Login**: Use qualquer email/senha (dados dummy)
   - **Dashboard**: Visualize os 4 cadernos de exemplo
   - **Upload**: Selecione uma imagem (drag & drop suportado)
   - **Transcrição**: Simula processamento de IA (2 segundos)
   - **Questões**: Complete o quiz de exemplo

---

## 🎯 Funcionalidades Implementadas

### ✅ Navegação
- [x] Telas com transição suave
- [x] Botões de navegação funcionais
- [x] Scroll automático ao trocar tela

### ✅ Formulários
- [x] Login e Cadastro com validação
- [x] Upload com drag & drop
- [x] Seleção de matéria e data
- [x] Preview de imagem

### ✅ Interatividade
- [x] Responder questões (sem validação real)
- [x] Progresso de acertos (visual)
- [x] Confirmação ao excluir
- [x] Logout com confirmação

### ✅ Design
- [x] Responsivo em todas as resoluções
- [x] Gradientes coloridos por matéria
- [x] Cards e componentes reutilizáveis
- [x] Acessibilidade básica

---

## 📋 Requisitos para Parte 2 (Back-end)

Funcionalidades planejadas para implementação futura:

1. **Autenticação de Usuários**
   - JWT ou sessões com cookies
   - Persistência de login

2. **CRUD de Anotações**
   - Criar, ler, atualizar, deletar
   - Banco de dados (PostgreSQL ou MongoDB)
   - Associar a matéria e data

3. **Upload de Imagens**
   - Multer ou equivalente
   - Armazenamento local ou S3

4. **Integração de IA**
   - OCR para transcrição
   - LLM para perguntas/resumos/explicações

5. **Dados Reais**
   - Substituir dados dummy por API
   - Dashboard com anotações reais

---

## 🎨 Paleta de Cores

| Matéria     | Gradiente                          |
|-------------|-----------------------------------|
| Matemática  | #667eea → #764ba2 (Roxo)          |
| Física      | #f093fb → #f5576c (Rosa/Vermelho) |
| Química     | #4facfe → #00f2fe (Azul/Ciano)   |
| Biologia    | #43e97b → #38f9d7 (Verde)        |

---

## 📱 Responsividade

- ✅ Desktop (> 1024px)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (< 768px)
- ✅ Pequenos celulares (< 480px)

---

## 🔮 Próximos Passos (Parte 2)

- [ ] Conectar ao servidor backend
- [ ] Implementar autenticação real
- [ ] Salvar anotações no banco de dados
- [ ] Integrar IA para OCR e geração de conteúdo
- [ ] Implementar edição de transcrição
- [ ] Adicionar funcionalidade de compartilhamento
- [ ] Ativar exportação em PDF
- [ ] Sistema de notificações

---

## 💡 Notas de Desenvolvimento

### Dados Dummy
Todos os dados mostrados na interface são exemplos. Na Parte 2, serão substituídos por dados reais do servidor.

### Validação
A validação atual é apenas cliente-side. Será implementada validação servidor-side na Parte 2.

### Performance
Para otimizar performance em produção, considere:
- Minificar CSS e JS
- Lazy loading de imagens
- Service workers para cache

---

## 📞 Contato

Desenvolvido para apresentação em 15-17 de abril de 2025.
Para dúvidas sobre o projeto, consulte a documentação técnica do cliente.

---

**Status**: ✅ Front-end Completo | ⏳ Back-end em Planejamento
