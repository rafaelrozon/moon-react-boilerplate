import React from 'react';
import styled from 'styled-components';

export const TodoItemStyles = styled.div`
  overflowX: 'hidden';
  textOverflow: 'ellipsis';
  cursor: 'pointer';
  ${props => {
    if (props.completed) {
      return "textDecoration: 'line-through'; opacity: 0.4"
    }
  }}
`;

const TodoItem = ({ item, toggleItem }) =>
  <TodoItemStyles onClick={toggleItem} completed={item.completed}>
    {item.title}
  </TodoItemStyles>


export default TodoItem;
