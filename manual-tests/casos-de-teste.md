# 📋 Casos de Teste – SauceDemo Tests

## Feature: Login

---

### CT_login_001 – Logando com usuário válido

**Pré-condições:**
- Usuário cadastrado
- Página de login acessível

**Passo a passo:**
1. Inserir Username: `standard_user`
2. Inserir Password: `secret_sauce`
3. Clicar no botão **Login**

**Resultado esperado:**
- Usuário loga com sucesso
- Usuário é redirecionado para a página inicial: `/inventory`

**Suite de teste:**  
Feature de Login

**Ambiente de teste:**
- Sistema: Windows  
- Navegador: Chrome v143  
- Ambiente: QA

**Status:**  
Passou

**Automatizado:**  
Sim – `login.cy.js`

**Prioridade:**  
Alta

**Severidade:**  
Crítica

---

### CT_login_002 – Logando com usuário inválido

**Pré-condições:**
- Usuário inválido
- Página de login acessível

**Passo a passo:**
1. Inserir Username inválido: `teste_user`
2. Inserir Password: `secret_sauce`
3. Clicar no botão **Login**

**Resultado esperado:**
- Exibir mensagem de erro:  
  `Epic sadface: Username and password do not match any user in this service`

**Suite de teste:**  
Feature de Login

**Ambiente de teste:**
- Sistema: Windows  
- Navegador: Chrome v143  
- Ambiente: QA

**Status:**  
Passou

**Automatizado:**  
Sim – `login.cy.js`

**Prioridade:**  
Alta

**Severidade:**  
Crítica

---

### CT_login_003 – Logando com usuário bloqueado

**Pré-condições:**
- Usuário com login bloqueado
- Página de login acessível

**Passo a passo:**
1. Inserir Username bloqueado: `locked_out_user`
2. Inserir Password: `secret_sauce`
3. Clicar no botão **Login**

**Resultado esperado:**
- Exibir mensagem de erro:  
  `Epic sadface: Sorry, this user has been locked out.`

**Suite de teste:**  
Feature de Login

**Ambiente de teste:**
- Sistema: Windows  
- Navegador: Chrome v143  
- Ambiente: QA

**Status:**  
Passou

**Automatizado:**  
Sim – `login.cy.js`

**Prioridade:**  
Alta

**Severidade:**  
Crítica

---

### CT_login_004 – Logando com campos vazios

**Pré-condições:**
- Campos em branco
- Página de login acessível

**Passo a passo:**
1. Deixar Username em branco
2. Deixar Password em branco
3. Clicar no botão **Login**

**Resultado esperado:**
- Exibir mensagem de erro:  
  `Epic sadface: Username is required`

**Suite de teste:**  
Feature de Login

**Ambiente de teste:**
- Sistema: Windows  
- Navegador: Chrome v143  
- Ambiente: QA

**Status:**  
Passou

**Automatizado:**  
Não

**Prioridade:**  
Alta

**Severidade:**  
Crítica

---

### CT_login_005 – Logando apenas com campo Username preenchido

**Pré-condições:**
- Campo Password em branco
- Página de login acessível

**Passo a passo:**
1. Inserir Username: `standard_user`
2. Deixar Password em branco
3. Clicar no botão **Login**

**Resultado esperado:**
- Exibir mensagem de erro:  
  `Epic sadface: Password is required`

**Suite de teste:**  
Feature de Login

**Ambiente de teste:**
- Sistema: Windows  
- Navegador: Chrome v143  
- Ambiente: QA

**Status:**  
Passou

**Automatizado:**  
Não

**Prioridade:**  
Alta

**Severidade:**  
Crítica

---

### CT_login_006 – Logando apenas com campo Password preenchido

**Pré-condições:**
- Campo Username em branco
- Página de login acessível

**Passo a passo:**
1. Deixar Username em branco
2. Inserir Password: `secret_sauce`
3. Clicar no botão **Login**

**Resultado esperado:**
- Exibir mensagem de erro:  
  `Epic sadface: Username is required`

**Suite de teste:**  
Feature de Login

**Ambiente de teste:**
- Sistema: Windows  
- Navegador: Chrome v143  
- Ambiente: QA

**Status:**  
Passou

**Automatizado:**  
Não

**Prioridade:**  
Alta

**Severidade:**  
Crítica

---

### CT_checkout_001 – Checkout com dados válidos

**Pré-condições:**
- Usuario logado no sistema
- Pelo menos um item no carrinho
- Página de checkout acessível

**Passo a passo:**
1. Inserir first name: `João`
2. Inserir last name: `Leite`
3. Inserir postal code: `12345678`
4. Clicar no botão **Continue**
5. Clicar no botão **Finish**

**Resultado esperado:**
- Exibir mensagem de sucesso:  
  `Thank you for your order!`
- Usuário é redirecionado para pagina de checkout completo `/checkout-complete`

**Suite de teste:**  
Feature de Checkout

**Ambiente de teste:**
- Sistema: Windows  
- Navegador: Chrome v143  
- Ambiente: QA

**Status:**  
Passou

**Automatizado:**  
Não

**Prioridade:**  
Alta

**Severidade:**  
Crítica

---

### CT_checkout_002 – Checkout sem dados obrigatórios

**Pré-condições:**
- Usuário logado no sistema
- Pelo menos um item no carrinho
- Página de checkout acessível

**Passo a passo:**
1. Deixar first name em branco
2. Deixar last name em branco
3. Deixar postal code em branco
4. Clicar no botão **Continue**

**Resultado esperado:**
- Exibir mensagem de erro:  
  `Error: First Name is required`

**Suite de teste:**  
Feature de Checkout

**Ambiente de teste:**
- Sistema: Windows  
- Navegador: Chrome v143  
- Ambiente: QA

**Status:**  
Passou

**Automatizado:**  
Não

**Prioridade:**  
Alta

**Severidade:**  
Crítica

---

### CT_checkout_003 – Usuário cancela checkout (step-one)

**Pré-condições:**
- Usuário logado no sistema
- Pelo menos um item no carrinho
- Página de checkout acessível

**Passo a passo:**
1. Inserir first name: `João`
2. Inserir last name: `Leite`
3. Inserir postal code: `12345678`
4. Clicar no botão **Cancel**

**Resultado esperado:**
- Usuário é redirecionado para o carrinho `/cart`

**Suite de teste:**  
Feature de Checkout

**Ambiente de teste:**
- Sistema: Windows  
- Navegador: Chrome v143  
- Ambiente: QA

**Status:**  
Passou

**Automatizado:**  
Não

**Prioridade:**  
Alta

**Severidade:**  
Crítica

---

### CT_checkout_004 – Usuário cancela compra no step-two

**Pré-condições:**
- Usuário logado no sistema
- Pelo menos um item no carrinho
- Página de checkout acessível

**Passo a passo:**
1. Inserir first name: `João`
2. Inserir last name: `Leite`
3. Inserir postal code: `12345678`
4. Clicar no botão **Continue**
5. Clicar no botão **Cancel**

**Resultado esperado:**
- Usuário é redirecionado para a pagina incial `/inventory`

**Suite de teste:**  
Feature de Checkout

**Ambiente de teste:**
- Sistema: Windows  
- Navegador: Chrome v143  
- Ambiente: QA

**Status:**  
Passou

**Automatizado:**  
Não

**Prioridade:**  
Alta

**Severidade:**  
Crítica

---

### CT_checkout_005 – Validar informações do carrinho com step-two

**Pré-condições:**
- Usuário logado no sistema
- Pelo menos um item no carrinho
- Página de checkout acessível

**Passo a passo:**
1. Um ou mais produtos no carrinho Ex: `Backpack`
2. Clicar em **Checkout**
3. Inserir first name: `João`
4. Inserir last name: `Leite`
5. Inserir postal code: `12345678`
6. Clicar no botão **Continue**
7. Verificar itens Ex: `Backpack`

**Resultado esperado:**
- As informações do step-two correspodem com as mesmas do carrinho de compras

**Suite de teste:**  
Feature de Checkout

**Ambiente de teste:**
- Sistema: Windows  
- Navegador: Chrome v143  
- Ambiente: QA

**Status:**  
Passou

**Automatizado:**  
Não

**Prioridade:**  
Alta

**Severidade:**  
Crítica

---

### CT_checkout_006 – Checkout apenas com First Name em branco

**Pré-condições:**
- Usuário logado no sistema
- Pelo menos um item no carrinho
- Página de checkout acessível

**Passo a passo:**
1. Deixar first name em branco
2. Inserir last name: `Leite`
3. Inserir postal code: `12345678`
4. Clicar no botão **Continue**

**Resultado esperado:**
- Exibir mensagem de erro:  
  `Error: First Name is required`

**Suite de teste:**  
Feature de Checkout

**Ambiente de teste:**
- Sistema: Windows  
- Navegador: Chrome v143  
- Ambiente: QA

**Status:**  
Passou

**Automatizado:**  
Não

**Prioridade:**  
Alta

**Severidade:**  
Crítica

---

### CT_checkout_007 – Checkout apenas com last Name em branco

**Pré-condições:**
- Usuário logado no sistema
- Pelo menos um item no carrinho
- Página de checkout acessível

**Passo a passo:**
1. Inserir first name: `João`
2. Deixar last name em branco
3. Inserir postal code: `12345678`
4. Clicar no botão **Continue**

**Resultado esperado:**
- Exibir mensagem de erro:  
  `Error: Last Name is required`

**Suite de teste:**  
Feature de Checkout

**Ambiente de teste:**
- Sistema: Windows  
- Navegador: Chrome v143  
- Ambiente: QA

**Status:**  
Passou

**Automatizado:**  
Não

**Prioridade:**  
Alta

**Severidade:**  
Crítica

---

### CT_checkout_008 – Checkout apenas com postal code em branco

**Pré-condições:**
- Usuário logado no sistema
- Pelo menos um item no carrinho
- Página de checkout acessível

**Passo a passo:**
1. Inserir first name: `João`
2. Inserir last name: `Leite`
3. Deixar postal code em branco
4. Clicar no botão **Continue**

**Resultado esperado:**
- Exibir mensagem de erro:  
  `Error: Postal Code is required`

**Suite de teste:**  
Feature de Checkout

**Ambiente de teste:**
- Sistema: Windows  
- Navegador: Chrome v143  
- Ambiente: QA

**Status:**  
Passou

**Automatizado:**  
Não

**Prioridade:**  
Alta

**Severidade:**  
Crítica

---

### CT_checkout_009 – Validar se campo de postal code aceita apenas numeros

**Pré-condições:**
- Usuário logado no sistema
- Pelo menos um item no carrinho
- Página de checkout acessível

**Passo a passo:**
1. Inserir first name: `João`
2. Inserir last name: `Leite`
3. Inserir postal code: `testePostalCode`
4. Clicar no botão **Continue**

**Resultado esperado:**
- Exibir mensagem de erro dizendo que formato esta errado

**Resultado encontrado:**
- Não teve validação de formato de Cep e o teste passou sem nenhuma obstrução

**Suite de teste:**  
Feature de Checkout

**Ambiente de teste:**
- Sistema: Windows  
- Navegador: Chrome v143  
- Ambiente: QA

**Status:**  
Falhou

**Automatizado:**  
Não

**Prioridade:**  
Alta

**Severidade:**  
Crítica

**Observações:**
- O sistema não possui validação de formato para Postal Code

---