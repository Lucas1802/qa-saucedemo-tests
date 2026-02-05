class CheckoutStepOnePage {
    listaSeletores(){
        const seletores = {
            campoFirstName: "[data-test='firstName']",
            campoLastName: "[data-test='lastName']",
            campoPostalCode: "[data-test='postalCode']",
            botaoCancelCheckout: "[data-test='cancel']",
            botaoContinueStepTwo: "[data-test='continue']",
        }
        return seletores
    }

    preencherCheckoutValido (firstName, lastName, postalCode) {
        cy.get(this.listaSeletores().campoFirstName).type(firstName)
        cy.get(this.listaSeletores().campoLastName).type(lastName)+
        cy.get(this.listaSeletores().campoPostalCode).type(postalCode)
    }

    preencherCheckoutInvalido ({firstName = null, lastName = null, postalCode = null}) { // Desta forma consigo testar testes válidos e inválidos e controlar quais campos vão ser preenchidos
        if(firstName !== null) {
            cy.get(this.listaSeletores().campoFirstName).type(firstName)
        }
        if(lastName !== null) {
            cy.get(this.listaSeletores().campoLastName).type(lastName)
        }
        if(postalCode !== null) {
            cy.get(this.listaSeletores().campoPostalCode).type(postalCode)
        }
    }

    irParaStepTwo(){
        cy.get(this.listaSeletores().botaoContinueStepTwo).click()
    }

    cancelCheckoutStepOne () {
        cy.get(this.listaSeletores().botaoCancelCheckout).click()
    }
}
export default CheckoutStepOnePage