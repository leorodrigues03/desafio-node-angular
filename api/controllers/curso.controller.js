const Curso = require('../models/curso.model.js');


exports.create = (req, res) => {
    
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

exports.readAll = (req, res) => {
    Curso.find()
    .then(cursos => {
        res.send(cursos);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Erro ao buscar cursos!"
        });
    });

};

exports.readById = (req, res) => {
    var id = req.params.cursoId;
    Curso.findById(id)
    .then(curso => {
        if (!curso) {
            return res.status(404).send({
                message: "Curso '" + id + "' não encontrado."
            });
        }
        res.send(curso);
    }).catch (err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Curso '" + id + "' não encontrado."
            });
        }

        return res.status(500).send({
            message: "Erro ao buscar Curso Id: " + id
        });
    });
};

exports.update = (req, res) => {
    var id = req.params.cursoId;
    if (!req.body) {
        return res.status(400).send({
            message: "Nenhum dado para ser atualizado!"
        });
    }

    //Curso.findByIdAndUpdate(id, req.body, {new:true})]
    Curso.findOneAndUpdate( { _id:id } , req.body, {new:true})
    .then(curso => {
        if (!curso) {
            return res.status(404).send({
                message: "Curso '" + id + "' não encontrado para ser atualizado."
            });
        }
        res.send(curso);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Curso '" + id + "' não encontrado para ser atualizado."
            });
        }

        return res.status(500).send({
            message: "Erro ao atualizar Curso Id: " + id
        });
    });
};

exports.delete = (req, res) => {
    var id = req.params.cursoId;
    
    //Curso.findByIdAndRemove(id)
    Curso.findOneAndDelete({ _id:id })
    .then(curso => {
        if (!curso) {
            return res.status(404).send({
                message: "Curso '" + id + "' não encontrado para ser deletado."
            });
        }
        res.send({message: "Curso '" + id + "' deletado!"});
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Curso '" + id + "' não encontrado para ser deletado."
            });
        }

        return res.status(500).send({
            message: "Erro ao deletar Curso Id: " + id
        });
    });
};