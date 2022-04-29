import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not_found_container'> 
        <h1>Error</h1>
        <h1 className='nfb'>404</h1>
        <h1>Sorry, page not found</h1>
        <Link className='return_to_home' to='/'>Return to the home page</Link>
    </div>
  )
}

export default NotFound