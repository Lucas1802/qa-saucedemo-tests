class InventoryPage {
    listaSeletores(){
        const seletores = {
            selecionarProduto: "[data-test='add-to-cart-sauce-labs-backpack']",
            acessarCarrinho: "[data-test='shopping-cart-link']",
        }
        return seletores
    }
    
    addProduto () {
        cy.get(this.listaSeletores().selecionarProduto).click()
    }

    accessarCarrinho () {
        cy.get(this.listaSeletores().acessarCarrinho).click()
    }
}
export default InventoryPage