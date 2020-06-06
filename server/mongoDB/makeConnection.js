const dbConfig = require('../db.config')
let mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.Promise = require('bluebird');

let connection = mongoose.createConnection(dbConfig.dbUri);

module.exports = connection;
