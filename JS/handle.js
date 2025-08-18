// --- Mensagens de ações padrão ---
const sectionMessages = {
  produtos: "Funcionalidade: Adicionar novo produto",
  vendas: "Funcionalidade: Registrar nova venda",
  clientes: "Funcionalidade: Cadastrar novo cliente",
  categorias: "Funcionalidade: Criar nova categoria",
  estoque: "Funcionalidade: Ajustar estoque",
};

// --- Função de adicionar novo item ---
function handleAddNew(section) {
  const message = sectionMessages[section] || "Funcionalidade: Adicionar novo item";
  showNotification(message, "info");
}
