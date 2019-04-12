import reducer from '../../store/reducers/createQuestionReducer';
import * as actions from '../../store/actions/actionsTypes';

const initialState = {
  questions: [],
  content_pk: '',
  difficultyLevel: null,
};

describe('create questions reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });

  it('should store the content pk', () => {
    expect(reducer(initialState, {type: actions.ADD_CONTENT_PK, payload: 'content-pk'})).toEqual:({
      questions: [],
      content_pk: 'content-pk',
      difficultyLevel: null,
    })
  });

  it('should', () => {

  });

  it('should', () => {

  });

  it('should', () => {

  });

  it('should', () => {

  });
});