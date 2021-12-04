const mongoose = require('mongoose');

const carroSchema = mongoose.Schema({
    producto_id: {
        type: String,
        required: true
    },
    usuario_id: {
        type:String,
        required: true
    }
});

module.exports = mongoose.model('Carro', carroSchema);