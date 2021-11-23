const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    uid:{
        type: String,
        required: true
    },    
    email: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);