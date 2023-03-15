function maxIndice(numero) {
    if (numero.length === 0) {
      return -1;
    }
    let mayor = numero[0];
    for (let i = 0; i < numero.length; i++) {
      if (numero[i] > mayor[i]) {
        mayor = numero[i];
      }
      return mayor;
    }
  }
  
  console.log(maxIndice([1, 3, 2])); // 1
  console.log(maxIndice([10, 9, 8, 7, 6, 5, 4])); // 10
  console.log(maxIndice([])); // -1
