// Pagination utilities
export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export function getPaginationParams(
  searchParams: Record<string, string | string[] | undefined>,
  defaultPageSize = 12
): PaginationParams {
  const page = Math.max(1, parseInt(searchParams.page as string) || 1);
  const pageSize = Math.max(1, Math.min(100, parseInt(searchParams.pageSize as string) || defaultPageSize));
  return { page, pageSize };
}

export function calculatePaginationMeta(
  page: number,
  pageSize: number,
  total: number
): PaginationMeta {
  const totalPages = Math.ceil(total / pageSize);
  return {
    page,
    pageSize,
    total,
    totalPages,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
}

export function getPaginationOffset(page: number, pageSize: number): number {
  return (page - 1) * pageSize;
}
