const { getDataMongoCtrl, insertDataMongoCtrl, deleteDataMongoCtrl, getCollectionMongoCtrl} = require('../controller/mongodb')

const getDataMongoSrvc = async(url) => await getDataMongoCtrl(url)

const insertDataMongoSrvc = async(url, data) => await insertDataMongoCtrl(url, data)

const getAllCollectionMongoSrvc = async() => await getCollectionMongoCtrl()

const createCollectionMongoSrvc = async(url) => {
    await insertDataMongoCtrl(url, undefined)
    await deleteDataMongoCtrl(url)
}

module.exports = {
    getAllCollectionMongoSrvc,
    createCollectionMongoSrvc,
    insertDataMongoSrvc,
    getDataMongoSrvc
}