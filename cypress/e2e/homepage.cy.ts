describe('Homepage opens and has the right content', () => {
    it('Visits Keke\'s website', () => {
            cy.visit('http://localhost:3000/')
        }
    )
    it('Has title Welcome to Keke\'s Lounge', () => {
            cy.contains('.title','Welcome to Keke\'s Lounge')
        }
    )
})

export {};