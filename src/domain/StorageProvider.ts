import { TodoItem } from './TodoItem'

export interface StorageProvider {
  add(todo: object): boolean
  get(id: string): TodoItem
  update(id: string, body: object): TodoItem
  delete(id: string): string
}