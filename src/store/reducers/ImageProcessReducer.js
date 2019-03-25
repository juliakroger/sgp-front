import * as actions from '../actions/actionsTypes';

const initialState = {
  dataProcess: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_PROCESS_IMAGE:
      return {
        ...state,
        dataProcess: action.payload,
      }

    default:
      return state;
  }
};

export default reducer;