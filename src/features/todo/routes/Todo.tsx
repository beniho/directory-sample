"use client";

import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { FiSettings } from "react-icons/fi";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { useTodos } from "../hooks/useTodos";

export default function Todo() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto relative">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Todoリスト</h1>
          <Link href="/settings">
            <Button variant="ghost" colorScheme="gray.400" size="sm">
              <FiSettings />
            </Button>
          </Link>
        </div>
        <TodoForm onSubmit={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </main>
  );
}
