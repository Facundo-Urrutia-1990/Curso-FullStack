import * as rls from 'readline-sync'
let n : number= rls.questionInt("ingrese longitud del arreglo : ")
let ordenamiento : number[] = new Array (n)
    for (let i =0 ; i < ordenamiento.length ; i++){
        ordenamiento[i]= rls.questionInt('ingrese valor : ')
    }

function ordenamientodesendente (ordenamiento: number[]): number[]{
    for (let j=0 ; j < ordenamiento.length - 1 ; j++){
        for (let k=0 ; k < ordenamiento.length - 1 ; k++){
            if ( ordenamiento[k] < ordenamiento[k + 1]){
                let aux = ordenamiento[k]
                ordenamiento[k] = ordenamiento [k+1]
                ordenamiento[k + 1] = aux
            }

        }
    }return ordenamiento
}
console.log(ordenamientodesendente(ordenamiento));
