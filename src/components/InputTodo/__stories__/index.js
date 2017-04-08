import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import InputTodo from '../component'

const addInputProps = {
  addInput: action('addInput')
}

storiesOf('InputTodo', module)
  .addDecorator(component => <div style={{ width: '80%', textAlign: 'center', marginTop: '50px' }} >{component()}</div>)
  .addWithInfo('default', '', () => (
    <InputTodo {...addInputProps} />
  ))