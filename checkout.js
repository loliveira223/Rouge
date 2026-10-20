// Checkout (checkout.html) — simulação, não processa pagamentos reais
document.addEventListener("DOMContentLoaded", function () {
    const cartao = document.getElementById("cartao");
    const validade = document.getElementById("validade");
    const cvv = document.getElementById("cvv");

    // Formata 1234 5678 9012 3456
    cartao.addEventListener("input", function () {
        const digitos = this.value.replace(/\D/g, "").slice(0, 16);
        this.value = digitos.replace(/(.{4})/g, "$1 ").trim();
    });

    // Formata MM/AA
    validade.addEventListener("input", function () {
        const d = this.value.replace(/\D/g, "").slice(0, 4);
        this.value = d.length > 2 ? d.slice(0, 2) + "/" + d.slice(2) : d;
    });

    // Só números no CVV
    cvv.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 3);
    });
});

function finalizarCompra(e) {
    e.preventDefault();
    alert("Compra realizada com sucesso! ✅\nVais receber o ebook no teu email em breve.");
    window.location.href = "index.html";
}
