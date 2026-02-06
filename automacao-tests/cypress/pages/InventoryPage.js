class InventoryPage {
    listaSeletores(){
        const seletores = {
            selecionarProduto: "[data-test='add-to-cart-sauce-labs-backpack']",
            acessarCarrinho: "[data-test='shopping-cart-link']",
            botaoOrdenarProdutos: "[data-test='product-sort-container']",
        }
        return seletores
    }
    
    addProduto () {
        cy.get(this.listaSeletores().selecionarProduto).click()
    }

    accessarCarrinho () {
        cy.get(this.listaSeletores().acessarCarrinho).click()
    }

    filtroOrdenarProdutos (valorOrdenacao) {
        cy.get(this.listaSeletores().botaoOrdenarProdutos).select(valorOrdenacao)
    }
}
export default InventoryPage