export interface TodoItem {
  description: string
  done: boolean
  createdAt: Date
  updatedAt: Date
}

export interface UpdateProps {
  description?: string
  done?: string
}

export interface NewTodoProps {
  description: string
}