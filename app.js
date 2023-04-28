const express = require('express')

const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/api/v1/user', (req, res) => {
    res.json({ username: 'SiSaleAyd1'})
})


module.exports = app