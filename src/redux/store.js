// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import pizzasReducer from './slices/pizzasSlice'; // Проверьте путь к редуктору

const store = configureStore({
  reducer: {
    pizzas: pizzasReducer // Используйте правильный ключ для редуктора
  }
});

export default store;
