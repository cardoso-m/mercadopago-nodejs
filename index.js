const express = require('express')
const mp = require('mercadopago')
const app = express()

const MercadoPago = new mp.MercadoPagoConfig({
    accessToken: "TEST-8133617760022540-101710-09d9f2be6e627583815a79374db0ef51-136059490"
})

app.get('/', (req, res) => {
    res.send("API RODANDO!")
})

app.get('/pay', async (req, res) => {

    var id = "" + Date.now()
    var email = "matheus123@gmail.com"

    var data = {
        items: [
            item = {
                id: id,
                description: "descrição do que será vendido",
                quantity: 2,
                currency_id: 'BRL',
                unit_price: parseFloat(150)
            }
        ],
        payer:{
            email: email
        },
        external_referemce: id
    }

    try{
        var payment = await MercadoPago.preferences.create(data)
        console.log(payment)
        return res.redirect(payment.body.init_point)
    }catch(err){
        console.log(err)
    }
})

app.listen('8000', () =>{
    console.log('Server ON!')
})