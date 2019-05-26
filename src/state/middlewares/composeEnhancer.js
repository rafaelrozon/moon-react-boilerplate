import { composeWithDevTools } from 'redux-devtools-extension';
import { compose } from 'redux';

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
    composeEnhancers = composeWithDevTools
}

export default composeEnhancers;
