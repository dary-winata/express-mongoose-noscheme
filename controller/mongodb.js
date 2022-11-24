const Model = require('../model')
const mongoose = require('mongoose')

const getDataMongoCtrl = async(url) => await Model(url).find()

const insertDataMongoCtrl = async(url, data) => await Model(url).create(data)

const deleteDataMongoCtrl = async(url) => await Model(url).deleteMany({})

const getCollectionMongoCtrl = async() => await mongoose.modelNames()

module.exports = {
    getDataMongoCtrl,
    insertDataMongoCtrl,
    deleteDataMongoCtrl,
    getCollectionMongoCtrl
}