import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Meteor.call('user.create', 'Admin','admin', (err, res) => {
    if(err){
    }else{
      console.log('res', res);
    }
  });
});
