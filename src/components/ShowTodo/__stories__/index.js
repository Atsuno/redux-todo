import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import ShowTodo from '../component'

const showItemProps = {
  showItem: action('showItem')
}

storiesOf('ShowTodo', module)
  .addDecorator(component => <div style={{ width: '80%', textAlign: 'center', marginTop: '50px' }} >{component()}</div>)
  .addWithInfo('default', '', () => (
    <ShowTodo {...showItemProps} />
  ))