import {Meteor} from 'meteor/meteor';

export function logout(){
  console.log('Logging out.')
  Meteor.logout();
}

export function login(username, password, dest){
  Meteor.loginWithPassword(username, password, (err, res) => {
    if(err){
      alert(err.toString());
    }else{
      if(dest){ FlowRouter.go(dest); }
      return;
    }
  })
}

export function listToString(l,d){
  return l.reduce((a,v)=>a+(v&&((typeof(v) === 'string' && v.length) || typeof(v)==='number')?((d?d:' - ')+v):''),'a')
}