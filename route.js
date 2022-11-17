const express = require('express')
const route = express.Router()
const Model = require('./model')

route.post('/', async (req, res) => {
    await Model.deleteMany({})
    const value = await Model.create(req.body).then((response) => console.log(response) ).catch((e) => console.log(e))
    res.status(200).json()
})

route.get('/', async (req, res) => {
    const value = await Model.find()
    res.status(200).json(value)
})

module.exports = route