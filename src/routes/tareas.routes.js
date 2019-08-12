import { Router } from 'express';
const faker = require('faker');
faker.locale = 'es';

const router = Router();
//import model tareas
const Tarea = require('../models/tareas');

//creando datos con faker y guardandolos
router.get('/create', async (req, res) => {
  try {
    for (let index = 0; index < 50; index++) {
      await Tarea.create({
        titulo: faker.lorem.word(),
        descripcion: faker.lorem.paragraph(20)
      });
    }
    res.send('50 registros creados');
  } catch (error) {
    res.json({ message: error });
    console.log('from to get: ', error);
  }
});
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
//buscar determinada tarea
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

//METODO POST
router.post('/', async (req, res) => {
  const tarea = new Tarea({
    titulo: req.body.titulo,
    descripcion: req.body.descripcion
  });

  try {
    //guardamos la tarea
    const saveTarea = await tarea.save();
    res.json(saveTarea);
  } catch (error) {
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
