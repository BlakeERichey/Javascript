import { Meteor } from 'meteor/meteor';
import { nven } from '/libs/collections.js';

Meteor.startup(() => {
  //Create user roles
  Roles.createRole('admin', {unlessExists: true});
  Roles.createRole('user', {unlessExists: true});

  Meteor.call('user.create', 'Admin','admin', (err, res) => {
    if(err){
    }else{
      console.log('res', res);
    }
    doc = Meteor.users.findOne({username: 'Admin'});
    console.log('Admin id:', doc._id);
    Roles.addUsersToRoles(doc._id, 'admin', Roles.GLOBAL_GROUP);
  });

  // console.log('Users:');
  // users = Meteor.users.find().forEach((user) => {
  //   console.log(user);
  // });

  callFromClient = Meteor.bindEnvironment((userId, nodeObj, client) => {
    Meteor.call('nven.updateFromClient', userId, nodeObj, (err, res) => {
      if(err){
        if(err.error == 'validation-error'){
          console.log(err);
          client.writeHead(400);
          client.end(`Error 400. Malformed Request.`);
        }else{
          console.log('Internal Server Error', err);
          client.writeHead(500);
          client.end(`Error 500. Internal Server Error.`);
        }
      }else{
        client.writeHead(200);
        client.end(JSON.stringify(res));
      }
    });
  });

  // Listen to incoming HTTP requests (can only be used on the server).
  WebApp.connectHandlers.use('/nven-api', (req, res, next) => {
    var body = '';
    req.on('readable', () => {
      body += req.read();
    });
    req.on('end', () => {
      try{
        let content = JSON.parse(body);
        try{//update node... potentially
          userId = content.owner;
          
          //form proper nodeObj
          nodeObj = content
          delete nodeObj.owner 
          nodeObj._id = nodeObj.nodeId
          delete nodeObj.nodeId

          //Update
          callFromClient(userId, nodeObj, res);
        }catch(malformedContent){
          throw malformedContent;
        }    
      }catch(e){
        console.log(e);
        res.writeHead(400);
        res.end(`Error 400. Bad Request Schema.`);
      }
    });
  });
});
