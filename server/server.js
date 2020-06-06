const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 27017
// const connectDB = require('./MySQLDB/makeConnection.js')
// const connectDB = require('./mongoDB/makeConnection.js')

let corsOptions = {
    origin: 'http://localhost:8081'
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.json({message: "Welcome"})
    // connectDB()
})
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, HEAD');
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    if (req.method === 'OPTIONS') {
        return res.end();
    }
    next();
});

require('./routes/user.route')(app)
require('./routes/advert.route')(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
