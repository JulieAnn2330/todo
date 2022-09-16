describe('new todo list link', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('starts a new todo list', () => {
        cy.get('.links')
        cy.contains('New Todo List').click()
     })
    
})