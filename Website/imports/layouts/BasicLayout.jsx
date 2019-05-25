import React from 'react'
import {Session} from 'meteor/session';

import {InternalLink} from '/imports/ui/input.jsx';

const App = props => {
  if(props.auth){
    if(!Meteor.userId()){
      return (
        <div>
          Please login to continue
          <InternalLink dest='Login' text='Login' />
        </div>
      )
    }
  }
  return <div>{props.content}</div>
}

export default App