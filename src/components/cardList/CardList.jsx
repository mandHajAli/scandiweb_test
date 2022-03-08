import React from "react";

import Card from "../card/Card";
import "./cardList.css";

class CardList extends React.Component {
  render() {
    return (
      <div className="card-list__container">
        <h1 className="card-list__head">Category name</h1>
        <div className="card-list__wrapper">
          <Card title="Apollo Running Short" price="$50.00" />
          <Card title="Apollo Running Short" price="$50.00" inactive={true} />
          <Card title="Apollo Running Short" price="$50.00" />
          <Card title="Apollo Running Short" price="$50.00" />
          <Card title="Apollo Running Short" price="$50.00" />
          <Card title="Apollo Running Short" price="$50.00" />
          <Card title="Apollo Running Short" price="$50.00" />
          <Card title="Apollo Running Short" price="$50.00" />
          <Card title="Apollo Running Short" price="$50.00" />
        </div>
      </div>
    );
  }
}

export default CardList;
