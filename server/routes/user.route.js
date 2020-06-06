// const user = require('../MySQLDB/controllers/user.controller');
const user = require('../mongoDB/controllers/user.controller');
const express = require('express')

module.exports = app => {
    let router = express.Router()

    // router.post('/', user.insertUser)

    router.get('/', user.getAll)

    // router.put('/:id', user.updateUser)
    //
    // router.get("/:id", user.getByID);
    //
    // router.delete("/:id", user.delete);
    //
    // router.delete("/", user.deleteAll);

    app.use('/users', router)
}
