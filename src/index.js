import '@babel/polyfill';
import app from './server';
// import { conexion } from './database';
async function main() {
  // await conexion();
  await app.listen(app.get('port'));
  console.log('server corriendo en el puerto', app.get('port'));
}
main();
