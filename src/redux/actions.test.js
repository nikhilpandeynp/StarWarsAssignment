import * as actions from './actions';
import * as types from './actionTypes';

describe('actions', () => {
    it('should create an action to login', () => {
        const name = 'Luke Skywalker';
        const expectedAction = {
            type: types.LOGIN_USER,
            payload: {
                name
            }
        }
        expect(actions.loginUser(name)).toEqual(expectedAction);
    })
})