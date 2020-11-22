import fs from 'fs'

import { v4 as uuidv4 } from 'uuid'

import { StorageProvider } from "src/domain/StorageProvider";
import { TodoItem } from "src/domain/TodoItem";

const DB = 'db.json'


export class FileStorageProvider implements StorageProvider {
  public initialize() {
    if (!fs.existsSync(DB)) {
      this.write(JSON.stringify({}))
    }
  }

  public add(todo: TodoItem): string {
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

  public get() {
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

  private write(data: string) {
    fs.writeFileSync(DB, data)
    fs.closeSync
  }

  private read() {
    const data = fs.readFileSync(DB, { encoding: 'utf-8' })
    return JSON.parse(data)
  }
}