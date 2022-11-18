const Model = require('../model')

const getDataMongoCtrl = async(url) => await Model(url).find()

const insertDataMongoCtrl = async(url, data) => await Model(url).create(data)

const deleteDataMongoCtrl = async(url) => await Model(url).deleteMany({})

module.exports = {
    getDataMongoCtrl,
    insertDataMongoCtrl,
    deleteDataMongoCtrl
}