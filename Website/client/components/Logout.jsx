import React from 'react'

import {InternalLink} from '/imports/ui/input.jsx';

const Logout = () => {
  return (
    <div>
      Thanks for logging in!
      <div></div>
      <InternalLink dest='Home' text='Logout' />
    </div>
  )
}

export default Logout