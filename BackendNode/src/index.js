const productoRoutes = require("./routes/productoRouters");
const userRoutes = require("./routes/user");
const CarroRoutes = require("./routes/CartRutas");
const serverIndex = require('serve-index');


require('dotenv').config();
var cors = require('cors');


console.log( process.env )

const express = require('express');
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");


const app = express();

const port = 9000;

app.use('/files', serverIndex(__dirname + '/src/files'));
app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use('/api', productoRoutes);
app.use('/api', userRoutes);
app.use('/api', CarroRoutes);

app.use('/public', express.static(`${__dirname}/storage/img`));


//routes
app.get('/', (req, res) => {
    res.send("bienvenido")
} );

//mongoose connection

mongoose.connect("mongodb+srv://decsec26:contraseña123@cluster0.u4bcs.mongodb.net/dualvinta?retryWrites=true&w=majority")
    .then(() => console.log("conectado a mongodb"))
    .catch( (error) => console.log(error));

app.listen( process.env.PORT, () => console.log('listo', process.env.PORT));