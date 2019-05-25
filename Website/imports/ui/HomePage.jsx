import React from 'react'

import {InternalLink} from '/imports/ui/input.jsx';

const HomePage = () => {
  return (
    <div>
      Greetings! Thanks for visiting my page!
      <div></div>
      <InternalLink dest='Login' text='Login' />
      <InternalLink dest='CreateUser' text='Create User'/>
    </div>
  )
}

export default HomePage