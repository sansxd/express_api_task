const MongoClient = require('mongodb').MongoClient;
//url con conexion a la bd
const uri =
  'mongodb+srv://sergio:sans@mongo-lico-yjw0p.azure.mongodb.net/test?retryWrites=true&w=majority';

export async function conexion() {
  try {
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true
    });
    const database = client.db('testeo');
    console.log('Conectado a mongodb-Cloud-Atlas!');
    return database;
    // client.connect(err => {
    //   const collection = client.db('testeo');
    //   // perform actions on the collection object
    //   // client.close();
    //   if (err) {
    //     console.log('paso por error ', { err });

    //     client.close();
    //   } else {
    //     console.log('Conectado a mongodb-Cloud-Atlas!');
    //   }

    //   return collection;
    // });
  } catch (e) {
    console.log(e);
  }
}
