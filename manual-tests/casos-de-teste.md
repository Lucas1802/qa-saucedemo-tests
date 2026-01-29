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