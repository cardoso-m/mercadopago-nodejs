const express = require('express')
const mp = require('mercadopago')
const app = express()

const MercadoPeago = new mp.MercadoPagoConfig({
    accessToken: "TEST-8133617760022540-101710-09d9f2be6e627583815a79374db0ef51-136059490"
})

app.get('/', (req, res) => {
    res.send("API RODANDO!")
})

app.listen('8000', () =>{
    console.log('Server ON!')
})