var express = require('express');
var router = express.Router({
    mergeParams: true
});

// Controllers
var index_controller = require('../controllers/index');

/* GET home page. */
router.get('/', index_controller.homepage_get);



module.exports = router;
