import express from 'express'
import bodyParser from 'body-parser'
const port = process.env.PORT || 3000
let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

let router = express.Router()

router.get('/', (req, res, next) => {
  res.send('Hello World!')
})

app.use(router)

app.listen(port, function() {
  console.log('Example app listening on port 3000!')
})
