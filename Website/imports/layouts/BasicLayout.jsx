import React from 'react'
import {Session} from 'meteor/session';

import {InternalLink} from '/imports/ui/input.jsx';

const App = props => {
  if(props.auth){
    if(!Meteor.userId()){
      return (
        <div>
          <div>
            Please login to continue
          </div>
          <div>
            <InternalLink dest='Login' text='Login' />
          </div>
        </div>
      )
    }
  }
  return (
    <div>
      <div className='navig'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <InternalLink dest='Home' text='Home'/>
            </li>
            <li className="nav-item">
              <InternalLink dest='About' text='About'/>
            </li>
          </ul>
        </div>
        </nav>
      </div>
      {props.content}
    </div>
  )
}

export default App