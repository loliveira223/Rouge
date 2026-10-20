// Menu hamburger + rodapé partilhado — funciona em todas as páginas
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    if (hamburger && mobileMenu) {
        function setMenu(aberto) {
            hamburger.classList.toggle("open", aberto);
            mobileMenu.classList.toggle("open", aberto);
            hamburger.setAttribute("aria-expanded", aberto ? "true" : "false");
            hamburger.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
            document.body.style.overflow = aberto ? "hidden" : "";
        }

        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-controls", "mobileMenu");

        hamburger.addEventListener("click", function () {
            setMenu(!mobileMenu.classList.contains("open"));
        });

        // Fecha ao clicar num link
        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => setMenu(false));
        });

        // Fecha com Esc
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") setMenu(false);
        });

        // Fecha se o ecrã passar para desktop
        window.matchMedia("(min-width: 769px)").addEventListener("change", function (e) {
            if (e.matches) setMenu(false);
        });
    }

    inserirRodape();
});

function inserirRodape() {
    if (document.getElementById("site-footer")) return;

    const html = `
<div class="footer-valores" id="footer-valores">
    <div class="footer-logo-box">
        <span class="logo-rouge">rouge</span>
        <span class="logo-veggie">veggie</span>
        <span class="logo-sub">Receitas partilhadas com amor</span>
    </div>
    <div class="valores-lista">
        <div class="valor-item">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M32 44 C24 44 16 40 12 34 C10 30 12 26 16 26 C18 26 20 27 21 29 L22 31" stroke-linecap="round"/>
                <path d="M22 31 C22 24 23 16 28 14 C30 13 32 14 33 16 L34 30" stroke-linecap="round"/>
                <path d="M34 28 C34 22 35 18 38 17 C40 16 42 18 42 20 L42 30" stroke-linecap="round"/>
                <path d="M42 28 C42 23 43 20 46 20 C49 20 50 23 50 26 L50 36 C50 44 44 50 36 52 L28 52 C22 52 18 48 16 44" stroke-linecap="round"/>
                <path d="M24 10 L28 14 L36 6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Compromisso</span>
        </div>
        <div class="valor-item">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="32" cy="12" r="7"/>
                <circle cx="12" cy="46" r="7"/>
                <circle cx="52" cy="46" r="7"/>
                <line x1="32" y1="19" x2="19" y2="40" stroke-linecap="round"/>
                <line x1="32" y1="19" x2="45" y2="40" stroke-linecap="round"/>
                <line x1="19" y1="46" x2="45" y2="46" stroke-linecap="round"/>
            </svg>
            <span>Partilha</span>
        </div>
        <div class="valor-item">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M32 22 C32 17 27 13 23 15 C19 17 18 22 20 26 L32 38 L44 26 C46 22 45 17 41 15 C37 13 32 17 32 22z" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18 40 C14 40 10 42 10 46 L10 50 L32 56 L54 50 L54 46 C54 42 50 40 46 40 L38 40" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="32" y1="38" x2="32" y2="40" stroke-linecap="round"/>
            </svg>
            <span>Empatia</span>
        </div>
    </div>
</div>
<footer id="site-footer">
    <div class="footer-grid">
        <div class="footer-brand">
            <h3>RougeVeggie</h3>
            <p>Receitas de quem cozinha com calma.</p>
        </div>
        <div class="footer-col">
            <h4>Links Rápidos</h4>
            <a href="receitas.html">Receitas</a>
            <a href="sobre.html">Sobre</a>
            <a href="ebook.html">Ebook</a>
            <a href="faq.html">FAQ</a>
            <a href="contacto.html">Contacto</a>
        </div>
        <div class="footer-col">
            <h4>Contacto</h4>
            <p>+351 210 123 456</p>
            <p>info@rougeveggie.pt</p>
            <p>Lisboa, Portugal</p>
        </div>
    </div>
    <div class="footer-bottom">© 2026 RougeVeggie. Todos os direitos reservados.</div>
</footer>`;

    document.body.insertAdjacentHTML("beforeend", html);
}
