var controllerAdministrador = require('./controlleradministrador.js');

 module.exports = function(app){
   
     var claseadm = new controllerAdministrador();
    
    app.post('/api/nuevoadm',  claseadm.Guardar);
    
    app.post('/api/loginadm',  claseadm.Login);

 	app.get('*', function(req,res) {//localhost:8080
 	res.sendfile('./login.html'); //Carga única de la vista
 	});
 
 };