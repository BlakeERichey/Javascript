import React from 'react';

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

    if((username||'').toLowerCase() === 'blake' && password === 'richey'){
      alert('Correct! You may log in!');
      FlowRouter.go('Logout');
    }else{
      alert('Incorrect username or password');
    }
  }
}

export default Login;