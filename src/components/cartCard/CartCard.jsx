import React from "react";

import "./cartCard.css";

class CartCard extends React.Component {
  render() {
    const { title, price, subTitle } = this.props;
    return (
      <div className="cart-page__card">
        <div className="cart-page__details">
          <div className="cart-page__title">{title}</div>
          <div className="cart-page__paragraph">{subTitle}</div>
          <div className="cart-page__price">${Number(price).toFixed(2)}</div>
          <div className="cart-page__sizes">
            <p className="cart-page__size cart-page__activeSize">S</p>
            <p className="cart-page__size">M</p>
          </div>
        </div>
        <div className="cart-page__items">
          <div className="cart-page__increments">
            <div className="cart-page__plus" />
            <div className="cart-page__count">1</div>
            <div className="cart-page__minus" />
          </div>
          <div
            style={{
              height: "185px",
              width: "141px",
              backgroundColor: "red",
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default CartCard;
