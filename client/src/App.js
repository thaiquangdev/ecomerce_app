import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import {
  AdminLayout,
  Blog,
  BlogList,
  Cart,
  ColorList,
  Contact,
  CreateBlog,
  CreateBlogCategory,
  CreateColor,
  CreateProduct,
  CreateProductCategory,
  CreateSize,
  Customers,
  Dashboard,
  Enquiries,
  Home,
  Login,
  Orders,
  ProductCategoryList,
  ProductList,
  Register,
  Shop,
  SingleProduct,
  SizeList,
  WishList,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/users" element={<Customers />} />
          <Route path="/admin/create-product" element={<CreateProduct />} />
          <Route path="/admin/product-list" element={<ProductList />} />
          <Route
            path="/admin/product-category-list"
            element={<ProductCategoryList />}
          />
          <Route path="/admin/create-blog" element={<CreateBlog />} />
          <Route path="/admin/blog-list" element={<BlogList />} />
          <Route path="/admin/color-list" element={<ColorList />} />
          <Route path="/admin/size-list" element={<SizeList />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/enquiries" element={<Enquiries />} />
          <Route
            path="/admin/create-product-category"
            element={<CreateProductCategory />}
          />
          <Route path="/admin/create-color" element={<CreateColor />} />
          <Route path="/admin/create-size" element={<CreateSize />} />
          <Route
            path="/admin/create-blog-category"
            element={<CreateBlogCategory />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
