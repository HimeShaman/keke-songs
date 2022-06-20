describe('Contact page is available and submitting a valid form works', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/contact')
    })

    it('successfully sends a message', () => {
        cy.get('#email')
            .should('be.visible')
            .type('tom@nook.jp')
        cy.get('#message')
            .should('be.visible')
            .type('Gib me my money !')
        cy.get('button[type="submit"]')
            .should('be.visible')
            .click()
        cy.contains('Thank you for messaging us ! We will reach back to you ASAP.')
            .should('be.visible')
    })
    }
)

export {};