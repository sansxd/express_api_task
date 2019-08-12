import express from 'express';
//importando el puerto desde config.js de .env
import { port } from './config';
//importando rutas
import rutaPrincipal from './routes/index.routes';
import TareasRutas from './routes/tareas.routes';
import bodyParser from 'body-parser';
//conexion a la bd
import { conexion } from './database';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
//haciendo andar la conexion
conexion();

//SETTINGS
app.set('port', port);

//MIDDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

//usando rutas
app.use(rutaPrincipal);
app.use('/api/tareas', TareasRutas);
// module.exports = app;
export default app;
