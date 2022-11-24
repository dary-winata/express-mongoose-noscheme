const { getDataCouch, createDatabaseCouch, listAllDbCouch, createUsersCouch} = require('../controller/couchdb')

const getCouchDataSrvc = async(url) => await getDataCouch(url)

const createDatabaseSrvc = async(url) => await createDatabaseCouch(url)

const listAllDbsSrvc = async() => await listAllDbCouch()

const createUserCouchSrvc = async(data) => {
    await createUsersCouch(data)
}
 
module.exports = {
    getCouchDataSrvc,
    createDatabaseSrvc,
    listAllDbsSrvc,
    createUserCouchSrvc
}