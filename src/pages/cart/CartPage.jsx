import React from "react";
import CartCard from "../../components/cartCard/CartCard";

import "./cartPage.css";

class CartPage extends React.Component {
  render() {
    return (
      <div className="cart-page">
        <h1 className="cart-page__head">CART</h1>
        <CartCard title='Apollo' price='50.00' subTitle='Running Short' />
        <CartCard title='Apollo' price='50.00' subTitle='Running Short' />
      </div>
    );
  }
}

export default CartPage;
