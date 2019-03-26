import * as actions from '../actions/actionsTypes';

const initialState = {
  fileName: '',
  dataProcess: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_PROCESS_IMAGE:
      return {
        ...state,
        dataProcess: action.payload,
      }
    case actions.ADD_FILE_NAME:
      return {
        ...state,
        fileName: action.payload,
      }

    default:
      return state;
  }
};

export default reducer;