'use strict'

import React from 'react'

const Repos = ({className, reposName, repos}) => (
  <div className={className}>
    <h2>{reposName}:</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
  </div>
)

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  className: React.PropTypes.string,
  reposName: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array
}

export default Repos