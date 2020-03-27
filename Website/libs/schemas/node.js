import { SensorSchema } from './sensor.js';

schema = new SimpleSchema({
  _id:     {type: String},
  sensors: {type: [SensorSchema], blackbox: true},
  ttl:     {type: Number},
});

export default schema;