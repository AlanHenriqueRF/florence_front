# Florence Dashboard - Painel Gerencial

Um painel gerencial elegante e funcional para a loja de joias Florence, desenvolvido em HTML, CSS e JavaScript puro.

## 🎯 Características Principais

- **Design Elegante**: Baseado na identidade visual da marca Florence
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **HTML/CSS Puro**: Sem dependências de frameworks, fácil de hospedar
- **Funcionalidades Completas**: Gestão de produtos, vendas, clientes e estoque

## 📁 Estrutura do Projeto

```
florence-dashboard/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── florence-logo.jpeg  # Logo da marca
└── README.md          # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Servidor Local Simples
1. Extraia os arquivos em uma pasta
2. Abra o terminal na pasta do projeto
3. Execute: `python3 -m http.server 8080` (ou `python -m http.server 8080`)
4. Acesse: `http://localhost:8080`

### Opção 2: Abrir Diretamente no Navegador
1. Extraia os arquivos em uma pasta
2. Clique duas vezes no arquivo `index.html`
3. O painel abrirá no seu navegador padrão

### Opção 3: Hospedagem Web
1. Faça upload de todos os arquivos para seu servidor web
2. Acesse através do seu domínio

## 🌐 Hospedagem Recomendada (Gratuita/Barata)

- **Netlify**: Arraste a pasta e publique instantaneamente
- **Vercel**: Deploy gratuito com Git
- **GitHub Pages**: Hospedagem gratuita via GitHub
- **Firebase Hosting**: Plano gratuito generoso
- **Surge.sh**: Deploy simples via linha de comando

## 📱 Funcionalidades Implementadas

### Dashboard Principal
- Estatísticas gerais (produtos, vendas, clientes, faturamento)
- Vendas recentes com status
- Alertas de estoque baixo
- Métricas visuais

### Gestão de Produtos
- Listagem completa de produtos
- Busca e filtros por categoria/status
- Controle de estoque visual
- Ações: visualizar, editar, excluir

### Gestão de Vendas
- Histórico de vendas
- Status de pagamento
- Filtros por data e status
- Ações: visualizar, imprimir

### Gestão de Clientes
- Cadastro de clientes
- Busca por nome/email
- Histórico de compras
- Informações de contato

### Categorias
- Visualização em grid
- Contadores por categoria
- Gestão de categorias

### Controle de Estoque
- Alertas de estoque baixo
- Histórico de movimentações
- Status visuais coloridos

## 🎨 Paleta de Cores (Marca Florence)

- **Fundo Principal**: #F8EFEF (Rosa claro)
- **Cor de Destaque**: #A38B5D (Dourado)
- **Texto**: #666666 (Cinza suave)
- **Sucesso**: #4CAF50 (Verde)
- **Alerta**: #FFC107 (Amarelo)
- **Erro**: #F44336 (Vermelho)

## 📱 Responsividade

- **Desktop**: Layout completo com sidebar fixa
- **Tablet**: Adaptação dos elementos para telas médias
- **Mobile**: Menu colapsável e layout otimizado

## 🔧 Personalização

### Alterar Cores
Edite as variáveis CSS no início do arquivo `styles.css`:

```css
:root {
    --florence-bg: #F8EFEF;
    --florence-accent: #A38B5D;
    --florence-text: #666666;
    /* ... outras variáveis */
}
```

### Adicionar Novos Dados
Os dados são mockados no arquivo `script.js`. Para conectar com um backend real, substitua os arrays de dados por chamadas de API.

### Modificar Layout
O layout é baseado em CSS Grid e Flexbox. Edite o arquivo `styles.css` para ajustar o design conforme necessário.

## 🌟 Vantagens desta Implementação

- ✅ **Rápido**: Carregamento instantâneo
- ✅ **Leve**: Apenas ~50KB total
- ✅ **Compatível**: Funciona em qualquer navegador
- ✅ **Barato**: Hospedagem gratuita/muito barata
- ✅ **Simples**: Fácil de modificar e manter
- ✅ **Profissional**: Design elegante e funcional

## 📞 Suporte

Este painel foi desenvolvido especificamente para a Florence, seguindo as regras de negócio baseadas no banco de dados fornecido. Para modificações ou dúvidas, consulte a documentação dos arquivos ou entre em contato.

---

**Florence Dashboard** - Desenvolvido com ❤️ para gestão elegante e eficiente.

