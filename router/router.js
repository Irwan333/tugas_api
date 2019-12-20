const kursusController		= require('../controller/kursusController');

module.exports = app => {
	app.get('/api/kursus', kursusController.listKursus)
	app.get('/api/kursus/:id', kursusController.detailKursus)
	app.post('/api/kursus/', kursusController.tambahKursus)
	app.put('/api/kursus/:id', kursusController.ubahKursus)
	app.delete('/api/kursus/:id', kursusController.hapusKursus)
}