let arrMax : number [] = [4,7,93,1,45,67,23,29,78,11,16]
let i : number
let maximo : number = 0

//PROGRAMA//

    for (i = 0 ; i < 12 ; i++ ){
         
        if (arrMax[i] > maximo){

            maximo = arrMax[i]
        }
    }
    
console.log(maximo);
parImpar(maximo)

//FUNCION PARIMPAR//

function parImpar (maximo : number )  {

    if (maximo % 2 == 0){
        console.log("El maximo es un numero par")
    }else{
        console.log("El maximo es un numero impar")
    }

}
