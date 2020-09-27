'use strict'

import React from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

const App = () => (
  <div className='app'>

    <Search/>
    <UserInfo/>
    <Actions/>

    <Repos
      className='repos'
      reposName='Repositório'
      repos={[
        {
          name: 'Nome do repositório 1',
          link: '#'
        },
        {
          name: 'Nome do repositório 2',
          link: '#'
        },
        {
          name: 'Nome do repositório 3',
          link: '#'
        }
      ]}
    />

    <Repos
      className='starred'
      reposName='Favoritos'
      repos={[
        {
          name: 'Nome do repositório 1',
          link: '#'
        },
        {
          name: 'Nome do repositório 2',
          link: '#'
        },
        {
          name: 'Nome do repositório 3',
          link: '#'
        }
      ]}
    />

  </div>
)

export default App