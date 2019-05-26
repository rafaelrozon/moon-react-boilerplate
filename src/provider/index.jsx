import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { store } from '~/state';
import { trans } from '~/translations';

export default class AppProvider extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <I18nextProvider i18n={ trans }>
                <Provider store={store}>
                    <Router>
                        {children}
                    </Router>
                </Provider>
            </I18nextProvider>
        );
    }
}
