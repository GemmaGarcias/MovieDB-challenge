import * as actions from '../../actions/index'
import * as types from '../../constants/ActionTypes'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const id = 'Finish docs'
    const expectedAction = {
      type: types.GET_GENRES_LIST,
      text
    }
    expect(actions.getGenresList(id)).toEqual(expectedAction)
  })
})