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
    color:{
        type: String,
        required: true
    },
    talla:{
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
    imgUrl:{
        type: String,
        required: true
    },
    filtro:{
        type: String,
        required: true
    },
    nuevo:{
        type: String,
        required: true
    },
    vendido:{
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Producto', productoSchema);