import React from "react";
import { connect } from "react-redux";

import "./nav.css";
import logo from "../../assets/icons/logo.png";
import cartLogo from "../../assets/icons/cart.png";
import { openCloseCart } from "../../actions";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navi: "women",
    };
  }

  onCartClick = () => {
    const { cart, openCloseCart } = this.props;
    openCloseCart(!cart.isOpen);
  };

  render() {
    const { navi } = this.state;
    return (
      <nav className="nav">
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
          <p className="currency">$</p>
          <img
            style={{ cursor: "pointer" }}
            src={cartLogo}
            alt="Cart"
            onClick={this.onCartClick}
          />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { openCloseCart })(Nav);
