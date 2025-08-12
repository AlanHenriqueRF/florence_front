// Florence Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const sidebar = document.getElementById('sidebar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    const pageTitle = document.getElementById('pageTitle');
    const addNewBtn = document.getElementById('addNewBtn');

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });

    // Navigation functionality
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all content sections
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Show target section
            const targetSection = this.getAttribute('data-section');
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
            }
            
            // Update page title
            const linkText = this.textContent.trim();
            pageTitle.textContent = linkText;
            
            // Update add button text based on section
            updateAddButton(targetSection);
            
            // Close mobile menu
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });

    // Update add button based on current section
    function updateAddButton(section) {
        const buttonTexts = {
            'dashboard': 'Adicionar',
            'produtos': 'Novo Produto',
            'vendas': 'Nova Venda',
            'clientes': 'Novo Cliente',
            'categorias': 'Nova Categoria',
            'estoque': 'Ajustar Estoque'
        };
        
        const buttonText = buttonTexts[section] || 'Adicionar';
        addNewBtn.innerHTML = `<i class="fas fa-plus"></i> ${buttonText}`;
    }

    // Search functionality
    const searchInputs = document.querySelectorAll('input[type="text"]');
    searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const tableContainer = this.closest('.content-section').querySelector('.table-container');
            
            if (tableContainer) {
                const rows = tableContainer.querySelectorAll('tbody tr');
                rows.forEach(row => {
                    const text = row.textContent.toLowerCase();
                    if (text.includes(searchTerm)) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                });
            }
        });
    });

    // Filter functionality
    const filterSelects = document.querySelectorAll('select');
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            const filterValue = this.value.toLowerCase();
            const tableContainer = this.closest('.content-section').querySelector('.table-container');
            
            if (tableContainer && filterValue) {
                const rows = tableContainer.querySelectorAll('tbody tr');
                rows.forEach(row => {
                    const text = row.textContent.toLowerCase();
                    if (text.includes(filterValue)) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                });
            } else if (tableContainer) {
                // Show all rows if no filter selected
                const rows = tableContainer.querySelectorAll('tbody tr');
                rows.forEach(row => {
                    row.style.display = '';
                });
            }
        });
    });

    // Button click handlers
    document.addEventListener('click', function(e) {
        // Add new button
        if (e.target.closest('#addNewBtn')) {
            const currentSection = document.querySelector('.content-section.active').id;
            handleAddNew(currentSection);
        }
        
        // Action buttons
        if (e.target.closest('.btn-icon')) {
            const button = e.target.closest('.btn-icon');
            const action = button.getAttribute('title');
            const row = button.closest('tr');
            handleAction(action, row);
        }
        
        // Category actions
        if (e.target.closest('.category-actions .btn')) {
            const button = e.target.closest('.btn');
            const card = button.closest('.category-card');
            const categoryName = card.querySelector('h3').textContent;
            const action = button.textContent.trim();
            handleCategoryAction(action, categoryName);
        }
    });

    // Handle add new functionality
    function handleAddNew(section) {
        const messages = {
            'produtos': 'Funcionalidade: Adicionar novo produto',
            'vendas': 'Funcionalidade: Registrar nova venda',
            'clientes': 'Funcionalidade: Cadastrar novo cliente',
            'categorias': 'Funcionalidade: Criar nova categoria',
            'estoque': 'Funcionalidade: Ajustar estoque'
        };
        
        const message = messages[section] || 'Funcionalidade: Adicionar novo item';
        showNotification(message, 'info');
    }

    // Handle table actions
    function handleAction(action, row) {
        const itemName = row.querySelector('strong')?.textContent || 'Item';
        const messages = {
            'Visualizar': `Visualizando: ${itemName}`,
            'Editar': `Editando: ${itemName}`,
            'Excluir': `Excluindo: ${itemName}`,
            'Imprimir': `Imprimindo: ${itemName}`,
            'Histórico': `Histórico de: ${itemName}`,
            'Ajustar Estoque': `Ajustando estoque de: ${itemName}`
        };
        
        const message = messages[action] || `Ação: ${action} - ${itemName}`;
        showNotification(message, 'info');
    }

    // Handle category actions
    function handleCategoryAction(action, categoryName) {
        const messages = {
            'Editar': `Editando categoria: ${categoryName}`,
            'Ver Produtos': `Visualizando produtos da categoria: ${categoryName}`
        };
        
        const message = messages[action] || `Ação: ${action} - ${categoryName}`;
        showNotification(message, 'info');
    }

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-info-circle"></i>
                <span>${message}</span>
                <button class="notification-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--white);
            border: 1px solid var(--florence-border);
            border-left: 4px solid var(--florence-accent);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            padding: 15px 20px;
            z-index: 10000;
            max-width: 400px;
            animation: slideIn 0.3s ease;
        `;

        // Add to document
        document.body.appendChild(notification);

        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });

        // Auto remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 3000);
    }

    // Add CSS animation for notifications
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--florence-text);
        }
        
        .notification-close {
            background: none;
            border: none;
            color: var(--florence-text);
            cursor: pointer;
            padding: 0;
            margin-left: auto;
        }
        
        .notification-close:hover {
            color: var(--florence-accent);
        }
    `;
    document.head.appendChild(style);

    // Initialize dashboard
    updateAddButton('dashboard');

    // Simulate real-time updates (optional)
    function simulateRealTimeUpdates() {
        // This could be connected to a real backend
        // For now, just update timestamps or counters occasionally
        setInterval(() => {
            // Update last activity or refresh data
            console.log('Real-time update simulation');
        }, 30000); // Every 30 seconds
    }

    // Start real-time updates
    simulateRealTimeUpdates();

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const activeSection = document.querySelector('.content-section.active');
            const searchInput = activeSection?.querySelector('input[type="text"]');
            if (searchInput) {
                searchInput.focus();
            }
        }
        
        // Escape to close mobile menu
        if (e.key === 'Escape') {
            sidebar.classList.remove('active');
        }
    });

    console.log('Florence Dashboard initialized successfully!');
});

