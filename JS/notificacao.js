// --- Sistema de Notificações ---

function showNotification(message, type = "info") {
  // Remove notificações existentes
  document.querySelector(".notification")?.remove();

  // Cria notificação
  const notification = document.createElement("div");
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

  // Estilo inline
  Object.assign(notification.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    background: "var(--white)",
    border: "1px solid var(--florence-border)",
    borderLeft: "4px solid var(--florence-accent)",
    borderRadius: "var(--border-radius)",
    boxShadow: "var(--box-shadow)",
    padding: "15px 20px",
    zIndex: "10000",
    maxWidth: "400px",
    animation: "slideIn 0.3s ease",
  });

  document.body.appendChild(notification);

  // Fecha ao clicar no botão
  notification.querySelector(".notification-close").addEventListener("click", () => {
    notification.remove();
  });

  // Remove automaticamente após 3s
  setTimeout(() => notification.remove(), 3000);
}
