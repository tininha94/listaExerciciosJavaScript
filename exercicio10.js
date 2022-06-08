//Fazer um algoritmo que imprima os numeros multiplos de 5 de 0 a 100 com função

const inicio = 0
const fim = 100
const multiplo = 5

imprimirNumerosMultiplosNoIntervalo(inicio, fim, multiplo)

function imprimirNumerosMultiplosNoIntervalo(inicio, fim, multiplo){
    let arr1 = []

    for(numero=inicio; numero<=fim; numero++){
        if(isMultiplo(numero,multiplo)) arr1.push(numero)
    }

    console.log(arr1)
}

function isMultiplo(numero, multiplo){
    if(numero % multiplo === 0){
        return true
    }else{
        return false
    }
}