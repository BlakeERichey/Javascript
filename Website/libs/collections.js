import { Mongo } from 'meteor/mongo';
import nvenSchema from './schemas/nven.js'; 

export const nven = new Mongo.Collection('nven');
nven.schema = nvenSchema;