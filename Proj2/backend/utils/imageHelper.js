const fs = require("fs");
const path = require("path");

const IMG_DIR = path.join(__dirname, "..", "..", "frontend", "img");

function resolveImagePath(nome) {
  const fileName = `${nome}.png`;
  const exists = fs.existsSync(path.join(IMG_DIR, fileName));
  return exists ? `img/${fileName}` : "img/default.png";
}

module.exports = { resolveImagePath };
