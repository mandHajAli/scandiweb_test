import React from "react";
import { connect } from "react-redux";

import MiniCart from "./components/MiniCart/MiniCart";
import Nav from "./components/nav/Nav";
import TheLayout from "./container/TheLayout";
import CartPage from "./pages/cart/CartPage";
import WomenPage from "./pages/women/WomenPage";

class App extends React.Component {
  render() {
    return (
     <TheLayout>
       <CartPage />
     </TheLayout>
    );
  }
}

export default connect(null, {})(App);
