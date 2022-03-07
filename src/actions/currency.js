import { OPEN__CLOSE_DROPDOWN, CHANGE_CURRENCY } from "../constants";

export const openCloseDropdown = (isOpen) => async (dispatch) => {
  dispatch({
    type: OPEN__CLOSE_DROPDOWN,
    payload: isOpen,
  });
};

export const changeCurrency = (value) => async (dispatch) => {
  dispatch({
    type: CHANGE_CURRENCY,
    payload: value
  })
}