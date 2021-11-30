const express = require ('express')
const bodyParser = require ('body-parser')
require("./database")

const app = express('dev')



app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }))

require('./controllers/authController')(app)

app.get('/', (req, res) => {

    res.send('OK')

})


app.listen(50500, () => {
    console.log('Express startted at http://localhost:50500')
})

