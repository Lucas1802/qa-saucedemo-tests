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
Sim - `checkout.cy.js`

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

### CT_menu_001 – Entrar no menu e fazer logout do usuario

**Pré-condições:**
- Usuário logado no sistema

**Passo a passo:**
1. Realizar login
2. Abrir o menu
3. Clicar em logout

**Resultado esperado:**
- Usuário é redirecionado para aba de login novamente

**Suite de teste:**  
Feature de menu

**Ambiente de teste:**
- Sistema: Windows  
- Navegador: Chrome v143  
- Ambiente: QA

**Status:**  
Passou

**Automatizado:**  
Sim

**Prioridade:**  
Média

**Severidade:**  
Média

---

### CT_menu_002 – Entrar no menu e fazer reset-app-state do site

**Pré-condições:**
- Usuário logado no sistema

**Passo a passo:**
1. Realizar login
2. Abrir o menu
3. Clicar em Reset App State

**Resultado esperado:**
- Todas alterações feitas anteriormente são redefinidas ao padrão (itens do carrinho, estado visual dos produtos e filtros)

**Resultado encontrado:**
- O sistema redefine apenas o carrinho, o filtro ainda mantem, e os itens ainda permanecem como adicionados na /inventory de forma visual (UI)

**Suite de teste:**  
Feature de menu

**Ambiente de teste:**
- Sistema: Windows  
- Navegador: Chrome v143  
- Ambiente: QA

**Status:**  
Falhou

**Automatizado:**  
Não

**Prioridade:**  
Baixa

**Severidade:**  
Baixa

---

### CT_inventory_001 – Ordenar produtos por nome de (Z to A) 

**Pré-condições:** 
- Usuário logado no sistema 
- Página de Inventory carregada 
- Produtos visiveis 

**Passo a passo:** 
1. Realizar login 
2. Clicar no filtro de ordenar 
3. Selecionar a opção de name (Z to A) 

**Resultado esperado:** 
- Sistema ordena os produtos da página Inventory em ordem alfabética decrescente (Z to A)

**Suite de teste:** 
Feature de Inventory 

**Ambiente de teste:** 
- Sistema: Windows 
- Navegador: Chrome v143 
- Ambiente: QA 

**Status:** 
Passou 

**Automatizado:** 
Sim 

**Prioridade:** 
Média 

**Severidade:** 
Média 

--- 

### CT_inventory_002 – Ordenar produtos por preço de (high to low) 

**Pré-condições:** 
- Usuário logado no sistema 
- Página de Inventory carregada 
- Produtos visiveis 

**Passo a passo:** 
1. Realizar login 
2. Clicar no filtro de ordenar 
3. Selecionar a opção de price (high to low) 

**Resultado esperado:**
- Sistema ordena os produtos da página Inventory do maior para o menor valor

**Suite de teste:** 
Feature de Inventory 

**Ambiente de teste:** 
- Sistema: Windows 
- Navegador: Chrome v143 
- Ambiente: QA 

**Status:** 
Passou 

**Automatizado:** 
Sim 

**Prioridade:** 
Média 

**Severidade:** 
Média

---

### CT_inventory_003 – Ordenar produtos por preço de (low to high)  

**Pré-condições:** 
- Usuário logado no sistema 
- Página de Inventory carregada 
- Produtos visiveis 

**Passo a passo:** 
1. Realizar login 
2. Clicar no filtro de ordenar 
3. Selecionar a opção de price (low to high) 

**Resultado esperado:** 
- Sistema ordena os produtos da página Inventory do menor para o maior valor

**Suite de teste:** 
Feature de Inventory 

**Ambiente de teste:** 
- Sistema: Windows 
- Navegador: Chrome v143 
- Ambiente: QA 

**Status:** 
Passou 

**Automatizado:** 
Sim 

**Prioridade:** 
Média 

**Severidade:** 
Média

---

### CT_cart_001 – Removendo item do carrinho /cart 

**Pré-condições:** 
- Usuário logado no sistema 
- Pelo menos um item adionado ao carrinho
- Página de cart carregada 

**Passo a passo:** 
1. Realizar login
2. Adicionar produto no carrinho 
3. Abrir o carrinho
4. Remover o produto 

**Resultado esperado:** 
- Sistema remove produto que tinha sido adicionado ao carrinho, e produto não aparece mais na lista

**Suite de teste:** 
Feature de Cart

**Ambiente de teste:** 
- Sistema: Windows 
- Navegador: Chrome v143 
- Ambiente: QA 

**Status:** 
Passou 

**Automatizado:** 
Sim 

**Prioridade:** 
Média 

**Severidade:** 
Média

---

### CT_cart_002 – Removendo ultimo item do carrinho /cart 

**Pré-condições:** 
- Usuário logado no sistema 
- Pelo menos dois item adionado ao carrinho
- Página de cart carregada 

**Passo a passo:** 
1. Realizar login
2. Adicionar produtos no carrinho 
3. Abrir o carrinho
4. Remover o ultimo produto

**Resultado esperado:** 
- Sistema remove o ultimo produto que tinha sido adicionado ao carrinho, e produto não aparece mais na lista

**Suite de teste:** 
Feature de Cart

**Ambiente de teste:** 
- Sistema: Windows 
- Navegador: Chrome v143 
- Ambiente: QA 

**Status:** 
Passou 

**Automatizado:** 
Sim 

**Prioridade:** 
Média 

**Severidade:** 
Média

---

### CT_cart_003 – Voltando para pagina de produtos pelo botão `Continue Shopping` no carrinho

**Pré-condições:** 
- Usuário logado no sistema 
- Pelo menos um item adionado ao carrinho

**Passo a passo:** 
1. Realizar login
2. Adicionar produtos no carrinho
3. Abrir o carrinho
4. Clicar no botão **Continue Shopping** 

**Resultado esperado:** 
- Usuário retorna para pagina de produtos `/inventory`

**Suite de teste:** 
Feature de Cart

**Ambiente de teste:** 
- Sistema: Windows 
- Navegador: Chrome v143 
- Ambiente: QA 

**Status:**
Passou 

**Automatizado:**
Não

**Prioridade:**
Baixa

**Severidade:**
Baixa

---

### CT_cart_004 – Tentando avançar para checkout com carrinho vazio

**Pré-condições:** 
- Usuário logado no sistema
- Nenhum produto adicionado no carrinho

**Passo a passo:** 
1. Realizar login
2. Abrir o carrinho
3. Clicar no botão **Checkout** 

**Resultado esperado:** 
- Exibir mensagem de erro dizendo que tem que ter pelo menos 1 item no carrinho

**Resultado encontrado:**
- O sistema permite que o usuário faça o checkout mesmo sem itens no carrinho

**Suite de teste:**
Feature de Cart

**Ambiente de teste:** 
- Sistema: Windows 
- Navegador: Chrome v143 
- Ambiente: QA 

**Status:**
Falhou 

**Automatizado:**
Não

**Prioridade:**
Baixa

**Severidade:**
Baixa

---

### CT_persistencia_sessao_001 – Usuário atualiza a página após digitar o login 

**Pré-condições:** 
- Página de login acessivel 

**Passo a passo:** 
1. Inserir Username: `standard_user`
2. Inserir Password: `secret_sauce`
3. Dar refresh na página

**Resultado esperado:** 
- Username e Password ficam em branco após o refresh
- Usuário permanece na tela de login

**Suite de teste:**
Feature de Persistência de Sessão

**Ambiente de teste:** 
- Sistema: Windows 
- Navegador: Chrome v143 
- Ambiente: QA 

**Status:**
Passou 

**Automatizado:**
Não

**Prioridade:**
Baixa

**Severidade:**
Baixa

---

### CT_persistencia_sessao_002 – Usuário atualiza a página `/inventory` após adicionar produto ao carrinho 

**Pré-condições:** 
- Usuário logado no sistema 
- Pelo menos um item adionado ao carrinho

**Passo a passo:** 
1. Realizar login
2. Adicionar produtos no carrinho
3. Dar refresh na página

**Resultado esperado:** 
- Itens adicionados ainda permanecem no carrinho
- Badge mantém o valor
- Produto ainda fica marcado como `remove`

**Suite de teste:**
Feature de Persistência de Sessão

**Ambiente de teste:** 
- Sistema: Windows 
- Navegador: Chrome v143 
- Ambiente: QA 

**Status:**
Passou 

**Automatizado:**
Não

**Prioridade:**
Baixa

**Severidade:**
Baixa

---

### CT_persistencia_sessao_003 – Usuário adiciona produto ao carrinho e atualiza a página `/cart`

**Pré-condições:** 
- Usuário logado no sistema 
- Pelo menos um item adionado ao carrinho

**Passo a passo:** 
1. Realizar login
2. Adicionar produtos no carrinho
3. Entra no carrinho `/cart`
4. Da refresh na página

**Resultado esperado:** 
- Itens adicionados ainda permanecem no carrinho

**Suite de teste:**
Feature de Persistência de Sessão

**Ambiente de teste:** 
- Sistema: Windows 
- Navegador: Chrome v143 
- Ambiente: QA 

**Status:**
Passou 

**Automatizado:**
Não

**Prioridade:**
Baixa

**Severidade:**
Baixa

---

### CT_persistencia_sessao_004 – Usuário faz logout e tenta voltar usando botão do navegador

**Pré-condições:** 
- Usuário logado no sistema 
- Botão de voltar do browser acessivel

**Passo a passo:** 
1. Realizar login
2. Clicar no menu
3. Clicar em logout
4. Clicar no botão de voltar do browser

**Resultado esperado:** 
- Sistema exibi mensagem de erro:  
  `Epic sadface: You can only access '/inventory.html' when you are logged in.`
- Usuário permanece na tela de login 

**Suite de teste:**
Feature de Persistência de Sessão

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
Alta

---