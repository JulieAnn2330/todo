describe('new todo list link', () => {

    beforeEach(() => {
        cy.visit('/todo_lists/new')
    })

    it('enters a title and description for the new todo and creates it', () => {

        cy.get('#todo_list_title').type('Test todo list')

        cy.get('#todo_list_description').type('Todo Item 1')
    
        cy.contains('Create Todo list').click()

        cy.get('[style="color: green"]')
        .invoke('text')
        .should('equal', 'Todo list was successfully created.')
 })

})