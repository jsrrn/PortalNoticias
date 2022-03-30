const mysql=require('mysql'); //Importaçao do módulo MySQL

module.exports=function(){
return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'ifms',
        database:'portal_noticias'
}) //Cria conexão com o banco de dados portal_noticias
}