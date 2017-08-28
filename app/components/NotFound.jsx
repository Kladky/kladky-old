import React from 'react'
import { Link } from 'react-router'

const NotFound = props => {
  const {pathname} = props.location || {pathname: '<< no path >>'}
  console.error('NotFound: %s not found (%o)', pathname, props)
  return (
    <div>
      <h1>????????????????</h1>
      <p><pre>{pathname}</pre> can't be found!</p>
      <img src="/images/404.gif" />
      <p><Link to="/">Back to the main site</Link></p>
    </div>
  )
}

export default NotFound
