import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const carInStoreIndex = state.cart.findIndex((item) => item.car.id === action.payload.car.id);

      if (carInStoreIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[carInStoreIndex].counter += action.payload.counter;

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.car.id !== action.payload),
      };

    case 'INCREMENT_COUNTER':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.car.id === action.payload) {
            return {
              ...item,
              counter: item.counter + 1,
            };
          }
          return item;
        }),
      };

    case 'DECREMENT_COUNTER':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.car.id === action.payload && item.counter > 1) {
            return {
              ...item,
              counter: item.counter - 1,
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage,
};

export default persistReducer (persistConfig, cartReducer);