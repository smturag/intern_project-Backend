const express = require('express')
const app = express()
var cors = require('cors')
const { MongoClient } = require('mongodb');
const route = require('./Route/route')
const mongoConnection =  require('./connection')
const insertHeader = require('./Route/insertHeader')
const insertData = require('./Route/insertData')


const port=4000
app.use(cors())
app.use('/api',insertHeader)
app.use('/api',insertData)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
