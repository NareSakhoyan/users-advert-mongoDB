// const advert = require('../MySQLDB/controllers/advert.controller');
const advert = require('../mongoDB/controllers/advert.controller');
const express = require('express')

module.exports = app => {
    let router = express.Router()

    // router.post('/', advert.insertAdvert)

    router.get('/', advert.getAll)
    //
    // router.put('/:id', advert.updateAdvert)
    //
    // router.get('/userID', advert.getByUserID)
    //
    // router.get("/:id", advert.getByID);
    //
    // router.delete("/:id", advert.delete);
    //
    // router.delete("/", advert.deleteAll);



    app.use('/adverts', router)
}
