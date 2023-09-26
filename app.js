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

// INI KERJAAN AXEL, REGISTER
// udah kelar, tolong anggep ini kerjaan saya
app.post('/register', async (req, res) => {
    try {
        const register = "regis sendiri lah"
        res.status(201).json(register)
    } catch (error) {
        res.status(500).json(error)
    }
})

// get fav, ini kerjaan saya bang
app.get('/wishlist', async (req, res) => {
    try {
        const wishlist = "wishlist sendiri lah"
        res.status(200).json(wishlist)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})