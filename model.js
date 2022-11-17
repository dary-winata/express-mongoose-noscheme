const { Schema, model } = require('mongoose')

const dataSchema = new Schema({}, {strict: false})

module.exports = model("data", dataSchema)