const mongoose		= require('mongoose');
const Schema		= mongoose.Schema;
const MuridSchema	= Schema({
	title			: {
		type		: String,
		required	: true
	},
	durasi			: {
		type		: String,
		required	: true
	},
	harga_real		: {
		type		: String,
		required	: true
	},
	harga_diskon	: {
		type		: String,
		required	: true
	},
	image			: {
		type		: String
	},
},
{
	timestamps : true
});

module.exports = mongoose.model('course', MuridSchema);