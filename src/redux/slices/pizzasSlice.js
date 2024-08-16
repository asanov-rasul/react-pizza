
import { createSlice } from '@reduxjs/toolkit';

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState: {
    items: []
  },
  reducers: {
    setPizzas(state, action) {
      state.items = action.payload;
    }
  }
});

export const { setPizzas } = pizzasSlice.actions;
export default pizzasSlice.reducer;
