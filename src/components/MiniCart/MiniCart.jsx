import React from "react";
import { connect } from "react-redux";

import "./miniCart.css";
import MiniCartCard from "./MiniCartCard";
import { openCloseCart } from "../../actions";
import RegularButton from "../buttons/regular/RegularButton";
import SuccessButton from "../buttons/success/SuccessButton";

class MiniCart extends React.Component {
  render() {
    const { cart, openCloseCart } = this.props;
    return (
      <div
        className={`container  ${cart?.isOpen ? "show" : ""}`}
        onClick={() => openCloseCart(false)}
      >
        <div className="mini-cart" onClick={(e) => e.stopPropagation()}>
          <p style={{ marginBottom: "23px", fontWeight: 500 }}>
            <span style={{ fontWeight: 700 }}>My bag</span>, 2 items
          </p>
          <MiniCartCard title="Apollo Running Short" price={50} />
          <MiniCartCard title="Apollo Running Short" price={50} />
          <MiniCartCard title="Apollo Running Short" price={50} />
          <MiniCartCard title="Apollo Running Short" price={50} />
          <div className="total__container">
            <p>Total</p>
            <p style={{ fontWeight: 700 }}>$100.00</p>
          </div>

          <div className="button__container">
            <RegularButton title="View bag" />
            <SuccessButton title="CHECK OUT" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { openCloseCart })(MiniCart);
