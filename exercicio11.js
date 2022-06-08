//Fazer um funcao que recebe 2 parametros numericos e imprima os valores entre esses numeros

const inicio = 10;
const fim = 35;

imprimirValoreEntreOInvervalo(inicio, fim);

function imprimirValoreEntreOInvervalo(inicio, fim){
    for(let i=inicio+1; i<fim; i++){
        console.log(i)
    }
}