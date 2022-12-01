const express = require('express');
const dataSchema = require('../models/data')
const router = express.Router();

//Get User
router.get('/CrearOrden', async (req, res) =>{
    const orden = await dataSchema.find()
    res.json(orden)

})

//Create User
router.post('/CrearOrden', async (req, res) => {
    const orden = dataSchema(req.body)
    await orden.save()
    .then((data) => res.json(data))
    .catch((err) =>console.error(err))
})

module.exports = router;