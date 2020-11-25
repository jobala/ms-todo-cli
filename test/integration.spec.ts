import { Todo } from '../src/domain'
import { FileStorageProvider } from '../src/providers'

const storage = new FileStorageProvider()
const todo = new Todo(storage)

describe('Integration Tests', () => {
  afterEach(() => {
    storage.clear()
  })

  test('Todo items are added successfully', () => {
    const id = todo.add('Another todo')
    expect(id).toBeDefined()
  })

  test('Todo items can be fetched from the storage', () => {
    todo.add('A todo item')
    todo.add('Another item')

    const todos = todo.list()
    expect(Object.keys(todos).length).toBe(2)
  })

  test('Todo items can be updated', () => {
    const itemId = todo.add('Item to update')
    todo.update(itemId, { done: true })

    expect(todo.list()[itemId].done).toBe(true)
  })
})
