import { StorageProvider } from "src/domain/StorageProvider";
import { TodoItem } from "src/domain/TodoItem";

const DB = 'db.json'

export class FileStorageProvider implements StorageProvider {
  add(todo: TodoItem): string {
    throw new Error("Method not implemented.");
  }
  get(): [TodoItem] {
    throw new Error("Method not implemented.");
  }
  update(id: string, body: object): TodoItem {
    throw new Error("Method not implemented.");
  }
  delete(id: string): string {
    throw new Error("Method not implemented.");
  }
}