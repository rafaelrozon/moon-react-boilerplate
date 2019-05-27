import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { TodosFilter } from '../constants';
import { getTodosFilter } from '../selectors';
import { actions } from '../state';

const SEPARATOR = ' | ';
const FILTERS = [TodosFilter.All, SEPARATOR, TodosFilter.Active, SEPARATOR, TodosFilter.Completed];

const ButtonStyle = styled.span`
  cursor: pointer;
  ${props => {
        if (props.active) {
            return "textDecoration: 'underline'; fontWeight: 'bold'";
        }
        return 'opacity: 0.4;'
    }}
`;

class TodoFilters extends React.Component {
    render() {
        const { currentFilter, changeFilter } = this.props;

        const Button = (idx, filter) => (
            <ButtonStyle
                key={idx}
                onClick={() => changeFilter(filter)}
                active={filter === currentFilter}
            >
                {filter.toString()}
            </ButtonStyle>
        );

        return (
            <div>
                {FILTERS.map(
                    (filter, idx) =>
                        filter === SEPARATOR ? SEPARATOR : Button(idx, filter)
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentFilter: getTodosFilter(state)
});
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilters)
