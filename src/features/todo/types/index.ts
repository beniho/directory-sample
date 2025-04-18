/**
 * Todo item type definition
 */
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string; // ISO format date string
  updatedAt: Date;
}

/**
 * Type for creating a new Todo item
 */
export type CreateTodoInput = Pick<Todo, "title">;
