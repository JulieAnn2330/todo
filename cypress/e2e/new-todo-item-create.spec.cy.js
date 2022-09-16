describe('new todo item create', () => {

    beforeEach(() => {
        cy.visit('/todo_lists/31')
    })

    it('creates a new todo item and saves it to the list', () => {

        cy.get('[name="todo_item[content]').type('First new todo item')

        cy.get('[value="Create Todo item"]')
        .click()

        cy.wait(750)

        cy.get('[name="todo_item[content]').type('Second new todo item')

        cy.get('[value="Create Todo item"]')
        .click()

        cy.wait(750)

        cy.get('[name="todo_item[content]').type('Third new todo item')

        cy.get('[value="Create Todo item"]')
        .click()

        cy.wait(750)
    })
})