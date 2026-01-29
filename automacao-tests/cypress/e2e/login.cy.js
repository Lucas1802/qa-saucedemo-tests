import user from '../fixtures/user.json'
import LoginPage from '../pages/loginPage'

const loginPage = new LoginPage ()

describe('Login - Saucedemo', () => { 
    
    it('login - Sucesso', () => {
        loginPage.acessarLoginPage()
        loginPage.realizarLogin(user.loginValido.user, user.loginValido.password)
        cy.get("[data-test='shopping-cart-link']").should('be.visible')
    });
    //deixar os assertions fora do POM
    it('Login - invalido', () => {
        loginPage.acessarLoginPage()
        loginPage.realizarLogin(user.loginInvalido.user, user.loginInvalido.password)
        cy.get('[data-test="error"]').should('be.visible')
    });

    it('Login - Bloqueado', () => { 
        loginPage.acessarLoginPage()
        loginPage.realizarLogin(user.loginBloqueado.user, user.loginBloqueado.password)
        cy.get("[data-test='error']").should('be.visible')
    });
});