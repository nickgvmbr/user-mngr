const express = require('express')

const app = express(),
      port = process.env.PORT || 3000


// mw

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'pug')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// routes

app.get('/', (req, res) => {
  res.redirect('/users')
})

app.use('/users', require('./routes/users'))


app.listen(port, () => {
  console.log(`Listening on ${port}...`)
})
