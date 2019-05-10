import { createStore } from 'redux';
import middlewares from '~/middlewares';
import rootReducer from './reducer'
import { DEFAULT_STATE } from './constants';

export default createStore(rootReducer, middlewares, DEFAULT_STATE);
