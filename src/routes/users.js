const express = require('express');
const userSchema = require('../models/users')
const router = express.Router();

//Get User
router.get('/user', async (req, res) =>{
    const user = await userSchema.find()
    res.json(user)

})

//Create User
router.post('/user', async (req, res) => {
    const user = userSchema(req.body)
    await user.save()
    .then((data) => res.json(data))
    .catch((err) =>console.error(err))
})

module.exports = router;