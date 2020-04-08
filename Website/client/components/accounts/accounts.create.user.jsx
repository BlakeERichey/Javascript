import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

import {BasicInput, BasicPass, BasicButton, BasicSingleSelect} from '/imports/ui/input.jsx';

class CreateUser extends React.Component{
  constructor(){super();
    this.state = {
      role: 'user',
    }
  }

  render(){
    return(
      <div>
        <p className='header'>Create User</p>
        <BasicInput ref='user' placeholder='Username'/>
        <BasicPass ref='pass' style={{paddingTop: '2px'}} />
        <BasicSingleSelect name='Role' width='100%' defaultValue='user'
          vals={['admin', 'user']} onChange={(val) => {this.setState({role: val})}}
        />
        <BasicButton style={{float: 'right'}} onClick={this.submit.bind(this)}/>
      </div>
    )
  }

  submit(){
    const role     = this.state.role;
    const username = this.refs.user.getValue();
    const password = this.refs.pass.getValue();
    Accounts.createUser({username, password}, (err, res) => {
      if(err){
        alert(`Unable to create user: ${err}`);
      }else{
        alert(`User created:\nUsername: ${username}\nPassword: ${password}`);
        Meteor.call('user.created', username, role, (err) => {
          if(err){
            console.log(err);
          }
        });
      }
      Roles.add
    });
  }
}
export default CreateUser;