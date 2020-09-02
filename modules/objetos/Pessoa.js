//Aula 05//Orientação a Objetos
/*
class <NomeClasse>{

}
*/
class Pessoa {
  constructor(peso, altura){
    this.peso = peso;
    this.altura = altura;
  }
  imc(){ // calcular o indice de massa corporal
    let imc = this.peso / (this.altura * this.altura);
    return imc;
  }

}
module.exports = Pessoa; 