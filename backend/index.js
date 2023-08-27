const express = require('express')
const cors    = require('cors')
const bodyparser = require('body-parser');
const db      = require('./config/database/databaseConnection')
const route   = require('./src/routes/web.js')
const app = express();
require('dotenv').config()
const PORT = process.env.PORT||3002
const commentModel = require('./src/models/feedback')
app.use(cors())
app.use(bodyparser.urlencoded());
app.use(bodyparser.json());
app.use('/', route);




app.listen(PORT, ()=>console.log(`Server is starting at ${PORT}`))