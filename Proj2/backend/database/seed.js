const Potion = require("../models/Potion");
const { resolveImagePath } = require("../utils/imageHelper");

const INITIAL_POTIONS = [
  {
    nome: "Poção Blue Sky",
    descricao:
      "Essa poção provê um surto de inspiração por 24 horas. Foi utilizada por John Lennon quando escreveu Lucy in the Sky with Diamonds.",
    preco: 300,
  },
  {
    nome: "Poção do Perfume Misterioso",
    descricao:
      "Essa poção faz com que você fique cheirando lilás e groselha por 24 dias. Essência muito admirada pelos bruxos.",
    preco: 200,
  },
  {
    nome: "Poção de Pinus",
    descricao:
      "Essa poção faz com que você fique 10 cm mais alto. Efeitos colaterais desconhecidos.",
    preco: 3000,
  },
  {
    nome: "Poção da Beleza Eterna",
    descricao: "Veneno que mata rápido.",
    preco: 100,
  },
  {
    nome: "Poção do Arco Íris",
    descricao: "Traz felicidade momentânea. Pode durar de 10 minutos a 2 dias.",
    preco: 120,
  },
  {
    nome: "Caldeirão das Verdades Secretas",
    descricao:
      "As pessoas lhe dirão apenas verdades por 1 hora. É necessário beber os 5 litros.",
    preco: 150,
  },
];

async function seedDatabase() {
  const potions = INITIAL_POTIONS.map((potion) => ({
    ...potion,
    imagem: resolveImagePath(potion.nome),
  }));

  await Potion.bulkCreate(potions);
}

module.exports = seedDatabase;
