import { Todo } from '../src/domain/Todo'
import { FileStorageProvider } from '../src/providers/file-storage-provider'

const storage = new FileStorageProvider()
storage.initialize()
const todo = new Todo(storage)

describe('Integration Tests', () => {
  test('Todo items are added successfully', () => {
    const id = todo.add('Another todo')
    expect(id).toBeDefined()
  })

  test('Todo items can be fetched from the storage', () => {
    todo.add('A todo item')
    todo.add('Another item')

    const todos = todo.list()
    expect(Object.keys(todos).length).toBe(1)
  })

  test('Todo items can be updated', () => {
    const itemId = todo.add('Item to update')
    todo.update(itemId, { description: 'Updated item' })

    expect(todo.list()[itemId].description).toBe('Updated item')

  })
})