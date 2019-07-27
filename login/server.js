var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

var Users = require('./routes/Users')
var Admins = require('./routes/Admins')
var Chat = require('./routes/Chat')

app.use('/users', Users)
app.use('/admins', Admins)
app.use('/chat', Chat)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})