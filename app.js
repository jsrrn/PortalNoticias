const app=require('./config/server');
// Rota para a página principal do app, importando
const rotaHome=require('./app/routes/home')(app);
// Importando o arquivo home dentro de routes e executando-o "(app)"
const rotaAdmin=require('./app/routes/admin')(app);
// Importando o arquivo admin dentro de routes e executando-o "(app)"

const rotaNoticias=require('./app/routes/noticias')(app);
// Importando o arquivo noticias dentro de routes e executando-o "(app)"

const rotaPato=require('./app/routes/pato')(app);
// Pato

//Cria um servidor rodando na porta 3000↴
app.listen('3000',function(){
	console.log('Servidor rodando na porta 3000');


});