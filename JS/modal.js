function openModal() {
    document.getElementById("clientModal").classList.add("active");
}

function closeModal() {
    document.getElementById("clientModal").classList.remove("active");
}

// Fecha modal clicando fora do conteúdo
window.addEventListener("click", function (e) {
    const modal = document.getElementById("clientModal");
    if (e.target === modal) {
        closeModal();
    }
});