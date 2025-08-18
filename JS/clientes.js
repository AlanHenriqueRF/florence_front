// --- API de Clientes ---

// Buscar todos os clientes
async function getClientes() {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/cliente`);
    renderClients(data);
    showNotification("Clientes carregados com sucesso!", "success");
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    showNotification("Erro ao carregar clientes.", "danger");
  }
}

// Renderizar tabela de clientes
function renderClients(clients = []) {
  const tbody = document.querySelector("#clientes .data-table tbody");
  if (!tbody) return;

  tbody.innerHTML = clients.length
    ? clients.map(client => `
        <tr>
          <td>${client.id}</td>
          <td>
            <strong>${client.nome}</strong>
            <small>Cliente desde ${new Date(client.createdAt).getFullYear()}</small>
          </td>
          <td>${client.email}</td>
          <td>${client.telefone || "N/A"}</td>
          <td>${client.endereco || "N/A"}</td>
          <td class="actions">
            <button class="btn-icon" title="Visualizar"><i class="fas fa-eye"></i></button>
            <button class="btn-icon" title="Editar"><i class="fas fa-edit"></i></button>
            <button class="btn-icon" title="Excluir"><i class="fas fa-trash"></i></button>
          </td>
        </tr>
      `).join("")
    : `<tr><td colspan="6" style="text-align:center;">Nenhum cliente encontrado.</td></tr>`;
}

// Adicionar novo cliente
async function addNewClient() {
  const nome = prompt("Nome do Cliente:");
  const email = prompt("Email do Cliente:");
  const telefone = prompt("Telefone (opcional):");
  const endereco = prompt("Endereço (opcional):");
  const observacoes = prompt("Observações (opcional):");

  if (!nome || !email) {
    showNotification("Nome e Email são obrigatórios para cadastrar um cliente.", "warning");
    return;
  }

  try {
    const { data: newClient } = await axios.post(`${API_BASE_URL}/cliente`, {
      nome,
      email,
      telefone,
      endereco,
      observacoes,
    });

    showNotification(`Cliente ${newClient.nome} cadastrado com sucesso!`, "success");
    getClientes();
  } catch (error) {
    console.error("Erro ao cadastrar cliente:", error);
    showNotification("Erro ao cadastrar cliente.", "danger");
  }
}

// Sobrescreve handleAddNew para clientes
const defaultHandleAddNew = handleAddNew;
handleAddNew = section => {
  section === "clientes" ? addNewClient() : defaultHandleAddNew(section);
};
