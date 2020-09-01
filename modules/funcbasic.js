function modulo(){
//Aula 03
/*
function <nome da função> ( parametros)
{
  bloco de código
}
*/
function somar(){
    var x, y; x = 10; y = 10;
    var soma = x + y;
    console.log(soma);
  }

const somar = function(x,y){
    let soma = x + y;
    return soma;
  }

  var soma = somar(5,6); // chamar a função
  var soma2 = somar("5",6);

  console.log(soma+","+ soma2);

}