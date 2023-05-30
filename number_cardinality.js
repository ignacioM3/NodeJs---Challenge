//opte por un switch porque se me hacia mas facil de visualizar que los if uno detras de otro

function number_cardinality(numero) {
    const ultimoDigito = numero % 10;
  
    switch (ultimoDigito) {
      case 0:
        return "zero";
      case 5:
        return "five";
      default:
        if (numero % 2 === 0) {
          return "even";
        } else {
          return "odd";
        }
    }
  }


//lote de datos:
//number_cardinality(100)   -Output: "zero"
//number_cardinality(88)    -Output: "even"
//number_cardinality(155)   -Output: "five"
//number_cardinality(99)    -Output: "odd"

module.exports = number_cardinality;
  
