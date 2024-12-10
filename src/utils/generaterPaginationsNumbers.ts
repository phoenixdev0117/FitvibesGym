/*[1,2,3,4,5,6,7] */
export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages < 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1); // [1,2,3,4,5,6,7]
  }

  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages]; // [1,2,3,...,5,6,7]
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages]; // [1,2,3,...,5,6,7]
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ]; // [1,...,4,5,6,...,7
};
