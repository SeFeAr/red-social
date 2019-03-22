var Item = require('./administrador');
    let administradorinstanciado = new Item(); 
module.exports = class _adm {
   constructor( ) {}
Guardar(req,res) {
    var claveysaltlocal = administradorinstanciado.setPassword(req.body._CLAVE);
    console.log(claveysaltlocal[0]);
   console.log(req.body._CLAVE);
	Item.create(
			{
   NOMBRE: req.body._NOMBRE,
    CLAVE: claveysaltlocal[0],
EMAIL: req.body._EMAIL,
    IMAGEN: req.body._IMAGEN,

             SALT: claveysaltlocal[1]   
            }, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
          else{    Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});}}); }   

    Login(req,res) {
    	Item.find({EMAIL:req.body._EMAIL}, function(err, item) {
          
			if (err){
				res.send(err)}
            
        else{
            
              if(item.length ==0)
                {
                    res.status(400).send({ 
                    message : "Datos incorrectos"   }); 
                }
            else{
            
            console.log(item[0].CLAVE);
            if(administradorinstanciado.validPassword(req.body._CLAVE,item[0].CLAVE,item[0].SALT))
                {
                    item[0].SALT="NO F..ING WAY";
					res.json(item); // devuelve todas las Personas en JSON	
                }
            else
                {
                    res.status(400).send({ 
                    message : "Datos incorrectos"
                }); 
                }}
        
        
        
        }
        
        
        
        
        });}


}