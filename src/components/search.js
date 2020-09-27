'use strict'

import React from 'react'
import ajax from '@fdaciuk/ajax'

const Search = () => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome de usuário do Github'
      onKeyUp={(e) => {
        const value = e.target.value
        const keycode = e.which || e.keycode
        const ENTER = 13
        if(keycode === ENTER) {
          ajax().get(`https://api.github.com/users/${value}`)
            .then((result) => {
              console.log(result)
            })
        }
        
      }}
    />
  </div>
)

export default Search