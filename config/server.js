const express=require('express');//Importação do express
const app=express();//Execução do express
app.set('view-engine','ejs');//Configuração do ejs como motor de telas (view engine)
app.set('views','./app/views');//Alteração do diretório da pasta views

module.exports=app; //Exportando a configuração do app feita acima