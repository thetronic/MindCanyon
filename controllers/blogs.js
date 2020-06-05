const Blog = require('../models/blog')

//plebs gets all the blogs
function index(req, res) {
  Blog
    .find()
    .then(foundBlog => res.status(200).json(foundBlog))
    .catch(err => console.log(err))
} 

//plebs gets a single blog
function show(req, res) {
  Blog
    .findById(req.params.id)
    .then(blog => res.status(200).json(blog))
    .catch(err => console.log(err))
}

//Steve or Charlie make a new blog
function create(req, res) {
  req.body.user = req.currentUser
  Blog 
    .create(req.body)
    .then(createdBlog => res.status(201).json(createdBlog))
    .catch(err => console.log(err))
}

//Steve or Charlie edit a new blog
function update(req, res, next) {
  Blog
    .findById(req.params.id)
    .then(blog => {
      if (!blog) {
        return res.status(404).json({ message: 'Not Found' })
      } else {
        Object.assign(blog, req.body)
        blog.save()
          .then(updatedBlog => res.status(202).json(updatedBlog))
      }
    })
    .catch(next)
}

// Steve or Charlie delete a blog
function destroy(req, res, next) {
  Blog
    .findById(req.params.id)
    .then(blog => {
      if (!blog) {
        return res.status(404).json({ message: 'Not Found' })
      } else {
        blog.remove()
        return res.sendStatus()
      }  
    })
    .catch(next)
}

module.exports = { index, show, create, update, destroy }