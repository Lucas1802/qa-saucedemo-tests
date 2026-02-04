class CheckoutCompletePage {
    listaSeletores(){
        const seletores = {
            botaoVoltarHome: "[data-test='back-to-products']"
        }
        return seletores
    }

    voltarParaHome () {
        cy.get(this.listaSeletores().botaoVoltarHome).click()
    }

}
export default CheckoutCompletePage