let person = {
  firstName: "Jackson",   /// ENTRADA (chave: valor)
  lastName: "Pires", /// Chave == Atributo ou Propriedade
  canDrive: true,
  age: 42,
  favoriteMovies: ["Matrix", "Interestellar"],
  address: {
    street: "Rua tal",
    number: 1234
  }
};

person.firstName = "Márcio"; // Atualizando
person['lastName'] = "Dantas";

person.city = "Aracaju"; // Criar / Adicionar uma nova propriedade / ENTRADA

let myKey = "age";

// console.log(person[myKey]);

// console.log(  person.firstName  ); ///Acesso com notação de PONTO (Dot Notation)
// console.log(  person["lastName"]  ); // Notação de colchetes (Bracket Notation)
// console.log(  person.city  );
console.log(  person.address.street  );
console.log(  person['address']['street']  );

// for(let key in person){
//   console.log(person[key]);
// }
