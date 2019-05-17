const express = require('express')
const app = express()

app.use(require('cors')())
app.use(express.json())
require('./plugins/db')()
require('./router/admin/index')(app)

app.listen(3000, () => {
  console.log('server on http://localhost:3000')
})