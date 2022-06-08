//Fazer uma funcao que receba um array e retorne os numeros impares desse array usando o filter

const arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const arrImpares = imprimirValoresImparesDoArray(arr1);

console.log(arrImpares)

function imprimirValoresImparesDoArray(arr1){
    
    const arr2 = arr1.filter((x)=>{
        if(x % 2 !== 0) return x
    })

    return arr2
}