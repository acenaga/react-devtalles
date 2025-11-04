const firstName: string = 'Carlos';
let lastName = 'Ferrer';

let diceNumber = 5;
diceNumber = 3;

const containLetterF = lastName.includes('F');

console.log({ firstName, lastName, diceNumber, containLetterF });

/* const a nivel de variable pesa la mitad que let, ya que no carga
los metodos de reemplazo de datos. cuando usamos const, no podemos
modificar su valor, mientras que let si permite la modificacion. 
Adicional const no nos muestra el tipo de datos, pero podemos hacerlo
agregando : tipo */