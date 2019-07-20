import { Router } from 'express';
const router = Router();
//import model tareas
const Tarea = require('../../models/tareas');

//METODO GET
router.get('/', async (req, res) => {
  // const db = await conexion();
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
  // const db = await conexion();
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

  //insertando la tarea obtenida
  // const resultado = await db.collection('tester').insertOne(tarea);

  // console.log(req.body);
  // res.json(resultado.ops[0]);
});

router.get('/:id', async (req, res) => {
  try {
    const findTarea = await Tarea.findById(req.params.id);
    res.json(findTarea);

    // const { id } = req.params;
    // //conexion a la mongodb
    // const db = await conexion();
    // //buscando el id y trayendo la informacion
    // const resultado = await db
    //   .collection('tester')
    //   .findOne({ _id: ObjectID(id) });

    // console.log(resultado);
    // res.json(resultado);
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
    // const { id } = req.params;
    // //conexion a la mongodb
    // const db = await conexion();
    // //buscando el id y trayendo la informacion
    // const resultado = await db
    //   .collection('tester')
    //   .deleteOne({ _id: ObjectID(id) });
    // res.json({
    //   message: `Tarea ${id} Eliminada`,
    //   resultado
    // });
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
