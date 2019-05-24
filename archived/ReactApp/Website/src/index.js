import express from 'express';
// import Goodbye from '/src/component.js';
const server=express();
server.get('/', function(req, res){ res.send('<div>testing</div>'); });