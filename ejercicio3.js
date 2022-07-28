let flag = true 
let cont = 0
let num

while (flag){
  if(num != 0){
    num = Number(prompt("Inserte un número: "))
    cont = cont + 1
  }else {
    flag = false
  }
}
console.log("La cantidad de números digitados fue: " + cont)