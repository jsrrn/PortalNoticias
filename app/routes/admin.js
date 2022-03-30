module.exports=function(app){
    //rota para a página de admin/inclusão de notícias
    app.get('/formularioinclusaonoticia',(req,res)=>{ //Funçao de callback, é parametro de outra função
        res.render('admin/form_add_noticia.ejs');
    });


}