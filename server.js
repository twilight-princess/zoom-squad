const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')  
require('dotenv').config()

const PORT = process.env.PORT || 9000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/username'

const userRouter = require('./routes/user.js')
const animalRouter = require('./routes/animal.js')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(db => console.log(`connected to ${MONGODB_URI}`))
    .catch(err => console.log(err))

app.use(cors())
app.use(bodyParser.json()) 
// Routes
app.use('/api/user', userRouter)
app.use('/dogs', animalRouter)
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))