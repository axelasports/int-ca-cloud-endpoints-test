const express = require('express')
const app = express()
const port = 3030

app.get('/', (req, res) => {
    res.send('Get Root backend-1')
})

app.get('/test1', (req, res) => {
    res.send('Get Test1')
})

app.get('/test2', (req, res) => {
    res.send('Get Test2')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
