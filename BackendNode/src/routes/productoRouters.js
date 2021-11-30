const express = require("express");

const productoSchema = require("../models/productoModels");


const router = express.Router();

// create producto

router.post('/producto', (req, res) => {
    const producto = productoSchema( req.body );
    producto.save().then( (data) => res.json(data) ).catch( (error) => res.json({ message: error}));
});

//OBTENER TODOS LOS PRODUCTOS

router.get('/producto', (req, res) => {
    productoSchema.find().then( (data) => res.json(data)).catch( (error) => res.json({ message: error}));

});

//PRODUCTO ESPECIFICO
/*
router.get('/producto/:id', (req, res) => {
    const { id } = req.params;
    productoSchema.findById(id).then( (data) => res.json(data)).catch( (error) => res.json({ message: error}));

});*/

router.get('/producto/:categoria', (req, res) => {
    const { categoria } = req.params;
    console.log(categoria)
    productoSchema.find({categoria: categoria}).limit(3).then( (data) => res.json(data)).catch( (error) => res.json({ message: error}));

});

router.get('/producto/:filtro', (req, res) => {
    const { categoria } = req.params;
    console.log(categoria)
    productoSchema.find({filtro: categoria}).limit(3).then( (data) => res.json(data)).catch( (error) => res.json({ message: error}));

});

router.get('/producto/:categoria', (req, res) => {
    const { categoria } = req.params;
    console.log(categoria)
    productoSchema.find({categoria: categoria}).limit(3).then( (data) => res.json(data)).catch( (error) => res.json({ message: error}));

});

//ACTUALIZAR
/*
router.put('/producto/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    userSchema.updateOne({ _id: id },{  $set:{ name, age, email} }).then( (data) => res.json(data)).catch( (error) => res.json({ message: error}));

});*/

// BORRAR

router.delete('/producto/:id', (req, res) => {
    const { id } = req.params;
    productoSchema.remove({ _id: id }).then( (data) => res.json(data)).catch( (error) => res.json({ message: error}));

});


module.exports = router;