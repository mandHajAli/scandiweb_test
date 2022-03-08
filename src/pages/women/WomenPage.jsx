import React from "react";
import { useNavigate } from "react-router-dom";

import CardList from "../../components/cardList/CardList";

class WomenPage extends React.Component {
  render() {
    return <CardList />;
  }
}

// export default function (props) {
//   const navigation = useNavigate();

//   return <WomenPage {...props} navigation={navigation} />;
// }

export default WomenPage