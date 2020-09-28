'use strict'

import React, { PropTypes } from 'react'

const UserInfo = ({ userinfo }) => (
  <div className='user-info'>
    <img src={userinfo.photo} />
    
    <h1 className='username'>
      <a href={`https://github.com/${userinfo.login}`}>
        {userinfo.username}
      </a>
    </h1>
    { !!userinfo.bio &&
      <h5>
        {userinfo.bio}
      </h5>
    }
    { !!userinfo.location &&
      <p>
        {userinfo.location}<br/>
        <a href={userinfo.blog} target='_blank'>{userinfo.blog
          .replace('http://www.','').replace('https://www.', '')}</a>
      </p>
    }

    <div className='repos-info'>
      <ul>
        <li>Repositórios: {userinfo.repos}</li>
        <li>Seguidores: {userinfo.followers}</li>
        <li>Seguindo: {userinfo.following}</li>
      </ul>
    </div>
  </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string,
    bio: PropTypes.string.isRequired,
    blog: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  })
}

export default UserInfo