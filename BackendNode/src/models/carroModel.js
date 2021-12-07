const mongoose = require('mongoose');

const carroSchema = mongoose.Schema({
    producto_id: {
        type: String,
        required: true
    },
    usuario_id: {
        type:String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    cantidad: {
        type:Number,
        required: true
    }
});

module.exports = mongoose.model('Carro', carroSchema);