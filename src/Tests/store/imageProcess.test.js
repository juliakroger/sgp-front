import reducer from '../../store/reducers/ImageProcessReducer';
import * as actions from '../../store/actions/actionsTypes';

const initialState = {
  fileName: '',
  dataProcess: ''
};

describe('image process reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined,{})).toEqual(initialState)
  });

  it('should store the process image', () => {
    expect( reducer(initialState, {type: actions.ADD_PROCESS_IMAGE, payload: 'process-image'})).toEqual({fileName: '', dataProcess: 'process-image'})
  });

  it('should store the file name', () => {
    expect( reducer(initialState, {type: actions.ADD_FILE_NAME, payload: 'file-name' })).toEqual({fileName: 'file-name', dataProcess: ''})
  });
})