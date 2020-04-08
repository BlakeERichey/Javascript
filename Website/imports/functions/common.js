import {Meteor} from 'meteor/meteor';

export function logout(callback){
  console.log('Logging out.')
  Meteor.logout(callback);
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

//l: list
//d: delimeter
export function listToString(l,d){
  return l.reduce((a,v)=>a+(v&&((typeof(v) === 'string' && v.length) 
    || typeof(v)==='number')?(a?((d?d:' - ')+v):v):''),'')
}

//Validates user has permission to view this component
export function validUserCred(roles){
  valid = false;
  if(roles === undefined){
    valid = true;
  }else if(Array.isArray(roles) && roles.length > 0){
    const userId = Meteor.userId();
    if(userId){
      valid = Roles.userIsInRole(userId, roles, Roles.GLOBAL_GROUP);
    }
  }

  return valid;
}