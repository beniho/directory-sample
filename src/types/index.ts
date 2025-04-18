/**
 * Base type for API responses
 */
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

/**
 * Parameters for pagination
 */
export interface PaginationParams {
  page: number;
  limit: number;
}

/**
 * Response with pagination
 */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
