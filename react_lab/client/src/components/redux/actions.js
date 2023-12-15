export const addToCart = (car, counter) => ({
  type: 'ADD_TO_CART',
  payload: { car, counter },
});

export const removeFromCart = (carId) => ({
  type: 'REMOVE_FROM_CART',
  payload: carId ,
});

export const incrementCounter = (carId) => ({
  type: 'INCREMENT_COUNTER',
  payload: carId,
});

export const decrementCounter = (carId) => ({
  type: 'DECREMENT_COUNTER',
  payload: carId,
});