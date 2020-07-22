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
        cy.get('#maritalStatus-input').select('Vie Maritale / PACS')
        cy.get('#childNumberPropal-input').select('0')
        cy.get('[data-di-id="di-id-6d7768b1-3e135a4"]').click()
        cy.wait(1000)
        cy.get('#housingStatus-input').select('Logé(e) par le(la) conjoint(e) ')
        cy.get('#housingStatusFrom-input-month').type('09')
        cy.get('#housingStatusFrom-input-year').type('2015')
        cy.get('[data-di-id="di-id-298bd252-3e135a4"]').click()
        cy.wait(1000)
        cy.get('#activitySector-input').select('Indépendants / Travailleurs non salariés')
        cy.get('#profession-input').select('Auto-Entrepreneur')
        cy.get('#businessActivityStartDate-input-month').type('09')
        cy.get('#businessActivityStartDate-input-year').type('2015')
        cy.get('[type="radio"]').check('Non')
        cy.get('[data-di-id="di-id-9058e932-af7a0aea"]').click()
        cy.wait(1000)
        cy.get('#mainIncome-input').type('12000')
        cy.get('#housingAssistance-input').type('120')
        cy.get('#additionalIncome-input').type('500')
        cy.get('[data-di-id="di-id-f27547d9-6dfa66ae"]').click()
        cy.wait(1000)
        cy.get('#rentAmount-input').type('12000')
        cy.get('custom-select').select('1')
        cy.get('type-input').select('Auto-Moto')
        cy.get('#loanAmount-input').type('400')
        cy.get('[data-di-id="di-id-d236d59f-ee88df57"]').click()
        cy.wait(1000)
        cy.get('bankCode-input').select('Crédit Agricole')
        cy.get('#bankFrom-input-year').type('2010')
        cy.get('[data-di-id="di-id-2483c0f0-57165877"]').click()
        cy.wait(1000)
        cy.get('#lastName-input').type('test')
        cy.get('#firstName-input').type('machin')
        cy.get('dateOfBirth-input-day').type('10')
        cy.get('#dateOfBirth-input-month').type('09')
        cy.get('#dateOfBirth-input-year').type('1997')
        cy.get('#postalCode-input').type('3300')
        cy.get('[data-di-id="di-id-d4009be7-ee88df57"]').click()
        cy.wait(1000)
        cy.get('#lastName-input').type('0659860250')
        cy.get('#firstName-input').type('0759860250')
        cy.get('#address-input').type('adresse sympa et cool')
        cy.get('#postalCode-input').type('3300')
        cy.get('#countryZone-input').select('France')
        cy.get('[data-di-id="di-id-922c1f25-89d40b16"]').click()
        cy.wait(1000)
       
    })

})