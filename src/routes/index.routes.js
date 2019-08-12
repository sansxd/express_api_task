import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send(
    'bienvenido a la Api de testeo de tareas, para obtener las tareas vaya a http://localhost:3000/api/tareas'
  );
  console.log('pasando por autismo');
});
//buscar diferencias entre esto
// export default router;
// y esto
module.exports = router;
