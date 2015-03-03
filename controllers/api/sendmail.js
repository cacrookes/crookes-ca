var router = require('express').Router();
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var config = require('../../config/config');

var auth = {
	auth: {
		api_key: config.mail.api_key,
		domain: config.mail.domain
	}
}

var nodemailerMailgun = nodemailer.createTransport(mg(auth));

router.post('/sendmail', function(req, res, next){
	var fromField = req.body.inputName + " <" + req.body.inputEmail + ">";
	var mailOptions = {
		from: fromField,
		to: 'cacrookes@gmail.com',
		subject: "Contact form (crookes.ca) message from " + fromField,
		text: req.body.inputMessage
	};
	nodemailerMailgun.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.status(500).json({success: false, message: "Error sending message"});
		}else{
			console.log('Message sent: ' + info.response);
			res.status(200).json({success: false, message: "Message sent!"});
		}
	});
});

module.exports = router;
