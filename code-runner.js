// console.log("Trybe");
// console.log("Trybe1");
// console.log("Trybe2");
// console.log("Trybe3");

// let cohort = 16;        // Number  // O igual (=) em JS é o operador de atribuição
// let company = "Trybe";  // String

// cohort = "Turma 16 - B"; // String // Tipagem Fraca

// console.log(cohort);
// console.log(company);

// let myBox;  // Undefined

// myBox = null;  // NULL  

// console.log(myBox);


// Condicionais

// let number1 = 23;
// let number2 = 45;

// if(number1 > number2){  // SE
//   console.log("The first number is bigger!"); // VERDADEIRA - SIM
// } else { // SENÃO
//   console.log("The second number is bigger!");  // FALSA - NÃO
// }

// Condicional Aninhada

// let age = 17;

// age += 1; // Operador aritmético de atribuição ->>> age = age + 1

// console.log(age);

// if(age > 18){
//   console.log("Agora vc pode dirigir!");
// } else if (age < 18){
//   console.log("Vc não pode dirigir ainda!");
// } else {
//   console.log("Atenção vc possui a carteira provisória!");
// }

// let youWon = true;  // True ou False  // Boolean // Boleano // Bool

// if(youWon){  /// X == true
//   console.log("Congratulations!!");
// } else {
//   console.log("Try Again!!");
// }


/// Comparação

//  O igual (=) é atribuição ----> let a = 10;
// O igual igual (==) é comparação de valores
// O igual igual igual (===) Strict Equal, compara valor e TIPO

// let myNumber = 25; // Number
// let myString = "25";  // String

// console.log(myNumber === myString);

// Case switch

const expr = 'Grapes';

switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log('Não é nenhuma das frutas');
}
