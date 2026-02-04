class CheckoutStepTwoPage {
    listaSeletores(){
        const seletores = {
            botaoCancelStepTwo: "[data-test='cancel']",
            botaoFinalizarStepTwo: "[data-test='finish']",
        }
        return seletores
    }

    cancelarStepTwo () {
        cy.get(this.listaSeletores().botaoCancelStepTwo).click()
    }

    finalizarStepTwo () {
        cy.get(this.listaSeletores().botaoFinalizarStepTwo).click()
    }

}
export default CheckoutStepTwoPage