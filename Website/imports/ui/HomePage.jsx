import React from 'react'

import {InternalLink} from '/imports/ui/input.jsx';

const HomePage = () => {
  return (
    <div>
      Greetings! Thanks for visiting my page!
      <div></div>
      <InternalLink dest='Login' text='Login' />
    </div>
  )
}

export default HomePage