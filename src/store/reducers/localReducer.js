import * as actions from '../actions/actionsTypes';

const initialState = {
    atualLocal: '',
    client_group: '',
    client_unit: '',
    name: '',
    short_name: '',
    legacy_key: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ATUAL_LOCAL:
            return {
                ...state,
                atualLocal: action.payload,
            }


        default:
            return state;
    }
};

export default reducer;