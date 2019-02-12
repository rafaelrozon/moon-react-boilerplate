import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import TodoItem from './components/TodoItem';

const stories = storiesOf('Todo', module);
stories.addDecorator(withKnobs);

stories.add('TodoItem', () => 
    <TodoItem 
        item={{
            title: text('title', 'My Todo'),
            completed: boolean('completed')
        }}        
    />  
);

