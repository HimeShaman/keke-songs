describe('Song list is available and takes the user to an actual sound', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3000/songs')
        })

        it('successfully open a sound details page', () => {
            cy.get('img[src="https://acnhapi.com/v1/images/songs/1"]')
                .should('be.visible')
                .click()
            cy.get('source')
                .should('have.attr', 'src', 'https://acnhapi.com/v1/music/1')
        })
    }
)

export {};