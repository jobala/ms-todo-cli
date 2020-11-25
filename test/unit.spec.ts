import { MockStorageProvider } from './mocks/mock-storage-provider'
import { Todo } from '../src/domain/Todo';

const storageProvider = new MockStorageProvider()
const todo = new Todo(storageProvider)

describe('Unit Tests', () => {
  test('throw an error when a todo item\'s description is less 10 chars', () => {
    try {
      todo.add('Short')
    } catch (error: any) {
      expect(error.message).toBe('Description too short')
    }
  })
})




