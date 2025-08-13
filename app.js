const express = require('express'); //acessando a biblioteca

// Express aplicativo - configurando o acesso as funções 
const app = express(); //acesso as funções da biblioteca

//registrar a vizualização da enenharia
app.set('view engine', 'ejs');


//ouvindo as requisições na porta
app.listen(3001);

// acessando rota
app.get('/', (req, res) =>{
    // passando parametros para o body
    const blogs = [
        {titulo: 'Charmander', conteudo: 'a ponta de seu rabo está constantemente em chamas e se for apagada pode resultar em sua morte.'},
        {titulo: 'Squirtle', conteudo: 'Seu casco reduz a resistência contra a água fazendo com que ele nade mais rápido.'},
        {titulo: 'Bilbasaur', conteudo: 'Ao evoluir o bulbo começa a desabrochar até se tornar uma grande flor na evolução final.'},

    ];

    res.render('index', {titulo: 'Home', blogs});
});

//nova rota
app.get('/sobre', (req, res) => {
    res.render('sobre', {titulo: 'Sobre'});
});

//Redirecionamento de página
app.get('/sobrenos', (req, res) =>{
    res.redirect('/sobre');
});

// rota da criação do conteudo
app.get('/blog/criar', (req, res) =>{
    res.render('criar', {titulo: 'Criar Novo Blog'});
});

//ERRO 404  
app.use((req, res) => {
    res.status(404).render('404', {titulo: '404'});
});