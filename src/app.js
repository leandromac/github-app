'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: {
        photo: 'https://avatars2.githubusercontent.com/u/4989860?v=4',
        username: 'Leandro Macedo',
        repos: 12,
        followers: 10,
        following: 20
      },
      repos:[{
        name: 'Repositório 1',
        link: '#'
      }],
      starred: [{
        name: 'Repositório 1',
        link: '#'
      }]
    }
  }

  render() {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}

export default App