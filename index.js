//Aula 04//Modulos
var modulo = require('./modules/modulos.js');
modulo.modulo();
//modularizando orientacao objeto
const Pessoa = require('./modules/objetos/Pessoa.js')

//Aula Orientacao Objeto

const joao = new Pessoa(80,1.75); //instanciando um objeto
console.log( joao.imc() ); 

const pedro = new Pessoa();
pedro.peso = 100;
pedro.altura = 1.6;
console.log( pedro.imc());
