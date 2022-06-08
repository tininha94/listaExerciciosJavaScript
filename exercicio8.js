//Fazer um algoritmo que imprima os numeros primos de 0 a 100 com função

imprimirNumerosPrimosNoIntervalo(0,100)

function imprimirNumerosPrimosNoIntervalo(inicio,fim){
    let arr1 = []

    for(let i=inicio; i<=fim; i++){
        if(isPrimo(i) && i !== 0 && i !== 1) arr1.push(i)
    }
    
    console.log(arr1)
}

function isPrimo(numero){
    if(numero === 0 || numero === 1){
        return false
    }else{
        for(let divisor=2; divisor<numero; divisor++){
            if(numero % divisor === 0) return false
        }
        return true
    }
}
