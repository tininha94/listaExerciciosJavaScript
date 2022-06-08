//Fazer uma funcao que receba um array e retorne um novo array e para cada posicao desse array que tiver um numero par retorne o numero com - par na frente e para cada posicao que tenha um impar retorne o numero com - impar na frente e quando for zero retorne a string zero ao invés do numero 0.

const arr1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const arr2 = tratarDadosArray(arr1)

console.log(arr2)

function tratarDadosArray(arr1){
    const arr2 = arr1.map((numero)=> {
        if(numero === 0)
            return "0"
        else if(numero % 2 === 0)
            return numero + " - par"
        else
            return numero + " - impar"
    })

    return arr2
}
