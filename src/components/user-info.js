'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars2.githubusercontent.com/u/4989860?v=4' />
    
    <h1 className='username'>
      <a href='https://github.com/leandromac'>Leandro Macedo</a>
    </h1>

    <div className='repos-info'>
      <ul>
        <li>Repositórios: 100</li>
        <li>Seguidores: 10</li>
        <li>Seguindo: 10</li>
      </ul>
    </div>
  </div>
)

export default UserInfo