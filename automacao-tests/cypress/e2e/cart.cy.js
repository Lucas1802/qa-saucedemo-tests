import user from '../fixtures/user.json'
import LoginPage from '../pages/loginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/cartPage'

const loginPage = new LoginPage ()
const inventoryPage = new InventoryPage ()
const cartPage = new CartPage ()

describe('Cart - Saucedemo', () => { 
    
    it('Cart - Removendo item do carrinho', () => {

        //deixar os assertions fora do POM
        loginPage.acessarLoginPage()
        cy.get("[data-test='login-container']").should('be.visible') //assertion /login
        loginPage.realizarLogin(user.loginValido.user, user.loginValido.password)

        cy.get("[data-test='product-sort-container']").should('be.visible') //assertion /inventory
        inventoryPage.addProduto()
        inventoryPage.accessarCarrinho()

        cy.get("[data-test='inventory-item']").should('contain', 'Sauce Labs Backpack') //assertion /cart
        cartPage.removerProduto()
        cy.get("[data-test='remove-sauce-labs-backpack']").should('not.exist')
    });

    it.only('Cart - Removendo ultimo item do carrinho', () => {

        //deixar os assertions fora do POM
        loginPage.acessarLoginPage()
        cy.get("[data-test='login-container']").should('be.visible') //assertion /login
        loginPage.realizarLogin(user.loginValido.user, user.loginValido.password)

        cy.get("[data-test='product-sort-container']").should('be.visible') //assertion /inventory
        inventoryPage.addOutrosProdutos()
        inventoryPage.accessarCarrinho()

        cy.get("[data-test='inventory-item']").should('contain', 'Sauce Labs Backpack') //assertion /cart
        cartPage.removerUltimoProduto()
        cy.get("[data-test='remove-sauce-labs-bolt-t-shirt']").should('not.exist')
        
    });
}); 