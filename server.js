const express = require('express')
const cors = require('cors')
const app = express()
const connectDB = require('./config/db')
require('dotenv').config()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

connectDB()

app.listen(port, () => {
    console.log('Listening to port', port)
})