# 🎤 Checklist de Apresentação - Caderno+

Documento para guiar a apresentação do projeto nos dias 15-17 de abril.

---

## 📋 Antes da Apresentação

### Preparação Técnica
- [ ] Testar em 2+ navegadores (Chrome, Firefox, Safari)
- [ ] Testar em celular/tablet
- [ ] Verificar conexão de internet (se usar servidor remoto)
- [ ] Fazer backup em pendrive (sem nuvem por enquanto)
- [ ] Ter terminal pronto com live server
- [ ] Testar áudio/vídeo se usar clips

### Preparação de Slides
- [ ] Slide title com nome do projeto
- [ ] Slide com persona (Ana)
- [ ] Slide com problemas identificados
- [ ] Slide com requisitos
- [ ] Slide com tecnologias usadas
- [ ] Slide com próximos passos

### Preparação Visual
- [ ] Aumentar zoom do navegador (120-150%)
- [ ] Configurar brilho adequado
- [ ] Preparar imagem de teste para upload
- [ ] Limpar desktop antes de projetar

---

## 👤 Estrutura da Apresentação

### Parte 1: Contexto (5-7 minutos)

**Slide 1: Introdução**
- Nome do projeto: **Caderno+**
- Tagline: **Seu caderno inteligente**
- Nomes do grupo

**Slide 2: Cliente**
- Persona: Ana, 20 anos, estudante
- O que ela faz: Fotografa a lousa
- Dor: Imagens perdidas na galeria, sem organização

**Slide 3: Problemas Identificados**
1. 📸 **Desorganizado** - Fotos misturadas
2. 📖 **Falta de revisão** - Não volta ao conteúdo
3. 😴 **Estudo passivo** - Sem ferramentas interativas
4. ✍️ **Trabalho manual** - Reescrever é cansativo

**Slide 4: Solução Proposta**
- Aplicativo web que:
  - 📤 Recebe fotos da lousa
  - 🤖 Transcreve com IA
  - 📚 Organiza por matéria
  - ❓ Gera questões de revisão

**Slide 5: Requisitos Funcionais**
- Upload de fotos/PDFs
- Transcrição por IA
- Organização por matéria
- Edição de transcrição
- Geração de questões
- Login/Cadastro
- Histórico de notas

**Slide 6: Tecnologias (Parte 1)**
- 🌐 HTML5, CSS3, JavaScript
- 📱 Responsive Design
- 🎨 Design System próprio

**Slide 7: Tecnologias (Parte 2)**
- 🔒 Node.js ou Python
- 💾 PostgreSQL ou MongoDB
- 🤖 Integração com API IA
- 📤 Sistema de upload S3

---

### Parte 2: Demo (10-15 minutos)

**Demonstração Prática:**

#### 1️⃣ Tela de Login (1 min)
```
Ação: Fazer login
├─ Mostrar forma simples
├─ Destacar abas (Entrar/Cadastrar)
├─ Falar sobre validações
```
**Frase chave**: "Interface limpa e intuitiva, pronto para Parte 2"

#### 2️⃣ Tela de Dashboard (2 min)
```
Ação: Visualizar materiais
├─ Mostrar grid de cards (Matemática, Física, Química, Biologia)
├─ Apontar botão "+ Nova Anotação"
├─ Destacar cores diferentes por matéria
├─ Ir para Upload
```
**Frase chave**: "Todas as matérias organizadas em um só lugar"

#### 3️⃣ Tela de Upload (2 min)
```
Ação: Upload de arquivo
├─ Mostrar drop zone
├─ Fazer drag & drop (ou clicar)
├─ Tomar uma imagem de teste
├─ Mostrar preview
├─ Selecionar matéria
├─ Selecionar data (automática)
├─ Clicar "Transcrever com IA"
```
**Frase chave**: "Suporta drag & drop e upload por clique"

#### 4️⃣ Tela de Visualização (2 min)
```
Ação: Revisar anotação
├─ Mostrar imagem original
├─ Mostrar conteúdo transcrito (dummy)
├─ Badge de matéria colorida
├─ Apontar botões de ação
│  ├─ Gerar Questões (próxima)
│  ├─ Ver Resumo (Parte 2)
│  └─ Explicação (Parte 2)
├─ Editar e Deletar (Parte 2)
```
**Frase chave**: "Conteúdo é editável e pronto para extensões de IA"

#### 5️⃣ Tela de Questões (2 min)
```
Ação: Responder e revisar
├─ Mostrar progresso (2 de 5 corretas)
├─ Mostrar questão respondida (com ✓)
├─ Responder uma nova questão
├─ Mostrar progresso atualizado
├─ Finalizar revisão
├─ Voltar
```
**Frase chave**: "Sistema de revisão interativo e adaptativo"

#### 6️⃣ Responsividade (1 min)
```
Ação: Mostrar mobile
├─ Redimensionar navegador
├─ F12 → Toggle Device Toolbar (Ctrl+Shift+M)
├─ Testar em iPhone X
├─ Testar em Samsung Galaxy
```
**Frase chave**: "Totalmente responsivo para mobile first"

---

### Parte 3: Design & Arquitetura (5 minutos)

**Slide 8: Design System**
- Mostrar paleta de cores
- Explicar gradientes por matéria
- Apontar componentes reutilizáveis

**Slide 9: Estrutura Técnica**
```
- 1 arquivo HTML (5 telas)
- 1 arquivo CSS (responsive)
- 1 arquivo JS (navegação)
- Arquivos dummy data prontos
```

**Slide 10: Fluxo do Usuário**
```
1. Login → 2. Dashboard → 3. Upload → 
4. Processamento (simulado) → 5. Visualização → 
6. Questões → 7. Estudo completo
```

**Slide 11: Modas de Dados**
```
Usuário → Matéria → Anotação → Questão
Todos com validações e relações claras
```

---

### Parte 4: Próximos Passos (3 minutos)

**Slide 12: Parte 2 - Backend**
1. ✅ Setup do servidor (Node.js/Python)
2. ✅ Banco de dados (PostgreSQL/MongoDB)
3. ✅ Autenticação real (JWT)
4. ✅ CRUD completo
5. ✅ Upload real
6. ✅ Integração IA

**Slide 13: Timeline**
- Semana 1: Setup Backend
- Semana 2: Autenticação + CRUD
- Semana 3: Upload + IA
- Semana 4: Testes + Deploy

**Slide 14: Equipe**
- Dev 1: Frontend
- Dev 2: Backend
- Dev 3: IA/API
- Dev 4: Testes/DevOps

---

## 🎬 Roteiro da Demo

### Cenário 1: Fluxo Completo (Recomendado)
```
1. Login como novo usuário
2. Ver dashboard
3. Clicar "+ Nova Anotação"
4. Upload de arquivo
5. Transcrever (simulado 2s)
6. Ver anotação
7. Gerar questões
8. Responder algumas
9. Finalizar
10. Voltar ao dashboard
11. Logout
Tempo: ~8 minutos
```

### Cenário 2: Focus em Design (Se tempo curto)
```
1. Login
2. Dashboard → apontar cards
3. Upload → drag & drop
4. Visualização → edição
5. Mobile responsivo
Tempo: ~5 minutos
```

### Cenário 3: Focus em Features (Se tempo longo)
```
Fazer todos os cenários anterior +
- Mostrar cada validação
- Testar drag & drop
- Testar mobile
- Mostrar código rapidamente
Tempo: ~15 minutos
```

---

## ⚠️ Potenciais Problemas e Soluções

| Problema | Solução |
|----------|---------|
| Navegador não carrega | Limpar cache (Ctrl+Shift+Delete) ou abrir em outro navegador |
| CSS não aparece | Usar live server em vez de abrir arquivo direto |
| Imagem não aparece no preview | Usar arquivo de teste menor (< 2MB) |
| Progresso não atualiza | Clicar em cada questão individualmente |
| Mobile parece quebrado | Aumentar zoom do browser a 100% |
| Projector com resolução baixa | Aumentar zoom a 150% |
| Sem som no vídeo | Testar áudio antes no mesmo projetor |

---

## 📱 Itens para Levar

**Hardware:**
- [ ] Notebook com bateria 100%
- [ ] Adaptador de vídeo/HDMI
- [ ] Mouse sem fio
- [ ] Pendrive com cópia (backup offline)

**Software:**
- [ ] Chrome, Firefox, Safari instalados
- [ ] Live server ativo
- [ ] DevTools aberto (preparado)
- [ ] Terminal preparado

**Documentos:**
- [ ] Slides em PDF
- [ ] Este checklist impresso
- [ ] README.md impresso (se necessário)

---

## 🎤 Frases-Chave para Dizer

**Sobre o Cliente:**
> "Ana é uma estudante que fotografa a lousa, mas as imagens se perdem. Queremos resolver isso."

**Sobre a Solução:**
> "Caderno+ organiza, transcreve e gera questões automaticamente com IA."

**Sobre a Implementação:**
> "Construímos todas as 5 telas principais com dados dummy, pronto para receber dados reais na Parte 2."

**Sobre o Design:**
> "Interface intuitiva, responsiva em mobile e pronto para integração backend."

**Sobre Próximos Passos:**
> "Parte 2 traz autenticação real, banco de dados e integração com IA para geração automática de conteúdo."

---

## ⏱️ Timing Sugerido

- Contexto: 7 min
- Demo: 12 min
- Design/Arquitetura: 5 min
- Próximos Passos: 3 min
- Q&A: 5 min
- **Total: ~32 minutos**

**Se tiver 20 minutos:**
- Contexto: 5 min
- Demo: 8 min
- Próximos Passos: 2 min
- Q&A: 5 min

**Se tiver 40 minutos:**
- Contexto: 7 min
- Demo: 18 min
- Design/Arquitetura: 7 min
- Próximos Passos: 5 min
- Q&A: 3 min

---

## ❓ Possíveis Perguntas e Respostas

**P: Por que não usar React/Vue?**
> R: Para esta Parte 1, queremos demonstrar compreensão de fundamentos. Parte 2 pode usar framework se preferir.

**P: Como funciona o OCR?**
> R: Na Parte 2, integraremos com APIs como Google Vision ou Azure Computer Vision.

**P: E a segurança da senha?**
> R: Na Parte 1 é dummy. Na Parte 2 faremos hash com bcrypt e JWT.

**P: Por que MongoDB e não SQL?**
> R: Ambos funcionam. Dependerá da equipe (SQL é mais estruturado, NoSQL mais flexível).

**P: Quanto tempo para Parte 2?**
> R: Estimamos 4 semanas com time de 3-4 pessoas.

**P: Pode fazer offline?**
> R: Sim, Parte 1 é 100% offline. Parte 2 precisa de servidor.

---

## ✅ Última Verificação

**15 minutos antes:**
- [ ] Testar navegação completa 1x
- [ ] Verificar volume/mic
- [ ] Abrir slides
- [ ] Fazer login de demonstração
- [ ] Listar arquivo de teste

**5 minutos antes:**
- [ ] Respirar fundo
- [ ] Centralizar mouse
- [ ] Minimizar abas desnecessárias
- [ ] Colocar celular no silencioso

**Hora da apresentação:**
- [ ] Cumprimentar a banca
- [ ] Apresentar o grupo
- [ ] Fazer primeiro clique
- [ ] Falar com confiança!

---

## 🎉 Considerações Finais

✅ **Você tem:**
- Um projeto completo e funcionando
- Design profissional
- Documentação clara
- Demo pronta
- Timeline realista

✨ **Dica extra:**
- Foque na **experiência do usuário** (por que existe)
- Mostre o **problema real** que resolve
- Seja **honesto** sobre Parte 2 (o que virá depois)
- Celebre o **trabalho bem feito** na Parte 1

---

**Boa apresentação! 🚀**

Qualquer dúvida durante a apresentação:
- Respire fundo
- Consulte este documento
- Lembre do propósito: demonstrar compreensão do problema e execução profissional

**Vocês conseguem! 💪**
