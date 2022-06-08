//Fazer um algoritmo que imprima os numeros multiplos de 5 de 0 a 100 sem função

let arr1 = []

for(let i=0; i<=100; i++){
    if(i % 5 === 0) arr1.push(i)
}

console.log(arr1)