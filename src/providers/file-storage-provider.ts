import fs from 'fs'

import { v4 as uuidv4 } from 'uuid'

import { StorageProvider } from "./storage-provider"
import { TodoItem } from "src/domain"
import { NewTodoProps, TodoItemCollection } from 'src/domain/TodoItem'
import { DB_URI } from '../constants'


export class FileStorageProvider implements StorageProvider {
  private db_uri: string

  constructor(db_uri = DB_URI) {
    this.db_uri = db_uri

    if (!fs.existsSync(this.db_uri)) {
      this.write(JSON.stringify({}))
    }
  }

  public add(todo: NewTodoProps): string {
    const db: any = this.read()
    const id = uuidv4()
    const todoItem = Object.assign({}, todo, {
      done: false,
      createdAt: Date.now(),
      updatedAt: Date.now()
    })

    db[id] = todoItem

    this.write(JSON.stringify(db))
    return id
  }

  public get(): TodoItemCollection {
    const data = this.read()
    return data
  }

  public update(id: string, body: object): TodoItem {
    const db: any = this.read()
    const record = db[id]

    const newRecord = Object.assign({}, record, { ...body, updatedAt: Date.now() })
    db[id] = newRecord

    this.write(JSON.stringify(db))
    return newRecord
  }

  public clear() {
    this.write(JSON.stringify({}))
  }

  private write(data: string) {
    fs.writeFileSync(this.db_uri, data)
    fs.closeSync
  }

  private read(): TodoItemCollection {
    const data = fs.readFileSync(this.db_uri, { encoding: 'utf-8' })
    return JSON.parse(data)
  }
}