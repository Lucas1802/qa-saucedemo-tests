class MenuPage {
    listaSeletores(){
        const seletores = {
            botaoMenu: ".bm-burger-button",
            logoutSite: "[data-test='logout-sidebar-link']",
        }
        return seletores
    }

    menuLogoutSite () {
        cy.get(this.listaSeletores().botaoMenu).click()
        cy.get(this.listaSeletores().logoutSite).click()
    }
}
export default MenuPage