export class Utils {

    click(locator) {
        cy.get(locator).then(locator => {
            cy.wrap(locator).click({ force: true })
        })
        return cy.wrap(locator)
    }

    selectCity(locator, desiredText) {
        cy.get(locator).then(locator => {
            cy.wrap(locator).clear({ force: true }).type(desiredText)
        })
        cy.get('[role="listbox"]').find('ul').find('li').contains(desiredText).click({ force: true })
    }

}
export const utils = new Utils()