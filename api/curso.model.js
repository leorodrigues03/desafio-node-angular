
const mongoose = require('mongoose');

const CursosSchema = mongoose.Schema({
    titulo: String,
    descricao: String,
    preco: Number,
    inicio: Date,
    fim: Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Cursos', CursosSchema);