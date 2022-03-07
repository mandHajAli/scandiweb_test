import React from "react";
import PropTypes from "prop-types";

import "./miniCartCard.css";

class MiniCartCard extends React.Component {
  render() {
    const { title, price } = this.props;
    return (
      <div className="mini-cart__card">
        <div className="details">
          <div className="title">{title}</div>
          <div className="price">${Number(price).toFixed(2)}</div>
          <div className="sizes">
            <p className="size activeSize">S</p>
            <p className="size">M</p>
          </div>
        </div>
        <div className="items">
          <div className="increments">
              <div className="plus" />
              <div className="count">1</div>
              <div className="minus" />
          </div>
          <div
            style={{ height: "137px", width: "105px", backgroundColor: "red" }}
          ></div>
        </div>
      </div>
    );
  }
}

MiniCartCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default MiniCartCard;
