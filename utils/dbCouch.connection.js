const nano = require('nano')('http://192.168.1.14:5984')

const nanoReturn = async () => {
    return await nano
}

module.exports = nanoReturn