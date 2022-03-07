import React from "react";

import "./successButton.css";

class SuccessButton extends React.Component {
  render() {
    const { onPress, title } = this.props;
    return <button className="btn__success">{title}</button>;
  }
}

export default SuccessButton;
