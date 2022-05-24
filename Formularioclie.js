class Formularioclie{
    constructor(){
        this.title=createElement("h1");
        this.nombrecliente=createElement("h4");
        this.edad=createElement("h4")
        this.apellido=createElement("h4")
        this.id=createElement("h4")
        this.telefono=createElement("h4")
        this.correo=createElement("h4")
        this.tipodecliente=createElement("h4")
        this.inputN = createInput();
        this.inputE= createInput();
        this.inputA= createInput();
        this.inputID= createInput();
        this.inputT= createInput();
        this.inputC= createInput();
        this.inputTIPCLIEN= createInput();
        this.button = createButton("Registrar Cliente");
    }
    display(){
        this.title.html("Registro de Cliente");
        this.title.position(230,0);
        this.nombrecliente.html("Nombre del cliente:");
        this.nombrecliente.position(50,100);
        this.edad.html("Edad del cliente:");
        this.edad.position(420,100);
        this.apellido.html("Apellido del cliente:");
        this.apellido.position(50,200);
        this.id.html("ID del cliente:");
        this.id.position(420,200);
        this.telefono.html("Telefono del cliente:");
        this.telefono.position(50,300);
        this.correo.html("Correo del cliente:");
        this.correo.position(420,300);
        this.tipodecliente.html("Tipo de cliente:");
        this.tipodecliente.position(298,400);

        this.inputN.position(185,120);
        this.inputE.position(420,140);
        this.inputA.position(187,220);
        this.inputID.position(420,240);
        this.inputT.position(187,320);
        this.inputC.position(420,340);
        this.inputTIPCLIEN.position(265,440);
        this.button.position(292,500);
        
        this.button.mousePressed(()=>{
            cliente.nombrecliente=this.inputN.value();
            cliente.edad=this.inputE.value();
            cliente.apellido=this.inputA.value();
            cliente.id=this.inputID.value();
            cliente.telefono=this.inputT.value();
            cliente.correo=this.inputC.value();
            cliente.tipodecliente=this.inputTIPCLIEN.value();
            cliente.update();
        })
    }
}