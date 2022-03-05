const initState = {
};

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case "":
      return Object.assign(state, action.payload);
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
