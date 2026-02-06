import user from '../fixtures/user.json'
import LoginPage from '../pages/loginPage'
import InventoryPage from '../pages/InventoryPage'

const loginPage = new LoginPage ()
const inventoryPage = new InventoryPage ()

describe('Inventory - Saucedemo', () => { 

    // Não fiz ordenação de (A to Z) pois o filtro já esta este como padrão

    it('Inventory - Ordenação de produtos de (Z-A)', () => { 
        loginPage.acessarLoginPage()
        cy.get("[data-test='login-container']").should('be.visible') //assertion /login
        loginPage.realizarLogin(user.loginValido.user, user.loginValido.password)

        cy.get("[data-test='product-sort-container']").should('be.visible') //assertion /inventory
        inventoryPage.filtroOrdenarProdutos('za')
        cy.get('.inventory_item_name').first().should('have.text', 'Test.allTheThings() T-Shirt (Red)') // assertion para verificar se a alteração do filtro funcionou
    });

    it('Inventory - Ordenação de produtos de Price (low to high)', () => { 
        loginPage.acessarLoginPage()
        cy.get("[data-test='login-container']").should('be.visible') //assertion /login
        loginPage.realizarLogin(user.loginValido.user, user.loginValido.password)

        cy.get("[data-test='product-sort-container']").should('be.visible') //assertion /inventory
        inventoryPage.filtroOrdenarProdutos('lohi')
        cy.get('.inventory_item_name').first().should('have.text', 'Sauce Labs Onesie') // assertion para verificar se a alteração do filtro funcionou
    });

    it('Inventory - Ordenação de produtos de Price (high to low)', () => { 
        loginPage.acessarLoginPage()
        cy.get("[data-test='login-container']").should('be.visible') //assertion /login
        loginPage.realizarLogin(user.loginValido.user, user.loginValido.password)

        cy.get("[data-test='product-sort-container']").should('be.visible') //assertion /inventory
        inventoryPage.filtroOrdenarProdutos('hilo') // Selecionando valor dentro da <option>
        cy.get('.inventory_item_name').first().should('have.text', 'Sauce Labs Fleece Jacket') // assertion para verificar se a alteração do filtro funcionou
    });
    
}); 