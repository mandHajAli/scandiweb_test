import React from "react";
import { connect } from "react-redux";

import Dropdown from "../dropdown/Dropdown";
import {
  openCloseCart,
  openCloseDropdown,
  changeCurrency,
} from "../../actions";
import "./nav.css";
import logo from "../../assets/icons/logo.png";
import cartLogo from "../../assets/icons/cart.png";
import arrow from "../../assets/icons/arrow.png";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navi: "women",
      showDropdown: false,
    };
  }

  onCartClick = () => {
    const { cart, openCloseCart } = this.props;
    openCloseCart(!cart.isOpen);
  };

  render() {
    const { navi } = this.state;
    const { currency, openCloseDropdown, changeCurrency } = this.props;

    return (
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__item">
            <div className="navigations">
              <a
                href="#"
                className={`navigations__item ${navi === "women" && "active"}`}
                onClick={() => this.setState({ navi: "women" })}
              >
                women
              </a>
              <a
                href="#"
                className={`navigations__item ${navi === "men" && "active"}`}
                onClick={() => this.setState({ navi: "men" })}
              >
                men
              </a>
              <a
                href="#"
                className={`navigations__item ${navi === "kids" && "active"}`}
                onClick={() => this.setState({ navi: "kids" })}
              >
                kids
              </a>
            </div>
          </div>

          <div className="nav__item nav__item-logo">
            <img className="nav__item__logo" src={logo} alt="Logo" />
          </div>

          <div className="nav__item cart">
            {/* put dropdown here */}
            <Dropdown
              visible={currency?.isOpen}
              data={currency?.currencies}
              onSelect={(value) => changeCurrency(value)}
            />
            <p
              className="currency"
              onClick={() => {
                openCloseDropdown(!currency?.isOpen);
              }}
            >
              {currency.activeCurrency}
              <img
                src={arrow}
                alt="^"
                style={
                  !currency?.isOpen
                    ? { transform: "scaleY(-1)", marginTop: "5px" }
                    : { marginTop: "5px" }
                }
              />
            </p>
            <div
              style={{ cursor: "pointer", position: "relative" }}
              onClick={this.onCartClick}
            >
              <div className="number-of-items">
                <p>2</p>
              </div>
              <img src={cartLogo} alt="Cart" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    currency: state.currency,
  };
};

export default connect(mapStateToProps, {
  openCloseCart,
  openCloseDropdown,
  changeCurrency,
})(Nav);
