import React from "react";
import { connect } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";

import TheLayout from "./container/TheLayout";
import CartPage from "./pages/cart/CartPage";
import WomenPage from "./pages/women/WomenPage";
import ProductPage from "./pages/product/ProductPage";

class App extends React.Component {
  render() {
    return (
      <TheLayout>
        {/* <ProductPage /> */}
        <Routes>
          <Route exact path="/" element={<WomenPage />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/women" element={<WomenPage />} />
          <Route exact path="/product" element={<ProductPage />} />
          <Route element={() => <h1>NOT FOUND</h1>} />
          <Route path="*" element={<Navigate replace to="/women" />} />
        </Routes>
      </TheLayout>
    );
  }
}

export default connect(null, {})(App);
