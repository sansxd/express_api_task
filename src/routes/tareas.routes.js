import { Router } from 'express';
const rutas = Router();
//conexion de database
import { conexion } from '../database';
import { ObjectID } from 'mongodb';
//metodo GET
rutas.get('/', async (req, res) => {
  const db = await conexion();
  const result = await db
    .collection('tester')
    .find({})
    .toArray();
  console.log(result);

  res.json(result);
});

//metodo Post
rutas.post('/', async (req, res) => {
  const db = await conexion();
  const tarea = {
    titulo: req.body.titulo,
    descripcion: req.body.descripcion
  };
  //insertando la tarea obtenida
  const resultado = await db.collection('tester').insertOne(tarea);

  console.log(req.body);
  res.json(resultado.ops[0]);
});

rutas.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    //conexion a la mongodb
    const db = await conexion();
    //buscando el id y trayendo la informacion
    const resultado = await db
      .collection('tester')
      .findOne({ _id: ObjectID(id) });

    console.log(resultado);
    res.json(resultado);
  } catch (error) {
    console.log('El error es: ', error);

    res.json('error');
  }
});

//motodo Delte
rutas.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    //conexion a la mongodb
    const db = await conexion();
    //buscando el id y trayendo la informacion
    const resultado = await db
      .collection('tester')
      .deleteOne({ _id: ObjectID(id) });
    res.json({
      message: `Tarea ${id} Eliminada`,
      resultado
    });
  } catch (error) {
    console.log('El error es: ', error);

    res.json({ message: 'Error' });
  }
});

//motodo Delte
rutas.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const actualizarTarea = {
      titulo: req.body.titulo,
      descripcion: req.body.descripcion
    };
    //conexion a la mongodb
    const db = await conexion();
    //buscando el id y trayendo la informacion
    const resultado = await db.collection('tester').updateOne(
      { _id: ObjectID(id) },
      {
        $set: actualizarTarea
      }
    );
    res.json({
      message: `Tarea ${id} Actualizada`
    });
  } catch (error) {
    console.log('El error es: ', error);

    res.json({ message: 'Error' });
  }
});

export default rutas;
