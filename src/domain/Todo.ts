import { TodoItem } from './TodoItem'
import { StorageProvider } from './StorageProvider';
import { DescriptionError } from '../error';


export class Todo {
  private storage: StorageProvider;

  constructor(storage: StorageProvider) {
    this.storage = storage;
  }

  public add(todo: string): string {
    if (todo.length < 10) {
      throw new DescriptionError('Description too short')
    }

    const todoId = this.storage.add({ description: todo })
    return todoId
  }
}