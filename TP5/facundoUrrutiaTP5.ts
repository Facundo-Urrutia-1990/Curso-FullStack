import * as fs from 'node:fs';


const precios: number[] =[525, 3500, 400, 1999];
const productos: string[] =["leche", "galletitas", "harina", "queso"]

let preciosString : string = ""
let productosString : string=""
let i :number
for(i=0 ; i< precios.length; i++){
    
    preciosString += `${precios[i]} `

}
for(i=0 ; i< productos.length; i++){
    
    productosString += `${productos[i]} `

}
fs.writeFileSync('./precios.txt', preciosString)
fs.writeFileSync('./productos.txt', productosString)


const auxPrecios: string= fs.readFileSync('./precios.txt','utf8')
const auxProductos: string= fs.readFileSync('./productos.txt','utf8')
const auxPrecios1 : string= auxPrecios.trim()
const auxProductos1 : string= auxProductos.trim()
let arrPreciosString: string []=auxPrecios1.split(" ")
let arrProductos: string []=auxProductos1.split(" ")
let arrPrecios : number [] = new Array(arrPreciosString.length)
for(i=0 ; i< arrPreciosString.length; i++){
    
    arrPrecios[i]= parseInt(arrPreciosString[i])

}
console.log(arrPrecios);
console.log(arrProductos);

