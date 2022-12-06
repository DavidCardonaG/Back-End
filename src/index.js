const express = require('express');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();

//router de los schemas mongoDB
const router = require('./routes/users.js')
const dataRouter = require('./routes/orden.js')
const indexRouter = require('./routes/index.routes.js')



mongoose.connect(process.env.MONGODB_URI )
.then(() => console.log('Connect to MongoDB'))
.catch((error) => console.error(error));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
const port = process.env.PORT || 8080;

//USO DE ROUTER EN EXPRESS
app.use(indexRouter,router,dataRouter)

app.listen(port, () => {console.log("Server on"), port})