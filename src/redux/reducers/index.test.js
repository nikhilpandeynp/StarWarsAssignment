import reducer from './';
import * as types from '../actionTypes';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        user: {
            loggedIn: false
        }
      }
    )
  })

  it('should handle LOGIN_USER', () => {
    expect(
      reducer({}, {
        type: types.LOGIN_USER,
        payload: {
            name: 'Luke Skywalker'
        }
      })
    ).toEqual(
      {
        user: {
            loggedIn: true,
            name: 'Luke Skywalker'
        }
      }
    )
  })
})