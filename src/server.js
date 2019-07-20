import express, { json } from 'express';
//importando el puerto desde config.js de .env
import { port } from './config';
//importando rutas
import rutas from './routes/index.routes';
import TareasRutas from './routes/tareas.routes';
import bodyParser from 'body-parser';
//conexion a la bd
import { conexion } from './database';
import cors from 'cors';

const app = express();
//haciendo andar la conexion
conexion();

//SETTINGS
app.set('port', port);

//MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());

//usando rutas
app.use(rutas);
app.use('/tareas', TareasRutas);
module.exports = app;
