const router = require('express').Router()

let users = []
    id = 0


// users

router.get('/', (req, res) => {
  res.render('users', {
    title: 'Users',
    users
  })
})


// add

router.route('/add')
  .get((req, res) => {
    res.render('add', { title: 'Add user' })
  })

  .post((req, res) => {
    req.body.id = id
    id++
    users.push(req.body)
    res.redirect('/')
  })


// remove

router.get('/remove/:id', (req, res) => {
  users = users.filter(i => i.id !== Number(req.params.id))
  res.redirect('/')
})


// edit

router.route('/edit/:id')
  .get((req, res) => {
    let user
    users.forEach(i => {
      if (i.id === Number(req.params.id)) user = i
    })

    res.render('edit', {
      title: 'Edit user',
      user
    })
  })

  .post((req, res) => {
    req.body.id = Number(req.params.id)
    users.forEach((i, b) => {
      if (i.id === Number(req.params.id)) users[b] = req.body
    })
    res.redirect('/')
  })


module.exports = router
