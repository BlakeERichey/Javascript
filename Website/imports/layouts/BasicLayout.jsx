import React from 'react'
import {Session} from 'meteor/session';

const App = props => {
  if(props.auth){
    if(!Meteor.userId()){
      return <div>Please login to continue</div>
    }
  }
  return <div>{props.content}</div>
}

export default App