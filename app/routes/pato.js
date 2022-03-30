module.exports=function(app){

app.get('/pato', function(req,res) { 
    res.render('noticias/pato.ejs');
    }
)

}