import { take, takeLatest } from 'redux-saga/effects'
import { put, call } from 'redux-saga/effects';
import Actions, { Types } from '../actions/loginActions';
import api from '../services/api'

export function* login(api, { email, password }) {
    try {
        const response = yield call(api.login, email, password);
        if (response == undefined) {
            yield put(Actions.loginFailure('WRONG'))
        } else {
            const user = response.data.user;
            yield put(Actions.loginSuccess(user));
        }
    } catch (error) {
        console.warn(error.message);
        yield put(Actions.loginFailure(error));
    } finally {

    }
}

export default function* rootSaga() {
    yield takeLatest(Types.LOGIN_REQUEST, login, api)
}