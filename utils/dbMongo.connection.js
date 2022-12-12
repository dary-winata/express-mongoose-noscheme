const mongoose = require('mongoose')

const connection = async () => await mongoose.connect('mongodb+srv://darywinata:zabuza0920@oneforall.ar0ve.mongodb.net/?retryWrites=true&w=majority') // isi url mongo
// const connection = async () => await mongoose.connect('mongodb://taUsr:taPwd@192.168.1.2:27018/ta?authSource=ta')

module.exports = connection