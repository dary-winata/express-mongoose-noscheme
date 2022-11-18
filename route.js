const express = require('express')
const route = express.Router()
const Model = require('./model')
const { getDataMongoSrvc, insertDataMongoSrvc } = require('./services/mongodb')


route.post('/:colName', async (req, res) => {
    await insertDataMongoSrvc(req.params.colName, req.body)
    res.status(200).json()
})

route.get('/:colName', async (req, res) => {
    const value = await getDataMongoSrvc(req.params.colName)
    res.status(200).json(value)
})

module.exports = route