module.exports = (app) => {
    const curso = require('../controllers/curso.controller.js');

    //POST
    app.post('/cursos', curso.create);

    //GET All
    app.get('/cursos', curso.readAll);

    //GET By Id
    app.get('/cursos/:cursoId', curso.readById);

    // Update
    app.put('/cursos/:cursoId', curso.update);

    // Delete
    app.delete('/cursos/:cursoId', curso.delete);
}