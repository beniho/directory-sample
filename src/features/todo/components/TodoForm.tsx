import { Button } from "@/components/common/Button";
import { useState } from "react";

interface TodoFormProps {
  onSubmit: (title: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit(title.trim());
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-4 mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="新しいタスクを入力"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
      <Button type="submit" disabled={!title.trim()}>
        追加
      </Button>
    </form>
  );
};
