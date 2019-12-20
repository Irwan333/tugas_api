const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// connection mongodb
mongoose.connect('mongodb://localhost/db_dtcjavascript')
	.then(db => console.log('db connected'))
	.catch(err => console.log(err))

	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({
		extended : true
	}))

	require('./router/router')(app)
	app.listen(8000,() => {
	console.log('Berhasil menjalankan server pada port 8000')
})