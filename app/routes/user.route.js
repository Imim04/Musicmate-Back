const controller = require('../controllers/user.controller');

module.exports = (app) => {
    app.get('/', controller.findAllMusic);
    app.post('/create-music', controller.createMusic);
    app.get('/music/:id', controller.findMusicById);
    app.put('/update-music/:id', controller.updateMusicById);
    app.delete('/delete-music/:id', controller.deleteMusicById);
};