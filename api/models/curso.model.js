
const mongoose = require('mongoose');

const CursoSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: 'Escolha um titulo'
    },
    descricao: String,
    preco: Number,
    inicio: Date,
    fim: Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Curso', CursoSchema);