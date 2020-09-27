'use strict'

import React from 'react'

const Title = React.createClass({
  render: function() {
    return (
    <h1>Eu sou: {this.props.name}, tenho {this.props.age} anos.</h1>
    )
  }
})

export default Title