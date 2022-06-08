//Fazer um algoritmo que imprima os numeros impares de 0 a 100 com função

imprimirNumerosImparesNoIntervalo(0,100);

function imprimirNumerosImparesNoIntervalo(inicio,fim){
    let arr1 = []

    for(let i=inicio; i<=fim; i++){
        if(i % 2 != 0) arr1.push(i)
    }

    console.log(arr1)
}

