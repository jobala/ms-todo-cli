import { TodoItem, NewTodoProps, UpdateProps, TodoItemCollection } from '../domain/TodoItem'

export interface StorageProvider {
  add(todo: NewTodoProps): string
  get(): TodoItemCollection
  update(id: string, body: UpdateProps): TodoItem
}
