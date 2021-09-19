abstract class Car{
  
    constructor(private carsNumbers:string, public brand:string){
    }
   abstract engine():any;
}

class Porsche extends Car{
    
    public  theModel: string;

    constructor( model:string){
        super("BH8640OT", "Porsche");
        this.theModel = model;
    }
    engine(){
        console.log("Porsche двигатель:B6 twin turbo 24 valve DOHC")
    }
}

class Ferrari extends Car{
    public shortDescription:string;
    public  theModel: string;

    constructor(model:string){
        super("KA9090AX", "Ferrari");
        this.theModel = model;
        this.shortDescription = "Серый, Гибридный бензин, 4.0L";
    }
    engine(){
        console.log("Ferrari двигатель:V8 twin turbocharged")
    }
}

class Lamborghini extends Car{
    public shortDescription:string;
    public  theModel: string;
    public modelYear: string;

    constructor(model:string, ModelYear:string){
        super("AA1111XX", "Lamborghini");
        this.theModel = model;
        this.shortDescription = "Оранжевый, 6.5L";
        this.modelYear = ModelYear
    }
    engine(){
        console.log("Lamborghini двигатель:V8 twin turbocharged")
    }
}



let porsche: Porsche = new Porsche("2007 Porsche CARRERA");
porsche.engine()
console.log(porsche)

let ferrari: Ferrari = new Ferrari("Ferrari SF90 Stradale");
ferrari.engine()
console.log(ferrari)

let lamborghini: Lamborghini = new Lamborghini("Lamborghini Aventador 2011", "2011");
lamborghini.engine()
console.log(lamborghini)


