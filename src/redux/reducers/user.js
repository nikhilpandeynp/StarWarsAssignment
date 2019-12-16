import { LOGIN_USER } from "../actionTypes";

const initialState = {
    loggedIn: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER: {
      const { name } = action.payload;
      return {
        ...state,
        loggedIn: true,
        name
      };
    }
    default:
      return state;
  }
}
