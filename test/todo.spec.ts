import { MockStorageProvider } from './mocks/MockStorageProvider'
import { Todo } from '../src/domain/Todo';
import { TodoItem } from '../src/domain/TodoItem';

const storageProvider = new MockStorageProvider()
const todo = new Todo(storageProvider)

test('throw an error when a todo item\'s description is less 10 chars', () => {
  try {
    todo.add('Short')
  } catch (error: any) {
    expect(error.message).toBe('Description too short')
  }
})



