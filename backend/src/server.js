const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello, this is your Node.js backend!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})