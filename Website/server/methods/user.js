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
  'user.created'(username, role){
    console.log('User created:', username, "\nRole:", role);
    doc = Meteor.users.findOne({username})
    Roles.addUsersToRoles(doc._id, role || 'user', Roles.GLOBAL_GROUP);
  },
  'user.set.password'(id, newPassword){ //DO NOT CALL THIS FROM CLIENT
    Accounts.setPassword(id, newPassword);
  }
});