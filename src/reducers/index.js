/*
import { combineReducers } from 'redux';
import rootSaga from '../sagas';
import configureStore from '../store/store';

import loginReducers from './loginReducers';
import appReducers from './appReducers';

export default () => {
    const rootReducer = combineReducers({
        login: loginReducers,
        app: appReducers,
    })

    return configureStore(rootReducer, rootSaga)
}
*/