import { StorageProvider } from '../../src/domain/StorageProvider'
import { TodoItem } from '../../src/domain/TodoItem';

export class StorageProviderMock implements StorageProvider {
  StorageProviderMock() {

  }

  public add(): boolean {
    throw new Error('Method not implemented.');
  }

  public get(id: string): TodoItem {
    throw new Error('Method not implemented.');
  }

  public update(id: string, body: object): TodoItem {
    throw new Error('Method not implemented.');
  }

  public delete(id: string): string {
    throw new Error('Method not implemented.');
  }

}