describe('Sasnuby tab OK', () => {
    

      describe('Omara.sk Tests', () => {

            // // Test for "Zásnuby" section
            // it('should navigate to "Zásnuby" and check API responses and filters', () => {
            //     cy.visit('https://omara.sk/')
        
            //     // Intercept API calls and wait for the responses
            //     cy.intercept('GET', 'https://api.omara.sk/api/v1/pages/engagement-rings').as('apiCheck') // Adjust this to the actual endpoint
        
            //     // Navigate to "Zásnuby" section
            //     cy.get('[class="nav__item"]').contains('ZÁSNUBY').click()
            //     cy.wait('@apiCheck').then((interception) => {
            //         expect(interception.response.statusCode).to.eq(200)
            //         // Check the response body here
            //         cy.log(JSON.stringify(interception.response.body))
            //     })
        
            //     // Check filters in the sidebar
            //     cy.visit('https://omara.sk/')
            //     cy.get('[class="nav__item"]').contains('ZÁSNUBY').click()
            //     cy.get('[class="product-grid-item__name"]').contains('Trojkamenný Center Halo').click()
            //     cy.get('[class="close-popup"]').click()
            //     cy.get('[class="widget__title"]').contains('Kategória').click({force:true})
            //     cy.get('[class="d-flex label-container"]').contains('Náušnice').should('be.visible')
                
            // })
        
            // Test for "Initial" section
            it('should navigate to "Initial", find "Náhrdelník Mon Petit", and check API responses', () => {
                cy.visit('https://omara.sk/')
        
                // Navigate to "Initial" section
                cy.get('[class="nav__item"]').contains('INITIAL').click()
        
                // Find and navigate to "Náhrdelník Mon Petit"
                cy.get('[data-e2e-link="product-name"]').contains('Náhrdelník Mon Petit').click()
        
                // Intercept API calls and wait for the responses
                cy.intercept('GET', 'https://api.omara.sk/api/v1/blocks/product-question-form').as('productCheck') // Adjust this to the actual endpoint
                cy.wait('@productCheck').then((interception) => {
                    expect(interception.response.statusCode).to.eq(200)
                    // Check the response body here
                    cy.log(JSON.stringify(interception.response.body))
                })
        
                // Add to wishlist and compare, check API responses
                cy.get('[viewBox="0 0 28 24"]').contains(' Pridané do zoznamu želaní').click() // Add to wishlist are flex, cannot use this selector
                cy.intercept('POST', 'https://api.omara.sk/api/v1/wishlists').as('wishlistCheck') // Adjust this to the actual endpoint
                cy.wait('@wishlistCheck').then((interception) => {
                    expect(interception.response.statusCode).to.eq(200)
                    // Check the response body here
                    cy.log(JSON.stringify(interception.response.body))
                })
        

                })
            })
        })
