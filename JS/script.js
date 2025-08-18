// --- Florence Dashboard ---

const API_BASE_URL = "http://localhost:3000";

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const mobileMenuToggle = document.getElementById("mobileMenuToggle");
    const navLinks = document.querySelectorAll(".nav-link");
    const contentSections = document.querySelectorAll(".content-section");
    const pageTitle = document.getElementById("pageTitle");
    const addNewBtn = document.getElementById("addNewBtn");

    // --- Menu Mobile ---
    mobileMenuToggle.addEventListener("click", () => sidebar.classList.toggle("active"));
    document.addEventListener("click", e => {
        if (window.innerWidth <= 768 && !sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            sidebar.classList.remove("active");
        }
    });

    // --- Navegação ---
    navLinks.forEach(link =>
        link.addEventListener("click", e => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            const targetSection = link.dataset.section;
            contentSections.forEach(sec => sec.classList.remove("active"));
            document.getElementById(targetSection)?.classList.add("active");

            if (targetSection === "clientes") getClientes();

            pageTitle.textContent = link.textContent.trim();
            updateAddButton(targetSection);
            if (window.innerWidth <= 768) sidebar.classList.remove("active");
        })
    );

    // --- Atualiza texto do botão adicionar ---
    function updateAddButton(section) {
        const buttonTexts = {
            dashboard: "Adicionar",
            produtos: "Novo Produto",
            vendas: "Nova Venda",
            clientes: "Novo Cliente",
            categorias: "Nova Categoria",
            estoque: "Ajustar Estoque",
        };

        addNewBtn.innerHTML = `<i class="fas fa-plus"></i> ${buttonTexts[section] || "Adicionar"}`;
        addNewBtn.setAttribute("data-section", section); // 🔹 marca a seção atual no botão
    }

    // --- Abrir modal conforme seção ---
    addNewBtn.addEventListener("click", () => {
        const section = addNewBtn.getAttribute("data-section");

        // Você pode ter modais diferentes por seção
        switch (section) {
            case "produtos":
                openModal("modalProduto");
                break;
            case "vendas":
                openModal("modalVenda");
                break;
            case "clientes":
                openModal("modalCliente");
                break;
            case "categorias":
                openModal("modalCategoria");
                break;
            case "estoque":
                openModal("modalEstoque");
                break;
            default:
                openModal("modalGenerico");
        }
    });

    // --- Função genérica de abrir modal ---
    function openModal(idModal) {
        const modal = document.getElementById(idModal);
        if (modal) {
            modal.style.display = "block";
        }
    }

    // --- Pesquisa ---
    document.querySelectorAll("input[type='text']").forEach(input => {
        input.addEventListener("input", function () {
            const term = this.value.toLowerCase();
            const rows = this.closest(".content-section")?.querySelectorAll("tbody tr") || [];
            rows.forEach(row => row.style.display = row.textContent.toLowerCase().includes(term) ? "" : "none");
        });
    });

    // --- Filtro ---
    document.querySelectorAll("select").forEach(select => {
        select.addEventListener("change", function () {
            const value = this.value.toLowerCase();
            const rows = this.closest(".content-section")?.querySelectorAll("tbody tr") || [];
            rows.forEach(row => row.style.display = !value || row.textContent.toLowerCase().includes(value) ? "" : "none");
        });
    });

    // --- Eventos de clique ---
    document.addEventListener("click", e => {
        if (e.target.closest("#addNewBtn")) {
            const currentSection = document.querySelector(".content-section.active").id;
            handleAddNew(currentSection);
        }
        if (e.target.closest(".btn-icon")) {
            const action = e.target.closest(".btn-icon").title;
            const itemName = e.target.closest("tr").querySelector("strong")?.textContent || "Item";
            showNotification(`${action}: ${itemName}`, "info");
        }
        if (e.target.closest(".category-actions .btn")) {
            const button = e.target.closest(".btn");
            const categoryName = button.closest(".category-card")?.querySelector("h3").textContent || "Categoria";
            showNotification(`${button.textContent.trim()} - ${categoryName}`, "info");
        }
    });

    // --- Responsividade ---
    window.addEventListener("resize", () => { if (window.innerWidth > 768) sidebar.classList.remove("active"); });

    // --- Atalhos de teclado ---
    document.addEventListener("keydown", e => {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") {
            e.preventDefault();
            document.querySelector(".content-section.active input[type='text']")?.focus();
        }
        if (e.key === "Escape") sidebar.classList.remove("active");
    });

    // Inicia
    updateAddButton("dashboard");
    console.log("Florence Dashboard initialized!");
});
