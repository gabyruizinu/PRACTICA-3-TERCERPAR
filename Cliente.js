class Cliente {
    constructor(){
       this.nombrecliente=null;
       this.apellido=null;
       this.id=null;
       this.edad=null;
       this.telefono=null;
       this.correo=null;
       this.tipodecliente=null;
    }
 update(){
     database.ref('cliente').set({
      'nombre cliente':  this.nombrecliente,
      'apellido':  this.apellido,
      'id':  this.id,
      'edad': this.edad,
      'telefono':  this.telefono,
      'correo':  this.correo,
      'tipo de cliente':  this.tipodecliente
     })
 }   
}