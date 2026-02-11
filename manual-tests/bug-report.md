### BUG_checkout_001

**Titulo:**
- Sistema permite que possa digitar Postal code de formato inválido

**Pré-condições:**
- Usuário logado no sistema
- Pelo menos um item no carrinho
- Página de checkout acessível

**Passo a passo:**
1. Inserir first name: `Jose`   
2. Inserir last name: `Silva`
3. Inserir postal code: `PostalCodeInvalido`
4. Clicar no botão **Continue**

**Resultado esperado:**
- Exibir alguma mensagem de erro dizendo que o formato utilizado no campo PostalCode está invalido


**Resultado encontrado**
- O sistema permite utilizar PostalCode mesmo em formato invalido

**Ambiente:**
- Windows
- Chrome v143
- QA

**Prioridade:**  
Alta

**Severidade:**  
Média

**Tipo**
- Funcional
- Validação

**Evidencia**

[▶️ Vídeo do bug](./evidencias/BUG_checkout_001.mp4)

---

### BUG_menu_001

**Titulo:**
- Sistema não redefine o site por completo ao clicar em Reset App State

**Pré-condições:**
- Usuário logado no sistema

**Passo a passo:**
1. Realizar login
2. Abrir o menu
3. Clicar em Reset App State  

**Resultado esperado:**
- Todas alterações feitas anteriormente são redefinidas ao padrão (itens do carrinho, estado visual dos produtos e filtros)

**Resultado encontrado**
- O sistema redefine apenas o carrinho, o filtro ainda mantem, e os itens ainda permanecem como adicionados na /inventory de forma visual (UI)

**Ambiente:**
- Windows
- Chrome v143
- QA

**Prioridade:**  
Baixa

**Severidade:**  
Baixa

**Tipo**
- Funcional
- Validação

**Evidencia**

[▶️ Vídeo do bug](./evidencias/BUG_menu_001.mp4)

---

### BUG_cart_001

**Titulo:**
- Sistema permite que o usuário va para aba de checkout com carrinho vazio

**Pré-condições:**
- Usuário logado no sistema
- Nenhum produto adicionado no carrinho

**Passo a passo:**
1. Realizar login
2. Abrir o carrinho
3. Clicar no botão **Checkout**  

**Resultado esperado:**
- Exibir mensagem de erro dizendo que tem que ter pelo menos um item no carrinho

**Resultado encontrado**
- O sistema permite que o usuário faça o checkout mesmo sem itens no carrinho

**Ambiente:**
- Windows
- Chrome v143
- QA

**Prioridade:**  
Baixa

**Severidade:**  
Baixa

**Tipo:**
- Funcional
- Validação

**Obs:**
- Comportamento pode indicar ausência de regra de negócio

**Evidencia**

[▶️ Vídeo do bug](./evidencias/BUG_cart_001.mp4)