import { TodoItem } from './TodoItem'

export interface StorageProvider {
  add(todo: TodoItem): string
  get(id: string): TodoItem
  update(id: string, body: object): TodoItem
  delete(id: string): string
}