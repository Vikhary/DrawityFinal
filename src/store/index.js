import { createStore, combineReducers } from "redux";
import  categoryReducer from "./reducers/category.reducer";
import  productsReducer from "./reducers/products.reducer";

const RootReducer = combineReducers({
    product: productsReducer,
    category: categoryReducer,
  });

  export default createStore(RootReducer);