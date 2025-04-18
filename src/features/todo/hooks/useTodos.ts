import { Todo } from "@/features/todo/types";
import { useCallback, useState } from "react";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((title: string) => {
    const newTodo: Todo = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date(),
    };
    setTodos((prev) => [...prev, newTodo]);
  }, []);

  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
          : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};
