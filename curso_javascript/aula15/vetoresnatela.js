let valores = [4, 7, 9, 2, 6, 1]
valores.sort()
/* Maneira antiga - Consome mais linhas de código
//console.log(valores)
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[5])
console.log(valores[6])
*/

// Maneira nova - Código menor
/*for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// Maneira mais nova e simplificada - Código menor, utilizando 'in'
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}