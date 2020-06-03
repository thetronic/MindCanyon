const router = require('express').Router()
const blogs = require('../controllers/blogs')
const users = require('../controllers/auth')

const secureRoute = require('../lib/secureRoute')


router.route('/blogs')
  .get(blogs.index)
  .post(secureRoute, blogs.create)

router.route('/blogs/:id')
  .get(blogs.show)
  .put(secureRoute, blogs.update)
  .delete(secureRoute, blogs.destroy)

router.route('/login')
  .post(users.login)

module.exports = router