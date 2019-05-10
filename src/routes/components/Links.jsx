import React from 'react';
import * as R from 'ramda';
import * as Constants from '../constants';
import Link from './Link';

const wrapLink = props => childProps =>
    <Link
        {...props}
        {...childProps}
    />;


const Config = {}

R.keys(Constants.routes).forEach(route => {
    Config[route] = wrapLink(Constants.routes[route]);
});

export default Config;
