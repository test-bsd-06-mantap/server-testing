const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})