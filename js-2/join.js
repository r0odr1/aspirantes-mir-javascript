function join (arr){
    let cadena = "";
    for (let i = 0; i < arr.length; i++){
        cadena = cadena + " " + arr[i];
    }return cadena;
}

console.log(join([1, 2, 3])) // 6
console.log(join([10, 8, 12, 5])) // 35
console.log(join([])) // 0
console.log(join(["Hola", "mundo"]));