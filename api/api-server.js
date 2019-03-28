// dependencies
const express = require('express');

const app = express();


// default route
app.get('/', (request, response) => {
    response.json({"message": "TESTE"});
});

// listen on port 3000
app.listen(3000, () => {
    console.log("Server na porta 3000");
});