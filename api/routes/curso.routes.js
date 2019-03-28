module.exports = (app) => {
    const curso = require('../controllers/curso.controller.js');

    //POST
    app.post('/cursos', curso.create);

    //GET All
    app.get('/cursos', curso.readAll);

    //GET ById
    app.get('/cursos/:cursoId', curso.readById);
}