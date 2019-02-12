/**
 * UserLink - Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link as RRDLink } from "react-router-dom";
import { translate } from '@decorators';
import { Icon } from 'antd';

@translate
export default class Link extends React.Component {
    static propTypes = {
        children: PropTypes.element,
        icon: PropTypes.string,
        route: PropTypes.string,
        text: PropTypes.string,
        withIcon: PropTypes.bool,
        t: PropTypes.func
    };

    static defaultProps = {
        params: {},
        withIcon: false
    };

    render() {
        const { children, icon, route, text, withIcon, t } = this.props;
        return (
            <RRDLink to={route}>
                {withIcon && <Icon type={icon} />}
                {children || t(text)}
            </RRDLink>
        );
    }
};



