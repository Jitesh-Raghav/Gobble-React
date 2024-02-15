import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

               
const appStore= configureStore({      //in appstore its reducer, i.e one big reducer for appstore, which has multiple small reducers like cartReducer, userReducer
    reducer: {
        cart: cartReducer,
      },
});

export default appStore;