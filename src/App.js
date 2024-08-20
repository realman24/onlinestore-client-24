import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Footer from "./Components/Uitily/Footer";
import CategoryPage from "./Pages/Category/CategoryPage";
import AuthPage from "./Pages/Auth/AuthPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import UserOrdersPage from "./Pages/User/UserOrdersPage";
import UserFavoritesPage from "./Pages/User/UserFavoritesPage";
import UserAddressPage from "./Pages/User/UserAddressPage";
import ProductsPage from "./Pages/Products/ProductsPage";
import BrandPage from "./Pages/Brand/BrandPage";
import ProductDetailsPage from "./Pages/Products/ProductDetailsPage";
import CartPage from "./Pages/Cart/CartPage";
import ProductSearchPage from "./Pages/Products/ProductSearchPage";
// import NavBar from "./Components/Uitily/NavBar";
import MyComponent from "./Components/Uitily/MyComponent";
import UserAddAddressPage from "./Pages/User/UserAddAddressPage";
import UserUpdateAddressPage from "./Pages/User/UserUpdateAddressPage";
import UserEditeProfilePage from "./Pages/User/UserEditeProfilePage";
import PayAddressPage from "./Pages/Checkout/PayAddressPage";
import PlaceOrderPage from "./Pages/Checkout/PlaceOrderPage";

function App() {
  return (
    <div className="app">
      {/* <NavBar /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
          <Route path="/user/edit-profile" element={<UserEditeProfilePage />} />
          <Route path="/user/orders" element={<UserOrdersPage />} />
          <Route path="/user/favorites" element={<UserFavoritesPage />} />
          <Route path="/user/addresses" element={<UserAddressPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route
            path="/user/edit-address/:id"
            element={<UserUpdateAddressPage />}
          />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/product" element={<ProductsPage />} />
          {/* <Route path="/product/all" element={<ProductSearchPage />} /> */}
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/brand" element={<BrandPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/test" element={<MyComponent />} />

          <Route path="/order/payment" element={<PayAddressPage />} />
          <Route
            path="/order/place-order/:pay/:id"
            element={<PlaceOrderPage />}
          />
          {/* <Route path="/order/:cartId" element={<PayAddressPage />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
