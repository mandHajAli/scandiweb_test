import { OPEN__CLOSE_CART } from "../constants";

export const openCloseCart = (isOpen) => async (dispatch) => {
  dispatch({
    type: OPEN__CLOSE_CART,
    payload: isOpen,
  });
};
