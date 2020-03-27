import { NodeSchema } from './node.js';

schema = new SimpleSchema({
  _id: {type: String, regEx: SimpleSchema.RegEx.Id, optional: true},
  owner: {type: String},
  nodes: {type: [NodeSchema], blackbox: true},
})

export default schema;