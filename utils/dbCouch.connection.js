const nano = require('nano')('http://192.168.1.2:5984')

const nanoReturn = async () => {
    return await nano
}

module.exports = nanoReturn