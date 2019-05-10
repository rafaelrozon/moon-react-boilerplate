import React from 'react';
import { Row, Col } from 'antd';
import { TodoComponents } from '~/features/todo';
import { translate } from '~/decorators/index';

@translate
class TodosPage extends React.Component {

    render() {
        const { t } = this.props;
        return (
            <Row type="flex" justify="center">
                <Col>
                    <h2>{t('todosPage')}</h2>
                    <TodoComponents.Main />
                </Col>
            </Row>
        );
    }
}

export default TodosPage;
