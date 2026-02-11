# 📋 Cenários

## Projeto: SauceDemo Tests

---

## Feature: Login

## Objetivos
- Cenários que existem para garantir que o login não comprometa o acesso ao sistema

## Cenários
- Usuário consegue acessar o sistema com credenciais validas
- Usuário não consegue acessar o sistema por estar com credenciais invalidas
- Sistema não deixa realizar o login pois o usuário esta bloqueado
- Sistema informa erro pois os campos obrigatórios estão em branco

---

## Feature: Checkout

## Objetivos
- Garantindo a validação e funcionamento de Checkout de produtos

## Cenários
- Usuário consegue finalizar a compra com sucesso
- Sistema informa erro após tentativa de checkout sem dados obrigatórios
- Sistema informa erro após informações incompletas
- Usuário cancela checkout antes de finalizar
- Usuário retorna ao fluxo anterior sem concluir a compra
- Sistema retorna as mesmas informações do carrinho no resumo final
- Sistema informa erro após usuario digitar formato invalido de Postal code

---

## Feature: Menu

## Objetivos
- Validar o funcionamento do menu e o impacto das ações

## Cenários
- Usuário consegue encerrar a sessão através do menu (logout)
- Usuário redefine a aplicação através do Reset App State

---

## Feature: Inventory 

## Objetivos 
- Validar o funcionamento da ordenação de produtos por nome e por preço 

## Cenários 
- Usuário consegue ordenar produtos por nome
- Usuário consegue ordenar produtos por preço

---

## Feature: Cart 

## Objetivos 
- Validar o funcionamento do carrinho ao remover produto que estava no carrinho

## Cenários 
- Usuário consegue remover produto que estava no carrinho
- Usuário consegue remover o ultimo adicionado do carrinho
- Usuário consegue retornar a comprar mesmo depois de ter ido ao carrinho
- Validar comportamento do sistema ao tentar avançar para checkout com carrinho vazio


