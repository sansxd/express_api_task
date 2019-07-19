import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send('bienvenido a la Api del autismo');
});
//buscar diferencias entre esto
// export default router;
// y esto
module.exports = router;
