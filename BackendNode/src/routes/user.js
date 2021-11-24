const express = require("express");
const { findOne } = require("../models/user");

const userSchema = require("../models/user");


const router = express.Router();

// create user 

router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user.save().then((data) => res.json(data)).catch((error) => res.json({ message: error }));
});

//OBTENER TODOS LOS USUARIOS

router.get('/users', (req, res) => {
    userSchema.find().then((data) => res.json(data)).catch((error) => res.json({ message: error }));

});

//USUARIO ESPECIFICO

router.get('/users/:uid', (req, res) => {
    const { uid } = req.params;
    userSchema.find({ uid: uid }).then((data) => res.json(data)).catch((error) => res.json({ message: error }));

});

//ACTUALIZAR

router.put('/users/:uid', async (req, res) => {
    const { uid } = req.params;
    const { nombre, apellido, email, telefono, direccion, departamento, ciudad } = req.body;

    const user = await userSchema.findOne({ uid });

    if (!user) {
        return res.status(404).json({ mensaje: 'Usuario no existe' });
    }

    await userSchema.updateOne({ uid }, {
        nombre,
        apellido,
        email,
        telefono,
        direccion,
        departamento,
        ciudad
    });

    res.status(200).json({ mensaje: 'Usuario actualizado' });

    // userSchema.updateOne({ uid: uid },{  $set:{ name, age, email} }).then( (data) => res.json(data)).catch( (error) => res.json({ message: error}));

});

// BORRAR

router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema.remove({ _id: id }).then((data) => res.json(data)).catch((error) => res.json({ message: error }));

});


module.exports = router;