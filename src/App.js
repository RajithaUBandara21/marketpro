import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";

import ShopPage from "./pages/ShopPage";
import ProductDetailsPageOne from "./pages/ProductDetailsPageOne";
import ProductDetailsPageTwo from "./pages/ProductDetailsPageTwo";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AccountPage from "./pages/AccountPage";

import PhosphorIconInit from "./helper/PhosphorIconInit";
import InventoryManagement from "./pages/InverntoryMannagemrnt";


function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <PhosphorIconInit />

      <Routes>
        <Route exact path='/' element={<ShopPage />} />
        <Route
          exact
          path='/product-details'
          element={<ProductDetailsPageOne />}
        />
        <Route
          exact
          path='/product-details-two'
          element={<ProductDetailsPageTwo />}
        />
        <Route exact path='/cart' element={<CartPage />} />
        <Route exact path='/checkout' element={<CheckoutPage />} />
        
        <Route exact path='/account' element={<AccountPage />} />
        <Route exact path='/inventory' element={<InventoryManagement />} />
        
      
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
