//Fazer um algoritmo que imprima os numeros pares de 0 a 100 sem função

//primeira solucao - forcando a utilizacao do filter
let arr1 = []

for(let i=0;i<=100;i++){
    arr1.push(i)
}

arr2 = arr1.filter(function(x){
    if(x%2==0) return x
})

console.log(arr2)

//segunda solucao sem a utilizacao do filter
for(let i=0; i<=100; i+=2){
    console.log(i)
}

