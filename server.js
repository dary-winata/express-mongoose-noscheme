const mongoose = require('mongoose')
const express = require('express')
const dataRoute = require('./route')
const cors = require('cors')
const port = 3000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/user', dataRoute)

mongoose.connect('mongodb+srv://darywinata:zabuza0920@oneforall.ar0ve.mongodb.net/?retryWrites=true&w=majority')
// const value = {
//     nama : "Makan"
// }

// const createData = async (data) => {
//     const dataValue = await Model.create(data)
// }

app.listen(port, () => {
    console.log(`server is running up on port ${port}`)
})