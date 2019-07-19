import express, { json } from 'express';
const { port } = require('./config');
//rutas
import rutas from './routes/index.routes';
import TareasRutas from './routes/tareas.routes';

const app = express();

//settings
app.set('port', port || 3000);

// console.log(`Your port is ${process.env.PORT}`);

//middlewares
app.use(json());

//usando rutas
app.use(rutas);
app.use('/tareas', TareasRutas);
export default app;
