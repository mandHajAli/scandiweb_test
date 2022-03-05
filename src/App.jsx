import React from "react";

import MiniCart from "./components/MiniCart/MiniCart";
import Nav from "./components/nav/Nav";

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div
          style={{
            width: "100%",
            height: "1000px",
            position: "relative",
          }}
        >
          <MiniCart />
        </div>
      </>
    );
  }
}

export default App;
