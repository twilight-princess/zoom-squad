const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

const PORT = process.env.PORT || 9000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/username'

require('dotenv').config()

const userRouter = require('./routes/user.js')
const animalRouter = require('./routes/animal.js')

const bodyParser = require('body-parser')

const app = express()



app.use(express.static(path.join(__dirname, "public", "build")))
app.use(cors())
app.use(bodyParser.json())
// Routes
app.use('/api/user', userRouter)
app.use('/api/animals', animalRouter)

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(db => console.log(`connected to mongodb ${MONGODB_URI}`))
    .catch(err => console.log(err))

app.get("*", (req, res) => {
    console.log("application served")
    res.sendFile(path.join(__dirname, "public", "build", "index.html"))
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))