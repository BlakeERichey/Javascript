import express from 'express';
server=express();
import Goodbye from '/src/index.js';
server.get('/', (req, res) => res.send(<Goodbye />));