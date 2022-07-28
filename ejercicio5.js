let flag = true 
let calc = 0

while (flag) {
  if(calc != 1) { 
    let num = Number(prompt("Inserte un número: "))
    if ( num % 2 == 0 ){
      calc = num/2 
    } else if ( num % 2 != 0 ){
      calc = (num * 3)+1
    }
    console.log("El número resultante es " + calc + ".")
  }else{
    flag = false
  } 
}
