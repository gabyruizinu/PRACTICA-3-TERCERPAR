
function setup(){
  var canvas = createCanvas(1500,800);
  database=firebase.database();
  producto=new Producto();
  form= new Form();
  form.display();
  cliente=new Cliente();
  formularioclie= new Formularioclie();
  formularioclie.display();
}

function draw(){
background("violet")

}
