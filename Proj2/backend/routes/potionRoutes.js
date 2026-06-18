const express = require("express");
const {
  listPotions,
  getPotion,
  createPotion,
  deletePotion,
} = require("../controllers/potionController");

const router = express.Router();

router.get("/potions", listPotions);
router.get("/potions/:id", getPotion);
router.post("/potions", createPotion);
router.delete("/potions/:id", deletePotion);

module.exports = router;
