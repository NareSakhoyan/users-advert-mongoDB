const mysql = require('mysql2');
const dbConfig = require('../db.config')
const db = mysql.createConnection(dbConfig);

//Connect to mysql
exports.connectDB = (dbName = dbConfig.database) => {
    db.connect(err => {
        if (err) throw err;
        console.log("Connected!");
    });
    this.create(dbName)
}

//Create or use database
exports.create = (dbName) => {
    let sql = `use ${dbName}`;
    db.query(sql, function (err, result) {
        if (err) {
            sql = `create database ${dbName};`;
            db.query(sql, (err, result) => {
                if (err) throw err;
                console.log('result: ', result)
            })
        }
        console.log("Result: " + result);
    })
}

exports.writeQuery = (sql, req, res) => {
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
}
