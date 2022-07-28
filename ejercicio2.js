let num = Number(prompt("Inserte un número: "))
let cont = 0
let sum = 0

while (cont <= num) {
  if(cont % 2 == 0){
    sum = sum+cont
  }
  cont = cont + 1
}

console.log("La suma de todos los números pares: " + sum)