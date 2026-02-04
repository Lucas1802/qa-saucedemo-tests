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

    preencherCheckout ({firstName = null, lastName = null, postalCode = null}) {
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