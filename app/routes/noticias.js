const dbConnection = require ('../../config/dbConnection'); // ponto ponto (..) volta um nível

module.exports=function(app){

var connection=dbConnection(); //executa

//rota para a página de notícia
app.get('/noticias',function(req,res){
    const mysql=require('mysql'); //importação do módulo mySQL;

       connection.query('select * from noticias', function(error, result){
       if (error){
           console.log(error);
       }
       res.render('noticias/noticias.ejs',{noticias:result}); //envia a resposta na variável result
   //renderização da tela noticia.ejs passando a variável result
   });	
   });
   
} 