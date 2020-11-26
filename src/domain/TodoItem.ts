export interface TodoItem {
  description: string
  done: boolean
  createdAt: number
  updatedAt: number
}

export interface UpdateProps {
  description?: string
  done?: boolean
}

export interface NewTodoProps {
  description: string
}

export interface TodoItemCollection {
  [key: string]: TodoItem
}