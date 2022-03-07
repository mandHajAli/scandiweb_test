import { OPEN__CLOSE_CART } from "../constants";

const initState = {
  isOpen: false,
};

export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case OPEN__CLOSE_CART:
      return { ...state, isOpen: action.payload };
    case "":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case "":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    default:
      return state;
  }
}
