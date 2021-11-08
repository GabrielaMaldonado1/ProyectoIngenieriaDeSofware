const mongoose = require('mongoose');


const productoSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    marca:{
        type: String,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    existencias:{
        type: Number,
        required: true
    },
    fecha:{
        type: String,
        required: true
    },
    imgUrl:{
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Producto', productoSchema);