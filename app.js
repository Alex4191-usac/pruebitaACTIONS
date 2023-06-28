const express = require('express')

const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/api/v1/user', (req, res) => {
    res.json({ username: 'SiSaleAyd1'})
})


app.get('/api/v1/user/:id', (req, res) =>{
    const { id } = req.params
    if(!id) {
        res.status(400).json({error: 'Id is required'})
    }
    res.json({ id, username:'SiSaleAyd1'})
})
app.get('/api/v1/user/:name', (req, res) =>{
    const { name } = req.params
    if(!name) {
        res.status(400).json({error: 'name is required'})
    }
    res.json({ id, username:'SiSaleAyd1'})
})

module.exports = app