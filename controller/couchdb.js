const couch = require('../utils/dbCouch.connection')

const getDataCouch = async (url) => { 
    const db = await (await couch()).db.use(url)
    return await db.list({include_docs: true})
}

const insertDataCouch = async (url, data) => {
    const db = await (await couch()).db.use(url)
    return await db.insert(data)
}

const createDatabaseCouch = async (url) => await (await couch()).db.create(url)

const listAllDbCouch = async () => await (await couch()).db.list()

const createUsersCouch = async (data) => {
    const db = await (await couch()).db.use("_users")
    return await db.insert(data)
}

module.exports = {
    getDataCouch,
    createDatabaseCouch,
    listAllDbCouch,
    createUsersCouch,
    insertDataCouch
}