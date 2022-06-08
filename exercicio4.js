//Fazer um algoritmo que imprima os numeros pares de 0 a 100 com função

imprimirNumerosParesNoIntervalo(0,100);

function imprimirNumerosParesNoIntervalo(inicio,fim){
    let arr1 = []

    for(let i=inicio; i<=fim; i++){
        if(i % 2 == 0)  arr1.push(i)
    }

    console.log(arr1)
}


