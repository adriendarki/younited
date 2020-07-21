describe('Titre de la suite de test', () => {
    beforeEach(() => {
        cy.visit('https://www.younited-credit.com/')
      })
    
    it('conection au sire web', () => {
        cy.get('#projectSelect').select('FURNITURE')
        cy.get('#amount').select('3K')
        cy.get('#creditMaturity').select('M6')
        cy.get('[data-di-id="di-id-bca9a80c-4fc29f73"]').click()
        cy.wait(1000)
        cy.get('#email-input').type('test@yopmail.com')
        cy.get('[data-di-id="di-id-8c30ab93-a687b9f3"]').click()
        cy.wait(1000)
        cy.get('#maritalStatus-input').select('Célibataire')
        cy.get('#childNumberPropal-input').select('0')
        cy.get('[data-di-id="di-id-6d7768b1-3e135a4"]').click()
        cy.wait(1000)
        cy.get('#housingStatus-input').select('Locataire')
        cy.get('#housingStatusFrom-input-month').type('09')
        cy.get('#housingStatusFrom-input-year').type('2015')
        cy.get('[data-di-id="di-id-298bd252-3e135a4"]').click()
       
    })

})