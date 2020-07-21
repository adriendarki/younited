describe('Titre de la suite de test', () => {
    beforeEach(() => {
        cy.visit('https://www.younited-credit.com/')
      })
    
    it('conection au sire web', () => {
        cy.get('#projectSelect').click
        cy.get('#projectSelect').should('contain', 'Mobilier')
    })

})