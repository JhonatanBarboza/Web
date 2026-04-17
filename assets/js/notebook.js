function goToUpload() {
    // Definir data atual
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('noteDate').value = today;

    // Resetar upload
    resetFileSelection();

    // showScreen('uploadScreen');
    window.location.href = "../html/upload.html";
}

function showAddMaterialModal() {
    // const newMateriaNome = prompt('Digite o nome da nova matéria:');

    const overlay = document.createElement("div");
    overlay.className = "overlay";

    overlay.innerHTML = `
    <div class="popup">
        <button class="btn-fechar"> X </button>
        <div class="form-group">
            <label for="newMateriaNome">Nome da Matéria</label>
            <input class="form-input" type="text" id="newMateriaNome" placeholder="Ex: História" required>
        </div>
        <button class="btn" id="btn-confirmAddMateria">Adicionar Matéria</button>
    </div>
    `;

    document.body.appendChild(overlay);

    // fechar
    overlay.querySelector(".btn-fechar").onclick = () => overlay.remove();

    // confirmar
    overlay.querySelector("#btn-confirmAddMateria").onclick = () => {
        const newMateriaNome = document.getElementById("newMateriaNome").value;

        if (newMateriaNome && newMateriaNome.trim()) {
            // buscar a div 
            div_materias = document.getElementsByClassName("materials-grid")[0]

            nova_div = document.createElement("div");
            nova_div.className = "material-card";
            nova_div.innerHTML = `
            <div class="material-card-header">
                <h3>${newMateriaNome}</h3>
                <span class="material-count">0 anotações</span>
            </div>
            <button class="btn btn-small" onclick="viewMaterial('${newMateriaNome}')">Acessar</button>
            `
            div_materias.insertBefore(nova_div, document.getElementsByClassName("material-card-add")[0]);

            // fechar popup
            overlay.remove();
        }
        else{
            const popup = overlay.querySelector(".popup");
            // Nome inválido
            if(!overlay.querySelector(".popup p")){
                const msg = document.createElement("p");
                msg.style.color = "red";
                msg.style.marginTop = "10px";
                msg.textContent = "Por favor, insira um nome válido!";

                popup.appendChild(msg);
            }
        }
    }   
}