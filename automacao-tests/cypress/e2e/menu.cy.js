import user from '../fixtures/user.json'
import LoginPage from '../pages/loginPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage ()
const menuPage = new MenuPage ()

describe('Checkout - Saucedemo', () => { 

it('Checkout - Logout', () => { 
        loginPage.acessarLoginPage()
        cy.get("[data-test='login-container']").should('be.visible') //assertion /login
        loginPage.realizarLogin(user.loginValido.user, user.loginValido.password)

        cy.get("[data-test='product-sort-container']").should('be.visible') //assertion /inventory
        menuPage.menuLogoutSite()
        cy.get("[data-test='login-container']").should('be.visible') //assertion /Volta para o login
    });

}); 