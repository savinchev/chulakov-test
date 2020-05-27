export const sortBy = (users, sortValue, sortOrder) => {
  return users.sort((a, b) => {
    if (sortOrder === 'asc') {
      return sortValue === 'name'
        ? a[sortValue].charCodeAt() - b[sortValue].charCodeAt()
        : a[sortValue] - b[sortValue]
    }
    return sortValue === 'name'
      ? b[sortValue].charCodeAt() - a[sortValue].charCodeAt()
      : b[sortValue] - a[sortValue]
  });
};
