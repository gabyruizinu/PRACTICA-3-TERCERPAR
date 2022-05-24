class Form{
    constructor(){
        this.title=createElement("h1");
        this.nombreproducto=createElement("h4");
        this.departamento=createElement("h4")
        this.precioproducto=createElement("h4")
        this.descripcion=createElement("h4")
        this.stock=createElement("h4")
        this.inputN = createInput();
        this.inputD= createInput();
        this.inputP = createInput();
        this.inputDes = createInput();
        this.inputS = createInput();
        this.button = createButton("Registrar producto");
    }
    display(){
        this.title.html("Registro Producto");
        this.title.position(1000,0);
        this.nombreproducto.html("Nombre del producto:");
        this.nombreproducto.position(850,100);
        this.departamento.html("Categoria o Departamento:");
        this.departamento.position(1260,100);
        this.precioproducto.html("Precio del producto:");
        this.precioproducto.position(850,210);
        this.descripcion.html("Descripcion del producto:");
        this.descripcion.position(1260,210);
        this.stock.html("Stock:");
        this.stock.position(1110,329);


        this.inputN.position(850,140);
        this.inputD.position(1260,140);
        this.inputP.position(850,250);
        this.inputDes.position(1260,250);
        this.inputS.position(1050,370);
        this.button.position(1070,470);
        
        this.button.mousePressed(()=>{
            producto.nombreproducto=this.inputN.value();
            producto.departamento=this.inputD.value();
            producto.precioproducto=this.inputP.value();
            producto.descripcion=this.inputDes.value();
            producto.stock=this.inputS.value();
            producto.update();
        })
    }
}