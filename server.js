var express=require('express');
var bodyParser=require('body-parser');
var app=express();

app.use(bodyParser.json());
app.use(require('./controllers'));

app.listen(3000, function(){
	console.log("Express server started on port 3000");
});
