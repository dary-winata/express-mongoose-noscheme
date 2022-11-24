const { getCouchDataSrvc, createDatabaseSrvc, listAllDbsSrvc, createUserCouchSrvc } = require('./services/couchdb')
const { getDataMongoSrvc, insertDataMongoSrvc, createCollectionMongoSrvc, getAllCollectionMongoSrvc } = require('./services/mongodb')
const express = require('express')
const Model = require('./model')
const route = express.Router()

var couchDb = false

// couchdb
route.get('/:dbName/_all_docs', async(req, res) => {
    const url = req.params.dbName.substring(0)
    try {
        await getCouchDataSrvc(url).then((response) => { 
            res.status(200).json(response)
        })
    } catch {
        await getDataMongoSrvc(req.params.dbName).then((response) => res.status(200).json(response))
    }

})

route.get('/_all_dbs', async(req, res) => {
    try {
        await listAllDbsSrvc().then((response) => res.status(200).json(response))
    } catch {
        await getAllCollectionMongoSrvc().then((response) => res.status(200).json(response))
    }
})

route.put('/:dbName', async(req, res) => {
    const url = req.params.dbName.substring(0)
    try {
        await createDatabaseSrvc(url).then((response) => res.status(200).json({ message: "Database Created" }))
        couchDb = true
        await createCollectionMongoSrvc(url).then((response) => res.status(200).json({ message: "Database Created" }))
        couchDb = false
    } catch {
        if(couchDb == false)
            await createCollectionMongoSrvc(url).then((response) => res.status(200).json({ message: "Database Created" }))

        couchDb = false
    }
})

route.put('/_users/org.couchdb.user::paramUser', async (req, res) => {
    const id = req.params.paramUser
    var data = req.body

    data["_id"] = "org.couchdb.user:" + id

    try{
        await createUserCouchSrvc(data).then((response) => { 
            res.status(200).json("user already inputed")
        }).catch((e) => console.log(e))
        couchDb = true
        await insertDataMongoSrvc("_users", data).then((reponse) => res.status(200).json("user already inputed")).catch((e) => console.log(e))
        couchDb = false
    } catch {
        if(couchDb==false)
            await insertDataMongoSrvc("_users", data).then((reponse) => res.status(200).json("user already inputed")).catch((e) => console.log(e))
        
        couchDb = false
    }
})

module.exports = route