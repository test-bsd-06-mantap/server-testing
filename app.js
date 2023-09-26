const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//INI KERJAAN NICO, LOGIN BANG
app.post('/login', async (req, res) => {
    try {
        const login = "login sendiri lah"
        res.status(200).json(login)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})