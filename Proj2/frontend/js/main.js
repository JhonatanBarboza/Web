const API_URL = "/api/potions";

function formatPrice(preco) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
}

function createPotionCard(potion) {
  const card = document.createElement("article");
  card.className = "potion-card glass";

  card.innerHTML = `
    <div class="potion-card__image-wrap">
      <img src="${encodeURI(potion.imagem)}" alt="${potion.nome}" onerror="this.src='img/default.png'" />
    </div>
    <h3>${potion.nome}</h3>
    <p>${potion.descricao}</p>
    <div class="potion-card__footer">
      <span class="potion-card__price">${formatPrice(potion.preco)}</span>
      <button type="button" class="btn btn--small">Comprar</button>
    </div>
  `;

  return card;
}

async function loadCatalog() {
  const catalog = document.getElementById("catalog");

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Não foi possível carregar o catálogo.");
    }

    const potions = await response.json();

    catalog.innerHTML = "";

    if (potions.length === 0) {
      catalog.innerHTML = '<p class="catalog__status">Nenhuma poção disponível no momento.</p>';
      return;
    }

    potions.forEach((potion) => {
      catalog.appendChild(createPotionCard(potion));
    });
  } catch (error) {
    catalog.innerHTML = '<p class="catalog__status">Erro ao carregar as poções. Tente novamente mais tarde.</p>';
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", loadCatalog);
