import {Meteor} from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
  'user.create'(username, password){ //DO NOT CALL THIS FROM CLIENT
    if(!username || !password){
      throw new Meteor.Error(400, 'Insufficient Data', 'Need username and password');
    }
    const res = Accounts.createUser({username, password})

    return res;
  },
  'user.created'(username){
    console.log('User created:', username);
  },
});