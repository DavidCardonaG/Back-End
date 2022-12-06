const express = require('express');
const userSchema = require('../models/users')
const router = express.Router();


//Get User
router.post('/Login', async (req, res) =>{
    const{username,password} = userSchema(req.body);

    userSchema.findOne({username}, (err, user) =>{
        if(err){
            res.status(500).send('ERROR AL AUTENTICAR USUARIO')
        }else if(!user){
            res.status(500).send('USUARIO INCORRECTO')
        }else{
            user.isCorrectPassword(password, (err,result,next) =>{
                if(err){
                    res.status(500).send('ERROR AL AUTENTICAR')
                }else if(result){
                    console.log(result)
                    res.status(200).send('USUARIO AUTENTICADO CORRECTAMENTE')
                }else{
                    res.status(500).send('USUARIO Y/O CONTRASEÑA INCORRECTA')
                }
            })
        }
    })

})

//Create User
router.post('/Register', async (req, res) => {
    const user = userSchema(req.body)
    await user.save(err => {
        if(err){
            res.status(500).send('ERROR AL REGISTRAR USUARIO')
        }else{
            res.status(200).send('USUARIO REGISTRADO CORRECTAMENTE')
        }
    })
})

module.exports = router;