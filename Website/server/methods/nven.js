import { Random }   from 'meteor/random';
import { nven   }   from '/libs/collections.js';
import nvenSchema   from '/libs/schemas/nven.js';
import nodeSchema   from '/libs/schemas/node.js';
import sensorSchema from '/libs/schemas/sensor.js';
import {validUserCred} from '/imports/functions/common.js';

Meteor.methods({
  'nven.addNode'(userId, numSensors) {
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

    if(!validUserCred(['admin'])){
      throw new Meteor.Error('401', 'Forbidden access.')
    }

    const _id = Random.id();
    const sensors = Array(numSensors).fill({desc: '', weight: 0, threshold: 0});
    nodeObj = {
      _id, sensors, ttl: 300
    }

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
      nven.update({owner: userId}, {$set: modInfo});
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
  'nven.update'(doc){
    nvenSchema.validate(doc);

    const {nodes, owner} = doc
    nodes.forEach(node => {
      Meteor.call('nven.updateNode', owner, node, (err, res) => {
        if(err){
          console.log('Nven update error:', err)
          throw err
        }else{
          console.log('Updated Nven Document.', JSON.stringify(doc, null, 2));
        }
      })
    })
  },
  'nven.updateNode'(userId, nodeObj){
    //Updates node object if it is found in database. 
    //Validate Schema
    nodeSchema.validate(nodeObj);
    nodeObj.sensors.forEach(sensor => {
      sensorSchema.validate(sensor);
    })
    
    doc = nven.findOne({owner: userId});
    if(doc){
      modInfo = Object();
      Object.assign(modInfo, doc);
      index = modInfo.nodes.findIndex(node => node._id === nodeObj._id);
      if(index !== -1){
        modInfo.nodes[index] = nodeObj;        
      }

      nvenSchema.validate(modInfo);
      nven.update({owner: userId}, modInfo);
    }
  },
  'nven.updateFromClient'(nodeObj){
    //Similar to updateNode but does not override time-to-live for packet sender
    //Or descriptions of sensors
    //Validate Schema
    nodeSchema.validate(nodeObj);
    nodeObj.sensors.forEach(sensor => {
      if(!sensor.hasOwnProperty('weight')){
        throw new Meteor.Error('validation-error', 'Sensor must contain weight attribute');
      }
    })
    
    modInfo = Object();
    doc = nven.findOne({'nodes._id': nodeObj._id});
    if(doc){
      const userId = doc.owner;
      Object.assign(modInfo, doc);
      
      //Find node
      index = modInfo.nodes.findIndex(node => node._id === nodeObj._id);
      
      //update weights
      if(index !== -1){
        const ttl = modInfo.nodes[index].ttl;
        nodeObj.ttl = ttl;
        nodeObj.sensors = modInfo.nodes[index].sensors.map((ele, i) => {
          ele.weight = nodeObj.sensors[i].weight;
          return ele;
        })
        modInfo.nodes[index].sensors = nodeObj.sensors;
      }

      nvenSchema.validate(modInfo);
      nven.update({owner: userId}, {$set: modInfo});
      console.log('Updated From Client Document.', doc._id);
      doc = nven.findOne({owner: userId});
    }else{
      throw new Error('User called for node update without node permissions.', userId);
    }
    
    return nodeObj;
  }
});