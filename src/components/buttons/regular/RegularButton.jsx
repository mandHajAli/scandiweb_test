import React from "react";

import "./regularButton.css";

class RegularButton extends React.Component {
  render() {
    const { title } = this.props;
    return <button className="btn__regular">{title}</button>;
  }
}

export default RegularButton;
