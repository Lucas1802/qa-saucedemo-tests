class LoginPage {
    listaSeletores(){
        const seletores = {
            campoUsername: "[data-test='username']",
            campoPassword: "[data-test='password']",
            botaoLogin: "[data-test='login-button']",
        }
        return seletores
    }

    acessarLoginPage () {
        cy.visit('https://www.saucedemo.com/')
    }

    realizarLogin(username, password) {
        cy.get(this.listaSeletores().campoUsername).type(username)
        cy.get(this.listaSeletores().campoPassword).type(password)
        cy.get(this.listaSeletores().botaoLogin).click()
    }
}
export default LoginPage