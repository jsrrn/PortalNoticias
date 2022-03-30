module.exports=function(app){
    //rota para a pagina principal do app
    app.get('/',function(req,res){ //Funçao de callback, é parametro de outra função
        res.render('home/index.ejs');
    });
}