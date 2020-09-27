'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: null,
      repos:[],
      starred: []
    }
      // repos:[{
      //   name: 'Repositório 1',
      //   link: '#'
      // }],
      // starred: [{
      //   name: 'Repositório 1',
      //   link: '#'
      // }]
  }
  

  handleSearch(e) {
    const value = e.target.value
    const keycode = e.which || e.keycode
    const ENTER = 13
    if(keycode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            }
            
          })
        })
        
      ajax().get(`https://api.github.com/users/${value}/repos`)
        .then((result) => {
          this.setState({
            repos: 
              result.map((e) => {
                return { name: e.name, link: e.html_url }
              })
          })
        })

        ajax().get(`https://api.github.com/users/${value}/starred`)
        .then((result) => {
          this.setState({
            starred: 
              result.map((e) => {
                return { name: e.name, link: e.html_url }
              })
          })
        })
    }
    
  }

  render() {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e) => this.handleSearch(e)}
      getRepos={() => console.log('get repos')}
      getStarred={() => console.log('get starred')}
    />
  }
}

export default App