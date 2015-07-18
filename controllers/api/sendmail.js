var router = require('express').Router();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var config = require('../../config/config');

//grab authentication data from the config module
var auth = {
	user: config.mail.user,
	pass: config.mail.pass
};

var transport = nodemailer.createTransport(smtpTransport({
	service: 'zoho',
	auth: auth
}));

router.post('/sendmail', function(req, res, next){
	var fromField = req.body.inputName + " <" + req.body.inputEmail + ">";
	var mailOptions = {
		from: 'chris@crookes.ca',
		to: 'chris@crookes.ca',
		subject: "Contact form (crookes.ca) message from " + fromField,
		text: req.body.inputMessage
	};
	transport.sendMail(mailOptions, function(error, info){
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
