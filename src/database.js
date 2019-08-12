import mongoose from 'mongoose';
import { uri } from './config';

export async function conexion() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true
    });
    console.log('conectado a DB de mongodb atlas');
  } catch (error) {
    handleError(error);
  }
}
