import { TodoItem } from './TodoItem'

export interface StorageProvider {
  add(todo: TodoItem): string
  get(): [TodoItem]
  update(id: string, body: object): TodoItem
  delete(id: string): string
}