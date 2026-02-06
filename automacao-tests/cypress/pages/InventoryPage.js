class InventoryPage {
    listaSeletores(){
        const seletores = {
            selecionarProduto_1: "[data-test='add-to-cart-sauce-labs-backpack']",
            selecionarProduto_2: "[data-test='add-to-cart-sauce-labs-bike-light']",
            selecionarProduto_3: "[data-test='add-to-cart-sauce-labs-bolt-t-shirt']",
            acessarCarrinho: "[data-test='shopping-cart-link']",
            botaoOrdenarProdutos: "[data-test='product-sort-container']",
        }
        return seletores
    }
    
    addProduto () {
        cy.get(this.listaSeletores().selecionarProduto_1).click()
    }

    addOutrosProdutos () {
        cy.get(this.listaSeletores().selecionarProduto_1).click()
        cy.get(this.listaSeletores().selecionarProduto_2).click()
        cy.get(this.listaSeletores().selecionarProduto_3).click()
    }

    accessarCarrinho () {
        cy.get(this.listaSeletores().acessarCarrinho).click()
    }

    filtroOrdenarProdutos (valorOrdenacao) {
        cy.get(this.listaSeletores().botaoOrdenarProdutos).select(valorOrdenacao)
    }
}
export default InventoryPage