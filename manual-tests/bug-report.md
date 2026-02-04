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
