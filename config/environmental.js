const port = process.env.PORT || 8000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mind-canyon'
const secret = process.env.SECRET || 'omg secret stuff'

module.exports = { port, dbURI, secret }