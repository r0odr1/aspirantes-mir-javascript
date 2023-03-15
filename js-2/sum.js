function sum(arreglo = []) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++){
        suma = arreglo[i]+suma
    }
    return suma;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0