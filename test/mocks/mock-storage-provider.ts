import { StorageProvider } from '../../src/providers'
import { TodoItem, TodoItemCollection } from '../../src/domain/TodoItem';

export class MockStorageProvider implements StorageProvider {
  private storage: Map<string, object>

  constructor() {
    this.storage = new Map()
  }

  public add(todo: TodoItem): string {
    this.storage.set('testId', todo)
    return 'testId'
  }

  public get(): TodoItemCollection {
    throw new Error('Method not implemented.');
  }

  public update(id: string, body: object): TodoItem {
    throw new Error('Method not implemented.');
  }

  public delete(id: string): string {
    throw new Error('Method not implemented.');
  }

}