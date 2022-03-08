import React from "react";

import "./successButton.css";

class SuccessButton extends React.Component {
  render() {
    const { onPress, title, style } = this.props;
    return <button className="btn__success" style={style}>{title}</button>;
  }
}

export default SuccessButton;
