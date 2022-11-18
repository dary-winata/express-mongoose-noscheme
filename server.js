const mongoose = require('mongoose')
const dataRoute = require('./route')
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const cron = require('node-cron')
const { updateCouchToMongo } = require('./services/mongodb')
const port = 6969

const app = express()
app.use(cors())
app.use(express.json())
app.use('/db', dataRoute)

mongoose.connect('') // isi url mongo

app.listen(port, () => {
    console.log(`server is running up on port ${port}`)
})

cron.schedule('*/1 * * * *', () => updateCouchToMongo())