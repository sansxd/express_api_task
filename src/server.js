import express, { json } from 'express';
//importando el puerto desde config.js de .env
import { port } from './config';
//importando rutas
import rutas from './routes/index.routes';
import TareasRutas from './routes/tareas.routes';

const app = express();

//settings
app.set('port', port);

// console.log(`Your port is ${process.env.PORT}`);

//middlewares
app.use(json());

//usando rutas
app.use(rutas);
app.use('/tareas', TareasRutas);
export default app;
