const dbActions = require('../makeConnection')

exports.getAll = (req, res) => {
    if (Object.keys(req.query).length){
        this.findWithEmail(req, res)
    } else {
        let sql = "select * from users"
        dbActions.writeQuery(sql, req, res)
    }
}

exports.insertUser = (req, res) => {
    //this makes params quoted e.g. name —> 'name'
    let user = {
        name: req.body.name? `'${req.body.name}'`: null,
        surname: req.body.surname? `'${req.body.surname}'`: null,
        email: req.body.email? `'${req.body.email}'`: null,
        phone: req.body.phone? `'${req.body.phone}'`: null,
        pass: req.body.pass? `'${req.body.pass}'`: null,
    };
    let sql = `insert into users values(null, ${user.name}, ${user.surname}, ${user.email}, ${user.phone}, ${user.pass});`;
    console.log(sql)
    dbActions.writeQuery(sql, req, res)
}

exports.getByID = (req, res) => {
    let id = req.params.id
    let sql = `select * from users where id=${id};`
    dbActions.writeQuery(sql, req, res)
}

exports.updateUser = (req, res) => {
    let id = req.params.id
    let user = {
        name: req.body.name? `'${req.body.name}'`: null,
        surname: req.body.surname? `'${req.body.surname}'`: null,
        email: req.body.email? `'${req.body.email}'`: null,
        phone: req.body.phone? `'${req.body.phone}'`: null,
        pass: req.body.pass? `'${req.body.pass}'`: null,
    };
    let sql = ` update users set name=${user.name}, surname=${user.surname}, email=${user.email}, phone=${user.phone}, pass=${user.pass} where id=${id}`;
    dbActions.writeQuery(sql, req, res)
}

exports.delete = (req, res) => {
    let id = req.params.id
    let sql = `delete from users where id=${id}`
    dbActions.writeQuery(sql, req, res)
}

exports.deleteAll = (req, res) => {
    let sql = `delete from users`
    dbActions.writeQuery(sql, req, res)
}

exports.findWithEmail = (req, res) => {
    const {email} = req.query
    let sql = `select * from users where email="${email}";`
    dbActions.writeQuery(sql, req, res)
}
