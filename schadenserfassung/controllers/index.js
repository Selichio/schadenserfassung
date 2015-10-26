var express = require('express')
  , router = express.Router()

router.use('/kunde', require('./kunde'))
router.use('/mitarbeiter', require('./mitarbeiter'))

router.get('/', function(req, res) {
  res.render('index')
})

module.exports = router