
let num = [7, 9, 4, 8, 1]

num[5] = 2  
num.push(6) 
// num.length  Conta o número de elementos
// num.sort()  Organiza os elementos em ordem crescente
console.log(`Os vetores são ${num}`)
console.log(`Nossos vetores em ordem crescente são ${num.sort()}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 9 está na posição ${pos}`)
}
