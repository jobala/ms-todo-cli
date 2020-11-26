import { FileStorageProvider } from './providers'
import { Todo } from './domain'

const storage = new FileStorageProvider()
const todo = new Todo(storage)

const id = todo.add('Add delete functionality')
