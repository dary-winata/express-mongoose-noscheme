const mongoose = require('mongoose')
const express = require('express')
const dataRoute = require('./route')
const cors = require('cors')
const port = 3000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/user', dataRoute)

mongoose.connect('') // isi url mongo

app.listen(port, () => {
    console.log(`server is running up on port ${port}`)
})