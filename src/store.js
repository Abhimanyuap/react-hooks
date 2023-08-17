import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Define your initial state
const initialState = {
  // Define your initial state properties here
};

// Define your reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Define your action types and corresponding state updates here
    default:
      return state;
  }
};

// Configure Redux Persist
const persistConfig = {
  key: 'root',
  storage,
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = createStore(persistedReducer);

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };
