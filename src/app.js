'use strict'

import React from 'react'
import Title from './title'

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Title
          name='Leandro Macedo'
          age='34'
        />
      </div>
    )
  }
})

export default App