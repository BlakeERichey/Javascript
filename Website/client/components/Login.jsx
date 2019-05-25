import React from 'react';
import {Meteor} from 'meteor/meteor';

import {login} from '/imports/functions/common.js';
import {BasicInput, BasicPass, BasicButton} from '/imports/ui/input.jsx';

class Login extends React.Component{
  constructor(){super();}

  render(){
    return(
      <div>
        <BasicInput ref='user' placeholder='Username'/>
        <BasicPass ref='pass' style={{paddingTop: '2px'}} />
        <BasicButton style={{float: 'right'}} onClick={this.submit.bind(this)}/>
      </div>
    )
  }

  submit(){
    const username = this.refs.user.getValue();
    const password = this.refs.pass.getValue();
    login(username, password, FlowRouter.go('Logout'));
  }
}
export default Login;