import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/product/productSlice";
import prodCateReducer from "../features/productCategories/prodCateService";
import userReducer from "../features/user/userSlice";
import colorReducer from "../features/color/colorSlice";
import sizeReducer from "../features/size/sizeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    productCategory: prodCateReducer,
    user: userReducer,
    color: colorReducer,
    size: sizeReducer,
  },
});
