import React from 'react'
import { storiesOf } from '@kadira/storybook'
import SearchTodo from '../component'

storiesOf('SeatchTodo', module)
  .addDecorator(component => <div style={{ width: '80%', textAlign: 'center', marginTop: '50px' }} >{component()}</div>)
  .addWithInfo('default', '', () => (
    <SearchTodo />
  ))