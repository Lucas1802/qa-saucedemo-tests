import user from '../fixtures/user.json'
import LoginPage from '../pages/loginPage'
import InventoryPage from '../pages/InventoryPage'
import MenuPage from '../pages/menuPage'


const loginPage = new LoginPage ()
const inventoryPage = new InventoryPage ()
const menuPage = new MenuPage ()

describe('Persistencia de Sessao - Saucedemo', () => { 
    
    it('Deve manter estado após refresh na inventory', () => {

        //deixar os assertions fora do POM
        loginPage.acessarLoginPage()
        cy.get("[data-test='login-container']").should('be.visible') //assertion /login
        loginPage.realizarLogin(user.loginValido.user, user.loginValido.password)

        cy.get("[data-test='product-sort-container']").should('be.visible') //assertion /inventory
        inventoryPage.addProduto()

        cy.reload()
        cy.get("[data-test='inventory-item']").should('contain', 'Sauce Labs Backpack') //assertion /cart
        cy.get("[data-test='remove-sauce-labs-backpack']").should('contain', 'Remove')
                
    });

    //deixar os assertions fora do POM
    it('Não deve permitir acesso após logout e voltar', () => {
        loginPage.acessarLoginPage()
        cy.get("[data-test='login-container']").should('be.visible') //assertion /login
        loginPage.realizarLogin(user.loginValido.user, user.loginValido.password)

        cy.get("[data-test='product-sort-container']").should('be.visible') //assertion /inventory
        menuPage.menuLogoutSite()
        cy.go('back')
        cy.get("[data-test='login-container']").should('be.visible') //assertion /login
        cy.get("[data-test='error']").should('be.visible').and('contain', "Epic sadface: You can only access '/inventory.html' when you are logged in.") // assertion /login de erro apos tentar voltar com botao do navegador
    });
}); 