let num1 = Number(prompt("Inserte el primer número:"))
let num2 = Number(prompt("Inserte el segundo número "))
let listNums = []
let cont 
let higherNum

if (num1 < num2) {
  higherNum = num2
  cont = num1
} else {
  higherNum = num1
  cont = num2
}

alert("El  número (" +  higherNum + ") es el mayor y el numero ("+cont+") es el menor.")

while (cont <= higherNum){
  listNums.push(cont)
  cont = cont+1
}

console.log(listNums)

