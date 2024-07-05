//Realice un programa que devuelva la potencia de un número. 
//La base y el exponente deben ser ingresados por teclado. 
//Sólo deben admitirse exponentes mayores o iguales a cero. 
//Recuerde que el resultado de un numero elevado a 0 es 1.
//Separe la lógica de calcular la potencia utilizando métodos. 

import * as rls from 'readline-sync'

let base , exp , contador , resultado , resultadoFun: number
base = rls.questionInt("ingrese la base : ")
exp = rls.questionInt("ingrese un exponente igual o mayor que cero : ")

//FUNCION CALCULAR POTENCIA//

function calcularPotencia ( base : number, exp : number) : number {

    if (exp == 0){
    resultado = 1
}else{
    resultado = 1
    for(contador = 1; contador <= exp; contador++)
        
    resultado = resultado * base
}
return resultado

}
//FIN FUNCION//


//PROGRAMA/

while (exp < 0){
    exp = rls.questionInt("El exponente ingresado es menor a cero, ingrese un exponente igual o mayor que cero : ")
}
resultadoFun = calcularPotencia (base , exp)
console.log(" el resultado de " + base + " elevado a la potencia " + exp + " es : " + resultadoFun)


//FIN PROGRAMA//