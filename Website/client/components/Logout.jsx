import React from 'react'

import {BasicButton} from '/imports/ui/input.jsx';
import {logout} from '/imports/functions/common.js';

const Logout = () => { 
  return (
    <div>
      Thanks for logging in!
      <div></div>
      <BasicButton dest='Home' text='Logout' 
        onClick={() => {
          logout();
          FlowRouter.go('Home');
        }}/>
    </div>
  )
}

export default Logout