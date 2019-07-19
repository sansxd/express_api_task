import { Router } from 'express';
const rutas = Router();

rutas.get('/', (req, res) => {
  res.send('bienvenido a la Api del autismo');
});

export default rutas;
