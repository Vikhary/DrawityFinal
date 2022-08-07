import { createStore, combineReducers, applyMiddleware } from "redux";
import  categoryReducer from "./reducers/category.reducer";
import  productsReducer from "./reducers/products.reducer";
import  cartReducer from "./reducers/cart.reducer";
import placeReducer from "./reducers/place.slices";
import orderReducer from "./reducers/order.reducer";
import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";


export const store = configureStore({
  reducer: {
    place: placeReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  })

});

const RootReducer = combineReducers({
  product: productsReducer,
  category: categoryReducer,
  cart: cartReducer,
  order: orderReducer,

  
});


export default createStore(RootReducer, applyMiddleware(thunk));