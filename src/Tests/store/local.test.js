import reducer from '../../store/reducers/localReducer';
import * as actions from '../../store/actions/actionsTypes';

const initialState = {
  atualLocal: '',
  client_group: '',
  client_unit: '',
  name: '',
  short_name: '',
  legacy_key: '',
};

describe('local reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined,{})).toEqual(initialState)
  });

  it('shold store the atual local', () => {
    expect( reducer(initialState, {type: actions.ATUAL_LOCAL, payload: 'local-key'})).toEqual({
      atualLocal: 'local-key',
      client_group: '',
      client_unit: '',
      name: '',
      short_name: '',
      legacy_key: '',
    });
  });

  it('shold store the atual local informations', () => {
    expect( reducer(initialState, {type: actions.LOCAL_FIELD_FILL, payload: {
        client_group: 'client_group',
        client_unit: 'client_unit',
        name: 'name',
        short_name: 'short_name',
        legacy_key: 'legacy_key'
      }})).toEqual({
      atualLocal: '',
      client_group: 'client_group',
      client_unit: 'client_unit',
      name: 'name',
      short_name: 'short_name',
      legacy_key: 'legacy_key',
    });
  });
});