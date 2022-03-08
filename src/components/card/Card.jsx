import React from "react";
import { Link } from "react-router-dom";

import styles from "./card.css";
import pic from "./baby.jpg";
import cartIcon from "../../assets/icons/cart-white.png";

class Card extends React.Component {
  render() {
    const { title, price, inactive, onCartClick } = this.props;
    return (
      <div className={`main-card ${inactive ? "main-card__inactive" : ""}`}>
        <div
          style={{
            width: "354px",
            height: "330px",
            marginBottom: "24px",
            position: "relative",
          }}
        >
          <img width={"100%"} height={"100%"} src={pic} />
          {inactive && (
            <p
              style={{
                position: "absolute",
                fontSize: "24px",
                color: "var(--color-grey)",
                zIndex: 1,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              OUT OF STOCK
            </p>
          )}
          <Link
            to={"/product"}
            onClick={() => !inactive && onCartClick()}
            className="main-card__cart"
            style={inactive ? { cursor: "not-allowed" } : {}}
          >
            <img src={cartIcon} alt="" />
          </Link>
        </div>
        <p
          className={"main-card__title"}
          style={
            inactive
              ? {
                  color: "var(--color-grey)",
                }
              : {}
          }
        >
          {title}
        </p>
        <p
          className={"main-card__price"}
          style={
            inactive
              ? {
                  color: "var(--color-grey)",
                }
              : {}
          }
        >
          {price}
        </p>
      </div>
    );
  }
}

export default Card;
