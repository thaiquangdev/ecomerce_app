import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import productReducer from "../features/product/productSlice";
import prodCateReducer from "../features/productCategories/prodCateService";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    productCategory: prodCateReducer,
  },
});
