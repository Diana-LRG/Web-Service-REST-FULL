
import { MySQLConnector, MongoDBConnector } 
from "../dependences.ts";

export const connectorMariaDB = new MySQLConnector({
database: 'quotes',
host: 'localhost',  // si esta en el contenedot o en un mecanismo de nombres la ip del contenedor o la deo contenedor
username: 'devDeno',
password: 't0ps3cr3t',
port: 3308, // 3306
});

export  const connectorMongoDB = new MongoDBConnector({
//uri:'mongodb://cardoso:t0ps3cr3t@localhost:27017/?authMechanism=SCRAM-SHA-256&authSource=quotes',
uri: 'mongodb://cardoso:t0ps3cr3t@localhost:27017',    
database: 'quotes',
});
