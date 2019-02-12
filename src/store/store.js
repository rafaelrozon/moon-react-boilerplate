import { createStore } from 'redux';
import middlewares from '@middlewares/index';
import rootReducer from './reducer'

export default createStore(rootReducer, middlewares);
