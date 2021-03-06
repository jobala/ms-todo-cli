# Todo Core

A core module for building CLI todo apps. Ships with a file storage provider out of the box and users can plugin in their own storage provider.

## Using FileStorageProvider

```ts
import { FileStorageProvider } from './src/providers'
import { Todo } from './src/domain'

const storage = new FileStorageProvider()
const todo = new Todo(storage)

todo.add('Add delete functionality')
```

## Build a custom storage provider

To build a custom provider implement the `StorageProvider` interface.

```ts
import { StorageProvider} from './src/providers'

class CustomStorageProvider implements StorageProvider {
  ...
}
```
