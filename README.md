## 🧪 QA - SauceDemo Tests

### 📌 Sobre o Projeto

- Automação de testes E2E do sistema SauceDemo utilizando Cypress, aplicando padrão POM (Page Object Model), documentação de cenários e casos de teste manuais e automatizados.

### 🛠 Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Git
- GitHub
- POM (Page Object Model)

### 📂 Estrutura do Projeto

- cypress/e2e → Testes automatizados
- pages → Page Objects
- manual-tests → Casos de teste, cenários e bug reports
- Evidencias → Evidencias de BUG report
- fixtures → Massa de dados

### 🧩 Features testadas

- Login (válido, inválido e Bloqueado)
- Inventory (ordenação por nome e preço)
- Cart (remoção de itens)
- Checkout (fluxo completo válido, inválido e cancelamentos)
- Menu (logout e reset app state)
- Persistência de sessão
- Validação de campos
- Bloqueio de acesso após logout

### 🐞 Bugs encontrados

- Reset App State não redefine filtros
- Checkout permite postal code inválido
- Checkout permite avançar com carrinho vazio

### ▶️ Como rodar o projeto

```bash

npm install
npx cypress open

```

### 📊 Status do Projeto

- ✔️ 100% funcionalidades principais cobertas
- ✔️ Casos de teste documentados
- ✔️ Bugs documentados
- ✔️ Padrão POM aplicado

### 👨‍💻 Autor

- Lucas Mendes
- QA Engineer em formação