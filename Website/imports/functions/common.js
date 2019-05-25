import {Meteor} from 'meteor/meteor';

export function logout(){
  console.log('Logging out.')
  Meteor.logout();
}

export function login(username, password, callback){
  Meteor.loginWithPassword(username, password, (err, res) => {
    if(err){
      alert(err.toString());
    }else{
      if(callback){ callback(); }
      return;
    }
  })
}