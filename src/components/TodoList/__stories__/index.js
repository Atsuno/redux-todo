import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import TodoList from '../component'

const filterProps = {
  filter: action('filter')
}

storiesOf('TodoList', module)
  .addDecorator(component => <div style={{ width: '80%', textAlign: 'center', marginTop: '50px' }}>{component()}</div>)
  .addWithInfo('default', '', () => (
    <TodoList {...filterProps} />
  ))