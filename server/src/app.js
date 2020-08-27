const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(morgan('combined'))
app.use(express.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.json({
    message: `Your user was registered ${req.body.email}`
  })
})

app.listen(process.env.PORT || 8081, () => console.log('Server on port 3000'))
