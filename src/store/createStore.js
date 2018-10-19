import { combineReducers } from 'redux';
import AppReducers from '../reducers/appReducers';
import LoginReducers from '../reducers/loginReducers';
import configureStore from './store';
import rootSaga from '../sagas';

export default () => {
  const rootReducer = combineReducers({
    login: LoginReducers,
    app: AppReducers
  });

  return configureStore(rootReducer, rootSaga);
}

