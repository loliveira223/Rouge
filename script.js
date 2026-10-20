// Lista de receitas + pesquisa (receitas.html)
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("recipe-container");
    if (!container) return;
    carregarReceitas();
});

function escapeHTML(texto) {
    return String(texto).replace(/[&<>"']/g, c => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
}

async function carregarReceitas() {
    const container = document.getElementById("recipe-container");
    try {
        const resposta = await fetch("receitas.json");
        if (!resposta.ok) throw new Error("HTTP " + resposta.status);
        const receitas = await resposta.json();

        mostrarReceitas(receitas);

        document.getElementById("searchInput").addEventListener("input", function () {
            const texto = this.value.trim().toLowerCase();
            const filtradas = receitas.filter(r =>
                r.title.toLowerCase().includes(texto) ||
                r.description.toLowerCase().includes(texto) ||
                r.category.toLowerCase().includes(texto)
            );
            mostrarReceitas(filtradas);
        });

    } catch (erro) {
        console.error("Erro ao carregar receitas:", erro);
        container.innerHTML =
            "<p>Erro ao carregar receitas. Abre o site com um servidor (ex.: Live Server).</p>";
    }
}

function mostrarReceitas(lista) {
    const container = document.getElementById("recipe-container");

    if (lista.length === 0) {
        container.innerHTML = "<p class='sem-resultados'>Nenhuma receita encontrada.</p>";
        return;
    }

    container.innerHTML = lista.map(receita => `
        <a href="receita.html?id=${receita.id}" class="card">
            <div class="card-img">
                <img src="${escapeHTML(receita.image)}" alt="${escapeHTML(receita.title)}" loading="lazy">
            </div>
            <div class="card-body">
                <span class="card-category">${escapeHTML(receita.category.toUpperCase())}</span>
                <h3 class="card-title">${escapeHTML(receita.title)}</h3>
                <p class="card-desc">${escapeHTML(receita.description)}</p>
                <div class="card-meta">
                    <span>🕐 ${escapeHTML(receita.time)}</span>
                    <span>👤 ${escapeHTML(receita.servings)}</span>
                    <span class="card-author">${escapeHTML(receita.author)}</span>
                </div>
            </div>
        </a>
    `).join("");
}
