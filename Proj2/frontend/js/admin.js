const API_URL = "/api/potions";

const form = document.getElementById("potion-form");
const feedback = document.getElementById("form-feedback");
const list = document.getElementById("admin-list");

function formatPrice(preco) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
}

function showFeedback(message, type) {
  feedback.textContent = message;
  feedback.className = `form-feedback ${type}`;
}

function createAdminRow(potion) {
  const row = document.createElement("div");
  row.className = "admin-list__row";

  row.innerHTML = `
    <img src="${encodeURI(potion.imagem)}" alt="${potion.nome}" onerror="this.src='img/default.png'" />
    <span class="name">${potion.nome}</span>
    <span class="price">${formatPrice(potion.preco)}</span>
    <button type="button" class="btn btn--danger btn--small" data-id="${potion.id}">Excluir</button>
  `;

  row.querySelector("button").addEventListener("click", () => deletePotion(potion.id));

  return row;
}

async function loadPotions() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Não foi possível carregar as poções.");
    }

    const potions = await response.json();

    list.innerHTML = "";

    if (potions.length === 0) {
      list.innerHTML = '<p class="catalog__status">Nenhuma poção cadastrada.</p>';
      return;
    }

    potions.forEach((potion) => {
      list.appendChild(createAdminRow(potion));
    });
  } catch (error) {
    list.innerHTML = '<p class="catalog__status">Erro ao carregar as poções.</p>';
    console.error(error);
  }
}

async function deletePotion(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

    if (!response.ok) {
      throw new Error("Não foi possível remover a poção.");
    }

    await loadPotions();
  } catch (error) {
    showFeedback("Erro ao remover a poção.", "error");
    console.error(error);
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const descricao = document.getElementById("descricao").value.trim();
  const preco = parseFloat(document.getElementById("preco").value);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, descricao, preco }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || "Não foi possível cadastrar a poção.");
    }

    form.reset();
    showFeedback("Poção cadastrada com sucesso!", "success");
    await loadPotions();
  } catch (error) {
    showFeedback(error.message, "error");
  }
});

document.addEventListener("DOMContentLoaded", loadPotions);
