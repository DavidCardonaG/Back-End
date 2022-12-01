const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
require("dotenv").config();

const indexRouter = require('./routes/index.routes.js')
const router = require('./routes/users.js')
const dataRouter = require('./routes/orden.js')

mongoose.connect(process.env.MONGODB_URI )
.then(() => console.log('Connect to MongoDB'))
.catch((error) => console.error(error));

const app = express();
app.use(express.json());
app.use(cors())
const port = process.env.PORT || 8080;

app.use(indexRouter,router,dataRouter)

app.listen(port, () => {console.log("Server on"), port})