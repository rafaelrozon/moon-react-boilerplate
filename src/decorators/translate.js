import React from 'react';
import getDisplayName from 'react-display-name';
import { withNamespaces } from 'react-i18next';

const translate = (WrappedComponent) => {

    class Container extends React.Component {
        static displayName = `TranslateContainer(${getDisplayName(WrappedComponent)})`;
        render() {
          return (
            <WrappedComponent {...this.props} />
          );
        }
    }
    return withNamespaces()(Container);
};

export default translate;