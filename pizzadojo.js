function pizzaOven (estilo,TipoCorteza,Queso,Ingrediente){
    let Pizza={};
    Pizza.estilo= estilo;
    Pizza.TipoCorteza=TipoCorteza;
    Pizza.Queso=Queso;
    Pizza.Ingrediente=Ingrediente;

    return Pizza
}

//crear pizza
let pizza1 = pizzaOven("Estilo Chicago", "tradicional" , ["Morzarella"],["Pepperoni","Salchicha"]);
console.log(pizza1);

let pizza2 = pizzaOven("Lanzada a Mano", "marinara" , ["Morzarella ", "feta"],["Champiñones","aceitunas","cebollas"]);
console.log(pizza2);

let pizza3 = pizzaOven ("Estilo americano", "Napolitana",["Parmezano","Gouda"],["Tocino","Jamon"]);
console.log(pizza3);

let pizza4 = pizzaOven("Hawaiano","Cuatro Quesos",["Roquefort"],["Chorizo","Piña","Jamon"]);
console.log(pizza4);

let Pizza={
    estilo:["Estilo Chicago","Lanzada a Mano","Estilo americano","Hawaiano"],
    Corteza:["tradicional","marinara","Napolitana","Cuatro Quesos"],
    queso:["Morzarella","feta","Parmezano","Roquefort"],
    ingrediente:[["Pepperoni","Salchicha"],["Champiñones","aceitunas","cebollas"],["Tocino","Jamon"],["Chorizo","Piña","Jamon"]],
    
    Combinacion : function(){
        
        console.log("Estilo:       "+this.estilo[Math.floor((Math.random() * 3) + 1)]);
        console.log("Cortza:       "+this.Corteza[Math.floor((Math.random() * 3) + 1)]);
        console.log("Queso:        "+this.queso[Math.floor((Math.random() * 3) + 1)]);
        console.log("ingredientes: "+this.ingrediente[Math.floor((Math.random() * 3) + 1)])
            
    }
}

Pizza.Combinacion();

