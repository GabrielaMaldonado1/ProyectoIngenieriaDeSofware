const userRoutes = require("./routes/productoRouters");
var cors = require('cors');

const express = require('express');
const mongoose = require("mongoose");

const app = express();

const port = 9000;

app.use(express.json());
app.use(cors())
app.use('/api', userRoutes);

app.use('/public', express.static(`${__dirname}/storage/img`));


//routes
app.get('/', (req, res) => {
    res.send("bienvenido")
} );

//mongoose connection

mongoose.connect("mongodb+srv://decsec26:contraseña123@cluster0.u4bcs.mongodb.net/dualvinta?retryWrites=true&w=majority")
    .then(() => console.log("conectado a mongodb"))
    .catch( (error) => console.log(error));

app.listen(port, () => console.log('listo', port));