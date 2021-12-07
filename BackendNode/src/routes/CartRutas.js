const express = require("express");

const productoSchema = require("../models/carroModel");


const router = express.Router();

// create producto

router.post('/carro', (req, res) => {
    const producto = productoSchema( req.body );
    producto.save().then( (data) => res.json(data) ).catch( (error) => res.json({ message: error}));
});

//OBTENER TODOS LOS PRODUCTOS

router.get('/carroItems', (req, res) => {
    productoSchema.find().then( (data) => res.json(data)).catch( (error) => res.json({ message: error}));

});

//PRODUCTO ESPECIFICO

router.get('/carro/:id', (req, res) => {
    const { id } = req.params;
    productoSchema.find( {usuario_id: id } ).then( (data) => res.json(data)).catch( (error) => res.json({ message: error}));

})

//ACTUALIZAR
/*
router.put('/producto/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    userSchema.updateOne({ _id: id },{  $set:{ name, age, email} }).then( (data) => res.json(data)).catch( (error) => res.json({ message: error}));

});*/

// BORRAR

router.delete('/carroItem/:id', (req, res) => {
    const { id } = req.params;
    productoSchema.remove({ _id: id }).then( (data) => res.json(data)).catch( (error) => res.json({ message: error}));

});


module.exports = router;