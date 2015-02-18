var express = require('express');
var router = express.Router();

router.use(express.static(__dirname + '/../assets'));

router.get('/', function(req, res){
	res.render('index.html.ejs');
});

module.exports = router;
