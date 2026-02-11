class CartPage {
    listaSeletores(){
        const seletores = {
            botaoRemoverProduto: "[data-test='remove-sauce-labs-backpack']",
            botaoCheckout: "[data-test='checkout']",
            botaoRemoverUltimoProduto: "[data-test='remove-sauce-labs-bolt-t-shirt']",
        }
        return seletores
    }

    removerProduto () {
        cy.get(this.listaSeletores().botaoRemoverProduto).click()
    }

    removerUltimoProduto () {
        cy.get(this.listaSeletores().botaoRemoverUltimoProduto).click()
    }

    iniciarCheckout () {
        cy.get(this.listaSeletores().botaoCheckout).click()
    }
}
export default CartPage