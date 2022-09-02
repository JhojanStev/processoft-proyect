require('dotenv').config();


const express = require('express');
var cors = require('cors');
const bodyparser = require('body-parser')


//importa la configuracion de la conexion de mongo DB
const { dbConnection } = require('./database/config');

//crea el servidor de express
const app = express();

// Configura CORS
app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

// Lectura y parseo del body

app.use(express.json());

//BD
dbConnection();

//rutas

app.use('/api/cotizaciones', require('./routes/cotizacion'));
app.use('/api/departamentos', require('./routes/departamentos'));
app.use('/api/municipios', require('./routes/municipios'));
app.use('/api/email', require('./routes/email'));
app.use('/api/modelos', require('./routes/modelos'));





//processoftBD
//bLXLZ18Z8HlEbvhQ
//mongodb+srv://processoftBD:bLXLZ18Z8HlEbvhQ@cluster0.7gjtdj5.mongodb.net/psdatabase
app.listen(process.env.PORT,()=>{
  console.log('Servidor corriendo en puerto ' + process.env.PORT);
})
