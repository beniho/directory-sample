/**
 * Local storage keys
 */
export const STORAGE_KEYS = {
  TODOS: "todos",
  SETTINGS: "settings",
};

/**
 * Sort options
 */
export const SORT_OPTIONS = {
  CREATED_AT: "createdAt",
  TITLE: "title",
  COMPLETED: "completed",
} as const;

/**
 * Sort order
 */
export const SORT_ORDER = {
  ASC: "asc",
  DESC: "desc",
} as const;
