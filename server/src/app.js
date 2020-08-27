const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { sequelize } = require('./models')

const app = express()

app.use(morgan('combined'))
app.use(express.json())
app.use(cors())

app.use(require('./routes'))

sequelize.sync()
  .then(() => {
    app.listen(process.env.PORT || 8081, () => console.log(`Server on port ${process.env.PORT || 8081}`))
  })
