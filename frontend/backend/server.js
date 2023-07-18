const express = require("express")
const path = require('path')

const app = express();
//conf
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))

//midelwares
app.use(express.urlencoded({extended: false}))


//rutas

app.get('/', (req, res) =>{
    res.send("hello world")
})
module.exports = app;