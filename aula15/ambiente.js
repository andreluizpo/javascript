let num = [5, 8, 2, 9, 3]

num.push(1) // Adiciona um valor no final do vetor
num.sort() // Coloca o vetor em ordem crescente

console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do array é ${num[0]}`)

let pos = num.indexOf(8) // Busca a posição do valor no vetor
if (pos == -1) {
    console.log("O valor não foi encontrado")
} else {
    console.log(`O valor está na posição ${pos}`)
}