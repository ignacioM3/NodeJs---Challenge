function fizz_buzz(number) {
    let resultado = [];
    for (var i = 1; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        resultado.push("FizzBuzz");
      } else if (i % 3 === 0) {
        resultado.push("Fizz");
      } else if (i % 5 === 0) {
        resultado.push("Buzz");
      } else {
        resultado.push(i);
      }
    }
    return resultado;
  }

//Lote de datos
//fizzBuzz(2)  // Output: [1, 2]
//fizzBuzz(5)   // Output: [1, 2, "Fizz", 4, "Buzz"]
//fizzBuzz(9)   // Output: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz"]
//fizzBuzz(15)  // Output: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

module.exports = fizz_buzz;