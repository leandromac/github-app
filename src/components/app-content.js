'use strict'

import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = () => (
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

export default AppContent