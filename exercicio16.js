//Fazer uma funcao que receba um array e retorne os numeros primos desse array sem usar o filter

const arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const arrPrimos = imprimirValoresPrimosDoArray(arr1);

console.log(arrPrimos)

function imprimirValoresPrimosDoArray(arr1){
    let arr2 = []

    arr1.forEach((x)=>{
        if(isPrimo(x)) arr2.push(x)
    })

    return arr2
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