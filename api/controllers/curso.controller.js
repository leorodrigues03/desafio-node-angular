const Curso = require('../models/curso.model.js');

exports.create = (req,res) => {
    
    //Validation
    if (!req.body) {
        return res.status(400).send({
            message: "Dados do curso estão vazios"
        });
    }

    //const novoCurso = new Curso(req.body);
    const novoCurso = new Curso({
        titulo: req.body.titulo,
        descricao: req.body.descricao  || 'Sem descicao',
        preco: req.body.preco || 0,
        inicio: req.body.inicio || null,
        fim: req.body.fim || null
    }); 

    novoCurso.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Erro ao criar o curso!"
        });
    });
};