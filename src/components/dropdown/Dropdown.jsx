import React from "react";

import "./dropdown.css";

class Dropdown extends React.Component {
  render() {
    const { visible, data, onSelect } = this.props;
    return (
      <div className={`dropdown ${visible ? "dropdown__show" : ""}`}>
        {data.map((el, i) => (
          <p key={i} className="dropdown__item" onClick={() => onSelect(el.value)}>
            {el.label}
          </p>
        ))}
        {/* <p
          className="dropdown__item"
          onClick={() => this.setState({ showDropdown: false })}
        >
          $ USD
        </p>
        <p
          className="dropdown__item"
          onClick={() => this.setState({ showDropdown: false })}
        >
          € EUR
        </p>
        <p
          className="dropdown__item"
          onClick={() => this.setState({ showDropdown: false })}
        >
          ¥ JPY
        </p> */}
      </div>
    );
  }
}

export default Dropdown;
