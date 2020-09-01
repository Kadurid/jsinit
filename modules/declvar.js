function modulo(){
  var x = 6;
 
  console.log(x);
  const y = "a"; // constante
  y="b";
  console.log(y);
  //VARIAVEL GLOBAIS E LOCAIS
  {
    let z = 4;
    console.log(x);
    console.log(y);
    console.log(z);
  }
  console.log(z);
}
modulo.exports = {modulo};