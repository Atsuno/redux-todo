import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import TodoItem from '../component'

const clickDeleteProps = {
  clickDelete: action('clickDelete')
}

const toggleTodoItemProps = {
  toggleTodoItem: action('toggleTodoItem')
}

storiesOf('TodoItem', module)
  .addDecorator(component => <div style={{ width: '80%', textAlign: 'center', marginTop: '50px' }}>{component()}</div>)
  .addWithInfo('default', '', () => (
    <TodoItem {...clickDeleteProps}{...toggleTodoItemProps} />
  ))
  .addWithInfo('with item false', '', () => (
    <TodoItem {...clickDeleteProps}{...toggleTodoItemProps} text={'text 10'} finish={false} />
  ))
  .addWithInfo('with item true', '', () => (
    <TodoItem {...clickDeleteProps}{...toggleTodoItemProps} text={'text 50'} finish />
  ))