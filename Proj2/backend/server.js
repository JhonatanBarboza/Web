const path = require("path");
const express = require("express");
const cors = require("cors");

const sequelize = require("./database/database");
const seedDatabase = require("./database/seed");
const potionRoutes = require("./routes/potionRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", potionRoutes);
app.use(express.static(path.join(__dirname, "..", "frontend")));

app.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada." });
});

async function start() {
  await sequelize.sync({ force: true });
  await seedDatabase();

  app.listen(PORT, () => {
    console.log(`Poções e Soluções rodando em http://localhost:${PORT}`);
  });
}

start();
