import { TodoItem } from './TodoItem'
import { StorageProvider } from '../providers';
import { DescriptionError } from '../error';


export class Todo {
  private storage: StorageProvider;

  constructor(storage: StorageProvider) {
    this.storage = storage;
  }

  /**
   * Creates a todo
   * 
   * @param todo 
   * @returns todoId
   */
  public add(todo: string): string {
    if (todo.length < 10) {
      throw new DescriptionError('Description too short')
    }

    const todoId = this.storage.add({ description: todo })
    return todoId
  }

  /**
   * List all todo items
   * 
   * @returns a list of todo items
   */
  public list() {
    return this.storage.get()
  }

  /**
   * Update a todo item
   * 
   * @param id   id of todo item to update
   * @param body properties to update a todo item
   * @returns TodoItem
   */
  public update(id: string, body: TodoItem): TodoItem {
    return this.storage.update(id, body)
  }
}