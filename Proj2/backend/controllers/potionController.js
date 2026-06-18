const Potion = require("../models/Potion");
const { resolveImagePath } = require("../utils/imageHelper");

async function listPotions(req, res) {
  try {
    const potions = await Potion.findAll();
    res.json(potions);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar poções." });
  }
}

async function getPotion(req, res) {
  try {
    const potion = await Potion.findByPk(req.params.id);
    if (!potion) {
      return res.status(404).json({ error: "Poção não encontrada." });
    }
    res.json(potion);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar poção." });
  }
}

async function createPotion(req, res) {
  try {
    const { nome, descricao, preco } = req.body;

    if (!nome || !descricao || preco === undefined) {
      return res
        .status(400)
        .json({ error: "Os campos nome, descricao e preco são obrigatórios." });
    }

    const potion = await Potion.create({
      nome,
      descricao,
      preco,
      imagem: resolveImagePath(nome),
    });

    res.status(201).json(potion);
  } catch (error) {
    res.status(500).json({ error: "Erro ao cadastrar poção." });
  }
}

async function deletePotion(req, res) {
  try {
    const potion = await Potion.findByPk(req.params.id);
    if (!potion) {
      return res.status(404).json({ error: "Poção não encontrada." });
    }
    await potion.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao remover poção." });
  }
}

module.exports = { listPotions, getPotion, createPotion, deletePotion };
