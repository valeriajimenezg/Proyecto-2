let flag = true 
let cont = 0
let sum = 0
let num

//prom = sum de valores / cantidad de valores
while (flag){
  if(num != 0){
    num = Number(prompt("Inserte un número: "))
    cont = cont + 1
    sum = sum + num
  } else {
    cont = cont - 1
    flag = false
  }
}

console.log("El promedio obtenido fue: " + (sum/cont))