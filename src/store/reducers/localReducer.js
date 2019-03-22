import * as actions from '../actions/actionsTypes';


const initialState = {
  atualLocal: '',
  client_group: '',
  client_unit: '',
  name: '',
  short_name: '',
  legacy_key: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ATUAL_LOCAL:
      return {
        ...state,
        atualLocal: action.payload,
      }
    case actions.LOCAL_FIELD_FILL:
      return {
        ...state,
        client_group: action.payload.client_group,
        client_unit: action.payload.client_unit,
        name: action.payload.name,
        short_name: action.payload.short_name,
        legacy_key: action.payload.legacy_key,
      }

    default:
      return state;
  }
};

export default reducer;