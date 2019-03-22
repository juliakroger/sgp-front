import * as actions from '../actions/actionsTypes';


const initialState = {
  username: '',
  password: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USERNAME_ENTER:
      return {
        ...state,
        username: action.payload,
      }

    case actions.PASSWORD_ENTER:
      return {
        ...state,
        password: action.payload,
      }

    default:
      return state;
  }
};

export default reducer;