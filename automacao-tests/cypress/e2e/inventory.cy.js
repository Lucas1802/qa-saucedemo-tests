import user from '../fixtures/user.json'
import LoginPage from '../pages/loginPage'
import InventoryPage from '../pages/InventoryPage'

const loginPage = new LoginPage ()
const inventoryPage = new InventoryPage ()

describe('Inventory - Saucedemo', () => { 

    it.only('Inventory - Ordenação de produtos de (Z-A)', () => { 
        loginPage.acessarLoginPage()
        cy.get("[data-test='login-container']").should('be.visible') //assertion /login
        loginPage.realizarLogin(user.loginValido.user, user.loginValido.password)

        cy.get("[data-test='product-sort-container']").should('be.visible') //assertion /inventory
        inventoryPage.filtroOrdenarProdutos()
    });

    it('Inventory - Ordenação de produtos de Price (low to high)', () => { 
        loginPage.acessarLoginPage()
        cy.get("[data-test='login-container']").should('be.visible') //assertion /login
        loginPage.realizarLogin(user.loginValido.user, user.loginValido.password)

        cy.get("[data-test='product-sort-container']").should('be.visible') //assertion /inventory
        inventoryPage.filtroOrdenarProdutos()
    });

    it('Inventory - Ordenação de produtos de Price (high to low)', () => { 
        loginPage.acessarLoginPage()
        cy.get("[data-test='login-container']").should('be.visible') //assertion /login
        loginPage.realizarLogin(user.loginValido.user, user.loginValido.password)

        cy.get("[data-test='product-sort-container']").should('be.visible') //assertion /inventory
        inventoryPage.filtroOrdenarProdutos()
    });
    
}); 