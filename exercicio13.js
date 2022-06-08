//Fazer uma funcao que receba um array e retorne os numeros pares desse array usando o filter

const arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const arrPares = imprimirValoresParesDoArray(arr1);

console.log(arrPares)

function imprimirValoresParesDoArray(arr1){
    
    const arr2 = arr1.filter((x)=>{
        if(x % 2 === 0) return x
    })

    return arr2
}