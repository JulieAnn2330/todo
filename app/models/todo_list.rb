class TodoList < ApplicationRecord
    before_destroy :destroy_todo_items
    has_many :todo_items

private

def destroy_todo_items
  self.todo_items.destroy_all
end

end