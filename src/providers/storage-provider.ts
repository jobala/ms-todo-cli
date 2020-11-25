import { TodoItem, NewTodoProps, UpdateProps } from '../domain/TodoItem'

export interface StorageProvider {
  add(todo: NewTodoProps): string
  get(): any
  update(id: string, body: UpdateProps): TodoItem
}
