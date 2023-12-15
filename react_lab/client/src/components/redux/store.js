import { createStore } from 'redux';
import cartReducer from './reducers';
import { persistStore } from 'redux-persist';

const store = createStore(cartReducer);
const persistor = persistStore(store);

export { store, persistor };
