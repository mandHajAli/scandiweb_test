import React from "react";

import "./sizeButton.css";

class SizeButton extends React.Component {
  render() {
    const { active, size, notAvailable } = this.props;
    return (
      <button className={`btn__size ${active ? "btn__size__activeSize" : ""}`} style={notAvailable? {color: '#A6A6A6'}: {}} disabled={notAvailable} onClick={() => console.log("nosacb")}>
        {size}
      </button>
    );
  }
}

export default SizeButton;
