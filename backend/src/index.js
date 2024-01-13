const mongoose = require('mongoose')
const express = require('express')
const routes = require('./Routes/Route.js')
const cors = require('cors')

const app = express()

mongoose.connect("mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false")
    .then(() => { console.log("Connected to MongoDB Successfully") })
    .catch((err) => { console.log(err) })

app.use(express.json())
app.use(cors())

app.use('/', routes)

const PORT = 4000

app.listen(PORT, () => {
    console.log("server running on port", PORT)
})