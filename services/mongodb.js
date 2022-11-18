const { getDataMongoCtrl, insertDataMongoCtrl, deleteDataMongoCtrl } = require('../controller/mongodb')
const { getCouchdb } = require('./couchdb')

const getDataMongoSrvc = async(url) => await getDataMongoCtrl(url)

async function updateCouchToMongo() {
    const couchDbs = await getCouchdb("/_all_dbs")
    for(var i = 0; i < couchDbs.length; i++){
        const data = await getCouchdb(`/${couchDbs[i]}/_all_docs`)
        await deleteDataMongoCtrl(couchDbs[i])
        console.log(data.rows)
        for(var j = 0; j < data.rows.length; j++)
            await insertDataMongoCtrl(couchDbs[i], data.rows[j])
    }
}

const insertDataMongoSrvc = async(url, data) => await insertDataMongoCtrl(url, data)

module.exports = {
    getDataMongoSrvc,
    updateCouchToMongo,
    insertDataMongoSrvc
}