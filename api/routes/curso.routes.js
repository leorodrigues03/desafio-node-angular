module.exports = (app) => {
    const curso = require('../controllers/curso.controller.js');

    //POST
    app.post('/cursos',curso.create);

}