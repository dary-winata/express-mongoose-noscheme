const mongoose = require('mongoose')

const connection = async () => await mongoose.connect('mongodb+srv://darywinata:zabuza0920@oneforall.ar0ve.mongodb.net/?retryWrites=true&w=majority') // isi url mongo

module.exports = connection