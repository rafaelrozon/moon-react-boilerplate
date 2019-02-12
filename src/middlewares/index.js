import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import composeEnhancer from './composeEnhancer';

export default composeEnhancer(
        applyMiddleware(
            thunk
        )
    );
