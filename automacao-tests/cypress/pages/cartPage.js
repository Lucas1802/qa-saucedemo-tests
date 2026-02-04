class CartPage {
    listaSeletores(){
        const seletores = {
            botaoRemoverProduto: "[data-test='remove-sauce-labs-backpack']",
            botaoCheckout: "[data-test='checkout']"
        }
        return seletores
    }

    removerProduto () {
        cy.get(this.listaSeletores().botaoRemoverProduto).click()
    }

    iniciarCheckout () {
        cy.get(this.listaSeletores().botaoCheckout).click()
    }
}
export default CartPage