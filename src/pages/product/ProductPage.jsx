import React from "react";
import SizeButton from "../../components/buttons/sizeButton/SizeButton";
import SuccessButton from "../../components/buttons/success/SuccessButton";

import "./productPage.css";

class ProductPage extends React.Component {
  render() {
    return (
      <div className="product-page">
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <div
            style={{ backgroundColor: "red", width: "80px", height: "80px" }}
          ></div>
          <div
            style={{ backgroundColor: "red", width: "80px", height: "80px" }}
          ></div>
          <div
            style={{ backgroundColor: "red", width: "80px", height: "80px" }}
          ></div>
        </div>

        <div
          style={{ background: "yellow", width: "610px", height: "511px" }}
        ></div>

        <div className="product-page__details">
          <p className="product-page__title">Apollo</p>
          <p className="product-page__subtitle">Running Short</p>
          <p className="product-page__text">Size:</p>
          <div className="product-page__size-container">
            <SizeButton size="S" />
            <SizeButton size="S" active />
            <SizeButton size="S" notAvailable />
            <SizeButton size="S" />
          </div>

          <p className="product-page__text">price:</p>
          <p className="product-page__price">$50.00</p>

          <SuccessButton
            title="ADD TO CART"
            style={{ width: '100%', padding: '16px 0', marginBottom: "40px" }}
          />

          <p className="product-page__desc">
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </p>
        </div>
      </div>
    );
  }
}
export default ProductPage;
