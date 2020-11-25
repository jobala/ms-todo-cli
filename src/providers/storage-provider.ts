import { TodoItem } from '../domain/TodoItem'

export interface StorageProvider {
  add(todo: TodoItem): string
  get(): any
  update(id: string, body: object): TodoItem
}
