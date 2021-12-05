const express = require("express");
const { findOne } = require("../models/user");
var fs = require('fs');
var path = require('path');




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

//Subir imagen perfil

router.put('/users/:id/subir-imagen', (req, res) => {

    const { id } = req.params;

    if (!req.files) {
        return res.status(400).json({ ok: false, error: 'No se seleciono un archivo' });
    }

    let imagen = req.files.imagen;
    let nombreCortado = imagen.name.split('.');
    let extension = nombreCortado[nombreCortado.length - 1];

    let extenciones = ['jpg', 'jpeg', 'png'];

    if (extenciones.indexOf(extension) < 0) {
        return res.status(400).json({ Ok: false, error: 'Extension no valida' });
    }

    // Use the mv() method to place the file somewhere on your server
    imagen.mv(`src/files/${imagen.name}`, async function (err) {
        if (err)
            return res.status(500).json({ err });

        try {

            const user = await userSchema.updateOne({ uid: id }, { urlImagen: `${imagen.name}` });

            return res.json({ ok: true, mensaje: 'Imagen subida correctamente', urlImagen: `${imagen.name}` });

        } catch (error) {
            return res.json({ error });
        }


    });

});

router.get('/users/img-perfil/:nombre', (req, res) => {

    nombre = req.params.nombre;

    var pathIMagen = path.resolve(__dirname, `../files/${nombre}`);

    if (fs.existsSync(pathIMagen)) {
        res.sendFile(pathIMagen);
    } else {
        var pathINoMagen = path.resolve(__dirname, `../files/user-image.png`);
        res.sendFile(pathINoMagen);
    }

});



module.exports = router;