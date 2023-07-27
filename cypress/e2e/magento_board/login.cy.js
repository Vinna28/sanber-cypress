describe('E2E Login to Magento board', () => {

  it('Success Login with valid email & password', () => {

    cy.visit('https://magento.softwaretestingboard.com/')

    cy.contains("Sign In").click()

    cy.get('#email').type("ropa01@gmail.com")

    cy.get('#pass').type("Testing4321")

    cy.get('#send2').contains("Sign In").click()

    cy.get('.logged-in').should('be.visible')

  })

  it('Failed Login with invalid password', () => {

    cy.visit('https://magento.softwaretestingboard.com/')

    cy.contains("Sign In").click()

    cy.get('#email').type("ropa01@gmail.com")

    cy.get('#pass').type("Testing111")

    cy.get('#send2').contains("Sign In").click()

    cy.get('.message-error').should('be.visible')

  })

  it('Failed Login with invalid email', () => {

    cy.visit('https://magento.softwaretestingboard.com/')

    cy.contains("Sign In").click()

    cy.get('#email').type("ropa@gmail.com")

    cy.get('#pass').type("Testing4321")

    cy.get('#send2').contains("Sign In").click()

    cy.get('.message-error').should('be.visible')

  })

  it('Failed Login with empty email & password', () => {

    cy.visit('https://magento.softwaretestingboard.com/')

    cy.contains("Sign In").click()

    cy.get('#send2').contains("Sign In").click()

    cy.get('.message-error').should('be.visible')

  })
})