# Poções e Soluções

Aplicação Full Stack para a loja de poções mágicas "Poções e Soluções", fundada em 1867 e
localizada no Beco da Última Saída. O projeto possui uma área pública para clientes, uma área
administrativa para gerenciamento das poções e uma API REST que persiste os dados em um banco
SQLite em memória.

## Estrutura do projeto

```text
Proj2/
├── backend/
│   ├── controllers/
│   │   └── potionController.js   # Regras de negócio das rotas de poções
│   ├── database/
│   │   ├── database.js           # Configuração do Sequelize (SQLite em memória)
│   │   └── seed.js               # População inicial do banco
│   ├── models/
│   │   └── Potion.js             # Modelo Sequelize da poção
│   ├── routes/
│   │   └── potionRoutes.js       # Definição das rotas /api/potions
│   ├── utils/
│   │   └── imageHelper.js        # Resolve o caminho da imagem (ou default.png)
│   ├── server.js                 # Ponto de entrada da aplicação
│   └── package.json
│
├── frontend/
│   ├── index.html                # Página pública (vitrine)
│   ├── admin.html                # Página administrativa
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js               # AJAX da página pública
│   │   └── admin.js              # AJAX da página administrativa
│   └── img/                      # Imagens das poções (PNG, fundo transparente)
│
├── .gitignore
└── README.md
```

## Tecnologias

**Backend:** Node.js, Express, Sequelize, SQLite (modo memória)

**Frontend:** HTML5, CSS3, JavaScript Vanilla, Fetch API (AJAX)

## Instalação

```bash
cd backend
npm install
```

Isso instala as dependências declaradas no `package.json`:

```bash
npm install express sequelize sqlite3 cors
```

## Execução

```bash
cd backend
node server.js
```

O servidor inicia em `http://localhost:3000`, sincroniza o banco SQLite em memória, popula os
dados iniciais e também serve os arquivos estáticos do `frontend/`. Basta acessar:

- `http://localhost:3000/` — página pública (vitrine de poções)
- `http://localhost:3000/admin.html` — painel administrativo

Como o banco é em memória, os dados são reiniciados (voltando ao estado inicial com as 6 poções
padrão) cada vez que o servidor é reiniciado.

## Rotas da API

| Método | Rota                | Descrição                                   |
|--------|---------------------|----------------------------------------------|
| GET    | `/api/potions`       | Lista todas as poções cadastradas             |
| GET    | `/api/potions/:id`   | Busca uma poção específica pelo `id`          |
| POST   | `/api/potions`       | Cadastra uma nova poção (`nome`, `descricao`, `preco`) |
| DELETE | `/api/potions/:id`   | Remove uma poção pelo `id`                    |

No cadastro (`POST`), o campo `imagem` é gerado automaticamente pelo backend a partir do `nome`
informado, no formato `img/{nome}.png`. Caso não exista um arquivo com esse nome em
`frontend/img/`, a imagem `img/default.png` é utilizada automaticamente.

## Como adicionar novas imagens de poções

1. Salve a imagem em formato `.png` com fundo transparente dentro de `frontend/img/`.
2. O nome do arquivo deve ser **exatamente** o nome da poção, por exemplo:
   `Poção do Sono Profundo.png`.
3. Ao cadastrar a poção pelo painel administrativo com o nome `Poção do Sono Profundo`, o backend
   associará automaticamente a imagem correspondente. Se nenhum arquivo correspondente for
   encontrado, `img/default.png` será usado como imagem da poção.

## Frontend e Backend

O backend serve o frontend como arquivos estáticos, então não é necessário um servidor separado
para o HTML/CSS/JS — basta executar `node server.js` e acessar `http://localhost:3000` no
navegador. Todo o consumo de dados na interface (catálogo da loja e painel administrativo) é
feito via `fetch` (AJAX), sem recarregar a página.
