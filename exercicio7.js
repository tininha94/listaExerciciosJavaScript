//Fazer um algoritmo que imprima os numeros primos de 0 a 100 sem função

let arr1 = []
let isPrimo = true

for(let numero=0; numero<=100; numero++){
    isPrimo = true

    for(let divisor=2; divisor<numero; divisor++){
        if(numero % divisor === 0){
            isPrimo = false
            break
        } 
    }

    if(isPrimo && numero !== 0 && numero !== 1) arr1.push(numero)
}

console.log(arr1)
