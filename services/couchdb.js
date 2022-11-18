const axios = require('axios')
const urlStandart = "http://192.168.1.20:5984"

const getCouchdb = async(url) => {
    const urlGet = urlStandart + url
    const response = await axios.get(urlGet).catch((response) => console.log(response))
    
    return response.data
}

module.exports = {
    getCouchdb
}