const express = require('express');
const dataSchema = require('../models/data')
const router = express.Router();

//Get User
router.get('/ObtenerDatos', async (req, res) =>{
    try {
        const orden = await dataSchema.find()
        if(!orden == null){
            res.send('NO HAY DATOS DE ENVIOS')
        }else{
            res.json(orden)
        }
    } catch (error) {
        return res.status(404).send('A OCURRIDO UN ERROR INTENTALO MÁS TARDE')
    }

})

//Create User
router.post('/CrearOrden', async (req, res) => {
    try {
        const orden = dataSchema(req.body)
    await orden.save(err => {
        if(err){
            res.status(500).send('ERROR AL REGISTRAR ENVIO')
        }else{
            res.status(200).send('ENVIO REGISTRADO CORRECTAMENTE')
        }
    })
    } catch (error) {
        return  res.status(500).send('ERROR AL REGISTRAR ENVIO')
    }
})

router.put('/EditarOrden/:id', async (req, res) =>{
    try {
        const {id} = req.params
    const envioUpdate = await dataSchema.findByIdAndUpdate(id, req.body,{
        new: true
    })

    return res.json(envioUpdate)
    } catch (error) {
        return res.status(404).send('ERROR, DATOS INCORRECTOS')
    }
})

router.delete('/DeleteEnvio/:id', async (req, res) =>{
    try {
        const envio = await dataSchema.findByIdAndDelete(req.params.id)

    if(!envio){
        res.status(404).send('ERROR, LOS DATOS NO EXISTEN')
    }else{
        res.status(200).send("DATOS BORRADOS CORRECTAMENTE")
    }
    } catch (error) {
        return res.status(404).send('ERROR, LOS DATOS NO EXISTEN')
    }
})
module.exports = router;