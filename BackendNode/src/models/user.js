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
    },
    urlImagen:{
        type: String,
        default : "https://www.pngitem.com/pimgs/m/361-3619018_imagen-de-perfil-gmail-hd-png-download.png"
    }
});

module.exports = mongoose.model('User', userSchema);

    
    