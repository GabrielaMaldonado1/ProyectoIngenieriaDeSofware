const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type:String,
        required: true
    },
    departamento: {
        type:String,
        required: true
    },
    ciudad: {
        type:String,
        required: true
    },
    direccion: {
        type:String,
        required: true
    },
    telefono: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    uid:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);

    
    