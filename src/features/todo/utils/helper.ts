import { Settings } from "@/features/settings/types";
import { Todo } from "../types";

/**
 * Sort Todo list according to settings
 * @param todos List of Todo items
 * @param settings Settings object
 * @returns Sorted list of Todo items
 */
export const sortTodos = (todos: Todo[], settings: Settings): Todo[] => {
  return [...todos].sort((a, b) => {
    let comparison = 0;

    // Sort based on sortBy
    switch (settings.sortBy) {
      case "title":
        comparison = a.title.localeCompare(b.title);
        break;
      case "completed":
        comparison = Number(a.completed) - Number(b.completed);
        break;
      case "createdAt":
      default:
        comparison =
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        break;
    }

    // Apply sort order
    return settings.sortOrder === "asc" ? comparison : -comparison;
  });
};
