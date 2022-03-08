import React from "react";
import { connect } from "react-redux";

import MiniCart from "../components/MiniCart/MiniCart";
import Nav from "../components/nav/Nav";
import CartPage from "../pages/cart/CartPage";
import { openCloseDropdown } from "../actions";
import "./layout.css";

class TheLayout extends React.Component {
  render() {
    const { children, openCloseDropdown } = this.props;
    return (
      <div style={{ position: "relative" }}>
        <MiniCart />
        <div onClick={() => openCloseDropdown(false)} className="main">
          <div onClick={(e) => e.stopPropagation()}>
            <Nav />
          </div>
          {/* <div
                style={{
                  position: "relative",
                  width: "100%",
                }}
              > */}
          {/* <WomenPage /> */}
          {children}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default connect(null, { openCloseDropdown })(TheLayout);
