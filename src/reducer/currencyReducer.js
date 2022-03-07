import { OPEN__CLOSE_DROPDOWN, CHANGE_CURRENCY } from "../constants";

const initState = {
  isOpen: false,
  currencies: [
    {
      value: "$",
      label: "$ USD",
    },
    {
      value: "€",
      label: "€ EUR",
    },
    {
      value: "¥",
      label: "¥ JPY",
    },
  ],
  activeCurrency: "$",
};

export default function currencyReducer(state = initState, action) {
  switch (action.type) {
    case OPEN__CLOSE_DROPDOWN:
      return { ...state, isOpen: action.payload };
    case CHANGE_CURRENCY:
      return {
        ...state,
        activeCurrency: action.payload,
        isOpen: false,
      };
    default:
      return state;
  }
}
