import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import SearchTodo from '../component'

const searchItemProps = {
  searchItem: action('searchItem')
}

storiesOf('SeatchTodo', module)
  .addDecorator(component => <div style={{ width: '80%', textAlign: 'center', marginTop: '50px' }} >{component()}</div>)
  .addWithInfo('default', '', () => (
    <SearchTodo {...searchItemProps} />
  ))