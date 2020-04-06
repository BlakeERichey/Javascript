import { Random }   from 'meteor/random';
import { nven   }   from '/libs/collections.js';
import nvenSchema   from '/libs/schemas/nven.js';
import nodeSchema   from '/libs/schemas/node.js';
import sensorSchema from '/libs/schemas/sensor.js';

Meteor.methods({
  'nven.addNode'(userId, nodeObj) {
    //Adds a node to a user in database. Assigns node an _id.
    //Sample nodeObj:
    // sensor = {
    //   desc: 'This sensor is dedicated to measuring weight of honey.',
    //   weight: 195,
    //   threshold: 87
    // };
  
    // node = {
    //   sensors: [sensor],
    //   ttl: 300
    // };

    nodeObj._id = Random.id();


    //Validate Schema
    nodeObj.sensors.forEach(sensor => {
      sensorSchema.validate(sensor);
    })
    nodeSchema.validate(nodeObj);
    
    //Find existing document for user
    doc = nven.findOne({owner: userId});
    if(doc){
      //add new node to document
      modInfo = Object();
      Object.assign(modInfo, doc);
      modInfo.nodes.push(nodeObj);
      nvenSchema.validate(modInfo);
      nven.update({_id: userId}, {$set: modInfo});
      console.log('Updated Document.', modInfo);

    }else{ //if document doesnt exist, make one
      newDoc = {
        owner: userId,
        nodes: [nodeObj]
      };
  
      // console.log(JSON.stringify(newDoc, null, 2));
      nvenSchema.validate(newDoc);
      nven.insert(newDoc);
      console.log('New Docuement Created:', newDoc);
    }
  },
  'nven.updateNode'(userId, nodeObj){
    //Updates node object if it is found in database. 
    nodeSchema.validate(nodeObj);
    
    doc = nven.findOne({owner: userId});
    if(doc){
      modInfo = Object();
      Object.assign(modInfo, doc);
      index = modInfo.nodes.findIndex(node => node._id === nodeObj._id);
      if(index !== -1){
        modInfo.nodes[index] = nodeObj;        
      }
      nvenSchema.validate(modInfo);
      nven.update({_id: userId}, {$set: modInfo});
      console.log('Updated Document.', modInfo);
    }
  },
  'nven.updateFromClient'(userId, nodeObj){
    //Similar to updateNode but does not override time-to-live for packet sender
    nodeSchema.validate(nodeObj);
    
    modInfo = Object();
    doc = nven.findOne({owner: userId});
    if(doc){
      Object.assign(modInfo, doc);
      index = modInfo.nodes.findIndex(node => node._id === nodeObj._id);
      if(index !== -1){
        const ttl = modInfo.nodes[index].ttl;
        nodeObj.ttl = ttl;
        modInfo.nodes[index] = nodeObj;
      }
      nvenSchema.validate(modInfo);
      nven.update({owner: userId}, {$set: modInfo});
      console.log('Updated Document.', JSON.stringify(modInfo, null, 2));
      doc = nven.findOne({owner: userId});
    }else{
      throw new Error('User called for node update without node permissions.', userId);
    }
    
    return nodeObj;
  }
});