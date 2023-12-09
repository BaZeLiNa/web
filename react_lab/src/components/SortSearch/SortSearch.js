export const sortCars = (cars, sortOrder, setSortOrder, setSortedCars, field) => {
    const order = sortOrder === 'asc' ? 'desc' : 'asc';
  
    const sorted = [...cars].sort((a, b) => {
      if (order === 'asc') {
        return a[field] - b[field];
      } else {
        return b[field] - a[field];
      }
    });
  
    setSortedCars(sorted);
    setSortOrder(order);
};