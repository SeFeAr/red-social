class _adm {
   constructor(  _ID,
         _NOMBRE,
    _CLAVE,
        _EMAIL,
         _IMAGEN) {
this._ID = _ID;
       this._NOMBRE=_NOMBRE ;
     this._CLAVE=_CLAVE;
         this._EMAIL=_EMAIL;
     this._IMAGEN = _IMAGEN;
        
   }
Guardar() {
   var objetoaenviar = this;

  return new Promise(function(resolve, reject) {

       
      try {

          
          
          
          
               var xhr = new XMLHttpRequest();
xhr.open('POST', '/api/nuevoadm');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
      
     
    

  });
    
}
    

    
    Login() {
         var objetoaenviar = this;
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
      
      try {
           var xhr = new XMLHttpRequest();
xhr.open('POST', '/api/loginadm');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar)); 
}
catch(err) {
     reject(err.message);

}
      
     
    

  });
    
    
}}
    
   
