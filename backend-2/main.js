const express = require('express')
const app = express()
const port = 3031

app.get('/', (req, res) => {
    res.send('Get Root backend-2')
})

app.get('/test3', (req, res) => {
    res.send('Get Test3')
})

app.get('/test4', (req, res) => {
    res.send('Get Test4')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
