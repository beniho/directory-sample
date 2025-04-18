import { Button } from "@/components/common/Button";
import { Todo } from "@/features/todo/types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <span
          className={`${todo.completed ? "line-through text-gray-500" : ""}`}
        >
          {todo.title}
        </span>
      </div>
      <Button
        variant="danger"
        onClick={() => onDelete(todo.id)}
        className="ml-4"
      >
        削除
      </Button>
    </div>
  );
};
