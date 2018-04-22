module.exports = function(application){
    application.get('/', function(req, res){
      //  res.send("Teste");
      //es.render("index");
      application.app.controllers.index.home(application, req, res);
    });
}
