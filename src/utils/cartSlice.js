import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {                      //here we have reducers cuz here we have multiple reducer functions
   
   //reducer function
    addItem: (state, action) => {

      //mutating the state- i.e directly modifying the state object or its nested properties instead of returning a new state object with the desired changes.Redux ToolKit(RTK) uses IMMER package that allows to work with immutable states 
      //mutating state wasn't allowed in Vanilla Redux 
      state.items.push(action.payload); 
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
   
    clearCart: (state, action) => {
      state.items.length = 0; 

    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
