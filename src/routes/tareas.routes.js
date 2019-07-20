import { Router } from 'express';
const router = Router();
//import model tareas
const Tarea = require('../../models/tareas');

//METODO GET
router.get('/', async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (error) {
    res.json({ message: error });
    console.log('from to get: ', error);
  }
});

//METODO POST
router.post('/', async (req, res) => {
  const tarea = new Tarea({
    titulo: req.body.titulo,
    descripcion: req.body.descripcion
  });

  try {
    const saveTarea = await tarea.save();
    res.json(saveTarea);
  } catch (error) {
    res.json({
      message: error
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const findTarea = await Tarea.findById(req.params.id);
    res.json(findTarea);
  } catch (error) {
    console.log('El error es: ', error);

    res.json({
      message: error
    });
  }
});

//METODO DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleteTarea = await Tarea.deleteOne({ _id: req.params.id });
    res.json(deleteTarea);
  } catch (error) {
    console.log('El error es: ', error);

    res.json({ message: error });
  }
});

//METODO UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updateBodyTarea = {
      titulo: req.body.titulo,
      descripcion: req.body.descripcion
    };
    const updateTarea = await Tarea.updateOne(
      { _id: req.params.id },
      { $set: updateBodyTarea }
    );
    res.json(updateTarea);
  } catch (error) {
    console.log('El error es: ', error);

    res.json({ message: error });
  }
});

module.exports = router;
