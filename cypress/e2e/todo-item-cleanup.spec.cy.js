describe('todo item cleanup', () => {

    beforeEach(() => {
        cy.visit('/todo_lists/31')
    })

    it('will mark the todo as complete and delete the todo', () => {
       
            cy.get('[data-cy="todoItem"]')
            .eq(0)
            .click()

            cy.get('[style="color: green"]')
            .invoke('text')
            .should('equal', 'Todo Item Completed')

            cy.wait(1500)

            cy.get('[data-cy="todoItem"]')
            .eq(1)
            .click()

            cy.get('[style="color: green"]')
            .invoke('text')
            .should('equal', 'Todo Item Completed')

            cy.wait(1500)

            cy.get('[data-cy="todoTrash"]')
            .eq(0)
            .click()

            cy.get('[style="color: green"]')
            .invoke('text')
            .should('equal', 'Todo Item Deleted')
            
        })

     })
