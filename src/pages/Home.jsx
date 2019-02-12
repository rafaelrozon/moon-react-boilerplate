import React from 'react';
import { Row, Col } from 'antd';
import Button from '@features/ui/Button'
import { translate } from '@decorators';


@translate
class HomePage extends React.Component {
    render() {
        const { t } = this.props;
        return (
        <Row type="flex" justify="center">
            <Col>
                <h2>{t('homePage')}</h2>
            </Col>
        </Row>
        );
    }
};

export default HomePage;
