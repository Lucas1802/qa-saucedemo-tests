import user from '../fixtures/user.json'
import LoginPage from '../pages/loginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/cartPage'
import CheckoutStepOnePage from '../pages/checkoutStepOnePage'
import CheckoutStepTwoPage from '../pages/checkoutStepTwoPage'
import CheckoutCompletePage from '../pages/checkoutCompletePage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage ()
const inventoryPage = new InventoryPage ()
const cartPage = new CartPage ()
const checkoutStepOnePage = new CheckoutStepOnePage ()
const checkoutStepTwoPage = new CheckoutStepTwoPage ()
const checkoutCompletePage = new CheckoutCompletePage ()
const menuPage = new MenuPage ()

describe('Checkout - Saucedemo', () => { 
    
    it('Checkout - Sucesso', () => {

        //deixar os assertions fora do POM
        loginPage.acessarLoginPage()
        cy.get("[data-test='login-container']").should('be.visible') //assertion /login
        loginPage.realizarLogin(user.loginValido.user, user.loginValido.password)

        cy.get("[data-test='product-sort-container']").should('be.visible') //assertion /inventory
        inventoryPage.addProduto()
        inventoryPage.accessarCarrinho()

        cy.get("[data-test='inventory-item']").should('contain', 'Sauce Labs Backpack') //assertion /cart
        cartPage.iniciarCheckout()

        cy.get("[data-test='checkout-info-container']").should('be.visible') //assertion / Checkout-Step-One
        checkoutStepOnePage.preencherCheckoutValido(user.checkoutValido.firstName, user.checkoutValido.lastName, user.checkoutValido.postalCode) // Trazendo dados de user.json
        checkoutStepOnePage.irParaStepTwo()

        cy.get("[data-test='inventory-item']").should('contain', 'Sauce Labs Backpack') //assertion / Checkout-Step-Two
        checkoutStepTwoPage.finalizarStepTwo()

        cy.get("[data-test='checkout-complete-container']").should('be.visible')//assertion / checkout-complete
        checkoutCompletePage.voltarParaHome()
        cy.get("[data-test='product-sort-container']").should('be.visible') //assertion depois de finalizar compra /inventory
        
    });

    //deixar os assertions fora do POM
    it('Checkout - invalido', () => {

        loginPage.acessarLoginPage()
        cy.get("[data-test='login-container']").should('be.visible') //assertion /login
        loginPage.realizarLogin(user.loginValido.user, user.loginValido.password)

        cy.get("[data-test='product-sort-container']").should('be.visible') //assertion /inventory
        inventoryPage.addProduto()
        inventoryPage.accessarCarrinho()

        cy.get("[data-test='inventory-item']").should('contain', 'Sauce Labs Backpack') //assertion /cart
        cartPage.iniciarCheckout()

        cy.get("[data-test='checkout-info-container']").should('be.visible') //assertion / Checkout-Step-One
        checkoutStepOnePage.preencherCheckoutInvalido(user.checkoutInvalido) // Trazendo dados de user.json
        checkoutStepOnePage.irParaStepTwo()
        cy.get("[data-test='error']").should('be.visible').and('contain', 'Error: First Name is required')//assertion de erro do Checkout-Stpe-One
    });

    it('Checkout - Cancel Step-One', () => { 
        //deixar os assertions fora do POM
        loginPage.acessarLoginPage()
        cy.get("[data-test='login-container']").should('be.visible') //assertion /login
        loginPage.realizarLogin(user.loginValido.user, user.loginValido.password)

        cy.get("[data-test='product-sort-container']").should('be.visible') //assertion /inventory
        inventoryPage.addProduto()
        inventoryPage.accessarCarrinho()

        cy.get("[data-test='inventory-item']").should('contain', 'Sauce Labs Backpack') //assertion /cart
        cartPage.iniciarCheckout()

        cy.get("[data-test='checkout-info-container']").should('be.visible') //assertion / Checkout-Step-One
        checkoutStepOnePage.cancelCheckoutStepOne()
        cy.get("[data-test='inventory-item']").should('contain', 'Sauce Labs Backpack') //assertion /Voltando para cart
    });

    it('Checkout - Cancel Step-Two', () => { 
        //deixar os assertions fora do POM
        loginPage.acessarLoginPage()
        cy.get("[data-test='login-container']").should('be.visible') //assertion /login
        loginPage.realizarLogin(user.loginValido.user, user.loginValido.password)

        cy.get("[data-test='product-sort-container']").should('be.visible') //assertion /inventory
        inventoryPage.addProduto()
        inventoryPage.accessarCarrinho()

        cy.get("[data-test='inventory-item']").should('contain', 'Sauce Labs Backpack') //assertion /cart
        cartPage.iniciarCheckout()

        cy.get("[data-test='checkout-info-container']").should('be.visible') //assertion / Checkout-Step-One
        checkoutStepOnePage.preencherCheckoutValido(user.checkoutValido.firstName, user.checkoutValido.lastName, user.checkoutValido.postalCode) // Trazendo dados de user.json
        checkoutStepOnePage.irParaStepTwo()

        cy.get("[data-test='inventory-item']").should('contain', 'Sauce Labs Backpack') //assertion / Checkout-Step-Two
        checkoutStepTwoPage.cancelarStepTwo()
        cy.get("[data-test='product-sort-container']").should('be.visible') //assertion /Voltando para inventory
    });
}); 