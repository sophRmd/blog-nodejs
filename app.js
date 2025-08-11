const express = require('express'); //acessando a biblioteca

// Express aplicativo - configurando o acesso as funções 
const app = express(); //acesso as funções da biblioteca

//registrar a vizualização da enenharia
app.set('view engine', 'ejs');


//ouvindo as requisições na porta
app.listen(3001);

// acessando rota
app.get('/', (req, res) =>{
    res.render('index');
});

//nova rota
app.get('/sobre', (req, res) => {
    res.render('sobre');
});

//Redirecionamento de página
app.get('/sobrenos', (req, res) =>{
    res.redirect('/sobre');
});

//ERRO 404  
app.use((req, res) => {
    res.status(404).render('404');
});