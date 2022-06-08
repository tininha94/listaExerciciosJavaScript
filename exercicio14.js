//Fazer uma funcao que receba um array e retorne os numeros primos desse array sem usar o filter

const arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const arrImpares = imprimirValoresImparesDoArray(arr1);

console.log(arrImpares)

function imprimirValoresImparesDoArray(arr1){
    let arr2 = []

    arr1.forEach((x)=>{
        if(x % 2 !== 0) arr2.push(x)
    })

    return arr2
}