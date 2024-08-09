const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
app.get('/setcookie', function (req, res) {
	res.cookie('my_cookie', 'Welcome to MERN');
	res.send('Cookies added');
})
app.get('/getcookie', function (req, res) {
	res.send(req.cookies);
})
app.listen(3000, (err) => {
	if (err) throw err;
	console.log('server running on port 3000');
});
