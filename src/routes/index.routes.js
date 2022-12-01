const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send("Hello Dev-David")
})


module.exports = router;
