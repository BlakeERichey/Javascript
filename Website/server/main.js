import { Meteor } from 'meteor/meteor';
import { nven } from '/libs/collections.js';

Meteor.startup(() => {
  Meteor.call('user.create', 'Admin','admin', (err, res) => {
    if(err){
    }else{
      console.log('res', res);
    }
  });

  // console.log('Users:');
  // users = Meteor.users.find().forEach((user) => {
  //   console.log(user);
  // });
  // blake ='Nx2J3eMG2MB7RD7gv';
  // admin = 'EytZ6GCD7pEkvfk29';
  // userId = blake;
  // sensor = {
  //   desc: 'This sensor is dedicated to measuring weight of honey.',
  //   weight: 195,
  //   threshold: 87
  // };

  // node = {
  //   sensors: [sensor],
  //   ttl: 300
  // };

  // Meteor.call('nven.addNode', userId, node, (err, res) => {
  //   if(err){
  //     console.log(err);
  //   }else{
  //     console.log('Nven Node Created Successully');
  //   }
  // })

  // console.log('Documents');
  // nven.find().forEach(pi => {
  //   console.log(JSON.stringify(pi, null, 2));
  // })

  // Listen to incoming HTTP requests (can only be used on the server).
  WebApp.connectHandlers.use('/nven', (req, res, next) => {
    var body = '';
    req.on('readable', () => {
      body += req.read();
    });
    req.on('end', () => {
      try{
        let content = JSON.parse(body);
        try{//update node... potentially
          userId = content.owner;
          nodeObj = content
          delete nodeObj.owner //form proper nodeObj

          // //Update
          // Meteor.call('nven.updateNode', userId, nodeObj, (err, res) => {
          //   if(err){
          //     console.log('Internal Server Error', err);
          //   }else{
          //     res.writeHead(200);
          //     res.end(`Hello world from: ${Meteor.release}`);
          //   }
          // });
          content.ttl += 10;
          doc = content
          res.writeHead(200);
          res.end(JSON.stringify(doc));
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
