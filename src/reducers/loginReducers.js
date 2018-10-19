
import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { Types } from '../actions/loginActions';

const INITIAL_STATE = Immutable({
    user: null,
    error: null,
    fetching: false
});

const loginRequest = (state) => (
    state.merge({ fetching: true })
)

const loginSuccess = (state, action) => {
    const { user } = action
    return state.merge({ fetching: false, error: null, loggedIn: true, user: user })
}

const loginFailure = (state, { error }) => {
    return state.merge({ fetching: false, error })
}

const logout = (state) => {
    return state.merge({ loggedIn: false })
}

export default createReducer(INITIAL_STATE, {
    [Types.LOGIN_REQUEST]: loginRequest,
    [Types.LOGIN_SUCCESS]: loginSuccess,
    [Types.LOGIN_FAILURE]: loginFailure,
    [Types.LOGOUT]: logout

})
