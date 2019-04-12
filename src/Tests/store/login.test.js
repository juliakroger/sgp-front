import reducer from '../../store/reducers/loginReducer';
import * as actions from '../../store/actions/actionsTypes';

const initialState = {
  username: '',
  password: '',
}

describe('login reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined,{})).toEqual(initialState)
  });

  it('should store username', () => {
    expect( reducer(initialState, {type: actions.USERNAME_ENTER, payload: 'username'})).toEqual({ username: 'username', password: '' });
  });

  it('should store password', () => {
    expect( reducer(initialState, {type: actions.PASSWORD_ENTER, payload: 'password'})).toEqual({ username: '', password: 'password' });
  });
});