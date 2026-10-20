// Login / registo (login.html)
function switchTab(tab) {
    const isLogin = tab === "login";
    document.getElementById("tab-login").style.display = isLogin ? "block" : "none";
    document.getElementById("tab-register").style.display = isLogin ? "none" : "block";
    document.getElementById("btn-tab-login").classList.toggle("active", isLogin);
    document.getElementById("btn-tab-register").classList.toggle("active", !isLogin);
}

function fazerLogin(e) {
    e.preventDefault();
    alert("Login efetuado com sucesso! 🎉");
    window.location.href = "index.html";
}

function fazerRegisto(e) {
    e.preventDefault();
    const pass = e.target.querySelectorAll('input[type="password"]');
    if (pass[0].value !== pass[1].value) {
        alert("As palavras-passe não coincidem.");
        return;
    }
    alert("Conta criada com sucesso! Bem-vindo/a à RougeVeggie 🎉");
    window.location.href = "index.html";
}

// Abre o separador certo com login.html#register
document.addEventListener("DOMContentLoaded", function () {
    if (location.hash === "#register") switchTab("register");
});
