const dbActions = require('../makeConnection')
const ADVERTS = 'adverts'

exports.getAll = (req, res) => {
    console.log("called")
    if (Object.keys(req.query).length){
        this.getByUserID(req, res)
    } else {
        dbActions.collection(ADVERTS).find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result)
            res.send(result)
        });
    }
}
//
// exports.insertAdvert = (req, res) => {
//     let advert = {
//         imgSrc: req.body.imgSrc? `'${req.body.imgSrc}'`: null,
//         title: req.body.title? `'${req.body.title}'`: null,
//         shortDescription: req.body.shortDescription? `'${req.body.shortDescription}'`: null,
//         longDescription: req.body.longDescription? `'${req.body.longDescription}'`: null,
//         price: req.body.price? `'${req.body.price}'`: null,
//     };
//     let sql = `insert into adverts values(null, ${req.body.userID}, ${advert.imgSrc}, ${advert.title}, ${advert.shortDescription}, ${advert.longDescription}, ${advert.price});`;
//     console.log(sql)
//     dbActions.writeQuery(sql, req, res)
// }
//
// exports.getByID = (req, res) => {
//     let id = req.params.id
//     let sql = `select * from adverts where id=${id};`
//     dbActions.writeQuery(sql, req, res)
// }
//
// exports.updateAdvert = (req, res) => {
//     let id = req.params.id
//     let advert = {
//         imgSrc: req.body.imgSrc? `'${req.body.imgSrc}'`: null,
//         title: req.body.title? `'${req.body.title}'`: null,
//         shortDescription: req.body.shortDescription? `'${req.body.shortDescription}'`: null,
//         longDescription: req.body.longDescription? `'${req.body.longDescription}'`: null,
//         price: req.body.price? `'${req.body.price}'`: null,
//     };
//     let sql = ` update adverts set title=${advert.title}, imgSrc=${advert.imgSrc}, shortDescription=${advert.shortDescription}, longDescription=${advert.longDescription}, price=${advert.price} where id=${id}`;
//     dbActions.writeQuery(sql, req, res)
// }
//
// exports.delete = (req, res) => {
//     let id = req.params.id
//     let sql = `delete from adverts where id=${id}`
//     dbActions.writeQuery(sql, req, res)
// }
//
// exports.deleteAll = (req, res) => {
//     let sql = `delete from adverts`
//     dbActions.writeQuery(sql, req, res)
// }
//
// exports.getByUserID = (req, res) => {
//     let {userID} = req.query
//     let sql = `select * from adverts where userID=${userID};`
//     console.log(sql)
//     dbActions.writeQuery(sql, req, res)
// }

