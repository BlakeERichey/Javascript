import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

import {BasicInput, BasicPass, BasicButton} from '/imports/ui/input.jsx';

class CreateUser extends React.Component{
  constructor(){super();}

  render(){
    return(
      <div>
        <p className='header'>Create User</p>
        <BasicInput ref='user' placeholder='Username'/>
        <BasicPass ref='pass' style={{paddingTop: '2px'}} />
        <BasicButton style={{float: 'right'}} onClick={this.submit.bind(this)}/>
      </div>
    )
  }

  submit(){
    const username = this.refs.user.getValue();
    const password = this.refs.pass.getValue();
    Accounts.createUser({username, password}, (err) => {
      if(err){
        alert(`Unable to create user: ${err}`);
      }else{
        alert(`User created:\nUsername: ${username}\nPassword: ${password}`);
        Meteor.call('user.created', username, (err) => {
          if(err){
            console.log(err);
          }
        });
      }
    });
  }
}
export default CreateUser;