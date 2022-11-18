const { Schema, model } = require('mongoose')

const dataSchema = new Schema({}, {strict: false})

module.exports = (collectionName) => {return model(collectionName, dataSchema)}